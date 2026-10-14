import { BookOpen, Landmark, RefreshCcw, Settings2, type LucideIcon } from "lucide-react";
import type { Tint } from "@/components/ui/AppIcon";

const icons: Record<string, { icon: LucideIcon; tint: Tint }> = {
  wecms: { icon: Landmark, tint: "blue" },
  "wecms-modernization": { icon: RefreshCcw, tint: "green" },
  wabooks: { icon: BookOpen, tint: "orange" },
  jexadmin: { icon: Settings2, tint: "indigo" },
};

/** Icon and tint for a project, shared by the Work cards and the Experience engagement list. */
export function projectIcon(slug: string) {
  return icons[slug] ?? { icon: Landmark, tint: "teal" as Tint };
}
