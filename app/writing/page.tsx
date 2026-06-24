import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "@/constants/writing";

export const metadata: Metadata = {
  title: "writing · vineet",
  description: "Notes, explainers and interactive deep-dives.",
};

export default function WritingIndex() {
  return (
    <div className="mt-6">
      <div className="font-jetbrain text-xs uppercase tracking-[0.25em] text-[#cba6f7] mb-3">
        writing
      </div>
      <h1 className="font-grotesk text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 leading-[1.05]">
        Things I&apos;m figuring out, written down.
      </h1>
      <p className="text-zinc-400 mt-4 max-w-[520px] text-[17px]">
        Mostly explainers. The version that finally made something click for me,
        with bits you can actually poke at.
      </p>

      <div className="mt-12 space-y-3">
        {posts.map((p) => (
          <Link
            key={p.slug}
            href={`/writing/${p.slug}`}
            className="group block rounded-2xl border border-white/5 bg-[#181825] p-6 transition hover:border-[#cba6f7]/40 hover:bg-[#1e1e2e]"
          >
            <div className="flex items-baseline justify-between gap-4">
              <h2 className="font-grotesk text-xl md:text-2xl font-semibold text-zinc-100 transition group-hover:text-[#cba6f7]">
                {p.title}
              </h2>
              <span className="font-jetbrain shrink-0 text-xs text-zinc-500">
                {p.date}
              </span>
            </div>
            <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
              {p.description}
            </p>
            <div className="font-jetbrain mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-500">
              <span>{p.readingTime}</span>
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 px-2.5 py-0.5 text-[#a6adc8]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
