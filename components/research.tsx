"use client";
import { SectionWrapper } from "./section-wrapper";
import { Tip } from "./ui/tip";
import Papers from "@/constants/paper";
import { ProjectCard } from "./project-card";
export const Research = () => {
  return (
    <SectionWrapper>
      <div
        className="flex justify-center items-center flex-col"
        id="research"
      >
        <Tip tip="Papers I co-authored" className="self-center">
          <h1 className="font-jetbrain text-center text-5xl mb-16">
            <span className=" text-green-300">code</span>
            <span className="text-foreground">:</span>
            <span className=" text-cyan-300">research</span>
          </h1>
        </Tip>
        <div className="flex justify-center items-center w-full">
          <div className="grid md:grid-cols-2 gap-4 w-full">
            {Papers.map((paper, index) => {
              return <ProjectCard key={index} {...paper} />;
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};
