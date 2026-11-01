import { Link } from "wouter";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PathwayCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  tone?: "mint" | "lavender" | "peach";
  community?: boolean;
}

export function PathwayCard({
  title,
  description,
  href,
  icon: Icon,
  tone = "mint",
  community = false,
}: PathwayCardProps) {
  return (
    <Link href={href} className={`home-card-link home-tone-${tone}`}>
      <Card className="home-pathway">
        <CardHeader>
          <div className="home-card-top">
            <Icon aria-hidden="true" size={28} />
            {community && <span className="home-label">Our community</span>}
          </div>
          <h3 className="home-card-title">{title}</h3>
        </CardHeader>
        <CardContent className="home-pathway-content">
          <p>{description}</p>
          <span className="home-card-action">
            Explore <ArrowRight size={20} aria-hidden="true" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}
