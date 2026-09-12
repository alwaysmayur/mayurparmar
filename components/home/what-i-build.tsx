import Section from "./section";

const items = [
  {
    title: "Web Platforms",
    description:
      "End-to-end e-commerce and business platforms — product catalogs, checkout flows, admin dashboards, and CMS-driven multi-site systems.",
  },
  {
    title: "Backend Systems",
    description:
      "APIs, authentication, and data layers designed for maintainability — from role-based access control to payment integrations.",
  },
  {
    title: "AI-Powered Products",
    description:
      "Systems that turn unstructured input into structured, scored decisions — see the AI Engineering section for a concrete example.",
  },
];

export default function WhatIBuild() {
  return (
    <Section id="what-i-build" title="What I Build">
      <div className="space-y-5">
        {items.map((item) => (
          <div key={item.title}>
            <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
            <p className="mt-1.5 text-[15px] leading-[1.7] text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
