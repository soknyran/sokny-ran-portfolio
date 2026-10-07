import { cn } from "@/lib/cn";

export function SkillBadge({ children, className }: { children: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md border border-border bg-bg px-2 py-1 text-xs font-medium text-fg/85",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function SkillBadgeList({ skills, className }: { skills: string[]; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)}>
      {skills.map((skill) => (
        <li key={skill}>
          <SkillBadge>{skill}</SkillBadge>
        </li>
      ))}
    </ul>
  );
}
