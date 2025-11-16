import type { APIRoute } from "astro";
import { trips } from "../data/trips";
import { absoluteUrl } from "../utils/seo";
import { isTripUpcoming } from "../types";

export const prerender = true;

const staticPages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/trips", changefreq: "daily", priority: "0.9" },
  { path: "/history", changefreq: "yearly", priority: "0.4" },
  { path: "/winter-sports", changefreq: "yearly", priority: "0.5" },
  { path: "/join", changefreq: "monthly", priority: "0.6" },
  { path: "/gallery", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/board", changefreq: "yearly", priority: "0.3" },
];

const formatUrl = (loc: string, lastmod: string, changefreq: string, priority: string) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>
`;

export const GET: APIRoute = () => {
  const now = new Date().toISOString();

  const urls = [
    ...staticPages.map((page) =>
      formatUrl(absoluteUrl(page.path), now, page.changefreq, page.priority)
    ),
    ...trips.map((trip) => {
      const pageUrl = absoluteUrl(`/trips/${trip.slug}`);
      const lastmod = new Date(trip.endDate ?? trip.startDate).toISOString();
      const isFutureTrip = isTripUpcoming(trip);
      const changefreq = isFutureTrip ? "weekly" : "yearly";
      const priority = isFutureTrip ? "0.8" : "0.4";
      return formatUrl(pageUrl, lastmod, changefreq, priority);
    }),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
