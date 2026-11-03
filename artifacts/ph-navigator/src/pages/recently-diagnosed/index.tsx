import { JourneyHub } from "@/components/journeys/JourneyHub";
export default function RecentlyDiagnosed() {
  return (
    <JourneyHub
      title="Newly diagnosed with PH"
      introduction="A diagnosis can feel overwhelming. You don’t need to understand everything today. Begin with the basics, prepare for your next appointment and find support."
      note={{
        title: "A note on finding information online",
        body: "When newly diagnosed, it is natural to search the internet for answers. Please be aware that much of the information online regarding pulmonary hypertension is outdated or clinically inaccurate. Survival rates and treatment options have improved dramatically in recent years. Always rely on information from your specialist team and trusted sources like PH Navigator.",
      }}
      recommended={[
        {
          title: "Understand the basics",
          description:
            "A plain-language introduction to pulmonary hypertension.",
          path: "/recently-diagnosed/what-is-ph",
        },
        {
          title: "Prepare for your next appointment",
          description: "Questions to help you talk with your healthcare team.",
          path: "/recently-diagnosed/questions-for-doctor",
        },
        {
          title: "Find support for your wellbeing",
          description:
            "Guidance on coping with uncertainty and seeking support.",
          path: "/living-well/mental-wellbeing",
        },
      ]}
      groups={[
        {
          title: "Making sense of PH",
          links: [
            {
              title: "The diagnostic journey",
              path: "/recently-diagnosed/diagnostic-journey",
            },
            { title: "Understanding PH", path: "/understanding-ph" },
          ],
        },
        {
          title: "Care and appointments",
          links: [
            { title: "Treatments explained", path: "/treatments/explained" },
            {
              title: "Understanding test results",
              path: "/treatments/test-results",
            },
            { title: "Find a specialist centre", path: "/find-specialist" },
          ],
        },
        {
          title: "Support around you",
          links: [
            { title: "Living with PH", path: "/living-well" },
            { title: "Supporting someone", path: "/caring-for-someone" },
            { title: "Resources in development", path: "/resource-library" },
          ],
        },
      ]}
    />
  );
}
