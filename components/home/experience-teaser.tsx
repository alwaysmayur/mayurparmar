import Link from "next/link";
import Section from "./section";
import { experienceData } from "@/lib/data";

export default function ExperienceTeaser() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {experienceData.map((job) => (
          <div key={`${job.title}-${job.companyName}`}>
            <h3 className="text-[15px] font-semibold text-foreground">
              {job.title}
              <span className="font-normal text-muted-foreground"> — {job.companyName}</span>
            </h3>
            <p className="mt-0.5 font-mono text-xs text-subtle-foreground">{job.duration}</p>
          </div>
        ))}
      </div>
      <Link
        href="/experience"
        className="mt-4 inline-block text-sm font-medium text-accent hover:text-accent-hover hover:underline"
      >
        View full experience timeline →
      </Link>
    </Section>
  );
}
