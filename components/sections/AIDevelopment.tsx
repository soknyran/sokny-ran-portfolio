import { ShieldCheck } from "lucide-react";
import { aiWorkflow } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";

export function AIDevelopment() {
  return (
    <Section
      id="ai-development"
      index="04"
      label="AI-Assisted Development"
      title="AI as an engineering tool, not a replacement for engineering."
      description={aiWorkflow.statement}
      className="border-y border-border bg-surface"
    >
      <h3 className="font-mono text-xs tracking-wide text-muted uppercase">Where AI fits in the workflow</h3>
      <ol className="mt-3 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
        {aiWorkflow.steps.map((step, index) => (
          <li key={step.title} className="bg-bg p-4">
            <span className="font-mono text-xs text-accent" aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-1.5 text-sm font-semibold">{step.title}</p>
            <p className="mt-1 text-sm text-muted">{step.description}</p>
          </li>
        ))}
      </ol>

      <div className="mt-10 grid gap-10 lg:grid-cols-2">
        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted uppercase">Tools</h3>
          <ul className="mt-3 divide-y divide-border rounded-lg border border-border bg-bg">
            {aiWorkflow.tools.map((tool) => (
              <li key={tool.name} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-5">
                <span className="w-28 shrink-0 font-mono text-sm font-medium">{tool.name}</span>
                <span className="text-sm text-muted">{tool.description}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs tracking-wide text-muted uppercase">Engineering guardrails</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {aiWorkflow.principles.map((principle) => (
              <li key={principle.title}>
                <Card className="h-full bg-bg p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <ShieldCheck className="size-4 shrink-0 text-accent" aria-hidden="true" />
                    {principle.title}
                  </p>
                  <p className="mt-1.5 text-sm text-muted">{principle.detail}</p>
                </Card>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
