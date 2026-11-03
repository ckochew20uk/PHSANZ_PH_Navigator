import { Link, useLocation } from "wouter";
import { Compass, BookOpen, Leaf, Users } from "lucide-react";
import { patientNavigation, isJourneyActive } from "@/data/navigation";
import { cn } from "@/lib/utils";

const tabs = [
  { title: "Start", path: "/start", icon: Compass },
  ...patientNavigation.map((item, i) => ({
    title: item.shortTitle,
    path: item.path,
    icon: [BookOpen, Leaf, Users][i],
  })),
];

export function MobileBottomNav() {
  const [location] = useLocation();
  return (
    <nav
      aria-label="Mobile navigation"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white shadow-[0_-2px_16px_rgba(23,46,91,.06)] lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="flex min-h-16 items-stretch">
        {tabs.map((tab, index) => {
          const Icon = tab.icon;
          const active =
            index === 0
              ? location === "/start" || location === "/"
              : isJourneyActive(location, patientNavigation[index - 1]);
          return (
            <Link
              key={tab.path}
              href={tab.path}
              aria-current={active ? "page" : undefined}
              className={cn(
                "flex min-w-0 flex-1 flex-col items-center justify-center gap-1 px-1 py-2 text-center text-xs font-medium text-muted-foreground hover:bg-accent",
                active && "bg-accent text-primary",
              )}
            >
              <Icon className="h-5 w-5" aria-hidden="true" />
              <span>{tab.title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
