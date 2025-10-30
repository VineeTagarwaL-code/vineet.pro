import { Javascript } from "@/assests/logos/javascript";
import { SectionWrapper } from "./section-wrapper";
import { Tip } from "./ui/tip";
import { React as ReactIcon } from "@/assests/logos/react";
import { Python } from "@/assests/logos/python";
import { Typescript } from "@/assests/logos/typescript";
import { Bash } from "@/assests/logos/bash";
import React from "react";
import { Java } from "@/assests/logos/java";
import { Next } from "@/assests/logos/next";
import { Aws } from "@/assests/logos/aws";
import { Azure } from "@/assests/logos/azure";
import { Docker } from "@/assests/logos/docker";
import { Git } from "@/assests/logos/git";
import { Mongodb } from "@/assests/logos/mongodb";
import { Postgressql } from "@/assests/logos/postgressql";
import { Redis } from "@/assests/logos/redis";
import { SkillCard } from "./skill-card";
import { Ai } from "@/assests/logos/ai";
import { Langchain } from "@/assests/logos/langchain";
import { Vercel } from "@/assests/logos/vercel";
import { Cloudflare } from "@/assests/logos/cloudfare";

type skillType = {
	name: string;
	logo: React.ReactNode;
};
const languages: skillType[] = [
	{
		name: "Javascript",
		logo: <Javascript />,
	},
	{
		name: "Typescript",
		logo: <Typescript />,
	},
	{
		name: "python",
		logo: <Python />,
	},
	{
		name: "Java",
		logo: <Java />,
	},
];
const cloud: skillType[] = [
	{
		name: "AWS",
		logo: <Aws />,
	},
	{
		name: "Cloudflare",
		logo: <Cloudflare />,
	},
	{
		name: "Vercel",
		logo: <Vercel />,
	},
	{
		name: "Azure",
		logo: <Azure />,
	},
];
const frameworks: skillType[] = [
	{
		name: "React",
		logo: <ReactIcon />,
	},
	{
		name: "NextJs",
		logo: <Next />,
	},
	{
		name: "AI-SDK",
		logo: <Ai />,
	},
	{
		name: "Langchain",
		logo: <Langchain />,
	},
];

const databases: skillType[] = [
	{
		name: "MongoDB",
		logo: <Mongodb />,
	},
	{
		name: "Postgres",
		logo: <Postgressql />,
	},
	{
		name: "Redis",
		logo: <Redis />,
	},
];

const tools: skillType[] = [
	{
		name: "Bash",
		logo: <Bash />,
	},
	{
		name: "Git",
		logo: <Git />,
	},
];

export const Skills = () => {
	return (
		<SectionWrapper>
			<div className="mt-8 flex justify-center items-center flex-col md:py-8">
				<Tip tip="there's more trust me" className="self-center">
					<h1 className="font-jetbrain text-center text-5xl mb-16">
						<span className=" text-green-300">code</span>
						<span className="text-foreground">:</span>
						<span className=" text-cyan-300">skills</span>
					</h1>
				</Tip>
				<div className="flex flex-nowrap flex-col gap-8 justify-center items-center ">
					<div className="flex-wrap flex gap-16 justify-center items-center">
						{languages.map((skill: skillType) => {
							return (
								<SkillCard
									key={skill.name}
									skill={skill.name}
									logo={skill.logo}
									contClass="shadow-[6px_6px_0px_1px_#CAA6F7] min-w-[135px] md:min-w-[180px]"
								/>
							);
						})}
					</div>
					<div className="flex-wrap flex gap-12 justify-center items-center">
						{frameworks.map((skill: skillType) => {
							return (
								<SkillCard
									key={skill.name}
									skill={skill.name}
									logo={skill.logo}
									contClass="shadow-[6px_6px_0px_1px_#34c07c] min-w-[150px] md:min-w-[180px]"
								/>
							);
						})}
					</div>
					<div className="flex-wrap flex gap-8 justify-center items-center">
						{cloud.map((skill: skillType) => {
							return (
								<SkillCard
									key={skill.name}
									skill={skill.name}
									logo={skill.logo}
									contClass="shadow-[6px_6px_0px_1px_#2da4b9] min-w-[140px] md:min-w-[180px]"
								/>
							);
						})}
					</div>

					<div className="flex-wrap flex gap-8 justify-center items-center">
						{databases.map((skill: skillType) => {
							return (
								<SkillCard
									key={skill.name}
									skill={skill.name}
									logo={skill.logo}
									contClass="shadow-[6px_6px_0px_1px_#dcab70] max-w-[150px] min-w-[150px] "
								/>
							);
						})}
					</div>
					<div className="flex-wrap flex gap-8 justify-center items-center">
						{tools.map((skill: skillType) => {
							return (
								<SkillCard
									key={skill.name}
									skill={skill.name}
									logo={skill.logo}
									contClass="shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px] "
								/>
							);
						})}
					</div>
					<div className="flex-wrap flex gap-6 justify-center items-center">
						<SkillCard
							key={"more"}
							skill={"More"}
							logo={"&"}
							contClass="shadow-[6px_6px_0px_1px_#dc8070] max-w-[150px] min-w-[150px] "
						/>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
};

//
