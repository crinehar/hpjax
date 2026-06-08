# Health Pointe Jacksonville — Rebuild Progress

## Status: In Progress
**Last updated:** 2026-06-08 (team update: Yaira removed, Lexi added; careers slug moved to /careers/; 3 job sub-pages built)
**WP Sitemap:** https://hpjax.com/page-sitemap.xml (audited 2026-06-03)

### Lighthouse Benchmark Scores (2026-05-22 — hpjax.vercel.app)
| Category | Score |
|---|---|
| Performance | 93 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

These are the baseline scores to maintain before go-live. Do not merge PRs that regress any score.

---

## Pages

| Route | Status | Notes |
|---|---|---|
| `/` | ✅ Complete | Hero, services grid, testimonials, BookingCTA, JSON-LD. PMOS updated sitewide. |
| `/about` | ✅ Removed | Page deleted — `/about/` links redirected to `/our-team/` |
| `/our-team` | ✅ Complete | Featured Dr. Miller card, full team grid, real photos, ADA/SEO/AIO audited |
| `/our-team/dr-julee-miller` | ✅ Complete | Full profile, FAQ schema, specializations, Making a Difference, ADA/AIO audited. PMOS updated. |
| `/our-team/denise` | ✅ Complete | Bio, certifications, massage link, FAQ schema |
| `/our-team/damaris` | ✅ Complete | Bio, admin profile, no book button |
| `/our-team/lexi` | ✅ Complete | Full bio, no book button, photo uploaded |
| `/our-team/angel` | ✅ Complete | Bio, fun facts, no book button |
| `/our-team/dana` | ✅ Complete | Bio, fun facts, no book button |
| `/testimonials` | ✅ Complete | 129 real WP reviews, category filter + search, Google badge (319), AggregateRating schema |
| `/contact` | ✅ Complete | LeadConnector iframe (lazy-loaded), hero image, verbatim WP copy, ContactPage + LocalBusiness schema |
| `/accessibility` | ✅ Complete | WCAG 2.2 AA statement, verbatim WP copy, technical specs list, contact links |
| `/book` | ✅ Removed | 302 redirect → AcuBliss; all Book Now buttons open new tab directly |
| `/shop` | ✅ Live | Shopify headless product grid — fetches live gift cards |
| `/shop/[handle]` | ✅ Live | Product detail — variant selector, Add to Bag → cart drawer → Shopify multi-line checkout |
| `/blog` | ✅ Complete | 125 posts static in `lib/posts-data.ts` — no WP API needed |
| `/blog/[slug]` | ✅ Complete | Full template — dynamic metadata, Article schema, BookingCTA |
| `/faq` | ✅ Complete | 5 categories, 20 Q&As, hero, jump nav, FAQPage + LocalBusiness schema, in About nav + footer |
| `/womens-health` | ✅ Complete | Full rebuild, PMOS updated |
| `/services/massage-therapy-jacksonville` | ✅ Complete | Full rebuild + MLD section with blog links + disclaimer ("no Brazilian body shaping MLD"), blog Read More links on Fertility & Prenatal card items |
| `/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller` | ✅ Complete | Full rebuild |
| `/services/pelvic-floor` | ✅ Complete | Full rebuild (moved from /pelvic-floor/, 301 redirect added) |
| `/services/dry-needling-jacksonville-fl` | ✅ Complete | PMOS updated |
| `/services/acupuncture` | ✅ Complete | Full review |
| `/services/sports-acupuncture` | ✅ Complete | Full review |
| `/services/pediatric-acupuncture` | ✅ Complete | Full review |
| `/services/quit-smoking-program-jacksonville` | ✅ Complete | Full review |
| `/services/chronic-pain` | ✅ Complete | Moved from /chronic-pain/ (301 redirect) |
| `/services/neurological-disorders` | ✅ Complete | Moved from /neurological-disorders/ (301 redirect) |
| `/services/long-covid-syndrome` | ✅ Complete | Full rebuild |
| `/services/cosmetic-facial-acupuncture` | ✅ Complete | Full rebuild |
| `/services/o3-regenerative-therapy` | ✅ Complete | Full rebuild |
| `/services/acupuncture-point-injection-therapy` | ✅ Complete | Full rebuild |
| `/services/b12-injections` | ✅ Complete | Full rebuild |
| `/services` | ✅ Complete | PMOS updated |
| `/careers` | ✅ Complete | Moved from `/health-pointe-jax-careers/` (301 redirect added), job cards link to sub-pages |
| `/careers/licensed-massage-therapist` | ✅ Complete | Verbatim WP copy, JobPosting schema |
| `/careers/clinic-assistant` | ✅ Complete | Verbatim WP copy, JobPosting schema |
| `/careers/licensed-acupuncturist` | ✅ Complete | Verbatim WP copy, JobPosting schema — title is "Acupuncture Physician" |
| `/get-pregnant-faster` | ✅ Complete | Fertility quiz — Formspree stub |
| `/free-pain-screening-quiz` | ✅ Complete | Pain screening quiz — Formspree stub |
| `/pelvic-floor-health-quiz` | ✅ Complete | Pelvic floor quiz — Formspree stub |
| `/pathway-to-pregnancy` | ✅ Complete | eBook/fertility LP — built, redirect removed |
| `/holiday-wellness-gifts` | ✅ Redirect | 302 → `/shop` until seasonal rebuild (holidays) |
| `/ponte-vedra-beach-fl` | ✅ Complete | Local SEO LP — word-for-word from SEO team doc, AIO/ADA audited, SEO metadata from SEO team applied, NOT in nav |
| `/accessibility-statement` | ✅ Redirect | 301 → `/accessibility` (in next.config.mjs) |

