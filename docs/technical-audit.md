# PH Navigator — four-stage technical audit

Audit date: 3 November 2026. Repository: `ckochew20uk/PHSANZ_PH_Navigator` (public). Baseline: `3f460a1bef8a72519d43b0df342da3a3f729d47f`, checked against remote main. Corrections are on `audit/technical-review`; this report does not establish a production merge/deployment.

The audit identified 23 findings: 19 have source corrections, and four remain open. Some corrected findings also require live-host or provider verification. The registry audit fell from **83 vulnerability instances to zero known advisories**. This is a scoped audit, not proof that the application has no vulnerabilities.

## Scope, process and stage gates

1. **Inventory and baseline:** matched the checkout to merged main; inventoried the React/Vite/pnpm monorepo, all 35 canonical routes, assets, workflows, three newsletter backends, and Pages/Workers/GitHub hosting paths. The complete baseline typecheck/build passed. **Gate passed**, with hosting-account visibility explicitly limited.
2. **Automated checks:** ran the live dependency advisory audit; checked relevant registry versions/release dates; scanned all reachable Git refs, public output and safely extracted brand ZIP for credentials; reviewed dangerous HTML sinks and deployment output; exercised 35 routes at 390px and 1440px (70 views) with Chromium and axe WCAG 2 A/AA, 2.1 AA and 2.2 AA rules. **Gate passed:** results were retained and compared with source before treating warnings as defects.
3. **Manual reproduction and triage:** mocked Mailchimp completely; reproduced malformed/oversized requests, foreign-origin submission, membership disclosure, absent deadlines and logging; injected denied/corrupt storage; checked trailing-slash arrivals, inactive professional controls, keyboard focus, narrow reflow, worksheet printing and failed article downloads. **Gate passed:** fixes target reproducible behavior; benign headings/trailing slashes were not changed as defects.
4. **Corrections and verification:** consolidated/hardened backends, patched dependencies, added security configuration and recovery behavior, corrected misleading UI, hardened CI and added durable regression checks. Repeated the build, typechecks, provider mocks and browser tests. **Gate passed locally**, with the open findings/verification gaps below. Production sign-off remains separate.

No real newsletter registrations, confirmation emails, survey responses, messages, account-setting mutations or production deployments were performed. All provider calls in tests use synthetic data and mocked responses. No hostile OpenAPI document was executed. No credentials are included in this report or its evidence.

## Findings, corrections and reasoning

Severity is assigned to the relevant exposure. Package-advisory ratings are not automatically the severity of the deployed static site. “Corrected in source” means tested on this branch; it does not imply the running service has changed.

### AUD-01 — Vulnerable dependencies

**Severity:** Critical–low (advisory ratings). **Status:** Corrected in source.

**Evidence:** The baseline registry audit contained 82 advisory records and 83 vulnerability instances (12 critical, 37 high, 27 moderate, 7 low) across 25 package groups.

**Correction/next action:** Upgraded Orval, Vite, Zod and compatible form resolvers; applied patched releases within existing major lines for remaining transitive packages. Retained pnpm 10.26.1 and minimumReleaseAge=1440. Regenerated the trusted API client with explicit React Query v5 configuration.

**Reason:** Critical Orval findings concern code generation with hostile API specifications; they do not establish remote execution through the static patient site. Express/proxy and build dependencies also require remediation. Newest releases were not accepted when younger than the one-day safeguard.

**Check:** The post-remediation registry audit reports zero known advisories; full build, generator and typechecks pass. Every original advisory and affected dependency path is retained in dependency-advisories.json.

**Location:** `pnpm-workspace.yaml; pnpm-lock.yaml; lib/api-spec/orval.config.ts`.

### AUD-02 — Malformed newsletter fields crash handlers

**Severity:** Medium. **Status:** Corrected in source.

**Evidence:** JSON null and numeric firstName threw TypeError in Pages/Workers; a numeric name caused Express HTTP 500. An address such as bad@ reached the mock provider.

**Correction/next action:** Validate unknown input as a non-null object; normalize and bound email; validate optional names and a deduplicated interest allowlist.

**Reason:** TypeScript annotations do not validate incoming JSON. Bad inputs must receive controlled client errors before reaching a paid external service.

**Check:** All three adapters reject invalid types, malformed JSON, unsupported interests and malformed email with HTTP 400 and zero provider calls.

**Location:** `artifacts/api-server/src/lib/newsletter.ts`.

### AUD-03 — Unbounded edge request bodies and names

