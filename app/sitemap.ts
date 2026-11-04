import type { MetadataRoute } from "next";
import { SITE_URL, services, projects } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: SITE_URL, priority: 1, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/services`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/work`, priority: 0.9, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/studio`, priority: 0.7, changeFrequency: "yearly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.8, changeFrequency: "yearly" as const }
  ];
  const serviceRoutes = services.map(({ slug }) => ({ url: `${SITE_URL}/services/${slug}`, priority: 0.8, changeFrequency: "monthly" as const }));
  const projectRoutes = projects.map(({ slug }) => ({ url: `${SITE_URL}/work/${slug}`, priority: 0.8, changeFrequency: "monthly" as const }));
  return [...staticRoutes, ...serviceRoutes, ...projectRoutes];
}
