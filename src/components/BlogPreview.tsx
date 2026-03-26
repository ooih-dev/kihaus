"use client";

import { useTranslations } from "@/lib/i18n";
import { ArrowRight } from "lucide-react";

export default function BlogPreview() {
  const t = useTranslations();

  return (
    <section id="blog" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <p className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-4">
          {t.blog.badge}
        </p>

        {/* Title & Description */}
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
          {t.blog.title}
        </h2>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl">
          {t.blog.description}
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.blog.posts.map(
            (post: { category: string; date: string; title: string; desc: string }, i: number) => (
              <article
                key={i}
                className="rounded-2xl overflow-hidden bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-shadow"
              >
                {/* Image placeholder */}
                <img
                  src={`https://picsum.photos/seed/${post.category.toLowerCase().replace(/\s/g, "")}/800/600`}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6">
                  {/* Category + Date */}
                  <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                    <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {post.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed mb-4">
                    {post.desc}
                  </p>

                  {/* Read more */}
                  <a
                    href="#"
                    className="text-sm font-semibold text-emerald-600 flex items-center gap-1 hover:gap-2 transition-all"
                  >
                    {t.blog.readMore}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            )
          )}
        </div>
      </div>
    </section>
  );
}
