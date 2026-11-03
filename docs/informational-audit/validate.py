"""Read-only integrity check of the informational audit, not clinical validation.

Run from any directory: python docs/informational-audit/validate.py
The original excerpts are checked against the recorded git baseline so later
approved content corrections do not erase the audit's historical evidence.
"""
import csv
import json
import re
import subprocess
from collections import Counter
from pathlib import Path
from urllib.parse import unquote, urlparse

ROOT = Path(__file__).resolve().parents[2]
DATA = Path(__file__).resolve().parent
BASELINE = "3f460a1bef8a72519d43b0df342da3a3f729d47f"


def original(file):
    return subprocess.check_output(["git", "show", f"{BASELINE}:{file}"], cwd=ROOT, text=True)


def read(name):
    return json.loads((DATA / name).read_text())


def csv_rows(name):
    with (DATA / name).open(newline="") as handle:
        return list(csv.DictReader(handle))


findings = read("findings.json")["findings"]
sources = read("sources.json")["sources"]
gaps = read("gaps.json")["gaps"]
inventory = read("inventory.json")
directory = read("directory.json")
ids = {source["id"] for source in sources}
assert len(ids) == len(sources) == 68
assert all(urlparse(source["url"]).scheme == "https" for source in sources)
assert len(findings) == len({f["id"] for f in findings}) == 39
assert Counter(f["priority"] for f in findings) == {"P1": 21, "P2": 17, "P3": 1}
excerpts = 0
for finding in findings:
    assert finding["source_ids"] and set(finding["source_ids"]) <= ids
    assert finding["status"] == "Proposed only; not applied or clinically approved"
    for location in finding["locations"]:
        source = original(location["file"])
        position = source.index(location["excerpt"])
        assert source[:position].count("\n") + 1 == location["line"], finding["id"]
        excerpts += 1
assert len(gaps) == len({g["id"] for g in gaps}) == 26
for gap in gaps:
    assert set(gap["benchmark_source_ids"] + gap["local_source_ids"]) <= ids
paths = {r["path"] for r in inventory["routes"]}
app_paths = {p for p in re.findall(r'<Route\s+path="([^"]+)"', original("artifacts/ph-navigator/src/App.tsx")) if p == "/" or not p.endswith("/")}
assert paths == app_paths and len(paths) == 35
assert len({r["file"] for r in inventory["routes"]}) == 30
assert len(inventory["planned_resources"]) == 22
for route in inventory["routes"]:
    assert (ROOT / route["file"]).is_file()
assert directory["navigator_entries"] == 18
assert directory["shared_names"] + directory["navigator_not_found_on_reference"] == 18
assert directory["shared_names"] + directory["reference_missing_from_navigator"] == 25
assert len(directory["records"]) == 29
for name, expected in [("findings.csv", 39), ("gaps.csv", 26), ("directory.csv", 29), ("page-inventory.csv", 35), ("planned-resources.csv", 22)]:
    assert len(csv_rows(name)) == expected, name
relative_links = 0
for document in [ROOT / "docs/informational-audit.md", *DATA.glob("*.md")]:
    for target in re.findall(r"\]\(([^)]+)\)", document.read_text()):
        if urlparse(target).scheme or target.startswith("#"):
            continue
        file, _, anchor = target.partition("#")
        resolved = (document.parent / unquote(file)).resolve()
        assert resolved.exists(), (document, target)
        if resolved.name == "sources.md" and anchor:
            assert anchor.upper() in ids, (document, target)
        relative_links += 1
print(json.dumps({"result": "passed", "baseline": BASELINE, "routes": 35, "planned_resources": 22,
                  "findings": 39, "source_entries": 68, "coverage_topics": 26,
                  "exact_source_locations": excerpts, "directory_rows": 29,
                  "relative_document_links": relative_links,
                  "limits": "Integrity only: does not establish clinical approval, external URL health or provider availability."}, indent=2))
