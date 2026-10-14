import { ArrowDown, Briefcase, MapPin } from "lucide-react";
import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { SkillBadgeList } from "@/components/ui/SkillBadge";
import { SocialLinks } from "@/components/ui/SocialLinks";

const coreStack = ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL", "REST APIs"];

/** Status dot per current-focus line: production work is green, UAT work is amber. */
function focusDot(focus: string) {
  return focus.includes("UAT") ? "bg-amber-500" : "bg-emerald-500";
}

export function Hero() {
  const titles = profile.title.split(" | ");

  return (
    <section aria-labelledby="home-title" className="border-b border-border">
      <Container className="grid gap-10 pt-14 pb-16 sm:pt-20 sm:pb-20 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-14">
        <div className="animate-rise">
          <p className="flex items-center gap-1.5 font-mono text-xs text-muted">
            <MapPin className="size-3.5" aria-hidden="true" />
            {profile.location}
          </p>
          <h1 id="home-title" className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <p className="mt-3 text-lg font-medium sm:text-xl">
            {titles.map((title, index) => (
              <span key={title}>
                {index > 0 && (
                  <>
                    <span className="mx-2 text-accent" aria-hidden="true">
                      /
                    </span>
                    <span className="sr-only">, </span>
                  </>
                )}
                {title}
              </span>
            ))}
          </p>
          <p className="mt-6 max-w-2xl text-lg text-fg/90 text-pretty">{profile.tagline}</p>
          <p className="mt-3 max-w-2xl text-muted text-pretty">{profile.heroSummary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <DownloadCVButton variant="primary" />
            <ButtonLink href="/#contact" variant="secondary">
              Contact me
              <ArrowDown className="size-4" aria-hidden="true" />
            </ButtonLink>
            <SocialLinks kinds={["linkedin", "github", "email"]} />
          </div>
        </div>

        <Card className="animate-rise overflow-hidden [animation-delay:100ms]">
          <h2 className="border-b border-border bg-surface-2 px-5 py-3 font-mono text-xs tracking-wide text-muted uppercase">
            Currently
          </h2>
          <ul className="space-y-3 px-5 pt-5">
            {profile.currentFocus.map((focus) => (
              <li key={focus} className="flex gap-2.5 text-sm font-medium">
                <span aria-hidden="true" className={`mt-1.5 size-2 shrink-0 rounded-full ${focusDot(focus)}`} />
                {focus}
              </li>
            ))}
          </ul>
          <dl className="mt-5 space-y-4 border-t border-border px-5 py-5 text-sm">
            <div>
              <dt className="font-mono text-xs text-muted">Role</dt>
              <dd className="mt-1 flex items-center gap-1.5 font-medium">
                <Briefcase className="size-3.5 shrink-0 text-muted" aria-hidden="true" />
                {profile.currentRole} at {profile.currentCompany}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted">Main platform</dt>
              <dd className="mt-1 font-medium">WeCMS · Cash Management System</dd>
            </div>
            <div>
              <dt className="font-mono text-xs text-muted">Core stack</dt>
              <dd className="mt-2">
                <SkillBadgeList skills={coreStack} />
              </dd>
            </div>
          </dl>
        </Card>
      </Container>
    </section>
  );
}
