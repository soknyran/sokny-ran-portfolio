export type Theme = "light" | "dark";

export const THEME_STORAGE_KEY = "theme";

/** Browser-bar colour per theme (matches --bg in app/globals.css). */
export const THEME_COLORS: Record<Theme, string> = { light: "#f4f4f6", dark: "#000000" };

/** Only a stored "dark" means dark; anything else (missing, old "system", junk) is light. */
export function normalizeTheme(value: unknown): Theme {
  return value === "dark" ? "dark" : "light";
}

/**
 * Runs inline in <head> before first paint so the page never flashes the wrong theme.
 * Light is the default for every first visit; the OS colour-scheme setting is ignored.
 * Kept dependency-free and wrapped in try/catch for browsers with storage disabled.
 */
export const themeInitScript = `(function(){try{var d=localStorage.getItem("${THEME_STORAGE_KEY}")==="dark";document.documentElement.classList.toggle("dark",d);var m=document.querySelector('meta[name="theme-color"]');if(m)m.setAttribute("content",d?"${THEME_COLORS.dark}":"${THEME_COLORS.light}")}catch(e){}})();`;
