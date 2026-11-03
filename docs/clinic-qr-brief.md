# Clinic QR entry — print preparation brief

## Destination

Use the approved permanent public website origin followed by `/start`. For a repository-subpath deployment, retain its configured base path before `start`. The clinic page is implemented and the path should remain stable even if its content changes.

**Do not print a QR code pointing to a temporary Cloudflare deployment/branch preview or an unconfirmed PHSANZ domain.** The permanent public origin is not established by this implementation. Printable QR artwork awaits that decision; no fake or non-working QR is supplied.

## Suggested card/flyer copy

PH Navigator

An initiative of PHSANZ

**Information and support for life with pulmonary hypertension**

Scan to find a starting point for you or someone close to you:

- Newly diagnosed
- Living with PH
- Supporting someone

[Insert tested QR code to the confirmed public `/start` URL]

[Print the same short URL in readable text beneath the code]

Information supports, and does not replace, advice from your healthcare team.

## Artwork and validation checklist

- Use the approved PH Navigator wordmark and institutional attribution. Do not invent an official PHSANZ logo or add proposed-partner logos.
- Use a high-contrast dark QR on white, with an unobstructed quiet zone. A starting specification is at least 25mm square at final print size; validate the chosen code density and printing conditions rather than relying on size alone.
- Keep the readable URL as an alternative to scanning.
- Confirm ownership and long-term maintenance of the public domain/path before print production.
- Test printed proofs on representative iOS/Android phones, under clinic lighting and over mobile data, using the final destination.
- Verify all three choices, browser back, search, font/logo loading and privacy links.
- Do not include patient identifiers or health information in QR query strings.

## Scope

Start with one common clinic destination. No clinic-specific tracking, analytics events, role/profile storage, cookies or account mechanism is introduced. Clinic-level measurement can be considered separately after its purpose and privacy approach are agreed. No feedback form or feedback workflow is included in this change.