---

## Shared Components ✅

| Component | Status | Notes |
|---|---|---|
| `Layout` | ✅ | Skip-to-content + CartProvider + Header + Footer + CartDrawer wrapper |
| `Header` | ✅ | Sticky, hamburger mobile nav, Services flyout, Blog in About dropdown |
| `Footer` | ✅ | NAP, social links, newsletter form |
| `TopBanner` | ✅ | Teal utility bar — ShoppingBag icon now opens cart drawer with live item count badge |
| `CartDrawer` | ✅ | Framer Motion slide-out from right — item list, qty controls, subtotal, Checkout + Keep Shopping |
| `GiftCardBuyButton` | ✅ | Variant pills, Add to Bag → CartContext → drawer opens; multi-item Shopify cart on checkout |
| `HeroSection` | ✅ | Image-optional, Framer Motion, dual CTA |
| `ServiceCard` | ✅ | Hover-lift motion card |
| `TestimonialCarousel` | ✅ | Chevron nav + counter, aria-live, no dots |
| `BookingCTA` | ✅ | Teal gradient CTA band — opens AcuBliss in new tab |
| `InsuranceBanner` | ✅ | Insurance provider list |
| `PageTransition` | ✅ | Framer Motion fade wrapper |
| `ScrollReveal` | ✅ | `useInView` scroll-triggered, 4 directions |
| `ContactForm` | ✅ | React Hook Form, full ARIA error binding (unused — contact page uses LeadConnector iframe) |
| `ServicePageTemplate` | ✅ | Reusable server template for scaffolded service pages |
| `NewsletterForm` | ✅ | Email input, Constant Contact TODO stub |
| `LazyContactForm` | ✅ | IntersectionObserver defers LeadConnector iframe |

---

## Config & Infrastructure ✅

| Item | Status | Notes |
|---|---|---|
| `tailwind.config.ts` | ✅ | Brand tokens: primary `#BF9B30`, teal `#3FBFAE`, teal-dark `#1E8A7C` |
| `next.config.mjs` | ✅ | Image patterns, 301 redirects, /book → AcuBliss |
| `next-sitemap.config.js` | ✅ | Weekly crawl, robots.txt |
| `.env.local.example` | ✅ | All API keys stubbed |
| Google Fonts | ✅ | Playfair Display (headings) + Inter (body) |
| JSON-LD | ✅ | LocalBusiness, ItemList, Service, ProfilePage, ContactPage, FAQPage, MedicalWebPage |
| Canonical URLs | ✅ | Every page |
| OG metadata | ✅ | Title template, default image, product images |
| Logo | ✅ | `public/images/logo.png` |
| Build | ✅ | `npm run build` — 0 errors |
| Shopify Storefront API | ✅ | Connected — multi-line cart checkout wired |
| Blog 301 redirects | ✅ | All 125 WP posts auto-redirected `/:slug` → `/blog/:slug` |
| **GA4** | ✅ | `G-VR6WY1K69L` — `afterInteractive` in layout.tsx |
| **Google Ads** | ✅ | `AW-987449154` — combined with GA4 gtag init |
| **Meta Pixel** | ✅ | `835649702775002` — `afterInteractive` + noscript fallback |
| **Google Search Console** | ✅ | Verification meta via `metadata.verification.google` |
| **LeadConnector Chat** | ✅ | Widget ID `6914a1e7f9ec171147626373` — `lazyOnload` |
| **Vercel Analytics** | ✅ | `<Analytics />` in layout.tsx |
| **Vercel Speed Insights** | ✅ | `<SpeedInsights />` in layout.tsx |

---

## Redirects (next.config.mjs)

| Old WP URL | New URL | Type |
|---|---|---|
| `/about-acupuncture-physician` | `/our-team/dr-julee-miller` | 301 |
| `/denise-lead-lmt` | `/our-team/denise` | 301 |
| `/damaris` | `/our-team/damaris` | 301 |
| `/dana` | `/our-team/dana` | 301 |
| `/angel` | `/our-team/angel` | 301 |
| `/book` | AcuBliss booking portal | 302 |
| `/sports-acupuncture` | `/services/sports-acupuncture` | 301 |
| `/pediatric-acupuncture` | `/services/pediatric-acupuncture` | 301 |
| `/quit-smoking-program-jacksonville` | `/services/quit-smoking-program-jacksonville` | 301 |
| `/chronic-pain` | `/services/chronic-pain` | 301 |
| `/neurological-disorders` | `/services/neurological-disorders` | 301 |
| `/long-covid-syndrome` | `/services/long-covid-syndrome` | 301 |
| `/:blog-slug` (125 posts) | `/blog/:blog-slug` | 301 |
| `/accessibility-statement` | `/accessibility` | 301 |
| `/health-pointe-jax-careers/:path*` | `/careers/:path*` | 301 |

