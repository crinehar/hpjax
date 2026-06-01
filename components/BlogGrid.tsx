"use client";

import { useState, useMemo, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, SlidersHorizontal, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { BlogPostSummary } from "@/lib/posts";

const PAGE_SIZE = 12;

interface Props {
  posts: BlogPostSummary[];
  categories: string[];
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

function FilterDrawer({
  isOpen,
  onClose,
  categories,
  activeCategory,
  onSelect,
  onClear,
}: DrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Focus close button when opened; trap focus and handle Escape
  useEffect(() => {
    if (!isOpen) return;
    closeRef.current?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key !== "Tab") return;
      const el = drawerRef.current;
      if (!el) return;
      const focusable = Array.from(
        el.querySelectorAll<HTMLElement>(
          'button:not([disabled]), [href], input, [tabindex]:not([tabindex="-1"])'
        )
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll while open
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
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Drawer */}
          <motion.div
            key="drawer"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="filter-drawer-heading"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 280 }}
            className="fixed right-0 top-0 h-full w-80 max-w-[90vw] bg-white shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-surface-muted">
              <h2
                id="filter-drawer-heading"
                className="font-heading font-bold text-ink text-lg"
              >
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

            {/* Category list */}
            <div
              className="flex-1 overflow-y-auto px-6 py-4"
              role="group"
              aria-label="Categories"
            >
              <div className="flex flex-col gap-1">
                {categories.map((cat) => {
                  const active = activeCategory === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => {
                        onSelect(cat);
                        onClose();
                      }}
                      aria-pressed={active}
                      className={`flex items-center justify-between w-full px-4 py-2.5 rounded-lg text-sm font-medium text-left transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark ${
                        active
                          ? "bg-teal text-white"
                          : "text-ink-muted hover:bg-teal/8 hover:text-teal-dark"
                      }`}
                    >
                      {cat}
                      {active && (
                        <Check className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Footer */}
            {hasActive && (
              <div className="px-6 py-4 border-t border-surface-muted">
                <button
                  onClick={() => {
                    onClear();
                    onClose();
                  }}
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

// ── Blog Grid ─────────────────────────────────────────────────────────────────

export default function BlogGrid({ posts, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset pagination when filters change
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
    return posts.filter((post) => {
      const matchCat =
        activeCategory === "All" || post.category === activeCategory;
      const matchSearch =
        !searchTerm ||
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.tags.some((t) =>
          t.toLowerCase().includes(searchTerm.toLowerCase())
        ) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [posts, activeCategory, searchTerm]);

  const hasFilters = activeCategory !== "All" || searchTerm !== "";
  const filterCount = (activeCategory !== "All" ? 1 : 0);

  return (
    <>
      {/* Toolbar: Filter button + Search */}
      <div className="flex items-center gap-3 mb-6">
        {/* Filter button */}
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

        {/* Search */}
        <div className="relative flex-1 max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-subtle pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-9 py-2 rounded-lg border border-surface-muted bg-white text-sm text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-teal-dark focus:border-teal-dark"
            aria-label="Search posts"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              aria-label="Clear search"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-subtle hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark rounded"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* Active category chip + count */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <p
            className="text-sm text-ink-muted"
            aria-live="polite"
            aria-atomic="true"
          >
            Showing <strong className="text-ink">{filtered.length}</strong> of{" "}
            {posts.length} posts
          </p>
          {activeCategory !== "All" && (
            <span className="flex items-center gap-1.5 text-xs font-medium text-teal-dark bg-teal/10 border border-teal/30 px-2.5 py-1 rounded-full">
              {activeCategory}
              <button
                onClick={() => setActiveCategory("All")}
                aria-label={`Remove ${activeCategory} filter`}
                className="hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark rounded-full"
              >
                <X className="w-3 h-3" aria-hidden="true" />
              </button>
            </span>
          )}
        </div>
        {hasFilters && (
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="text-sm text-teal-dark underline underline-offset-2 hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Empty state */}
      {filtered.length === 0 ? (
        <div className="text-center py-20 bg-surface-muted rounded-2xl">
          <p className="text-ink-muted mb-4">
            No posts match your current filters.
          </p>
          <button
            onClick={() => {
              setActiveCategory("All");
              setSearchTerm("");
            }}
            className="text-teal-dark underline underline-offset-2 text-sm hover:text-teal focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.slice(0, visibleCount).map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-xl border border-surface-muted overflow-hidden shadow-sm hover:shadow-md transition-shadow group h-full flex flex-col"
              >
                {post.image === "/images/logo.png" ? (
                  <div className="relative h-48 flex-shrink-0 bg-teal/10 flex items-center justify-center">
                    <Image
                      src={post.image}
                      alt="Health Pointe Jacksonville"
                      width={200}
                      height={60}
                      className="object-contain w-40"
                    />
                  </div>
                ) : (
                  <div className="relative h-48 bg-surface-muted flex-shrink-0">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-primary-dark border border-primary/40 px-2 py-0.5 rounded-full">
                      {post.category}
                    </span>
                    <time
                      dateTime={post.date}
                      className="text-xs text-ink-muted"
                    >
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                  <h2 className="font-heading font-bold text-ink text-lg mb-2 group-hover:text-primary transition-colors">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-ink-muted text-sm leading-relaxed flex-1">
                    {post.excerpt}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1 mt-4 pt-4 border-t border-surface-muted">
                      {post.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-xs text-teal-dark border border-teal/40 px-2 py-0.5 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>

          {/* Load more */}
          {visibleCount < filtered.length && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                className="px-8 py-3 rounded-full border-2 border-teal text-teal-dark font-medium text-sm hover:bg-teal hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              >
                Load more posts ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </>
      )}

      {/* Filter drawer (portal) */}
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
