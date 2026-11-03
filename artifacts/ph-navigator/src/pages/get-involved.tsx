import { Link } from "wouter";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquareText,
  Users,
  HeartHandshake,
} from "lucide-react";
import { ContentContainer } from "@/components/content/ContentContainer";
import { SectionHeading } from "@/components/content/SectionHeading";
import { involvementPages, opportunities } from "@/data/getInvolved";

type OpportunityKey = "feedback" | "focusGroups" | "contribute";

export default function GetInvolved() {
  return (
    <div className="w-full">
      <section className="design-section bg-[var(--brand-lavender)]">
        <ContentContainer>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            An initiative of PHSANZ
          </p>
          <SectionHeading as="h1" className="mb-4">
            Get Involved
          </SectionHeading>
          <h2 className="mb-4 font-heading text-3xl font-bold text-primary">
            Growing with you
          </h2>
          <div className="max-w-3xl space-y-4 text-lg">
            <p>
              PH Navigator is a small, new initiative of PHSANZ. We want it to
              grow in response to what matters to people living with pulmonary
              hypertension and those who support them.
            </p>
            <p>
              Your experience can help guide the information we prioritise, the
              resources we develop and the opportunities we explore next.
            </p>
            <p>
              Choose a way to contribute that suits you. As the project
              develops, we want to explain what we’re learning and how it
              influences our direction. We may not be able to act on every
              suggestion, but we want to be clear about what we can change and
              what needs more work.
            </p>
          </div>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer>
          <SectionHeading className="mb-4">
            Find a way that suits you
          </SectionHeading>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            These opportunities are being developed. The pages below explain
            what is planned; they do not collect responses or registrations.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {opportunities.map((item, i) => {
              const Icon = [MessageSquareText, Users, HeartHandshake][i];
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex flex-col rounded-2xl border border-border bg-white p-6 hover:border-secondary"
                >
                  <Icon
                    className="mb-4 h-8 w-8 text-secondary"
                    aria-hidden="true"
                  />
                  <span className="mb-4 self-start rounded-full bg-accent px-3 py-1 text-sm font-medium text-primary">
                    In development
                  </span>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    {item.title}
                  </h3>
                  <p className="my-4 flex-1 text-muted-foreground">
                    {item.summary}
                  </p>
                  <span className="flex items-center gap-2 font-medium text-secondary">
                    Learn about the plans{" "}
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </ContentContainer>
      </section>
      <section className="design-section bg-white">
        <ContentContainer reading>
          <SectionHeading className="mb-4">
            How your input will help
          </SectionHeading>
          <p>Once participation opens, the planned process is to:</p>
          <ol className="mt-5 list-decimal space-y-4 pl-6">
            <li>
              Hear from people through the relevant website survey or
              expression-of-interest route.
            </li>
            <li>Review submissions and identify shared priorities.</li>
            <li>
              Use those priorities to guide development and future co-design.
            </li>
            <li>
              Share meaningful decisions and completed improvements on the
              website.
            </li>
          </ol>
          <p className="mt-5 text-muted-foreground">
            The receiving team, privacy arrangements and review process must be
            confirmed before collection opens. We are not promising individual
            replies or response times at this stage.
          </p>
          <p className="mt-4 text-muted-foreground">
            There are no findings or completed feedback-led changes to report
            yet. We will only publish real updates.
          </p>
        </ContentContainer>
      </section>
      <section className="design-section bg-accent">
        <ContentContainer reading>
          <SectionHeading className="mb-4">
            Keep in touch, on your terms
          </SectionHeading>
          <p>
            Taking part will always be optional. Reading this website, giving
            feedback, expressing interest in an activity and subscribing to
            updates are separate choices.
          </p>
          <p className="mt-4">
            The newsletter signup below is optional. It does not register you
            for focus groups, volunteering or other activities.
          </p>
          <p className="mt-4 text-muted-foreground">
            Future official Facebook and Instagram accounts will publish
            information and project updates, directing visitors back to this
            website. They are not planned as discussion groups or routes for
            medical advice or participation submissions.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Official account links will appear once confirmed. No social account
            is linked or embedded here yet.
          </p>
        </ContentContainer>
      </section>
    </div>
  );
}

function OpportunityPage({ kind }: { kind: OpportunityKey }) {
  const page = involvementPages[kind];
  return (
    <div className="w-full">
      <section className="design-section bg-accent">
        <ContentContainer>
          <Link
            href="/get-involved"
            className="mb-5 inline-flex items-center gap-2 py-2 font-medium text-secondary underline underline-offset-4"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Get Involved
          </Link>
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-primary">
            Growing with you · An initiative of PHSANZ
          </p>
          <SectionHeading as="h1" className="mb-5">
            {page.title}
          </SectionHeading>
          <p className="inline-block rounded-full bg-white px-4 py-2 text-sm font-medium text-primary">
            In development — not open yet
          </p>
        </ContentContainer>
      </section>
      <section className="design-section">
        <ContentContainer reading>
          <div className="space-y-8">
            {kind === "feedback" && (
              <>
                <section>
                  <SectionHeading className="mb-4">
                    Help make this resource useful
                  </SectionHeading>
                  <p>
                    We plan to offer a short website-feedback survey about
                    useful information, finding your way around and topics that
                    are missing or unclear.
                  </p>
                  <p className="mt-4">
                    The survey is not available yet. Before it opens, this page
                    will explain whether responses are anonymous, what
                    information is collected, who reviews it and how it will be
                    used.
                  </p>
                </section>
                <section>
                  <SectionHeading className="mb-4">
                    Feedback, not individual medical advice
                  </SectionHeading>
                  <p>
                    The planned survey is about improving the website. It will
                    not be a route for urgent messages or personal medical
                    advice. Please do not send health histories or identifying
                    medical details.
                  </p>
                </section>
              </>
            )}
            {kind === "focusGroups" && (
              <>
                <section>
                  <SectionHeading className="mb-4">
                    Help shape what comes next
                  </SectionHeading>
                  <p>
                    Future focus groups and co-design activities could bring
                    patients and carers together to discuss priorities, review
                    ideas and help guide the direction of PH Navigator.
                  </p>
                  <p className="mt-4">
                    Expressions of interest are not open. No session dates,
                    places or participation arrangements are confirmed on this
                    page.
                  </p>
                </section>
                <section>
                  <SectionHeading className="mb-4">
                    What to expect before registering
                  </SectionHeading>
                  <p>
                    Before registration opens, we will explain the activity,
                    what taking part involves, how contact details will be
                    handled and what support is available. Any remuneration or
                    reimbursement arrangements will be described only when
                    confirmed.
                  </p>
                  <p className="mt-4">
                    An expression of interest would not guarantee selection, a
                    session place or payment. Participation would be optional,
                    with no need to share a public personal story.
                  </p>
                </section>
              </>
            )}
            {kind === "contribute" && (
              <>
                <section>
                  <SectionHeading className="mb-4">
                    Different ways to contribute
                  </SectionHeading>
                  <p>Possible future opportunities include:</p>
                  <ul className="mt-4 list-disc space-y-3 pl-6">
                    <li>
                      Reviewing patient information for clarity and practical
                      usefulness.
                    </li>
                    <li>
                      Contributing lived experience through an approved consent
                      process.
                    </li>
                    <li>Helping identify accessibility needs.</li>
                    <li>
                      Volunteering to help with a future peer-support
                      initiative.
                    </li>
                    <li>Helping with future fundraising activities.</li>
                  </ul>
                  <p className="mt-4">
                    These are possibilities, not active programmes or open
                    volunteer roles. No interest registrations, story uploads or
                    donations are collected here.
                  </p>
                </section>
                <section>
                  <SectionHeading className="mb-4">
                    Looking for support yourself?
                  </SectionHeading>
                  <p>
                    Offering to help provide peer support is different from
                    seeking support for yourself. If you are looking for support
                    now, explore the existing guidance linked from{" "}
                    <Link
                      href="/community-voices"
                      className="text-secondary underline underline-offset-4"
                    >
                      Community Voices
                    </Link>{" "}
                    or speak with your healthcare team.
                  </p>
                  <p className="mt-4">
                    Future fundraising interest would not itself be a donation
                    or a commitment to raise money.
                  </p>
                </section>
              </>
            )}
            <section className="rounded-2xl border border-border bg-white p-6">
              <SectionHeading className="mb-4">
                Before this opportunity opens
              </SectionHeading>
              <p>
                The receiving team, information handling and participation
                process need to be confirmed first. There is no form on this
                page, and newsletter signup does not register interest in this
                activity.
              </p>
              <div className="mt-4 flex flex-wrap gap-4">
                <Link
                  href="/privacy"
                  className="py-2 text-secondary underline underline-offset-4"
                >
                  Draft privacy information
                </Link>
                <Link
                  href="/governance-checklist"
                  className="py-2 text-secondary underline underline-offset-4"
                >
                  Launch governance checklist
                </Link>
              </div>
            </section>
          </div>
        </ContentContainer>
      </section>
    </div>
  );
}
export function FeedbackOpportunity() {
  return <OpportunityPage kind="feedback" />;
}
export function FocusGroupOpportunity() {
  return <OpportunityPage kind="focusGroups" />;
}
export function ContributionOpportunity() {
  return <OpportunityPage kind="contribute" />;
}
