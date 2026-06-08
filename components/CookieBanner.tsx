"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

const STORAGE_KEY = "cookie-banner-dismissed";

function isDismissedToday(): boolean {
  const ts = localStorage.getItem(STORAGE_KEY);
  if (!ts) return false;
  return Date.now() - parseInt(ts, 10) < 86_400_000; // 24 hours
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isDismissedToday()) setVisible(true);
  }, []);

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, Date.now().toString());
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          role="region"
          aria-label="Cookie notice"
          className="fixed bottom-0 inset-x-0 z-40 bg-ink border-t border-gray-700 px-4 pr-24 sm:pr-28 py-3 flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-gray-300 text-sm text-center sm:text-left">
            We use cookies for analytics and advertising.{" "}
            <Link
              href="/privacy-policy"
              className="underline underline-offset-2 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              Privacy Policy
            </Link>
          </p>
          <button
            onClick={dismiss}
            className="shrink-0 bg-teal-dark hover:bg-teal text-white text-xs font-semibold px-4 py-1.5 rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Got it
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
