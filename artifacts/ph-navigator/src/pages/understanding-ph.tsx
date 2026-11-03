import { JourneyHub } from "@/components/journeys/JourneyHub";
export default function UnderstandingPH() {
  return (
    <JourneyHub
      title="Understanding PH"
      introduction="Clear information about pulmonary hypertension, diagnosis, treatment and tests — whether you are newly diagnosed or returning with a new question."
      recommended={[
        {
          title: "What is PH?",
          description: "Understand the condition in plain language.",
          path: "/recently-diagnosed/what-is-ph",
        },
        {
          title: "Understanding your treatment",
          description: "Explore the existing treatment guide.",
          path: "/treatments/explained",
        },
        {
          title: "Prepare for appointments",
          description: "Find questions to discuss with your healthcare team.",
          path: "/recently-diagnosed/questions-for-doctor",
        },
      ]}
      groups={[
        {
          title: "Understanding the basics",
          links: [
            {
              title: "Newly diagnosed? Begin here",
              path: "/recently-diagnosed",
            },
            { title: "What is PH?", path: "/recently-diagnosed/what-is-ph" },
            {
              title: "The diagnostic journey",
              path: "/recently-diagnosed/diagnostic-journey",
            },
          ],
        },
        {
          title: "Treatment and tests",
          links: [
            { title: "Treatments and clinical facts", path: "/treatments" },
            { title: "Treatments explained", path: "/treatments/explained" },
            {
              title: "Understanding test results",
              path: "/treatments/test-results",
            },
          ],
        },
        {
          title: "Your next step",
          links: [
            {
              title: "Questions for your healthcare team",
              path: "/recently-diagnosed/questions-for-doctor",
            },
            { title: "Find a specialist", path: "/find-specialist" },
            { title: "Resources in development", path: "/resource-library" },
          ],
        },
      ]}
    />
  );
}
