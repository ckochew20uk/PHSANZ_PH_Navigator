import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";

export interface JourneyLink {
  title: string;
  description?: string;
  path: string;
}
export interface JourneyGroup {
  title: string;
  description?: string;
  links: JourneyLink[];
}

export function JourneyHub({
  title,
  introduction,
  recommended,
  groups,
  note,
}: {
  title: string;
  introduction: string;
  recommended: JourneyLink[];
  groups: JourneyGroup[];
  note?: { title: string; body: string };
}) {
  return (
    <div className="w-full">
      <section className="design-section bg-accent">
        <ContentContainer>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            An initiative of PHSANZ
          </p>
          <SectionHeading as="h1" className="mb-5">
            {title}
          </SectionHeading>
          <p className="max-w-2xl text-lg">{introduction}</p>
          <Link
            href="/start"
            className="mt-4 inline-block py-2 font-medium text-secondary underline underline-offset-4"
          >
            Choose a different starting point
          </Link>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer>
          <SectionHeading className="mb-3">
            Start with what matters to you
          </SectionHeading>
          <p className="mb-6 max-w-2xl text-muted-foreground">
            You don’t have to read everything at once. These are suggested
            starting points, and you can explore in any order.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {recommended.map((item, i) => (
              <Link
                key={item.path}
                href={item.path}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 hover:border-secondary"
              >
                <span
                  className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-sm font-medium text-primary"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <h3 className="font-heading text-xl font-bold text-primary">
                  {item.title}
                </h3>
                {item.description && (
                  <p className="my-3 flex-1 text-muted-foreground">
                    {item.description}
                  </p>
                )}
                <span className="mt-4 flex items-center gap-2 font-medium text-secondary">
                  Explore <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          {note && (
            <details className="mt-8 max-w-3xl rounded-2xl border border-border bg-white p-5">
              <summary className="cursor-pointer font-heading text-lg font-bold text-primary">
                {note.title}
              </summary>
              <p className="mt-4 text-muted-foreground">{note.body}</p>
            </details>
          )}
        </ContentContainer>
      </section>
      <section className="design-section bg-white">
        <ContentContainer>
          <SectionHeading className="mb-8">Explore further</SectionHeading>
          <div className="grid gap-8 md:grid-cols-3">
            {groups.map((group) => (
              <div key={group.title}>
                <h3 className="mb-3 font-heading text-2xl font-bold text-primary">
                  {group.title}
                </h3>
                {group.description && (
                  <p className="mb-4 text-muted-foreground">
                    {group.description}
                  </p>
                )}
                <ul className="divide-y divide-border">
                  {group.links.map((item) => (
                    <li key={item.path}>
                      <Link
                        href={item.path}
                        className="flex items-start justify-between gap-3 py-4 font-medium text-secondary underline underline-offset-4"
                      >
                        {item.title}
                        <ArrowRight
                          className="mt-1 h-4 w-4 shrink-0"
                          aria-hidden="true"
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ContentContainer>
      </section>
      <section className="design-section bg-[var(--brand-lavender)]">
        <ContentContainer>
          <SectionHeading className="mb-4">
            A place for community
          </SectionHeading>
          <p className="max-w-2xl">
            Our patient and carer story collection is being developed. No
            stories are published yet, but you can explore the plans and
            existing support guidance.
          </p>
          <Link
            href="/community-voices"
            className="mt-4 inline-flex items-center gap-2 py-2 font-medium text-secondary underline underline-offset-4"
          >
            Explore Community Voices{" "}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </ContentContainer>
      </section>
    </div>
  );
}
