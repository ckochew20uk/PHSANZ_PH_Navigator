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
              title: "Your first steps after diagnosis",
              path: "/recently-diagnosed/first-steps",
            },
            {
              title: "Children, young people and families",
              path: "/recently-diagnosed/children-families",
            },
            {
              title: "Genetics and family questions",
              path: "/recently-diagnosed/genetics",
            },
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
            {
              title: "Symptoms and seeking help",
              path: "/treatments/when-to-seek-help",
            },
            {
              title: "Your medicine safety plan",
              path: "/treatments/medicine-safety",
            },
            { title: "Understanding CTEPH", path: "/treatments/cteph" },
            {
              title: "What to expect from tests",
              path: "/treatments/tests-and-procedures",
            },
            {
              title: "Research and your choices",
              path: "/treatments/research",
            },
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
