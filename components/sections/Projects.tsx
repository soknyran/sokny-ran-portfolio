import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  const featured = projects.filter((project) => project.featured);
  const others = projects.filter((project) => !project.featured);

  return (
    <Section id="projects">
      <SectionHeading
        id="projects-title"
        eyebrow="Projects"
        title="Featured projects"
        description="Enterprise platforms I build and maintain. Each one links to a short engineering case study."
      />
      <div className="mt-14 space-y-6">
        {featured.map((project) => (
          <Reveal key={project.slug}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
        <div className="grid gap-6 md:grid-cols-2">
          {others.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06} className="flex min-w-0">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
