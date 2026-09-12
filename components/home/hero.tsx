import Link from "next/link";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import CodeBlock from "@/components/ui/code-block";
import { socialLinks, resumeUrl } from "@/lib/data";

const profileSnippet = `const engineer = {
  name: "Mayur Parmar",
  role: "Full-Stack AI Engineer",
  stack: ["Next.js", "Node.js", "TypeScript"],
  focus: ["Web Platforms", "AI/LLM Systems"],
};`;

export default function Hero() {
  return (
    <div className="border-b border-border-subtle pb-10">
      <Breadcrumbs items={[{ label: "Introduction" }]} />

      <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <p className="font-mono text-sm text-accent">Mayur Parmar</p>
          <h1 className="mt-3 text-[34px] font-bold leading-tight tracking-tight text-foreground sm:text-[40px]">
            Full-Stack AI Engineer
          </h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-muted-foreground">
            I build scalable web applications, backend systems, and AI-powered products.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex h-10 items-center rounded-md bg-accent px-4 text-sm font-medium text-accent-foreground transition-colors hover:bg-accent-hover"
            >
              Explore Projects
            </Link>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              GitHub
            </a>
            <a
              href={resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center rounded-md border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Resume
            </a>
          </div>
        </div>

        <CodeBlock code={profileSnippet} language="ts" />
      </div>
    </div>
  );
}
