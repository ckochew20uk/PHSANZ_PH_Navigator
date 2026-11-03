import { JourneyHub } from "@/components/journeys/JourneyHub";
export default function RecentlyDiagnosed() {
  return (
    <JourneyHub
      title="Newly diagnosed with PH"
      introduction="A diagnosis can feel overwhelming. You don’t need to understand everything today. Begin with the basics, prepare for your next appointment and find support."
      note={{
        title: "A note on finding information online",
        body: "Online information can vary in quality and date. Use it to prepare questions for your treating team, and check which PH type and country it applies to. PH Navigator\u2019s article review process is being established.",
      }}
      recommended={[
        {
          title: "Your first steps",
          description:
            "A calm guide to your diagnosis, contacts and next conversation.",
          path: "/recently-diagnosed/first-steps",
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
            {
              title: "Symptoms and seeking help",
              path: "/treatments/when-to-seek-help",
            },
            {
              title: "Your medicine safety plan",
              path: "/treatments/medicine-safety",
            },
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
