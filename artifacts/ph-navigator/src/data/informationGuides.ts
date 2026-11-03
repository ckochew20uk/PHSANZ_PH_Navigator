export interface GuideSection {
  title: string;
  paragraphs: string[];
  bullets?: string[];
}
export interface InformationGuide {
  path: string;
  title: string;
  description: string;
  scope: string;
  sources: string[];
  sections: GuideSection[];
  related: { title: string; path: string }[];
}
const questionLink = {
  title: "Questions for your healthcare team",
  path: "/recently-diagnosed/questions-for-doctor",
};
const helpLink = {
  title: "Symptoms and seeking help",
  path: "/treatments/when-to-seek-help",
};
const medicineLink = {
  title: "Your medicine safety plan",
  path: "/treatments/medicine-safety",
};
export const informationGuides: InformationGuide[] = [
  {
    path: "/recently-diagnosed/first-steps",
    title: "Your first steps after diagnosis",
    description:
      "A short guide to understanding your diagnosis, knowing your team and preparing for the next conversation.",
    scope: "General adult information; Australian service guidance",
    sources: ["UK03", "CL01", "AU21"],
    sections: [
      {
        title: "You do not have to understand everything today",
        paragraphs: [
          "A new diagnosis can bring relief, uncertainty or many different feelings. Start with the questions that matter to you. People experience PH differently; another person’s story or a statistic online cannot tell you what will happen to you.",
        ],
      },
      {
        title: "Know your diagnosis and your team",
        paragraphs: [
          "PH is an umbrella term. Ask which type you have, what is known about its cause, and which clinician coordinates your care. PAH is one type of PH; treatments are not interchangeable between all groups.",
        ],
        bullets: [
          "Write down your PH team’s routine and after-hours contact arrangements.",
          "Ask what happens next: tests, appointments, medicines and follow-up.",
          "Check who to contact for prescriptions, side effects and practical support.",
        ],
      },
      {
        title: "Make a plan you can take home",
        paragraphs: [
          "Ask your team which symptoms to report and what needs urgent help. Keep an up-to-date medicine list and a short summary of your condition. If you use a continuous infusion, request a specific equipment and interruption plan.",
        ],
      },
      {
        title: "Bring someone or bring your questions",
        paragraphs: [
          "You can ask a trusted person to join an appointment, take notes or help remember questions. Tell the team if you need an interpreter, accessible information or more time. You can decide what to share with family, work or friends.",
        ],
      },
    ],
    related: [helpLink, medicineLink, questionLink],
  },
  {
    path: "/treatments/when-to-seek-help",
    title: "Symptoms and seeking help",
    description:
      "Understand the difference between emergency help, changes to report and routine questions. Agree a personal plan with your team.",
    scope:
      "Medical emergency numbers for Australia and New Zealand; personal clinical advice comes from your team",
    sources: ["AU21", "AU22", "NZ01"],
    sections: [
      {
        title: "In a medical emergency",
        paragraphs: [
          "Severe difficulty breathing, collapse, or concerning chest pain needs urgent assessment. Call 000 in Australia or 111 in New Zealand and ask for an ambulance. Do not delay seeking help to reach a website, complete a form or wait for a particular weight or test result.",
        ],
      },
      {
        title: "Tell your team about changes",
        paragraphs: [
          "Ask your PH team what to do if breathlessness, swelling, dizziness or other symptoms change, including outside clinic hours. Follow their advice about the urgency of assessment. New symptoms should not simply be assumed to be anxiety or a normal part of PH.",
        ],
      },
      {
        title: "Continuous infusion needs its own plan",
        paragraphs: [
          "An interruption to continuous prostacyclin treatment can be dangerous. Follow the medicine- and device-specific emergency plan supplied by your PH service immediately if there is a delivery problem. Tell emergency clinicians the exact medicine and delivery method. Do not improvise changes to the dose or equipment.",
        ],
      },
      {
        title: "Your personal contact plan",
        paragraphs: [
          "Print this guide and complete the details with your healthcare team. Keep a copy with your medicine list; this website does not collect these details.",
        ],
        bullets: [
          "My PH service and routine contact: ____________________",
          "My after-hours contact and instructions: ____________________",
          "Changes I should report and how quickly: ____________________",
          "My infusion/oxygen backup plan, if applicable: ____________________",
          "My next appointment and prescription arrangements: ____________________",
        ],
      },
    ],
    related: [medicineLink, questionLink],
  },
  {
    path: "/treatments/medicine-safety",
    title: "Your medicine safety plan",
    description:
      "Questions about interactions, monitoring, side effects, supply and equipment to discuss with your PH team or pharmacist.",
    scope: "General adult information; Australian medicine-information links",
    sources: ["AU01", "AU02", "AU08", "AU09", "AU28"],
    sections: [
      {
        title: "Know the exact medicine and reason for taking it",
        paragraphs: [
          "Keep a current list of prescribed medicines, doses, allergies, vitamins, herbal products and non-prescription medicines. Ask which are for PH and which treat another condition. Follow your prescription; this guide does not supply a dosing or switching schedule.",
        ],
      },
      {
        title: "Combinations need specialist checking",
        paragraphs: [
          "Only take combinations prescribed by your team. Riociguat must not be taken with PDE-5 inhibitors such as sildenafil or tadalafil. Nitrate medicines can also be unsafe with these treatments. Ask your pharmacist or PH team before adding or changing any medicine, including treatments bought for a cold, pain or sexual health.",
        ],
      },
      {
        title: "Ask for a monitoring and side-effect plan",
        paragraphs: [
          "The tests and precautions depend on the medicine and your circumstances. Ask which blood tests or other checks you need, how results will be reviewed and whom to contact about side effects. If pregnancy is possible, ask about medicine-specific risks, reliable contraception and testing. Read the current Australian Consumer Medicine Information with your pharmacist.",
        ],
        bullets: [
          "Which side effects require urgent help?",
          "What should I do if I miss or vomit a dose?",
          "Who arranges my next prescription and delivery?",
          "Are there any food, other-medicine or pregnancy precautions for me?",
        ],
      },
      {
        title: "Plan ahead for supplies and equipment",
        paragraphs: [
          "Check supplies before weekends, travel or a hospital admission. For continuous prostacyclin treatment, do not stop or turn off the infusion. Your service should give you an individual plan for alarms, line problems, backup equipment and interruptions. This does not apply in the same way to every medicine given by an injection.",
        ],
      },
    ],
    related: [
      helpLink,
      {
        title: "Pregnancy and family planning",
        path: "/living-well/pregnancy-family-planning",
      },
      questionLink,
    ],
  },
  {
    path: "/treatments/cteph",
    title: "Understanding CTEPH",
    description:
      "Why chronic thromboembolic pulmonary hypertension needs its own assessment and treatment discussion.",
    scope:
      "General adult information; Australian access requires individual confirmation",
    sources: ["CL01", "CL02", "AU02", "AU09"],
    sections: [
      {
        title: "A particular cause of PH",
        paragraphs: [
          "CTEPH involves persistent blockages and changes in the lung arteries after blood clots. It is different from an acute pulmonary embolism and from Group 1 PAH. Your team uses your history, scans and other tests to understand the diagnosis.",
        ],
      },
      {
        title: "A specialist team considers the options",
        paragraphs: [
          "Treatment decisions may involve a team with expertise in pulmonary endarterectomy (PEA), balloon pulmonary angioplasty (BPA) and medicines. Suitability is individual. Do not assume that a decision about one procedure rules out all other treatment.",
        ],
      },
      {
        title: "PEA, BPA and medicines have different roles",
        paragraphs: [
          "PEA is surgery to remove accessible obstructing material and can be potentially curative for selected people. BPA treats selected narrowed vessels using a balloon procedure. Riociguat may be used for inoperable CTEPH or persistent/recurrent CTEPH after surgery. None of these descriptions guarantees suitability or a particular result.",
        ],
      },
      {
        title: "Ongoing care matters",
        paragraphs: [
          "Discuss anticoagulation, symptoms, follow-up and your personal activity plan with the treating team. Do not stop a blood thinner because you feel better after a procedure. Australian subsidy and treatment arrangements are specific to the indication; ask your team and pharmacist about your pathway.",
        ],
      },
    ],
    related: [
      medicineLink,
      {
        title: "What to expect from tests",
        path: "/treatments/tests-and-procedures",
      },
      questionLink,
    ],
  },
  {
    path: "/living-well/pregnancy-family-planning",
    title: "Pregnancy and family planning",
    description:
      "Prepare for a sensitive, individual discussion about pregnancy, contraception and PH medicines.",
    scope:
      "General adult information; individual specialist reproductive-health advice is essential",
    sources: ["AU01", "AU02", "AU28", "CL04"],
    sections: [
      {
        title: "Start the conversation early",
        paragraphs: [
          "Pregnancy can carry serious risks for people with PH and needs individual specialist advice. If you are considering pregnancy, discuss it with your PH team before trying to conceive. Ask for a joint discussion with appropriate reproductive-health and pregnancy specialists. Your priorities and questions deserve respectful, clear answers.",
        ],
      },
      {
        title: "If you think you might be pregnant",
        paragraphs: [
          "Contact your PH team promptly for medicine and pregnancy advice. Do not wait for a routine appointment or independently stop treatment: both the condition and some medicines need urgent specialist consideration. If you are acutely unwell, seek emergency help.",
        ],
      },
      {
        title: "Contraception and medicine precautions",
        paragraphs: [
          "Some PH medicines can harm a developing baby, and some interact with contraceptives. Ask which methods and any pregnancy testing are appropriate for your exact medicines and circumstances. A method that suits someone else may not suit you; this page does not recommend a universal contraceptive.",
        ],
      },
      {
        title: "Questions you can take to the team",
        paragraphs: [],
        bullets: [
          "What does my type of PH mean for pregnancy and family-building choices?",
          "Which of my medicines need particular precautions?",
          "Who should I contact about a positive test or a missed period?",
          "Can I have counselling or support with difficult decisions?",
          "What advice applies to fertility, breastfeeding or menopause in my situation?",
        ],
      },
    ],
    related: [
      medicineLink,
      {
        title: "Relationships and life stages",
        path: "/living-well/relationships-life-stages",
      },
      questionLink,
    ],
  },
  {
    path: "/living-well/oxygen-at-home",
    title: "Oxygen at home",
    description:
      "Discuss prescribed use, equipment, safety and backup arrangements with your oxygen service.",
    scope:
      "General information; prescription, supplier and funding arrangements vary",
    sources: ["UP01", "AU11", "AU21"],
    sections: [
      {
        title: "Use your own prescription",
        paragraphs: [
          "Some people with PH need supplemental oxygen; others do not. Your team decides whether you need it, when to use it and the appropriate equipment. Do not use another person’s flow rate or change your prescription using website advice.",
        ],
      },
      {
        title: "Learn the equipment and safety plan",
        paragraphs: [
          "Ask the oxygen service to demonstrate safe use, cleaning, storage and troubleshooting. Follow its fire-safety instructions: keep oxygen away from smoking, flames and ignition sources. Ask how to manage tubing and equipment safely around other people in the home.",
        ],
      },
      {
        title: "Prepare for a fault, power cut or time away",
        paragraphs: [
          "Know your supplier contact, backup arrangements and what to do if equipment fails. Ask how much charge or supply is needed for an outing and how to arrange oxygen away from home. A home device is not automatically accepted for air travel.",
        ],
      },
      {
        title: "Check costs and support locally",
        paragraphs: [
          "Assessment, equipment and funding arrangements can vary between services and Australian states or territories. Ask your team or social worker which scheme and supplier apply to you, and what costs or review requirements to expect.",
        ],
      },
    ],
    related: [
      { title: "Travel and oxygen", path: "/living-well/travel-oxygen" },
      helpLink,
      questionLink,
    ],
  },
  {
    path: "/living-well/fatigue-sleep",
    title: "Fatigue, pacing and sleep",
    description:
      "Make space for everyday routines and discuss changes in energy or sleep with your care team.",
    scope: "General adult information",
    sources: ["UK12", "UK16", "AU21"],
    sections: [
      {
        title: "Plan around what matters to you",
        paragraphs: [
          "Limited energy can affect work, household tasks and time with others. Choose priorities, break tasks into smaller parts and consider a rest before you feel exhausted. Asking for practical help is not a failure.",
        ],
      },
      {
        title: "Adapt the task rather than push through",
        paragraphs: [
          "Your team, occupational therapist or physiotherapist can help you consider easier positions, equipment or changes to daily routines. A tailored activity plan and rest can work together. Avoid comparing your capacity with another person’s exercise programme.",
        ],
      },
      {
        title: "Report changes, including sleep concerns",
        paragraphs: [
          "Tell your healthcare team if fatigue changes, sleep is poor, or you develop new symptoms. Do not assume that all tiredness is caused by PH or that new breathlessness is simply poor fitness. Your team can assess possible causes and whether further help is needed.",
        ],
      },
    ],
    related: [
      {
        title: "Exercise and physical activity",
        path: "/living-well/exercise",
      },
      helpLink,
      questionLink,
    ],
  },
  {
    path: "/living-well/relationships-life-stages",
    title: "Relationships, intimacy and life stages",
    description:
      "Talk about closeness, changing roles and the support you need as life changes.",
    scope:
      "General adult discussion guide; individual clinical advice remains important",
    sources: ["UK22", "UK15", "AU01", "AU02"],
    sections: [
      {
        title: "You decide what to share",
        paragraphs: [
          "PH can affect relationships and responsibilities in different ways. You can explain what support would help and which decisions you want to make yourself. Partners, friends and carers can also need support without taking over your choices.",
        ],
      },
      {
        title: "Intimacy is a valid care question",
        paragraphs: [
          "Changes in energy, confidence, symptoms or treatment can affect intimacy. Ask your PH team about symptoms during sexual activity, contraception and any medicine concerns. Do not add medicines for sexual function without checking for interactions with your existing treatment.",
        ],
      },
      {
        title: "Changing life stages",
        paragraphs: [
          "Bring questions about fertility, pregnancy, menopause or ageing to your team. Advice needs to take account of your type of PH and other health needs; a general guide cannot choose a hormone treatment or other medicine for you. Ask for specialist input or counselling when useful.",
        ],
      },
      {
        title: "Make room for your experience",
        paragraphs: [
          "Some people want to talk openly; others prefer privacy. There is no requirement to share a public story or use social media to get value from PH Navigator. The future story collection will depend on real contributions and consent.",
        ],
      },
    ],
    related: [
      {
        title: "Pregnancy and family planning",
        path: "/living-well/pregnancy-family-planning",
      },
      { title: "Mental wellbeing", path: "/living-well/mental-wellbeing" },
      questionLink,
    ],
  },
  {
    path: "/living-well/work-driving",
    title: "Work, study, driving and mobility",
    description:
      "Prepare questions about adjustments, transport and eligibility without assuming one rule applies to everyone.",
    scope:
      "Australian systems and licensing; not individual legal or fitness-to-drive advice",
    sources: ["UP03", "AU20", "AU07", "AU16"],
    sections: [
      {
        title: "Explore adjustments",
        paragraphs: [
          "If symptoms affect work or study, discuss the impact with your treating team. You may want advice about pacing, flexible arrangements, access needs or supporting medical information. A social worker or relevant employment or education adviser can help you find the rules that apply. A PH diagnosis alone does not determine whether someone should stop working.",
        ],
      },
      {
        title: "Driving needs individual assessment",
        paragraphs: [
          "Ask your clinician about driving if you have fainting, dizziness, symptoms at rest or another concern that could affect safety. Australian fitness-to-drive standards and the relevant state or territory licensing authority apply. Do not use a UK DVLA rule as Australian advice, or assume that a PH diagnosis automatically means losing a licence.",
        ],
      },
      {
        title: "Parking and transport support",
        paragraphs: [
          "Accessible parking permits and transport assistance have local eligibility rules. Check with the responsible state or territory service. Your team may be able to provide supporting information, but a diagnosis does not guarantee a permit or payment.",
        ],
      },
      {
        title: "Payments and insurance are separate decisions",
        paragraphs: [
          "Eligibility for a payment, a workplace adjustment and an insurance claim are different questions. Check current conditions with the responsible organisation. Ask for help understanding paperwork rather than relying on another person’s outcome.",
        ],
      },
    ],
    related: [
      {
        title: "Financial and practical support",
        path: "/living-well/financial-support",
      },
      { title: "Accessing care", path: "/living-well/accessing-care" },
      questionLink,
    ],
  },
  {
    path: "/recently-diagnosed/children-families",
    title: "Children, young people and families",
    description:
      "Find the right conversations for a child with PH, transition to adult services or a parent’s diagnosis.",
    scope:
      "Family signposting; adult treatment instructions must not be applied to children",
    sources: ["UK21", "AU04", "CL01"],
    sections: [
      {
        title: "When a child or young person has PH",
        paragraphs: [
          "Children need care and information appropriate to their age, diagnosis and family circumstances. Ask the paediatric PH team which tests, medicines, activities and emergency plans apply. Adult information or another child’s experience should not replace that advice.",
        ],
      },
      {
        title: "Preparing for adult care",
        paragraphs: [
          "Ask when transition planning should begin, who will coordinate it and how the young person can take part in decisions. Discuss medicines, school or study, privacy, practical skills and emergency contacts. A transition plan should be agreed with the services involved rather than assumed from a birthday.",
        ],
      },
      {
        title: "Talking to children about a parent’s diagnosis",
        paragraphs: [
          "A child affected by a parent’s PH has different questions from a child who has PH themselves. Ask what they already understand, use clear age-appropriate language and make room for further questions. A psychologist, social worker or other suitable practitioner can help your family plan these conversations.",
        ],
      },
      {
        title: "Finding an appropriate service",
        paragraphs: [
          "Confirm age eligibility and referral requirements directly with the service. The directory includes different types of hospitals; a listing is not a guarantee that every PH service treats every age group.",
        ],
      },
    ],
    related: [
      { title: "Find a specialist", path: "/find-specialist" },
      { title: "Supporting someone", path: "/caring-for-someone" },
      questionLink,
    ],
  },
  {
    path: "/recently-diagnosed/genetics",
    title: "Genetics and family questions",
    description:
      "Ask whether genetic counselling or family assessment is relevant to your type of PH.",
    scope:
      "General information; personal genetic advice requires a suitable specialist",
    sources: ["CL01", "CL02", "UK05"],
    sections: [
      {
        title: "Heritable does not mean inevitable",
        paragraphs: [
          "Some PAH is associated with a genetic change that increases risk. Having a change does not mean that every relative will develop PAH. Many people with PH have a different cause, so genetic advice is not the same for everyone.",
        ],
      },
      {
        title: "Counselling can help explain choices",
        paragraphs: [
          "Ask your PH team whether a genetics referral is relevant. Counselling can help explain possible test results, their limits and what they could mean for you or relatives. Do not use an internet test result to decide whether a family member has PH.",
        ],
      },
      {
        title: "Questions for the team",
        paragraphs: [],
        bullets: [
          "Is there a reason to consider genetics in my diagnosis?",
          "What would a test change about my care or family advice?",
          "Who can explain consent, privacy and possible implications?",
          "Do any relatives need an assessment, and through which service?",
        ],
      },
    ],
    related: [
      { title: "What is PH?", path: "/recently-diagnosed/what-is-ph" },
      questionLink,
    ],
  },
  {
    path: "/living-well/planning-ahead",
    title: "Supportive care and planning ahead",
    description:
      "Discuss symptoms, personal goals and future care alongside ongoing treatment.",
    scope:
      "General adult information; Australian legal requirements vary by state and territory",
    sources: ["UP02", "UK31", "AU17"],
    sections: [
      {
        title: "Support can sit alongside treatment",
        paragraphs: [
          "Ask your team about help with symptoms, worries and day-to-day quality of life. Supportive or palliative care can be discussed alongside treatment for PH; asking about it does not mean giving up treatment or making assumptions about how much time you have.",
        ],
      },
      {
        title: "Start with what matters to you",
        paragraphs: [
          "You can talk about goals, concerns, people you want involved and how you prefer decisions to be made. Preferences can change, so revisit conversations when useful. Ask for a suitable clinician, counsellor, social worker or interpreter to help.",
        ],
      },
      {
        title: "Choose and record appropriately",
        paragraphs: [
          "If you want someone to make healthcare decisions when you cannot, check the correct process in your state or territory. A financial power of attorney does not necessarily give medical authority. Advance care documents have different names, requirements and legal effects across Australia.",
        ],
      },
      {
        title: "Share and review your plan",
        paragraphs: [
          "Tell your healthcare team and chosen people where your documents are kept. Check which forms apply before moving jurisdictions. This website does not collect legal or health documents, and cannot replace individual legal or clinical advice.",
        ],
      },
    ],
    related: [
      { title: "The carer’s role", path: "/caring-for-someone/carers-role" },
      questionLink,
    ],
  },
  {
    path: "/living-well/staying-well",
    title: "Staying well and preparing for illness",
    description:
      "Discuss vaccination, intercurrent illness and practical care arrangements with your team.",
    scope:
      "General adult information; Australian vaccination and funding guidance changes",
    sources: ["AU23", "AU21"],
    sections: [
      {
        title: "Review prevention with your clinician",
        paragraphs: [
          "Ask which vaccinations and other preventive care are appropriate for your age, health and treatment. Recommendations and eligibility for funded vaccines are different questions. Your GP or PH team can check current Australian guidance; this page does not prescribe a universal vaccine schedule.",
        ],
      },
      {
        title: "Have a plan if another illness develops",
        paragraphs: [
          "Ask whom to contact if an infection or another illness affects your breathing, eating, drinking or ability to take medicines. Check new medicines with your pharmacist or PH team. Do not independently change a fluid restriction or PH treatment because you are unwell.",
        ],
      },
      {
        title: "Prepare practical support",
        paragraphs: [
          "Keep important contacts and medicine information available. Discuss who can help with supplies, appointments, oxygen or continuous infusion equipment if you cannot manage your usual routine. New or worsening symptoms still need assessment rather than an assumption that they are only a minor infection.",
        ],
      },
    ],
    related: [helpLink, medicineLink, questionLink],
  },
  {
    path: "/living-well/accessing-care",
    title: "Accessing care and practical support",
    description:
      "Plan local and specialist care, travel, communication and support that fits your circumstances.",
    scope:
      "Australian services; availability and eligibility require local confirmation",
    sources: ["AU04", "AU18", "AU19", "AU13"],
    sections: [
      {
        title: "Coordinate local and specialist care",
        paragraphs: [
          "Ask how your GP, local hospital and PH team will share information and who to contact between visits. Telehealth may be useful for some appointments, while tests or treatment can require attendance. Confirm arrangements with the service rather than assuming that every appointment needs travel or can happen by video.",
        ],
      },
      {
        title: "Check travel help before the journey",
        paragraphs: [
          "Australian states and territories have different assistance schemes. Eligibility can depend on residence, distance, referral, the nearest suitable service and other funding. A scheme may subsidise only part of the cost. Ask the service or hospital social worker about approvals, accommodation and any support-person arrangements before travel.",
        ],
      },
      {
        title: "Ask for communication and cultural support",
        paragraphs: [
          "Tell the service if you want an interpreter, accessible information, a support person or culturally appropriate support. Ask what is available locally, including Aboriginal and Torres Strait Islander liaison or support services where relevant. Preferences differ between people and communities; you should not have to share a public story to request support.",
        ],
      },
      {
        title: "Information that fits your needs",
        paragraphs: [
          "You can ask for plain-language explanations, a printed summary or another accessible format. Automatic translation is not the same as a checked medical translation. Country, age and service eligibility matter: Australian schemes should not be assumed to cover New Zealand visitors or residents.",
        ],
      },
    ],
    related: [
      {
        title: "Financial and practical support",
        path: "/living-well/financial-support",
      },
      { title: "Find a specialist", path: "/find-specialist" },
      questionLink,
    ],
  },
  {
    path: "/treatments/research",
    title: "Research, registries and your choices",
    description:
      "Understand how clinical research differs from care and from helping improve this website.",
    scope:
      "General discussion guide; current study eligibility must be checked with the study team",
    sources: ["AU04", "UK01"],
    sections: [
      {
        title: "Different activities have different purposes",
        paragraphs: [
          "A clinical trial studies a treatment or care question. A registry collects defined information to support understanding and improvement of care. Website feedback and co-design concern the development of PH Navigator. Taking part in one is not consent for another.",
        ],
      },
      {
        title: "Ask about a specific opportunity",
        paragraphs: [
          "Your healthcare team can help you find out whether a relevant study or registry is available. A listing or a discussion is not a guarantee of eligibility, benefit or a place in a trial. Read the approved participant information and ask about alternatives, risks, costs, privacy and withdrawal before deciding.",
        ],
      },
      {
        title: "No registration through this page",
        paragraphs: [
          "This page does not recruit participants, collect health information or register interest in a study. PH Navigator’s future feedback and focus-group processes remain separate and will explain their arrangements before opening.",
        ],
      },
    ],
    related: [
      { title: "Get Involved plans", path: "/get-involved" },
      questionLink,
    ],
  },
  {
    path: "/treatments/tests-and-procedures",
    title: "What to expect from tests",
    description:
      "Prepare questions about why a test is needed and the instructions that apply at your service.",
    scope:
      "General adult information; follow the testing service’s individual instructions",
    sources: ["UK06", "CL01", "CL02"],
    sections: [
      {
        title: "Different tests answer different questions",
        paragraphs: [
          "Your team may use an echocardiogram, lung-function tests, scans, blood tests or exercise tests to understand symptoms and causes. A V/Q scan examines the pattern of ventilation and blood flow in the lungs. The order and choice of tests vary; not everyone needs every test.",
        ],
      },
      {
        title: "Right heart catheterisation",
        paragraphs: [
          "RHC uses a thin tube passed through a vein to measure pressures and blood flow. It is used when direct measurements and classification will help guide care. Ask why it is recommended, what the procedure involves at your service, and how results will be explained.",
        ],
      },
      {
        title: "Get instructions from the service",
        paragraphs: [
          "Ask about preparation, medicines, eating and drinking, transport, support afterwards and whom to contact with concerns. Do not stop a PH medicine, anticoagulant or infusion using generic instructions online. Let the team know about oxygen, equipment, allergies and access needs.",
        ],
      },
      {
        title: "Understand the results together",
        paragraphs: [
          "An individual measurement is not a personal prognosis or a treatment prescription. Ask how it fits with your symptoms and other tests, whether a change matters and what the next step will be.",
        ],
      },
    ],
    related: [
      { title: "Understanding test results", path: "/treatments/test-results" },
      questionLink,
    ],
  },
];
