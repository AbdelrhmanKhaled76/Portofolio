import type { Metadata, Viewport } from "next";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import BackToStart from "./_components/ui/backToStart";
import dynamic from "next/dynamic";

config.autoAddCss = false;

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
};

export const metadata: Metadata = {
  title: "Abdelrhman Khaled's Portfolio",
  description:
    "Explore the portfolio of Abdelrhman Khaled, a full-stack developer skilled in React, Next.js, Tailwind CSS, Angular, and clean code practices. This site showcases frontend and backend projects, emphasizing performance, design, and RESTful API integration.",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Angular",
    "Frontend Developer",
    "Backend Developer",
    "RESTful APIs",
    "Full-stack Developer",
    "Clean Code",
    "Web Development",
  ],
  authors: [
    {
      name: "Abdelrhman Khaled",
    },
  ],
  icons: {
    icon: "/icons/logo.png",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Nav = dynamic(() => import("./_components/layout/nav"), {
    ssr: true,
  });
  const Footer = dynamic(() => import("./_components/layout/footer"), {
    ssr: true,
  });
  return (
    <html lang="en">
      <body
        className={`antialiased bg-white text-black dark:bg-black dark:text-white relative overflow-x-hidden`}
      >
        <Nav />
        {children}
        <Footer />
        <BackToStart />
      </body>
    </html>
  );
}
