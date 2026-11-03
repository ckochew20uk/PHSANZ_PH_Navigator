# Informational changes — implementation record

Implemented on `feat/information-update` following the user’s instruction to enact the [informational audit](informational-audit.md). This branch builds on the audit/report branch; it does not silently include technical PR #18 or merge/deploy production.

## What changed

- Revised the existing patient/professional articles against all 39 audit findings. Changes cover definitions, medicine mechanisms/interactions, CTEPH scope, symptoms/infusion plans, food/fluid/activity/travel advice, eligibility, contacts and patient-centred wording.
- Added **16 original, review-pending web guides** within the existing journeys. They cover first steps, symptoms/contact planning, medicine safety, CTEPH, tests, reproductive health, home oxygen, fatigue/sleep, relationships/life stages, work/driving, children/families, genetics, supportive care, staying well, accessing care and research choices.
- Connected guides through hubs and search, with page-specific titles/descriptions and static sharing heads for **51 canonical routes**. The main three patient journeys and professional switch remain the site’s navigation structure.
- Added source links, scope and explicit clinical-review status to the 14 existing substantive articles and 16 new guides. “Source check: 3 November 2026” is not represented as a clinical approval date.
- Added four genuine read/print resource links, including a blank personal contact plan that is filled in on paper, not collected by the website. Planned PDF records keep their in-development status; unsupported template dates/page counts were removed.
- Reconciled the directory into **25 PHSANZ-reference entries plus four earlier listings awaiting confirmation**. Corrected the provider-published Westmead switchboard and labelled general contacts. New reference entries link to current reference details without invented phone numbers, age eligibility or coordinates. Only the 18 existing mapped locations have pins.
- Country-labelled medical emergency and Australian emotional-support information. Qualified Australian benefits/service scope rather than implying full New Zealand coverage.

## Review and activation boundaries

These are drafted informational changes, not clinician or patient-panel approval. Full guideline appraisal, current medicine subsidy/supply, individual clinical plans, state-specific eligibility/legal advice and provider confirmation remain external checks. Sotatercept funding/availability is not asserted either way.

The cultural/language and paediatric material is interim signposting, not a substitute for genuine cultural co-design, qualified translation or paediatric review. Real community stories, their consent/withdrawal workflow, PDF publication and participation collection remain gated. No patient narratives, appointments, approvals or survey results were invented. No clinical assessment instrument was copied or activated.

Three additional Australian sources were checked for the new material: Queensland Health home-oxygen safety, the Department of Health’s palliative-care explanation and Fair Work disability information. Their access/scope notes are in [the additional-source register](information-update-additional-sources.json). The original 68-entry audit register remains a frozen historical record rather than being rewritten to make the audit appear more complete.

## Finding-by-finding implementation

“Implemented” below describes code/copy, not clinical closure. [Machine-readable status](information-update-status.json) records the same distinction.

