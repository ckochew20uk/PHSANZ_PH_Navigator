import { Link } from "wouter";
import { ArrowLeft, Stethoscope, Users } from "lucide-react";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";
import { siteIdentity } from "@/data/siteIdentity";

export default function AdvisoryPanel() {
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
            Our Review Panels
          </SectionHeading>
          <p className="max-w-2xl text-lg">
            Our developing review structure brings clinical knowledge together
            with lived experience, under the governance of the PHSANZ Patient
            Advocacy Subcommittee.
          </p>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer>
          <div className="grid gap-8 lg:grid-cols-2">
            {[
              {
                title: "Clinician Advisory Panel",
                lead: siteIdentity.clinicianLead,
                description:
                  "Led by Dr Christopher Chew, this panel will guide clinical accuracy and relevance. It is designed to include medical and nursing perspectives, with allied health participation planned as the panel develops.",
                scope:
                  "Planned remit: clinical accuracy, relevance and alignment with appropriate evidence and guidance.",
                Icon: Stethoscope,
                colour: "bg-accent",
              },
              {
                title: "Lived Experience Panel",
                lead: siteIdentity.livedExperienceLead,
                description:
                  "Led by Tharuka Kossinna, this panel will help ensure PH Navigator reflects patient and carer priorities and communicates in clear, respectful and practical language.",
                scope:
                  "Planned remit: accessibility of language, practical usefulness and patient and carer perspectives.",
                Icon: Users,
                colour: "bg-[var(--brand-lavender)]",
              },
            ].map(({ title, lead, description, scope, Icon, colour }) => (
              <article
                key={title}
                className="rounded-2xl border border-border bg-white p-6 sm:p-8"
              >
                <span className={`mb-5 inline-flex rounded-xl p-3 ${colour}`}>
                  <Icon className="h-7 w-7 text-primary" aria-hidden="true" />
                </span>
                <SectionHeading className="mb-4">{title}</SectionHeading>
                <p className="text-foreground">{description}</p>
                <div className="my-6 rounded-xl bg-background p-5">
                  <p className="text-sm font-medium text-muted-foreground">
                    Panel lead
                  </p>
                  <h3 className="mt-1 font-heading text-2xl font-bold text-primary">
                    {lead}
                  </h3>
                </div>
                <p className="font-medium text-primary">
                  Further membership being developed
                </p>
                <p className="mt-2 text-muted-foreground">
                  Additional members will be listed after their participation
                  and public details are confirmed.
                </p>
                <p className="mt-5 border-t border-border pt-5 text-sm text-muted-foreground">
                  {scope}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-2xl border border-border bg-accent p-6">
            <SectionHeading className="mb-4">
              How review will work
            </SectionHeading>
            <p className="max-w-3xl">
              The review workflow is being established. Panel membership does
              not mean that every article or resource has already been reviewed
              or approved. Content-specific review details will be added as
              reviews are completed.
            </p>
            <Link
              href="/governance-checklist"
              className="mt-4 inline-block py-2 font-medium text-secondary underline underline-offset-4"
            >
              Read the launch governance checklist
            </Link>
          </div>
        </ContentContainer>
      </section>
    </div>
  );
}
