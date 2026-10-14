import { Bot, RefreshCcw, Workflow, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { AppIcon, type Tint } from "@/components/ui/AppIcon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tile } from "@/components/ui/Tile";

const cardIcons: { icon: LucideIcon; tint: Tint }[] = [
  { icon: Workflow, tint: "blue" },
  { icon: RefreshCcw, tint: "green" },
  { icon: Bot, tint: "violet" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeading id="about-title" title="Enterprise software, end to end." description={profile.aboutLead} />
      <div className="gap-x-7 text-muted text-pretty md:columns-2">
        {profile.about.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="mb-3 break-inside-avoid">
            {paragraph}
          </p>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 md:grid-cols-3">
        {profile.aboutHighlights.map((highlight, index) => {
          const { icon, tint } = cardIcons[index % cardIcons.length];
          return (
            <li key={highlight.title}>
              <Tile className="h-full p-5">
                <AppIcon icon={icon} tint={tint} />
                <h3 className="mt-3 text-[15px] font-semibold tracking-tight">{highlight.title}</h3>
                <p className="mt-1 text-sm text-muted">{highlight.description}</p>
              </Tile>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
