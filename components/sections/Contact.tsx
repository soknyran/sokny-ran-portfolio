import { Mail, MessageCircle } from "lucide-react";
import { profile } from "@/data/profile";
import { getSocialLinks } from "@/data/social";
import { IconBadge } from "@/components/ui/IconBadge";
import { ButtonAnchor } from "@/components/ui/Button";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { socialIcons } from "@/components/ui/SocialLinks";
import { Panel } from "@/components/ui/Panel";
import { Container } from "@/components/ui/Container";

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-title" className="scroll-mt-16 py-16 sm:py-20">
      <Container>
        <Panel className="flex flex-col items-center px-5 py-10 text-center sm:px-10">
          <IconBadge icon={MessageCircle} hue="orange" />
          <h2 id="contact-title" className="mt-4 text-[clamp(1.5rem,1vw+1.15rem,2rem)] leading-tight font-semibold tracking-tight">
            Let&apos;s connect
          </h2>
          <p className="mt-2 text-sm text-muted">I&apos;m open to conversations about:</p>
          <ul className="mt-3 flex max-w-2xl flex-wrap justify-center gap-1.5">
            {profile.contactTopics.map((topic) => (
              <li key={topic} className="rounded-full bg-fill px-3 py-1 text-[13px] text-fg/80">
                {topic}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap justify-center gap-2.5">
            <ButtonAnchor href={`mailto:${profile.email}`} variant="primary">
              <Mail className="size-4" aria-hidden="true" />
              Email me
            </ButtonAnchor>
            <DownloadCVButton variant="secondary" />
          </div>

          <ul className="mt-8 grid w-full max-w-3xl grid-cols-1 gap-2 min-[480px]:grid-cols-2 lg:grid-cols-3">
            {getSocialLinks(["linkedin", "github", "email", "facebook", "instagram", "threads"]).map(
              ({ kind, label, href, display }) => {
                const Icon = socialIcons[kind];
                const external = kind !== "email";
                return (
                  <li key={kind} className="min-w-0">
                    <a
                      href={href}
                      title={`${label}: ${display}`}
                      {...(external && { target: "_blank", rel: "me noopener noreferrer" })}
                      className="flex h-10 w-full items-center justify-center gap-2 rounded-full bg-surface-2 px-4 text-sm transition-colors hover:bg-fill"
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
        </Panel>
      </Container>
    </section>
  );
}
