import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SocialLinks } from "@/components/ui/SocialLinks";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold tracking-tight">{profile.name}</p>
          <p className="mt-1 text-sm text-muted">{profile.title}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <SocialLinks
            kinds={["linkedin", "github", "facebook", "instagram", "threads", "email"]}
            size="sm"
            className="-ml-2 md:-mr-2 md:ml-0"
          />
          <p className="text-sm text-muted">
            © {year} {profile.name}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
