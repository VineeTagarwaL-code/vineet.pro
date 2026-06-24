export type Post = {
  slug: string; // folder name under app/writing/<slug>
  title: string;
  description: string;
  date: string; // human-readable
  readingTime: string;
  tags: string[];
};

/**
 * The list that powers the /writing index.
 * To publish a new post: create app/writing/<slug>/page.mdx, then add an
 * entry here. That's the whole workflow.
 */
export const posts: Post[] = [
  {
    slug: "quantization",
    title: "Quantization, finally explained",
    description:
      "I spent too long thinking quantization was scary. It isn't. An AI is just a list of numbers, and quantization is basically rounding them off. Built up one interactive piece at a time.",
    date: "Jun 24, 2026",
    readingTime: "6 min read",
    tags: ["ml", "explainer", "interactive"],
  },
];
