import { Link } from "wouter";
import { BookOpen, Leaf, Users } from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { PathwayCard } from "@/components/home/PathwayCard";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { patientNavigation } from "@/data/navigation";
import "@/components/home/home.css";

export default function Home() {
  const descriptions = [
    "Understand PH, diagnosis, treatments and tests — at your own pace.",
    "Find everyday guidance, care information and support for you and those close to you.",
    "Explore the plans for patient and carer perspectives, and existing support guidance.",
  ];
  return (
    <div className="home-modern">
      <HomeHero />
      <section className="home-section" aria-labelledby="pathways-title">
        <div className="home-container">
          <p className="home-eyebrow">Explore PH Navigator</p>
          <h2 id="pathways-title">
            Information and support, one step at a time.
          </h2>
          <p className="home-section-intro">
            Find your way through three places to begin.
          </p>
          <div className="home-pathways">
            {patientNavigation.map((item, i) => (
              <PathwayCard
                key={item.path}
                title={item.title}
                description={descriptions[i]}
                href={item.path}
                icon={[BookOpen, Leaf, Users][i]}
                tone={i === 2 ? "lavender" : "mint"}
                community={i === 2}
              />
            ))}
          </div>
        </div>
      </section>
      <FeaturedStories />
      <section
        className="home-section home-credibility"
        aria-labelledby="credibility-title"
      >
        <div className="home-container">
          <p className="home-eyebrow">An initiative of PHSANZ</p>
          <h2 id="credibility-title">For you and the people close to you.</h2>
          <p>
            PH Navigator supports people affected by pulmonary hypertension in
            Australia and New Zealand with information and practical guidance.
            Use this information alongside advice from your healthcare team.
          </p>
          <Link href="/about" className="home-text-link">
            About PH Navigator
          </Link>
        </div>
      </section>
    </div>
  );
}
