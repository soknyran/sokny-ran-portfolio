import { Mail } from "lucide-react";
import type { ComponentType, SVGProps } from "react";
import { getSocialLinks } from "@/data/social";
import type { SocialKind } from "@/types";
import { cn } from "@/lib/cn";
import { FacebookIcon, GitHubIcon, InstagramIcon, LinkedInIcon, ThreadsIcon } from "./BrandIcons";

export const socialIcons: Record<SocialKind, ComponentType<SVGProps<SVGSVGElement>>> = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  threads: ThreadsIcon,
  email: Mail,
};

interface SocialLinksProps {
  className?: string;
  /** Which links to show, in display order. */
  kinds: SocialKind[];
  size?: "sm" | "md";
}

export function SocialLinks({ className, kinds, size = "md" }: SocialLinksProps) {
  const links = getSocialLinks(kinds);

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {links.map(({ kind, label, href }) => {
        const Icon = socialIcons[kind];
        const external = kind !== "email";
        return (
          <li key={kind}>
            <a
              href={href}
              aria-label={label}
              title={label}
              {...(external && { target: "_blank", rel: "noopener noreferrer" })}
              className={cn(
                "inline-flex items-center justify-center rounded-md border border-border text-muted transition-colors hover:border-border-strong hover:text-fg",
                size === "sm" ? "size-8" : "size-9",
              )}
            >
              <Icon className={size === "sm" ? "size-3.5" : "size-4"} aria-hidden="true" />
            </a>
          </li>
        );
      })}
    </ul>
  );
}
