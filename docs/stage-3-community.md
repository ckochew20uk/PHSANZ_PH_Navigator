# Stage 3 — Community Voices placeholder preview

The user confirmed that story content is not yet built and requested placeholder sections. This implementation is stacked on Stage 2 and deliberately publishes no patient stories, portraits, excerpts or submission form.

## Page structure

1. Welcoming Community Voices introduction in the Nunito/DM Sans design system.
2. Explicit story-collection placeholder shared with the homepage.
3. Three illustrative planned themes: finding your feet, everyday life with PH, and family/carers. These are labelled planned content, not testimonials or active filters.
4. “Connect with others” links to existing internal carer-support, mental-wellbeing and resource-library pages.
5. A sharing section that states submissions are not open and links to the existing governance checklist.

The homepage links to Community Voices and uses the same placeholder copy. Search results now explain that the collection is being developed; the unsupported forum keyword is removed.

## Removed content and audit findings

The four previously hard-coded stories (Sarah, David, Elena and Michael) had no supporting source/consent/publication records in the inspected repository. They are removed from the current page rather than relabelled as real drafts. They remain in Git history for audit purposes and must not be republished without verification.

Removed the unsupported “All stories shared with permission / PHA Australia vets and approves” assertion, the third-party video whose provenance/publication suitability was not established, inactive full-story buttons, and the invitation to submit stories before an intake process exists. No replacement stories, portraits or publication assurances have been invented.

The unused homepage story-data/approval-flag renderer is removed for this placeholder phase. There are no public story records and no full-story URLs or empty category controls.

## Proposed future content model — not published data

A later approved story collection can use:

| Field | Purpose |
| --- | --- |
| `id`, `slug`, `title` | Stable identity and a real full-story route |
| `displayName` | Contributor-approved public attribution; anonymity/pseudonym if requested |
| `excerpt`, `body` | Approved text with editorial/clinical review where appropriate |
| `categories` | Only contributor-approved classifications relevant to their account |
| `portrait`, `portraitAlt` | Optional authorised imagery with accessible description |
| `publicationStatus` | Draft, approved, published, withdrawn |
| `reviewedAt` | Content review date |
| `consentRecordRef` | Private editorial reference, not the consent document itself |

Keep raw consent records, private contact details and unpublished health information outside public source/bundles. An approval flag in frontend data does not establish consent. Publish only after consent, text/portrait approval, a verified full-story destination, withdrawal procedure and review responsibilities are established. Avoid mandatory ages, diagnosis subtypes or other sensitive disclosures.

Potential later categories include recently diagnosed, PAH, CTEPH, long-term experiences and family/carers. None are exposed as filters while no approved stories exist.

## Required content and operational gaps

- Actual patient/carer contributions, approved wording and attribution.
- Optional consented portraits or other authorised imagery.
- Named editorial responsibility, consent/withdrawal process and review schedule.
- Verified Australian/New Zealand organisation/support URLs before adding direct external listings. This implementation adds only existing internal navigation and does not imply partnerships.
- Full-story page routes, approved data and category/filter behaviour require a later implementation when real content is available.

There are no accounts, public posting, messaging, forum, personal-data collection or new backend integrations.

## Validation

- Frontend TypeScript passes.
- Cloudflare root build and GitHub Pages subpath build pass; existing bundle-size/third-party sourcemap advisories remain.
- Homepage and Community Voices tested at 320, 390, 768, 1024, 1280 and 1440px: no horizontal overflow, placeholder present, no story iframe/full-story buttons/unsupported permission assertion.
- All four community-page support/governance destinations render. No new external links are introduced.
- No main-content forms, disabled placeholder actions or category controls are present.
- Local axe WCAG 2 A/AA, 2.1 AA and 2.2 AA samples report no violations on the two updated pages; no browser runtime errors observed. This is not a full manual WCAG certification.
- Whitespace checks pass. Medical education pages, existing routes, shared brand assets, newsletter and backend services are unchanged.

See [audit results](stage-3-accessibility.json), [community desktop](stage-3-screenshots/community-1440.png), [community mobile](stage-3-screenshots/community-390.png), [homepage desktop](stage-3-screenshots/home-1440.png) and [homepage mobile](stage-3-screenshots/home-390.png).

## Preview

Cloudflare should build `feat/stage-3-community`. Open `/community-voices` on that branch preview, then compare the homepage's community section.

For local preview with Node 24 and pnpm 10.26.1:

```sh
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/ph-navigator run dev
```

Do not merge or deploy to production without review.
