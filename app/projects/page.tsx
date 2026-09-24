import type { Metadata } from "next";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import ProjectList from "@/components/project/project-list";
import { workData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Projects",
  description: "Production systems, platforms, and engineering experiments by Mayur Parmar.",
  alternates: { canonical: "/projects" },
};

export default function ProjectsPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Projects" }]} />

      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
        Production systems, platforms, and engineering experiments.
      </p>

      <ProjectList className="mt-10" projects={workData} basePath="/projects" />
    </div>
  );
}