| Finding | Source change | Remaining check |
| --- | --- | --- |
| INF-01 | Corrected strict PVR operator and combined haemodynamic context. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-02 | Qualified wedge-pressure/group interpretation. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-03 | Corrected PDE-5 mechanism. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-04 | Reworded sGC role and persistent/recurrent CTEPH scope. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-05 | Added interactions, monitoring and medicine-safety guide. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-06 | Separated medicine scope, regulation, subsidy, supply and suitability. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-07 | Added newer pathway overview with explicit access/review limits. | Full 2026 guideline appraisal and current Australian PBS/supply checks remain outstanding; no funded/unfunded access asserted. |
| INF-08 | Added selected vasoreactive-patient CCB explanation without a dosing recommendation. | Exact patient-selection and testing details require clinician review. |
| INF-09 | Reconciled no-cure wording with potentially curative PEA and distinct BPA role. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-10 | Qualified PH umbrella, rare PAH and cause-dependent explanation. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-11 | Qualified sleep-apnoea/hypoventilation context. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-12 | Removed deterministic inheritance and unsupported frequency ranking. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-13 | Qualified RHC decision-making after echo. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-14 | Reframed diagnostic waiting/referral urgency and symptom escalation. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-15 | Replaced generic fluid/weight prescriptions with personal-plan guidance; kept correct salt conversion. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-16 | Added exercise symptom escalation and emergency context. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-17 | Added guard against attributing new symptoms to anxiety. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-18 | Qualified safety, supervision and universal activity examples. | Individual exercise suitability and rehabilitation advice need specialist/physiotherapy review. |
| INF-19 | Aligned travel hydration with prescribed fluid plan. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-20 | Replaced universal FAA/battery wording with operating-carrier rules; qualified HAST/altitude advice. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-21 | Retained continuous-infusion safety warning and added personal failure/backup plan. | No individual medicine/device emergency protocol is supplied; the treating service must provide it. |
| INF-22 | Removed unsupported NDIS frequency claim and worst-days-only advice; added access/evidence scope. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-23 | Corrected categorical PBS centre rule and qualified Safety Net costs/card/brand premiums. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-24 | Expanded DSP criteria without making eligibility promises. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-25 | Corrected Carer Payment inability-to-work implication. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-26 | Qualified tailored packages and distinguished routine versus emergency respite access. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-27 | Qualified aged-care age/situation pathways. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-28 | Replaced universal medical-POA label with jurisdiction-specific decision-making guidance. | Individual state/territory legal advice and document selection remain external. |
| INF-29 | Qualified state travel assistance and partial subsidies. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-30 | Kept supported Medicare concept and added individual/group/referral/cost context. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-31 | Added eleven reference entries, retained four pending records, removed blanket designation and invented map placement. | Service scope, age eligibility and current provider contacts still need confirmation; four older records remain explicitly pending. |
| INF-32 | Corrected Westmead phone and labelled general contacts, preserving RCH clinic/switchboard distinction. | Westmead published switchboard corrected; Royal Children’s number is labelled general/switchboard rather than silently replaced with a PH-service number. |
| INF-33 | Added explicit AU/NZ emergency labels and country-specific emotional-support scope. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-34 | Removed self-endorsement and added source dates/scopes/review-pending status to articles. | Actual article-specific clinical/lived-experience review and approval records remain pending. |
| INF-35 | Aligned search descriptions with available web guides, planned PDFs and Australian service scope. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-36 | Removed unsupported dates/page counts from all planned resource records. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-37 | Replaced unsupported guideline labels/inactive referral action with honest review-pending resources and real references. | Content remains subject to actual clinical/editorial review; no approval date invented. |
| INF-38 | Softened deterministic/guilt-inducing wellbeing language; preserved honest story placeholders. | Actual lived-experience and psychology review has not taken place. |
| INF-39 | Distinguished BNP/NT-proBNP and contextual interpretation. | Content remains subject to actual clinical/editorial review; no approval date invented. |

## Coverage-topic outcomes

These are not 26 completed standalone publications. Some topics are combined into introductory guides; the unfinished human/service work remains visible.

