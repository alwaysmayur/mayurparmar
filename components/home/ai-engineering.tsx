import Link from "next/link";
import Section from "./section";
import ProjectList from "@/components/project/project-list";
import { aiData } from "@/lib/data";

export default function AiEngineeringTeaser() {
  return (
    <Section
      id="ai-engineering"
      title="AI Engineering"
      description="Building intelligent systems by combining full-stack engineering with LLMs, structured data, and semantic matching."
    >
      <ProjectList projects={aiData} basePath="/ai" headingLevel="h3" />
      <Link
        href="/ai"
        className="mt-6 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View all AI work →
      </Link>
    </Section>
  );
}