**Severity:** Medium. **Status:** Corrected in source.

**Evidence:** Pages/Workers accepted a 20,000-character name; the Express default parser also accepted it. Edge handlers read the entire body without a project limit.

**Correction/next action:** Apply a 4 KiB byte limit, including streams without Content-Length; limit names to 100 characters; require uncompressed application/json. Express uses a small raw parser with inflation disabled.

**Reason:** Limits reduce memory/provider abuse and avoid relying on attacker-controlled Content-Length.

**Check:** Oversized bodies return 413; oversized names return 400; text/plain/compressed payloads return 415; no provider request is made.

**Location:** `artifacts/api-server/src/lib/newsletter.ts; artifacts/api-server/src/routes/newsletter.ts`.

### AUD-04 — Cross-origin signup and permissive Express CORS

**Severity:** Medium. **Status:** Corrected in source; bot abuse remains open.

**Evidence:** Both edge handlers accepted foreign-Origin simple text/plain requests, which browsers can send without a JSON preflight. Express advertised Access-Control-Allow-Origin: *.

**Correction/next action:** Reject foreign/opaque origins and cross-site Fetch Metadata; remove blanket CORS and unused form decoding. Edge compares origins; Express compares host for HTTPS-proxy compatibility without trusting arbitrary forwarded headers.

**Reason:** Prevent opportunistic browser cross-site submission. This does not authenticate clients or stop bots that omit/spoof browser headers.

**Check:** Foreign/opaque Origin and Sec-Fetch-Site cases return 403 across all adapters; responses no longer advertise wildcard CORS.

**Location:** `artifacts/api-server/src/app.ts; artifacts/api-server/src/lib/newsletter.ts`.

### AUD-05 — Immediate subscription without ownership confirmation

**Severity:** High (consent/abuse). **Status:** Corrected in source; delivery unverified.

**Evidence:** Every backend sent status=subscribed for a supplied email address.

**Correction/next action:** Send status=pending for new subscribers; update success copy and draft privacy explanation to describe email confirmation.

**Reason:** Someone should not be automatically subscribed just because another visitor supplies their address. This is a deliberate backend behavior change requiring deployment review.

**Check:** Mock-provider assertions verify pending in all runtimes. No real address was subscribed and no confirmation email was sent; actual audience settings and delivery remain unverified.

**Location:** `artifacts/api-server/src/lib/newsletter.ts; artifacts/ph-navigator/src/components/NewsletterSignup.tsx`.

### AUD-06 — Subscriber-status disclosure

**Severity:** Medium. **Status:** Corrected in source.

**Evidence:** The API returned Subscribed successfully versus Already subscribed, revealing whether an address was already on the list.

**Correction/next action:** Return identical status and message for successful new requests and Member Exists. Do not expose provider error detail.

**Reason:** Reduce list-membership disclosure, especially for a health-related audience. This is not a constant-time/non-enumeration guarantee against every provider behavior.

**Check:** Regression cases compare successful/new and existing-member JSON exactly and verify private provider errors do not appear in responses.

**Location:** `artifacts/api-server/src/lib/newsletter.ts`.

### AUD-07 — Unbounded provider wait

**Severity:** Medium. **Status:** Corrected in source.

**Evidence:** Baseline provider requests had no AbortSignal; the UI also had no deadline.

**Correction/next action:** Use an eight-second provider deadline and a twelve-second browser deadline with recoverable error copy.

**Reason:** A stalled provider should not hold the visitor or backend indefinitely.

**Check:** Each adapter passes an abort-aware mock-provider timeout case and returns controlled 502.

**Location:** `artifacts/api-server/src/lib/newsletter.ts; artifacts/ph-navigator/src/components/NewsletterSignup.tsx`.

### AUD-08 — Subscriber details in application logs

**Severity:** Medium. **Status:** Corrected in source; historical retention unverified.

**Evidence:** Express explicitly logged email addresses and provider error payloads for success, existing membership and errors.

**Correction/next action:** Remove newsletter PII/provider-payload logging; retain minimal request method/path/status logging.

**Reason:** Email addresses and audience preferences should not enter routine operational logs unnecessarily.

**Check:** Source review confirms the shared provider handler does not log subscriber input or provider bodies. Existing provider/host logs and deletion/retention cannot be inspected from this session.

**Location:** `artifacts/api-server/src/routes/newsletter.ts; artifacts/api-server/src/lib/newsletter.ts`.

