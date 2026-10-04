// app/sitemap.js
import { SITE_URL, SERVICES, CITIES } from "@/lib/site";

export default function sitemap() {
  const now = new Date();
  const pages = [
    { path: "", priority: 1 },
    { path: "/builder", priority: 0.9 },
    ...SERVICES.map((s) => ({ path: `/services/${s.slug}`, priority: 0.8 })),
    ...CITIES.map((c) => ({ path: `/areas/${c.slug}`, priority: 0.7 })),
  ];
  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    priority,
  }));
}
