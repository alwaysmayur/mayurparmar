import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import WhatIBuild from "@/components/home/what-i-build";
import EngineeringStack from "@/components/home/engineering-stack";
import FeaturedProjects from "@/components/home/featured-projects";
import AiEngineeringTeaser from "@/components/home/ai-engineering";
import ExperienceTeaser from "@/components/home/experience-teaser";
import { socialLinks } from "@/lib/data";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mayur Parmar",
  jobTitle: "Full-Stack AI Engineer",
  url: "https://mayurparmar.vercel.app",
  sameAs: [socialLinks.github, socialLinks.linkedin],
};

export default function Home() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      <Hero />
      <Overview />
      <WhatIBuild />
      <EngineeringStack />
      <FeaturedProjects />
      <AiEngineeringTeaser />
      <ExperienceTeaser />
    </div>
  );
}
