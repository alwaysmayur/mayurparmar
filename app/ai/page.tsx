import type { Metadata } from "next";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import ProjectList from "@/components/project/project-list";
import { aiData } from "@/lib/data";

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

      <ProjectList className="mt-10" projects={aiData} basePath="/ai" />
    </div>
  );
}