---

## Pending Integrations 🔧

| Integration | File | Status |
|---|---|---|
| **Blog** | `lib/posts-data.ts` | Static — new posts via Word doc → posts-data.ts workflow |
| **Resend contact form** | `app/actions/contact.ts` | Needs `RESEND_API_KEY` |
| **Constant Contact newsletter** | `components/NewsletterForm.tsx` | Needs `CONSTANT_CONTACT_API_KEY` env var |
| **Constant Contact quiz drips** | All 3 quiz server actions | CC tokens in Vercel — wire at go-live |
| **Formspree quiz forms** | All 3 quizzes | 3 form IDs needed from client |
| **Vercel Analytics + Speed Insights** | `app/layout.tsx` | ✅ Done |

---

## 🚀 Pre-Launch Checklist

### Must-do before launch
- [ ] **Shopify** — upgrade plan, transfer to client email, add remaining gift cards, remove demo products, set up payments
- [ ] **Vercel** — upgrade to Pro, transfer to client account
- [ ] **GitHub** — make repo private
- [ ] **Formspree** — client creates 3 quiz forms, add IDs to Vercel env vars
- [ ] **Constant Contact** — wire up newsletter form (`CONSTANT_CONTACT_API_KEY`)
- [ ] **Resend** — add `RESEND_API_KEY` for contact form
- [x] **`/pathway-to-pregnancy`** — built
- [ ] Submit sitemap to Google Search Console
- [ ] Verify all 301 redirects from old WP URLs
- [ ] Run final Lighthouse audit on production (target: 100/100/100/100)
- [ ] Test Shopify checkout end-to-end on live paid store

### Pending from client / team
- [ ] **Formspree form IDs** (×3 quizzes) + connect to Constant Contact drip campaigns
- [ ] **Additional local SEO landing page Word docs** from SEO team
- [x] **Job sub-pages** — built at `/careers/licensed-massage-therapist`, `/careers/clinic-assistant`, `/careers/licensed-acupuncturist`
- [x] **Belly photo** — uploaded to `/public/images/blog/`
- [ ] **`/holiday-wellness-gifts`** — seasonal Christmas page, rebuild before holidays (302 → /shop until then)

### Done ✅
- [x] OG image — `health-pointe-jacksonville-acupuncture-clinic-team.jpg` (1200×630)
- [x] Favicon — `app/favicon.ico` + `app/icon.png`
- [x] Privacy Policy — `/privacy-policy`
- [x] Cookie consent banner — minimal bottom bar, once/day via localStorage
- [x] Vercel Analytics + Speed Insights — in `app/layout.tsx`
- [x] All tracking — GA4, Google Ads, Meta Pixel, Search Console, LeadConnector
- [x] Sitemap — cleaned + 6 missing pages added
- [x] Redirects — accessibility-statement, holiday-wellness-gifts (→ /shop), pathway-to-pregancy (→ fertility, temp)
- [x] Final copy review — `/about` removed, no remaining placeholder pages
- [x] New blog post — endometriosis/adenomyosis patient story (2026-05-27)

---

## Accessibility Checklist
- [x] Skip-to-content link on every page
- [x] `header / nav / main / footer` semantic landmarks
- [x] All images: `width`, `height`, `alt` on every `<Image>`
- [x] Visible focus rings via `:focus-visible` (globals.css)
- [x] All icon-only buttons have `aria-label`
- [x] Form fields have associated `<label>` and `aria-describedby` for errors
- [x] No accessibility overlay widgets
- [x] `aria-live` region on testimonial carousel
- [x] Heading order H1→H2→H3 enforced across all team + service pages
- [x] `<dl>` nesting fixed — no ScrollReveal wrappers inside dl elements
- [x] External links with `target="_blank"` have `aria-label="... (opens in new tab)"`
- [x] All booking buttons consistent (`btn-primary`)
- [ ] Full keyboard navigation audit (manual)
- [ ] Screen reader test (VoiceOver)
- [ ] Color contrast audit (axe DevTools)

---

## ADA Fixes Log
- [x] Dr. Miller FAQ: removed ScrollReveal from inside `<dl>` (invalid nesting)
- [x] Contact page: `aria-labelledby` added to hero `<header>`
- [x] All `target="_blank"` booking links: `aria-label="... (opens in new tab)"`
- [x] TestimonialCarousel: dots removed, chevrons + counter kept
- [x] Massage page "Learn More": `aria-label` added
- [x] Massage page schema: fixed invalid nested `@graph`
