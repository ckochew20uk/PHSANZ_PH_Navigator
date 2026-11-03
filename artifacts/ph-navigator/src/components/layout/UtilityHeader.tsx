import { Link } from "wouter";

export function UtilityHeader() {
  return (
    <div className="border-b border-border bg-muted px-4 py-1.5 text-xs font-medium text-muted-foreground">
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
        <span>An initiative of PHSANZ</span>
        <Link
          href="/for-healthcare-professionals"
          className="inline-flex min-h-8 items-center rounded-full bg-secondary px-3 py-1 text-xs font-bold text-white transition-colors hover:bg-secondary/90"
        >
          For Healthcare Professionals
        </Link>
      </div>
    </div>
  );
}
