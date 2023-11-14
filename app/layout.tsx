import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayur Parmar",
  description:
    "Mayur Parmar: Passionate Fullstack Web Developer crafting seamless digital experiences. Expertise in front-end and back-end technologies, delivering innovative solutions for a dynamic online world. Explore Mayur's portfolio for cutting-edge web development and transformative code creations",
  icons: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
