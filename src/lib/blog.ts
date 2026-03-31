import { getDb } from "./db";

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  tags: string[];
  targetPackage: "a" | "b" | "c" | "d";
  locale: string;
  contentType: string;
  content: string | null;
  coverImageUrl: string | null;
  author: string;
}

function rowToPost(row: Record<string, unknown>): BlogPost {
  return {
    id: row.id as number,
    slug: row.slug as string,
    title: row.title as string,
    description: (row.meta_description as string) || "",
    date: row.published_at
      ? new Date(row.published_at as string).toISOString().split("T")[0]
      : "",
    readingTime: (row.reading_time as string) || "",
    category: (row.category as string) || "",
    tags: (row.tags as string[]) || [],
    targetPackage: (row.target_package as "a" | "b" | "c" | "d") || "a",
    locale: (row.locale as string) || "de",
    contentType: (row.content_type as string) || "component",
    content: (row.content as string) || null,
    coverImageUrl: (row.cover_image_url as string) || null,
    author: (row.author as string) || "KIHause",
  };
}

export async function getAllPosts(locale?: string): Promise<BlogPost[]> {
  const sql = getDb();
  let rows;
  if (locale) {
    rows = await sql`SELECT * FROM posts WHERE locale = ${locale} ORDER BY published_at DESC`;
  } else {
    rows = await sql`SELECT * FROM posts ORDER BY published_at DESC`;
  }
  return rows.map(rowToPost);
}

export async function getPostBySlug(
  slug: string,
  locale?: string
): Promise<BlogPost | undefined> {
  const sql = getDb();
  let rows;
  if (locale) {
    rows = await sql`SELECT * FROM posts WHERE slug = ${slug} AND locale = ${locale} LIMIT 1`;
  } else {
    rows = await sql`SELECT * FROM posts WHERE slug = ${slug} LIMIT 1`;
  }
  return rows.length > 0 ? rowToPost(rows[0]) : undefined;
}

export async function getRelatedPosts(
  currentSlug: string,
  locale: string
): Promise<BlogPost[]> {
  const sql = getDb();
  const rows = await sql`SELECT * FROM posts WHERE slug != ${currentSlug} AND locale = ${locale} ORDER BY published_at DESC LIMIT 4`;
  return rows.map(rowToPost);
}

export async function getAllSlugsWithLocales(): Promise<
  { slug: string; locale: string }[]
> {
  const sql = getDb();
  const rows = await sql`SELECT slug, locale FROM posts`;
  return rows.map((r) => ({ slug: r.slug as string, locale: r.locale as string }));
}
