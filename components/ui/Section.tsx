import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
}

/** Homepage section: anchor target, labelled by its heading (`${id}-title`). */
export function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={cn("scroll-mt-16 pt-16 sm:pt-20", className)}>
      <Container>{children}</Container>
    </section>
  );
}
