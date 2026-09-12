import type { Metadata } from "next";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import Badge from "@/components/ui/badge";

export const metadata: Metadata = {
  title: "AI Engineering",
  description: "AI and LLM engineering case studies by Mayur Parmar.",
  alternates: { canonical: "/ai" },
};

export default function AiPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "AI Engineering" }]} />
      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">
        AI Engineering
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
        Building intelligent systems by combining full-stack engineering with LLMs, structured
        data, and semantic matching.
      </p>

      <h2 id="match-making" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
        Match Making
      </h2>
      <div className="mt-5">
        <Badge variant="accent">Prototype</Badge>
      </div>
      <p className="mt-3 text-[15px] leading-[1.7] text-muted-foreground">
        Converts free-text client briefs into structured data, then scores candidates against it
        by location, skills, style, experience, portfolio tags, and budget fit, returning a match
        score with an explanation.
      </p>
      <a
        href="https://thematchmaking.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View project →
      </a>
    </div>
  );
}
