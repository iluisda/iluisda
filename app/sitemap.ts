import { MetadataRoute } from "next";
import { allPosts } from "content-collections";
import { allProjects } from "content-collections";
import { routing } from "@/routing";

const BASE_URL = "https://iluisda.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = routing.locales;
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    entries.push({
      url: `${BASE_URL}/${locale}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    });

    entries.push({
      url: `${BASE_URL}/${locale}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    });

    entries.push({
      url: `${BASE_URL}/${locale}/cv`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    });

    entries.push({
      url: `${BASE_URL}/${locale}/projects`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    });

    const localePosts = allPosts.filter((p) => p.lang === locale);
    for (const post of localePosts) {
      entries.push({
        url: `${BASE_URL}/${locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    const localeProjects = allProjects.filter((p) => p.lang === locale);
    for (const project of localeProjects) {
      entries.push({
        url: `${BASE_URL}/${locale}/projects/${project.slug}`,
        lastModified: new Date(project.date),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }
  }

  return entries;
}
