import { ArticleReview } from "@/components/information/ArticleReview";
import { JourneyTrail } from "@/components/journeys/JourneyTrail";
import { MotionConfig } from "framer-motion";
import { useLocation } from "wouter";
import { searchIndex } from "@/data/searchIndex";
import React, { Suspense, useEffect } from "react";
import { CrisisBanner } from "./CrisisBanner";
import { UtilityHeader } from "./UtilityHeader";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { MobileBottomNav } from "./MobileBottomNav";
import { SearchModal } from "@/components/search/SearchModal";
import { SearchProvider, useSearch } from "@/contexts/SearchContext";

function LayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen, closeSearch } = useSearch();
  const [location] = useLocation();
  useEffect(() => {
    const page = searchIndex.find(
      (item) => item.path === (location.replace(/\/+$/, "") || "/"),
    );
    document.title = `${page?.title ?? "Page not found"} | PH Navigator`;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute(
        "content",
        page?.description ?? "This page could not be found.",
      );
  }, [location]);
  return (
    <div className="site-layout min-h-[100dvh] flex flex-col bg-background text-foreground font-sans">
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <CrisisBanner />
      <UtilityHeader />
      <Navbar />
      <main
        id="main-content"
        tabIndex={-1}
        className="flex-1 w-full flex flex-col"
      >
        <JourneyTrail />
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
        <ArticleReview />
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