| Topic | Location | Actual outcome |
| --- | --- | --- |
| GAP-01 — Symptoms, deterioration and a personal action plan | `/treatments/when-to-seek-help` | Draft guide and real printable blank contact plan. |
| GAP-02 — Pregnancy, contraception and reproductive decisions | `/living-well/pregnancy-family-planning` | Introductory discussion guide; individual reproductive-health advice remains essential. |
| GAP-03 — Medicine safety, monitoring, supply and interruption | `/treatments/medicine-safety` | Safety questions, interaction warning, monitoring/supply/infusion signposting. |
| GAP-04 — CTEPH as a distinct diagnosis and treatment journey | `/treatments/cteph` | Draft CTEPH overview and distinct assessment/treatment roles. |
| GAP-05 — Other PH groups and treatment boundaries | `/recently-diagnosed/what-is-ph` | Corrected scope and treatment boundaries. |
| GAP-06 — WHO functional class, groups, risk and test trends | `/treatments/test-results` | Added groups versus functional class/risk/trends explanation. |
| GAP-07 — What to expect from investigations | `/treatments/tests-and-procedures` | Draft preparation/questions guide without fasting or medicine-hold instructions. |
| GAP-08 — Home oxygen and equipment safety | `/living-well/oxygen-at-home` | Basic prescribed-use/fire/backup guide; state funding and individual equipment advice remain external. |
| GAP-09 — Fatigue, pacing, sleep and everyday routines | `/living-well/fatigue-sleep` | Draft pacing/sleep discussion guide. |
| GAP-10 — Sexual health, intimacy and relationships | `/living-well/relationships-life-stages` | Introductory intimacy and relationship guidance. |
| GAP-11 — Menopause and changing life stages | `/living-well/relationships-life-stages` | Life-stage discussion prompts; no unreviewed hormone-treatment recommendations. |
| GAP-12 — Driving, parking permits and mobility | `/living-well/work-driving` | Australian assessment/local-authority signposting, not a definitive permit/licensing determination. |
| GAP-13 — Employment, study and reasonable adjustments | `/living-well/work-driving` | Work/study adjustment discussion with Fair Work reference; individual legal/insurance advice remains external. |
| GAP-14 — Paediatric PH and transition to adult care | `/recently-diagnosed/children-families` | Family/transition signposting and adult-scope boundary; full paediatric clinical resource/review still needed. |
| GAP-15 — Talking with children about a parent’s PH | `/recently-diagnosed/children-families` | Introductory family discussion guidance; full age-specific materials need child/family review. |
| GAP-16 — Heritable PAH, genetics and family screening | `/recently-diagnosed/genetics` | Introductory counselling/family-assessment questions, no deterministic risk claims. |
| GAP-17 — Supportive/palliative care and planning ahead | `/living-well/planning-ahead` | Supportive care alongside treatment and local legal-process signposting. |
| GAP-18 — Vaccination, infection prevention and intercurrent illness | `/living-well/staying-well` | Individual prevention/illness-planning guide; current vaccine recommendation/funding review remains clinical. |
| GAP-19 — Rural/remote access, telehealth and local-team coordination | `/living-well/accessing-care` | Local/specialist coordination, telehealth and conditional travel assistance. |
| GAP-20 — Aboriginal and Torres Strait Islander cultural safety | `/living-well/accessing-care` | Interim cultural-support signposting only; genuine culturally appropriate co-design has not occurred. |
| GAP-21 — Languages, health literacy and accessible formats | `/living-well/accessing-care` | Print options and accessible-language requests; verified translations/audio and comprehension review remain outstanding. |
| GAP-22 — Research, registries and clinical trials | `/treatments/research` | Research/registry/co-design distinctions and questions; no recruitment, registry intake or unverified trial eligibility. |
| GAP-23 — Real community voices | `/community-voices` | Intentionally remains a consent-gated story placeholder; no real contributions available to publish. |
| GAP-24 — Useful printable resources | `/resource-library` | Four real read/print web-guide links; 22 PDF publications remain in development, not counterfeit downloads. |
| GAP-25 — Newly diagnosed reassurance with practical next steps | `/recently-diagnosed/first-steps` | Calm first-days guide connected from clinic journey and resource library. |
| GAP-26 — New Zealand scope boundary | `Sitewide country labels` | Australian eligibility scope and AU/NZ emergency distinction implemented; full NZ localisation still outstanding. |

## Verification

- Frozen pnpm 10.26.1 install, complete workspace typecheck/build, frontend build-plugin/Vite-config typecheck, and root/repository-subpath builds passed.
- Structure checks confirm 51 unique routes, 16 new guides, valid guide sources/related links/hub destinations, 25 reference-listed directory entries and four pending entries.
- Browser/axe review covers **102 mobile/desktop views** (51 routes at 390px and 1440px). No runtime page errors or horizontal overflow. The remaining settled-page axe finding is the already-known overlapping map-target issue; this content change does not claim to resolve map touch-target conformance.
- Final changed pages were rechecked after the copy/phone-label cross-check. Manual checks cover every new guide’s review/source status, no health-information forms in those guides, new-guide search, 320px reflow, the professional switch, directory status/phone handling, print isolation, six direct subpath arrivals and local assets. No real newsletter request was sent.
- Raw HTML heads were checked for all 51 routes in both build modes, including test-only canonical origin/base handling. The permanent public origin is still unconfirmed; `https://example.org` is only a build fixture.
- Original audit evidence remains valid against its recorded git baseline. The implementation does not overwrite historical findings to pretend prior review or publication occurred.

[Sanitized verification evidence](information-update-verification.json) records the checks and their limits. Main/live deployment, account settings and actual clinical approval are not established by a local build or this record.

## Follow-up order

1. Review the P1 medical and Australian-policy drafts with the appropriate clinical, nurse/pharmacist and service/policy reviewers. Record actual decisions and dates.
2. Verify directory contact purpose, age scope and referral arrangements with providers; do not equate registry participation with accreditation.
3. Complete full-text/current-access checks and specialist/lived-experience/cultural/language reviews where specified above.
4. Publish real approved files/stories and activate participation only through the separately agreed processes. Preserve the requested contact placeholder until a verified route is supplied.
5. Reconcile overlapping metadata, print and layout edits with technical PR #18 before integrating both change sets. No technical audit fix is assumed live simply because this content branch builds.
