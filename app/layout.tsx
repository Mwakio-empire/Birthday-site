import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/music-player";
import ProgressBar from "@/components/progress-bar";
import PageDecor from "@/components/page-decor";
import SiteFooter from "@/components/site-footer";
import SiteHeader from "@/components/site-header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "A Birthday Story | Personalized Birthday Website Demo",
    template: "%s | A Birthday Story",
  },
  description:
    "Explore a fictional personalized birthday website with photos, memories, music, a quiz, hidden notes and a final letter.",
  keywords: [
    "personalized birthday website",
    "birthday website demo",
    "digital birthday gift",
    "custom birthday surprise",
  ],
  authors: [{ name: "Michael Mwakio" }],
  creator: "Michael Mwakio",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "A Birthday Story",
    description:
      "A fictional personalized birthday experience made from photos, memories, music and little surprises.",
    type: "website",
    images: [
      {
        url: "/images/social-preview.png",
        alt: "A Birthday Story personalized website demo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${playfair.variable} ${dancingScript.variable}`}>
        <PageDecor />
        <SiteHeader />
        <ProgressBar />
        <MusicPlayer />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
