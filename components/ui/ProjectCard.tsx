import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/types";
import { cn } from "@/lib/cn";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { GitHubIcon } from "./BrandIcons";
import { SkillBadgeList } from "./SkillBadge";
import { StatusBadge } from "./StatusBadge";

export function ProjectCard({ project }: { project: Project }) {
  const { featured } = project;
  const href = `/projects/${project.slug}`;

  return (
    <article
      className={cn(
        "group relative flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-bg transition-[border-color,box-shadow] duration-200 hover:border-border-strong hover:shadow-[0_8px_30px_-12px_rgb(0_0_0/0.15)] has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-accent",
        featured && "lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)]",
      )}
    >
      <div className={cn("flex flex-1 flex-col p-6 sm:p-8", featured && "lg:order-1")}>
        <div className="flex flex-wrap items-center gap-2">
          <p className="font-mono text-xs font-medium tracking-wider text-accent uppercase">{project.type}</p>
          <StatusBadge status={project.status} />
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight">
          {/* Stretched link: the whole card is clickable, but only the title is announced. */}
          <Link href={href} className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none">
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 font-medium text-fg/80">{project.subtitle}</p>
        <p className="mt-4 leading-relaxed text-muted">{project.summary}</p>
        <p className="mt-4 text-sm">
          <span className="text-subtle">Role · </span>
          <span className="font-medium">{project.role}</span>
        </p>

        {featured && (
          <ul className="mt-5 space-y-2">
            {project.achievements.slice(0, 3).map((achievement) => (
              <li key={achievement} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                {achievement}
              </li>
            ))}
          </ul>
        )}

        <SkillBadgeList skills={project.technologies.slice(0, featured ? 8 : 5)} className="mt-6" />

        <div className="mt-auto flex items-center gap-4 pt-6">
          <span className="inline-flex items-center gap-1 text-sm font-medium text-fg group-hover:text-accent">
            Read case study
            <ArrowUpRight
              className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </span>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-1.5 text-sm text-muted hover:text-fg"
            >
              <GitHubIcon className="size-4" />
              Source
            </a>
          )}
        </div>
      </div>

      <div className={cn("border-t border-border bg-surface p-4 sm:p-6", featured && "lg:order-2 lg:border-t-0 lg:border-l")}>
        {project.image ? (
          <Image
            src={project.image.src}
            alt={project.image.alt}
            width={project.image.width}
            height={project.image.height}
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="h-auto w-full rounded-xl border border-border"
          />
        ) : (
          <ArchitectureDiagram layers={project.architecture.layers} variant="compact" className="h-full" />
        )}
      </div>
    </article>
  );
}
