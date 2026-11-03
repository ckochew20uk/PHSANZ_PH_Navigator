import { JourneyHub } from "@/components/journeys/JourneyHub";
export default function LivingWellHub() {
  return (
    <JourneyHub
      title="Living with PH"
      introduction="Find practical guidance for everyday life, understand your care and explore support for your wellbeing. Choose what matters to you today."
      recommended={[
        {
          title: "Everyday life",
          description:
            "Start with movement and pacing, then explore food, travel and oxygen guidance below.",
          path: "/living-well/exercise",
        },
        {
          title: "Your treatment and tests",
          description:
            "Return to clinical information when you have questions.",
          path: "/treatments",
        },
        {
          title: "Emotional and practical support",
          description: "Explore wellbeing guidance and ways to seek support.",
          path: "/living-well/mental-wellbeing",
        },
      ]}
      groups={[
        {
          title: "Everyday life",
          links: [
            {
              title: "Exercise and physical activity",
              path: "/living-well/exercise",
            },
            {
              title: "Diet and nutrition",
              path: "/living-well/diet-nutrition",
            },
            { title: "Travel and oxygen", path: "/living-well/travel-oxygen" },
          ],
        },
        {
          title: "Your care",
          links: [
            { title: "Treatments explained", path: "/treatments/explained" },
            {
              title: "Understanding test results",
              path: "/treatments/test-results",
            },
            {
              title: "Questions for your healthcare team",
              path: "/recently-diagnosed/questions-for-doctor",
            },
          ],
        },
        {
          title: "Support",
          links: [
            {
              title: "Mental wellbeing",
              path: "/living-well/mental-wellbeing",
            },
            {
              title: "Financial and practical support",
              path: "/living-well/financial-support",
            },
            {
              title: "Supporting someone with PH",
              path: "/caring-for-someone",
            },
            { title: "Resources in development", path: "/resource-library" },
          ],
        },
      ]}
    />
  );
}
