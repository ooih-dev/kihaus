"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

const NAMES = [
  "Jessica", "Markus", "Sarah", "Thomas", "Elena", "David",
  "Sophie", "Lukas", "Julia", "Andreas", "Melanie", "Christian",
];

const CITIES = [
  "Berlin", "München", "Hamburg", "Wien", "Zürich",
  "Frankfurt", "Köln", "Stuttgart", "Düsseldorf", "Leipzig",
];

const PACKAGE_KEYS = ["packageA", "packageB", "packageC", "consultation"] as const;
type PackageKey = typeof PACKAGE_KEYS[number];

interface Notification {
  name: string;
  city: string;
  pkg: PackageKey;
}

function randomItem<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function SocialProof() {
  const t = useTranslations();
  const [notification, setNotification] = useState<Notification | null>(null);

  useEffect(() => {
    let showTimer: ReturnType<typeof setTimeout>;
    let hideTimer: ReturnType<typeof setTimeout>;

    const showNotification = () => {
      const n: Notification = {
        name: randomItem(NAMES),
        city: randomItem(CITIES),
        pkg: randomItem(PACKAGE_KEYS),
      };
      setNotification(n);

      hideTimer = setTimeout(() => {
        setNotification(null);
        // Wait 60–120s before next
        const nextDelay = 60000 + Math.random() * 60000;
        showTimer = setTimeout(showNotification, nextDelay);
      }, 5000);
    };

    // First notification after 15s
    showTimer = setTimeout(showNotification, 15000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  const dismiss = () => setNotification(null);

  return (
    <AnimatePresence>
      {notification && (
        <motion.div
          key="social-proof"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 left-6 z-[60]"
        >
          <div className="bg-white rounded-2xl shadow-2xl p-4 border border-slate-100 flex items-center gap-4 max-w-sm">
            {/* Left icon */}
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
              <ShoppingBag className="w-5 h-5" />
            </div>

            {/* Middle content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-1.5 mb-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <span className="text-xs text-slate-500">{t.conversion.timeAgo}</span>
              </div>
              <p className="text-sm text-slate-700 leading-snug">
                <span className="font-semibold">{notification.name}</span>
                {" "}{t.conversion.from}{" "}
                <span className="font-semibold">{notification.city}</span>
                {" "}{t.conversion.justPurchased}{" "}
                <span className="font-medium text-primary-700">
                  {t.conversion[notification.pkg]}
                </span>
                {t.conversion.purchased ? ` ${t.conversion.purchased}` : ""}
              </p>
            </div>

            {/* Dismiss button */}
            <button
              onClick={dismiss}
              className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0"
              aria-label="Dismiss"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