### AUD-09 — Three diverging newsletter implementations

**Severity:** Low. **Status:** Corrected in source.

**Evidence:** Pages, Workers and Express independently implemented the same provider flow; only some had particular checks.

**Correction/next action:** Use one runtime-neutral contract with small adapters and official Cloudflare edge typechecking.

**Reason:** A security correction should apply to every supported deployment path and remain testable.

**Check:** The same regression cases execute through all three adapters; the edge and Express TypeScript gates pass.

**Location:** `functions/api/newsletter/subscribe.ts; worker.ts; tsconfig.edge.json`.

### AUD-10 — Missing project security-header policy

**Severity:** Medium. **Status:** Configured in source; live enforcement unverified.

**Evidence:** The repository had no _headers/security-response configuration. This is a source finding, not proof that Cloudflare currently lacks account-level headers.

**Correction/next action:** Add Cloudflare static CSP, framing protection, nosniff, referrer and permissions policies, and host-only HSTS. Add dynamic JSON headers. Emit a production-only meta CSP subset for static mirrors.

**Reason:** Constrain script/object/frame execution and reduce unnecessary disclosure. Inline styles remain allowed for React/motion/Leaflet; inline scripts are not allowed. HSTS intentionally has no preload/includeSubDomains.

**Check:** A real Chromium test blocks an injected inline script; the local simulated header server exercises checked-in policy. GitHub Pages cannot provide all arbitrary response headers from _headers. Production enforcement is not verified.

**Location:** `artifacts/ph-navigator/public/_headers; artifacts/ph-navigator/build/socialPages.ts`.

### AUD-11 — Browser storage failure crashes site/search

**Severity:** High (availability). **Status:** Corrected in source.

**Evidence:** Throwing SecurityError from localStorage.getItem removed the main page; saved search history {} caused .filter is not a function when selecting a result.

**Correction/next action:** Guard storage reads/writes; validate history as an array of current known search records, deduplicate and cap it; allow nonpersistent banner dismissal.

**Reason:** Storage is optional and untrusted. Browsing a patient information site should not depend on it being available or correctly shaped.

**Check:** Browser tests with corrupt history and denied reads/writes successfully navigate to the oxygen article with no runtime errors.

**Location:** `artifacts/ph-navigator/src/components/search/SearchModal.tsx; artifacts/ph-navigator/src/components/layout/CrisisBanner.tsx`.

### AUD-12 — Static mirror offers nonfunctional signup

**Severity:** Medium. **Status:** Corrected in source.

**Evidence:** GitHub Pages has no newsletter POST service, but its footer offered a form targeting /api/newsletter/subscribe outside the repository base.

**Correction/next action:** Do not render or collect newsletter fields on repository-subpath builds; show clear unavailability text. Root builds preserve the integration, with an optional VITE_NEWSLETTER_ENABLED=false switch.

**Reason:** Avoid inviting visitors to submit personal information to an unavailable endpoint. A future subpath backend needs explicit configuration rather than assumption.

**Check:** Subpath browser checks show no newsletter email field and no signup request. Cloudflare-compatible root builds retain the form.

**Location:** `artifacts/ph-navigator/src/components/NewsletterSignup.tsx`.

### AUD-13 — Generic titles and incomplete static route heads

**Severity:** Low. **Status:** Corrected in source.

**Evidence:** Most pages kept the generic document title; only four involvement pages had crawler-readable route files. GitHub direct arrivals otherwise relied on its 404 fallback.

**Correction/next action:** Use the shared route index for browser title/description updates and generate all 35 canonical HTML entry pages. Correct resource metadata to describe unavailable drafts. Preserve origin validation and optional canonical/image tags.

**Reason:** Titles orient visitors/assistive technology; static route files give crawlers and direct arrivals useful page-specific heads without guessing the permanent origin.

**Check:** 35-route artifact tests pass; four representative subpath direct arrivals return 200 locally with correct assets; configured test origin/base tags and rejected unsafe origins are checked.

**Location:** `artifacts/ph-navigator/build/socialPages.ts; artifacts/ph-navigator/src/components/layout/GlobalLayout.tsx`.

### AUD-14 — Inactive clinical controls resemble working links

**Severity:** Low. **Status:** Corrected in source.

**Evidence:** The professional page showed a referral button without a handler and guideline cards styled as clickable without destinations.

**Correction/next action:** Replace these controls with explicit in-development/review-pending text, removing misleading pointer/link decoration.

