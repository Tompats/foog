import { defaultLocale, type Locale } from "../i18n/ui";

const baseEnv = import.meta.env.BASE_URL ?? "/";
const sanitizedBase = baseEnv === "/"
  ? ""
  : baseEnv.replace(/\/$/, "");

/**
 * Prefix a relative path with Astro's configured base so links work in sub-path deployments.
 */
export const withBase = (path = "/") => {
  if (!path || path === "/") {
    return sanitizedBase ? `${sanitizedBase}/` : "/";
  }

  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  return `${sanitizedBase}/${normalizedPath}`;
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
