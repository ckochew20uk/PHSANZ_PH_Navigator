import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { StoriesPlaceholder } from "@/components/community/StoriesPlaceholder";

export function FeaturedStories() {
  return (
    <section
      className="home-section home-community"
      aria-labelledby="community-title"
    >
      <div className="home-container">
        <p className="home-eyebrow">A place for lived experience</p>
        <h2 id="community-title">Different journeys. A shared community.</h2>
        <div className="mt-8">
          <StoriesPlaceholder />
        </div>
        <Link href="/community-voices" className="home-text-link mt-4">
          Explore Community Voices <ArrowRight size={20} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
