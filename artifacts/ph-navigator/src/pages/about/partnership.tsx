import { Link } from "wouter";
import { ArrowLeft, HeartHandshake, BookOpen } from "lucide-react";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectContact } from "@/components/governance/ProjectContact";

export default function OurPartners() {
  return (
    <div className="w-full">
      <section className="design-section bg-accent">
        <ContentContainer>
          <Link
            href="/about"
            className="mb-6 inline-flex items-center gap-2 py-2 text-secondary underline underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to About PH Navigator
          </Link>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            An initiative of PHSANZ
          </p>
          <SectionHeading as="h1" className="mb-5">
            Our Partners
          </SectionHeading>
          <p className="max-w-2xl text-lg">
            PH Navigator is launching as an initiative of PHSANZ. Future
            collaborations will help strengthen lived-experience content and
            practical resources. Partnerships will be listed here as
            arrangements are confirmed.
          </p>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer>
          <SectionHeading className="mb-4">
            Future collaborations
          </SectionHeading>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            This section is a work in progress. The organisations below are
            proposed collaborators, not confirmed partners in PH Navigator.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "PHA Australia",
                fullName: "Pulmonary Hypertension Association Australia",
                focus: "Lived-experience collaboration",
                description:
                  "A proposed future collaboration to support patient and carer perspectives, community engagement and co-design.",
                Icon: HeartHandshake,
                colour: "bg-[var(--brand-lavender)]",
              },
              {
                name: "Lung Foundation Australia",
                fullName: "Lung Foundation Australia",
                focus: "Resource collaboration",
                description:
                  "A proposed future collaboration to develop accessible patient information and practical resources.",
                Icon: BookOpen,
                colour: "bg-accent",
              },
            ].map(({ name, fullName, focus, description, Icon, colour }) => (
              <article
                key={name}
                className="rounded-2xl border border-border bg-white p-6 sm:p-8"
              >
                <span className={`mb-5 inline-flex rounded-xl p-3 ${colour}`}>
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </span>
                <h3 className="font-heading text-2xl font-bold text-primary">
                  {name}
                </h3>
                {fullName !== name && (
                  <p className="mt-2 text-sm text-muted-foreground">
                    {fullName}
                  </p>
                )}
                <p className="mt-4 font-medium text-primary">{focus}</p>
                <p className="mt-3 text-muted-foreground">{description}</p>
                <p className="mt-5 rounded-xl bg-muted px-4 py-3 text-sm font-medium text-primary">
                  Proposed collaboration — not yet confirmed
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-2xl text-muted-foreground">
            No partnership agreement or organisational endorsement is implied by
            these plans. Partner roles and approved acknowledgements will be
            added when confirmed.
          </p>
          <div className="mt-10">
            <ProjectContact />
          </div>
        </ContentContainer>
      </section>
    </div>
  );
}
