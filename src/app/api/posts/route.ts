import { NextRequest, NextResponse } from "next/server";
import { getAllPosts } from "@/lib/blog";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const locale = req.nextUrl.searchParams.get("locale") || "de";
    const posts = await getAllPosts(locale);
    // Return only fields needed for stories view (no full content)
    const lite = posts.map(({ id, slug, title, description, date, readingTime, category, coverImageUrl }) => ({
      id, slug, title, description, date, readingTime, category, coverImageUrl,
    }));
    return NextResponse.json(lite);
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json([], { status: 500 });
  }
}
