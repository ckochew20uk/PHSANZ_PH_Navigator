# PH Navigator — informational audit and Australian localisation

**Desk audit completed:** 3 November 2026, Australia/Sydney. **Source baseline:** main commit `3f460a1bef8a72519d43b0df342da3a3f729d47f`. **Branch:** `audit/informational-review`.

This is a review of the repository’s information, a PHA UK coverage comparison and an Australian evidence/localisation assessment. It is **not clinical certification**, evidence that the live website matches this checkout, or approval from either advisory panel. No medical website text, directory entries, downloadable resources or participation services were changed. Proposed corrections are ready for review rather than silently published.

The content has a useful foundation: clear patient journeys, understandable explanations, appointment questions, pacing advice and honest development placeholders. Its main weaknesses are clinical precision, Australian eligibility detail, article provenance and depth in important patient questions. More main-navigation sections are not the answer; improve the existing journeys and add selected, well-linked articles.

## What was examined

| Inventory | Result | Evidence |
| --- | ---: | --- |
| Canonical website routes | 35 | [Page inventory](informational-audit/page-inventory.csv) |
| Unique route implementation files | 30, plus the not-found page | [Full inventory](informational-audit/inventory.json) |
| Substantive patient/professional articles | 14 | Inventory identifies these separately from hubs/governance pages |
| Planned resource records | 22 | [Resource inventory](informational-audit/planned-resources.csv) |
| Clinical PDF files in public assets | 0 | The brand ZIP is not a clinical resource; the question worksheet is a working print page, not a published PDF |
| Specialist-directory records | 18 | [Directory reconciliation](informational-audit/directory.csv) |
| Source-register entries | 68 | [Source register and access limits](informational-audit/sources.md) |

The source register contains 33 PHA UK benchmark/discovery entries, five international clinical evidence entries, 28 Australian authority/service entries, one supplementary New Zealand emergency source and one unresolved PBS access check. These counts are **not 68 fully appraised publications**: each entry states whether its body, PDF text, catalogue description or indexed excerpt was inspected, or retrieval was unavailable.

The review included article copy, hub notes, referenced home/journey/community/governance components, emergency/footer text, search descriptions, planned-resource metadata, professional guidance and all directory records. Source locations and exact excerpts are retained. The article inventory is complete for this repository snapshot; it is not an exhaustive crawl of every PHA UK news item, historical magazine, video transcript or PDF.

## Main findings

The [complete findings and proposed corrections](informational-audit/proposed-corrections.md) contain **39 findings**: **21 P1**, **17 P2** and **one P3**. These include verified discrepancies, qualifications, safety omissions, access/localisation issues and editorial judgements; they are not 38 demonstrated clinical errors.

- **P1:** resolve or clinically adjudicate before promoting/republishing the affected material. This includes safety omissions and important access misunderstandings, not an assertion of imminent harm from every item.
- **P2:** substantive clarification, localisation or patient-communication improvement.
- **P3:** editorial hygiene that should be corrected before it becomes a public claim.

Every finding has its own source location, reason, proposed wording/action, evidence IDs, suggested reviewer role, confidence and publication gate. [CSV](informational-audit/findings.csv) and [JSON](informational-audit/findings.json) versions support tracking.

### Clinical definitions and treatment explanations

