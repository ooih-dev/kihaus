import { getRelatedPosts } from "@/lib/blog";

interface RelatedPostsProps {
  currentSlug: string;
}

export default function RelatedPosts({ currentSlug }: RelatedPostsProps) {
  const posts = getRelatedPosts(currentSlug);

  return (
    <div className="mt-16 pt-12 border-t border-slate-200">
      <h3 className="text-2xl font-bold mb-6 text-slate-900">Weitere Artikel</h3>
      <div className="grid sm:grid-cols-2 gap-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-primary-200 transition-all"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-700 text-xs font-medium mb-3">
              {post.category}
            </span>
            <h4 className="text-lg font-bold text-slate-900 group-hover:text-primary-600 transition-colors mb-2">
              {post.title}
            </h4>
            <p className="text-sm text-slate-500 line-clamp-2">
              {post.description}
            </p>
            <span className="mt-3 inline-flex items-center text-sm text-primary-600 font-medium">
              Weiterlesen
              <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
