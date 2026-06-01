"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import { SlidersHorizontal, X, Check, Search } from "lucide-react";
import { AnimatePresence, motion, useInView, useMotionValue, useSpring } from "framer-motion";
import type { Review } from "@/lib/reviews";

const PAGE_SIZE = 12;
// TODO: replace with your Google Business Profile review URL
const GOOGLE_REVIEW_URL = "https://g.page/r/REPLACE_WITH_PLACE_ID/review";
const GOOGLE_TOTAL = 319;

// ── Animated counter ──────────────────────────────────────────────────────────

function AnimatedCounter({ target }: { target: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const raw = useMotionValue(0);
  const spring = useSpring(raw, { stiffness: 60, damping: 20 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    raw.set(target);
  }, [inView, raw, target]);

  useEffect(() => {
    return spring.on("change", (v) => setDisplay(Math.round(v)));
  }, [spring]);

  return <span ref={ref}>{display}</span>;
}

// ── Google badge ──────────────────────────────────────────────────────────────

function GoogleBadge() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 bg-white border border-surface-muted rounded-2xl px-6 py-5 shadow-sm w-full sm:w-auto">
      {/* Google G */}
      <svg viewBox="0 0 48 48" className="w-10 h-10 flex-shrink-0" aria-hidden="true">
        <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
        <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
        <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
        <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.36-8.16 2.36-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
        <path fill="none" d="M0 0h48v48H0z"/>
      </svg>

      <div className="text-center sm:text-left">
        {/* Stars */}
        <div role="img" className="flex justify-center sm:justify-start gap-0.5 mb-1" aria-label="5 out of 5 stars on Google">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
            </svg>
          ))}
        </div>
        <p className="font-heading font-bold text-ink text-2xl leading-none" aria-label={`${GOOGLE_TOTAL} Google reviews`}>
          <span aria-hidden="true">
            <AnimatedCounter target={GOOGLE_TOTAL} />{" "}
            <span className="text-base font-normal text-ink-muted">Google reviews</span>
          </span>
        </p>
      </div>

      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 inline-flex items-center gap-1.5 bg-teal text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
        aria-label="Leave a Google review for Health Pointe Jacksonville (opens in new tab)"
      >
        Leave a review
        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </a>
    </div>
  );
}

// ── Filter Drawer ─────────────────────────────────────────────────────────────

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories: string[];
  activeCategory: string;
  onSelect: (cat: string) => void;
  onClear: () => void;
}

