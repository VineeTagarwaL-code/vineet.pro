"use client";
import { Navbar } from "@/components/navbar";
import { ResumeButton } from "@/components/resume-button";
import { Introduction } from "@/components/introduction";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Project } from "@/components/projects";
import { Footer } from "@/components/footer";
import { MobileNavbar } from "@/components/mobile-footer";
import { useEffect } from "react";
export default function Home() {
  useEffect(()=>{
   console.log("Hello there ! ( ͡° ͜ʖ ͡°) ")
   console.log("I see you are lurking around looking for something, code is not open sourced yet but you can always reach out to me at vineetagarwal.now@gmail.com")
  },[])
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
