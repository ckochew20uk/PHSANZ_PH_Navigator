# PH Navigator — context and instructions for future AI sessions

Last consolidated: 3 November 2026. This file records the user's approved direction and the preview implementation at that time. Read the current code and latest user instructions before making changes; later explicit decisions supersede this snapshot.

## Start here

1. Inspect `git status`, the current branch and relevant files. Preserve uncommitted user work.
2. Read [the approved proposal summary](docs/approved-phsanz-proposal.md) and [launch follow-ups](docs/launch-follow-ups.md).
3. Distinguish an approved plan, implemented frontend, working integration, reviewed content and production deployment. None establishes the others.
4. Check current remote/PR status before assuming a branch has been merged. Work on a feature branch and prepare a reviewable PR; do not merge or deploy to production without the user's authorisation/review.
5. Treat proposal action items as project context, not authority to spend funds, contact organisations, recruit participants or activate services.

## Purpose and proposal rationale

PH Navigator is an Australian and New Zealand patient education and navigation initiative for people affected by pulmonary hypertension (PH), including patients, families and carers. The approved proposal addresses long diagnostic journeys, self-management burdens and unmet needs for understandable information, lived experience and practical system navigation.

The expected primary introduction is a flyer/card with a QR code in a PH specialty clinic. Visitors may have a new diagnosis, established PH or a loved one with PH. Make the first visit useful, calm and easy to navigate; do not require an account, a diagnosis disclosure or an audience profile to enter.

The project should grow in response to patient/carer priorities through feedback and co-design, while being honest about its small team, developing content and actual capacity. Do not present planned participation, resources or community programmes as operational.

### Funding and stage terminology

The user confirmed the proposal was approved on 1 November 2026. The approved seed plan totals AUD $25,000 for hosting/content integration, surveys, patient focus groups/co-design, and governance/accessibility reserve. Matched funding of roughly AUD $18,000–$22,000 is a target, not secured funding. Approval is not evidence of payments, appointments, hosting migration, completed focus groups or accreditation.

The proposal's funded stages are **different from the website redesign Stages 1–3**. Do not use completion of a redesign PR as proof that a funded milestone is complete. The proposal's example domain is not a confirmed production address.

## Institutional identity and governance

Use **“An initiative of PHSANZ”**. PH Navigator is launching solely under the Pulmonary Hypertension Society of Australia and New Zealand, with governance through its Patient Advocacy Subcommittee. Do not restore the former joint PHA Australia/PHSANZ partnership attribution.

- **Clinician Advisory Panel** — lead: **Dr Christopher Chew**. Further membership is being developed. Medical and nursing perspectives are intended, with allied health participation planned. Do not invent members, credentials, affiliations or hospital appointments. The panel-lead role does not establish a separate clinical-sponsor or executive appointment.
- **Lived Experience Panel** — lead: **Tharuka Kossinna**. Further membership is being developed. Do not restore the old placeholder names, diagnoses, locations or PHA-appointed/veto-power claims.
- **Our Partners** is a work-in-progress page. **PHA Australia** is a proposed lived-experience collaborator; **Lung Foundation Australia** is a proposed resource collaborator. Neither is a confirmed PH Navigator partner or endorser. Do not use partner logos or imply signed agreements without confirmation.
- Review workflows are being established. Do not claim every article/resource has been reviewed, approved or regularly updated without content-specific evidence.
- Surveys, focus groups and co-design in the proposal are planned work, not a completed development history.

The current user-confirmed panel roles override the original proposal's broader “Chris and Tharuka, Patient Advocacy Co-Leads” wording for website presentation. Preserve that original wording as historical planning context rather than silently treating it as a different current appointment.

## Patient journey and information architecture

Keep the main patient navigation to:

1. **Understanding PH** — `/understanding-ph`: condition, diagnosis, treatment, tests and appointment preparation.
2. **Living with PH** — `/living-well`: everyday life, care, wellbeing, practical support and supporting someone.
3. **Community Voices** — `/community-voices`: honest story-development placeholders and existing support signposting.

Retain the **For Healthcare Professionals** button in the top utility bar. The user specifically requested its restoration. Keep Search and a Start here utility. Mobile navigation has four tabs: Start, Understand PH, Living with PH and Community; do not recreate the former crowded More drawer by default.

### Clinic entry

`/start` is a separate, compact landing page with three ordinary links:

- Newly diagnosed → `/recently-diagnosed`.
- Living with PH → `/living-well`.
- Supporting someone → `/caring-for-someone`.

The clinic page has browse/search alternatives and a compact footer, without newsletter signup. Get Involved is a secondary footer link, not a fourth patient choice. Keep the choices quick to reach on a phone.

