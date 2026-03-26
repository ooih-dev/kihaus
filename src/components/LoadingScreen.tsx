"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show once per session
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
          className="fixed inset-0 z-[100] bg-slate-900 flex items-center justify-center overflow-hidden"
        >
          {/* Background video */}
          <iframe
            src="https://www.youtube.com/embed/W7NrPAAwskk?autoplay=1&loop=1&mute=1&controls=0&showinfo=0&playlist=W7NrPAAwskk"
            allow="autoplay"
            className="absolute inset-0 w-full h-full object-cover opacity-30"
            style={{ border: "none", pointerEvents: "none" }}
            title="Background"
          />

          {/* Centered content */}
          <div className="relative z-10 flex flex-col items-center text-center px-6">
            {/* Logo */}
            <img
              src="https://deagentur.com/KIHAUSE_LOGO.png"
              alt="KIHause"
              className="h-16 mb-6"
            />

            {/* Title */}
            <h1 className="text-4xl font-bold text-white mb-2">
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-600 bg-clip-text text-transparent">
                KIHause
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-slate-400 text-base mb-10">
              Private AI Concierge Berlin
            </p>

            {/* Loading bar */}
            <div className="w-48 h-1 bg-slate-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-emerald-500 rounded-full"
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
