import Image from "next/image";
import Link from "next/link";
import { Check, ChevronRight } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { projectIcon } from "@/lib/projectIcons";
import { AppIcon } from "./AppIcon";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { GitHubIcon } from "./BrandIcons";
import { SkillBadgeList } from "./SkillBadge";
import { StatusBadge } from "./StatusBadge";

/** Up to five outcome bullets: results first, topped up with responsibilities. */
function highlights(project: Project) {
  return [...project.achievements, ...project.responsibilities].slice(0, project.featured ? 4 : 3);
}

export function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;
  const href = `/projects/${project.slug}`;
  const { icon, tint } = projectIcon(project.slug);

  return (
    <article
      id={project.slug}
      aria-labelledby={`${project.slug}-title`}
      className={cn(
        "flex h-full scroll-mt-16 flex-col gap-6 rounded-[18px] bg-surface p-5 transition-shadow duration-200 target:ring-2 target:ring-accent hover:shadow-card sm:p-6",
        featured && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.8fr)] lg:gap-8",
      )}
    >
      <div className="flex min-w-0 flex-col">
        <header className="flex items-start gap-3">
          <AppIcon icon={icon} tint={tint} />
          <div className="min-w-0 flex-1">
            <h3 id={`${project.slug}-title`} className="text-[17px] leading-tight font-semibold tracking-tight">
              {project.name}
            </h3>
            <p className="mt-0.5 text-[13px] text-muted">
              {project.role} · {project.type}
            </p>
          </div>
        </header>
        <StatusBadge status={project.status} className="mt-3 self-start" />

        <p className="mt-3 text-sm text-muted">{project.summary}</p>

        <ul className="mt-3 grid gap-1.5">
          {highlights(project).map((item) => (
            <li key={item} className="flex gap-2 text-sm">
              <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <SkillBadgeList
          label="Key technologies"
          skills={project.technologies.slice(0, featured ? 9 : 6)}
          className="mt-4"
        />

        <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-5">
          <Link href={href} className="inline-flex items-center text-sm font-medium text-accent hover:underline">
            Read case study<span className="sr-only">: {project.name}</span>
            <ChevronRight className="size-4" aria-hidden="true" />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
            >
              <GitHubIcon className="size-4" />
              Source
            </a>
          )}
        </div>
      </div>

      {featured &&
        (project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 420px, 100vw"
            className="h-auto w-full rounded-xl"
          />
        ) : (
          <ArchitectureDiagram layers={project.architecture.layers} variant="compact" className="hidden self-start lg:block" />
        ))}
    </article>
  );
}
