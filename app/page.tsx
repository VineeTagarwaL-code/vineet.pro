"use client";
import { Navbar } from "@/components/navbar";
import { ResumeButton } from "@/components/resume-button";
import { Introduction } from "@/components/introduction";
import { Skills } from "@/components/skills";
import { useEffect, useState } from "react";
import { Experience } from "@/components/experience";

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      <Navbar />
      <ResumeButton />
      <Introduction />
      <Skills />
      <Experience/>
      {/* <motion.div
        transition={{
          type: "spring",
          damping: 15, // Adjust damping for smoother motion
          stiffness: 100, // Adjust stiffness for smoother motion
        }}
        whileHover={{ scale: 0.9 }} // Scale on hove
        className="absolute w-4 h-4 border-[2px] border-solid border-gray-200/40 p-3 rounded-full pointer-events-none z-[100000] hidden lg:block"
        style={{ top: mousePosition.y - 10, left: mousePosition.x - 15 }}
      /> */}
    </main>
  );
}
