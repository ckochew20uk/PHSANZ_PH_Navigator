# Stage 2 — Modern Community design system preview

Implements the Stage 2 plan approved in chat, including the subsequent choice to retain Nunito for headings/heroes. Built on `feat/stage-1-homepage`; its PR targets that branch until Stage 1 is merged.

## Identity and shared styles

- Logo: existing outlined DM Sans Medium; artwork and logo palette retained.
- Headings/heroes: Nunito Bold. Body, navigation and controls: DM Sans Regular/Medium.
- Locally hosted variable WOFF2 fonts (approximately 115KB combined), swap fallbacks, OFL notices and base-aware preload URLs. Removed duplicate external font requests. Font subsets cover Latin and common punctuation; other scripts use system fallbacks.
- Navy `#172E5B`, deep teal `#17748C`, sea mist `#E3F2F2`, lavender `#ECEAF6`, peach `#F8E2D5`, off-white `#F7F9FB` and white. Brighter sail teal/ocean blue remain accent colours.
- Accessible error red `#B42338`, success green `#176949` and warning ochre `#79500C` are distinct from decorative brand accents.
- Consistent card, popover, sidebar, border, input and focus tokens. The existing dark token block is coordinated, but this is not a full dark-mode rollout: some existing white surfaces are still explicit.
- Shared `SectionHeading` and `ContentContainer` primitives; clinical prose is limited to a readable 72ch with generous line spacing.
- Shared cards, buttons, badges, inputs, selects and textareas have coherent radii, typography and interaction states. Primary buttons use deep teal; important headings and footer use navy.

## Site application and accessibility fixes

Applied Nunito headings across all existing pages and removed Playfair usage. Shared navigation, footer, home pathways, resources, educational pages, care pages and organisational pages use the shared system. The homepage keeps its white-space balance and references shared brand variables.

Added a skip link and focusable main landmark. Corrected nested link/button pairs. Improved muted text and newsletter contrast; newsletter errors have an alert role. Mobile navigation and search dialogs now have focus containment, accessible names, Escape dismissal and focus return. Shared motion follows reduced-motion preferences; directory fly-to animation is suppressed in reduced-motion mode.

Updated resource-category colours and specialist-directory controls/markers with accessible names. Centre names offer keyboard-accessible map selection. Existing directory data, all medical text, routes and newsletter payload/endpoints are retained. No backend or secret changes. No new community features, fictional stories or partnership assertions are introduced. Existing Community Voices content remains subject to the separately documented Stage 3 authenticity/consent review.

## Review and downloads

Open `/brand/design-system.html` on the Stage 2 preview for the typography scale, cards, control specimens, semantic messages and logo examples. `/brand/` links to it and offers the updated downloadable digital kit. The ZIP includes both website WOFF2 fonts and licenses as well as the logo exports/source.

Screenshots:

- [Homepage desktop](stage-2-screenshots/home-1440.png)
- [Homepage mobile](stage-2-screenshots/home-390.png)
- [Clinical education](stage-2-screenshots/treatments-explained-1440.png)
- [Resources](stage-2-screenshots/resource-library-1440.png)
- [Design-system specimens](stage-2-screenshots/design-system-mobile.png)

## Verification

- TypeScript project references and frontend typecheck pass.
- Production builds pass with `BASE_PATH=/` for Cloudflare and `/PHSANZ_PH_Navigator/` for GitHub Pages. Vite still reports its existing bundle-size advisory and third-party sourcemap warnings.
- Chromium: all 26 registered routes render at 390px and 1440px without horizontal overflow; all page h1 elements use Nunito. No nested link/button controls or runtime errors in these route checks.
- Homepage additionally checked at 320, 768, 1024 and 1280px. Real Nunito and DM Sans font loading is verified.
- GitHub Pages subpath smoke checks pass for homepage, clinical and resource pages at 768px, plus logo, both fonts and design-system assets.
- Search, mobile menu/Escape/focus return, resource search, skip link and simulated newsletter success pass. The newsletter POST is intercepted locally; no Mailchimp submission occurs.
- Local axe-core WCAG 2 A/AA, 2.1 AA and 2.2 AA sampling reports no violations on home, treatments explained, resource library or About. Specialist directory retains seven target-size findings on overlapping geographic pins. [Audit findings](stage-2-accessibility.json).
- Whitespace checks pass. The production application has no new dependencies; font compression and accessibility tooling are temporary workspace-only validation tools.

## Remaining accessibility review

This is not certification of WCAG conformance. Overlapping map pins require manual assessment; the labelled, searchable and keyboard-operable centre list provides an alternative. The directory's map tiles and third-party embeds depend on external providers. All-page manual assistive-technology, touch-target and zoom/reflow review is still needed. Full dark-mode page verification is out of scope for this preview. Existing resource PDF buttons remain content placeholders; Stage 2 does not turn them into real downloads.

## Preview locally

Use Node 24 and the repository-pinned pnpm 10.26.1:

```sh
pnpm install --frozen-lockfile
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/ph-navigator run dev
```

Open `http://localhost:3000/`. Do not merge or deploy to production without review.
