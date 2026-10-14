import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface SectionHeadingProps {
  id: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

/** Section title block. `id` is used for the heading so sections can be labelled by it. */
export function SectionHeading({ id, title, description, className }: SectionHeadingProps) {
  return (
    <header className={cn("mb-5 max-w-2xl", className)}>
      <h2 id={id} className="text-[clamp(1.5rem,1vw+1.15rem,2rem)] leading-tight font-semibold tracking-tight text-balance">
        {title}
      </h2>
      {description && <p className="mt-1.5 text-sm leading-relaxed text-muted text-pretty">{description}</p>}
    </header>
  );
}
