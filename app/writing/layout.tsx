import Link from "next/link";
import { Navbar } from "@/components/navbar";

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <article className="mx-auto w-full max-w-[760px] px-5 pb-28 pt-4 md:pt-2">
        {children}
      </article>
      <footer className="mx-auto max-w-[760px] px-5 pb-20">
        <Link
          href="/writing"
          className="font-jetbrain text-sm text-zinc-500 transition hover:text-[#cba6f7]"
        >
          ← all writing
        </Link>
      </footer>
    </main>
  );
}
