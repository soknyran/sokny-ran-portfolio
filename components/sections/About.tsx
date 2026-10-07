import { profile } from "@/data/profile";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <Section id="about">
      <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
        <div>
          <SectionHeading id="about-title" eyebrow="About" title="Enterprise software, end to end." />
          <dl className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-[auto_auto_1fr] lg:grid-cols-1">
            {profile.quickFacts.map((fact) => (
              <div key={fact.label} className="border-l-2 border-accent pl-4">
                <dt className="text-sm text-muted">{fact.label}</dt>
                <dd className="mt-1 font-semibold tracking-tight">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <Reveal>
          <div className="space-y-5 text-base leading-relaxed text-muted text-pretty sm:text-lg">
            {profile.about.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {profile.aboutHighlights.map((highlight) => (
              <li key={highlight.title} className="rounded-xl border border-border bg-surface p-5">
                <h3 className="font-semibold tracking-tight">{highlight.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{highlight.description}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
