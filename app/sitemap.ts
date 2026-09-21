import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-09-18"),
      changeFrequency: "monthly",
      priority: 1,
      images: [absoluteUrl(siteConfig.image)],
    },
  ];
}
