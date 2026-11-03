import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HomeHero() {
  return (
    <section className="home-hero home-section" aria-labelledby="home-title">
      <div className="home-container home-hero-grid">
        <div>
          <p className="home-eyebrow">PH Navigator · An initiative of PHSANZ</p>
          <h1 id="home-title">
            Navigating life with pulmonary hypertension <span>— together.</span>
          </h1>
          <p className="home-lead">
            A diagnosis can bring a lot of questions. Find clear information,
            practical guidance and a place to begin — for you and the people who
            care about you.
          </p>
          <div className="home-actions">
            <Button asChild size="lg" className="home-primary">
              <Link href="/recently-diagnosed">
                I'm newly diagnosed <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="home-secondary"
            >
              <Link href="/living-well">
                Living well with PH <ArrowRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
        <figure className="home-photo">
          <img
            src={`${import.meta.env.BASE_URL}images/community-placeholder.svg`}
            alt=""
            width="640"
            height="520"
          />
          <figcaption>
            <strong>Room for our community</strong>
            <span>
              Community photography will appear here once permission is
              confirmed.
            </span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
