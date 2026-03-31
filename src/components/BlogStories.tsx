"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, PanInfo } from "framer-motion";

interface StoryPost {
  id: number;
  slug: string;
  title: string;
  description: string;
  date: string;
  readingTime: string;
  category: string;
  coverImageUrl: string | null;
}

interface BlogStoriesProps {
  open: boolean;
  onClose: () => void;
  locale: string;
}

export default function BlogStories({ open, onClose, locale }: BlogStoriesProps) {
  const [posts, setPosts] = useState<StoryPost[]>([]);
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setLoading(true);
    setCurrent(0);
    fetch(`/api/posts?locale=${locale}`)
      .then((r) => r.json())
      .then((data: StoryPost[]) => {
        setPosts(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [open, locale]);

  const go = useCallback(
    (dir: number) => {
      setDirection(dir);
      setCurrent((prev) => {
        const next = prev + dir;
        if (next < 0 || next >= posts.length) return prev;
        return next;
      });
    },
    [posts.length]
  );

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === "ArrowDown") go(1);
      else if (e.key === "ArrowLeft" || e.key === "ArrowUp") go(-1);
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, go, onClose]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const threshold = 50;
    if (info.offset.x < -threshold) go(1);
    else if (info.offset.x > threshold) go(-1);
  };

  const post = posts[current];

  const slideVariants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] bg-slate-950 flex flex-col"
          ref={containerRef}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-3">
            <span className="text-xs font-mono text-emerald-400 tracking-widest uppercase">
              Blog
            </span>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Progress bar */}
          {posts.length > 0 && (
            <div className="flex gap-1 px-5 mb-6">
              {posts.map((_, i) => (
                <div key={i} className="flex-1 h-0.5 rounded-full bg-white/20 overflow-hidden">
                  <div
                    className="h-full rounded-full bg-emerald-400 transition-all duration-300"
                    style={{ width: i < current ? "100%" : i === current ? "100%" : "0%" }}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Content area */}
          <div className="flex-1 relative overflow-hidden">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
              </div>
            ) : posts.length === 0 ? (
              <div className="flex items-center justify-center h-full text-slate-400 text-lg">
                {locale === "en" ? "No posts yet" : "Noch keine Artikel"}
              </div>
            ) : (
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={current}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.15}
                  onDragEnd={handleDragEnd}
                  className="absolute inset-0 flex flex-col justify-center px-8 cursor-grab active:cursor-grabbing select-none"
                >
                  {/* Category + meta */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium font-mono tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-slate-500 font-mono">
                      {post.readingTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-5">
                    {post.title}
                  </h2>

                  {/* Description */}
                  <p className="text-base text-slate-400 leading-relaxed mb-8 max-w-lg">
                    {post.description}
                  </p>

                  {/* Date */}
                  <span className="text-xs text-slate-600 font-mono">
                    {post.date}
                  </span>

                  {/* Read full article link */}
                  <a
                    href={`/${locale}/blog/${post.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-emerald-400 text-sm font-medium hover:text-emerald-300 transition-colors w-fit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {locale === "en" ? "Read full article" : "Artikel lesen"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </motion.div>
              </AnimatePresence>
            )}
          </div>

          {/* Bottom navigation */}
          {posts.length > 1 && (
            <div className="flex items-center justify-between px-8 pb-8 pt-4">
              <button
                onClick={() => go(-1)}
                disabled={current === 0}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white disabled:opacity-20 hover:bg-white/10 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Dot indicators */}
              <div className="flex gap-2">
                {posts.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-emerald-400 w-6" : "bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => go(1)}
                disabled={current === posts.length - 1}
                className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 text-white disabled:opacity-20 hover:bg-white/10 transition-all"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
