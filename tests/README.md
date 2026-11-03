# Audit regression checks

Use Node 24 and pnpm 10.26.1 from the repository root:

```sh
pnpm install --frozen-lockfile
pnpm run build:ci
pnpm run typecheck:edge
pnpm --filter @workspace/ph-navigator run typecheck:build
pnpm run test:audit
pnpm audit --audit-level=high
```

`test:audit` uses Node's test runner and the workspace's esbuild to exercise the
Pages, Worker and Express adapters. Every Mailchimp call is replaced with a
mock; synthetic addresses use `example.com`. Only a loopback Express listener
uses real HTTP. The three timeout cases take about 24 seconds altogether.
Generated test bundles are placed under ignored `node_modules/.cache`.

The build-page tests validate all canonical route heads and origin/base-path
handling without requiring a browser or reaching any website.

For browser review, build both `BASE_PATH=/` and
`BASE_PATH=/PHSANZ_PH_Navigator/` separately and serve stable output copies.
Inspect direct arrivals, mobile/desktop widths, search with storage denied or
corrupted, keyboard focus restoration, a blocked article chunk, print media and
CSP violations. Keep newsletter requests mocked. Wait for entrance animations
to settle before judging contrast. The audit's recorded coverage and remaining
manual/account-level work are documented in `docs/technical-audit.md` and the
sanitized JSON evidence alongside it.
