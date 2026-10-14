import { GraduationCap, Languages } from "lucide-react";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { IconBadge } from "@/components/ui/IconBadge";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Panel } from "@/components/ui/Panel";

export function Education() {
  return (
    <Section id="education">
      <SectionHeading id="education-title" title="Education and languages" />
      <div className="grid gap-5 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
        <div>
          <h3 className="mb-1.5 ml-1 text-xs font-medium tracking-wide text-muted uppercase">Education</h3>
          <Panel>
            <ul className="divide-y divide-border">
              {education.map((item) => (
                <li key={item.institution} className="flex gap-3 p-4">
                  <IconBadge icon={GraduationCap} hue="indigo" size="sm" />
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-x-4 sm:flex-row sm:items-baseline sm:justify-between">
                      <p className="text-sm font-semibold tracking-tight">{item.credential}</p>
                      <p className="shrink-0 text-xs text-muted tabular-nums">
                        {item.start} – {item.end}
                      </p>
                    </div>
                    <p className="text-[13px] text-muted">{item.institution}</p>
                    {item.description && <p className="mt-2 text-[13px] leading-snug text-muted">{item.description}</p>}
                  </div>
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        <div>
          <h3 className="mb-1.5 ml-1 text-xs font-medium tracking-wide text-muted uppercase">Languages</h3>
          <Panel>
            <ul className="divide-y divide-border">
              {profile.languages.map((language) => (
                <li key={language} className="flex items-center gap-3 px-4 py-3">
                  <IconBadge icon={Languages} hue="teal" size="sm" />
                  <span className="text-sm font-medium">{language}</span>
                </li>
              ))}
            </ul>
          </Panel>
        </div>
      </div>
    </Section>
  );
}
