import { ArrowRight, Briefcase, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { SkillBadgeList } from "@/components/ui/SkillBadge";
import { SocialLinks } from "@/components/ui/SocialLinks";

const coreStack = ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "REST APIs"];

export function Hero() {
  const [primaryTitle, ...otherTitles] = profile.title.split(" | ");

  return (
    <section id="home" aria-labelledby="home-title" className="relative scroll-mt-16 overflow-hidden">
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_100%)]"
      />
      <Container className="relative grid gap-12 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-[1fr_360px] lg:items-center lg:gap-16">
        <div className="animate-fade-up">
          <ul aria-label="Current focus" className="flex flex-wrap gap-2">
            {profile.currentFocus.map((focus) => (
              <li
                key={focus}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted sm:gap-2 sm:px-3"
              >
                <span className="relative flex size-2 shrink-0" aria-hidden="true">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-60 motion-reduce:hidden" />
                  <span className="relative inline-flex size-2 rounded-full bg-accent" />
                </span>
                {focus}
              </li>
            ))}
          </ul>

          <h1 id="home-title" className="mt-6 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="mt-4 text-lg font-medium text-fg sm:text-xl">
            {primaryTitle}
            {otherTitles.map((title) => (
              <span key={title}>
                <span className="mx-2 text-border-strong" aria-hidden="true">
                  /
                </span>
                <span className="sr-only">, </span>
                {title}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted text-pretty">{profile.tagline}</p>

          <div className="mt-6">
            <p className="text-sm text-muted">I work across</p>
            <ul className="mt-2 flex max-w-2xl flex-wrap gap-x-1 gap-y-1 text-sm font-medium text-fg">
              {profile.focusAreas.map((area, index) => (
                <li key={area} className="flex items-center gap-1">
                  {area}
                  {index < profile.focusAreas.length - 1 && (
                    <span className="text-border-strong" aria-hidden="true">
                      ·
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="/#projects" variant="primary">
              View Projects
              <ArrowRight className="size-4" aria-hidden="true" />
            </ButtonLink>
            <DownloadCVButton />
            <ButtonLink href="/#contact" variant="ghost">
              Contact Me
            </ButtonLink>
          </div>

          <SocialLinks kinds={["linkedin", "github", "email"]} className="mt-6 -ml-2" />
        </div>

        <aside
          aria-label="Profile summary"
          className="animate-fade-up rounded-2xl border border-border bg-surface/80 p-6 backdrop-blur-sm [animation-delay:120ms]"
        >
          <div className="flex items-center gap-4">
            <ProfileAvatar size="lg" eager />
            <div className="min-w-0">
              <p className="font-semibold">{profile.name}</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm text-muted">
                <MapPin className="size-3.5 shrink-0" aria-hidden="true" />
                {profile.location}
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-4 border-t border-border pt-6 text-sm">
            <div>
              <dt className="text-xs text-subtle">Current role</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-medium">
                <Briefcase className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
                {profile.currentRole} at {profile.currentCompany}
              </dd>
            </div>
            <div>
              <dt className="text-xs text-subtle">Main platform</dt>
              <dd className="mt-1 font-medium">WeCMS · Cash Management System</dd>
            </div>
            <div>
              <dt className="text-xs text-subtle">Core stack</dt>
              <dd className="mt-2">
                <SkillBadgeList skills={coreStack} />
              </dd>
            </div>
          </dl>
        </aside>
      </Container>
    </section>
  );
}
