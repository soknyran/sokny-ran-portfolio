import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      label="Projects"
      title="Featured projects"
      description="Enterprise platforms I build and maintain, described at a public level only."
    >
      <ul className="space-y-4">
        {projects.map((project) => (
          <li key={project.slug} id={project.slug} className="scroll-mt-20">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
