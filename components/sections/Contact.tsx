import { Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { getSocialLinks } from "@/data/social";
import { ButtonAnchor } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { Section } from "@/components/ui/Section";
import { socialIcons } from "@/components/ui/SocialLinks";

export function Contact() {
  return (
    <Section id="contact" index="07" label="Contact" title="Let's connect" description="I'm open to conversations about:">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <div>
          <ul className="flex flex-wrap gap-2">
            {profile.contactTopics.map((topic) => (
              <li key={topic} className="rounded-md border border-border bg-surface px-2.5 py-1 text-sm">
                {topic}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonAnchor href={`mailto:${profile.email}`} variant="primary">
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </ButtonAnchor>
            <DownloadCVButton variant="secondary" />
          </div>
        </div>

        <Card>
          <ul className="divide-y divide-border">
            {getSocialLinks(["linkedin", "github", "email", "facebook", "instagram", "threads"]).map(
              ({ kind, label, href, display }) => {
                const Icon = socialIcons[kind];
                const external = kind !== "email";
                return (
                  <li key={kind}>
                    <a
                      href={href}
                      {...(external && { target: "_blank", rel: "me noopener noreferrer" })}
                      className="flex items-center gap-3 px-4 py-3 text-sm transition-colors hover:bg-surface-2"
                    >
                      <Icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
                      <span className="w-20 shrink-0 font-medium">{label}</span>
                      <span className="min-w-0 truncate font-mono text-xs text-muted">{display}</span>
                    </a>
                  </li>
                );
              },
            )}
          </ul>
        </Card>
      </div>
    </Section>
  );
}
