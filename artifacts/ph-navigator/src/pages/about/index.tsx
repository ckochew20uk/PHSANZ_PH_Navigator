import { Link } from "wouter";
import {
  ArrowRight,
  HeartHandshake,
  Users,
  ClipboardCheck,
} from "lucide-react";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectContact } from "@/components/governance/ProjectContact";

export default function AboutHub() {
  return (
    <div className="w-full">
      <section className="design-section bg-accent">
        <ContentContainer>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            An initiative of PHSANZ
          </p>
          <SectionHeading as="h1" className="mb-5">
            About PH Navigator
          </SectionHeading>
          <p className="max-w-3xl text-lg">
            PH Navigator is an initiative of the Pulmonary Hypertension Society
            of Australia and New Zealand (PHSANZ), supporting people affected by
            pulmonary hypertension through clear information, practical guidance
            and lived-experience perspectives.
          </p>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer>
          <div className="mb-10 max-w-3xl">
            <SectionHeading className="mb-4">
              Our institutional home
            </SectionHeading>
            <p>
              PH Navigator operates under the governance of the PHSANZ Patient
              Advocacy Subcommittee. The initiative is developing its content,
              review processes and opportunities for patient and carer
              involvement.
            </p>
            <p className="mt-4 text-muted-foreground">
              Patient surveys, focus groups and co-design activities are planned
              as part of the approved programme. Hosting integration and formal
              accreditation will be described when those milestones are
              confirmed.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Our Partners",
                description:
                  "Explore proposed collaborations for lived-experience content and patient resources. Arrangements are not yet confirmed.",
                href: "/about/partnership",
                Icon: HeartHandshake,
              },
              {
                title: "Our Review Panels",
                description:
                  "Meet the leads of the Clinician Advisory Panel and Lived Experience Panel, with further membership being developed.",
                href: "/about/advisory-panel",
                Icon: Users,
              },
              {
                title: "Launch governance",
                description:
                  "See the work in progress on privacy, consent, review responsibilities and launch safeguards.",
                href: "/governance-checklist",
                Icon: ClipboardCheck,
              },
            ].map(({ title, description, href, Icon }) => (
              <Link
                key={href}
                href={href}
                className="flex flex-col rounded-2xl border border-border bg-white p-6 hover:border-secondary"
              >
                <Icon
                  className="mb-5 h-8 w-8 text-secondary"
                  aria-hidden="true"
                />
                <h2 className="font-heading text-2xl font-bold text-primary">
                  {title}
                </h2>
                <p className="my-4 flex-1 text-muted-foreground">
                  {description}
                </p>
                <span className="flex items-center gap-2 font-medium text-secondary">
                  Find out more{" "}
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10">
            <ProjectContact />
          </div>
        </ContentContainer>
      </section>
    </div>
  );
}
