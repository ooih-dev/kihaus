import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kihause.de";

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();
    blogEntries = posts.map((post) => ({
      url: `${baseUrl}/${post.locale}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          de: `${baseUrl}/de/blog/${post.slug}`,
          en: `${baseUrl}/en/blog/${post.slug}`,
        },
      },
    }));
  } catch {
    // DB unavailable during build - return empty blog entries
  }

  return [
    {
      url: `${baseUrl}/de`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: { de: `${baseUrl}/de`, en: `${baseUrl}/en` },
      },
    },
    {
      url: `${baseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: { de: `${baseUrl}/de`, en: `${baseUrl}/en` },
      },
    },
    {
      url: `${baseUrl}/de/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: { de: `${baseUrl}/de/blog`, en: `${baseUrl}/en/blog` },
      },
    },
    {
      url: `${baseUrl}/en/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
      alternates: {
        languages: { de: `${baseUrl}/de/blog`, en: `${baseUrl}/en/blog` },
      },
    },
    {
      url: `${baseUrl}/de/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/de/impressum`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/de/datenschutz`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...blogEntries,
  ];
}
