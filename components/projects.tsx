"use client";
import { SectionWrapper } from "./section-wrapper";
import { Tip } from "./ui/tip";
import Projects from "@/constants/project";
import { ProjectCard } from "./project-card";
export const Project = () => {
	return (
		<SectionWrapper>
			<div className="flex justify-center items-center flex-col" id="projects">
				<Tip tip="Some of the works, I did" className="self-center">
					<h1 className="font-jetbrain text-center text-5xl mb-16">
						<span className=" text-green-300">code</span>
						<span className="text-foreground">:</span>
						<span className=" text-cyan-300">work</span>
					</h1>
				</Tip>
				<div className="flex justify-center items-center w-full">
					<div className="grid md:grid-cols-2 gap-4 w-full">
						{Projects.map((proj, index) => {
							return <ProjectCard key={index} {...proj} />;
						})}
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};
