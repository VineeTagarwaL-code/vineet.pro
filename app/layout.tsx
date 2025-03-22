import "./globals.css";

import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";

import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import type { Metadata } from "next";
import Script from "next/script";
import { Toaster } from "@/components/ui/toaster";
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <body
        className={cn(
          inter.className,
          spaceGrotesk.variable,
          JetBrainsMono.variable
        )}
      >
        <Toaster />
        {children}
        <Script
          defer
          src="https://stats.vineet.pro/script.js"
          data-website-id="c165cf84-ecb7-4f50-b801-8664643291ad"
        ></Script>
      </body>
    </html>
  );
}
