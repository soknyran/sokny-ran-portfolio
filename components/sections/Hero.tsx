import { profile } from "@/data/profile";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { DownloadCVButton } from "@/components/ui/DownloadCVButton";
import { ProfileAvatar } from "@/components/ui/ProfileAvatar";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { Terminal } from "@/components/ui/Terminal";
import { Tile } from "@/components/ui/Tile";

export const coreStack = ["Java", "Spring Boot", "Next.js", "TypeScript", "PostgreSQL"];

export function Hero() {
  const titles = profile.title.split(" | ");

  return (
    <>
      <section aria-labelledby="home-title" className="pt-12 pb-7 text-center sm:pt-14">
        <Container className="animate-fade-up flex flex-col items-center">
          <ProfileAvatar size="lg" eager />
          <h1 id="home-title" className="mt-5 flex flex-col items-center">
            <span className="text-[clamp(2.125rem,3vw+1.375rem,3.5rem)] leading-[1.07] font-semibold tracking-[-0.028em]">
              {profile.name}
            </span>
            <span className="text-gradient mt-2 pb-1 text-[clamp(1.125rem,1vw+0.9rem,1.625rem)] leading-tight font-semibold tracking-[-0.018em] text-balance">
              {titles.map((title, index) => (
                <span key={title}>
                  {index > 0 && <span aria-hidden="true"> · </span>}
                  {index > 0 && <span className="sr-only">, </span>}
                  <span className="whitespace-nowrap">{title}</span>
                </span>
              ))}
            </span>
          </h1>
          <p className="mt-4 max-w-[600px] text-lg leading-snug font-medium tracking-[-0.016em] text-balance sm:text-[19px]">
            {profile.tagline}
          </p>
          <p className="mt-2.5 max-w-[640px] text-muted text-pretty">{profile.heroSummary}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <DownloadCVButton variant="primary" />
            <ButtonLink href="/#contact" variant="secondary">
              Get in touch
            </ButtonLink>
            <SocialLinks kinds={["linkedin", "github", "email"]} />
          </div>
          <p className="mt-4 text-xs text-muted">
            {profile.location} · {profile.timezone}
          </p>
        </Container>
      </section>

      <section aria-label="Highlights">
        <Container className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <div className="order-2 col-span-2 flex md:order-none md:row-span-2">
            <Terminal
              title="sokny — zsh"
              command="cat profile.json"
              data={{
                name: profile.name,
                role: profile.currentRole,
                company: profile.currentCompany,
                location: profile.location,
                platform: "WeCMS · Cash Management System",
                stack: coreStack,
                focus: profile.focusAreas,
              }}
              caption={profile.currentFocus.join("  ·  ")}
            />
          </div>
          {profile.stats.map((stat) => (
            <Tile key={stat.label} className="flex min-h-[124px] flex-col justify-between gap-3 p-4 sm:min-h-[150px] sm:p-5">
              <p className="text-gradient pb-0.5 text-4xl leading-none font-semibold tracking-[-0.03em] sm:text-[52px]">
                {stat.value}
              </p>
              <p className="text-[13px] leading-snug text-muted sm:text-sm">{stat.label}</p>
            </Tile>
          ))}
        </Container>
      </section>
    </>
  );
}