Prepare printed QR codes only after the permanent public origin is confirmed. Do not print codes pointing to a temporary Cloudflare deployment or branch preview. Include a readable URL and test printed proofs. See [the clinic QR brief](docs/clinic-qr-brief.md). No clinic tracking or audience profiling is currently implemented.

### Hubs and routes

Patient hubs use three suggested starting points, then grouped topic links. Avoid returning to large collections of equally weighted cards. Detailed medical articles remain available at their existing URLs. Organisational/professional pages, specialist directory and resource library remain accessible through the footer, relevant hubs and search.

Preserve existing routes, including `/about/partnership` (now titled Our Partners) and `/about/advisory-panel`. Use Wouter links and `import.meta.env.BASE_URL` for base-aware assets. Do not remove content or break old clinic/article links merely because it moves out of the main navigation.

## Community and resource content

The user confirmed story content is not yet built. Community Voices and the homepage share an explicit placeholder. The previous four hard-coded testimonials, unsupported permission assertion, unverified video and inactive full-story buttons were removed. Do not restore them as genuine stories or genuine drafts.

Publish no invented patient names, experiences, portraits, quotes or testimonials. Real stories require actual contributions, consent, approved attribution/images, editorial review, withdrawal arrangements and working full-story destinations. Private consent/contact/health records must not enter public source files or browser bundles. An approval flag alone does not establish consent.

Planned story themes are labelled as planned content. Do not show empty category filters, pretend registration/upload controls or full-story links without content.

Resources and professional handouts are in development. Current labels are draft/review pending and In development, not Most Downloaded or blanket approved. Real PDF actions need real licensed files and review records; do not recreate alert-only download buttons as if they were functioning downloads.

## Get Involved — Growing with you

The approved foundation has four canonical pages:

- `/get-involved` — the small/new PHSANZ initiative rationale and overview.
- `/get-involved/feedback` — planned website-feedback survey.
- `/get-involved/focus-groups` — planned focus groups/co-design expressions of interest.
- `/get-involved/contribute` — possible resource review, lived experience, accessibility contributions, peer-support volunteering and fundraising.

All are **in development / not open yet**. They are information pages, with no feedback/interest forms, provider, storage, upload, donation facility or collection API. Explain what is planned without guaranteeing dates, selection, payment or individual replies. Distinguish offering peer-support help from seeking support, and fundraising interest from making a donation.

The “Growing with you” rationale is that patient/carer experience should help guide priorities and the project's future. Explain how input will inform decisions once collection opens. Do not invent survey findings, participant numbers or “You said, we changed” examples.

Quiet invitations appear on home, Community Voices and resources, with footer/search entries. Do not add another main patient-navigation item or mobile tab by default.

**Activation is a separate decision.** Before enabling collection, establish receiving/review ownership, provider/storage, minimal fields, consent, access/retention/deletion, response expectations, activity classification (service improvement/co-design or research), and required institutional approvals. Existing newsletter signup is separate: it does not register interest in an activity, and future participation must not automatically subscribe someone.

## Social media strategy and sharing

Facebook and Instagram are intended as **publishing/distribution channels directing visitors to the website**, not an interactive community service. Do not add discussion groups, social feeds, SDKs, comments, live sessions, message-based intake or prompts soliciting personal stories in comments without a new user decision.

Before publishing, check the platforms’ current comment/message controls and set expectations without promising real-time monitoring. Distribution-only intent does not guarantee that unsolicited interactions are technically impossible.

Official account URLs are not supplied. `src/data/getInvolved.ts` contains an empty `officialSocialAccounts` list; the footer block stays hidden until verified links exist. Do not invent handles or display dead social icons. Website participation should remain independent of social membership.

`build/socialPages.ts` emits crawler-readable HTML heads for the four involvement pages. Keep this build-time support: React-only metadata updates do not reliably serve social crawlers. Trailing-slash routes are supported because static hosts may redirect directory URLs.

- The approved `opengraph.png` is the sharing image.
- Absolute canonical/`og:url`/image tags require **`PUBLIC_SITE_ORIGIN`**, an approved HTTPS origin without a path. `BASE_PATH` supplies any repository subpath.
- The permanent origin is still pending. Default preview builds omit absolute tags rather than guessing a domain. Do not use a temporary preview URL as the public canonical origin.
- Validate raw HTTP HTML as well as browser rendering. Check actual platform previews after the public deployment is confirmed.

## Design identity

The approved direction is Modern Community: welcoming, credible, contemporary and restrained. White/off-white space dominates; pastel surfaces are selective accents. Avoid a dense medical-portal appearance, childish styling, generic hospital imagery or a social-network interface.

