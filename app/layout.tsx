import type { Metadata } from "next";
import { Playfair_Display, Dancing_Script } from "next/font/google";
import "./globals.css";
import MusicPlayer from "@/components/music-player";
import ProgressBar from "@/components/progress-bar";
import PageDecor from "@/components/page-decor";
import SiteFooter from "@/components/site-footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const dancingScript = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing",
});

export const metadata: Metadata = {
  title: "For Her",
  description: "A birthday memory site made with love.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${dancingScript.variable}`}>
        <PageDecor />
        <ProgressBar />
        <MusicPlayer />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}