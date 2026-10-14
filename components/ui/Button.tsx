import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "xs" | "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-1.5 rounded-full border font-medium tracking-[-0.01em] whitespace-nowrap transition-colors";

const variants: Record<Variant, string> = {
  primary: "border-transparent bg-btn text-white hover:bg-btn-hover",
  secondary: "border-accent text-accent hover:bg-accent hover:text-surface",
  ghost: "border-transparent text-muted hover:bg-fill hover:text-fg",
};

const sizes: Record<Size, string> = {
  xs: "h-7 px-3 text-xs",
  sm: "h-9 px-4 text-sm",
  md: "h-10 px-5 text-sm",
};

function buttonClasses(variant: Variant = "primary", size: Size = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = ComponentProps<typeof Link> & { variant?: Variant; size?: Size };

/** Internal navigation styled as a button. */
export function ButtonLink({ variant, size, className, ...props }: ButtonLinkProps) {
  return <Link className={buttonClasses(variant, size, className)} {...props} />;
}

type ButtonAnchorProps = ComponentProps<"a"> & { variant?: Variant; size?: Size };

/** External links, mailto and file downloads styled as a button. */
export function ButtonAnchor({ variant, size, className, ...props }: ButtonAnchorProps) {
  return <a className={buttonClasses(variant, size, className)} {...props} />;
}
