import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/blog/StickyCTA";
import RelatedPosts from "@/components/blog/RelatedPosts";
import { blogPosts, getPostBySlug } from "@/lib/blog";
import { createMetadata } from "@/lib/seo";

import PostSelbstHosten from "@/components/blog/PostSelbstHosten";
import PostAnwaelteAerzte from "@/components/blog/PostAnwaelteAerzte";
import PostMacMiniSetup from "@/components/blog/PostMacMiniSetup";
import PostChatGPTKanzlei from "@/components/blog/PostChatGPTKanzlei";
import PostLokalesKIModell from "@/components/blog/PostLokalesKIModell";
import PostAnthropicIPO from "@/components/blog/PostAnthropicIPO";
import PostAnthropicIPODe from "@/components/blog/PostAnthropicIPODe";

const postComponents: Record<string, React.ComponentType> = {
  "anthropic-ipo-analyse-2026": PostAnthropicIPODe,
  "anthropic-ipo-analysis-2026": PostAnthropicIPO,
  "warum-ki-in-berlin-selbst-hosten": PostSelbstHosten,
  "ki-fuer-anwaelte-und-aerzte": PostAnwaelteAerzte,
  "mac-mini-private-ki-zentrale": PostMacMiniSetup,
  "chatgpt-datenschutz-risiko-kanzlei": PostChatGPTKanzlei,
  "was-ist-lokales-ki-modell": PostLokalesKIModell,
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  return createMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${slug}`,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      authors: ["KIHause"],
      tags: post.tags,
    },
  });
}

const packageLabels: Record<string, string> = {
  a: "Paket A — Berlin Basics: ab €1.500",
  b: "Paket B — Business Brains: €3.500–€4.000",
  c: "Paket C — Datenschutz Special: €4.000–€5.000",
  d: "Paket D — Bring Your Own Device: ab €300",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const PostContent = postComponents[slug];
  if (!PostContent) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "KIHause" },
    publisher: { "@type": "Organization", name: "KIHause" },
    mainEntityOfPage: `https://kihause.de/blog/${slug}`,
    keywords: post.tags.join(", "),
  };

  const waText = `Hallo KIHause! Ich habe "${post.title}" gelesen und interessiere mich für ${packageLabels[post.targetPackage]}. Können wir sprechen?`;

  return (
    <>
      <Header />
      <main className="pt-32 pb-24">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />

        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article header */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium">
                {post.category}
              </span>
              <span className="text-sm text-slate-400">{post.readingTime} Lesezeit</span>
              <span className="text-sm text-slate-400">
                {new Date(post.date).toLocaleDateString("de-DE", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
              {post.title}
            </h1>
            <p className="text-xl text-slate-500 leading-relaxed">
              {post.description}
            </p>
          </div>

          {/* Article body */}
          <div className="[&>h2]:text-3xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-slate-900 [&>p]:text-lg [&>p]:text-slate-600 [&>p]:leading-relaxed [&>p]:mb-6 [&>ul]:space-y-2 [&>ul]:ml-6 [&>ul]:list-disc [&>ul]:mb-6 [&>ul>li]:text-lg [&>ul>li]:text-slate-600 [&>ul>li]:leading-relaxed [&>ol]:space-y-2 [&>ol]:ml-6 [&>ol]:list-decimal [&>ol]:mb-6 [&>ol>li]:text-lg [&>ol>li]:text-slate-600 [&>ol>li]:leading-relaxed">
            <PostContent />
          </div>

          {/* End-of-article CTA */}
          <div className="mt-16 rounded-2xl bg-slate-900 p-8 text-white">
            <h3 className="text-2xl font-bold mb-2">Bereit für Ihre eigene KI?</h3>
            <p className="text-slate-300 mb-2">
              Schreiben Sie uns — kostenlos und unverbindlich. Wir empfehlen Ihnen das passende Paket
              und beantworten alle Ihre Fragen.
            </p>
            <p className="text-sm text-slate-400 mb-6">
              Empfohlen basierend auf diesem Artikel:{" "}
              <a href="/#pricing" className="text-primary-400 underline hover:text-primary-300">
                {packageLabels[post.targetPackage]}
              </a>
            </p>
            <a
              href={`https://wa.me/491776525804?text=${encodeURIComponent(waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white font-semibold text-lg hover:-translate-y-0.5 transition-all shadow-lg"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Jetzt via WhatsApp beraten lassen
            </a>
          </div>

          {/* Related posts */}
          <RelatedPosts currentSlug={slug} />
        </article>

        <StickyCTA postTitle={post.title} />
      </main>
      <Footer />
    </>
  );
}
