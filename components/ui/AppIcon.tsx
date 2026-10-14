import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type Tint = "blue" | "green" | "violet" | "orange" | "teal" | "indigo";

const SIZES = {
  sm: { box: "size-[26px] rounded-[7px]", icon: "size-3.5" },
  md: { box: "size-[34px] rounded-[9px]", icon: "size-[18px]" },
} as const;

/** Decorative tinted icon tile. */
export function AppIcon({
  icon: Icon,
  tint,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  tint: Tint;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span aria-hidden="true" className={cn("app-icon", `tint-${tint}`, SIZES[size].box, className)}>
      <Icon className={SIZES[size].icon} strokeWidth={2.2} />
    </span>
  );
}
