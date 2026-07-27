import type { MetadataRoute } from "next";

import { servicePages } from "@/lib/services-data";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/generacni-obmena`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicePages.map((service) => ({
      url: `${SITE_URL}/sluzby/${service.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
