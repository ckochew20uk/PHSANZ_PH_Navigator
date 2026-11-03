import { Link } from "wouter";
import {
  ArrowRight,
  HeartPulse,
  Leaf,
  HeartHandshake,
  Search,
} from "lucide-react";
import { entryPaths } from "@/data/navigation";
import { useSearch } from "@/contexts/SearchContext";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";

export default function Start() {
  const { openSearch } = useSearch();
  return (
    <section className="clinic-start py-6 md:py-12">
      <ContentContainer>
        <div className="mx-auto mb-6 max-w-2xl text-center">
          <SectionHeading as="h1" className="mb-3">
            Find your starting point
          </SectionHeading>
          <p>Information and support for you and the people close to you.</p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-3 md:grid-cols-3">
          {entryPaths.map((item, i) => {
            const Icon = [HeartPulse, Leaf, HeartHandshake][i];
            const background = {
              peach: "bg-[var(--brand-peach)]",
              mint: "bg-accent",
              lavender: "bg-[var(--brand-lavender)]",
            }[item.tone];
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`flex items-start gap-3 rounded-2xl border border-primary/20 p-4 transition-colors hover:border-secondary md:flex-col md:p-6 ${background}`}
              >
                <Icon
                  className="mt-1 h-6 w-6 shrink-0 text-primary"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-heading text-xl font-bold text-primary">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-sm text-foreground">
                    {item.description}
                  </p>
                </div>
                <ArrowRight
                  className="mt-1 h-5 w-5 shrink-0 text-primary"
                  aria-hidden="true"
                />
              </Link>
            );
          })}
        </div>
        <p className="mt-5 text-center text-sm text-muted-foreground">
          Choose what’s useful today. You can change direction at any time.
        </p>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
          <Link
            href="/"
            className="py-2 text-sm font-medium text-secondary underline underline-offset-4"
          >
            Browse the website
          </Link>
          <button
            type="button"
            onClick={openSearch}
            className="inline-flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-medium text-secondary underline underline-offset-4"
          >
            <Search className="h-4 w-4" aria-hidden="true" />
            Search for a topic
          </button>
        </div>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          No account or personal information is needed.
        </p>
      </ContentContainer>
    </section>
  );
}