The clearest numerical discrepancy is the site’s **PVR ≥2 WU** statement. The 2024 specialist definition uses **PVR >2 WU**, together with mPAP >20 mmHg and PAWP ≤15 mmHg for pre-capillary PH. Neither wedge pressure nor a single measurement identifies Group 1 PAH or establishes medicine eligibility. INF-01/02 propose a precise, contextual explanation. [2024 definition/classification paper](https://doi.org/10.1183/13993003.01324-2024)

The BNP/NT-proBNP paragraph also needs a terminology correction: the tests are related but not identical, and NT-proBNP is an inactive fragment rather than the active hormone (INF-39). This does not imply that a biomarker result alone diagnoses deterioration or predicts an individual’s prognosis.

The PDE-5 explanation incorrectly describes increased nitric-oxide production rather than reduced cGMP breakdown. Australian medicines information supports correction and highlights the separate need for an interaction warning: a general combination-therapy sentence should not imply that any two listed medicines can be combined. See INF-03–06 and the current [Revatio](https://www.safetyandquality.gov.au/medicine-finder/revatio) and [Adempas](https://www.safetyandquality.gov.au/medicine-finder/adempas) information.

Treatment coverage needs a currency review. A TGA [Winrevair assessment](https://www.tga.gov.au/resources/auspar/winrevair) and a [September 2026 ERS PAH treatment update](https://publications.ersnet.org/content/erj/early/2026/09/03/1399300301178-2026) were identified. The existing four-class summary omits a newer pathway. **The full 2026 guideline and a definitive current sotatercept PBS listing were not retrieved.** The draft therefore flags a review task and does not assert funded access, dosing, local adoption or detailed unseen recommendations (INF-07).

Other important issues are the blanket no-cure language versus the site’s CTEPH explanation, an automatic RHC implication after a suggestive echo, causal-group simplifications and deterministic inheritance wording. The proposed changes preserve helpful explanations while making their limits explicit (INF-08–14). The 2022 guideline remains a diagnostic/classification reference; it is not described as the latest treatment update.

### Safety and everyday life

The diet, exercise, travel, wellbeing and carer pages need a joined-up safety review:

- Prescribed fluid/salt limits and weight-change triggers should be individualised. The sodium-to-salt conversion itself is supported and is **not** an arithmetic error. [Food Standards Australia New Zealand](https://www.foodstandards.gov.au/consumer/nutrition/sodium-salt/about-sodium-salt)
- Exercise advice to stop and rest needs a distinction between an individual plan, contacting the treating team and emergency assessment. Activity examples should not become a universal safe-sport list.
- Anxiety guidance must not invite readers to dismiss new or worsening cardiopulmonary symptoms as anxiety. [Healthdirect breathlessness guidance](https://www.healthdirect.gov.au/symptoms/shortness-of-breath)
- Generic in-flight hydration advice can conflict with an individual fluid restriction. Airline equipment/clearance/battery rules should be linked to current operating-carrier information, not expressed as one universal FAA/percentage rule. [Qantas Australia oxygen requirements](https://www.qantas.com/en-au/travel-information/specific-needs-assistance/oxygen)
- The warning about continuous prostacyclin interruption is important and should remain. It needs a written, medicine/device-specific failure and backup plan, not improvised online instructions.

INF-15–21 supply review drafts. They intentionally do not prescribe new doses, fluid targets, oxygen flows or pump procedures.

### Australian systems and practical support

The financial and carer information uses relevant Australian systems, but several explanations could create false expectations:

- **NDIS:** remove the unsupported “many patients” claim; include age/residence and access boundaries; replace worst-days-only advice with accurate evidence of function and variation (INF-22). [NDIS eligibility](https://www.ndis.gov.au/applying/eligibility-requirements/how-check-your-eligibility) and [evidence guidance](https://www.ndis.gov.au/applying/gathering-evidence/how-gather-evidence)
- **PBS:** the official PAH pathway specifies physician expertise, hospital arrangements and item restrictions, rather than the site’s blanket approved-PH-centre rule. CTEPH has a separate pathway. Registration, subsidy and supply must remain distinct (INF-23). [Services Australia PAH arrangements](https://www.servicesaustralia.gov.au/pulmonary-hypertension-arterial?context=20)
- **DSP:** inability to work a given number of hours is not the sole test; medical and non-medical requirements apply (INF-24). [Services Australia DSP rules](https://www.servicesaustralia.gov.au/general-medical-rules-for-disability-support-pension?context=22276)
- **Carer support:** Carer Payment does not require all recipients to be unable to work. Tailored packages are not automatic cash grants; routine service hours and emergency-respite access differ (INF-25/26). [Working while receiving Carer Payment](https://www.servicesaustralia.gov.au/working-while-you-get-carer-payment?context=21816), [Carer Gateway packages](https://www.carergateway.gov.au/help-and-support/caring-me/available-support-carers/tailored-support-packages) and [respite](https://www.carergateway.gov.au/help-and-support/caring-me/available-support-carers/planned-emergency-respite)
- **Aged care/legal/travel:** age pathways, medical decision-maker documents and travel-assistance eligibility need jurisdiction-specific qualification (INF-27–29). The existing Medicare ten-individual-session concept is supported; improve practitioner/referral/cost precision rather than incorrectly labelling it obsolete (INF-30).

Australian policy claims should link to responsible authorities and carry a verification date. Do not import UK welfare, NHS, DVLA, insurer or home-oxygen processes.

### Directory and urgent-support localisation

The inspected PHSANZ reference has **25 registry-participating referral centres**, compared with 18 Navigator records: **14 shared names**, **11 reference entries missing from Navigator** and **four Navigator entries not found on that reference**. This is a reconciliation result, not proof that four services are inappropriate or that registry participation equals accreditation. The missing entries include adult regional/metropolitan services and a separate New Zealand paediatric service. [PHSANZ reference](https://www.phsanz.org/resources/expert-referral-centres/)

Westmead Children’s Hospital’s current published switchboard differs from Navigator’s number; a second difference at Royal Children’s Hospital may be a clinic-versus-switchboard distinction. Only Westmead was additionally checked against its [provider contact page](https://www.schn.health.nsw.gov.au/about/contact/childrens-hospital-westmead). No hospital was called, and the other records are reference comparisons rather than operational contact validation. INF-31/32 and the directory CSV state the next checks.

Emergency and emotional-support blocks need explicit country labels (INF-33). Australia’s medical emergency number is 000; New Zealand’s is 111. Australian benefit/support pages should not imply New Zealand coverage. This audit includes that basic boundary check, **not full New Zealand localisation**. [New Zealand emergency authority](https://www.police.govt.nz/call-111)

### Provenance, tone and honest resource status

INF-34–38 address unsupported self-endorsement, source/review records, search promises, latent template metadata, unsupported professional guideline titles and categorical carer/prognosis language.

No clinical review dates should be invented. The resource catalogue’s old template dates/page counts are **not currently displayed as completed review dates**; their presence is a future editorial-data risk, not a fabricated current patient-facing approval claim. The 22 items remain planned. The working question print page should be recognised as useful without presenting its unbuilt PDF counterpart as available.

Governance pages correctly state that panels and review workflows are developing. Retain the user-confirmed panel leads, proposed-partner boundaries, contact placeholder and closed participation routes. Lived-experience tone recommendations need actual patient/carer review; no stories or feedback findings have been invented.

## Coverage and development priorities

The [26-topic coverage matrix](informational-audit/coverage-and-gaps.md) distinguishes absent information, partial explanations and deliberately unbuilt resources. It includes proposed location, source links, a development brief and a review/activation gate for each topic. It is **not a request to create 26 new top-level sections**.

The most important additions are:

1. A concise symptom/contact action plan and medicine-safety guide, including continuous-infusion contingencies.
2. Pregnancy/contraception/reproductive decision support and a fuller CTEPH pathway.
3. A calm first-days guide and an explanation of PH groups versus functional class/risk/test trends.
4. Home-oxygen safety and clearly separated adult/paediatric scope.
5. Practical expansion into fatigue, intimacy, work, driving, genetics, supportive care, prevention and rural access, using Australian evidence and lived-experience priorities.
6. Genuine culturally appropriate review, accessible formats and language pathways, rather than invented representation or unvalidated automatic translation.

Community stories, downloadable materials, surveys and focus groups remain development items subject to the existing consent, ownership and operational gates. PHA UK’s forums/listening services, donations and membership model are **not** service gaps that PH Navigator must reproduce. The agreed publishing-only social strategy is preserved.

Selected supported/qualified claims are recorded in [the retained-claims check](informational-audit/retained-claims.md). This is not an automatic approval of every detail in those articles.

## How PHA UK was used, and its limits

PHA UK is valuable for topic coverage and examples of patient-facing resource types. It is not the final authority for an Australian entitlement, prescribing rule or every clinical statement.

The inspected material includes topic pages, medicine/support indexes, publication descriptions, the digital-library landing and three PDFs: a 2018 functional-class leaflet, a 2024 CHD/PH information-needs survey and a 2023 appointment-preparation form. PDF text was inspected; no complete visual/accessibility appraisal is claimed. The CHD survey is a particular UK respondent population, not Australian prevalence or PH Navigator feedback.

Several important boundaries emerged:

- Some mental-health programmes explicitly describe UK eligibility. Do not promise Australian access or copy their workbooks. [Worry programme](https://www.phauk.org/support/self-help-programmes/overcoming-worry-anxiety/), [low-mood programme](https://www.phauk.org/support/self-help-programmes/overcoming-depression-low-mood/)
- The pregnancy page’s undifferentiated mortality range should not be transplanted into new local copy without contemporary specialist appraisal. Finding an older statement is a reason to check evidence, not a licence to replace it with another unsourced percentage.
- **EmPHasis-10 is not a free-to-republish website survey.** Its landing page restricts the offered versions’ use and reserves copyright. No instrument was copied, scored, digitised or enabled. [Questionnaire conditions](https://www.phauk.org/pha-uk-resources/emphasis-10-questionnaire/)
- Full booklets were not inferred from product descriptions. Digital flipbooks, historical magazines, external videos and `phocusonlifestyle.org` were not exhaustively reviewed. That separate domain was recorded as an external link, not silently included in the requested within-domain corpus.
- Detailed surgical/subcutaneous pages and the publications catalogue repeatedly timed out; sitemap XML was unsupported. Their discovery/metadata is recorded without claiming completed detailed appraisal.

The source register records these limits individually. No PHA UK books, questionnaires, graphics or large text extracts were copied into this repository. Original drafts and external links are the default; reproduction requires permission/rights verification.

## Review and implementation order

| Batch | Concrete review package | Completion condition |
| --- | --- | --- |
| A — safety first | INF-01/02, 05/06, 09, 13–21, 33; action plan, reproductive and medicine-safety briefs | PH clinicians and relevant nurse/pharmacist reviewers approve precise advice and escalation wording |
| B — Australian navigation | INF-22–32 and GAP-12/13/19/26 | Policy/service owner checks current conditions and provider contacts; country labels are consistent |
| C — clinical depth/currency | Remaining definitions/treatment items, newer guidance and CTEPH/functional-class briefs | Full relevant guideline/PI review, local access verification and recorded clinical approval |
| D — patient relevance and expansion | GAP matrix priorities, INF-38, everyday life and accessibility | Lived-experience and appropriate cultural/language review; genuine feedback only, no unauthorised recruitment |
| E — publishing assurance | INF-34–37, source footer template and real downloadable files | References, scope, version, review status, copyright and link checks complete; no placeholder status silently upgraded |

Dr Christopher Chew and Tharuka Kossinna are the user-confirmed panel leads; these are proposed review packages for their respective structures, **not assignments sent to them or evidence they reviewed this work**. Additional specialist/social-work/legal/cultural reviewers are suggested roles, not invented appointments. No contact or recruitment was undertaken.

A publication-ready article should record title, intended audience, PH subtype/age/jurisdiction scope, source versions, actual reviewer/approval record, review date and next trigger. Suggested maintenance policy: check medicine/access/service changes at publication and frequently thereafter; review stable explanatory content on a scheduled cycle agreed by the owner. These are proposed editorial controls, not an already-operating service or guaranteed response schedule.

## Verification and unresolved work

- Route/resource/directory counts were extracted from the source and reconciled with every inventory row.
- Every finding excerpt and line location was checked against the frozen baseline; all finding/gap source IDs resolve to the register.
- JSON/CSV exports, relative report links and source-file links were validated. Proposed corrections were checked for duplicated promises, Australian/NZ scope and accidental service activation.
- The directory arithmetic was cross-checked; a differing reference number is not automatically labelled wrong.
- Supported items were retained: sodium-to-salt conversion, the Medicare individual-session concept, the value of specialist-guided exercise, the infusion warning, appointment questions and explicit development labels.
- **Outstanding:** full-text clinical appraisal where retrieval failed, current medicine/PBS/supply details, state-by-state policy details beyond the inspected examples, provider confirmation, clinical/lived-experience/legal/cultural review, comprehension testing and final publication approval. No build or browser regression suite is claimed for this documentation-only audit.

The previous [technical audit PR #18](https://github.com/ckochew20uk/PHSANZ_PH_Navigator/pull/18) is separate and was not merged into this audit branch. It overlaps resource search wording and inactive professional controls; reconcile those changes when implementing. This report assesses main’s informational content, not an assumption that the technical branch is live.

The integrity check is reproducible with `python docs/informational-audit/validate.py`.
Its [recorded result](informational-audit/verification.json) confirms 60 exact source
locations, 257 relative document links and the exported inventory arithmetic.
It does not validate external service availability or clinical approval.

## Review files

- [Complete findings, reasoning and proposed wording](informational-audit/proposed-corrections.md)
- [Findings CSV](informational-audit/findings.csv) · [JSON](informational-audit/findings.json)
- [Coverage matrix and development briefs](informational-audit/coverage-and-gaps.md) · [CSV](informational-audit/gaps.csv) · [JSON](informational-audit/gaps.json)
- [Page inventory](informational-audit/page-inventory.csv) · [Planned resources](informational-audit/planned-resources.csv) · [Full inventory JSON](informational-audit/inventory.json)
- [Directory comparison](informational-audit/directory.csv) · [JSON](informational-audit/directory.json)
- [Source register](informational-audit/sources.md) · [JSON](informational-audit/sources.json)
