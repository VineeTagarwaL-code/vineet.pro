import { ReactNode } from "react";

/** Title block shown at the top of every post. */
export function PostHeader({
  title,
  date,
  readingTime,
  tags = [],
}: {
  title: string;
  date: string;
  readingTime?: string;
  tags?: string[];
}) {
  return (
    <header className="mb-10 border-b border-white/10 pb-8">
      <div className="font-jetbrain text-xs uppercase tracking-[0.25em] text-[#cba6f7] mb-4">
        writing
      </div>
      <h1 className="font-grotesk text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.05]">
        {title}
      </h1>
      <div className="font-jetbrain mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-xs text-zinc-500">
        <span>{date}</span>
        {readingTime && (
          <>
            <span className="text-zinc-700">·</span>
            <span>{readingTime}</span>
          </>
        )}
        {tags.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-[#181825] px-2.5 py-0.5 text-[#a6adc8]"
          >
            {t}
          </span>
        ))}
      </div>
    </header>
  );
}

/** Highlighted aside for tips / key ideas. */
export function Callout({
  children,
  tone = "mauve",
}: {
  children: ReactNode;
  tone?: "mauve" | "teal" | "peach";
}) {
  const border = { mauve: "#cba6f7", teal: "#94e2d5", peach: "#fab387" }[tone];
  return (
    <div
      className="my-7 rounded-2xl border border-white/5 bg-[#181825] px-6 py-5 text-zinc-200"
      style={{ borderLeft: `3px solid ${border}` }}
    >
      {children}
    </div>
  );
}

/** The big dark pull-quote that closes a post. */
export function BigSummary({ children }: { children: ReactNode }) {
  return (
    <div className="my-12 rounded-3xl bg-[#11111b] px-8 py-12 text-center border border-white/5">
      <div className="font-jetbrain text-xs uppercase tracking-[0.3em] text-[#f9e2af] mb-5">
        the whole thing in one breath
      </div>
      <p className="font-grotesk text-2xl md:text-3xl font-bold leading-snug text-zinc-100">
        {children}
      </p>
    </div>
  );
}
