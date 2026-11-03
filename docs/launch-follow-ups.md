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

## Technical audit follow-ups — 3 November 2026

See [the full audit](technical-audit.md) and [machine-readable findings](audit/findings.json).
Source corrections are on the audit branch; verify merge/deployment before
marking them live.

- [ ] Verify every active Pages/Workers/Express newsletter route uses the hardened
  shared handler; inventory and retire obsolete endpoints.
- [ ] Configure and verify durable edge signup throttling/challenge, provider
  quotas/alerts and ownership. Browser Origin checks and double opt-in do not
  prevent automated confirmation-email abuse (AUD-21).
- [ ] Review and test Mailchimp email-confirmation delivery, audience settings,
  unsubscribe/deletion and data/log retention with the account owner.
- [ ] Verify live TLS, headers/CSP, domains, bindings, WAF/rate controls and
  repository protections. Execution-environment egress blocked live HTTP checks;
  no Cloudflare account configuration was available.
- [ ] Resolve overlapping map targets with usable clustering/expansion or a
  list-first redesign, plus manual touch/assistive-technology review (AUD-20).
- [ ] Review urgent-support jurisdiction labels and verified services for both
  Australia and New Zealand before wider ANZ distribution (AUD-23). Existing
  Australian numbers are not evidence of New Zealand coverage.
- [ ] Profile the root bundle on real devices/networks; retain the current size
  warning until a measured optimisation is justified (AUD-22).

The intentionally pending contact, privacy/terms approval, clinical review,
permanent origin and participation-activation decisions remain open.
