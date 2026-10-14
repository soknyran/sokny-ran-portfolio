import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience-title"
        title="Professional experience"
        description="Enterprise financial software at KOSIGN, built on a foundation of hands-on customer implementation and support."
      />
      <ol className="space-y-3">
        {experience.map((item) => (
          <li key={`${item.company}-${item.start}`}>
            {/* Every platform on the site was delivered at the current employer. */}
            <ExperienceItem item={item} platforms={item.end === "Present" ? projects : []} />
          </li>
        ))}
      </ol>
    </Section>
  );
}
