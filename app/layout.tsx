import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "aos/dist/aos.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mayur Parmar | Full-Stack Developer",
  description:
    "Mayur Parmar is a Full-Stack Developer specialized in React, Next.js, Node.js, and MongoDB. Building fast, scalable web apps and polished user experiences.",
  icons: "/favicon.ico",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth overflow-x-hidden">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
