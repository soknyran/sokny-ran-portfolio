import type { SocialKind, SocialLink } from "@/types";
import { profile } from "./profile";

/** Every social/contact link. Surfaces pick a subset with `getSocialLinks`. */
export const socialLinks: SocialLink[] = [
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sokny-ran/",
    display: "in/sokny-ran",
  },
  {
    kind: "github",
    label: "GitHub",
    href: "https://github.com/soknyran",
    display: "@soknyran",
  },
  {
    kind: "facebook",
    label: "Facebook",
    href: "https://www.facebook.com/soknyran.dev/",
    display: "soknyran.dev",
  },
  {
    kind: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/sokny_ran/",
    display: "@sokny_ran",
  },
  {
    kind: "threads",
    label: "Threads",
    href: "https://www.threads.com/@sokny_ran",
    display: "@sokny_ran",
  },
  {
    kind: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    display: profile.email,
  },
];

/** Links for the given kinds, in the order the kinds are listed. */
export function getSocialLinks(kinds: SocialKind[]): SocialLink[] {
  return kinds.flatMap((kind) => socialLinks.filter((link) => link.kind === kind));
}
