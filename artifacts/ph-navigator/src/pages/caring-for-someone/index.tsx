import { JourneyHub } from "@/components/journeys/JourneyHub";
export default function CaringForSomeoneHub() {
  return (
    <JourneyHub
      title="Supporting someone with PH"
      introduction="Information for partners, family, friends and carers. Understand PH, support someone close to you and make space for your own wellbeing."
      recommended={[
        {
          title: "Understand PH",
          description: "Learn about the condition in plain language.",
          path: "/recently-diagnosed/what-is-ph",
        },
        {
          title: "Support care and appointments",
          description: "Explore the carer’s role and practical ways to help.",
          path: "/caring-for-someone/carers-role",
        },
        {
          title: "Care for your own wellbeing",
          description:
            "Recognise your needs and find guidance on seeking support.",
          path: "/caring-for-someone/carer-wellbeing",
        },
      ]}
      groups={[
        {
          title: "Understanding the condition",
          links: [
            { title: "Understanding PH", path: "/understanding-ph" },
            { title: "Treatments and clinical facts", path: "/treatments" },
            {
              title: "Understanding test results",
              path: "/treatments/test-results",
            },
          ],
        },
        {
          title: "Supporting everyday care",
          links: [
            {
              title: "Symptoms and contact plan",
              path: "/treatments/when-to-seek-help",
            },
            { title: "Medicine safety", path: "/treatments/medicine-safety" },
            {
              title: "The carer’s role",
              path: "/caring-for-someone/carers-role",
            },
            {
              title: "Questions for appointments",
              path: "/recently-diagnosed/questions-for-doctor",
            },
            { title: "Living with PH", path: "/living-well" },
          ],
        },
        {
          title: "Support for you",
          links: [
            {
              title: "Supportive care and planning ahead",
              path: "/living-well/planning-ahead",
            },
            {
              title: "Children and families",
              path: "/recently-diagnosed/children-families",
            },
            {
              title: "Your wellbeing",
              path: "/caring-for-someone/carer-wellbeing",
            },
            {
              title: "Carer support networks",
              path: "/caring-for-someone/carer-support",
            },
            { title: "Resources in development", path: "/resource-library" },
          ],
        },
      ]}
    />
  );
}
