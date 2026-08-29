import { Fragment } from "react";

/** Matches the `[^12]` markers carried in article body text. */
const MARKER = /\[\^(\d+)\]/g;

/**
 * Renders article text, turning `[^n]` markers into superscript links that
 * jump to the numbered note at the foot of the article.
 */
export function FootnoteText({ text }: { text: string }) {
  const parts: React.ReactNode[] = [];
  let cursor = 0;

  for (const match of text.matchAll(MARKER)) {
    const index = match.index ?? 0;
    if (index > cursor) parts.push(text.slice(cursor, index));

    const n = match[1];
    parts.push(
      <sup key={`${n}-${index}`} className="ml-0.5 leading-none">
        <a
          id={`fnref-${n}`}
          href={`#fn-${n}`}
          className="text-gold no-underline hover:underline"
          aria-label={`Note ${n}`}
        >
          {n}
        </a>
      </sup>,
    );
    cursor = index + match[0].length;
  }

  if (cursor < text.length) parts.push(text.slice(cursor));

  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>{part}</Fragment>
      ))}
    </>
  );
}

/** Numbered notes list rendered at the end of an authored article. */
export function Footnotes({ notes }: { notes: string[] }) {
  return (
    <section className="mt-16 border-t border-border pt-10">
      <h2 className="font-serif text-xl font-semibold text-foreground">
        Notes
      </h2>
      <ol className="mt-6 space-y-3">
        {notes.map((note, i) => {
          const n = i + 1;
          return (
            <li
              key={n}
              id={`fn-${n}`}
              className="flex gap-3 text-sm leading-relaxed text-charcoal-muted scroll-mt-28"
            >
              <a
                href={`#fnref-${n}`}
                className="shrink-0 font-medium text-gold no-underline hover:underline"
                aria-label={`Back to reference ${n}`}
              >
                {n}.
              </a>
              <span>{note}</span>
            </li>
          );
        })}
      </ol>
    </section>
  );
}
