# Stage 1: homepage redesign

Implements the homepage plan approved in chat on 1 November 2026. This redesign stage is distinct from the funded implementation stages described in the PHSANZ proposal.

## Scope

The homepage now follows: split hero → six pathways → understanding PH → community voices → practical support → organisational information. All six existing pathway destinations and all three substantive medical paragraphs are retained. Reuses the existing Button, Card, Wouter and Lucide components. Homepage styles are scoped; shared navigation, footer, search, newsletter and backend integrations are unchanged. No dependencies added.

Desktop uses a split hero and three-column card layout. Tablet uses two columns; narrow screens stack content and actions. Nunito is reused from the existing stylesheet with its sans-serif fallback; no new font download is introduced.

## Content decisions

- The original abstract SVG is a photography placeholder, explicitly described as such. Replace only with authorised imagery and appropriate alternative text.
- No patient testimonials are featured. The four existing hard-coded Community Voices stories lack supporting consent/publication records in the inspected source, despite the page's permission assertion. Their full-story buttons have no destinations. That page is unchanged for Stage 1 and requires the Stage 3 audit.
- `FeaturedStories` accepts typed content and shows entries only when publication status is approved, consent is verified, required text is present and the destination is under `/community-voices`. Approval flags must be backed by editorial records; the frontend does not establish consent or verify future story routes. Currently no stories are supplied, so a labelled placeholder appears.
- The homepage partnership strip is replaced with neutral initiative information. Partnership statements remain in the shared header/footer and require governance verification in a later shared-site change.

## Validation

- TypeScript project references: `node_modules/.bin/tsc --build` — passed.
- Frontend TypeScript: `node_modules/.bin/tsc -p artifacts/ph-navigator/tsconfig.json --noEmit` — passed.
- Production Vite build with `BASE_PATH=/PHSANZ_PH_Navigator/ NODE_ENV=production` — passed; Vite reports a bundle-size advisory.
- Chromium: 320, 390, 768 and 1440 pixel widths — no horizontal overflow; six pathways; placeholder asset loads.
- All 12 distinct homepage link destinations render their existing page headings under the GitHub Pages base path.
- Homepage links contain no nested buttons. Visible CTA focus and reduced-motion styling checked. No browser runtime errors during the checks.
- Contrast: white on primary teal 6.14:1; dark text on mint 9.34:1, lavender 9.35:1, peach 9.26:1 and off-white 10.84:1.
- `git diff --check` — passed.

These checks are not a full WCAG audit. Existing shared navigation has nested interactive controls, and the appointment questions page contains multiple h1 elements. Shared header/footer colours and form contrast need a Stage 2 review. Newsletter submission was not performed; no backend or credential changes were made.

The environment provides pnpm 11, while this repository pins pnpm 10.26.1. Locked dependencies were installed into a workspace-local store; checks used the installed binaries directly to avoid pnpm 11's automatic reinstall/configuration behavior. No lockfile or package configuration changes are included.

## Preview

Use Node 24 and the repository's pnpm 10.26.1:

```sh
pnpm install --frozen-lockfile
PORT=3000 BASE_PATH=/PHSANZ_PH_Navigator/ pnpm --filter @workspace/ph-navigator run dev
```

Open `http://localhost:3000/PHSANZ_PH_Navigator/`. Check keyboard navigation and mobile/tablet/desktop layouts. Build without deploying:

```sh
BASE_PATH=/PHSANZ_PH_Navigator/ NODE_ENV=production pnpm --filter @workspace/ph-navigator run build
```

Screenshots from the local production preview (external fonts may fall back in the restricted preview environment):

- [Desktop, 1440px](stage-1-screenshots/homepage-desktop.png)
- [Mobile, 390px](stage-1-screenshots/homepage-mobile.png)

No merge or deployment is authorised by this PR.
