import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/blog";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://kihause.de";
  const locales = ["de", "en"] as const;

  // --- Static pages (both locales) ---
  const staticPages = [
    { path: "", changeFrequency: "weekly" as const, priority: 1 },
    { path: "/blog", changeFrequency: "weekly" as const, priority: 0.9 },
    { path: "/faq", changeFrequency: "monthly" as const, priority: 0.7 },
    { path: "/impressum", changeFrequency: "yearly" as const, priority: 0.3 },
    { path: "/datenschutz", changeFrequency: "yearly" as const, priority: 0.3 },
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.flatMap((page) =>
    locales.map((locale) => ({
      url: `${baseUrl}/${locale}${page.path}`,
      lastModified: new Date(),
      changeFrequency: page.changeFrequency,
      priority: page.priority,
      alternates: {
        languages: {
          de: `${baseUrl}/de${page.path}`,
          en: `${baseUrl}/en${page.path}`,
          "x-default": `${baseUrl}/de${page.path}`,
        },
      },
    }))
  );

  // --- Blog posts ---
  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const posts = await getAllPosts();

    // Group posts by slug to find translation pairs
    const slugMap = new Map<string, { locales: string[]; date: string }>();
    for (const post of posts) {
      const existing = slugMap.get(post.slug);
      if (existing) {
        existing.locales.push(post.locale);
      } else {
        slugMap.set(post.slug, { locales: [post.locale], date: post.date });
      }
    }

    blogEntries = posts.map((post) => {
      const info = slugMap.get(post.slug)!;
      // Build alternates only for locales where this slug actually exists
      const languages: Record<string, string> = {};
      for (const loc of info.locales) {
        languages[loc] = `${baseUrl}/${loc}/blog/${post.slug}`;
      }
      // x-default points to the German version if available, otherwise the post's own locale
      languages["x-default"] = info.locales.includes("de")
        ? `${baseUrl}/de/blog/${post.slug}`
        : `${baseUrl}/${post.locale}/blog/${post.slug}`;

      return {
        url: `${baseUrl}/${post.locale}/blog/${post.slug}`,
        lastModified: new Date(post.date),
        changeFrequency: "monthly" as const,
        priority: 0.8,
        alternates: { languages },
      };
    });
  } catch {
    // DB unavailable during build - return empty blog entries
  }

  return [...staticEntries, ...blogEntries];
}
