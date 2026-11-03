import type { ReactNode } from "react";
import { Link } from "wouter";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";
import { ProjectContact } from "@/components/governance/ProjectContact";

function PolicyPage({
  title,
  children,
  draft = true,
}: {
  title: string;
  children: ReactNode;
  draft?: boolean;
}) {
  return (
    <div className="w-full">
      <section className="design-section bg-accent">
        <ContentContainer reading>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            An initiative of PHSANZ
          </p>
          <SectionHeading as="h1" className="mb-5">
            {title}
          </SectionHeading>
          <p className="max-w-2xl text-lg">
            {draft
              ? "Draft information — awaiting PHSANZ approval before public launch."
              : "Our current accessibility approach and work still to be completed."}
          </p>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer reading>
          <div className="space-y-8">
            {children}
            <ProjectContact />
            <Link
              href="/governance-checklist"
              className="inline-block py-2 text-secondary underline underline-offset-4"
            >
              View the launch governance checklist
            </Link>
          </div>
        </ContentContainer>
      </section>
    </div>
  );
}

export function PrivacyInformation() {
  return (
    <PolicyPage title="Privacy information — draft">
      <section>
        <SectionHeading className="mb-3">
          Institutional responsibility
        </SectionHeading>
        <p>
          PH Navigator is an initiative of PHSANZ under its Patient Advocacy
          Subcommittee. The final privacy policy must confirm the responsible
          legal entity, privacy contact and applicable data-handling
          arrangements.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Newsletter information</SectionHeading>
        <p>
          The optional newsletter form asks for an email address, optional first
          and last names, and interest preferences. The newsletter integration
          sends these details to Mailchimp for subscriber-list management and
          delivery when the service is configured. The final policy must confirm
          access, retention, overseas processing and unsubscribe arrangements.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">
          Local preferences and third-party services
        </SectionHeading>
        <p>
          The website uses browser local storage for recent searches and
          dismissal of the urgent-support banner. These can be cleared through
          your browser settings. Maps and external services may involve
          third-party requests; the final policy must document the services used
          and their data handling.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Get Involved</SectionHeading>
        <p>
          Get Involved currently provides information about planned surveys,
          focus groups and contribution opportunities. It does not collect
          feedback, expressions of interest or donations. Any future collection
          needs a defined receiving team, privacy arrangements and consent
          information before it opens. Newsletter subscription remains a
          separate choice.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Patient stories</SectionHeading>
        <p>
          Patient story submissions are not open. Do not send personal or health
          information for a story until a confirmed submission and consent
          process is published.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Before launch</SectionHeading>
        <p>
          This draft is not a substitute for an approved privacy policy. PHSANZ
          review is needed to confirm data responsibilities, retention periods,
          privacy enquiries and complaint handling.
        </p>
      </section>
    </PolicyPage>
  );
}

export function TermsOfUse() {
  return (
    <PolicyPage title="Terms of use — draft">
      <section>
        <SectionHeading className="mb-3">Using this information</SectionHeading>
        <p>
          PH Navigator, an initiative of PHSANZ, provides general education and
          navigation support. It does not provide individual medical advice,
          diagnosis or treatment. Discuss decisions about your care with your
          treating healthcare team.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">
          Developing content and external services
        </SectionHeading>
        <p>
          Some sections and resources are in development and are labelled
          accordingly. Confirm directory details and service availability
          directly with the relevant provider. References or links to external
          organisations do not establish a partnership or endorsement.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">
          Content ownership and permissions
        </SectionHeading>
        <p>
          Institutional responsibility does not establish ownership of every
          contribution or third-party asset. Copyright attribution and reuse
          permissions will be confirmed in the approved terms. This draft grants
          no new licence to third-party materials.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Before launch</SectionHeading>
        <p>
          The final terms, responsible entity, rights notices and contact
          arrangements require PHSANZ approval. These draft notes explain the
          current boundaries of the website and are not final legal terms.
        </p>
      </section>
    </PolicyPage>
  );
}

export function AccessibilityStatement() {
  return (
    <PolicyPage title="Accessibility" draft={false}>
      <section>
        <SectionHeading className="mb-3">Our aim</SectionHeading>
        <p>
          PH Navigator aims to meet WCAG 2.2 Level AA. This is a development
          target, not a claim of certified conformance.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Using the website</SectionHeading>
        <p>
          The website includes keyboard navigation, a skip-to-content link,
          visible focus styles, responsive layouts and reduced-motion support.
          You can zoom using your browser. Headings and reading text use Nunito
          and DM Sans with system-font fallbacks.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Known limitations</SectionHeading>
        <p>
          Some specialist-map pins overlap. Use the searchable centre list and
          its labelled controls as an alternative. Third-party maps and embeds
          may have their own limitations. Full manual assistive-technology,
          zoom/reflow and touch-target testing remains in progress.
        </p>
      </section>
      <section>
        <SectionHeading className="mb-3">Feedback</SectionHeading>
        <p>
          An approved accessibility contact route is being confirmed. The final
          statement and feedback process will be reviewed before launch.
        </p>
      </section>
    </PolicyPage>
  );
}
