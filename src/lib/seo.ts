import { routing } from "@/routing";

const BASE_URL = "https://iluisda.dev";
const locales = routing.locales;

export function getBaseUrl() {
  return BASE_URL;
}

export function getCanonical(path: string, locale: string) {
  const cleanPath = path === "/" ? "" : path;
  return `${BASE_URL}/${locale}${cleanPath}`;
}

export function getAlternates(path: string, currentLocale: string) {
  const cleanPath = path === "/" ? "" : path;
  const languages: Record<string, string> = {
    "x-default": `${BASE_URL}/${locales[0]}${cleanPath}`,
  };
  for (const locale of locales) {
    languages[locale] = `${BASE_URL}/${locale}${cleanPath}`;
  }
  return {
    canonical: `${BASE_URL}/${currentLocale}${cleanPath}`,
    languages,
  };
}
