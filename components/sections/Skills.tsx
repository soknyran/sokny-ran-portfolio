import { Building2, CloudCog, Database, LayoutTemplate, Server, Sparkles, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadgeList } from "@/components/ui/SkillBadge";

const icons: Record<string, LucideIcon> = {
  backend: Server,
  frontend: LayoutTemplate,
  database: Database,
  devops: CloudCog,
  enterprise: Building2,
  ai: Sparkles,
};

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills-title"
        eyebrow="Skills"
        title="Technical skills"
        description="The tools and domains I work with day to day, grouped by where they sit in the stack."
      />
      <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, index) => {
          const Icon = icons[category.id] ?? Server;
          return (
            <li key={category.id} className="flex">
              <Reveal delay={(index % 3) * 0.05} className="flex w-full">
                <div className="flex w-full flex-col rounded-2xl border border-border bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-lg border border-border bg-bg">
                      <Icon className="size-4 text-accent" aria-hidden="true" />
                    </span>
                    <h3 className="font-semibold tracking-tight">{category.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted">{category.description}</p>
                  <SkillBadgeList skills={category.skills} className="mt-5" />
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
