import { Tip } from "./ui/tip";
import { SectionWrapper } from "./section-wrapper";
import { Experience as experienceType } from "@/lib/types";
import { Work } from "./work";

const experience: experienceType[] = [
  {
    title: "Full Stack Engineer Intern",
    company: "useForward",
    tip: "Work culture was awesome here",
    date: "March 2024 - Present",
    location: "Remote, USA",
    description: [
      `Developed a prototype to integrate real-time Discord announcements into the extension for enhanced functionality,
            Resulting a 25% boost in user retention`,
      "Optimizatized backend, reducing response time by 100ms and enhancing flexibility for future modifications.",
      "Improved user experience and retention by 50% through UI issue resolution and enhanced responsiveness",
    ],
    lang: [
      "Javascript",
      "Typescript",
      "Python",
      "WebSockets",
      "RESTful API",
      "Nodejs",
      "figma",
      "NextJs",
      "Typecript",
    ],
  },
  {
    title: "Full Stack Engineer ",
    tip: "Client loved my work",
    company: "Freelancer",
    date: "Jan 2023 - Present",
    location: "Remote",
    description: [
      "Improved the performance and visuals of Next.js-based full-Stack website that boosted user retention by 40%",
      "Built tools for client automating their Discord server store which resulted in an 80% increase in profits.",
      "Eliminated 100% manual updates in Next.js-based Full Stack app by integration CMS",
    ],
    lang: [
      "Javascript",
      "React",
      "RESTful API",
      "Nodejs",
      "Sanity",
      "Websockets",
      "NextJs",
      "figma",
      "Discord API",
      "Typecript",
    ],
  },
  {
    title: "Full Stack Engineer",
    tip: "I'm a fast learner",
    company: "Open Source",
    date: "Nov 2023 - Present",
    location: "Remote",
    description: [
      "Awarded $50 bounty for enhancing a video player for an ed-tech website, benefiting over 10k students.(",
      "Awarded $500 Bounty for Assisting in adding thumbnail preview in video player.",
      "Completed IIT-Kharagpur open-source competition by merging 2 PRs into its projects(",
    ],
    lang: [
      "Javascript",
      "React",
      "RESTful API",
      "Nodejs",
      "Sanity",
      "Websockets",
      "NextJs",
      "figma",
      "Discord API",
      "Typecript",
    ],
  },
  {
    title: "Full Stack Engineer Intern",
    tip: "First Internship",
    company: "Sparks Foundation",
    date: "Oct 2023 - Nov 2023",
    location: "Remote, Singapore",
    description: [
      "Developed a full stack application using Next.js, Express.js, and MongoDB.",
      "Implemented a RESTful API for the application.",
      "Utilized AWS S3 to store and serve images for the application.",
      "Implemented a CI/CD pipeline using GitHub Actions and AWS Elastic Beanstalk.",
    ],
    lang: ["Javascript", "React", "RESTful API", "Nodejs", "Typecript"],
  },
];
export const Experience = () => {
  return (
    <SectionWrapper>
      <div className="mt-8 flex justify-center items-center flex-col">
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
