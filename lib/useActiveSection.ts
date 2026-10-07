import { useEffect, useState } from "react";

/**
 * Returns the id of the section currently crossing a thin band near the top of
 * the viewport. Pass `enabled: false` on pages without those sections.
 */
export function useActiveSection(ids: readonly string[], enabled: boolean): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    if (!enabled) return;
    const intersecting = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        // Several can overlap the band at a boundary: the later section wins.
        const current = ids.filter((id) => intersecting.has(id)).at(-1);
        if (current) setActive(current);
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );
    for (const id of ids) {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    }
    return () => observer.disconnect();
  }, [ids, enabled]);

  return enabled ? active : null;
}
