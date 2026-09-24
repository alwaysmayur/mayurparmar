import type { MetadataRoute } from "next";
import { aiData, workData } from "@/lib/data";

const baseUrl = "https://mayurparmar.vercel.app";

const staticRoutes = [
  "",
  "/projects",
  "/ai",
  "/experience",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = workData.map((project) => `/projects/${project.slug}`);

  const aiRoutes = aiData.map((project) => `/ai/${project.slug}`);

  return [...staticRoutes, ...projectRoutes, ...aiRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
