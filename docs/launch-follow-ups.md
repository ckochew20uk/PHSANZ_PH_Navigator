# Launch follow-ups — institutional/governance update

These are outstanding decisions, not completed safeguards. Revisit in future launch/governance checks.

| Item | Current state | What completes it |
| --- | --- | --- |
| Public project contact | **Intentionally a placeholder at the user's request** | User supplies a verified PHSANZ contact email/URL and approved purposes. Update `src/data/siteIdentity.ts`, policy feedback wording and this register. Do not invent an address or silently mark this complete. |
| Privacy policy | Draft route `/privacy` describes implemented newsletter/local-storage behaviour | PHSANZ confirms responsible legal entity, contact, retention, access, service providers, cross-border processing and complaint handling; approves final wording. |
| Terms and copyright | Draft route `/terms`; joint copyright claim removed | Confirm legal owner(s), contribution/third-party asset permissions and approved terms/attribution. Institutional hosting alone does not establish content ownership. |
| Accessibility statement | Real route `/accessibility` with known limitations | Complete manual assistive-technology, zoom/reflow and touch-target review; confirm feedback contact. Overlapping map pins remain a known issue. |
| Clinician Advisory Panel | Dr Christopher Chew is the confirmed website lead | Confirm additional medical/nursing members and later allied health participation before publication of their names/details. |
| Lived Experience Panel | Tharuka Kossinna is the confirmed website lead | Confirm additional members and approved public details. |
| Review workflow | Planned; no blanket approval claim | Record responsibility, review outcomes and content-specific review dates before presenting material as reviewed/approved. |
| PHA Australia collaboration | Proposed, unconfirmed | Confirm scope/agreement and approved acknowledgement/logo use. |
| Lung Foundation Australia collaboration | Proposed, unconfirmed | Confirm scope/agreement and approved acknowledgement/logo use. |
| Resource downloads | Marked draft/in development | Real files, approval records, licensing and working links. |
| Story collection | Placeholders; submissions closed | Real content, consent, approved attribution/portraits, submission/withdrawal process and functioning story routes. |
| Hosting/accreditation | Approved roadmap, not verified completion | Confirm PHSANZ domain/infrastructure migration and any formal accreditation separately. |

The proposal's budgets/grant targets are planning context. Do not treat them as payment records, secured matched funding or public partner endorsements.

## Clinic entry and visitor flow

`/start` and the simplified patient journeys are implemented on `feat/patient-journeys`. Before producing clinic flyers/cards, confirm the permanent public origin and test QR print proofs against its stable `/start` URL; see `clinic-qr-brief.md`. No QR should point to a temporary preview. Get Involved information pages have since been added as a foundation. Feedback and expression-of-interest collection remain closed pending a separately agreed receiving team, privacy arrangements and workflow.

## Get Involved and social publishing foundation

`/get-involved` and its three opportunity pages are information-only and marked in development. Before activation, confirm receiving/review ownership, provider/storage, minimal fields, consent, retention/deletion, response expectations, and whether activities are service improvement/co-design or research. Newsletter signup is separate. Official Facebook/Instagram URLs and PUBLIC_SITE_ORIGIN remain pending; no social discussion group, feed, SDK or message intake is introduced.

## Informational audit — 3 November 2026

See [the informational audit](informational-audit.md), including a 35-route
inventory, 39 findings with proposed wording, 26-topic development matrix and
Australian source register. This is a desk audit and review package, not
clinical approval or a deployed content revision.

- [ ] Adjudicate P1 definitions, medicine-safety, symptom escalation and
  Australian eligibility/localisation findings before promoting the content.
- [ ] Reconcile the 18-entry directory with PHSANZ/provider references; confirm
  service scope and contact purpose. Registry participation is not accreditation.
- [ ] Complete current treatment-guideline, medicine information, PBS and supply
  checks where full text/current access could not be established.
- [ ] Arrange actual clinical, lived-experience and relevant specialist/policy
  review; record article-specific approval and review dates only when completed.
- [ ] Develop the agreed priority resources within the existing patient journeys;
  preserve deliberate story/download/participation placeholders until ready.
- [ ] Verify rights before reproducing third-party guides or assessment instruments;
  no PHA UK publication or EmPHasis-10 questionnaire has been copied or activated.

The public contact placeholder remains intentional. This Australian-focused
review does not establish full New Zealand localisation or final privacy/legal
approval. Technical PR #18 remains a separate change set to reconcile.
