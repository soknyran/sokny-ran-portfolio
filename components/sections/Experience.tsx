import { experience } from "@/data/experience";
import { ExperienceItem } from "@/components/ui/ExperienceItem";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience-title"
        eyebrow="Experience"
        title="Professional experience"
        description="Enterprise financial software at KOSIGN, built on a foundation of hands-on customer implementation and support."
      />
      <ol className="mt-14 space-y-16 border-l border-border">
        {experience.map((item) => (
          <li key={`${item.company}-${item.start}`}>
            <Reveal>
              <ExperienceItem item={item} current={item.end === "Present"} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
