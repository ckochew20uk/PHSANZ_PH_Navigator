# Findings and proposed corrections

All wording below is an editorial draft for the stated reviewers. No patient-facing text was changed. Source IDs link to the source register; indexed-only/blocked retrieval is declared there. P1 = review before promotion/republication; P2 = substantive improvement; P3 = editorial hygiene.

## INF-01 — Strict PVR boundary and complete diagnostic context

**P1 · Factual discrepancy**. Supported discrepancy or documented gap.

- [test-results.tsx:54](../../artifacts/ph-navigator/src/pages/treatments/test-results.tsx#L54): “PVR &ge; 2 WU is a criteria”

**Why change it:** The 2024 definition uses PVR >2 WU, not ≥2. Pre-capillary PH needs the combined mPAP/PAWP/PVR definition; a number does not establish Group 1 PAH or treatment eligibility.

**Proposed wording/action:** Pre-capillary PH is defined at right heart catheterisation by mPAP >20 mmHg, PAWP ≤15 mmHg and PVR >2 Wood units. Your specialist interprets these measurements with other tests to identify the cause; they should not be used to diagnose yourself or decide treatment.

**Evidence:** [CL01](sources.md#cl01), [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-02 — Wedge pressure does not identify the clinical group on its own

**P1 · Overgeneralisation**. Supported discrepancy or documented gap.

- [test-results.tsx:49](../../artifacts/ph-navigator/src/pages/treatments/test-results.tsx#L49): “It helps doctors distinguish between Group 1 PAH”

**Why change it:** The two-group shorthand omits other pre-capillary causes and combined post-/pre-capillary disease. The existing ≤15/>15 boundary is not itself the error.

**Proposed wording/action:** Wedge pressure helps your team understand whether pressure from the left side of the heart contributes to PH. It is interpreted alongside pulmonary vascular resistance, imaging and your medical history; it cannot identify your PH group by itself.

**Evidence:** [CL01](sources.md#cl01), [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-03 — PDE-5 mechanism is misstated

**P2 · Factual discrepancy**. Supported discrepancy or documented gap.

- [explained.tsx:56](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L56): “allowing the lungs to produce more nitric oxide”

**Why change it:** Sildenafil inhibits breakdown of cGMP, enhancing the nitric-oxide signalling pathway. Increasing production of nitric oxide is not the mechanism described in the Australian product information.

**Proposed wording/action:** PDE-5 inhibitors, such as sildenafil and tadalafil, help a natural blood-vessel relaxation signal last longer by reducing the breakdown of cGMP. Your specialist decides whether this medicine is suitable for your type of PH.

**Evidence:** [AU01](sources.md#au01). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-04 — Explain sGC stimulation without equating it to PDE-5 inhibition

**P2 · Qualification**. Supported discrepancy or documented gap.

- [explained.tsx:69](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L69): “sGC stimulators enhance the body's sensitivity to nitric oxide”

**Why change it:** The existing wording captures part of the pathway but omits direct sGC stimulation. The clinical CTEPH indication also includes persistent/recurrent disease after surgery, not just patients unable to have surgery.

**Proposed wording/action:** Riociguat acts on the sGC/cGMP pathway to help blood vessels relax. It may be used for selected PAH patients and for inoperable or persistent/recurrent CTEPH after surgery, following specialist assessment.

**Evidence:** [AU02](sources.md#au02), [AU09](sources.md#au09). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-05 — Add medicine-interaction and monitoring safeguards

**P1 · Safety omission**. Supported discrepancy or documented gap.

- [explained.tsx:31](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L31): “Your specialist may prescribe one or a combination of these medications.”

**Why change it:** Combination therapy is not permission to combine any listed drugs. Australian CMIs explicitly warn about riociguat/PDE-5 inhibitors and nitrates; patient copy lacks medication-specific safety navigation, monitoring and missed-dose/pump advice.

**Proposed wording/action:** Only take combinations prescribed by your PH team. Riociguat must not be taken with PDE-5 inhibitors such as sildenafil or tadalafil; nitrate medicines can also be unsafe with these treatments. Check your current Consumer Medicine Information and ask your PH team or pharmacist before adding any medicine, including non-prescription or herbal products. Ask for your monitoring and missed-dose plan.

**Evidence:** [AU01](sources.md#au01), [AU02](sources.md#au02), [UK30](sources.md#uk30). **Proposed reviewer:** Clinician Advisory Panel with a PH pharmacist.

**State:** Proposed only; not applied or clinically approved.

## INF-06 — Distinguish treatment suitability from Australian access

**P1 · Scope/access ambiguity**. Supported discrepancy or documented gap.

- [explained.tsx:31](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L31): “Targeted therapies (often used for WHO Group 1 PAH)”
- [explained.tsx:83](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L83): “Epoprostenol, Iloprost, Treprostinil, Selexipag.”

**Why change it:** Often used for PAH is too weak a boundary for an all-PH audience. A drug/route list also does not establish TGA indication, PBS funding or practical Australian supply; treprostinil access was not resolved in this audit.

**Proposed wording/action:** Treatment depends on the cause and type of PH. Medicines used for PAH are not suitable for every PH group. This overview describes treatment approaches; Australian registration, subsidy and supply vary by medicine and indication. Your specialist and pharmacist can explain the options that apply to you.

**Evidence:** [CL03](sources.md#cl03), [AU08](sources.md#au08), [AU09](sources.md#au09), [UK11](sources.md#uk11). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-07 — Review newer treatment pathways and 2026 guidance

**P1 · Currency gap**. Currency gap confirmed; detailed new-guideline appraisal and current subsidy/supply unresolved.

- [explained.tsx:29](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L29): “Targeted PH Therapies”
- [resource-library.tsx:88](../../artifacts/ph-navigator/src/pages/resource-library.tsx#L88): “A clear summary of the four main drug classes used in PH”

**Why change it:** The treatment taxonomy omits activin-signalling therapy. TGA published a Winrevair assessment and a September 2026 ERS update exists. Detailed current PBS access and the full 2026 guideline were not retrievable, so neither is inferred.

**Proposed wording/action:** Treatment approaches continue to develop, including medicines that act on the activin-signalling pathway, such as sotatercept for selected adults with PAH. Ask your PH team about its role and current Australian access. Editorial instruction: add an Australian medicines/access review before publishing detailed eligibility or monitoring text.

**Evidence:** [AU03](sources.md#au03), [CL03](sources.md#cl03), [CL04](sources.md#cl04), [LIM01](sources.md#lim01). **Proposed reviewer:** Clinician Advisory Panel with PH pharmacist and access-policy reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-08 — Selected vasoreactive PAH treatment needs explanation

**P2 · Coverage gap**. Coverage gap confirmed; exact selection/testing text requires full guideline review.

- [explained.tsx:29](../../artifacts/ph-navigator/src/pages/treatments/explained.tsx#L29): “Targeted PH Therapies”

**Why change it:** The overview lacks the selected-patient role of calcium-channel blockers and vasoreactivity testing. This is a missing explanation, not a recommendation for readers to start a common blood-pressure medicine.

**Proposed wording/action:** A small, selected group of people with certain types of PAH may be offered calcium-channel blockers after specialist testing. These medicines are not suitable for everyone with PH and should never be started or adjusted for PH without specialist advice.

**Evidence:** [CL02](sources.md#cl02), [UK08](sources.md#uk08). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-09 — Blanket no-cure wording conflicts with CTEPH

**P1 · Internal contradiction**. Supported discrepancy or documented gap.

- [index.tsx:17](../../artifacts/ph-navigator/src/pages/treatments/index.tsx#L17): “While there is no cure for PH”
- [mental-wellbeing.tsx:47](../../artifacts/ph-navigator/src/pages/living-well/mental-wellbeing.tsx#L47): “You cannot cure PH”
- [what-is-ph.tsx:113](../../artifacts/ph-navigator/src/pages/recently-diagnosed/what-is-ph.tsx#L113): “CTEPH can sometimes be cured or significantly improved”

**Why change it:** The umbrella statement contradicts the same site’s potentially curative CTEPH surgery section. BPA should be described as a treatment option rather than guaranteeing cure. General health sites may also oversimplify; internal consistency and expert evidence matter.

**Proposed wording/action:** Many forms of PH need ongoing treatment. Some people with CTEPH can have surgery that may be curative; others may benefit from balloon pulmonary angioplasty or medicines. Your specialist team can explain what is possible for your particular type of PH.

**Evidence:** [UK10](sources.md#uk10), [AU02](sources.md#au02), [AU09](sources.md#au09), [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-10 — Keep rare PAH distinct from PH as an umbrella

**P2 · Scope/epidemiology**. Supported discrepancy or documented gap.

- [what-is-ph.tsx:31](../../artifacts/ph-navigator/src/pages/recently-diagnosed/what-is-ph.tsx#L31): “is a rare, complex, and serious condition”

**Why change it:** The website serves all five groups. Presenting every PH phenotype as rare and as narrowed pulmonary arteries obscures PH associated with common left-heart/lung disease. The proposal’s rare-disease rationale still suits PAH-focused clinic journeys; clarify scope rather than discard it.

**Proposed wording/action:** PH means higher-than-normal pressure in the blood vessels of the lungs. It has several causes, including heart or lung disease. PAH is a rare type of PH. The cause matters because investigations, treatment and support needs differ.

**Evidence:** [UK05](sources.md#uk05), [CL01](sources.md#cl01), [AU04](sources.md#au04). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-11 — Sleep apnoea is not a routine stand-alone Group 3 explanation

**P2 · Classification qualification**. Supported discrepancy or documented gap.

- [what-is-ph.tsx:102](../../artifacts/ph-navigator/src/pages/recently-diagnosed/what-is-ph.tsx#L102): “or severe sleep apnea.”

**Why change it:** The guideline distinguishes hypoventilation and coexisting lung disease; isolated obstructive sleep apnoea should not be presented as a common cause of significant PH without qualification.

**Proposed wording/action:** Group 3 PH is associated with lung disease and/or low oxygen, including some hypoventilation conditions. If you have sleep apnoea, your specialist will consider whether other lung or breathing conditions contribute to PH.

**Evidence:** [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-12 — Avoid deterministic inheritance and unsupported frequency claims

**P2 · Genetic communication**. Supported discrepancy or documented gap.

- [what-is-ph.tsx:77](../../artifacts/ph-navigator/src/pages/recently-diagnosed/what-is-ph.tsx#L77): “Passed down through genetics.”
- [what-is-ph.tsx:76](../../artifacts/ph-navigator/src/pages/recently-diagnosed/what-is-ph.tsx#L76): “The cause is unknown (the most common type of PAH).”

**Why change it:** Heritable does not mean every relative will develop PH. The most-common ranking lacks an identified population/source; replace it rather than invent Australian prevalence.

**Proposed wording/action:** Idiopathic PAH means no cause has been identified. Heritable PAH can involve a genetic change that increases risk; carrying a change does not mean a person will necessarily develop PAH. Your team can advise whether genetic counselling or family assessment is relevant.

**Evidence:** [UK05](sources.md#uk05), [CL01](sources.md#cl01). **Proposed reviewer:** Clinician Advisory Panel with genetics input where required.

**State:** Proposed only; not applied or clinically approved.

## INF-13 — Do not imply every suggestive echo mandates RHC

**P1 · Overgeneralisation**. Supported discrepancy or documented gap.

- [diagnostic-journey.tsx:28](../../artifacts/ph-navigator/src/pages/recently-diagnosed/diagnostic-journey.tsx#L28): “If the echocardiogram suggests PH, you will need a Right Heart Catheterisation.”

**Why change it:** RHC is the haemodynamic confirmation test, but its use depends on clinical context and whether results inform management. Echo estimates probability and is not a diagnosis; adult clinic content must not prescribe one test pathway to everyone.

**Proposed wording/action:** If PH is suspected, your specialist will decide which tests are needed. Right heart catheterisation directly measures pressures and is used when confirmation and further classification will guide care. An echocardiogram alone cannot confirm PH.

**Evidence:** [UK06](sources.md#uk06), [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-14 — Do not normalise delay or suggest exclusion must finish before referral

**P1 · Safety framing**. Supported discrepancy or documented gap.

- [diagnostic-journey.tsx:62](../../artifacts/ph-navigator/src/pages/recently-diagnosed/diagnostic-journey.tsx#L62): “It is not uncommon for it to take months”
- [for-healthcare-professionals.tsx:59](../../artifacts/ph-navigator/src/pages/for-healthcare-professionals.tsx#L59): “where common causes (asthma,”

**Why change it:** Acknowledging historical delays is reasonable, but the copy may make ongoing delay sound necessary. Add a route for worsening symptoms and avoid implying all common diagnoses must be exhaustively excluded before PH referral.

**Proposed wording/action:** Diagnosis can involve several tests and the order varies. If symptoms worsen while you are waiting, contact your treating team rather than waiting for the next routine appointment. Severe breathing difficulty, collapse or concerning chest pain needs emergency assessment. Professional referral wording should follow a cited pathway and clinical urgency.

**Evidence:** [AU21](sources.md#au21), [AU22](sources.md#au22), [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-15 — Keep food/fluid/weight advice within an individual care plan

**P1 · Individualisation**. Supported discrepancy or documented gap.

- [diet-nutrition.tsx:33](../../artifacts/ph-navigator/src/pages/living-well/diet-nutrition.tsx#L33): “Most PH specialists recommend limiting sodium intake”
- [diet-nutrition.tsx:49](../../artifacts/ph-navigator/src/pages/living-well/diet-nutrition.tsx#L49): “usually to about 1.5 to 2 litres.”
- [diet-nutrition.tsx:52](../../artifacts/ph-navigator/src/pages/living-well/diet-nutrition.tsx#L52): “1.5-2kg in 1-2 days”

**Why change it:** The sodium-to-salt conversion is supported; do not label it an arithmetic error. The problem is universalising a PH-specific prescription and relying on a numerical weight example as the escalation threshold. Fluid and weight targets depend on the person’s care plan.

**Proposed wording/action:** Ask your PH team or dietitian whether you need a salt or fluid limit and what target is right for you. If you have a prescribed fluid limit, follow it rather than general hydration advice. Ask how to monitor your weight and when to contact the team. Do not wait for a particular weight change if you feel suddenly unwell.

**Evidence:** [AU12](sources.md#au12), [AU21](sources.md#au21). **Proposed reviewer:** Clinician Advisory Panel with dietitian/PH nurse.

**State:** Proposed only; not applied or clinically approved.

## INF-16 — Exercise red flags need more than stop and rest

**P1 · Safety omission**. Supported discrepancy or documented gap.

- [exercise.tsx:42](../../artifacts/ph-navigator/src/pages/living-well/exercise.tsx#L42): “If you feel dizzy, lightheaded, or experience chest pain, stop immediately and rest.”

**Why change it:** Stopping exertion is appropriate but may be insufficient for collapse, severe breathlessness or concerning chest pain. Distinguish the individual exercise plan, contacting the team and emergency care.

**Proposed wording/action:** Stop activity if you feel unwell. Follow the symptom plan agreed with your PH team. Collapse, severe breathing difficulty or concerning chest pain needs urgent assessment; in an Australian medical emergency call 000. Do not simply restart exercise because symptoms settle without discussing new or recurring symptoms with your team.

**Evidence:** [AU21](sources.md#au21), [AU22](sources.md#au22). **Proposed reviewer:** Clinician Advisory Panel with rehabilitation clinician.

**State:** Proposed only; not applied or clinically approved.

## INF-17 — Do not attribute new symptoms to anxiety without assessment

**P1 · Safety qualification**. Supported discrepancy or documented gap.

- [mental-wellbeing.tsx:41](../../artifacts/ph-navigator/src/pages/living-well/mental-wellbeing.tsx#L41): “can actually mimic the physical sensations of a panic attack”

**Why change it:** The overlap is plausible, but the paragraph lacks a guard against attributing new/worsening cardiopulmonary symptoms to anxiety. General coping advice must not delay assessment.

**Proposed wording/action:** Anxiety and physical symptoms can influence each other. New or worsening breathlessness, chest pain, fainting or other concerning symptoms should not be assumed to be anxiety. Follow your PH team’s symptom plan and seek urgent help when needed.

**Evidence:** [AU21](sources.md#au21), [AU22](sources.md#au22). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-18 — Rehabilitation advice needs stability, supervision and activity context

**P1 · Overgeneralisation**. Qualification recommended; full exercise evidence appraisal and activity-specific advice require reviewer confirmation.

- [exercise.tsx:37](../../artifacts/ph-navigator/src/pages/living-well/exercise.tsx#L37): “is safe and highly beneficial.”
- [exercise.tsx:46](../../artifacts/ph-navigator/src/pages/living-well/exercise.tsx#L46): “like walking, light cycling, or swimming.”

**Why change it:** The introductory specialist-approval caution is useful and should remain. Broad safety claims and a swimming example can still be read as a universal safe-activity list; suitability depends on symptoms, stability and any infusion equipment. Do not replace it with a blanket exercise ban.

**Proposed wording/action:** A tailored activity or rehabilitation plan can help many people with PH. Ask your team which activities and level of exertion suit your current health, and whether supervised rehabilitation is appropriate. Activities involving water, heavy effort or infusion equipment need specific advice. Keep pacing guidance and avoid a universal safe-sport list.

**Evidence:** [UK16](sources.md#uk16), [CL02](sources.md#cl02). **Proposed reviewer:** Clinician Advisory Panel with physiotherapist/rehabilitation clinician.

**State:** Proposed only; not applied or clinically approved.

## INF-19 — Flight hydration advice must respect fluid restrictions

**P1 · Internal inconsistency**. Supported discrepancy or documented gap.

- [travel-oxygen.tsx:75](../../artifacts/ph-navigator/src/pages/living-well/travel-oxygen.tsx#L75): “Stay hydrated during the flight.”

**Why change it:** Generic hydration advice can conflict with the diet page and an individual fluid limit. Give a consistent personal-plan instruction rather than a new flight target.

**Proposed wording/action:** Follow the fluid plan agreed with your PH team during travel. Ask about leg movement, mobility support, clot prevention and oxygen before departure; do not independently increase fluids, oxygen or medicines.

**Evidence:** [AU11](sources.md#au11), [AU12](sources.md#au12). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-20 — Airline equipment and battery rules must be carrier-specific

**P2 · Australian localisation**. Supported discrepancy or documented gap.

- [travel-oxygen.tsx:54](../../artifacts/ph-navigator/src/pages/living-well/travel-oxygen.tsx#L54): “FAA-approved Portable Oxygen Concentrator”
- [travel-oxygen.tsx:56](../../artifacts/ph-navigator/src/pages/living-well/travel-oxygen.tsx#L56): “150% of the flight time”

**Why change it:** A percentage or FAA label is not a universal Australian carrier rule. Qantas publishes device, clearance, battery and operating-carrier requirements; HAST also informs rather than alone determines the whole fitness-to-travel decision.

**Proposed wording/action:** Check the current rules of every operating airline for medical clearance, accepted equipment, battery capacity, spare batteries and booking lead times. Your PH team will advise about fitness to fly and oxygen assessment. Do not rely on a generic battery percentage or assume a device accepted by one airline is accepted by another.

**Evidence:** [AU11](sources.md#au11), [UK14](sources.md#uk14). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-21 — Continuous infusion warning needs a failure-response plan

**P1 · Safety-plan gap**. Supported discrepancy or documented gap.

- [carers-role.tsx:47](../../artifacts/ph-navigator/src/pages/caring-for-someone/carers-role.tsx#L47): “the pump must never be stopped or turned off”

**Why change it:** The warning is important and should not be softened into routine interruption. It needs a written, medicine/device-specific backup and emergency plan. It must not be extended to all subcutaneous injections merely because newer medicines share a route.

**Proposed wording/action:** For continuous prostacyclin treatment, an interruption can be dangerous. Ask your PH team for a written plan covering alarms, line problems, backup equipment, supply and emergency contacts. Follow that plan immediately if delivery fails. Make sure emergency clinicians know the exact medicine and delivery method. Do not attempt an improvised device or dose change.

**Evidence:** [UK09](sources.md#uk09), [AU08](sources.md#au08). **Proposed reviewer:** Clinician Advisory Panel with infusion-trained PH nurse/pharmacist.

**State:** Proposed only; not applied or clinically approved.

## INF-22 — NDIS wording overstates access and encourages selective evidence

**P1 · Australian eligibility**. Supported discrepancy or documented gap.

- [financial-support.tsx:36](../../artifacts/ph-navigator/src/pages/living-well/financial-support.tsx#L36): “many patients are eligible”
- [financial-support.tsx:42](../../artifacts/ph-navigator/src/pages/living-well/financial-support.tsx#L42): “be honest about your "worst days," not your best days.”

**Why change it:** A PH diagnosis does not establish access; age, residence, impairment and support requirements apply. No evidence supports many patients. Evidence should accurately describe usual function, fluctuation, frequency and assistance needed, not present only worst days.

**Proposed wording/action:** Some people with PH may meet NDIS access requirements; diagnosis alone does not determine eligibility. Age, residence and disability or early-intervention requirements apply. Ask your treating professionals to document your functional impact accurately, including how it varies over time, treatments tried and support needed.

**Evidence:** [AU05](sources.md#au05), [AU06](sources.md#au06). **Proposed reviewer:** Australian disability-policy/social-work reviewer with clinical input.

**State:** Proposed only; not applied or clinically approved.

## INF-23 — PBS access is not a blanket approved-centre rule

**P1 · Australian access discrepancy**. Supported discrepancy or documented gap.

- [financial-support.tsx:56](../../artifacts/ph-navigator/src/pages/living-well/financial-support.tsx#L56): “you must be treated at an approved PH specialist centre.”

**Why change it:** The official PAH page specifies a physician with expertise in PAH, hospital/section 100 arrangements and item-specific restrictions. The site’s categorical centre claim could deter someone using another legitimate pathway. Do not convert registry membership into PBS eligibility.

**Proposed wording/action:** PBS access depends on the medicine, indication and current restriction. PAH authority applications are managed by a physician with expertise in PAH under the applicable hospital arrangements. Your treating team and pharmacist can explain eligibility, costs and supply; CTEPH has separate arrangements. The PBS Safety Net applies to eligible costs and may require a card; some extra charges can remain.

**Evidence:** [AU08](sources.md#au08), [AU09](sources.md#au09), [AU26](sources.md#au26). **Proposed reviewer:** PH prescribing/access-policy reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-24 — DSP explanation omits key medical and non-medical rules

**P1 · Australian eligibility**. Supported discrepancy or documented gap.

- [financial-support.tsx:90](../../artifacts/ph-navigator/src/pages/living-well/financial-support.tsx#L90): “if you are unable to work 15 hours or more a week”

**Why change it:** The hours test is only one part of the assessment. Condition duration, diagnosed/reasonably treated/stabilised status, impairment points and Program of Support rules may apply, along with non-medical rules.

**Proposed wording/action:** DSP has medical and non-medical eligibility rules. These include how long your impairment is expected to last, treatment and stabilisation, assessed functional impact and work capacity. Program of Support rules may apply. Check current Services Australia guidance and consider help from a hospital social worker or welfare-rights service.

**Evidence:** [AU07](sources.md#au07). **Proposed reviewer:** Australian welfare-policy/social-work reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-25 — Carer Payment does not always require inability to work

**P2 · Australian eligibility**. Supported discrepancy or documented gap.

- [carer-support.tsx:85](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-support.tsx#L85): “if you are unable to work due to providing constant care.”

**Why change it:** Current Services Australia rules allow some paid work while receiving Carer Payment. The wording could discourage eligible carers; detailed income/work-hour rules also change.

**Proposed wording/action:** Carer Payment may support eligible people whose caring responsibilities affect their ability to earn income. Some paid work may be allowed under current rules. Carer Payment and Carer Allowance have different requirements; check the current Services Australia criteria for your circumstances.

**Evidence:** [AU16](sources.md#au16). **Proposed reviewer:** Australian welfare-policy/social-work reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-26 — Carer support is assessed; distinguish emergency access

**P2 · Service qualification**. Supported discrepancy or documented gap.

- [carer-support.tsx:36](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-support.tsx#L36): “It is the first place you should register.”
- [carer-support.tsx:42](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-support.tsx#L42): “One-off funding for things like a laptop”
- [carer-support.tsx:46](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-support.tsx#L46): “Monday to Friday, 8am to 5pm”

**Why change it:** Carer Gateway is a reasonable starting point, but package examples are not automatic cash entitlements. The weekday hours are correct for routine support; emergency respite can be requested at any time, subject to suitable services.

**Proposed wording/action:** Carer Gateway can help you explore support tailored to your caring situation. Services and packages depend on assessment and local availability. Ask about planned respite and an emergency care plan. Routine support and emergency respite have different access arrangements; link to the current official guidance.

**Evidence:** [AU14](sources.md#au14), [AU15](sources.md#au15). **Proposed reviewer:** Carer-services/social-work reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-27 — My Aged Care is not simply for those over 65

**P2 · Australian eligibility**. Supported discrepancy or documented gap.

- [carer-wellbeing.tsx:64](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-wellbeing.tsx#L64): “My Aged Care (for those over 65)”

**Why change it:** The age shorthand omits assessed need and earlier pathways, including Aboriginal and Torres Strait Islander people. The official wording also uses 65 or older, not over 65.

**Proposed wording/action:** My Aged Care may help eligible people access support after assessment. Age, needs and circumstances matter, with earlier pathways for some people, including Aboriginal and Torres Strait Islander people. Ask the service or hospital social worker which pathway applies.

**Evidence:** [AU13](sources.md#au13). **Proposed reviewer:** Aged-care/social-work reviewer with culturally appropriate review.

**State:** Proposed only; not applied or clinically approved.

## INF-28 — Medical decision-maker documents vary by jurisdiction

**P2 · Legal localisation**. Supported discrepancy or documented gap.

- [carers-role.tsx:56](../../artifacts/ph-navigator/src/pages/caring-for-someone/carers-role.tsx#L56): “Enduring Power of Attorney (Medical):”

**Why change it:** The page acknowledges state variation but first presents one document name as universal. Financial powers do not necessarily confer medical authority. Advance directives also do not remove every future uncertainty.

**Proposed wording/action:** You can discuss who should speak for you if you cannot make a healthcare decision. The role, document name and legal requirements vary by state or territory. Use the current forms and advice for your jurisdiction, and tell your healthcare team where your documents are stored.

**Evidence:** [AU17](sources.md#au17). **Proposed reviewer:** State/territory legal or advance-care-planning reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-29 — Travel assistance is conditional, not a blanket entitlement

**P2 · Australian eligibility**. Supported discrepancy or documented gap.

- [financial-support.tsx:70](../../artifacts/ph-navigator/src/pages/living-well/financial-support.tsx#L70): “you can claim financial assistance”

**Why change it:** Eligibility varies by state, residence, distance, nearest suitable service, referral and other funding. IPTAAS is a subsidy, not guaranteed full reimbursement; the source’s general claim is too broad.

**Proposed wording/action:** You may be eligible for help with travel and accommodation for specialist care. Each state and territory has its own rules and claim process, and assistance may cover only part of the cost. Check eligibility and any approvals before travel with the scheme or hospital social worker.

**Evidence:** [AU18](sources.md#au18), [AU19](sources.md#au19). **Proposed reviewer:** State-scheme/social-work reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-30 — Keep Medicare session guidance but explain access/cost

**P2 · Qualification; core claim supported**. Supported discrepancy or documented gap.

- [mental-wellbeing.tsx:61](../../artifacts/ph-navigator/src/pages/living-well/mental-wellbeing.tsx#L61): “up to 10 sessions per calendar year”

**Why change it:** The ten individual-session limit is supported; do not flag it as an obsolete count. Improve precision with eligible practitioners, referral/review requirements, separate group-session allowance and possible out-of-pocket costs.

**Proposed wording/action:** If eligible, a mental health treatment plan and referral can support Medicare rebates for up to 10 individual and 10 group sessions each calendar year with eligible mental health professionals. A rebate may not cover the full fee. Ask about costs, referral requirements and other support options.

**Evidence:** [AU10](sources.md#au10). **Proposed reviewer:** Mental-health clinician and Medicare-policy reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-31 — Reconcile the directory with PHSANZ without inventing designation

**P1 · Directory completeness/authority**. Supported discrepancy or documented gap.

- [find-specialist.tsx:146](../../artifacts/ph-navigator/src/pages/find-specialist.tsx#L146): “Designated PH centres across Australia and New Zealand”

**Why change it:** Navigator lists 18 sites; the inspected PHSANZ registry-participating referral list has 25. Four Navigator entries are absent from that reference and eleven reference entries are absent from Navigator. Absence is not evidence that a centre lacks expertise; designated/accredited status is not established for every entry.

**Proposed wording/action:** This directory is being checked against PHSANZ’s referral-centre information. Confirm the current PH service, referral requirements, age group and contact route with the provider before arranging care. Editorial instruction: reconcile all records and distinguish registry participation, provider-confirmed service and unverified entries.

**Evidence:** [AU04](sources.md#au04). **Proposed reviewer:** PHSANZ directory owner with provider confirmation.

**State:** Proposed only; not applied or clinically approved.

## INF-32 — Westmead switchboard differs; distinguish clinic and general lines

**P1 · Verified contact discrepancy**. Supported discrepancy or documented gap.

- [find-specialist.tsx:30](../../artifacts/ph-navigator/src/pages/find-specialist.tsx#L30): “(02) 9845 0000”
- [find-specialist.tsx:34](../../artifacts/ph-navigator/src/pages/find-specialist.tsx#L34): “(03) 9345 5522”

**Why change it:** PHSANZ and the Westmead provider show (02) 7825 0000 for the current switchboard. The Royal Children’s Hospital number differs from the PHSANZ PH-service contact, which may reflect switchboard versus clinic, not an invalid number. Detailed reconciliation is in directory.csv.

**Proposed wording/action:** Use the provider-confirmed Westmead switchboard (02) 7825 0000 when publishing a general contact. Label switchboard and PH clinic contacts separately. Do not replace other differing numbers without confirming their purpose and currency.

**Evidence:** [AU04](sources.md#au04), [AU24](sources.md#au24). **Proposed reviewer:** Directory owner and relevant hospital service.

**State:** Proposed only; not applied or clinically approved.

## INF-33 — Urgent-support signposting needs explicit country scope

**P1 · Jurisdiction/safety**. Supported discrepancy or documented gap.

- [CrisisBanner.tsx:27](../../artifacts/ph-navigator/src/components/layout/CrisisBanner.tsx#L27): “call <strong className="font-bold text-white">000”
- [Footer.tsx:126](../../artifacts/ph-navigator/src/components/layout/Footer.tsx#L126): “Medical emergency:”
- [mental-wellbeing.tsx:32](../../artifacts/ph-navigator/src/pages/living-well/mental-wellbeing.tsx#L32): “Lifeline on 13 11 14”

**Why change it:** The site serves Australia and New Zealand but displays Australian services without territorial labels. New Zealand medical emergencies use 111. The word crisis also conflates medical emergency, emotional support and routine PH-team advice.

**Proposed wording/action:** Medical emergency: in Australia call 000; in New Zealand call 111. Keep emotional-support services in a separately labelled, verified country-specific block. For non-emergency care questions, follow your treating team’s contact plan. Do not describe an Australian support number as covering both countries.

**Evidence:** [AU21](sources.md#au21), [AU22](sources.md#au22), [NZ01](sources.md#nz01), [AU25](sources.md#au25). **Proposed reviewer:** Clinician and jurisdiction-specific service reviewer.

**State:** Proposed only; not applied or clinically approved.

## INF-34 — Remove unsupported self-endorsement; add real article provenance

**P1 · Evidence/governance**. Supported discrepancy or documented gap.

- [index.tsx:9](../../artifacts/ph-navigator/src/pages/recently-diagnosed/index.tsx#L9): “trusted sources like PH Navigator.”

**Why change it:** Articles contain no content-specific source/review record, while the panel page correctly says review is being established. Self-identifying as trusted risks implying completed review. This audit is not evidence of panel approval.

**Proposed wording/action:** Online information can vary in quality and date. Use it to prepare questions for your treating team, and check which PH type and country it applies to. PH Navigator’s article review process is being established. Editorial instruction: publish real sources, jurisdiction and review status; add named/date review details only after actual review.

**Evidence:** [CL01](sources.md#cl01), [CL04](sources.md#cl04), [AU08](sources.md#au08). **Proposed reviewer:** Editorial/governance owner with both review panels.

**State:** Proposed only; not applied or clinically approved.

## INF-35 — Search promises downloads and NZ benefits not provided

**P2 · Metadata/content mismatch**. Supported discrepancy or documented gap.

- [searchIndex.ts:365](../../artifacts/ph-navigator/src/data/searchIndex.ts#L365): “Downloadable fact sheets, guides, and educational materials”
- [searchIndex.ts:247](../../artifacts/ph-navigator/src/data/searchIndex.ts#L247): “financial assistance available for people with PH in Australia and NZ.”

**Why change it:** The resource page explicitly has no downloads and the finance article covers Australia. Search snippets are informational content too. The resource snippet overlaps a correction proposed in technical PR #18; reconcile rather than apply twice.

**Proposed wording/action:** Resource search description: Planned PH information resources; downloads are not yet available. Financial-support description: An introduction to Australian support pathways and their eligibility requirements. New Zealand information requires a separate, clearly scoped resource.

**Evidence:** [UK02](sources.md#uk02), [AU05](sources.md#au05), [AU07](sources.md#au07). **Proposed reviewer:** Editorial owner.

**State:** Proposed only; not applied or clinically approved.

## INF-36 — Do not promote placeholder dates/page counts as review evidence

**P3 · Hidden editorial metadata**. Supported discrepancy or documented gap.

- [resource-library.tsx:45](../../artifacts/ph-navigator/src/pages/resource-library.tsx#L45): “updated: "March 2025"”
- [resource-library.tsx:43](../../artifacts/ph-navigator/src/pages/resource-library.tsx#L43): “pages: 8”

**Why change it:** The 22 planned records retain hard-coded dates/page counts despite no clinical files being present. These values are not currently displayed as review dates and are not a current patient-facing false approval claim; remove or mark them provisional before a future template exposes them.

**Proposed wording/action:** Editorial instruction: replace unsupported review dates/page counts with null or explicitly provisional metadata until a real file and review record exist. Preserve the current in-development labels and distinguish the working print worksheet from an unavailable downloadable booklet.

**Evidence:** [UK02](sources.md#uk02). **Proposed reviewer:** Editorial/content-model owner.

**State:** Proposed only; not applied or clinically approved.

## INF-37 — Verify guideline titles and referral criteria before presenting resources

**P2 · Professional content provenance**. Supported discrepancy or documented gap.

- [for-healthcare-professionals.tsx:113](../../artifacts/ph-navigator/src/pages/for-healthcare-professionals.tsx#L113): “TSANZ Guidelines”
- [for-healthcare-professionals.tsx:65](../../artifacts/ph-navigator/src/pages/for-healthcare-professionals.tsx#L65): “TRV &gt; 2.8 m/s”

**Why change it:** No exact TSANZ document/version/link is supplied. TRV is one part of echo probability, not a standalone diagnosis. Clinical referral text and any latest-guidelines claim need exact current sources. The inactive controls themselves are also addressed in technical PR #18.

**Proposed wording/action:** Clinical referral resources are being verified. Echocardiographic findings must be interpreted with other signs and clinical context. Editorial instruction: supply the exact guideline title, version, URL, intended population and Australian relevance, or retain a clearly labelled resource-development placeholder.

**Evidence:** [CL02](sources.md#cl02), [CL04](sources.md#cl04), [AU04](sources.md#au04). **Proposed reviewer:** Clinician Advisory Panel.

**State:** Proposed only; not applied or clinically approved.

## INF-38 — Make wellbeing/carer wording supportive and non-deterministic

**P2 · Patient communication judgement**. Editorial recommendation; requires lived-experience validation.

- [carer-wellbeing.tsx:19](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-wellbeing.tsx#L19): “You cannot provide good care if you are exhausted”
- [carer-wellbeing.tsx:43](../../artifacts/ph-navigator/src/pages/caring-for-someone/carer-wellbeing.tsx#L43): “Guilt is normal, but unhelpful”
- [mental-wellbeing.tsx:38](../../artifacts/ph-navigator/src/pages/living-well/mental-wellbeing.tsx#L38): “life-limiting illness carries a heavy emotional burden.”

**Why change it:** These are tone/scope concerns, not evidence that a clinical statement is universally false. Categorical descriptions can create guilt or imply a uniform prognosis. Pair realism with variability, support and patient choice; retain no invented success stories.

**Proposed wording/action:** Caring can be demanding, and your own needs matter too. Feeling tired, worried or conflicted does not mean you are failing. Support and breaks can help. People experience PH differently; your healthcare team can explain what your condition means for you and help you find practical and emotional support.

**Evidence:** [UK12](sources.md#uk12), [UK15](sources.md#uk15), [UK31](sources.md#uk31). **Proposed reviewer:** Lived Experience Panel with clinical/psychology review.

**State:** Proposed only; not applied or clinically approved.

## INF-39 — Describe BNP and NT-proBNP as related but distinct biomarkers

**P2 · Biochemical precision**. Terminology discrepancy supported; final patient wording and contextual interpretation require clinical review.

- [test-results.tsx:89](../../artifacts/ph-navigator/src/pages/treatments/test-results.tsx#L89): “This is a hormone released by the heart”

**Why change it:** BNP is a biologically active peptide; NT-proBNP is an inactive fragment measured as a biomarker. The shared hormone description blurs that distinction. Results also need clinical context rather than implying a direct measure of how hard the heart works.

**Proposed wording/action:** BNP and NT-proBNP are related blood markers that can help your team assess strain on the heart and follow changes over time. They are different tests. Your clinician interprets the result alongside symptoms, other tests and factors such as kidney function; it does not determine your outlook on its own.

**Evidence:** [CL05](sources.md#cl05), [CL03](sources.md#cl03). **Proposed reviewer:** Clinician Advisory Panel with laboratory/biomarker expertise.

**State:** Proposed only; not applied or clinically approved.
