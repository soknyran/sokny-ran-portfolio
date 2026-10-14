import type { ProjectStatus } from "@/types";
import { cn } from "@/lib/cn";

const dotColor: Record<ProjectStatus, string> = {
  "Production · Active Maintenance": "bg-emerald-500",
  "UAT · Active Development": "bg-amber-500",
  "Production · Previous Responsibility": "bg-subtle",
};

export function StatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1.5 font-mono text-xs text-muted", className)}>
      <span aria-hidden="true" className={cn("size-2 shrink-0 rounded-full", dotColor[status])} />
      {status}
    </span>
  );
}
