import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project/project-case-study";
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

  return (
    <ProjectCaseStudy projects={workData} index={index} basePath="/projects" sectionLabel="Projects" />
  );
}
