# Health Pointe Jacksonville — Rebuild Progress

## Status: Lighthouse 93 Perf / 100 ADA / 100 BP / 100 SEO ✅
**Last updated:** 2026-06-01

### Lighthouse Benchmark Scores (2026-05-22 — hpjax.vercel.app)
| Category | Score |
|---|---|
| Performance | 93 |
| Accessibility | 100 |
| Best Practices | 100 |
| SEO | 100 |

These are the baseline scores to maintain before go-live. Do not merge PRs that regress any score.

---

## Pages — All 25 routes scaffolded ✅

| Route | Status | Notes |
|---|---|---|
| `/` | ✅ Scaffolded | Hero, services grid, testimonials, BookingCTA, JSON-LD |
| `/about` | ✅ Scaffolded | Mission copy placeholder |
| `/our-team` | ✅ Complete | Featured Dr. Miller card, full team grid, real photos, ADA/SEO/AIO audited |
| `/our-team/dr-julee-miller` | 🔲 Next session | Individual team member sub-pages |
| `/our-team/denise` | 🔲 Next session | |
| `/our-team/yaira` | 🔲 Next session | |
| `/our-team/damaris` | 🔲 Next session | |
| `/our-team/angel` | 🔲 Next session | |
| `/our-team/dana` | 🔲 Next session | |
| `/testimonials` | ✅ Complete | 129 real WP reviews, category filter + search, Google badge (319), AggregateRating schema |
| `/contact` | ✅ Scaffolded | React Hook Form wired; needs Resend server action |
| `/accessibility` | ✅ Scaffolded | WCAG 2.1 AA statement |
| `/book` | ✅ Scaffolded | AcuBliss iframe container — **needs src URL uncommented** |
| `/gift-cards` | ✅ Removed | Replaced by /shop |
| `/shop` | ✅ Live | Shopify headless product grid — fetches live gift cards |
| `/shop/[handle]` | ✅ Live | Product detail — variant selector, qty, buy → new tab checkout |
| `/blog` | ✅ Scaffolded | Static placeholder posts — **needs WordPress REST API** |
| `/blog/[slug]` | ✅ Scaffolded | Dynamic route with static params from placeholder data |
| `/womens-health` | ✅ Scaffolded | Service grid for women's health |
| `/services/fertility` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/pelvic-floor` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/acupuncture` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/chronic-pain` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/neurological` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/sports` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/pediatric` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/quit-smoking` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/long-covid` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/cosmetic` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/o3-therapy` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/injection-therapy` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/b12` | ✅ Scaffolded | Full conditions list + what to expect |
| `/services/massage` | ✅ Scaffolded | Full conditions list + what to expect |

---

## Shared Components ✅

| Component | Status | Notes |
|---|---|---|
| `Layout` | ✅ | Skip-to-content + Header + Footer wrapper |
| `Header` | ✅ | Sticky, hamburger mobile nav, Services flyout |
| `Footer` | ✅ | NAP, social links, newsletter form |
| `HeroSection` | ✅ | Image-optional, Framer Motion, dual CTA |
| `ServiceCard` | ✅ | Hover-lift motion card |
| `TestimonialCarousel` | ✅ | Animated with ARIA roles |
| `BookingCTA` | ✅ | Gold gradient CTA band |
| `InsuranceBanner` | ✅ | Insurance provider list |
| `PageTransition` | ✅ | Framer Motion fade wrapper |
| `ScrollReveal` | ✅ | `useInView` scroll-triggered, 4 directions |
| `ContactForm` | ✅ | React Hook Form, full ARIA error binding |
| `ServicePageTemplate` | ✅ | Reusable server template for service pages |
| `NewsletterForm` | ✅ | Email input, Mailchimp TODO stub |
| `GiftCardBuyButton` | ✅ | Variant pills, qty selector, opens Shopify checkout in new tab |

---

## Config & Infrastructure ✅

| Item | Status | Notes |
|---|---|---|
| `tailwind.config.ts` | ✅ | Brand tokens: primary `#BF9B30`, secondary `#7BA368` |
| `next.config.mjs` | ✅ | Image remote patterns: hpjax.com, cdn.shopify.com, img.youtube.com |
| `next-sitemap.config.js` | ✅ | Weekly crawl, robots.txt |
| `.env.local.example` | ✅ | All 7 API keys stubbed |
| `.lighthouserc.json` | ✅ | 95 perf / 100 a11y / 100 BP / 100 SEO |
| Google Fonts | ✅ | Playfair Display (headings) + Inter (body) |
| JSON-LD | ✅ | LocalBusiness (home), ItemList + Product (shop), Service (services) |
| Canonical URLs | ✅ | Every page |
| OG metadata | ✅ | Title template, default image, product images on /shop/[handle] |
| Logo | ✅ | Downloaded to `public/images/logo.png` |
| Build | ✅ | `npm run build` — 0 errors, 33 routes |
| Shopify Storefront API | ✅ | Connected — env vars in Vercel (Production + Preview) |

---

## Pending Integrations 🔧

| Integration | File | Env Vars Needed |
|---|---|---|
| **AcuBliss booking iframe** | `app/book/page.tsx` — uncomment the `<iframe>` | none (public URL) |
| **WordPress blog** | `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` | `WORDPRESS_API_URL` |
| **Shopify gift cards** | ✅ Connected — `app/shop/` live | domain + token in Vercel |
| **Resend contact form** | Create `app/actions/contact.ts` server action | `RESEND_API_KEY` |
| **Mailchimp newsletter** | `components/NewsletterForm.tsx` | `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX` |

---

## 🚀 Pre-Launch Checklist — Must Complete Before Go-Live

