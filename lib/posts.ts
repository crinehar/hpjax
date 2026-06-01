export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  imageWidth: number;
  imageHeight: number;
  imageAlt: string;
  content: string;
  author?: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Summary type — no content field, safe to pass to Client Components
export type BlogPostSummary = Omit<BlogPost, "content">;

// Populated by scripts/import-wp-xml.mjs — do not edit manually after import
import { POSTS_DATA } from "./posts-data";

function sorted(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/** Full posts including content — use only in Server Components or [slug] pages */
export function getAllPosts(): BlogPost[] {
  return sorted(POSTS_DATA);
}

/** Summaries without content — safe to pass as Client Component props */
export function getAllPostSummaries(): BlogPostSummary[] {
  return sorted(POSTS_DATA).map(({ content: _content, ...rest }) => rest);
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return POSTS_DATA.find((p) => p.slug === slug);
}

export function getAllCategories(): string[] {
  const cats = new Set(POSTS_DATA.map((p) => p.category).filter(Boolean));
  return ["All", ...Array.from(cats).sort()];
}

export function getAllTags(): string[] {
  const tags = new Set(POSTS_DATA.flatMap((p) => p.tags));
  return Array.from(tags).sort();
}
