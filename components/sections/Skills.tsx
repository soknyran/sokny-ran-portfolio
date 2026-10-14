import { skillCategories } from "@/data/skills";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Panel } from "@/components/ui/Panel";

export function Skills() {
  return (
    <Section id="specs">
      <SectionHeading
        id="specs-title"
        title="Technical skills"
        description="The tools and domains I work with day to day, grouped by where they sit in the stack."
      />
      <Panel>
        <dl className="divide-y divide-border">
          {skillCategories.map((category) => (
            <div key={category.id} className="grid gap-1 px-5 py-4 sm:grid-cols-[200px_minmax(0,1fr)] sm:gap-6">
              <dt>
                <span className="text-sm font-semibold tracking-tight">{category.title}</span>
                <span className="mt-0.5 block text-xs text-muted">{category.description}</span>
              </dt>
              <dd className="text-sm leading-relaxed">{category.skills.join(", ")}</dd>
            </div>
          ))}
        </dl>
      </Panel>
    </Section>
  );
}
