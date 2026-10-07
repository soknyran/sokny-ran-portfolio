import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education-title" eyebrow="Education" title="Education" />
      <ul className="mt-12 grid gap-4 md:grid-cols-2">
        {education.map((item, index) => (
          <li key={item.institution} className="flex">
            <Reveal delay={index * 0.06} className="flex w-full">
              <article className="flex w-full gap-4 rounded-2xl border border-border bg-surface p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-bg">
                  <GraduationCap className="size-5 text-accent" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold tracking-tight">{item.institution}</h3>
                  <p className="mt-1 text-sm text-fg/85">{item.credential}</p>
                  <p className="mt-2 font-mono text-xs text-muted">
                    {item.start} – {item.end}
                  </p>
                  {item.description && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                  )}
                </div>
              </article>
            </Reveal>
          </li>
        ))}
      </ul>
    </Section>
  );
}
