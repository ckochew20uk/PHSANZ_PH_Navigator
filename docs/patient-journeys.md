# Simplified patient journeys and clinic entry

Implements the approved navigation/clinic-entry plan, **excluding the feedback loop at the user's request**. Stacked on `feat/phsanz-governance`.

## Visitor flow

Clinic QR → `/start` → newly diagnosed, living with PH, or supporting someone → recommended guidance → further information/community.

Homepage → Find your starting point, or one of three main destinations → relevant information.

The audience choices are ordinary links, not a questionnaire. They do not collect/store a diagnosis, audience profile or personal information. Visitors can change direction through Start here or normal browser navigation.

## Implemented changes

- Added compact `/start` with three clear entry choices, browse/search alternatives and a compact institutional footer. It loads no story imagery, video or newsletter form. A common stable path is ready for future clinic QR materials.
- Added `/understanding-ph`, gathering existing condition, diagnosis, treatment, test and appointment guidance. `/recently-diagnosed` remains a guided entry rather than the only route to clinical information.
- Rebuilt the three audience hubs using shared `JourneyHub` recommended links/grouped-topic lists. Three suggestions lead into compact further-topic groups. The existing newly-diagnosed note about online information is preserved in a keyboard-accessible disclosure.
- Living with PH groups everyday life, care and support. Supporting someone brings condition information, care/appointments and carer wellbeing together.
- Desktop navigation: Understanding PH, Living with PH and Community Voices, with Start here and Search as utilities. Mobile tabs: Start, Understand PH, Living with PH and Community. Removed the More drawer. Following user review, the For Healthcare Professionals button is retained in the top utility bar.
- Navigation configuration is shared by header, mobile tabs, footer and breadcrumb grouping. Updated search labels and added the two new routes to search.
- Added patient-route breadcrumbs. Supporting-someone pages belong to the Living with PH navigation group; diagnosis/treatment pages belong to Understanding PH. Routes remain independently browsable, not audience-locked.
- Shortened homepage to welcoming hero/Start action, three main pathway cards, the honest community placeholder and a brief PHSANZ attribution. Detailed education and resources are reached through the hubs.
- Footer contains specialist-directory/resources links plus About, Our Partners, Review Panels, professional information, launch governance and real information-policy links. Existing institutional/contact placeholders are retained.
- Maintained the separate newsletter outside `/start`; no feedback collection is added or repurposed from newsletter signup.
- Corrected mobile urgent-banner close-button positioning so it does not add an unnecessary row; urgent-support text/numbers and dismissal behaviour remain unchanged. Compact-footer focus/hover styles suit its light background.

## Preserved and deferred

All 29 existing routes remain, with two added routes (31 total). Detailed medical-article files, resource data, specialist-directory data, approved logo/fonts/palette, community placeholders, draft policy statuses and backend services remain unchanged. Patient hub introductions and navigation summaries are reorganised; no stories are invented.

No feedback route, form, API endpoint, storage, inbox workflow or “You said, we changed” section. No new accounts, audience tracking or clinic analytics. The existing newsletter payload/endpoints are unchanged.

Permanent public domain and printable QR artwork remain pending: see [clinic print brief](clinic-qr-brief.md). No QR is generated against a temporary preview URL. Public project contact details remain an intentional placeholder per the earlier user instruction.

## Verification

- TypeScript project references and frontend typecheck pass.
- Production builds pass for Cloudflare root and GitHub Pages subpath; existing bundle-size/third-party sourcemap advisories remain.
- All 31 routes render at 390px and 1440px without horizontal overflow or nested controls. Browser link-graph traversal confirms all routes remain reachable from home/start.
- New journey pages also pass at 320, 768, 1024 and 1280px.
- All three clinic paths and browser-back navigation pass. The clinic choices were checked with the urgent banner visible. The professional-site button is also visible in the utility bar after the user’s requested refinement.
- Breadcrumb navigation, desktop three-item/mobile four-item navigation, search, resource search and mocked newsletter success pass; no live newsletter submission or runtime errors.
- Subpath smoke checks verify clinic entry/back, new hubs, fonts/logos and breadcrumbs. Light clinic-footer keyboard focus is visibly coloured.
- Local axe WCAG 2 A/AA, 2.1 AA and 2.2 AA sampling reports no violations on homepage, Start, Understanding PH, all three audience hubs and Community Voices. [Results](journeys-accessibility.json). Full manual conformance review remains outstanding; existing map-pin limitations are unchanged.
- No new production dependencies, backend changes or secrets modified. Whitespace checks pass.

## Review

Cloudflare should build `feat/patient-journeys`. Review `/start`, `/understanding-ph`, `/`, `/recently-diagnosed`, `/living-well` and `/caring-for-someone`.

Screenshots: [clinic mobile](journey-screenshots/start-390.png), [clinic desktop](journey-screenshots/start-1440.png), [homepage](journey-screenshots/home-1440.png), [Understanding PH](journey-screenshots/understanding-ph-1440.png), [newly diagnosed](journey-screenshots/recently-diagnosed-1440.png), [Living with PH](journey-screenshots/living-well-1440.png), [supporting someone mobile](journey-screenshots/caring-for-someone-390.png).

Use Node 24/pnpm 10.26.1 for local development:

```sh
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/ph-navigator run dev
```

Do not merge or deploy to production without review.

## Professional-site button retained

Following review, the For Healthcare Professionals button is restored in the shared utility bar, including the clinic landing page. It links to the existing professional page without changing the three-item patient navigation. The button remains visible and routes correctly at 320, 390, 768 and 1440px, with no horizontal overflow. Production build and frontend typecheck pass; screenshots above are refreshed.
