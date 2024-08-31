import { Project } from "@/lib/types";

const Projects: Project[] = [
  {
    title: "OrganLink",
    tip: "made in punjab",
    description:
      "When Life is at sake & time is a factor OrganLink comes for rescue.",
    lang: ["Typescript", "NextJs", "WebSockets"],

    github: "https://github.com/VineeTagarwaL-code/OrganLink",
  },
  {
    title: "DevTest",
    tip: "made in rourkela",
    description: "What if google meet & Replit had a baby.",
    lang: ["NextJs", "Typescript", "LiveKit", "Judge0 API"],

    github: "https://github.com/VineeTagarwaL-code/devtest",
  },
  {
    title: "GoMon",
    tip: "made in 127.0.0.1",
    description: "Nodemon alternative for GoLang.",
    lang: ["Go"],
    onProgress: false,

    github: "https://github.com/VineeTagarwaL-code/gomon",
  },
  {
    title: "Vineet.tech",
    tip: "made in localhost",
    description: "A portfolio handcrafter by me in 7hours.",
    lang: ["NextJs", "WebSockets", "Shadcn", "Framer-motion", "Discord"],

    link: "https://vineet.tech/",
  },
];

export default Projects;
