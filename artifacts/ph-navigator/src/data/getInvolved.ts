export const involvementPages = {
  overview: {
    path: "/get-involved",
    title: "Get Involved",
    description:
      "Growing with you: help shape PH Navigator, a small, new initiative of PHSANZ. Explore future ways to contribute.",
  },
  feedback: {
    path: "/get-involved/feedback",
    title: "Share your feedback",
    description:
      "Learn about the planned PH Navigator website-feedback survey. The survey is in development and is not open yet.",
  },
  focusGroups: {
    path: "/get-involved/focus-groups",
    title: "Join future conversations",
    description:
      "Explore plans for PH Navigator focus groups and co-design. Expressions of interest are not open yet.",
  },
  contribute: {
    path: "/get-involved/contribute",
    title: "Explore ways to contribute",
    description:
      "Learn about possible future contributions to PH Navigator, including resource review, lived experience and volunteering.",
  },
} as const;

export const opportunities = [
  {
    ...involvementPages.feedback,
    summary:
      "Help identify missing information and make the website clearer and more useful.",
    kind: "feedback",
  },
  {
    ...involvementPages.focusGroups,
    summary:
      "Learn about plans for future focus groups and co-design conversations.",
    kind: "focusGroups",
  },
  {
    ...involvementPages.contribute,
    summary:
      "Explore possible ways to contribute your time, experience or skills.",
    kind: "contribute",
  },
] as const;

/** Add only verified official account URLs. Social channels distribute updates; participation stays on the website. */
export const officialSocialAccounts: {
  platform: "Facebook" | "Instagram";
  url: string;
}[] = [];
