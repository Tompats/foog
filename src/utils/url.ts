import { defaultLocale, type Locale } from "../i18n/ui";

const baseEnv = import.meta.env.BASE_URL ?? "/";
const sanitizedBase = baseEnv === "/"
  ? ""
  : baseEnv.replace(/\/$/, "");

/**
 * Prefix a relative path with Astro's configured base so links work in sub-path deployments.
 *
 * Route paths are also normalized to end with a trailing slash, matching how
 * every page actually gets served (e.g. `/trips/index.html`). Without this,
 * every internal link points at a URL one hop away from the real page —
 * GitHub Pages 301-redirects `/trips` to `/trips/` — which wastes crawl
 * budget and muddies canonical/hreflang signals for Google. File-like paths
 * (an extension in the last segment, e.g. `/favicon.png`) are left alone.
 */
export const withBase = (path = "/") => {
  if (!path || path === "/") {
    return sanitizedBase ? `${sanitizedBase}/` : "/";
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  const lastSegment = normalizedPath.split("/").pop() ?? "";
  const isFile = lastSegment.includes(".");
  const pathWithTrailingSlash =
    isFile || normalizedPath.endsWith("/") ? normalizedPath : `${normalizedPath}/`;
  return `${sanitizedBase}/${pathWithTrailingSlash}`;
};

/**
 * Build a link to `path` in the given locale (prefixed with `/en` for non-default
 * locales, matching Astro's `prefixDefaultLocale: false` i18n routing).
 */
export const withLocale = (locale: Locale, path = "/") => {
  const normalizedPath = path === "/" || !path
    ? ""
    : path.startsWith("/")
      ? path
      : `/${path}`;
  const localePrefix = locale === defaultLocale ? "" : `/${locale}`;
  return withBase(`${localePrefix}${normalizedPath}` || "/");
};

/**
 * Split a raw `Astro.url.pathname` into its locale and locale-free path, so
 * callers (hreflang tags, the language switcher) can build links to the
 * equivalent page in the other locale.
 */
export const splitLocaleFromPathname = (pathname: string): { locale: Locale; path: string } => {
  const withoutBase = sanitizedBase && pathname.startsWith(sanitizedBase)
    ? pathname.slice(sanitizedBase.length) || "/"
    : pathname;

  const match = withoutBase.match(/^\/en(\/.*)?$/);
  if (match) {
    return { locale: "en", path: match[1] || "/" };
  }

  return { locale: "el", path: withoutBase || "/" };
};
