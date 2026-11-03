import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ContentContainer({
  children,
  reading = false,
  className,
}: {
  children: ReactNode;
  reading?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "content-container",
        reading && "content-container-reading",
        className,
      )}
    >
      {children}
    </div>
  );
}
