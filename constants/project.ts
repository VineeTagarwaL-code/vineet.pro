import { Project } from "@/lib/types";

const Projects: Project[] = [
  {
    title: "Upbot",
    tip: "Made in Cloud",
    description:
      "A Serverless deployment monitoring tool solving the cold start problem.",
    lang: ["Typescript", "NextJs", "Go", "AWS", "Microservices"],
    link: "https://upbot.vineet.pro",
  },
  {
    title: "Watermark Removal",
    tip: "Made in Cloud",
    description: "A tool to remove watermarks from images.",
    lang: [
      "NextJs",
      "Typescript",
      "TailwindCSS",
      "AWS",
      "Microservices",
      "Gemini API",
      "Redis",
    ],

    link: "https://watermark.vineet.pro",
  },
  {
    title: "V3CN",
    tip: "Made in Cloud",
    description: "Get Components like nowhere else.",
    lang: ["NextJs", "Typescript", "TailwindCSS", "Github API", "Vercel"],
    link: "https://v3cn.vineet.pro",
  },
  {
    title: "Vineet.pro",
    tip: "made in localhost",
    description: "A portfolio handcrafter by me in 7hours.",
    lang: ["NextJs", "WebSockets", "Shadcn", "Framer-motion", "Discord"],
    link: "https://vineet.pro",
  },
];

export default Projects;
