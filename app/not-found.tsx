import { ArrowLeft } from "lucide-react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <Container className="flex flex-col items-start py-32">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted">The page you are looking for does not exist or has moved.</p>
      <ButtonLink href="/" variant="primary" className="mt-8">
        <ArrowLeft className="size-4" aria-hidden="true" />
        Back to home
      </ButtonLink>
    </Container>
  );
}
