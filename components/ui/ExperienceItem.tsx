import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Experience, Project } from "@/types";
import { projectIcon } from "@/lib/projectIcons";
import { AppIcon } from "./AppIcon";
import { SkillBadgeList } from "./SkillBadge";
import { Tile } from "./Tile";

export function ExperienceItem({ item, engagements = [] }: { item: Experience; engagements?: Project[] }) {
  return (
    <Tile className="p-5 sm:p-6">
      <header className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-[17px] leading-tight font-semibold tracking-tight">{item.position}</h3>
          <p className="mt-0.5 text-[13px] text-muted">
            {item.company} · {item.location} · {item.employment} · {item.workMode}
          </p>
        </div>
        <p className="shrink-0 text-xs text-muted tabular-nums sm:mt-0.5">
          {item.start} – {item.end}
        </p>
      </header>

      {item.summary && <p className="mt-3 text-sm text-muted">{item.summary}</p>}

      <div className="mt-4 grid gap-x-8 gap-y-4 md:grid-cols-2">
        {item.responsibilities.map((group) => (
          <div key={group.title}>
            <h4 className="text-xs font-medium tracking-wide text-muted uppercase">{group.title}</h4>
            <ul className="mt-2 space-y-1.5">
              {group.items.map((responsibility) => (
                <li key={responsibility} className="flex gap-2.5 text-sm">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-subtle" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {engagements.length > 0 && (
        <>
          <h4 className="mt-6 mb-1.5 text-xs font-medium tracking-wide text-muted uppercase">Engagements</h4>
          <ul className="divide-y divide-border overflow-hidden rounded-xl bg-surface-2">
            {engagements.map((project) => {
              const { icon, tint } = projectIcon(project.slug);
              return (
                <li key={project.slug}>
                  <Link
                    href={`/#${project.slug}`}
                    className="flex items-center gap-3 px-3.5 py-2.5 transition-colors hover:bg-fill focus-visible:-outline-offset-2"
                  >
                    <AppIcon icon={icon} tint={tint} size="sm" />
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{project.name}</span>
                      <span className="block truncate text-xs text-muted">{project.role}</span>
                    </span>
                    <span className="hidden text-xs text-muted sm:block">{project.status}</span>
                    <ChevronRight className="size-4 shrink-0 text-subtle" aria-hidden="true" />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}

      {item.technologies.length > 0 && (
        <SkillBadgeList label={`Technologies at ${item.company}`} skills={item.technologies} className="mt-5" />
      )}
    </Tile>
  );
}
