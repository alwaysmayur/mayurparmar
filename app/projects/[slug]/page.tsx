import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import PageNav from "@/components/docs/page-nav";
import Badge from "@/components/ui/badge";
import ProjectThumbnail from "@/components/project/project-thumbnail";
import { workData } from "@/lib/data";

export function generateStaticParams() {
  return workData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = workData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}` },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = workData.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  const project = workData[index];
  const prev = workData[index - 1];
  const next = workData[index + 1];

  return (
    <div>
      <Breadcrumbs items={[{ label: "Projects", href: "/projects" }, { label: project.title }]} />

      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">
        {project.title}
      </h1>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-1.5">
        <Badge variant="accent">Production</Badge>
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

      <h2 id="links" className="mt-14 text-[24px] font-semibold tracking-tight text-foreground">
        Links
      </h2>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View live project →
      </a>

      <PageNav
        prev={prev ? { title: prev.title, href: `/projects/${prev.slug}` } : undefined}
        next={next ? { title: next.title, href: `/projects/${next.slug}` } : undefined}
      />
    </div>
  );
}
