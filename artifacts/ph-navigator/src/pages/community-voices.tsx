import { Link } from "wouter";
import {
  ArrowRight,
  BookOpen,
  HeartHandshake,
  Leaf,
  Users,
} from "lucide-react";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";
import { StoriesPlaceholder } from "@/components/community/StoriesPlaceholder";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const plannedAreas = [
  {
    title: "Finding your feet",
    description:
      "Space for future stories about diagnosis, questions and the early days of living with PH.",
    icon: BookOpen,
    colour: "bg-[var(--brand-peach)]",
  },
  {
    title: "Everyday life with PH",
    description:
      "Space for future perspectives on daily routines, wellbeing and living with a changing condition.",
    icon: Leaf,
    colour: "bg-accent",
  },
  {
    title: "Family and carers",
    description:
      "Space for future experiences from the people who care alongside someone with PH.",
    icon: HeartHandshake,
    colour: "bg-[var(--brand-lavender)]",
  },
];

export default function CommunityVoices() {
  return (
    <div className="w-full">
      <section
        className="design-section bg-[var(--brand-lavender)]"
        aria-labelledby="community-page-title"
      >
        <ContentContainer>
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
                A place for lived experience
              </p>
              <SectionHeading
                as="h1"
                id="community-page-title"
                className="mb-5"
              >
                Community Voices
              </SectionHeading>
              <p className="max-w-2xl text-lg leading-relaxed text-foreground">
                A space for people affected by pulmonary hypertension in
                Australia and New Zealand. We’re building a collection of
                patient and carer perspectives, with room for different
                experiences.
              </p>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                The story collection is not available yet. In the meantime, you
                can explore the support guidance below.
              </p>
            </div>
            <div
              className="hidden h-40 w-40 items-center justify-center rounded-[2.5rem] bg-white/70 md:flex"
              aria-hidden="true"
            >
              <Users className="h-20 w-20 text-secondary" />
            </div>
          </div>
        </ContentContainer>
      </section>

      <section className="design-section" aria-labelledby="stories-title">
        <ContentContainer>
          <SectionHeading id="stories-title" className="mb-6">
            Our story collection is taking shape
          </SectionHeading>
          <StoriesPlaceholder />
          <div className="mt-10">
            <SectionHeading as="h3" className="mb-3">
              What this space could include
            </SectionHeading>
            <p className="mb-6 max-w-2xl text-muted-foreground">
              These are planned themes, not published stories. Topics will grow
              with the content that people choose to share.
            </p>
            <div className="grid gap-5 md:grid-cols-3">
              {plannedAreas.map(
                ({ title, description, icon: Icon, colour }) => (
                  <Card key={title} className="h-full shadow-none">
                    <CardHeader>
                      <span
                        className={`mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl ${colour}`}
                      >
                        <Icon
                          className="h-6 w-6 text-primary"
                          aria-hidden="true"
                        />
                      </span>
                      <h4 className="font-heading text-xl font-bold text-primary">
                        {title}
                      </h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{description}</p>
                      <p className="mt-4 text-sm font-medium text-primary">
                        Planned content
                      </p>
                    </CardContent>
                  </Card>
                ),
              )}
            </div>
          </div>
        </ContentContainer>
      </section>

      <section
        className="design-section bg-white"
        aria-labelledby="connect-title"
      >
        <ContentContainer>
          <SectionHeading id="connect-title" className="mb-4">
            Connect with others
          </SectionHeading>
          <p className="mb-8 max-w-2xl text-foreground">
            Looking for support now? These existing guides are a starting point
            for finding support networks, caring for your wellbeing and helping
            someone close to you.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Support networks for carers",
                description:
                  "Explore the existing guidance on carer support and services.",
                href: "/caring-for-someone/carer-support",
              },
              {
                title: "Mental wellbeing",
                description:
                  "Find guidance on emotional wellbeing and seeking support.",
                href: "/living-well/mental-wellbeing",
              },
              {
                title: "Resources for your next step",
                description:
                  "Browse the resource library for practical PH information.",
                href: "/resource-library",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-secondary focus-visible:outline-secondary"
              >
                <h3 className="font-heading text-xl font-bold text-primary">
                  {item.title}
                </h3>
                <p className="my-4 flex-1 text-muted-foreground">
                  {item.description}
                </p>
                <span className="flex items-center gap-2 font-medium text-secondary">
                  Explore the guide{" "}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </ContentContainer>
      </section>

      <section
        className="design-section bg-accent"
        aria-labelledby="sharing-title"
      >
        <ContentContainer reading>
          <SectionHeading id="sharing-title" className="mb-4">
            Sharing, at your own pace
          </SectionHeading>
          <p>
            Story submissions are not open yet. When the collection is ready to
            accept contributions, this page will explain how to take part, how
            consent works and how to request changes or withdrawal.
          </p>
          <p className="mt-4 text-muted-foreground">
            There is no need to share personal or health information to use this
            website.
          </p>
          <Link
            href="/governance-checklist"
            className="mt-5 inline-flex items-center gap-2 py-2 font-medium text-secondary underline underline-offset-4"
          >
            Read the governance checklist{" "}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </ContentContainer>
      </section>
    </div>
  );
}
