# Get Involved — Growing with you foundation

Implements the approved foundation, stacked on `feat/patient-journeys`. **This is information-only: no feedback or expression-of-interest collection is activated.**

## Pages and copy

- `/get-involved`: “Growing with you” explains PH Navigator as a small, new PHSANZ initiative that wants patient/carer experience to guide its direction. Three opportunity cards are marked “In development” and link to explanatory pages.
- `/get-involved/feedback`: planned website survey, not medical-advice intake. Anonymous status and handling must be defined before opening.
- `/get-involved/focus-groups`: future conversations/co-design, expressions of interest closed. No dates, places, selection or payment guaranteed.
- `/get-involved/contribute`: possible resource review, lived experience, accessibility contributions, peer-support volunteering and fundraising. Programmes are not active. Seeking personal support is distinguished from volunteering; there is no donation facility.

“How your input will help” describes the future review/prioritisation/update process without inventing feedback, results, participation counts or completed changes. No individual replies or response times are promised.

Newsletter signup remains a separate existing service. Each opportunity explains that newsletter signup does not register interest in it. No new account, form, upload, provider, storage, backend route or personal-data flow is introduced.

## Integration

Footer links include Get Involved, including a secondary clinic-footer link. The clinic's three main choices, desktop's three main patient destinations, four mobile tabs and For Healthcare Professionals utility button are unchanged. Homepage, Community Voices and resource library have quiet contextual invitations. New pages are indexed in search; source descriptions explain closed/in-development status.

Draft privacy information and the launch checklist now acknowledge the foundation and outstanding activation requirements. Public contact details remain the intentional placeholder requested earlier.

## Social publishing preparation

Facebook/Instagram are planned publishing/distribution channels leading back to website information and participation pages. No social feed, SDK, comments, forum, discussion group, live session or direct-message intake is implemented.

`src/data/getInvolved.ts` contains an empty `officialSocialAccounts` configuration. The footer social-updates block renders nothing until verified official account URLs are added. There are no inactive social icons or fabricated account URLs. Actual account creation/settings/moderation arrangements are not part of this code change.

Each of the four pages receives a build-generated directory `index.html` with distinct title, description and Open Graph tags. Social crawlers can read them without executing React. Direct and trailing-slash routes render the same page. Client navigation also updates the browser title.

The existing approved 1200×630 `opengraph.png` is the sharing artwork. Absolute canonical, `og:url` and image tags are emitted **only when `PUBLIC_SITE_ORIGIN` is supplied**. The public permanent domain remains unconfirmed; default builds deliberately omit those tags rather than invent an origin or select a temporary preview URL.

### After the public origin is approved

Configure this non-secret build variable for the approved public deployment:

```text
PUBLIC_SITE_ORIGIN=https://your-confirmed-origin
```

Supply an HTTPS origin only: no path, credentials, query or fragment. Keep the deployment's existing `BASE_PATH`; the generator combines it with the origin. For GitHub Pages, that means the origin plus the repository base path. For a root Cloudflare/custom domain deployment, `BASE_PATH=/`.

Keep origin configuration unset on review previews unless intentionally testing a confirmed sharing target. Do not advertise a page as ready for social distribution until the correct absolute metadata and public image URL are available and actual platform previews have been checked after deployment. Titles/descriptions are already emitted in unconfigured preview builds.

## Verification

- Frontend TypeScript/project-reference checks pass. The new build plugin is also separately typechecked.
- Root production build and configured-origin GitHub Pages subpath fixture build pass; existing bundle-size/sourcemap advisories remain.
- All 35 canonical routes render at 390px and 1440px without overflow or nested controls and remain reachable from home/start. Four new trailing-slash aliases also work.
- The four involvement pages additionally pass 320, 768, 1024 and 1280px checks. Their main content contains no collection forms, input fields, iframe embeds or disabled pretend-submit controls.
- No Facebook/Instagram account links are rendered while configuration is empty.
- Footer/clinic linking, unchanged patient navigation, professional button, new search results and separately mocked newsletter success pass. No real newsletter submission is made; no runtime errors observed.
- Raw HTTP responses requested with a social-crawler user agent contain the sharing metadata.
- Raw HTML fixtures verify one title/description set, no invented origin in default builds, and correct absolute canonical/image URLs plus repository base paths when configured. The reserved `example.org` test origin exists only in `work/` fixtures, not published files.
- Subpath direct/alias routes, fonts/logos, closed status and browser back pass.
- Local axe WCAG 2 A/AA, 2.1 AA and 2.2 AA sampling reports no violations on all four involvement pages, home, Start, Community Voices, resources and privacy. [Results](involvement-accessibility.json). Full manual conformance review remains outstanding; existing map-pin limitations are unchanged.
- No production dependencies or backend/secret changes; whitespace checks pass.

## Activation remains separate

Before enabling collection, confirm the receiving team/review owner; provider and storage; minimal fields; consent; access, retention and deletion; response expectations; activity classification (service improvement/co-design or research); and required institutional approvals. Configure real survey/forms only after that review. Participation must not automatically subscribe anyone to the newsletter.

Official social account URLs, approved public origin, final privacy wording and the public contact route remain open items in `launch-follow-ups.md`.

## Preview

Cloudflare should build `feat/get-involved`. Start at `/get-involved`, then the three opportunity pages, homepage, Community Voices and resource library. Check the footer link on `/start` without altering its primary patient choices.

Screenshots: [overview desktop](involvement-screenshots/get-involved-1440.png), [overview mobile](involvement-screenshots/get-involved-390.png), [feedback](involvement-screenshots/get-involved-feedback-1440.png), [focus groups](involvement-screenshots/get-involved-focus-groups-1440.png), [contribution opportunities](involvement-screenshots/get-involved-contribute-1440.png).

Do not merge or deploy to production without review.
