import type { APIRoute } from "astro";
import { getSiteBaseUrl } from "../data/site";

export const prerender = true;

export const GET: APIRoute = () => {
  const baseUrl = getSiteBaseUrl();
  const sitemapUrl = `${baseUrl}sitemap.xml`;
  const body = [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${sitemapUrl}`].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
};
