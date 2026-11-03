import { Link, useLocation } from "wouter";
import { patientNavigation, isJourneyActive } from "@/data/navigation";
import { searchIndex } from "@/data/searchIndex";

export function JourneyTrail() {
  const [path] = useLocation();
  const journey = patientNavigation.find((item) => isJourneyActive(path, item));
  if (!journey || path === journey.path) return null;
  const title = searchIndex.find((item) => item.path === path)?.title;
  if (!title) return null;
  return (
    <nav
      aria-label="Breadcrumb"
      className="content-container py-4 text-sm text-muted-foreground"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        <li>
          <Link href="/" className="underline underline-offset-4">
            Home
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href={journey.path} className="underline underline-offset-4">
            {journey.title}
          </Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">{title}</li>
      </ol>
    </nav>
  );
}
