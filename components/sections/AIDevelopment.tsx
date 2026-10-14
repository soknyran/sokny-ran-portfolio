import { ShieldCheck } from "lucide-react";
import { aiWorkflow } from "@/data/skills";
import { AppIcon } from "@/components/ui/AppIcon";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Tile } from "@/components/ui/Tile";

export function AIDevelopment() {
  return (
    <Section id="ai-development">
      <SectionHeading
        id="ai-development-title"
        title="AI as an engineering tool, not a replacement for engineering."
        description={aiWorkflow.statement}
      />

      <h3 className="mb-1.5 ml-1 text-xs font-medium tracking-wide text-muted uppercase">Where AI fits in the workflow</h3>
      <Tile className="p-2">
        <ol className="grid gap-1 sm:grid-cols-2 lg:grid-cols-5">
          {aiWorkflow.steps.map((step, index) => (
            <li key={step.title} className="rounded-xl p-3">
              <p className="text-sm font-medium tracking-tight">
                <span className="mr-1.5 font-mono text-xs text-accent tabular-nums" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.title}
              </p>
              <p className="mt-1 text-[13px] leading-snug text-muted">{step.description}</p>
            </li>
          ))}
        </ol>
      </Tile>

      <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
        <div>
          <h3 className="mb-1.5 ml-1 text-xs font-medium tracking-wide text-muted uppercase">Tools</h3>
          <Tile>
            <ul className="divide-y divide-border">
              {aiWorkflow.tools.map((tool) => (
                <li key={tool.name} className="flex flex-col gap-0.5 px-4 py-3 sm:flex-row sm:gap-4">
                  <span className="w-24 shrink-0 text-sm font-medium">{tool.name}</span>
                  <span className="text-sm text-muted">{tool.description}</span>
                </li>
              ))}
            </ul>
          </Tile>
        </div>

        <div>
          <h3 className="mb-1.5 ml-1 text-xs font-medium tracking-wide text-muted uppercase">Engineering guardrails</h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {aiWorkflow.principles.map((principle) => (
              <li key={principle.title}>
                <Tile className="h-full p-4">
                  <AppIcon icon={ShieldCheck} tint="teal" size="sm" />
                  <p className="mt-2.5 text-sm font-semibold tracking-tight">{principle.title}</p>
                  <p className="mt-1 text-[13px] leading-snug text-muted">{principle.detail}</p>
                </Tile>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
