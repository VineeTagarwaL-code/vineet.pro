"use client";
import { Navbar } from "@/components/navbar";
import { ResumeButton } from "@/components/resume-button";
import { Introduction } from "@/components/introduction";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Project } from "@/components/projects";
import { Footer } from "@/components/footer";
import { MobileNavbar } from "@/components/mobile-footer";
export default function Home() {
  return (
    <main className="min-h-screen relative scroll-smooth select-none">
      <Navbar />
      <ResumeButton />
      <Introduction />
      <Skills />
      <Experience />
      <Project />
      <Footer />
      <MobileNavbar />
    </main>
  );
}
