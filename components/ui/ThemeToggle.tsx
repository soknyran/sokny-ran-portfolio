"use client";

import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { Check, Monitor, Moon, Sun, type LucideIcon } from "lucide-react";
import { THEME_STORAGE_KEY, isTheme, type Theme } from "@/lib/theme";
import { cn } from "@/lib/cn";

const OPTIONS: { value: Theme; label: string; Icon: LucideIcon }[] = [
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
  { value: "system", label: "System", Icon: Monitor },
];

const listeners = new Set<() => void>();

function readTheme(): Theme {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY);
    return isTheme(stored) ? stored : "system";
  } catch {
    return "system";
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

function writeTheme(theme: Theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode): the choice still applies for this visit.
  }
  applyTheme(theme);
  listeners.forEach((listener) => listener());
}

function applyTheme(theme: Theme) {
  const dark =
    theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);
  document.documentElement.classList.toggle("dark", dark);
}

/** Compact theme switcher: one icon button that opens a Light / Dark / System menu. */
export function ThemeToggle() {
  // null on the server: the icon renders once the stored value is known.
  const theme = useSyncExternalStore<Theme | null>(subscribe, readTheme, () => null);
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    if (theme !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => applyTheme("system");
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [theme]);

  useEffect(() => {
    if (!open) return;
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown, true);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown, true);
    };
  }, [open]);

  const current = OPTIONS.find((option) => option.value === theme);

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        aria-label={current ? `Theme: ${current.label}. Change theme` : "Change theme"}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((value) => !value)}
        className={cn(
          "inline-flex size-8 items-center justify-center rounded-full bg-fill text-muted transition-colors hover:bg-fill-hover hover:text-fg",
          open && "bg-fill-hover text-fg",
        )}
      >
        {current ? <current.Icon className="size-4" aria-hidden="true" /> : <span className="size-4" />}
      </button>

      {open && (
        <div
          id={panelId}
          role="group"
          aria-label="Color theme"
          className="absolute top-full right-0 z-10 mt-2 w-36 rounded-xl border border-border bg-surface p-1 shadow-card"
        >
          {OPTIONS.map(({ value, label, Icon }) => (
            <button
              key={value}
              type="button"
              aria-pressed={theme === value}
              onClick={() => {
                writeTheme(value);
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-sm transition-colors hover:bg-fill",
                theme === value ? "text-fg" : "text-muted",
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              <span className="flex-1 text-left">{label}</span>
              {theme === value && <Check className="size-3.5 text-accent" aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
