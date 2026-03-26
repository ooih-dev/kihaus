"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const seen = sessionStorage.getItem("kihause_loading_seen");
    if (seen) return;
    sessionStorage.setItem("kihause_loading_seen", "1");
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 w-screen h-screen z-[100] bg-slate-900 flex items-center justify-center overflow-hidden"
        >
          {/* Full-page YouTube background — scaled up to hide YouTube UI */}
          <div className="absolute inset-0 overflow-hidden">
            <iframe
              src="https://www.youtube.com/embed/W7NrPAAwskk?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&disablekb=1&fs=0&playlist=W7NrPAAwskk"
              allow="autoplay"
              className="absolute pointer-events-none"
              style={{
                border: "none",
                top: "50%",
                left: "50%",
                width: "300vw",
                height: "300vh",
                minWidth: "300vw",
                minHeight: "300vh",
                transform: "translate(-50%, -50%)",
                objectFit: "cover",
                willChange: "transform",
              }}
              title="Background"
            />
            {/* Dark overlay to dim the video */}
            <div className="absolute inset-0 bg-slate-900/50" />
          </div>

          {/* Centered content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo */}
            <motion.img
              src="https://deagentur.com/KIHAUSE_LOGO.png"
              alt="KIHause"
              className="h-20 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Title */}
            <motion.h1
              className="text-5xl sm:text-6xl font-bold text-white mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                KIHause
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-slate-400 text-lg mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Private AI Concierge Berlin
            </motion.p>

            {/* Loading bar */}
            <div className="w-56 h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.2, ease: "linear" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
