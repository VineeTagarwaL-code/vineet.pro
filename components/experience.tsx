import { Tip } from "./ui/tip";
import { SectionWrapper } from "./section-wrapper";
import { Experience as experienceType } from "@/lib/types";
import { Work } from "./work";


const experience: experienceType[] = [
  {
    title: "Software Engineer Intern",
    company: "Devkit",
    tip: "Currently Working Here",
    startDate: "May 2024",
    endDate: "Present",
    location: "Remote, India",
    description: [
      `Built Nextjs Based landing page for the company, resulting in a 30% increase in user engagement.`,
    ],
    lang: [
      "Javascript",
      "Typescript",
      "Python",
      "WebSockets",
      "RESTful API",
      "Nodejs",
      "Fima",
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
      `Developed a prototype to integrate real-time Discord announcements into the extension for enhanced functionality,
            Resulting a 25% boost in user retention.`,
      "Optimitized backend, reducing response time by 100ms and enhancing flexibility for future modifications.",
      "Improved user experience and retention by 50% through UI issue resolution and enhanced responsiveness.",
    ],
    lang: [
      "Javascript",
      "Typescript",
      "Python",
      "WebSockets",
      "RESTful API",
      "Nodejs",
      "Fima",
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
      "Fima",
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
      "Fima",
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
