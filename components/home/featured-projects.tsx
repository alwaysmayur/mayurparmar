import Link from "next/link";
import Section from "./section";
import ProjectThumbnail from "@/components/project/project-thumbnail";
import { workData } from "@/lib/data";

export default function FeaturedProjects() {
  const projects = workData.slice(0, 4);

  return (
    <Section
      id="featured-projects"
      title="Featured Projects"
      description="Production systems, platforms and engineering experiments."
    >
      <div className="divide-y divide-border-subtle">
        {projects.map((project) => (
          <div key={project.slug} className="flex flex-col gap-5 py-5 first:pt-0 sm:flex-row sm:items-start">
            <ProjectThumbnail
              className="sm:w-64 sm:shrink-0"
              src={project.imageUrl}
              alt={`${project.title} screenshot`}
              sizes="(min-width: 640px) 256px, 100vw"
            />
            <div className="min-w-0">
              <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
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

      <Link
        href="/projects"
        className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View all projects →
      </Link>
    </Section>
  );
}
