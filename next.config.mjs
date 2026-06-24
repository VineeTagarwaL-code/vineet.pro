import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let .md / .mdx files act as pages and be imported as components
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    domains: ["cdn.discordapp.com", "i.scdn.co", "raw.githubusercontent.com"], // Add 'cdn.discordapp.com' to the list of allowed domains
  },
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
