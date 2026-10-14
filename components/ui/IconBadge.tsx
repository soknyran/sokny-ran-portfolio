import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

export type Hue = "blue" | "green" | "violet" | "orange" | "teal" | "indigo";

const SIZES = {
  sm: { box: "size-[26px] rounded-md", icon: "size-3.5" },
  md: { box: "size-9 rounded-[10px]", icon: "size-[18px]" },
} as const;

/** Decorative icon on a solid coloured square. */
export function IconBadge({
  icon: Icon,
  hue,
  size = "md",
  className,
}: {
  icon: LucideIcon;
  hue: Hue;
  size?: keyof typeof SIZES;
  className?: string;
}) {
  return (
    <span aria-hidden="true" data-hue={hue} className={cn("icon-badge", SIZES[size].box, className)}>
      <Icon className={SIZES[size].icon} strokeWidth={2.2} />
    </span>
  );
}
