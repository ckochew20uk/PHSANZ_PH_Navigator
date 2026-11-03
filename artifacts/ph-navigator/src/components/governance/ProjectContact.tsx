import { siteIdentity } from "@/data/siteIdentity";

export function ProjectContact() {
  return (
    <div className="rounded-2xl border border-border bg-accent p-6">
      <h2 className="mb-3 font-heading text-2xl font-bold text-primary">
        Contact PH Navigator
      </h2>
      {siteIdentity.contact ? (
        <a
          href={siteIdentity.contact.href}
          className="font-medium text-secondary underline underline-offset-4"
        >
          {siteIdentity.contact.label}
        </a>
      ) : (
        <p className="text-foreground">
          The PHSANZ project contact route is being confirmed. Contact details
          for website feedback, professional and privacy enquiries will be
          published here once confirmed.
        </p>
      )}
      <p className="mt-3 text-muted-foreground">
        For advice about your own care, contact your treating healthcare team.
        Patient story submissions are not open.
      </p>
    </div>
  );
}
