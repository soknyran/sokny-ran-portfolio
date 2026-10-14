import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

/** Rounded surface card used for every content block on the page. */
export function Tile({ className, ...props }: ComponentProps<"div">) {
  return <div className={cn("rounded-[18px] bg-surface", className)} {...props} />;
}
