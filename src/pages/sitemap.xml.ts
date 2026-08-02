import type { APIRoute } from "astro";
import { trips } from "../data/trips";
import { absoluteUrl } from "../utils/seo";
import { isTripUpcoming } from "../types";
import { getPastTripTotalPages } from "../utils/tripPagination";
import { withLocale } from "../utils/url";
import { locales, defaultLocale } from "../i18n/ui";

export const prerender = true;

const staticPages = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/trips", changefreq: "daily", priority: "0.9" },
  { path: "/announcements", changefreq: "weekly", priority: "0.4" },
  { path: "/history", changefreq: "yearly", priority: "0.4" },
  { path: "/winter-sports", changefreq: "yearly", priority: "0.5" },
  { path: "/join", changefreq: "monthly", priority: "0.6" },
  { path: "/gallery", changefreq: "monthly", priority: "0.5" },
  { path: "/contact", changefreq: "yearly", priority: "0.5" },
  { path: "/board", changefreq: "yearly", priority: "0.3" },
];

interface UrlEntry {
  /** Locale-free path (e.g. "/trips/some-slug"). */
  path: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

// Every entry is emitted once per locale, with xhtml:link alternates tying
// the locale variants together per Google's multilingual sitemap format.
const formatEntry = ({ path, lastmod, changefreq, priority }: UrlEntry) => {
  const alternateLinks = locales
    .map(
      (loc) =>
        `    <xhtml:link rel="alternate" hreflang="${loc}" href="${absoluteUrl(withLocale(loc, path))}" />`
    )
    .join("\n");
  const xDefaultLink = `    <xhtml:link rel="alternate" hreflang="x-default" href="${absoluteUrl(withLocale(defaultLocale, path))}" />`;

  return locales
    .map(
      (loc) => `  <url>
    <loc>${absoluteUrl(withLocale(loc, path))}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
${alternateLinks}
${xDefaultLink}
  </url>`
    )
    .join("\n");
};

export const GET: APIRoute = () => {
  const now = new Date().toISOString();
  const totalPastTripPages = getPastTripTotalPages();

  const entries: UrlEntry[] = [
    ...staticPages.map((page) => ({
      path: page.path,
      lastmod: now,
      changefreq: page.changefreq,
      priority: page.priority,
    })),
    ...Array.from({ length: Math.max(0, totalPastTripPages - 1) }, (_, index) => ({
      path: `/trips/page/${index + 2}`,
      lastmod: now,
      changefreq: "monthly",
      priority: "0.3",
    })),
    ...trips.map((trip) => {
      const isFutureTrip = isTripUpcoming(trip);
      return {
        path: `/trips/${trip.slug}`,
        lastmod: new Date(trip.endDate ?? trip.startDate).toISOString(),
        changefreq: isFutureTrip ? "weekly" : "yearly",
        priority: isFutureTrip ? "0.8" : "0.4",
      };
    }),
  ];

  const urls = entries.map(formatEntry).join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
};
