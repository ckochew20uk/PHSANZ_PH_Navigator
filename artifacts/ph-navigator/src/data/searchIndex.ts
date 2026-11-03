import { involvementPages } from "./getInvolved";
export interface SearchItem {
  title: string;
  description: string;
  path: string;
  category: string;
  keywords: string[];
}

export const searchIndex: SearchItem[] = [
  ...Object.values(involvementPages).map(page => ({ title: page.title, description: page.description, path: page.path, category: "General" as const, keywords: ["get involved", "growing with you", "survey", "feedback", "focus group", "co-design", "contribute", "volunteer"] })),
  { title: 'Find your starting point', description: 'Choose newly diagnosed, living with PH, or supporting someone. No account needed.', path: '/start', category: 'General', keywords: ['start', 'QR', 'clinic', 'new diagnosis', 'carer', 'family'] },
  { title: 'Understanding PH', description: 'A place to explore PH, diagnosis, treatment, tests and appointment preparation.', path: '/understanding-ph', category: 'General', keywords: ['understand', 'diagnosis', 'treatment', 'tests', 'information'] },
  {
    title: "Privacy information — draft",
    description:
      "Newsletter data handling and privacy arrangements awaiting PHSANZ approval.",
    path: "/privacy",
    category: "About",
    keywords: ["privacy", "Mailchimp", "data", "contact"],
  },
  {
    title: "Terms of use — draft",
    description:
      "Draft information-use boundaries and institutional terms awaiting approval.",
    path: "/terms",
    category: "About",
    keywords: ["terms", "copyright", "permissions"],
  },
  {
    title: "Accessibility",
    description: "Accessibility aims, current features and known limitations.",
    path: "/accessibility",
    category: "About",
    keywords: ["accessibility", "keyboard", "WCAG", "feedback"],
  },
  {
    title: "Home",
    description:
      "A calm, trusted guide for people living with pulmonary hypertension in Australia and New Zealand.",
    path: "/",
    category: "General",
    keywords: [
      "home",
      "start",
      "ph navigator",
      "pulmonary hypertension",
      "welcome",
    ],
  },

  // Recently Diagnosed
  {
    title: "Newly diagnosed with PH",
    description:
      "Guidance and support for those newly diagnosed with pulmonary hypertension.",
    path: "/recently-diagnosed",
    category: "Recently Diagnosed",
    keywords: [
      "new diagnosis",
      "just diagnosed",
      "what now",
      "next steps",
      "newly diagnosed",
    ],
  },
  {
    title: "What is PH?",
    description:
      "Learn what pulmonary hypertension is, how it affects the heart and lungs, and what it means for daily life.",
    path: "/recently-diagnosed/what-is-ph",
    category: "Recently Diagnosed",
    keywords: [
      "what is pulmonary hypertension",
      "ph explained",
      "definition",
      "lung condition",
      "high blood pressure lungs",
      "rare disease",
    ],
  },
  {
    title: "The Diagnostic Journey",
    description:
      "Understand the tests, specialists, and timeline involved in getting a PH diagnosis.",
    path: "/recently-diagnosed/diagnostic-journey",
    category: "Recently Diagnosed",
    keywords: [
      "diagnosis",
      "tests",
      "right heart catheterisation",
      "echo",
      "echocardiogram",
      "specialist",
      "referral",
      "how is ph diagnosed",
    ],
  },
  {
    title: "Questions for Your Doctor",
    description:
      "A list of important questions to ask your PH specialist at your next appointment.",
    path: "/recently-diagnosed/questions-for-doctor",
    category: "Recently Diagnosed",
    keywords: [
      "doctor questions",
      "specialist appointment",
      "what to ask",
      "consultation",
      "clinic visit",
    ],
  },

  // Treatments
  {
    title: "Treatments",
    description:
      "An overview of the treatment options available for pulmonary hypertension.",
    path: "/treatments",
    category: "Treatments",
    keywords: [
      "medication",
      "medicine",
      "therapy",
      "treatment options",
      "ph drugs",
    ],
  },
  {
    title: "Treatments Explained",
    description:
      "Detailed explanations of the medications and therapies used to treat PH.",
    path: "/treatments/explained",
    category: "Treatments",
    keywords: [
      "ERA",
      "PDE5",
      "prostacyclin",
      "riociguat",
      "sildenafil",
      "bosentan",
      "macitentan",
      "drug classes",
      "medication explained",
    ],
  },
  {
    title: "Understanding Test Results",
    description:
      "What your blood tests, walk tests, and imaging results mean for your PH management.",
    path: "/treatments/test-results",
    category: "Treatments",
    keywords: [
      "6 minute walk",
      "6MWT",
      "BNP",
      "NT-proBNP",
      "blood test",
      "scan",
      "test results",
      "monitoring",
    ],
  },

  // Living Well
  {
    title: "Living with PH",
    description:
      "Practical advice for maintaining quality of life while managing pulmonary hypertension.",
    path: "/living-well",
    category: "Living Well",
    keywords: ["quality of life", "daily life", "managing ph", "lifestyle"],
  },
  {
    title: "Diet & Nutrition",
    description:
      "Eating well with PH — foods to focus on, foods to limit, and managing fluid intake.",
    path: "/living-well/diet-nutrition",
    category: "Living Well",
    keywords: [
      "diet",
      "nutrition",
      "food",
      "salt",
      "sodium",
      "fluid restriction",
      "eating",
      "weight",
    ],
  },
  {
    title: "Exercise & Physical Activity",
    description:
      "Safe exercise guidelines for people with PH — what to do, what to avoid, and how to pace yourself.",
    path: "/living-well/exercise",
    category: "Living Well",
    keywords: [
      "exercise",
      "walking",
      "activity",
      "rehabilitation",
      "pacing",
      "gym",
      "fitness",
      "breathlessness",
    ],
  },
  {
    title: "Travel & Oxygen",
    description:
      "Planning travel with PH, including flying with oxygen and managing medications abroad.",
    path: "/living-well/travel-oxygen",
    category: "Living Well",
    keywords: [
      "travel",
      "flying",
      "oxygen",
      "airline",
      "plane",
      "holidays",
      "international",
      "ACOP",
      "supplemental oxygen",
    ],
  },
  {
    title: "Mental Wellbeing",
    description:
      "Managing anxiety, depression, and emotional health while living with a chronic illness.",
    path: "/living-well/mental-wellbeing",
    category: "Living Well",
    keywords: [
      "anxiety",
      "depression",
      "mental health",
      "emotional",
      "grief",
      "stress",
      "psychology",
      "counselling",
      "wellbeing",
    ],
  },
  {
    title: "Financial Support",
    description:
      "Benefits, NDIS, insurance, and financial assistance available for people with PH in Australia and NZ.",
    path: "/living-well/financial-support",
    category: "Living Well",
    keywords: [
      "NDIS",
      "disability",
      "DSP",
      "Centrelink",
      "insurance",
      "financial assistance",
      "work",
      "employment",
      "benefit",
    ],
  },

  // Community Voices
  {
    title: "Community Voices",
    description:
      "Our patient and carer story collection is being developed. Explore planned themes and existing support guidance.",
    path: "/community-voices",
    category: "Community",
    keywords: [
      "stories",
      "personal",
      "patient stories",
      "experiences",
      "community",
      "voices",
      "carer stories",
    ],
  },
  {
    title: "Launch Governance Checklist",
    description:
      "Privacy, consent, moderation, retention, and access safeguards for newsletter and Community Voices launch tasks under PHSANZ.",
    path: "/governance-checklist",
    category: "Community",
    keywords: [
      "governance",
      "privacy",
      "consent",
      "Mailchimp",
      "unsubscribe",
      "moderation",
      "data retention",
      "patient stories",
      "health information",
    ],
  },

  // Caring for Someone
  {
    title: "Supporting someone with PH",
    description:
      "Support and resources for carers, family members, and friends of people living with PH.",
    path: "/caring-for-someone",
    category: "Carers",
    keywords: [
      "carer",
      "caregiver",
      "family",
      "partner",
      "spouse",
      "support",
      "caring",
    ],
  },
  {
    title: "Understanding the Carer's Role",
    description:
      "What it means to care for someone with PH and how to navigate the role effectively.",
    path: "/caring-for-someone/carers-role",
    category: "Carers",
    keywords: [
      "carer role",
      "responsibilities",
      "support",
      "what carers do",
      "helping",
    ],
  },
  {
    title: "Protecting Your Wellbeing as a Carer",
    description:
      "Looking after your own physical and mental health while caring for someone with PH.",
    path: "/caring-for-someone/carer-wellbeing",
    category: "Carers",
    keywords: [
      "carer burnout",
      "respite",
      "self-care",
      "carer health",
      "mental health carer",
      "wellbeing",
    ],
  },
  {
    title: "Carer Support Networks",
    description:
      "Finding carer support groups, services, and resources in Australia and New Zealand.",
    path: "/caring-for-someone/carer-support",
    category: "Carers",
    keywords: [
      "support group",
      "carer network",
      "carers australia",
      "carer gateway",
      "respite care",
      "peer support",
    ],
  },

  // Resource Library
  {
    title: "Resource Library",
    description:
      "Downloadable fact sheets, guides, and educational materials about pulmonary hypertension.",
    path: "/resource-library",
    category: "Resources",
    keywords: [
      "fact sheet",
      "download",
      "guide",
      "brochure",
      "pamphlet",
      "information",
      "PDF",
      "booklet",
    ],
  },

  // Find a Specialist
  {
    title: "Find a Specialist",
    description:
      "Locate PH specialist centres and clinics across Australia and New Zealand.",
    path: "/find-specialist",
    category: "Find a Specialist",
    keywords: [
      "specialist",
      "clinic",
      "hospital",
      "centre",
      "find a doctor",
      "cardiologist",
      "pulmonologist",
      "PH centre",
      "where to go",
    ],
  },

  // About
  {
    title: "About PH Navigator",
    description:
      "Learn about PH Navigator, an initiative of PHSANZ under its Patient Advocacy Subcommittee.",
    path: "/about",
    category: "About",
    keywords: [
      "about",
      "PHA Australia",
      "PHSANZ",
      "partnership",
      "mission",
      "who we are",
    ],
  },
  {
    title: "Our Partners",
    description:
      "Proposed future collaborations with PHA Australia and Lung Foundation Australia; partnerships are not yet confirmed.",
    path: "/about/partnership",
    category: "About",
    keywords: [
      "PHA Australia",
      "PHSANZ",
      "proposed partners",
      "collaboration",
      "Lung Foundation Australia",
      "organisations",
    ],
  },
  {
    title: "Our Review Panels",
    description:
      "The developing Clinician Advisory Panel led by Dr Christopher Chew and Lived Experience Panel led by Tharuka Kossinna.",
    path: "/about/advisory-panel",
    category: "About",
    keywords: [
      "advisory",
      "panel",
      "doctors",
      "experts",
      "clinician advisory",
      "lived experience",
      "Christopher Chew",
      "Tharuka Kossinna",
      "review",
    ],
  },

  // Healthcare professionals
  {
    title: "For Healthcare Professionals",
    description:
      "Clinical resources, referral pathways, and professional education for clinicians managing PH.",
    path: "/for-healthcare-professionals",
    category: "Healthcare Professionals",
    keywords: [
      "clinician",
      "GP",
      "doctor",
      "nurse",
      "referral",
      "clinical",
      "professional",
      "guidelines",
    ],
  },
];
