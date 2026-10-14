import { Building2, CloudCog, Database, LayoutTemplate, Server, Sparkles, type LucideIcon } from "lucide-react";
import { skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
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
    <Section
      id="skills"
      index="05"
      label="Skills"
      title="Technical skills"
      description="The tools and domains I work with day to day, grouped by where they sit in the stack."
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => {
          const Icon = icons[category.id] ?? Server;
          return (
            <li key={category.id}>
              <Card className="h-full p-5">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Icon className="size-4 text-accent" aria-hidden="true" />
                  {category.title}
                </h3>
                <p className="mt-1.5 text-sm text-muted">{category.description}</p>
                <SkillBadgeList skills={category.skills} className="mt-4" />
              </Card>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
