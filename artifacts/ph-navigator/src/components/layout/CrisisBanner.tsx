import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CrisisBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("ph-navigator-crisis-dismissed");
    if (!dismissed) {
      setIsVisible(true);
    }
  }, []);

  const dismiss = () => {
    setIsVisible(false);
    localStorage.setItem("ph-navigator-crisis-dismissed", "true");
  };

  if (!isVisible) return null;

  return (
    <div className="crisis-banner bg-destructive text-destructive-foreground py-3 px-4 relative z-50">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between text-sm sm:text-base font-medium">
        <div className="flex-1 pr-8">
          <p>
            <strong>Medical emergency:</strong> Australia{" "}
            <a className="whitespace-nowrap underline" href="tel:000">
              000
            </a>{" "}
            · New Zealand{" "}
            <a className="whitespace-nowrap underline" href="tel:111">
              111
            </a>
            .
            <span className="block mt-1">
              Emotional crisis support in Australia: Lifeline{" "}
              <a className="whitespace-nowrap underline" href="tel:+61131114">
                13 11 14
              </a>
              .
            </span>
          </p>
        </div>
        <Button
          variant="ghost"
          size="icon"
          className="no-default-hover-elevate no-default-active-elevate absolute right-2 top-2 sm:relative sm:top-0 sm:right-0 text-white hover:bg-white/20 hover:text-white"
          onClick={dismiss}
          aria-label="Dismiss banner"
        >
          <X className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