**Reason:** Do not imply that clinical referral guidance has been published or verified when no destination exists.

**Check:** Source and browser review confirm honest pending labels. The user-required For Healthcare Professionals utility button remains.

**Location:** `artifacts/ph-navigator/src/pages/for-healthcare-professionals.tsx`.

### AUD-15 — Workflow privilege and mutable action references

**Severity:** Medium. **Status:** Corrected in source; repository settings unverified.

**Evidence:** CI omitted explicit token permissions; Pages build inherited deployment write/token privileges. Actions referenced movable major tags.

**Correction/next action:** Set CI read-only permissions; give only the Pages deploy job pages/id-token write; disable persisted checkout credentials; pin top-level actions to verified commit hashes; add weekly dependency/action update PRs and audit/type/runtime checks.

**Reason:** Reduce exposure if build/dependency code is compromised and keep patches visible. Action pins do not pin every internal dependency of each action.

**Check:** Workflow configuration and immutable hashes cross-checked against GitHub tag refs; matching local commands pass. Required reviews, protection rules and account settings are separate verification gaps.

**Location:** `.github/workflows/ci.yml; .github/workflows/github-pages.yml; .github/dependabot.yml`.

### AUD-16 — Local secret files not ignored

**Severity:** Low. **Status:** Corrected in source.

**Evidence:** No tracked .env/credential file was found, but .gitignore did not exclude environment files or Cloudflare local secret files.

**Correction/next action:** Ignore .env variants, .dev.vars variants and audit scratch files while permitting named example templates.

**Reason:** Reduce accidental future credential commits; ignore rules do not remove historical secrets.

**Check:** Tracked-file review and redacted history/artifact scans found no confirmed credential.

**Location:** `.gitignore`.

### AUD-17 — Development/preview servers allow arbitrary hosts

**Severity:** Medium (development). **Status:** Corrected in source.

**Evidence:** Both Vite configurations set allowedHosts=true while listening on all interfaces.

**Correction/next action:** Restore default hostname protection; permit only an explicitly configured REPLIT_DEV_DOMAIN for development; remove preview allow-all. Add actual Vite-config/build-plugin typechecks.

**Reason:** Restrict DNS-rebinding exposure when developers run local or hosted preview servers. This is not evidence that the static production host is vulnerable.

**Check:** Development renders without runtime errors; Host localhost returns 200 and Host untrusted.example returns 403 in the local Vite check.

**Location:** `artifacts/ph-navigator/vite.config.ts; artifacts/mockup-sandbox/vite.config.ts`.

### AUD-18 — Appointment printout includes site controls

**Severity:** Low. **Status:** Corrected in source.

**Evidence:** Generated worksheet PDF included emergency/navigation bars and newsletter/footer UI, wasting space and interrupting the worksheet.

**Correction/next action:** Hide site chrome and dialogs in print media while retaining article/worksheet content and the intended print heading.

**Reason:** Printed appointment preparation should remain readable and useful without screen-only controls.

**Check:** Regenerated print PDF and browser print assertions confirm hidden header/footer and one visible heading in each medium.

**Location:** `artifacts/ph-navigator/src/index.css; artifacts/ph-navigator/src/components/layout/GlobalLayout.tsx`.

### AUD-19 — Failed article chunk leaves blank site

**Severity:** Medium. **Status:** Corrected in source.

**Evidence:** Blocking the travel/oxygen JavaScript chunk removed the entire main page with no recovery control.

**Correction/next action:** Wrap article loading in a route-resetting error boundary with an accessible explanation/reload control; retain navigation.

**Reason:** A temporary asset/network failure should leave visitors able to recover or choose another section.

**Check:** With a simulated 503 for that chunk, the recovery button appears and the professional navigation successfully opens another page.

**Location:** `artifacts/ph-navigator/src/components/content/PageErrorBoundary.tsx`.

### AUD-20 — Overlapping specialist-map targets

**Severity:** Medium. **Status:** Open.

**Evidence:** Axe WCAG 2.2 target-size findings reproduce at mobile and desktop widths where nearby centre markers overlap.

**Correction/next action:** No marker redesign in this audit. Preserve searchable keyboard-operable centre list; plan clustering/expansion or a list-first map redesign and touch/assistive-technology review.

**Reason:** Hiding markers from the audit or removing keyboard operation would not resolve the usability problem. The list mitigates access but does not establish map conformance.

**Check:** Remains the only settled-page automated accessibility rule violation across the 70 views. Full manual accessibility certification is not claimed.

