import { Tip } from "./ui/tip";
import { SectionWrapper } from "./section-wrapper";
import { Experience as experienceType } from "@/lib/types";
import { Work } from "./work";

const experience: experienceType[] = [
  {
    title: "Founding AI Engineer",
    company: "JigsawStack",
    tip: "Currently Working Here",
    startDate: "May 2025",
    endDate: "Present",
    location: "Remote, USA",
    description: [
      "Built Interfaze - an LLM optimized for developers that intelligently combines SLMs and LLMs to enable faster, smarter AI development.",
      "Revamped Google Translate experience by creating a lightning-fast translation widget that translates entire web pages in under a second.",
      "Re-engineered the core web search API to deliver higher accuracy, broader query coverage, and significantly improved response times.",
      "Refactored the file upload API, reducing upload time by 80% while improving scalability and reliability.",
      "Continuously monitoring and optimizing the performance and efficiency of core services across JigsawStack.",
    ],
    lang: [
      "Javascript",
      "Typescript",
      "Ai-SDK",
      "Prompt Engineering",
      "Langchain",
      "NextJs",
      "ChakraUI",
      "Vercel",
      "Cloudflare",
      "Azure",
    ],
  },
  {
    title: "Founding Engineer",
    company: "ConcertPal",
    tip: "Currently Working Here",
    startDate: "Jun 2024",
    endDate: "May 2025",
    location: "Remote, USA",
    description: [
      `Built a concert price comparison extension in 1 month, delivering the best options across multiple sites within 5s.`,
      `Built the core backend system for optimized performance, ensuring it meets user expectations`,
      `Integrated Redis and Cron jobs to automate workflows, resulting in saving our costs by 70%`,
      `Solved Numerous issues and adopted various optimization measure to reduce response time to meet user expectations`,
      `Resolved the complex challenge of matching artist names with events across different ticketing websites and timezones`,
    ],
    lang: [
      "Javascript",
      "Typescript",
      "WebSockets",
      "Nodejs",
      "Express",
      "Redis",
      "RESTful API",
      "Nodejs",
      "Figma",
      "ReactJs",
      "Typescript",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "Devkit",
    tip: "Team was awesome",
    startDate: "May 2024",
    endDate: "Present",
    location: "Remote, India",
    description: [
      `Designed and developed the Devkit website from scratch, crafting the UI/UX to boost user retention by 50%.`,
      `Added features: Payment Gateways, In-app Purchase System, AI-based Resume Review, and more.`,
      `Fixed backend security flaws, streamlined user onboarding, and optimized queries to reduce database I/O.`,
      `Deployed 4+ applications on AWS and Cloudflare, fully automating with CI/CD pipelines via GitHub Actions.`,
    ],
    lang: [
      "Javascript",
      "Typescript",
      "Python",
      "WebSockets",
      "RESTful API",
      "Nodejs",
      "Figma",
      "NextJs",
      "Typescript",
    ],
  },
  {
    title: "Full Stack Engineer Intern",
    company: "useForward",
    tip: "Work culture was awesome here",
    startDate: "March 2024",
    endDate: "April 2024",
    location: "Remote, USA",
    description: [
      `Built a prototype to integrate real-time Discord announcements into the extension, boosting user retention by 25%.`,
      "Optimized backend, reducing response time by 100ms and enhancing flexibility for future modifications.",
      "Improved user experience and retention by 50% through UI issue resolution and enhanced responsiveness.",
    ],
    lang: [
      "Javascript",
      "Typescript",
      "Python",
      "WebSockets",
      "RESTful API",
      "Nodejs",
      "Figma",
      "NextJs",
      "Typescript",
    ],
  },
  {
    title: "Full Stack Engineer ",
    tip: "Clients loved my work",
    company: "Freelancer",
    startDate: "Jan 2023",
    endDate: "Present",
    location: "Remote",
    description: [
      "Improved the performance and visuals of Next.js-based full-Stack website that boosted user retention by 40%.",
      "Built tools for client automating their Discord server store which resulted in an 80% increase in profits.",
      "Eliminated 100% manual updates in Next.js-based Full Stack app by integration CMS.",
    ],
    lang: [
      "Javascript",
      "React",
      "RESTful API",
      "Nodejs",
      "Sanity",
      "Websockets",
      "NextJs",
      "Figma",
      "Discord API",
      "Typescript",
    ],
  },
  {
    title: "Full Stack Engineer",
    tip: "I'm a fast learner",
    company: "Open Source",
    startDate: "Nov 2023",
    endDate: "Present",
    location: "Remote",
    description: [
      "Awarded $50 bounty for enhancing a video player for an ed-tech website, benefiting over 10k students.",
      "Awarded $500 Bounty for Assisting in adding thumbnail preview in video player.",
      "Completed IIT-Kharagpur open-source competition by merging 2 PRs into its projects.",
    ],
    lang: [
      "Javascript",
      "React",
      "RESTful API",
      "Nodejs",
      "Sanity",
      "Websockets",
      "NextJs",
      "Figma",
      "Discord API",
      "Typescript",
    ],
  },
  {
    title: "Full Stack Engineer Intern",
    tip: "First Internship",
    company: "Sparks Foundation",
    startDate: "Oct 2023",
    endDate: "Nov 2023",
    location: "Remote, Singapore",
    description: [
      "Developed a full stack application using Next.js, Express.js, and MongoDB.",
      "Implemented a RESTful API for the application.",
      "Utilized AWS S3 to store and serve images for the application.",
      "Implemented a CI/CD pipeline using GitHub Actions and AWS Elastic Beanstalk.",
    ],
    lang: ["Javascript", "React", "RESTful API", "Nodejs", "Typescript"],
  },
];
export const Experience = () => {
  return (
    <SectionWrapper>
      <div
        className="mt-8 flex justify-center items-center flex-col md:py-8"
        id="work"
      >
        <div className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk md:before:content-['<>'] before:h-[300px] before:text-[250px] before:text-gray-500/50 before:font-[700] before:-z-10  before:select-none before:translate-x-[-280%] before:translate-y-[-10%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute text-[65px] md:text-[96px] text-text_primary relative" />
        <div className="text-sky-200/95 text-3xl md:text-8xl font-bold font-grotesk 2xl:before:content-['&&'] before:h-[300px] before:text-[250px] before:text-gray-500/50 before:font-[700] before:-z-10  before:select-none before:translate-x-[180%] before:translate-y-[-10%] webkit_text_stroke before:opacity-[0.25] before:tracking-[-.1em] before:absolute text-[65px] md:text-[96px] text-text_primary absolute" />

        <Tip tip="there's more trust me" className="self-center">
          <h1 className="font-jetbrain text-center text-5xl mb-16">
            <span className=" text-green-300">code</span>
            <span className="text-foreground">:</span>
            <span className=" text-cyan-300">work</span>
          </h1>
        </Tip>
        <div className="w-full flex justify-center items-center flex-col">
          <>
            {experience.map((exp, index) => {
              return <Work key={index} {...exp} />;
            })}
          </>
        </div>
      </div>
    </SectionWrapper>
  );
};
