"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { getSocialLinks } from "@/data/social";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { SocialLinks, socialIcons } from "@/components/ui/SocialLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const sectionIds = navItems.map((item) => item.id);
/** Matches Tailwind's `xl` breakpoint, where the desktop navigation takes over. */
const DESKTOP_QUERY = "(min-width: 1280px)";

function subscribeToScroll(callback: () => void) {
  window.addEventListener("scroll", callback, { passive: true });
  return () => window.removeEventListener("scroll", callback);
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const active = useActiveSection(sectionIds, pathname === "/");
  const scrolled = useSyncExternalStore(
    subscribeToScroll,
    () => window.scrollY > 8,
    () => false,
  );

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    // Click outside the button and the popup closes it; clicks inside are left alone.
    const onPointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const onBreakpoint = () => desktop.matches && setOpen(false);
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [open]);

  const close = () => setOpen(false);
  const solid = scrolled || open;

  return (
    <header className="sticky top-0 z-50 isolate">
      {/* Background layer: kept separate so the blur is not applied to the popup menu. */}
      <div
        aria-hidden="true"
        className={cn(
          "absolute inset-0 -z-10 border-b transition-[background-color,border-color] duration-200",
          solid
            ? "border-border bg-bg/85 backdrop-blur-md supports-[backdrop-filter]:bg-bg/70"
            : "border-transparent bg-transparent",
        )}
      />

      <a
        href="#main"
        className="sr-only rounded-md bg-fg px-3 py-2 text-sm text-bg focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Skip to content
      </a>

      <Container className="flex h-16 items-center justify-between gap-6">
        <Link href="/#home" onClick={close} className="flex shrink-0 items-center gap-2.5 rounded-md">
          <ProfileAvatar size="sm" eager />
          <span className="text-sm font-semibold tracking-tight">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="hidden xl:block">
          <ul className="flex items-center">
            {navItems.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    aria-current={current ? "true" : undefined}
                    className={cn(
                      "relative block rounded-full px-2.5 py-1.5 text-sm whitespace-nowrap transition-colors hover:text-fg",
                      current ? "text-fg" : "text-muted",
                    )}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute -bottom-1 left-1/2 size-1 -translate-x-1/2 rounded-full bg-accent transition-opacity",
                        current ? "opacity-100" : "opacity-0",
                      )}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-1">
          <div className="hidden items-center gap-1 xl:flex">
            <SocialLinks kinds={["linkedin", "github"]} size="sm" />
            <span aria-hidden="true" className="mx-1 h-5 w-px bg-border" />
          </div>
          <ThemeToggle />
          <div className="ml-2 hidden xl:block">
            <DownloadCVButton variant="primary" size="sm" />
          </div>
          <div
            ref={menuRef}
            className="relative xl:hidden"
            onBlur={(event) => {
              // Close when keyboard focus moves to an element outside the button and popup.
              // (A null relatedTarget is a click on non-focusable space; pointerdown handles clicks.)
              const next = event.relatedTarget as Node | null;
              if (open && next && !event.currentTarget.contains(next)) close();
            }}
          >
            <button
              ref={toggleRef}
              type="button"
              className={cn(
                "inline-flex size-9 items-center justify-center rounded-full text-fg transition-colors hover:bg-surface-2",
                open && "bg-surface-2",
              )}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
            </button>

            <AnimatePresence>
              {open && (
                <m.div
                  key="mobile-menu"
                  id={menuId}
                  initial={{ opacity: 0, y: -6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -6, scale: 0.98 }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="absolute top-[calc(100%+12px)] -right-1 max-h-[calc(100dvh-5rem)] w-[min(300px,calc(100vw-24px))] origin-top-right overflow-y-auto rounded-xl border border-border bg-bg p-1.5 shadow-[0_12px_32px_-8px_rgb(0_0_0/0.18),0_2px_6px_-2px_rgb(0_0_0/0.06)] sm:right-0 dark:shadow-[0_12px_32px_-8px_rgb(0_0_0/0.6)]"
                >
                  <div className="flex items-center gap-2.5 px-2.5 pt-2 pb-2.5">
                    <ProfileAvatar size="sm" />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold tracking-tight">{profile.name}</p>
                      <p className="text-xs leading-snug text-muted">{profile.title.split(" | ").join(" · ")}</p>
                    </div>
                  </div>

                  <nav aria-label="Mobile" className="border-t border-border pt-1">
                    <ul>
                      {navItems.map((item) => {
                        const current = active === item.id;
                        return (
                          <li key={item.id}>
                            <Link
                              href={`/#${item.id}`}
                              onClick={close}
                              aria-current={current ? "true" : undefined}
                              className={cn(
                                "flex items-center justify-between rounded-lg px-2.5 py-2.5 text-sm transition-colors hover:bg-surface-2 hover:text-fg",
                                current ? "bg-surface-2 font-medium text-fg" : "text-muted",
                              )}
                            >
                              {item.label}
                              {current && <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>

                  <ul aria-label="Social links" className="mt-1 grid grid-cols-3 gap-1 border-t border-border pt-1">
                    {getSocialLinks(["linkedin", "github", "email"]).map(({ kind, label, href }) => {
                      const Icon = socialIcons[kind];
                      const external = kind !== "email";
                      return (
                        <li key={kind}>
                          <a
                            href={href}
                            onClick={close}
                            {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                            className="flex items-center justify-center gap-1.5 rounded-lg px-1 py-2 text-[13px] text-muted transition-colors hover:bg-surface-2 hover:text-fg"
                          >
                            <Icon className="size-4 shrink-0" aria-hidden="true" />
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-1 border-t border-border px-1 pt-2 pb-1">
                    <DownloadCVButton variant="primary" className="w-full" />
                  </div>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </header>
  );
}