**Location:** `artifacts/ph-navigator/src/pages/find-specialist.tsx`.

### AUD-21 — No verified durable signup abuse control

**Severity:** High. **Status:** Open — hosting control required.

**Evidence:** Source has no durable throttling/challenge and account-level WAF/rate rules are not visible. Origin checks can be omitted/spoofed by a bot. Double opt-in can still generate unsolicited confirmation emails.

**Correction/next action:** Before promoting signup, configure and verify an edge/durable limit and, if appropriate, an accessible challenge, with provider quotas/alerts and documented owner. Do not add an unreliable in-memory Worker counter.

**Reason:** One instance-local counter does not enforce limits across isolates; inventing a binding or claiming an unseen WAF exists would be misleading.

**Check:** Acceptance: repeated synthetic requests receive controlled 429/challenge before reaching a mocked provider; legitimate/shared-network users and recovery behavior pass review. Not executable without hosting configuration.

**Location:** `Cloudflare account configuration; newsletter endpoint`.

### AUD-22 — Initial root bundle warning

**Severity:** Low. **Status:** Open — optimisation.

**Evidence:** The root build still emits a JavaScript chunk above Vite’s 500 kB uncompressed warning threshold. The full public output also contains downloadable brand assets.

**Correction/next action:** Keep the warning visible; separately profile real devices and split dependencies only where measurement supports it. No warning-threshold suppression.

**Reason:** Total public build bytes are not the same as the initial page download; bundle warnings alone do not prove a poor real-user performance score.

**Check:** Root/subpath production builds pass; no public source maps. Real network/Core Web Vitals testing remains outstanding.

**Location:** `artifacts/ph-navigator/vite.config.ts`.

### AUD-23 — Australian urgent-support numbers presented to ANZ audience

**Severity:** Medium (patient-safety content). **Status:** Open — clinical/localisation review.

**Evidence:** The shared emergency banner displays Australian 000/Lifeline/Beyond Blue numbers without a clear Australian territorial label, while the site targets Australia and New Zealand.

**Correction/next action:** Flag for a verified country-specific urgent-support review by the content/clinical owner before wider ANZ distribution. Do not silently infer or publish unreviewed replacement service details.

**Reason:** Technical success is not clinical approval; emergency signposting must be relevant to the visitor’s jurisdiction.

**Check:** The discrepancy is confirmed from source. Service currency, New Zealand alternatives, clinical articles and specialist-directory accuracy were not clinically validated in this audit.

**Location:** `artifacts/ph-navigator/src/components/layout/CrisisBanner.tsx`.

## Verification results and reproducibility

- Complete `pnpm run build:ci`: passed before and after corrections, including all workspace builds/typechecks.
- `pnpm run typecheck:edge` and `pnpm --filter @workspace/ph-navigator run typecheck:build`: passed. Edge adapters and build-time code are now covered explicitly rather than relying on the frontend-only tsconfig.
- `pnpm run test:audit`: **68 checks pass**, none failed/skipped. Includes three-runtime newsletter failures/timeout/405/415/413 cases, missing configuration, streamed oversized body, membership-response equality and static-page generation/origin validation.
- `pnpm --filter @workspace/api-spec run codegen`: passed against the repository’s trusted specification, followed by library typechecking. Generated API artifacts are updated with the patched generator and explicit React Query v5 selection.
- Root and `/PHSANZ_PH_Navigator/` production builds: passed. The subpath test uses `PUBLIC_SITE_ORIGIN=https://example.org` solely as a test fixture; no permanent public origin is configured or invented.
- Chromium/axe: 70 final mobile/desktop views, no runtime crashes or horizontal overflow; remaining settled-page rule finding is map target overlap. Entrance-opacity transitions initially produced transient resource-card contrast reports; both widths were retested after animation settled and passed. This is not a full screen-reader, mobile-device or clinical-accessibility certification.
- Manual samples: six 320px reflow pages (an approximation of a 1280px viewport at 400% zoom, not a substitute for every browser’s actual zoom behavior), search keyboard trap/Escape focus restoration, corrupt/blocked storage navigation, inline-script CSP rejection, worksheet print isolation, failed-chunk recovery/navigation, and four direct subpath page arrivals with no local asset errors: passed.
- Secret scans: Gitleaks 8.24.3, all reachable refs/history (**68 reachable baseline commits; 62 diff-bearing commits processed, including merge-parent diffs**), with all findings redacted; public frontend and safely extracted brand ZIP scanned separately. Two candidate records refer to the same historical design-token prose in its original and merge commits; both were manually classified as false positives. **No confirmed credential found** in the scanned scope. This is not evidence that account secrets have never been exposed elsewhere.
- No `.map` files in the public frontend output. Express linked maps remain in a separate backend output directory; no source evidence shows them being served publicly. Repository source is already public.
- `git diff --check`: passed. CI action commits were resolved from their official repositories. A frozen-lockfile install is part of the final verification and CI.

