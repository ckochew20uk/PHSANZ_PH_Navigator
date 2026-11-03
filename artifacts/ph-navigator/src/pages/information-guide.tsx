import { Link, useLocation } from "wouter";
import { Printer } from "lucide-react";
import { informationGuides } from "@/data/informationGuides";
import NotFound from "./not-found";

export default function InformationGuidePage() {
  const [location] = useLocation();
  const guide = informationGuides.find(
    (item) => item.path === location.replace(/\/+$/, ""),
  );
  if (!guide) return <NotFound />;
  return (
    <article className="mx-auto w-full max-w-4xl px-4 py-10 md:py-16">
      <p className="mb-3 text-sm font-medium text-secondary">
        Information guide · Clinical review pending
      </p>
      <h1 className="font-heading text-4xl font-bold leading-tight text-primary md:text-5xl">
        {guide.title}
      </h1>
      <p className="mt-5 text-xl leading-relaxed text-foreground/80">
        {guide.description}
      </p>
      <p className="mt-4 text-sm text-muted-foreground">{guide.scope}</p>
      <button
        type="button"
        onClick={() => window.print()}
        className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-lg border border-primary px-4 py-2 font-semibold text-primary print:hidden"
      >
        <Printer className="h-4 w-4" aria-hidden="true" />
        Print this guide
      </button>
      <div className="mt-10 space-y-10">
        {guide.sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 font-heading text-2xl font-bold text-primary">
              {section.title}
            </h2>
            <div className="space-y-4 text-lg leading-relaxed">
              {section.paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            {section.bullets && (
              <ul className="mt-4 list-disc space-y-3 pl-6 text-lg leading-relaxed">
                {section.bullets.map((text) => (
                  <li key={text}>{text}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
      <nav
        aria-label="Related information"
        className="mt-10 border-t border-border pt-6 print:hidden"
      >
        <h2 className="mb-3 font-heading text-xl font-bold text-primary">
          Your next step
        </h2>
        <ul className="space-y-3">
          {guide.related.map((item) => (
            <li key={item.path}>
              <Link
                href={item.path}
                className="inline-block py-1 text-secondary underline underline-offset-4"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </article>
  );
}
