const { test } = require("node:test");
const assert = require("node:assert/strict");
const { buildSync } = require("../artifacts/api-server/node_modules/esbuild");
const { mkdirSync } = require("node:fs");
const path = require("node:path");
const cache = path.resolve(
  __dirname,
  "../artifacts/api-server/node_modules/.cache/newsletter-audit",
);
mkdirSync(cache, { recursive: true });
buildSync({
  entryPoints: [
    path.resolve(__dirname, "../artifacts/ph-navigator/build/socialPages.ts"),
  ],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: path.join(cache, "pages-plugin.cjs"),
  logLevel: "silent",
});
const { involvementSocialPages } = require(
  path.join(cache, "pages-plugin.cjs"),
);
const fixture =
  '<html><head><meta charset="UTF-8" /><title>Generic</title><meta name="description" content="Generic" /><meta property="og:title" content="Generic" /></head><body><script src="/repo/assets/app.js" type="module"></script></body></html>';
function build(origin) {
  const plugin = involvementSocialPages("/repo/", origin);
  const bundle = { "index.html": { type: "asset", source: fixture } };
  const pages = [];
  plugin.generateBundle.handler.call(
    {
      emitFile: (file) => pages.push(file),
      error: (message) => {
        throw new Error(message);
      },
    },
    {},
    bundle,
  );
  return [
    { fileName: "index.html", source: bundle["index.html"].source },
    ...pages,
  ];
}
test("every canonical route gets static HTML with one title, description and production CSP", () => {
  const pages = build();
  assert.equal(pages.length, 35);
  assert.equal(new Set(pages.map((p) => p.fileName)).size, 35);
  for (const { source } of pages) {
    assert.equal((source.match(/<title>/g) || []).length, 1);
    assert.equal((source.match(/name="description"/g) || []).length, 1);
    assert.match(source, /http-equiv="Content-Security-Policy"/);
    assert.doesNotMatch(
      source,
      /rel="canonical"|property="og:url"|property="og:image"/,
    );
    assert.match(source, /src="\/repo\/assets\/app.js"/);
  }
});
test("configured origin preserves repository base for crawlers and sharing images", () => {
  const pages = build("https://example.org");
  const feedback = pages.find(
    (p) => p.fileName === "get-involved/feedback/index.html",
  ).source;
  assert.match(
    feedback,
    /rel="canonical" href="https:\/\/example.org\/repo\/get-involved\/feedback"/,
  );
  assert.match(
    feedback,
    /property="og:image" content="https:\/\/example.org\/repo\/opengraph.png"/,
  );
  assert.match(feedback, /<title>[^<]+ \| PH Navigator<\/title>/);
});
test("unsafe or path-bearing public origins fail the build", () => {
  for (const origin of [
    "http://example.org",
    "https://example.org/path",
    "https://user:pass@example.org",
    "https://example.org/?q=x",
    "https://example.org/#fragment",
  ]) {
    assert.throws(() => involvementSocialPages("/", origin));
  }
});
