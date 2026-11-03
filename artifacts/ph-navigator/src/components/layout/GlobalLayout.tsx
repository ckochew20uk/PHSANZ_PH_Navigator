import { MotionConfig } from "framer-motion";
import React, { Suspense } from "react";
import { CrisisBanner } from "./CrisisBanner";
import { UtilityHeader } from "./UtilityHeader";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { SearchModal } from "@/components/search/SearchModal";
import { SearchProvider, useSearch } from "@/contexts/SearchContext";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen, closeSearch } = useSearch();
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <CrisisBanner />
      <UtilityHeader />
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 w-full flex flex-col pb-16 xl:pb-0"
      >
        <Suspense
          fallback={
            <div className="flex-1 flex items-center justify-center min-h-[50vh]">
              <div className="animate-pulse text-primary/60 text-xl font-heading">
                Loading...
              </div>
            </div>
          }
        >
          {children}
        </Suspense>
      </main>
      <Footer />
      <MobileBottomNav />
      <SearchModal open={isOpen} onClose={closeSearch} />
    </div>
  );
}

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <MotionConfig reducedMotion="user">
      <SearchProvider>
        <LayoutInner>{children}</LayoutInner>
      </SearchProvider>
    </MotionConfig>
  );
}
