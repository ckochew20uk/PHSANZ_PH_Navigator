import { Link, useLocation } from "wouter";
import { Search } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { useSearch } from "@/contexts/SearchContext";
import { patientNavigation, isJourneyActive } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [location] = useLocation();
  const { openSearch } = useSearch();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto flex h-20 items-center gap-3 px-4">
        <Link
          href="/"
          aria-label="PH Navigator home"
          className="mr-auto shrink-0"
        >
          <Logo size="md" />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {patientNavigation.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={
                isJourneyActive(location, item) ? "page" : undefined
              }
              className={cn(
                "rounded-xl px-3 py-3 text-sm font-medium text-primary transition-colors hover:bg-accent",
                isJourneyActive(location, item) &&
                  "bg-accent underline underline-offset-4",
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <Link
          href="/start"
          className="hidden shrink-0 rounded-xl border border-secondary px-3 py-2 text-sm font-medium text-secondary hover:bg-accent sm:inline-flex"
          aria-current={location === "/start" ? "page" : undefined}
        >
          Start here
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={openSearch}
          aria-label="Search"
          className="shrink-0 text-secondary"
        >
          <Search className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
}
