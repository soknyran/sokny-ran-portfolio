import { cn } from "@/lib/cn";

/** Small square-cornered tag used for technologies. */
export function SkillBadge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded border border-border bg-surface-2 px-1.5 py-0.5 font-mono text-[11.5px] leading-tight text-fg/85",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SkillBadgeList({ skills, className, label }: { skills: string[]; className?: string; label?: string }) {
  return (
    <ul aria-label={label} className={cn("flex flex-wrap gap-1.5", className)}>
      {skills.map((skill) => (
        <li key={skill}>
          <SkillBadge>{skill}</SkillBadge>
        </li>
      ))}
    </ul>
  );
}
