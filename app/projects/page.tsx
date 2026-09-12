import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import ProjectThumbnail from "@/components/project/project-thumbnail";
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

      <div className="mt-10 divide-y divide-border-subtle">
        {workData.map((project) => (
          <div key={project.slug} className="flex flex-col gap-5 py-6 first:pt-0 sm:flex-row sm:items-start">
            <ProjectThumbnail
              className="sm:w-64 sm:shrink-0"
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              sizes="(min-width: 640px) 256px, 100vw"
            />
            <div className="min-w-0">
              <h2 className="text-lg font-semibold text-foreground">{project.title}</h2>
              <p className="mt-1.5 line-clamp-3 text-[15px] leading-[1.7] text-muted-foreground">
                {project.description}
              </p>
              <p className="mt-2 font-mono text-[13px] text-subtle-foreground">
                {project.technologies.join(" · ")}
              </p>
              <Link
                href={`/projects/${project.slug}`}
                className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
              >
                Read case study →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
