// Isolated regression tests: all provider traffic is mocked; no email is sent.
const { test } = require("node:test");
const assert = require("node:assert/strict");
const { buildSync } = require("../artifacts/api-server/node_modules/esbuild");
const { mkdirSync } = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "..");
const cache = path.join(
  root,
  "artifacts/api-server/node_modules/.cache/newsletter-audit",
);
mkdirSync(cache, { recursive: true });
for (const [name, file] of Object.entries({
  pages: "functions/api/newsletter/subscribe.ts",
  worker: "worker.ts",
  express: "artifacts/api-server/src/app.ts",
})) {
  buildSync({
    entryPoints: [path.join(root, file)],
    bundle: true,
    platform: "node",
    format: "cjs",
    external: ["express", "pino-http", "pino"],
    outfile: path.join(cache, name + ".cjs"),
    logLevel: "silent",
  });
}
const realFetch = global.fetch;
const env = {
  MAILCHIMP_API_KEY: "audit-only-us1",
  MAILCHIMP_LIST_ID: "audit-only-list",
};
const valid = {
  email: "audit@example.com",
  firstName: "Test",
  interests: ["patient"],
};
const cases = [
  ["null body", null, 400],
  ["array body", [], 400],
  ["numeric name", { ...valid, firstName: 123 }, 400],
  ["long name", { ...valid, firstName: "x".repeat(101) }, 400],
  ["invalid email", { email: "bad@" }, 400],
  ["invalid interests", { ...valid, interests: ["not-supported"] }, 400],
  ["wrong interest type", { ...valid, interests: "patient" }, 400],
  ["long body", { ...valid, extra: "x".repeat(5000) }, 413],
  ["foreign origin", valid, 403, { Origin: "https://other.example" }],
  ["opaque origin", valid, 403, { Origin: "null" }],
  ["cross-site fetch", valid, 403, { "Sec-Fetch-Site": "cross-site" }],
  ["non JSON", valid, 415, { "Content-Type": "text/plain" }],
  ["compressed", valid, 415, { "Content-Encoding": "gzip" }],
  ["malformed JSON", "{", 400, {}, true],
  ["valid", valid, 200],
  ["existing", valid, 200],
  ["provider failure", valid, 502],
  ["provider invalid JSON", valid, 502],
  ["provider offline", valid, 502],
  ["provider timeout", valid, 502],
];

test("newsletter contract across all deployment adapters", async (t) => {
  process.env.NODE_ENV = "production";
  Object.assign(process.env, env);
  const app = require(path.join(cache, "express.cjs")).default;
  const server = app.listen(0, "127.0.0.1");
  await new Promise((resolve) => server.once("listening", resolve));
  const base = "http://127.0.0.1:" + server.address().port;
  const pages = require(path.join(cache, "pages.cjs"));
  const worker = require(path.join(cache, "worker.cjs")).default;
  try {
    for (const runtime of ["Pages", "Worker", "Express"]) {
      let firstSuccess;
      for (const [label, body, expected, extra = {}, raw = false] of cases) {
        await t.test(`${runtime}: ${label}`, async () => {
          const calls = [];
          global.fetch = async (url, options) => {
            assert.match(
              String(url),
              /^https:\/\/us1\.api\.mailchimp\.com\/3\.0\/lists\/audit-only-list\/members$/,
            );
            calls.push(options);
            if (label === "provider offline") throw new Error("mock offline");
            if (label === "provider timeout")
              return new Promise((_, reject) => {
                options.signal.addEventListener(
                  "abort",
                  () => reject(new Error("mock timeout")),
                  { once: true },
                );
              });
            if (label === "existing")
              return Response.json({ title: "Member Exists" }, { status: 400 });
            if (label === "provider failure")
              return Response.json(
                { title: "private provider detail" },
                { status: 400 },
              );
            if (label === "provider invalid JSON")
              return new Response("not JSON");
            return Response.json({ id: "mock-only" });
          };
          const url =
            (runtime === "Express" ? base : "https://site.example") +
            "/api/newsletter/subscribe";
          const request = new Request(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Origin: new URL(url).origin,
              ...extra,
            },
            body: raw ? body : JSON.stringify(body),
          });
          const response =
            runtime === "Express"
              ? await realFetch(request)
              : runtime === "Pages"
                ? await pages.onRequest({ request, env })
                : await worker.fetch(request, env);
          assert.equal(response.status, expected);
          assert.equal(response.headers.get("cache-control"), "no-store");
          assert.equal(
            response.headers.get("access-control-allow-origin"),
            null,
          );
          const data = await response.json();
          assert.equal(
            JSON.stringify(data).includes("private provider detail"),
            false,
          );
          if (expected < 500 && expected !== 200) assert.equal(calls.length, 0);
          if (calls.length) {
            assert.equal(JSON.parse(calls[0].body).status, "pending");
            assert.ok(calls[0].signal instanceof AbortSignal);
          }
          if (label === "valid") firstSuccess = data;
          if (label === "existing") assert.deepEqual(data, firstSuccess);
        });
      }
      await t.test(`${runtime}: unsupported method`, async () => {
        const url =
          (runtime === "Express" ? base : "https://site.example") +
          "/api/newsletter/subscribe";
        const request = new Request(url);
        const response =
          runtime === "Express"
            ? await realFetch(request)
            : runtime === "Pages"
              ? await pages.onRequest({ request, env })
              : await worker.fetch(request, env);
        assert.equal(response.status, 405);
        assert.equal(response.headers.get("allow"), "POST");
      });
    }
    await t.test(
      "Pages: missing configuration and body without content-length",
      async () => {
        const request = () =>
          new Request("https://site.example/api/newsletter/subscribe", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(valid),
          });
        assert.equal(
          (await pages.onRequest({ request: request(), env: {} })).status,
          503,
        );
        const stream = new ReadableStream({
          start(controller) {
            controller.enqueue(new TextEncoder().encode("x".repeat(5000)));
            controller.close();
          },
        });
        const oversized = new Request(
          "https://site.example/api/newsletter/subscribe",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: stream,
            duplex: "half",
          },
        );
        assert.equal(
          (await pages.onRequest({ request: oversized, env })).status,
          413,
        );
      },
    );
  } finally {
    global.fetch = realFetch;
    await new Promise((resolve) => server.close(resolve));
  }
});
