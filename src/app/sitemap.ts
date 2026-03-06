import type { MetadataRoute } from "next";

const BASE_URL = "https://dreamhairstudio.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { url: "", priority: 1.0 },
    { url: "/about", priority: 0.8 },
    { url: "/services", priority: 0.9 },
    { url: "/staff", priority: 0.8 },
    { url: "/gallery", priority: 0.7 },
    { url: "/reviews", priority: 0.7 },
    { url: "/contact", priority: 0.8 },
    { url: "/booking", priority: 0.9 },
  ];

  return pages.map((page) => ({
    url: `${BASE_URL}${page.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: page.priority,
  }));
}
