import { Check } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { Card } from "./Card";
import { SkillBadgeList } from "./SkillBadge";
import { StatusBadge } from "./StatusBadge";

/** Results first, topped up with responsibilities, so every card shows the same number of points. */
function highlights(project: Project) {
  return [...project.achievements, ...project.responsibilities].slice(0, project.featured ? 4 : 3);
}

/** A project row: details on the left, what it is and what I did on the right. */
export function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;

  return (
    <Card className="grid overflow-hidden md:grid-cols-[230px_minmax(0,1fr)]">
      <div className="border-b border-border bg-surface-2 p-5 md:border-r md:border-b-0">
        <h3 className="text-lg font-semibold">{project.name}</h3>
        <p className="mt-1 text-sm text-muted">{project.subtitle}</p>
        <dl className="mt-4 space-y-3 text-sm">
          <div>
            <dt className="font-mono text-xs text-muted">Status</dt>
            <dd className="mt-1">
              <StatusBadge status={project.status} />
            </dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Role</dt>
            <dd className="mt-0.5 font-medium">{project.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-xs text-muted">Type</dt>
            <dd className="mt-0.5">{project.type}</dd>
          </div>
        </dl>
      </div>

      <div className={cn("grid gap-6 p-5", featured && "xl:grid-cols-[minmax(0,1fr)_300px]")}>
        <div className="min-w-0">
          <p className="text-muted text-pretty">{project.summary}</p>
          <ul className="mt-4 space-y-2">
            {highlights(project).map((item) => (
              <li key={item} className="flex gap-2.5 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <SkillBadgeList label="Key technologies" skills={project.technologies} className="mt-5" />
        </div>
        {featured && (
          <ArchitectureDiagram layers={project.architecture.layers} variant="compact" className="hidden self-start xl:block" />
        )}
      </div>
    </Card>
  );
}
