import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  /** Two-digit index shown in the section label, e.g. "02". */
  index: string;
  label: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Homepage section with a numbered mono label, a hairline rule and a heading. */
export function Section({ id, index, label, title, description, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-16 py-16 sm:py-20", className)}>
      <Container>
        <p className="flex items-center gap-3 font-mono text-xs text-muted">
          <span className="text-accent">{index}</span>
          <span className="tracking-wide uppercase">{label}</span>
          <span aria-hidden="true" className="h-px flex-1 bg-border" />
        </p>
        <h2 id={`${id}-title`} className="mt-4 max-w-3xl text-2xl font-semibold tracking-tight text-balance sm:text-3xl">
          {title}
        </h2>
        {description && <p className="mt-2 max-w-3xl text-muted text-pretty">{description}</p>}
        <div className="mt-8">{children}</div>
      </Container>
    </section>
  );
}
