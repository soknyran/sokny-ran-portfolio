import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Headline text painted with the accent colour sweep; plain text in forced-colours mode. */
export function Sweep({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "bg-linear-to-r from-sweep-1 via-sweep-2 to-sweep-3 bg-clip-text text-transparent forced-colors:bg-none forced-colors:text-[CanvasText]",
        className,
      )}
    >
      {children}
    </span>
  );
}
