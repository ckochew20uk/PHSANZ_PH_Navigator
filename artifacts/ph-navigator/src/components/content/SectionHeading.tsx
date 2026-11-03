import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  as: Heading = "h2",
  children,
  className,
  id,
}: {
  as?: "h1" | "h2" | "h3";
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <Heading
      id={id}
      className={cn(
        "section-heading font-heading font-bold text-primary",
        className,
      )}
    >
      {children}
    </Heading>
  );
}
