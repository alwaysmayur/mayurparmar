import Link from "next/link";
import ProjectThumbnail from "@/components/project/project-thumbnail";
import Badge from "@/components/ui/badge";
import type { Project } from "@/lib/data";

export default function ProjectList({
  projects,
  basePath,
  headingLevel = "h2",
  className = "",
}: {
  projects: Project[];
  /** Route prefix for case-study links, e.g. "/projects" or "/ai". */
  basePath: string;
  headingLevel?: "h2" | "h3";
  className?: string;
}) {
  const Heading = headingLevel;

  return (
    <div className={`divide-y divide-border-subtle ${className}`}>
      {projects.map((project) => (
        <div key={project.slug} className="flex flex-col gap-5 py-6 first:pt-0 sm:flex-row sm:items-start">
          <ProjectThumbnail
            className="sm:w-64 sm:shrink-0"
            src={project.imageUrl}
            alt={`${project.title} screenshot`}
            sizes="(min-width: 640px) 256px, 100vw"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <Heading className="text-lg font-semibold text-foreground">{project.title}</Heading>
              {project.status && <Badge variant="accent">{project.status}</Badge>}
            </div>
            <p className="mt-1.5 line-clamp-3 text-[15px] leading-[1.7] text-muted-foreground">
              {project.description}
            </p>
            <p className="mt-2 font-mono text-[13px] text-subtle-foreground">
              {project.technologies.join(" · ")}
            </p>
            <Link
              href={`${basePath}/${project.slug}`}
              className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
            >
              Read case study →
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
