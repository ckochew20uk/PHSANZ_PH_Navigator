import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

export function InvolvementInvite({
  title = "Growing with you",
  description = "We’re a small, new initiative of PHSANZ. Your experience can help guide the information, resources and future opportunities we develop.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <aside className="rounded-2xl border border-border bg-accent p-6 sm:p-8">
      <h2 className="font-heading text-2xl font-bold text-primary">{title}</h2>
      <p className="mt-3 max-w-2xl text-foreground">{description}</p>
      <p className="mt-3 text-sm text-muted-foreground">
        Participation opportunities are in development. Surveys and expressions
        of interest are not open yet.
      </p>
      <Link
        href="/get-involved"
        className="mt-4 inline-flex items-center gap-2 py-2 font-medium text-secondary underline underline-offset-4"
      >
        Explore Get Involved{" "}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </Link>
    </aside>
  );
}
