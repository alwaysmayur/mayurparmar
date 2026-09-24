import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectCaseStudy from "@/components/project/project-case-study";
import { aiData } from "@/lib/data";

export function generateStaticParams() {
  return aiData.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = aiData.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/ai/${project.slug}` },
  };
}

export default function AiProjectPage({ params }: { params: { slug: string } }) {
  const index = aiData.findIndex((p) => p.slug === params.slug);
  if (index === -1) notFound();

  return <ProjectCaseStudy projects={aiData} index={index} basePath="/ai" sectionLabel="AI Engineering" />;
}
