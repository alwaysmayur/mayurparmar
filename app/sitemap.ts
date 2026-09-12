import type { MetadataRoute } from "next";
import { workData } from "@/lib/data";

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

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
