# PHSANZ institutional identity and governance preview

Implements the user's approved plan following the supplied `PH_Navigator_PHSANZ_25.10.26.docx` and subsequent clarification of panel leads. The user's latest instructions govern public presentation; original proposal wording and historical redesign notes are retained as historical context.

## Changes

- Header, footer, homepage attribution and search-engine description now identify PH Navigator as **An initiative of PHSANZ**. PH Navigator's approved sailboat/DM Sans logo and Nunito headings remain; no unofficial PHSANZ emblem is invented.
- About explains the PHSANZ Patient Advocacy Subcommittee institutional home. Co-design, hosting integration and accreditation are not represented as completed.
- “Our Partners” replaces “The Partnership”, with PHA Australia (lived experience) and Lung Foundation Australia (resources) explicitly **proposed and not yet confirmed**. No partner logos or new external endorsements.
- “Our Review Panels” lists only **Dr Christopher Chew**, Clinician Advisory Panel lead, and **Tharuka Kossinna**, Lived Experience Panel lead. All former placeholder names/affiliations/diagnoses are removed. Further membership is being developed. Medical/nursing perspectives are intended, with allied health planned; the clinical-sponsor role is not inferred from the panel-lead role.
- Navigation, mobile menu, About cards and search use the new names. Existing `/about/partnership` and `/about/advisory-panel` routes are preserved.
- Resource library and professional resource wording describes development/pending review, not blanket panel approval. Draft resource metadata no longer appears as completed publication/update history. Inactive PDF actions are replaced by “In development” labels; “Most Downloaded” becomes “Planned resources”.
- Specialist directory no longer claims joint PHA Australia maintenance. Patient-organisation references on support pages remain independent signposting with a request to confirm current services.
- Unverified project email and inactive professional-contact button removed. A shared contact component reads a central `siteIdentity.ts` setting. **The user explicitly requested this remain a placeholder and be flagged in future checks.**
- Footer privacy, terms and accessibility items now link to real routes. Privacy and terms pages are explicitly drafts awaiting PHSANZ approval. Accessibility lists aims/current limitations, without a conformance-certification claim.
- Newsletter wording accurately identifies the existing Mailchimp processing instead of promising that details never reach third parties. Subscription payload/endpoints and backend behaviour are unchanged.
- Removed the assumed joint copyright ownership statement. Footer now gives institutional attribution/year without asserting ownership of every asset. Final copyright/permissions are flagged for confirmation.
- Updated the approved-proposal context and AGENTS guidance so future work uses the current institutional model and revisits the contact placeholder. See [launch follow-ups](launch-follow-ups.md).

## Scope and remaining decisions

No backend, credentials, hosting configuration, newsletter delivery behaviour, medical treatment advice, official-logo assets or deployment secrets changed. No organisations contacted. No merge or production deployment.

Contact details, policy approval, copyright ownership, further panel membership and partnership agreements remain outstanding. No funding release, formal co-lead appointment, clinical-sponsor appointment, completed co-design or accreditation is inferred from approval of the proposal. The funded roadmap and the website redesign stages are separate.

## Validation

- TypeScript project references and frontend typecheck pass.
- Cloudflare root and GitHub Pages subpath production builds pass; existing bundle-size/third-party sourcemap advisories remain.
- All 29 registered routes render at 390px and 1440px with Nunito headings, no horizontal overflow, no nested interactive controls and no runtime errors.
- Homepage additionally tested at 320, 768, 1024 and 1280px. Six governance/information pages also checked at 320, 768 and 1024px.
- Existing menu, search, skip-link, resource-search and mocked newsletter-success checks pass; no live Mailchimp submission.
- Partner/panel names, pending contact status, footer policy links, removal of stale claims and new search results verified in the browser.
- Local axe WCAG 2 A/AA, 2.1 AA and 2.2 AA sampling reports no violations on homepage, About, Our Partners, panels, privacy, terms, accessibility and resources. This is not manual accessibility certification. [Findings](governance-accessibility.json).
- Subpath browser checks cover partner/panel/policy routes, footer URLs and logos.
- Whitespace checks pass; source audit finds no old institutional attribution, obsolete panel names, invented panel members or unverified project email in the current application.

## Review

Cloudflare should build `feat/phsanz-governance`. Review `/about`, `/about/partnership`, `/about/advisory-panel`, `/privacy`, `/terms`, `/accessibility`, the resource library, and the shared header/footer.

Screenshots: [About](governance-screenshots/about-1440.png), [Our Partners desktop](governance-screenshots/about-partnership-1440.png), [Our Partners mobile](governance-screenshots/about-partnership-390.png), [Review panels desktop](governance-screenshots/about-advisory-panel-1440.png), [Review panels mobile](governance-screenshots/about-advisory-panel-390.png), [Privacy draft](governance-screenshots/privacy-1440.png).

This PR is stacked on Stage 3. Do not merge or deploy to production without review.
