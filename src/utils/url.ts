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
