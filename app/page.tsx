import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ResumeButton } from "@/components/resume-button";
import { Introduction } from "@/components/introduction";
export default function Home() {
  return (
    <main className="min-h-screen relative">
       <Navbar />
       <ResumeButton/>
       <Introduction/>
    </main>
  );
}
