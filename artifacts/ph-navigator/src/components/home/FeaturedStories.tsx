import { Link } from "wouter";
import { ArrowRight, Users } from "lucide-react";

export interface FeaturedStory {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  publicationStatus: "draft" | "approved";
  consentVerified: boolean;
}

export function FeaturedStories({
  stories = [],
}: {
  stories?: FeaturedStory[];
}) {
  const published = stories.filter(
    (story) =>
      story.publicationStatus === "approved" &&
      story.consentVerified &&
      story.title.trim() &&
      story.excerpt.trim() &&
      /^\/community-voices(?:\/[a-z0-9-]+)?$/.test(story.href),
  );
  return (
    <section
      className="home-section home-community"
      aria-labelledby="community-title"
    >
      <div className="home-container">
        <p className="home-eyebrow">A place for lived experience</p>
        <h2 id="community-title">Different journeys. A shared community.</h2>
        {published.length ? (
          <div className="home-stories">
            {published.map((story) => (
              <article key={story.id} className="home-story">
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <Link href={story.href} className="home-text-link">
                  Read the full story{" "}
                  <ArrowRight aria-hidden="true" size={20} />
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="home-community-placeholder">
            <Users size={40} aria-hidden="true" />
            <div>
              <h3>Making space for community voices</h3>
              <p>
                Patient and carer stories will be featured here after consent
                and publication approval are confirmed.
              </p>
              <p className="home-placeholder-label">
                Stories awaiting publication approval
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
