import Link from "next/link";
import Section from "./section";

export default function AiEngineeringTeaser() {
  return (
    <Section
      id="ai-engineering"
      title="AI Engineering"
      description="Building intelligent systems by combining full-stack engineering with LLMs, structured data, and semantic matching."
    >
      <h3 className="text-lg font-semibold text-foreground">Match Making</h3>
      <p className="mt-1.5 text-[15px] leading-[1.7] text-muted-foreground">
        A matching system that converts free-text client briefs into structured data, then
        scores candidates against it by location, skills, style, experience, and budget fit —
        returning a match score with an explanation.
      </p>
      <Link
        href="/ai"
        className="mt-2 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        Read AI case study →
      </Link>
    </Section>
  );
}
