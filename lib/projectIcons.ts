import { BookOpen, Landmark, RefreshCcw, Settings2, type LucideIcon } from "lucide-react";
import type { Hue } from "@/components/ui/IconBadge";

const icons: Record<string, { icon: LucideIcon; hue: Hue }> = {
  wecms: { icon: Landmark, hue: "blue" },
  "wecms-modernization": { icon: RefreshCcw, hue: "green" },
  wabooks: { icon: BookOpen, hue: "orange" },
  jexadmin: { icon: Settings2, hue: "indigo" },
};

/** Icon and hue for a project, shared by the Work cards and the Experience list. */
export function projectIcon(slug: string) {
  return icons[slug] ?? { icon: Landmark, hue: "teal" as Hue };
}
