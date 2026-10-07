import type { ArchitectureLayer } from "@/types";
import { cn } from "@/lib/cn";

interface ArchitectureDiagramProps {
  layers: ArchitectureLayer[];
  /** Compact: decorative card preview. Full: labelled diagram for case studies. */
  variant?: "compact" | "full";
  className?: string;
}

/** Layered architecture diagram drawn from project data. */
export function ArchitectureDiagram({ layers, variant = "full", className }: ArchitectureDiagramProps) {
  const compact = variant === "compact";

  return (
    <div
      className={cn("bg-grid rounded-xl border border-border bg-surface", compact ? "p-4" : "p-4 sm:p-6", className)}
      {...(compact && { "aria-hidden": true })}
    >
      <ol className={cn("flex flex-col", compact ? "gap-2" : "gap-3")}>
        {layers.map((layer, index) => (
          <li key={layer.name} className="relative min-w-0">
            {index > 0 && (
              <span
                aria-hidden="true"
                className={cn(
                  "absolute left-1/2 w-px -translate-x-1/2 bg-border-strong",
                  compact ? "-top-2 h-2" : "-top-3 h-3",
                )}
              />
            )}
            <div
              className={cn(
                "rounded-lg border border-border bg-bg",
                compact ? "flex items-center gap-3 px-3 py-2" : "grid gap-3 p-3 sm:grid-cols-[140px_1fr] sm:items-center",
                index === 0 && "border-accent/40",
              )}
            >
              <p
                className={cn(
                  "shrink-0 font-mono font-medium tracking-wider uppercase",
                  compact ? "w-20 text-[10px] text-subtle" : "text-xs text-accent",
                )}
              >
                {layer.name}
              </p>
              <ul className={cn("flex min-w-0 gap-1.5", compact ? "overflow-hidden" : "flex-wrap")}>
                {(compact ? layer.items.slice(0, 2) : layer.items).map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "rounded-md bg-surface-2 text-fg/85",
                      compact ? "truncate px-2 py-0.5 text-[11px]" : "px-2.5 py-1 text-sm",
                    )}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
