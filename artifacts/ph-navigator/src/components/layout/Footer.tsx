import { Link, useLocation } from "wouter";
import { Logo } from "@/components/ui/logo";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ContentContainer } from "@/components/content/ContentContainer";
import { footerPatientLinks, footerOrganisationLinks } from "@/data/navigation";

const informationLinks = [
  { title: "Privacy Policy", path: "/privacy" },
  { title: "Terms of Use", path: "/terms" },
  { title: "Accessibility", path: "/accessibility" },
];
export function Footer() {
  const [location] = useLocation();
  if (location === "/start")
    return (
      <footer className="clinic-footer border-t border-border bg-white py-6 pb-[calc(6rem+env(safe-area-inset-bottom))] lg:pb-6">
        <ContentContainer>
          <p className="text-sm font-medium text-primary">
            PH Navigator · An initiative of PHSANZ
          </p>
          <nav
            aria-label="Clinic landing information"
            className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm"
          >
            <Link
              href="/about"
              className="py-1 text-secondary underline underline-offset-4"
            >
              About PH Navigator
            </Link>
            {informationLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="py-1 text-secondary underline underline-offset-4"
              >
                {item.title}
              </Link>
            ))}
          </nav>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Information on this website supports, and does not replace, advice
            from your healthcare team.
          </p>
        </ContentContainer>
      </footer>
    );
  return (
    <footer className="border-t-[6px] border-secondary bg-primary pb-[calc(5rem+env(safe-area-inset-bottom))] text-primary-foreground lg:pb-0">
      <div className="border-b border-white/20 py-10">
        <ContentContainer>
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest">
                Stay connected
              </p>
              <h2 className="mb-4 font-heading text-3xl font-bold">
                Updates from the PH community
              </h2>
              <p className="max-w-lg text-primary-foreground/90">
                Sign up for newsletter updates about PH Navigator and its
                developing resources.
              </p>
            </div>
            <NewsletterSignup variant="footer" />
          </div>
        </ContentContainer>
      </div>
      <div className="py-10">
        <ContentContainer>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Logo size="lg" variant="white" />
              <p className="mt-5 text-sm">An initiative of PHSANZ</p>
              <p className="mt-2 text-sm text-primary-foreground/90">
                Pulmonary Hypertension Society of Australia and New Zealand
              </p>
            </div>
            <nav aria-label="Patient information">
              <h2 className="mb-4 font-heading text-xl font-bold">
                Information and support
              </h2>
              <ul className="space-y-2">
                {footerPatientLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="inline-block py-1 text-sm text-primary-foreground/90 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="About and governance">
              <h2 className="mb-4 font-heading text-xl font-bold">
                About PH Navigator
              </h2>
              <ul className="space-y-2">
                {footerOrganisationLinks.map((item) => (
                  <li key={item.path}>
                    <Link
                      href={item.path}
                      className="inline-block py-1 text-sm text-primary-foreground/90 underline-offset-4 hover:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h2 className="mb-4 font-heading text-xl font-bold">
                Urgent support
              </h2>
              <p className="text-sm">
                Medical emergency: <strong>000</strong>
              </p>
              <p className="mt-3 text-sm">
                Lifeline: <strong>13 11 14</strong>
              </p>
              <p className="mt-3 text-sm">
                Beyond Blue: <strong>1300 22 4636</strong>
              </p>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap justify-between gap-4 border-t border-white/20 pt-6 text-sm">
            <p>
              PH Navigator · An initiative of PHSANZ ·{" "}
              {new Date().getFullYear()}
            </p>
            <nav
              aria-label="Website information"
              className="flex flex-wrap gap-4"
            >
              {informationLinks.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="underline underline-offset-4"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
          <p className="mt-5 max-w-3xl text-sm text-primary-foreground/90">
            The information on PH Navigator is for general education and does
            not substitute for individual medical advice. Discuss treatment and
            care with your PH specialist team.
          </p>
        </ContentContainer>
      </div>
    </footer>
  );
}
