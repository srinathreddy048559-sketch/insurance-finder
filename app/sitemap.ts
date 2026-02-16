import type { MetadataRoute } from "next";
import { STATES } from "@/app/data/states";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://insurancefinder.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/compare`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${baseUrl}/cheap-car-insurance`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  const stateRoutes: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${baseUrl}/cheap-car-insurance/${s.code}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...coreRoutes, ...stateRoutes];
}
