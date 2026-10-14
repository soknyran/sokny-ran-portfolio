"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";
import { getSocialLinks } from "@/data/social";
import { navItems } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";
import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { DownloadResumeButton } from "@/components/ui/DownloadResumeButton";
import { socialIcons } from "@/components/ui/SocialLinks";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const sectionIds = navItems.map((item) => item.id);
/** Matches Tailwind's `md` breakpoint, where the inline navigation takes over. */
const DESKTOP_QUERY = "(min-width: 768px)";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const active = useActiveSection(sectionIds, pathname === "/");

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

  return (
    <header className="sticky top-0 z-50 isolate">
      {/* Background layer: kept separate so the blur is not applied to the popup menu. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 border-b border-border bg-bg/80 backdrop-blur-xl backdrop-saturate-150"
      />

      <a
        href="#main"
        className="sr-only rounded-full bg-btn px-3.5 py-2 text-sm text-white focus:not-sr-only focus:absolute focus:top-2 focus:left-4 focus:z-10"
      >
        Skip to content
      </a>

      <Container className="flex h-12 items-center gap-5">
        <Link href="/" onClick={close} className="flex min-w-0 items-center gap-2" aria-label={`${profile.name}, home`}>
          <span
            aria-hidden="true"
            className="grid size-6 shrink-0 place-items-center rounded-md bg-fg text-[10px] font-semibold text-bg"
          >
            {profile.initials}
          </span>
          <span className="truncate text-sm font-semibold tracking-tight">{profile.name}</span>
        </Link>

        <nav aria-label="Primary" className="ml-auto hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const current = active === item.id;
              return (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    aria-current={current ? "true" : undefined}
                    className={cn(
                      "text-[13px] transition-opacity hover:opacity-100",
                      current ? "font-medium text-fg opacity-100" : "text-fg opacity-75",
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 md:ml-0">
          <ThemeToggle />
          <DownloadResumeButton variant="primary" size="xs" label="Resume" />
          <div
            ref={menuRef}
            className="relative md:hidden"
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
                "inline-flex size-8 items-center justify-center rounded-full bg-fill text-fg transition-colors hover:bg-fill-hover",
                open && "bg-fill-hover",
              )}
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
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
                  className="absolute top-[calc(100%+10px)] -right-1 max-h-[calc(100dvh-4.5rem)] w-[min(280px,calc(100vw-24px))] origin-top-right overflow-y-auto rounded-2xl border border-border bg-surface p-1.5 shadow-card"
                >
                  <nav aria-label="Mobile">
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
                                "flex items-center justify-between rounded-xl px-3 py-2.5 text-sm transition-colors hover:bg-fill",
                                current ? "bg-fill font-medium text-fg" : "text-fg/80",
                              )}
                            >
                              {item.label}
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
                            className="flex items-center justify-center gap-1.5 rounded-xl px-1 py-2 text-[13px] text-muted transition-colors hover:bg-fill hover:text-fg"
                          >
                            <Icon className="size-4 shrink-0" aria-hidden="true" />
                            {label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>

                  <div className="mt-1 border-t border-border px-1 pt-2 pb-1">
                    <DownloadResumeButton variant="primary" size="sm" className="w-full" />
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
