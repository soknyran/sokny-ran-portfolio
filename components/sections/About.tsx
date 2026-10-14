import { Bot, RefreshCcw, Workflow, type LucideIcon } from "lucide-react";
import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

const cardIcons: LucideIcon[] = [Workflow, RefreshCcw, Bot];

export function About() {
  return (
    <Section id="about" index="01" label="About" title="Enterprise software, end to end." description={profile.aboutLead}>
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-14">
        <div className="space-y-4 text-muted text-pretty">
          {profile.about.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>

        <aside aria-labelledby="facts-title">
          <h3 id="facts-title" className="font-mono text-xs tracking-wide text-muted uppercase">
            At a glance
          </h3>
          <dl className="mt-4 space-y-4">
            {profile.facts.map((fact) => (
              <div key={fact.label} className="border-l-2 border-accent pl-4">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-0.5 font-semibold">{fact.value}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-8 font-mono text-xs tracking-wide text-muted uppercase">I work across</h3>
          <p className="mt-2 text-sm">{profile.focusAreas.join(" · ")}</p>
        </aside>
      </div>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {profile.aboutHighlights.map((highlight, index) => {
          const Icon = cardIcons[index % cardIcons.length];
          return (
            <li key={highlight.title}>
              <Card className="h-full p-5">
                <Icon className="size-5 text-accent" aria-hidden="true" />
                <h3 className="mt-3 font-semibold">{highlight.title}</h3>
                <p className="mt-1 text-sm text-muted">{highlight.description}</p>
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
