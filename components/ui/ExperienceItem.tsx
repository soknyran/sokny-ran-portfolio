import { Briefcase, Calendar, MapPin } from "lucide-react";
import type { Experience } from "@/types";
import { SkillBadgeList } from "./SkillBadge";

export function ExperienceItem({ item, current }: { item: Experience; current: boolean }) {
  return (
    <article className="relative pl-8 sm:pl-10">
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-0 flex size-4 -translate-x-1/2 items-center justify-center rounded-full border border-border-strong bg-bg"
      >
        {current && <span className="size-2 rounded-full bg-accent" />}
      </span>

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <div>
          <h3 className="text-xl font-semibold tracking-tight">{item.position}</h3>
          <p className="mt-1 font-medium text-fg/85">
            {item.company}
            {item.companyFullName && <span className="font-normal text-muted"> · {item.companyFullName}</span>}
          </p>
        </div>
        <p className="flex shrink-0 items-center gap-1.5 font-mono text-sm text-muted">
          <Calendar className="size-3.5" aria-hidden="true" />
          {item.start} – {item.end}
        </p>
      </div>

      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted">
        <li className="flex items-center gap-1.5">
          <MapPin className="size-3.5" aria-hidden="true" />
          {item.location}
        </li>
        <li className="flex items-center gap-1.5">
          <Briefcase className="size-3.5" aria-hidden="true" />
          {item.employment} · {item.workMode}
        </li>
      </ul>

      {item.summary && <p className="mt-4 max-w-3xl leading-relaxed text-fg/90">{item.summary}</p>}

      <div className="mt-6 grid gap-x-8 gap-y-6 md:grid-cols-2">
        {item.responsibilities.map((group) => (
          <div key={group.title}>
            <h4 className="font-mono text-xs font-medium tracking-wider text-subtle uppercase">{group.title}</h4>
            <ul className="mt-3 space-y-2">
              {group.items.map((responsibility) => (
                <li key={responsibility} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                  <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-border-strong" />
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {item.technologies.length > 0 && (
        <div className="mt-6">
          <h4 className="sr-only">Technologies</h4>
          <SkillBadgeList skills={item.technologies} />
        </div>
      )}
    </article>
  );
}
