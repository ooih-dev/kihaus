import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["de", "en"];
const defaultLocale = "de";

// Paths that should NOT be localized
const publicPaths = [
  "/api",
  "/_next",
  "/favicon",
  "/og.png",
  "/logo.png",
  "/kihause-logo.png",
  "/sitemap",
  "/robots",
  "/next.svg",
  "/vercel.svg",
  "/globe.svg",
  "/window.svg",
  "/file.svg",
  "/icon.svg",
  "/apple-icon.png",
];

function isPublicPath(pathname: string): boolean {
  return publicPaths.some((p) => pathname.startsWith(p));
}

function getLocaleFromPathname(pathname: string): string | null {
  const segments = pathname.split("/");
  if (segments.length >= 2 && locales.includes(segments[1])) {
    return segments[1];
  }
  return null;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Skip public paths
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Skip files with extensions (images, etc.)
  if (pathname.includes(".")) {
    return NextResponse.next();
  }

  // Already has locale prefix — pass through
  if (getLocaleFromPathname(pathname)) {
    return NextResponse.next();
  }

  // Redirect old /blog/... URLs to /de/blog/... for backward compat
  // Check if the slug is an English post
  const englishSlugs = ["anthropic-ipo-analysis-2026"];
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace("/blog/", "").replace(/\/$/, "");
    const locale = englishSlugs.includes(slug) ? "en" : "de";
    const url = request.nextUrl.clone();
    url.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(url, 301);
  }

  // Redirect /blog to /de/blog
  if (pathname === "/blog") {
    const url = request.nextUrl.clone();
    url.pathname = `/de/blog`;
    return NextResponse.redirect(url, 301);
  }

  // Redirect bare paths to default locale
  const url = request.nextUrl.clone();
  url.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(url, 302);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
