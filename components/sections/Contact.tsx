import { profile } from "@/data/profile";
import { getSocialLinks } from "@/data/social";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { socialIcons } from "@/components/ui/SocialLinks";

export function Contact() {
  return (
    <Section id="contact">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          id="contact-title"
          eyebrow="Contact"
          title="Let's Connect"
          description="I'm open to conversations about:"
          align="center"
        />
        <ul className="mt-6 flex flex-wrap justify-center gap-2">
          {profile.contactTopics.map((topic) => (
            <li key={topic} className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-muted">
              {topic}
            </li>
          ))}
        </ul>

        <Reveal className="mt-12 border-t border-border pt-12">
          <ul className="grid grid-cols-1 gap-2.5 min-[480px]:grid-cols-2 lg:grid-cols-3">
            {getSocialLinks(["linkedin", "github", "email", "facebook", "instagram", "threads"]).map(
              ({ kind, label, href, display }) => {
                const Icon = socialIcons[kind];
                const external = kind !== "email";
                return (
                  <li key={kind} className="min-w-0">
                    <a
                      href={href}
                      title={`${label}: ${display}`}
                      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                      className="flex h-11 w-full items-center justify-center gap-2 rounded-full border border-border bg-bg px-4 text-sm transition-colors hover:border-border-strong hover:bg-surface"
                    >
                      <Icon className="size-4 shrink-0 text-muted" aria-hidden="true" />
                      <span className="shrink-0 font-medium">{label}</span>
                      <span className="min-w-0 truncate text-muted">{display}</span>
                    </a>
                  </li>
                );
              },
            )}
          </ul>

          <div className="mt-8 flex justify-center">
            <DownloadCVButton variant="primary" />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
