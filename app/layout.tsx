import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import ThemeProvider from "@/components/providers/theme-provider";
import DocsShell from "@/components/docs/docs-shell";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const siteUrl = "https://mayurparmar.vercel.app";
const description =
  "Full-Stack AI Engineer building scalable web applications, backend systems, and AI-powered products.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Mayur Parmar — Full-Stack AI Engineer",
    template: "%s — Mayur Parmar",
  },
  description,
  alternates: {
    canonical: "/",
  },
  icons: "/favicon.ico",
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Mayur Parmar — Full-Stack AI Engineer",
    description,
    siteName: "Mayur Parmar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mayur Parmar — Full-Stack AI Engineer",
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <DocsShell>{children}</DocsShell>
        </ThemeProvider>
      </body>
    </html>
  );
}
