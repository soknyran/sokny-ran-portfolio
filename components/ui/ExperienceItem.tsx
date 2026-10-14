import type { Experience, Project } from "@/types";
import { SkillBadgeList } from "./SkillBadge";
import { StatusBadge } from "./StatusBadge";

export function ExperienceItem({
  item,
  current,
  projects = [],
}: {
  item: Experience;
  current: boolean;
  projects?: Project[];
}) {
  return (
    <article className="relative pl-7 sm:pl-9">
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className="absolute top-2 left-0 flex size-3.5 -translate-x-1/2 items-center justify-center rounded-full border-2 border-border-strong bg-bg"
      >
        {current && <span className="size-1.5 rounded-full bg-accent" />}
      </span>

      <header className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-xl font-semibold">{item.position}</h3>
          <p className="mt-0.5 font-medium text-fg/85">{item.company}</p>
        </div>
        <p className="shrink-0 font-mono text-sm text-muted">
          {item.start} – {item.end}
        </p>
      </header>
      <p className="mt-1 text-sm text-muted">
        {item.location} · {item.employment} · {item.workMode}
      </p>

      {item.summary && <p className="mt-4 max-w-3xl">{item.summary}</p>}

      <div className="mt-6 grid gap-x-10 gap-y-6 md:grid-cols-2">
        {item.responsibilities.map((group) => (
          <div key={group.title}>
            <h4 className="font-mono text-xs tracking-wide text-muted uppercase">{group.title}</h4>
            <ul className="mt-2.5 space-y-2">
              {group.items.map((responsibility) => (
                <li key={responsibility} className="flex gap-2.5 text-sm">
                  <span aria-hidden="true" className="mt-2 h-px w-2.5 shrink-0 bg-accent" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {projects.length > 0 && (
        <div className="mt-6">
          <h4 className="font-mono text-xs tracking-wide text-muted uppercase">Platforms</h4>
          <ul className="mt-2.5 grid gap-2 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.slug} className="rounded-md border border-border bg-surface px-3.5 py-2.5">
                <p className="text-sm font-semibold">{project.name}</p>
                <p className="text-xs text-muted">{project.role}</p>
                <StatusBadge status={project.status} className="mt-1.5" />
              </li>
            ))}
          </ul>
        </div>
      )}

      {item.technologies.length > 0 && (
        <SkillBadgeList label={`Technologies at ${item.company}`} skills={item.technologies} className="mt-6" />
      )}
    </article>
  );
}
