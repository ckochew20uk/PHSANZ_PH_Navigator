import { Link } from "wouter";
import {
  Activity,
  ArrowRight,
  BookOpen,
  HeartHandshake,
  HeartPulse,
  MapPin,
  Users,
} from "lucide-react";
import { HomeHero } from "@/components/home/HomeHero";
import { PathwayCard } from "@/components/home/PathwayCard";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import "@/components/home/home.css";

const pathways = [
  {
    title: "Recently diagnosed",
    description: "Understand PH, your diagnostic journey and what to ask next.",
    href: "/recently-diagnosed",
    icon: HeartPulse,
    tone: "peach" as const,
  },
  {
    title: "Living well with PH",
    description: "Everyday guidance on movement, food, travel and wellbeing.",
    href: "/living-well",
    icon: Activity,
    tone: "mint" as const,
  },
  {
    title: "Community Voices",
    description: "Explore the place for lived experience in our PH community.",
    href: "/community-voices",
    icon: Users,
    tone: "lavender" as const,
    community: true,
  },
  {
    title: "Treatments & facts",
    description:
      "Make sense of PH medications, tests and clinical information.",
    href: "/treatments",
    icon: BookOpen,
  },
  {
    title: "For carers",
    description: "Support for caring for someone with PH — and yourself.",
    href: "/caring-for-someone",
    icon: HeartHandshake,
  },
  {
    title: "Find a specialist",
    description:
      "Explore the directory of PH specialist centres across Australia.",
    href: "/find-specialist",
    icon: MapPin,
  },
];

export default function Home() {
  return (
    <div className="home-modern">
      <HomeHero />
      <section className="home-section" aria-labelledby="pathways-title">
        <div className="home-container">
          <p className="home-eyebrow">Start where you are</p>
          <h2 id="pathways-title">How can we help you today?</h2>
          <p className="home-section-intro">
            Whether you're finding your feet or looking for your next step,
            there's a place to begin.
          </p>
          <div className="home-pathways">
            {pathways.map((pathway) => (
              <PathwayCard key={pathway.href} {...pathway} />
            ))}
          </div>
        </div>
      </section>
      <section
        className="home-section home-understanding"
        aria-labelledby="understanding-title"
      >
        <div className="home-container home-understanding-grid">
          <div>
            <p className="home-eyebrow">Understanding PH</p>
            <h2 id="understanding-title">
              Clear information, one step at a time.
            </h2>
            <p>
              New to PH Navigator? Begin with the condition, prepare for
              appointments and find practical support for everyday life.
            </p>
            <Link
              href="/recently-diagnosed/what-is-ph"
              className="home-text-link"
            >
              Learn more about PH <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
          <div className="home-medical-copy">
            <h3>What is pulmonary hypertension?</h3>
            <p>
              Pulmonary hypertension (PH) is high blood pressure in the lungs.
              It is a rare, complex condition that affects the arteries in the
              lungs and the right side of the heart.
            </p>
            <p>
              Unlike regular high blood pressure, you can't measure it with a
              cuff on your arm. Because the right side of the heart has to work
              harder to pump blood through narrowed lung arteries, people with
              PH often experience breathlessness, fatigue, and chest pain.
            </p>
            <p>
              While PH is life-limiting and currently has no cure, treatments
              have advanced significantly. With specialist care, many people
              live meaningful, fulfilling lives for years after diagnosis.
            </p>
          </div>
        </div>
      </section>
      <FeaturedStories />
      <section className="home-section" aria-labelledby="resources-title">
        <div className="home-container">
          <p className="home-eyebrow">Practical support</p>
          <h2 id="resources-title">Small steps for everyday life.</h2>
          <div className="home-resource-grid">
            {[
              {
                title: "Prepare for your appointment",
                description:
                  "Find questions to help you talk with your healthcare team.",
                href: "/recently-diagnosed/questions-for-doctor",
              },
              {
                title: "Explore the resource library",
                description:
                  "Find information and resources to help you navigate PH.",
                href: "/resource-library",
              },
              {
                title: "Support for carers",
                description: "Find guidance and support for your caring role.",
                href: "/caring-for-someone/carer-support",
              },
            ].map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="home-resource"
              >
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <span className="home-card-action">
                  Find out more <ArrowRight size={20} aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section
        className="home-section home-credibility"
        aria-labelledby="credibility-title"
      >
        <div className="home-container">
          <p className="home-eyebrow">About PH Navigator</p>
          <h2 id="credibility-title">
            People at the heart of the information.
          </h2>
          <p>
            PH Navigator is an initiative of PHSANZ, designed to help people affected by pulmonary
            hypertension in Australia and New Zealand find information and
            support. Use this information alongside advice from your healthcare
            team.
          </p>
          <div className="home-credibility-links">
            <Link href="/about" className="home-text-link">
              About the initiative <ArrowRight size={20} aria-hidden="true" />
            </Link>
            <Link href="/about/advisory-panel" className="home-text-link">
              Clinical advisory information{" "}
              <ArrowRight size={20} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
