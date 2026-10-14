import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Rounded surface used for every content block on the homepage. */
export function Panel({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-2xl bg-surface", className)} {...props} />;
}