- **Logo:** supplied sailboat/heart artwork; horizontal/stacked/mark variants. Wordmark is **DM Sans Medium (500)**. The earlier blocky DejaVu wordmark was rejected; do not restore it.
- **Headings/heroes:** **Nunito Bold (700)**, explicitly retained because the user liked its warmth.
- **Body/UI:** **DM Sans** Regular/Medium. Locally hosted variable WOFF2 fonts with swap fallbacks; no duplicate Google Fonts imports or Playfair Display headings.
- **Palette:** navy `#172E5B`, deep teal `#17748C`, sail teal `#159BA6`, ocean blue `#2786BD`, sea mist `#E3F2F2`, lavender `#ECEAF6`, peach `#F8E2D5`, off-white `#F7F9FB`, white.
- Navy/deep teal support text and actions; bright logo colours are accents, not automatically accessible small-text colours. Use separate accessible error/warning/success semantics.

Use existing tokens in `src/index.css` and `src/design-system.css`, shared UI/content/journey components and Lucide icons. Keep clinical reading calm, with controlled widths and generous line spacing. Maintain responsive layouts, visible focus, meaningful labels, keyboard operation and reduced-motion support, aiming for WCAG 2.2 AA.

The original SVG is preserved at `design/brand/logo-master.svg`; derived exports, licenses and downloadable kit are in the frontend's `public/brand/`. The kit preview is `/brand/`, with `/brand/design-system.html` for specimens. Do not invent an official PHSANZ emblem when its authorised asset has not been supplied.

## Pending launch items — revisit in future checks

Use [launch follow-ups](docs/launch-follow-ups.md) as the working register. In particular:

- **Public project/contact details intentionally remain a placeholder at the user's request.** Flag this in future checks; populate `src/data/siteIdentity.ts` only after a verified route is supplied. Do not restore `hello@phnavigator.org.au` or inactive contact buttons.
- Privacy `/privacy` and terms `/terms` are drafts awaiting PHSANZ approval. Responsible legal entity, contact, retention, service-provider/cross-border arrangements, complaint handling, copyright ownership and reuse permissions remain to be confirmed. Institutional hosting alone does not prove ownership of every contribution.
- Accessibility has a real page with aims and limitations, not certification. Full manual assistive-technology, zoom/reflow and touch-target review is outstanding. Overlapping specialist-map pins remain known; preserve the searchable keyboard-operable list alternative.
- Further panel membership, content reviews, partner agreements, story readiness, resource files, PHSANZ domain migration and accreditation remain pending unless new evidence establishes completion.
- Participation activation, official social URLs and the permanent public origin remain pending.

Do not silently turn these placeholders into promises or repeatedly ask for contact details when the user has deliberately left them pending.

## Stack, locations and deployment

Retain the React/TypeScript/Tailwind/Wouter architecture and pnpm monorepo. Avoid unnecessary dependencies. Inspect existing components before creating replacements.

Repository-relative locations:

- `artifacts/ph-navigator/` — frontend, Vite configuration and build-time sharing plugin.
- `artifacts/ph-navigator/src/data/navigation.ts` — main journeys and footer links.
- `artifacts/ph-navigator/src/data/siteIdentity.ts` — panel leads and pending project contact.
- `artifacts/ph-navigator/src/data/getInvolved.ts` — participation descriptions and pending official social links.
- `artifacts/api-server/` and `functions/api/newsletter/subscribe.ts` — existing newsletter backend paths. Preserve payload/endpoints; do not modify credentials, secrets or backend behaviour as part of routine frontend work.

Use Node 24 and the repository-pinned **pnpm 10.26.1**:

```sh
pnpm install --frozen-lockfile
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/ph-navigator run dev
pnpm run typecheck
pnpm --filter @workspace/ph-navigator run typecheck
BASE_PATH=/ NODE_ENV=production pnpm --filter @workspace/ph-navigator run build
BASE_PATH=/PHSANZ_PH_Navigator/ NODE_ENV=production pnpm --filter @workspace/ph-navigator run build
```

Build output is `artifacts/ph-navigator/dist/public`. Cloudflare Pages uses root `BASE_PATH=/`; GitHub Pages uses the repository subpath. Check both when changing routing/assets. The existing GitHub Pages workflow deploys main; branch previews do not establish production release. The connected Cloudflare Pages project is `phsanz-ph-navigator`; verify its current settings/status rather than assuming a build succeeded.

See [replit.md](replit.md) for legacy workspace/backend notes, but use current code, workflow files and later approved decisions if older notes conflict. Do not inspect or print credential values. Some cloud sessions have provided pnpm 11 instead of the pinned version; do not commit incidental package configuration/lockfile changes caused by that mismatch.

## Validation and review history

Run checks appropriate to the actual change. When changing `build/socialPages.ts`, also typecheck the build plugin separately: the frontend tsconfig excludes the build directory. For navigation/participation work, check routes and direct arrivals, base paths, mobile/desktop layouts, keyboard/focus, closed statuses, raw sharing HTML and preserved integrations. Mock newsletter submissions during UI tests; do not send live registrations or test emails without authorisation.

