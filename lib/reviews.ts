export interface Review {
  slug: string;
  name: string;
  quote: string;
  date: string;
  categories: string[];
}

import { REVIEWS_DATA } from "./reviews-data";

export function getAllReviews(): Review[] {
  return REVIEWS_DATA;
}

export function getAllReviewCategories(): string[] {
  const cats = new Set<string>();
  for (const r of REVIEWS_DATA) {
    for (const c of r.categories) cats.add(c);
  }
  return ["All", ...Array.from(cats).sort()];
}
