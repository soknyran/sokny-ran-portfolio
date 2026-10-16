import { cn } from "@/lib/cn";

/** Small pill used in the case-study technology stack lists. */
export function SkillBadge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full bg-fill px-2.5 py-0.5 text-xs font-medium text-fg/80",
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
