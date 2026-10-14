import { GraduationCap, Languages } from "lucide-react";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function Education() {
  return (
    <Section id="education" index="06" label="Education" title="Education and languages">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_240px]">
        {education.map((item) => (
          <Card key={item.institution} className="p-5">
            <GraduationCap className="size-5 text-accent" aria-hidden="true" />
            <h3 className="mt-3 font-semibold">{item.institution}</h3>
            <p className="mt-0.5 text-sm">{item.credential}</p>
            <p className="mt-1 font-mono text-xs text-muted">
              {item.start} – {item.end}
            </p>
            {item.description && <p className="mt-3 text-sm text-muted">{item.description}</p>}
          </Card>
        ))}
        <Card className="p-5">
          <Languages className="size-5 text-accent" aria-hidden="true" />
          <h3 className="mt-3 font-semibold">Languages</h3>
          <ul className="mt-2 space-y-1 text-sm">
            {profile.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
