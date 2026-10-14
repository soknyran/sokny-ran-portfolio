import type { ReactNode } from "react";

type Value = string | string[];

/** Longest line, in characters, before an inline array wraps onto the next line. */
const WRAP_AT = 58;

const Key = ({ children }: { children: string }) => <span className="text-[#7cc4ff]">&quot;{children}&quot;</span>;
const Str = ({ children }: { children: string }) => <span className="text-[#ffb27a]">&quot;{children}&quot;</span>;

/** Array printed inline, wrapping to an indented continuation line when it gets long. */
function inlineArray(prefixLength: number, items: string[], trailingComma: boolean): ReactNode[] {
  const lines: ReactNode[][] = [[]];
  let width = prefixLength + 1;
  items.forEach((item, index) => {
    const last = index === items.length - 1;
    const token = `"${item}"${last ? "" : ", "}`;
    if (width + token.length > WRAP_AT && lines.at(-1)!.length > 0) {
      lines.push(["\n    "]);
      width = 4;
    }
    lines.at(-1)!.push(
      <span key={item}>
        <Str>{item}</Str>
        {last ? "" : ", "}
      </span>,
    );
    width += token.length;
  });
  return ["[", ...lines.flat(), "]", trailingComma ? "," : ""];
}

/**
 * A zsh-style window that prints a small JSON profile. The data is passed in by the caller
 * and always comes from data/profile.ts, so the block can never say more than the site does.
 */
export function Terminal({
  title,
  command,
  data,
  caption,
}: {
  title: string;
  command: string;
  data: Record<string, Value>;
  caption: ReactNode;
}) {
  const entries = Object.entries(data);

  return (
    <figure className="flex min-w-0 flex-col overflow-hidden rounded-[18px] bg-[#1c1c1f] text-[#e6e6ea] dark:ring-1 dark:ring-white/10">
      <div aria-hidden="true" className="relative flex h-9 items-center gap-2 border-b border-black bg-[#2b2b2e] px-3.5">
        <span className="size-3 rounded-full bg-[#ff5f57]" />
        <span className="size-3 rounded-full bg-[#febc2e]" />
        <span className="size-3 rounded-full bg-[#28c840]" />
        <p className="pointer-events-none absolute inset-0 grid place-items-center text-xs font-medium text-[#a0a0a6]">
          {title}
        </p>
      </div>
      <pre
        tabIndex={0}
        aria-label={`Terminal output of ${command}`}
        className="flex-1 overflow-x-auto px-4 py-3 font-mono text-[11px] leading-[1.6] tracking-normal sm:text-xs"
      >
        <code>
          <span className="text-[#7ee2a8] select-none">~ %</span> {command}
          {"\n{\n"}
          {entries.map(([key, value], index) => {
            const comma = index < entries.length - 1;
            const prefix = `  "${key}": `;
            return (
              <span key={key}>
                {"  "}
                <Key>{key}</Key>
                {": "}
                {Array.isArray(value) ? (
                  inlineArray(prefix.length, value, comma)
                ) : (
                  <>
                    <Str>{value}</Str>
                    {comma ? "," : ""}
                  </>
                )}
                {"\n"}
              </span>
            );
          })}
          {"}"}
        </code>
      </pre>
      <figcaption className="border-t border-white/10 px-4 py-2.5 text-xs text-[#a0a0a6]">{caption}</figcaption>
    </figure>
  );
}
