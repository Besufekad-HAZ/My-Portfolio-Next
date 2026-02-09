import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Components
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: "Besufekad Alemu | Full-Stack Developer",
  description:
    "Full-stack developer with 5+ years of experience building scalable web applications. Skilled in React, Next.js, Node.js, TypeScript, and more.",
  keywords: [
    "Besufekad Alemu",
    "Full-Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Portfolio",
    "Ethiopia",
  ],
  authors: [{ name: "Besufekad Alemu" }],
  openGraph: {
    title: "Besufekad Alemu | Full-Stack Developer",
    description:
      "Full-stack developer with 5+ years of experience building scalable web applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} overflow-x-hidden`}>
        <Header />
        <StairTransition />
        <main className="min-h-screen">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
