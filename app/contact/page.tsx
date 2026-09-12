import type { Metadata } from "next";
import Breadcrumbs from "@/components/docs/breadcrumbs";
import { socialLinks } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Mayur Parmar.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <div>
      <Breadcrumbs items={[{ label: "Contact" }]} />
      <h1 className="text-[34px] font-bold tracking-tight text-foreground sm:text-[40px]">
        Contact
      </h1>
      <p className="mt-2 max-w-xl text-sm text-muted-foreground">
        Although I&apos;m currently exploring new opportunities, my inbox is always open. Whether
        you have a question or simply want to say hello, I&apos;ll try my best to get back to
        you.
      </p>

      <div className="mt-8 flex flex-col gap-2 text-sm">
        <a href={`mailto:${socialLinks.email}`} className="text-accent hover:underline">
          {socialLinks.email}
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          GitHub
        </a>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