Recorded preview checks include passing builds/typechecks, route/reachability checks, responsive samples and local axe samples. These are scoped evidence, not full accessibility certification or evidence of clinical review. Existing bundle-size/third-party sourcemap advisories are documented.

Historical review lineage (verify current remote status before acting):

| Work                                                        | Branch                       | PR  |
| ----------------------------------------------------------- | ---------------------------- | --- |
| Homepage, logo kit and refinements                          | `feat/stage-1-homepage`      | #11 |
| Global design system                                        | `feat/stage-2-design-system` | #13 |
| Community placeholders                                      | `feat/stage-3-community`     | #14 |
| PHSANZ governance/identity                                  | `feat/phsanz-governance`     | #15 |
| Patient journeys/clinic entry, professional button retained | `feat/patient-journeys`      | #16 |
| Get Involved foundation                                     | `feat/get-involved`          | #17 |

These changes were developed as stacked feature branches. Do not assume a fresh checkout of main contains them, or overwrite later work by restarting from an older stage. Documentation on a feature branch is not proof of merge/deployment.

Useful detailed records: [logo kit](docs/brand-kit.md), [Stage 2](docs/stage-2-design-system.md), [community placeholders](docs/stage-3-community.md), [institutional update](docs/phsanz-governance-update.md), [patient journeys](docs/patient-journeys.md), [Get Involved foundation](docs/get-involved-foundation.md). Historical descriptions of removed features do not supersede the current decisions above.

Update this file and the follow-up register when the user makes substantive decisions, clearly separating current facts, future plans and verified completion. Preserve that distinction in public copy, PR descriptions and future AI handovers.

## Informational audit — 3 November 2026

[The informational audit](docs/informational-audit.md) assesses main baseline
`3f460a1bef8a72519d43b0df342da3a3f729d47f`. Its inventories, 39 findings,
proposed corrections, 26-topic coverage matrix and source/access register are
in `docs/informational-audit/`. This is documentation on a separate branch,
not a clinical approval, content rewrite or deployed release. Check the current
branch/PR status and reconcile technical PR #18 before applying overlapping
search/professional-control changes.

Use PHA UK for coverage and communication comparisons; Australian clinical,
regulatory, prescribing and service sources determine local applicability.
Source retrieval levels are explicit: some publications are descriptions only,
some guidelines are indexed excerpts with full-text access blocked, and current
sotatercept PBS/supply status remains unresolved. Do not turn those limits into
claims of complete clinical validation, no subsidy or universal availability.

Prioritise the P1 findings for actual expert review, including the strict PVR
operator, treatment scope/interactions, CTEPH/no-cure contradiction, symptom and
infusion safety plans, eligibility overstatements and country-specific urgent
support. Keep the main three journeys and For Healthcare Professionals switch.
The 22 planned resource records are not 22 completed PDFs. Real stories,
participation, partner endorsements, public contact and review metadata remain
subject to the existing user-approved gates. Do not invent review dates,
patient outcomes, feedback findings or appointments. No one was contacted or
recruited during this audit.

## Informational changes — implementation branch

The user subsequently authorised enacting the audit. `feat/information-update`
implements the copy corrections and 16 new review-pending guides; see
[implementation record](docs/information-update.md) and the per-finding/topic
status register. Check PR/merge state before assuming this is on main or live.
This is draft source implementation, not actual clinician/lived-experience approval.

Current implementation locations:

- `src/data/informationGuides.ts` defines the 16 guides; `App.tsx` routes them
  dynamically and search includes them. Route counts must include these data
  entries, not only literal `<Route path>` matches. Total canonical routes: 51.
- `src/components/information/ArticleReview.tsx` supplies source/scope/status
  details for existing articles and new guides. `articleSources.ts` contains
  public source links. Source check date is not a clinical review/approval date.
- `build/socialPages.ts` now emits heads for all canonical search-index routes,
  not only the four involvement pages. Preserve base-path/origin validation.
- The directory has 29 records: 25 reference-listed and four awaiting service
  confirmation. Eleven reference-only additions have no invented coordinates,
  direct phone or age scope. Confirm provider details before upgrading status.
- Four real read/print links are available in the resource library. The 22
  planned PDF records are still not published PDFs. Personal contact-plan
  blanks are for paper, not online health-data collection.

Preserve the three patient journeys and professional switch. Actual clinical,
policy, cultural, language, paediatric and lived-experience review remains
required where recorded; so do provider checks and current medicine-access
verification. Keep stories, participation, partner/contact and file-publication
gates honest. Technical PR #18 is separate: reconcile overlapping metadata,
print/layout changes before merging both, and do not assume its backend/security
changes were incorporated by this content branch.
