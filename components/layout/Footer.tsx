import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-6 text-xs text-muted md:flex-row md:items-center md:justify-between">
        <div className="space-y-1">
          <p>Built with Next.js. No cookies, no trackers. Hosted on Vercel.</p>
          <p>
            © {year} {profile.name}. {profile.title.split(" | ").join(" · ")}
          </p>
        </div>
        <SocialLinks kinds={["linkedin", "github", "facebook", "instagram", "threads", "email"]} size="sm" />
      </Container>
    </footer>
  );
}
