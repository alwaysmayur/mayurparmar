import { navGroups } from "./nav";
import { aiData, workData } from "./data";

export type SearchEntry = {
  title: string;
  category: string;
  description: string;
  href: string;
};

const navEntries: SearchEntry[] = navGroups.flatMap((group) =>
  group.items.map((item) => ({
    title: item.title,
    category: group.label,
    description: "",
    href: item.href,
  }))
);

const projectEntries: SearchEntry[] = workData.map((project) => ({
  title: project.title,
  category: "Projects",
  description: project.description,
  href: `/projects/${project.slug}`,
}));

const aiEntries: SearchEntry[] = aiData.map((project) => ({
  title: project.title,
  category: "AI Engineering",
  description: project.description,
  href: `/ai/${project.slug}`,
}));

export const searchIndex: SearchEntry[] = [...navEntries, ...projectEntries, ...aiEntries];
