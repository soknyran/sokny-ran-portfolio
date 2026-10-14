import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold">{profile.name}</p>
          <p className="mt-0.5 font-mono text-xs text-muted">
            © {year} · {profile.location}
          </p>
        </div>
        <SocialLinks kinds={["linkedin", "github", "facebook", "instagram", "threads", "email"]} size="sm" />
      </Container>
    </footer>
  );
}
