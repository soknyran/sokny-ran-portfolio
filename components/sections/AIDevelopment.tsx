import { ShieldCheck } from "lucide-react";
import { aiWorkflow } from "@/data/skills";
import { Reveal } from "@/components/ui/Reveal";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AIDevelopment() {
  return (
    <Section id="ai-development" className="bg-surface">
      <SectionHeading
        id="ai-development-title"
        eyebrow="AI-Assisted Development"
        title="AI as an engineering tool, not a replacement for engineering."
        description={aiWorkflow.statement}
      />

      <Reveal className="mt-14">
        <h3 className="text-sm font-semibold">Where AI fits in the workflow</h3>
        <ol className="mt-5 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {aiWorkflow.steps.map((step, index) => (
            <li key={step.title} className="flex flex-col bg-bg p-5">
              <span className="font-mono text-xs text-accent" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 font-medium tracking-tight">{step.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <h3 className="text-sm font-semibold">Tools</h3>
          <ul className="mt-5 divide-y divide-border rounded-2xl border border-border bg-bg">
            {aiWorkflow.tools.map((tool) => (
              <li key={tool.name} className="flex flex-col gap-1 px-5 py-4 sm:flex-row sm:items-center sm:gap-6">
                <span className="w-28 shrink-0 font-mono text-sm font-medium">{tool.name}</span>
                <span className="text-sm text-muted">{tool.description}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.06}>
          <h3 className="text-sm font-semibold">Engineering guardrails</h3>
          <ul className="mt-5 grid gap-4 sm:grid-cols-2">
            {aiWorkflow.principles.map((principle) => (
              <li key={principle.title} className="rounded-2xl border border-border bg-bg p-5">
                <ShieldCheck className="size-4 text-accent" aria-hidden="true" />
                <p className="mt-3 font-medium tracking-tight">{principle.title}</p>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{principle.detail}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
