export interface NavigationItem {
  title: string;
  shortTitle: string;
  path: string;
  matches: string[];
}

export const patientNavigation: NavigationItem[] = [
  {
    title: "Understanding PH",
    shortTitle: "Understand PH",
    path: "/understanding-ph",
    matches: ["/understanding-ph", "/recently-diagnosed", "/treatments"],
  },
  {
    title: "Living with PH",
    shortTitle: "Living with PH",
    path: "/living-well",
    matches: ["/living-well", "/caring-for-someone"],
  },
  {
    title: "Community Voices",
    shortTitle: "Community",
    path: "/community-voices",
    matches: ["/community-voices"],
  },
];
export function isJourneyActive(path: string, item: NavigationItem) {
  return item.matches.some(
    (prefix) => path === prefix || path.startsWith(prefix + "/"),
  );
}
export const entryPaths = [
  {
    title: "I’m newly diagnosed",
    description: "Understand PH and prepare for your next appointment.",
    path: "/recently-diagnosed",
    tone: "peach" as const,
  },
  {
    title: "I’m living with PH",
    description: "Everyday life, treatment and wellbeing.",
    path: "/living-well",
    tone: "mint" as const,
  },
  {
    title: "I’m supporting someone",
    description: "Guidance for family, friends and carers.",
    path: "/caring-for-someone",
    tone: "lavender" as const,
  },
];
export const footerPatientLinks = [
  { title: "Start here", path: "/start" },
  ...patientNavigation.map(({ title, path }) => ({ title, path })),
  { title: "Supporting someone", path: "/caring-for-someone" },
  { title: "Find a specialist", path: "/find-specialist" },
  { title: "Resource library", path: "/resource-library" },
];
export const footerOrganisationLinks = [
  { title: "About PH Navigator", path: "/about" },
  { title: "Our Partners", path: "/about/partnership" },
  { title: "Our Review Panels", path: "/about/advisory-panel" },
  {
    title: "For healthcare professionals",
    path: "/for-healthcare-professionals",
  },
  { title: "Launch governance", path: "/governance-checklist" },
];
