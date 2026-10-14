"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { THEME_STORAGE_KEY, normalizeTheme, setThemeColorMeta, type Theme } from "@/lib/theme";

const listeners = new Set<() => void>();

function readTheme(): Theme {
  try {
    return normalizeTheme(localStorage.getItem(THEME_STORAGE_KEY));
  } catch {
    // Storage unavailable: fall back to whatever the page is showing.
    return document.documentElement.classList.contains("dark") ? "dark" : "light";
  }
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  setThemeColorMeta(theme);
}

function writeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode): the choice still applies for this visit.
  }
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

const buttonClass =
  "inline-flex size-8 items-center justify-center rounded-full bg-fill text-muted transition-colors hover:bg-fill-hover hover:text-fg";

/** One-click Light/Dark switch. Shows the icon of the theme it switches to. */
export function ThemeToggle() {
  // null during server render and hydration: a same-size placeholder avoids a mismatch.
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);

  // Keeps the theme-color tag in step if storage changed in another tab.
  useEffect(() => {
    if (theme) applyTheme(theme);
  }, [theme]);

  if (theme === null) {
    return <span aria-hidden="true" className={buttonClass} />;
  }

  const next: Theme = theme === "dark" ? "light" : "dark";
  const Icon = theme === "dark" ? Sun : Moon;

  return (
    <button
      type="button"
      aria-label={`Switch to ${next} theme`}
      title={`Switch to ${next} theme`}
      onClick={() => writeTheme(next)}
      className={buttonClass}
    >
      <Icon className="size-4" aria-hidden="true" />
    </button>
  );
}
