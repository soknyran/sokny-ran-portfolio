import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, ExternalLink } from "lucide-react";
import { getProject, projects } from "@/data/projects";
import { ArchitectureDiagram } from "@/components/ui/ArchitectureDiagram";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { ButtonAnchor } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SkillBadgeList } from "@/components/ui/SkillBadge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ogImage } from "@/lib/site";
import type { TitledText } from "@/types";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};

  const title = `${project.name}: ${project.subtitle}`;
  return {
    title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      type: "article",
      title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      images: [ogImage],
    },
    twitter: { card: "summary_large_image", title, description: project.summary, images: [ogImage.url] },
  };
}

const tocItems = [
  { id: "overview", label: "Overview" },
  { id: "problem", label: "Problem" },
  { id: "role", label: "My role" },
  { id: "architecture", label: "Architecture" },
  { id: "stack", label: "Technology stack" },
  { id: "challenges", label: "Challenges" },
  { id: "solution", label: "Solution" },
  { id: "decisions", label: "Key decisions" },
  { id: "results", label: "Results" },
  { id: "lessons", label: "Lessons learned" },
];

function CaseSection({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-24">
      <h2 id={`${id}-title`} className="text-2xl font-semibold tracking-tight">
        {title}
      </h2>
      <div className="mt-5">{children}</div>
    </section>
  );
}

function Prose({ children }: { children: ReactNode }) {
  return <p className="max-w-3xl leading-relaxed text-muted text-pretty sm:text-lg">{children}</p>;
}

function CardGrid({ items }: { items: TitledText[] }) {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {items.map((item) => (
        <li key={item.title} className="rounded-2xl bg-surface p-5">
          <h3 className="font-semibold tracking-tight">{item.title}</h3>
          <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.detail}</p>
        </li>
      ))}
    </ul>
  );
}

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 leading-relaxed text-muted">
          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.indexOf(project);
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      <header className="relative overflow-hidden border-b border-border">
        <div
          aria-hidden="true"
          className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_0%,#000_40%,transparent_100%)]"
        />
        <Container className="relative pt-10 pb-14 sm:pt-14 sm:pb-20">
          <Link
            href="/#work"
            className="inline-flex items-center gap-1.5 rounded-md text-sm text-muted transition-colors hover:text-fg"
          >
            <ArrowLeft className="size-4" aria-hidden="true" />
            Back to Work
          </Link>

          <div className="mt-10 flex flex-wrap items-center gap-2">
            <p className="font-mono text-xs font-medium tracking-wider text-accent uppercase">{project.type}</p>
            <StatusBadge status={project.status} />
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">{project.name}</h1>
          <p className="mt-2 text-lg font-medium text-fg/80 sm:text-xl">{project.subtitle}</p>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted text-pretty">{project.summary}</p>

          <dl className="mt-10 border-t border-border pt-8">
            <div>
              <dt className="text-xs text-subtle">Role</dt>
              <dd className="mt-1 font-medium">{project.role}</dd>
            </div>
          </dl>

          {(project.githubUrl || project.liveUrl) && (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.liveUrl && (
                <ButtonAnchor href={project.liveUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="sm">
                  <ExternalLink className="size-4" aria-hidden="true" />
                  Visit site
                </ButtonAnchor>
              )}
              {project.githubUrl && (
                <ButtonAnchor href={project.githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary" size="sm">
                  <GitHubIcon className="size-4" />
                  View source
                </ButtonAnchor>
              )}
            </div>
          )}
        </Container>
      </header>

      <Container className="grid gap-12 py-16 lg:grid-cols-[180px_minmax(0,1fr)] lg:gap-16 lg:py-20">
        <nav aria-label="On this page" className="hidden lg:block">
          <div className="sticky top-24">
            <p className="font-mono text-xs font-medium tracking-wider text-subtle uppercase">On this page</p>
            <ul className="mt-4 space-y-2 border-l border-border">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="-ml-px block border-l border-transparent pl-4 text-sm text-muted transition-colors hover:border-fg hover:text-fg"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 space-y-16">
          <CaseSection id="overview" title="Overview">
            <div className="space-y-5">
              <Prose>{project.overview}</Prose>
              <div className="rounded-2xl bg-surface p-5">
                <h3 className="text-sm font-semibold">Context</h3>
                <p className="mt-2 max-w-3xl leading-relaxed text-muted">{project.context}</p>
              </div>
            </div>
          </CaseSection>

          <CaseSection id="problem" title="Business problem">
            <Prose>{project.problem}</Prose>
          </CaseSection>

          <CaseSection id="role" title="My role and responsibilities">
            <p className="mb-5 font-medium">{project.role}</p>
            <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2">
              {project.responsibilities.map((item) => (
                <li key={item} className="flex gap-2.5 text-muted">
                  <span aria-hidden="true" className="mt-2.5 size-1 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </CaseSection>

          <CaseSection id="architecture" title="Technical architecture">
            <figure>
              <ArchitectureDiagram layers={project.architecture.layers} />
              <figcaption className="mt-3 text-sm text-subtle">{project.architecture.caption}</figcaption>
            </figure>
            {project.workflow && (
              <div className="mt-8">
                <h3 className="text-sm font-semibold">Delivery workflow</h3>
                <ol className="mt-4 flex flex-wrap items-center gap-2">
                  {project.workflow.map((step, stepIndex) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm font-medium">
                        <span className="mr-1.5 font-mono text-xs text-accent">{stepIndex + 1}</span>
                        {step}
                      </span>
                      {stepIndex < project.workflow!.length - 1 && (
                        <ArrowRight className="size-4 text-subtle" aria-hidden="true" />
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </CaseSection>

          {project.stacks && project.stacks.length > 0 && (
            <CaseSection id="stack" title="Technology stack">
              <dl className="grid gap-4 sm:grid-cols-2">
                {project.stacks.map((group) => (
                  <div key={group.label} className="rounded-2xl bg-surface p-5">
                    <dt className="font-mono text-xs font-medium tracking-wider text-accent uppercase">{group.label}</dt>
                    <dd className="mt-3">
                      <SkillBadgeList skills={group.items} />
                    </dd>
                  </div>
                ))}
              </dl>
            </CaseSection>
          )}

          <CaseSection id="challenges" title="Challenges">
            <CardGrid items={project.challenges} />
          </CaseSection>

          <CaseSection id="solution" title="Solution">
            <Prose>{project.solution}</Prose>
          </CaseSection>

          <CaseSection id="decisions" title="Key technical decisions">
            <CardGrid items={project.decisions} />
          </CaseSection>

          <CaseSection id="results" title="Results">
            <CheckList items={project.achievements} />
          </CaseSection>

          <CaseSection id="lessons" title="Lessons learned">
            <CheckList items={project.lessons} />
          </CaseSection>

          <nav aria-label="More projects" className="flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:justify-between">
            <Link
              href="/#work"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-fg"
            >
              <ArrowLeft className="size-4" aria-hidden="true" />
              Back to Work
            </Link>
            <Link
              href={`/projects/${next.slug}`}
              className="group inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-accent"
            >
              Next: {next.name}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      </Container>
    </article>
  );
}
