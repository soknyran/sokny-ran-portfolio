import Link from "next/link";
import type { ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";
type Size = "sm" | "md";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium whitespace-nowrap transition-colors";

const variants: Record<Variant, string> = {
  primary: "bg-fg text-bg hover:bg-fg/85",
  secondary: "border border-border-strong bg-bg text-fg hover:bg-surface-2",
  ghost: "text-muted hover:bg-surface-2 hover:text-fg",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-3.5 text-sm",
  md: "h-11 px-5 text-sm",
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
