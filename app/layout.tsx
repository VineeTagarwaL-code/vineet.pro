import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
const inter = Inter({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--space-grotesk",
});
const JetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--jetbrains-mono",
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "vineet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/image.ico" sizes="32x32" />
        <script
          defer
          src="https://analytics.us.umami.is/script.js"
          data-website-id="c3b5ab9c-c688-4432-af2c-e04fe5779ca5"
        ></script>
      </Head>
      <body
        className={cn(
          inter.className,
          spaceGrotesk.variable,
          JetBrainsMono.variable,
        )}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
