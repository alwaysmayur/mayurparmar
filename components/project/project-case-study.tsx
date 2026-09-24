import Breadcrumbs from "@/components/docs/breadcrumbs";
import PageNav from "@/components/docs/page-nav";
import Badge from "@/components/ui/badge";
import ProjectThumbnail from "@/components/project/project-thumbnail";
import type { Project } from "@/lib/data";

const linkClass =
  "inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline";

export default function ProjectCaseStudy({
  projects,
  index,
  basePath,
  sectionLabel,
}: {
  projects: Project[];
  index: number;
  /** Route prefix for this collection, e.g. "/projects" or "/ai". */
  basePath: string;
  /** Breadcrumb label for the collection's index page. */
  sectionLabel: string;
}) {
  const project = projects[index];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <div>
      <Breadcrumbs items={[{ label: sectionLabel, href: basePath }, { label: project.title }]} />

      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        <Badge variant="accent">{project.status ?? "Production"}</Badge>
        {project.technologies.map((tech) => (
          <Badge key={tech}>{tech}</Badge>
        ))}
      </div>

      <ProjectThumbnail
        className="mt-8"
        src={project.imageUrl}
        alt={`${project.title} screenshot`}
        priority
      />

      <h2 id="overview" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
        Overview
      </h2>
      <p className="mt-5 text-[15px] leading-[1.7] text-muted-foreground">{project.description}</p>

      <h2 id="role" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
        Role
      </h2>
      <p className="mt-5 text-[15px] leading-[1.7] text-muted-foreground">
        Full-stack development — design, frontend, and backend.
      </p>

      <h2 id="stack" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
        Technology
      </h2>
      <ul className="mt-5 flex flex-wrap gap-2">
        {project.technologies.map((tech) => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>

      <h2 id="features" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
        Features
      </h2>
      <ul className="mt-5 list-disc space-y-1.5 pl-5 text-[15px] leading-[1.7] text-muted-foreground">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {(project.link || project.github) && (
        <>
          <h2 id="links" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
            Links
          </h2>
          <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
                View live project →
              </a>
            )}
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className={linkClass}>
                View on GitHub →
              </a>
            )}
          </div>
        </>
      )}

      <PageNav
        prev={prev ? { title: prev.title, href: `${basePath}/${prev.slug}` } : undefined}
        next={next ? { title: next.title, href: `${basePath}/${next.slug}` } : undefined}
      />
    </div>
  );
}