Local browser evidence is captured in [the sanitized evidence record](audit/evidence.json). The complete original advisory list, affected versions/paths and before/after totals are in [dependency-advisories.json](audit/dependency-advisories.json). [findings.json](audit/findings.json) provides the issue register in machine-readable form. Regression tests are under `tests/`; `tests/newsletter.test.cjs` explicitly mocks provider calls.

The optional browser checks use Python Playwright, a locally installed Chromium and axe-core. They exercise built files through a local static server that simulates checked-in Cloudflare headers; that simulation is not a production header test. Keep real provider requests mocked when repeating UI tests.

## Checked items that were not confirmed vulnerabilities

- Separate screen/print worksheet h1 elements: exactly one is visible in each medium. Preserved.
- Trailing slashes: representative article and involvement routes work with Wouter; no route rewrite was needed.
- `dangerouslySetInnerHTML` for static worksheet CSS/chart style configuration and Leaflet SVG construction: reviewed sinks use static/configuration data in current call sites; no reproduced user-controlled XSS path. The new CSP is defense in depth, not a claim that those sinks were exploitable.
- Historical Gitleaks “generic API key”: two records of the same manually inspected design-token prose, not a credential. No broad source/document ignore was introduced to hide it.
- Failed map-tile requests in this environment: third-party access is restricted; this is not evidence that the production tile service is broken. The centre list remains usable without tiles.

## Unverified hosting and operational controls

The environment’s enforced outbound proxy blocks the production Pages and GitHub Pages hosts at CONNECT with 403. **That is a proxy restriction, not an HTTP 403 returned by the website.** No Cloudflare account API credentials/tools are configured here. The user was informed of the allowlist requirement; local work continued.

Consequently these remain unverified, rather than assumed absent or secure:

- Current Cloudflare Pages/Workers inventory, routes, domains, deployed commit, secret bindings and orphaned historical deployments. Source targets include the Pages project and `replit-ph-navigator` Worker; confirm the intended architecture and retire obsolete endpoints so an old handler cannot bypass the new one.
- Live HTTPS/TLS certificate/redirect behavior, actual response headers/CSP, cache rules, security/WAF/rate rules and effectiveness. Verify both custom and platform hostnames after deployment. `_headers` does not configure dynamic Functions; their headers are set by the shared handler. GitHub Pages ignores `_headers` and only receives the portable meta-policy subset from this code.
- GitHub required checks/reviews, branch protection, collaborator access, secret scanning/push protection and deployment-environment approvals. Repository visibility/available permissions do not establish these controls.
- Provider audience settings, real double-opt-in delivery, unsubscribe/deletion, retention, cross-border processing, quota/abuse alerts, prior logs and access/rotation practices. These need account-owner review; do not test by subscribing real people.
- Recovery and rollback drills, deployment failure alerting and real-device/network performance. The prior merge provides a known source baseline, not proof of an operational rollback procedure.

## Launch decisions and follow-up order

1. Address AUD-21 with the hosting owner and verify all live endpoints use the hardened implementation. Review double-opt-in delivery and practical shared-network limits before promoting newsletter signup.
2. Verify deployed headers, TLS, domains, bindings and repository protections using authenticated/read-only account access or owner-provided evidence. Do not mark those controls complete from a local build.
3. Review urgent-support localisation (AUD-23), clinical article currency and directory accuracy with the clinical/content owners before wider ANZ clinic distribution. This technical audit did not establish clinical accuracy.
4. Resolve map touch targets and commission appropriate manual accessibility checks; profile the root bundle on real devices.
5. Retain the deliberate governance gates: public contact stays a placeholder at the user’s request; privacy/terms, data ownership/retention and service providers require PHSANZ approval. Get Involved remains closed with no survey/focus-group/contribution collection. Partners, social handles and permanent origin remain unconfirmed. No invented content or recruitment was activated.

The audit branch and report are prepared for review. Merging/deploying these new corrections and completing account-level work are distinct next steps; this report is not a production approval.
