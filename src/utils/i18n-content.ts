import { defaultLocale, type Locale } from "../i18n/ui";

/**
 * Merge a locale-specific translation (translatable fields only) onto a base
 * (Greek) data object. The default locale always returns the base object
 * untouched; other locales fall back to the base for any field the
 * translation map doesn't override.
 */
export const localizeItem = <T extends Record<string, unknown>>(
  base: T,
  translation: Partial<T> | undefined,
  locale: Locale
): T => {
  if (locale === defaultLocale || !translation) return base;
  return { ...base, ...translation };
};
