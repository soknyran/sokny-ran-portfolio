import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { Section } from "@/components/ui/Section";

export function Experience() {
  return (
    <Section
      id="experience"
      index="02"
      label="Experience"
      title="Professional experience"
      description="Enterprise financial software at KOSIGN, built on a foundation of hands-on customer implementation and support."
    >
      <ol className="space-y-14 border-l border-border">
        {experience.map((item) => {
          const current = item.end === "Present";
          return (
            <li key={`${item.company}-${item.start}`}>
              {/* Every platform on the site was delivered at the current employer. */}
              <ExperienceItem item={item} current={current} projects={current ? projects : []} />
            </li>
          );
        })}
      </ol>
    </Section>
  );
}