### Shopify
- [ ] Upgrade Shopify dev store to **Basic plan ($29/mo)** — removes password gate, enables live checkout
- [ ] Enable remaining gift card variants in Shopify admin (confirm all $25/$50/$100 are `availableForSale`)
- [ ] Add remaining gift card products from WooCommerce store into Shopify (50 Min Massage GC, etc.)
- [ ] Connect custom domain in Shopify (for checkout branding — shows `hpjax.com` not `hpjax.myshopify.com`)
- [ ] Set up Shopify Payments or Stripe as payment processor
- [ ] Configure gift card email delivery template in Shopify admin
- [ ] Remove Shopify demo products (snowboards, ski wax) — only gift cards should be in the store

### Vercel Environment Variables
- [ ] Confirm `NEXT_PUBLIC_SHOPIFY_DOMAIN` and `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` are set for **Production + Preview + Development** (currently Production only)
- [ ] Add `RESEND_API_KEY` when contact form is wired
- [ ] Add `MAILCHIMP_*` vars when newsletter is wired
- [ ] Add `WORDPRESS_API_URL` when blog is connected

### Analytics & Tracking (needs IDs from client)
- [ ] **Google Analytics 4** — add `GA_MEASUREMENT_ID` env var, wire `next/script strategy="afterInteractive"` in `app/layout.tsx`
- [ ] **Google Tag Manager** — alternative to direct GA4; add GTM container snippet via `next/script`
- [ ] **Facebook Pixel** — add `FB_PIXEL_ID` env var, wire Meta Pixel base code via `next/script strategy="afterInteractive"`
- [ ] **Google Search Console** — verify ownership (HTML tag method via Next.js `verification` metadata)
- [ ] **Vercel Analytics** — already in `package.json`, just needs `<Analytics />` added to `app/layout.tsx`
- [ ] **Vercel Speed Insights** — same, add `<SpeedInsights />` to `app/layout.tsx`

### Content
- [ ] Real hero photos for homepage and service pages
- [x] Team member names, headshots, and bios — complete on `/our-team`
- [ ] Final copy review on all service pages (pull verbatim from live WP site)
- [ ] Google Maps embed on `/contact`
- [ ] OG image — proper 1200×630 PNG at `public/images/og-default.png`
- [ ] Favicon / `app/favicon.ico`
- [x] Real patient testimonials — 129 WP reviews imported, live on /testimonials
- [ ] Privacy Policy page (`/privacy-policy`) — **required before running Facebook Pixel**
- [ ] Cookie consent banner — **required for GDPR/CCPA compliance with GA4 + FB Pixel**

### SEO & Technical
- [ ] Submit sitemap to Google Search Console (`https://hpjax.com/sitemap.xml`)
- [ ] Verify all 301 redirects from old WordPress URLs are in `next.config.mjs`
- [ ] Run final Lighthouse audit on production URL (target: 100/100/100/100)
- [ ] Test all forms end-to-end (contact, newsletter)
- [ ] Test Shopify checkout end-to-end on live paid store

---

## Still Needed (Content)

- [ ] Real hero photos for homepage and service pages
- [x] Team member names, headshots, and bios — complete on `/our-team`
- [ ] Final copy review on all service pages
- [ ] Google Maps embed on `/contact`
- [ ] OG image — proper 1200×630 PNG at `public/images/og-default.png`
- [ ] Favicon / `app/favicon.ico`
- [ ] Real patient testimonials
- [ ] Privacy Policy page

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
- [x] Treatment card hover text marked `aria-hidden`
- [x] Testimonial dots: `role="group"` + `aria-pressed`
- [x] Compare-at prices labeled `aria-label="Original price $X"`
- [x] Product prices have full accessible `aria-label`
- [ ] Full keyboard navigation audit (manual)
- [ ] Screen reader test (VoiceOver)
- [ ] Color contrast audit (axe DevTools)

---

## 🎯 Next Session Priorities

1. **Team sub-pages** — build `/our-team/dr-julee-miller`, `/denise`, `/yaira`, `/damaris`, `/angel`, `/dana` (fetch live WP copy for each)
2. **Analytics** — wire GA4 + FB Pixel once IDs are provided
3. **Shopify upgrade** — test full checkout end-to-end on paid plan
4. **WordPress redirects** — map old WP URLs to new routes before DNS cutover
5. **Run Lighthouse** — verify scores after this session's changes

**ADA fixes completed (2026-05-22):**
- [x] Color contrast: teal-dark darkened #1E8A7C → #1E847C (white text 4.53:1)
- [x] Color contrast: btn-primary → text-ink on gold (6.59:1, was 2.64:1)
- [x] Color contrast: btn-secondary → primary-dark border/text (4.57:1)
- [x] Color contrast: BookingCTA → teal-dark/ink gradient, gold button with dark text
- [x] Color contrast: TopBanner text-white/90 → text-white
- [x] Color contrast: fertility section text-white/80 → text-white
- [x] Color contrast: footer bottom bar text-gray-500 → text-gray-400
- [x] Color contrast: global focus ring outline-primary → outline-teal-dark
- [x] Color contrast: skip link bg-primary → bg-teal-dark
- [x] Invalid list HTML: credentials ul>div>li → div>div>div
- [x] Invalid list HTML: What We Treat ul>div>li → div[role=list]>div>div[role=listitem]
- [x] Touch target: testimonial dots 10×10px → 24×24px minimum
- [x] Duplicate landmark: TopBanner role="banner" → role="region"
- [x] Favicon 404: added icons metadata in layout.tsx pointing to logo.png
- [x] Footer Gift Cards link: /gift-cards → /shop
