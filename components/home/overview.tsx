import Section from "./section";
import { aboutMe } from "@/lib/data";

export default function Overview() {
  return (
    <Section id="overview" title="Overview">
      <div className="max-w-2xl space-y-4 text-[15px] leading-[1.7] text-muted-foreground">
        {aboutMe.slice(0, 2).map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
