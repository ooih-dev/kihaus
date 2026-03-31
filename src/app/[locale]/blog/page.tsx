import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === "en";

  return createMetadata({
    title: isEn ? "Blog — Private AI in Berlin" : "Blog — Private KI in Berlin",
    description: isEn
      ? "Practical knowledge about local AI, data privacy and private AI installation in Berlin. Tips for professionals, lawyers and doctors."
      : "Praxiswissen rund um lokale KI, Datenschutz und private AI-Installation in Berlin. Tipps für Professionals, Anwälte und Ärzte.",
    path: `/${locale}/blog`,
    alternates: {
      canonical: `https://kihause.de/${locale}/blog`,
      languages: {
        de: "https://kihause.de/de/blog",
        en: "https://kihause.de/en/blog",
        "x-default": "https://kihause.de/de/blog",
      },
    },
  });
}

export default async function BlogIndex({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const isEn = locale === "en";
  const posts = await getAllPosts(locale);

  const blogJsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "KIHause Blog",
    description: isEn
      ? "Practical knowledge about local AI and data privacy in Berlin."
      : "Praxiswissen rund um lokale KI und Datenschutz in Berlin.",
    url: `https://kihause.de/${locale}/blog`,
    publisher: {
      "@type": "Organization",
      name: "KIHause",
    },
  };

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top CTA banner */}
          <a
            href={`https://wa.me/491776525804?text=${encodeURIComponent(
              isEn
                ? "Hello KIHause! I read your blog and would like to learn more."
                : "Hallo KIHause! Ich habe Ihren Blog gelesen und möchte mehr erfahren."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12 rounded-2xl bg-gradient-to-r from-[#25D366] to-[#128C7E] p-5 text-white text-center hover:shadow-lg transition-shadow"
          >
            <span className="font-semibold">
              {isEn ? "Free consultation" : "Kostenlose Beratung"}
            </span>
            <span className="mx-2">—</span>
            <span>
              {isEn
                ? "Message us on WhatsApp — reply within 4h"
                : "Jetzt via WhatsApp schreiben und in 4h Antwort erhalten"}
            </span>
            <svg
              className="w-5 h-5 inline-block ml-2 -mt-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4">
              {isEn ? "Knowledge & Practice" : "Wissen & Praxis"}
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              KIHause <span className="gradient-text">Blog</span>
            </h1>
            <p className="text-lg text-slate-500">
              {isEn
                ? "Everything about private AI, data privacy and local AI installation in Berlin."
                : "Alles über private KI, Datenschutz und lokale AI-Installation in Berlin."}
            </p>
          </div>

          {/* Post grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <a
                key={post.slug}
                href={`/${locale}/blog/${post.slug}`}
                className="group rounded-2xl border border-slate-200 bg-white overflow-hidden hover:shadow-xl hover:border-primary-200 transition-all duration-300"
              >
                {/* Color header strip */}
                <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500" />

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-400">
                      {post.readingTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-3 leading-tight">
                    {post.title}
                  </h2>

                  <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  <div className="flex items-center text-sm text-primary-600 font-medium">
                    {isEn ? "Read more" : "Weiterlesen"}
                    <svg
                      className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-slate-500">
                {isEn
                  ? "No posts available in English yet. Check our German blog!"
                  : "Noch keine Artikel vorhanden."}
              </p>
              {isEn && (
                <a
                  href="/de/blog"
                  className="mt-4 inline-block text-primary-600 font-medium hover:underline"
                >
                  View German blog &rarr;
                </a>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
