import type { MDXComponents } from "mdx/types";
import Link from "next/link";

/**
 * Global styling for every Markdown element rendered from an .mdx post.
 * This is what lets a blog post be "just markdown" while still matching
 * the site's Catppuccin Mocha palette + Space Grotesk / JetBrains Mono fonts.
 *
 * Required by @next/mdx in the App Router (must live at the project root).
 */
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="font-grotesk text-4xl md:text-5xl font-bold tracking-tight text-zinc-100 mt-2 mb-4 leading-[1.05]">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="font-grotesk text-2xl md:text-3xl font-bold tracking-tight text-zinc-100 mt-14 mb-4 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="font-grotesk text-xl md:text-2xl font-semibold text-zinc-100 mt-10 mb-3">
        {children}
      </h3>
    ),
    p: ({ children }) => (
      <p className="text-[17px] leading-[1.75] text-foreground my-5">
        {children}
      </p>
    ),
    a: ({ href = "", children }) => (
      <Link
        href={href}
        className="text-[#cba6f7] underline decoration-[#cba6f7]/40 underline-offset-4 hover:decoration-[#cba6f7] transition"
      >
        {children}
      </Link>
    ),
    strong: ({ children }) => (
      <strong className="font-grotesk font-semibold text-zinc-100">
        {children}
      </strong>
    ),
    em: ({ children }) => <em className="text-[#f2cdcd] not-italic">{children}</em>,
    ul: ({ children }) => (
      <ul className="my-5 space-y-2 pl-1 text-[17px] text-foreground">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-5 space-y-2 pl-5 list-decimal marker:text-[#cba6f7] text-[17px] text-foreground">
        {children}
      </ol>
    ),
    li: ({ children }) => (
      <li className="leading-[1.7] pl-2 relative before:content-['→'] before:absolute before:-left-1 before:text-[#cba6f7]/60 [ol_&]:before:content-none [ol_&]:pl-0">
        {children}
      </li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-7 border-l-2 border-[#cba6f7] bg-[#181825] rounded-r-xl px-5 py-3 text-foreground italic">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="font-jetbrain text-[0.85em] bg-[#181825] text-[#f5c2e7] px-1.5 py-0.5 rounded-md border border-white/5">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="font-jetbrain text-sm bg-[#11111b] border border-white/5 rounded-xl p-4 my-6 overflow-x-auto leading-relaxed">
        {children}
      </pre>
    ),
    hr: () => <hr className="my-12 border-white/10" />,
    ...components,
  };
}