function FilterDrawer({ isOpen, onClose, categories, activeCategory, onSelect, onClear }: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      const el = drawerRef.current;
      if (!el) return;
      const focusable = Array.from(
        el.querySelectorAll<HTMLElement>('button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])')
      );
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const hasActive = activeCategory !== "All";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            aria-hidden="true"
          />
          <motion.div
            key="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-drawer-heading"
            initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 flex flex-col"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-surface-muted">
              <h2 id="filter-drawer-heading" className="font-heading font-bold text-ink text-lg">
                Filter by Category
              </h2>
              <button
                ref={closeRef}
                onClick={onClose}
                aria-label="Close filter panel"
                className="p-1.5 rounded-md text-ink-muted hover:text-ink hover:bg-surface-muted transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4" role="group" aria-label="Categories">
              <div className="flex flex-col gap-1">
                {categories.map((cat) => {
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => { onSelect(cat); onClose(); }}
                      aria-pressed={active}
                      className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark ${
                        active ? "bg-teal text-white" : "text-ink-muted hover:bg-teal/8 hover:text-teal-dark"
                      }`}
                    >
                      {cat}
                      {active && <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {hasActive && (
              <div className="px-6 py-4 border-t border-surface-muted">
                <button
                  onClick={() => { onClear(); onClose(); }}
                  className="w-full py-2 rounded-lg border border-surface-muted text-sm font-medium text-ink-muted hover:text-teal-dark hover:border-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
                >
                  Clear category filter
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

// ── Reviews Grid ──────────────────────────────────────────────────────────────

interface Props {
  reviews: Review[];
  categories: string[];
}

export default function ReviewsGrid({ reviews, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const prevFilters = useRef({ activeCategory, searchTerm });
  useEffect(() => {
    if (
      prevFilters.current.activeCategory !== activeCategory ||
      prevFilters.current.searchTerm !== searchTerm
    ) {
      setVisibleCount(PAGE_SIZE);
      prevFilters.current = { activeCategory, searchTerm };
    }
  }, [activeCategory, searchTerm]);

  const filtered = useMemo(() => {
    return reviews.filter((r) => {
      const matchCat = activeCategory === "All" || r.categories.includes(activeCategory);
      const matchSearch =
        !searchTerm ||
        r.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        r.quote.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [reviews, activeCategory, searchTerm]);

  const hasFilters = activeCategory !== "All" || searchTerm !== "";
  const filterCount = activeCategory !== "All" ? 1 : 0;

  return (
    <>
      {/* Google badge */}
      <div className="flex justify-center mb-10">
        <GoogleBadge />
      </div>

      {/* Toolbar */}
      <div className="flex items-center gap-3 mb-6">
        <button
          onClick={() => setDrawerOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={drawerOpen}
          className={`relative flex items-center gap-2 px-4 py-2 rounded-lg border text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark flex-shrink-0 ${
            filterCount > 0
              ? "border-teal bg-teal/10 text-teal-dark"
              : "border-surface-muted bg-white text-ink-muted hover:border-teal-dark hover:text-teal-dark"
          }`}
        >
          <SlidersHorizontal className="w-4 h-4" aria-hidden="true" />
          <span>Filters</span>
          {filterCount > 0 && (
            <span
              className="flex items-center justify-center w-4 h-4 rounded-full bg-teal text-white text-[10px] font-bold leading-none"
              aria-label={`${filterCount} filter active`}
            >
              {filterCount}
            </span>
          )}
        </button>

        <div className="relative flex-1 max-w-sm">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-subtle pointer-events-none" aria-hidden="true" />
          <input
            type="search"
            placeholder="Search by name or keyword"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-9 py-2 rounded-lg border border-surface-muted bg-white text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-teal-dark focus:border-teal-dark"
            aria-label="Search testimonials"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark rounded"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Count + active chip */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <p className="text-sm text-ink-muted" aria-live="polite" aria-atomic="true">
            Showing <strong className="text-ink">{Math.min(visibleCount, filtered.length)}</strong> of{" "}
            <strong className="text-ink">{filtered.length}</strong> reviews
          </p>
          {activeCategory !== "All" && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-teal-dark bg-teal/10 border border-teal/30 px-2.5 py-1 rounded-full">
              {activeCategory}
              <button
                onClick={() => setActiveCategory("All")}
                aria-label={`Remove ${activeCategory} filter`}
                className="hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark rounded-full"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          )}
        </div>
        {hasFilters && (
          <button
            onClick={() => { setActiveCategory("All"); setSearchTerm(""); }}
            className="text-sm text-teal-dark underline underline-offset-2 hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-surface-muted rounded-2xl">
          <p className="text-ink-muted mb-4">No reviews match your current filters.</p>
          <button
            onClick={() => { setActiveCategory("All"); setSearchTerm(""); }}
            className="text-teal-dark underline underline-offset-2 text-sm hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, visibleCount).map((review, i) => (
              <motion.article
                key={review.slug}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: Math.min(i, 5) * 0.05 }}
                className="bg-white rounded-xl border border-surface-muted p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow"
              >
                {/* Stars */}
                <div role="img" className="flex gap-0.5 mb-4" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="flex-1">
                  <p className="text-ink-muted text-sm leading-relaxed italic mb-5">
                    &ldquo;{review.quote}&rdquo;
                  </p>
                  <footer className="flex items-center justify-between gap-2 pt-4 border-t border-surface-muted">
                    <cite className="not-italic font-heading font-bold text-ink text-sm">
                      {review.name}
                    </cite>
                    <span className="text-xs font-medium text-teal-dark bg-teal/8 border border-teal/20 px-2 py-0.5 rounded-full flex-shrink-0">
                      {review.categories[0]}
                    </span>
                  </footer>
                </blockquote>
              </motion.article>
            ))}
          </div>

          {visibleCount < filtered.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="px-8 py-3 rounded-full border-2 border-teal text-teal-dark font-medium text-sm hover:bg-teal hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              >
                Load more ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      )}

      <FilterDrawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
        onClear={() => setActiveCategory("All")}
      />
    </>
  );
}
