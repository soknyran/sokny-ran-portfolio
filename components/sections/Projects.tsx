import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Projects() {
  return (
    <Section id="work">
      <SectionHeading
        id="work-title"
        title="Enterprise platforms, built and maintained."
        description="Platforms I lead, build, and maintain."
      />
      <ul className="grid gap-3 md:grid-cols-2">
        {projects.map((project) => (
          <li key={project.slug} className={cn("min-w-0", project.featured && "md:col-span-2")}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
