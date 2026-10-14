import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Bordered content panel. */
export function Card({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-lg border border-border bg-surface", className)} {...props} />;
}
