import type { Metadata } from "next";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import { experienceData } from "@/lib/data";

export const metadata: Metadata = {
  title: "Experience",
  description: "Professional experience timeline for Mayur Parmar.",
  alternates: { canonical: "/experience" },
};

export default function ExperiencePage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Experience" }]} />
      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">
        Experience
      </h1>

      <div className="mt-8 space-y-10">
        {experienceData.map((job) => (
          <div key={`${job.title}-${job.companyName}`} className="border-l-2 border-border pl-5">
            <h2
              id={job.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}
              className="scroll-mt-24 text-base font-semibold text-foreground"
            >
              {job.title}
              <a
                href={job.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-normal text-accent hover:underline"
              >
                @ {job.companyName}
              </a>
            </h2>
            <p className="mt-1 font-mono text-xs text-muted-foreground">{job.duration}</p>

            <div className="mt-4 space-y-4">
              {job.projects.map((project) => (
                <div key={project.name}>
                  <h3 className="text-sm font-semibold text-foreground">{project.name}</h3>
                  <ul className="mt-2 list-disc space-y-1.5 pl-4 text-sm text-muted-foreground">
                    {project.details.map((detail) => (
                      <li key={detail.slice(0, 32)}>{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
