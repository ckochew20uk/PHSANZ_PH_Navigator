import { useLocation } from "wouter";
import { articleSources } from "@/data/articleSources";
import { informationGuides } from "@/data/informationGuides";

const existing: Record<string, string[]> = {
  "/recently-diagnosed/what-is-ph": ["CL01", "CL02", "UK05"],
  "/recently-diagnosed/diagnostic-journey": ["CL01", "CL02", "UK06", "AU21"],
  "/recently-diagnosed/questions-for-doctor": ["UK27", "UK28"],
  "/treatments/explained": ["AU01", "AU02", "AU03", "AU08", "CL03", "CL04"],
  "/treatments/test-results": ["CL01", "CL03", "CL05"],
  "/living-well/diet-nutrition": ["AU12", "AU27"],
  "/living-well/exercise": ["CL02", "AU21", "AU22"],
  "/living-well/travel-oxygen": ["AU11"],
  "/living-well/mental-wellbeing": ["AU10", "AU21", "AU25"],
  "/living-well/financial-support": [
    "AU05",
    "AU06",
    "AU07",
    "AU08",
    "AU09",
    "AU18",
    "AU26",
  ],
  "/caring-for-someone/carers-role": ["AU17", "AU08"],
  "/caring-for-someone/carer-wellbeing": ["AU13", "AU14"],
  "/caring-for-someone/carer-support": ["AU14", "AU15", "AU16"],
  "/for-healthcare-professionals": ["CL02", "CL04", "AU04", "AU08"],
};
export function ArticleReview() {
  const [location] = useLocation();
  const path = location.replace(/\/+$/, "") || "/";
  const guide = informationGuides.find((item) => item.path === path);
  const ids = guide?.sources ?? existing[path];
  if (!ids) return null;
  return (
    <aside
      aria-label="About this information"
      className="mx-auto mb-12 w-full max-w-4xl border-t border-border px-4 pt-6 text-sm leading-relaxed"
    >
      <h2 className="font-heading text-xl font-bold text-primary">
        About this information
      </h2>
      <p className="mt-2 font-semibold text-primary">Clinical review pending</p>
      <p className="mt-2">
        {guide?.scope ??
          "General information. Australian services and eligibility are identified in the article; New Zealand arrangements may differ."}{" "}
        Use this information to prepare questions for your treating team.
      </p>
      <p className="mt-2">
        Source check: 3 November 2026. This is not a clinical approval date.
        References include general guidance and topic resources; medicine
        information and local access must be checked for your circumstances.
      </p>
      {ids.includes("CL04") && (
        <p className="mt-2">
          A September 2026 treatment update has been identified. Detailed
          guideline appraisal and current Australian access checks remain part
          of the clinical review.
        </p>
      )}
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {ids
          .map((id) => articleSources[id])
          .filter(Boolean)
          .map((source) => (
            <li key={source.url}>
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary underline underline-offset-4"
              >
                {source.title}
              </a>
            </li>
          ))}
      </ul>
    </aside>
  );
}
