# Health Pointe Jacksonville — Rebuild Progress

## Status: In Progress
**Last updated:** 2026-06-04 (full review session)
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
| `/` | ✅ Complete | Hero, services grid, testimonials, BookingCTA, JSON-LD |
| `/about` | ✅ Scaffolded | Mission copy placeholder |
| `/our-team` | ✅ Complete | Featured Dr. Miller card, full team grid, real photos, ADA/SEO/AIO audited |
| `/our-team/dr-julee-miller` | ✅ Complete | Full profile, FAQ schema, specializations, Making a Difference, ADA/AIO audited |
| `/our-team/denise` | ✅ Complete | Bio, certifications, massage link, FAQ schema |
| `/our-team/yaira` | ✅ Complete | Bio, internal links, FAQ schema |
| `/our-team/damaris` | ✅ Complete | Bio, admin profile, no book button |
| `/our-team/angel` | ✅ Complete | Bio, fun facts, no book button |
| `/our-team/dana` | ✅ Complete | Bio, fun facts, no book button |
| `/testimonials` | ✅ Complete | 129 real WP reviews, category filter + search, Google badge (319), AggregateRating schema |
| `/contact` | ✅ Complete | LeadConnector iframe (lazy-loaded), hero image, verbatim WP copy, ContactPage + LocalBusiness schema |
| `/accessibility` | ✅ Complete | WCAG 2.2 AA statement, verbatim WP copy, technical specs list, contact links |
| `/book` | ✅ Removed | 302 redirect → AcuBliss; all Book Now buttons open new tab directly |
| `/shop` | ✅ Live | Shopify headless product grid — fetches live gift cards |
| `/shop/[handle]` | ✅ Live | Product detail — variant selector, qty, buy → new tab checkout |
| `/blog` | ✅ Scaffolded | Static 125 WP posts — **needs WordPress REST API for live data** |
| `/blog/[slug]` | ✅ Scaffolded | Dynamic route with static params |
| `/womens-health` | ✅ Complete | Full rebuild — hero, intro, What We Treat, service cards (fertility/pelvic/dry needling), natural approach, CTA, FAQ schema, ADA/SEO/AIO audited |
| `/services/massage-therapy-jacksonville` | ✅ Complete | Full rebuild — hero, 7 sections, image grid, FAQ, reviews carousel, ADA/SEO/AIO audited |
| `/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller` | ✅ Complete | Full rebuild — hero, 8 sections, 3 image cards, IVF stats, reviews, fertility quiz CTA, ADA/SEO/AIO audited |
| `/services/pelvic-floor` | ✅ Complete | Full rebuild (moved from /pelvic-floor/, 301 redirect added) — hero, who should seek, comprehensive care bg image, CTA band, reviews, ADA/SEO/AIO audited |
| `/services/dry-needling-jacksonville-fl` | ✅ Complete | New page (301 redirect from /dry-needling-jacksonville-fl/) — hero, 8 sections, conditions grid, team bg image, comparison, ADA/SEO/AIO audited |
| `/services/acupuncture` | ✅ Complete | Full review — new hero + full-bleed images, full-width intro, WP SEO, ADA/AIO audited |
| `/services/sports-acupuncture` | ✅ Complete | Full review — new hero, intro text, 3 treatment images, full-bleed cycling image, WP SEO, ADA/AIO audited |
| `/services/pediatric-acupuncture` | ✅ Complete | Full review — new hero, WP copy, warm-up section with 3 images, shonishin full-bleed, WP SEO, ADA/AIO audited |
| `/services/quit-smoking-program-jacksonville` | ✅ Complete | Full review — new hero, WP copy throughout, How Does It Work + 3 images, guarantee full-bleed, WP SEO, ADA/AIO audited |
| `/services/chronic-pain` | ✅ Complete | Moved from /chronic-pain/ (301 redirect) — full review, new images, quiz CTA band, ADA/SEO/AIO audited |
| `/services/neurological-disorders` | ✅ Complete | Moved from /neurological-disorders/ (301 redirect) — full review, new images, 3-image grid, reclaim health full-bleed, ADA/SEO/AIO audited |
| `/services/long-covid-syndrome` | ✅ Complete | Full rebuild — hero, intro, symptom groups (3-col), why choose + image grid, research quote full-bleed, FAQ, reclaim health full-bleed, aftercare, reviews, ADA/SEO/AIO audited |
| `/services/cosmetic-facial-acupuncture` | ✅ Complete | Full rebuild — hero, benefits grid, approach, image band, FAQ, reviews carousel, ADA/SEO/AIO audited |
| `/services/o3-regenerative-therapy` | ✅ Complete | Full rebuild — hero, accordion, conditions grid, consultation, image grid, FAQ (ol), reviews, ADA/SEO/AIO audited |
| `/services/acupuncture-point-injection-therapy` | ✅ Complete | Full rebuild — hero, conditions grid, how it works, biopuncture products grid, image band, FAQ, reviews, ADA/SEO/AIO audited |
| `/services/b12-injections` | ✅ Complete | Full rebuild — hero, intro, benefits grid, fat burning section, ingredients grid, image band, FAQ, aftercare, FDA disclaimer, ADA/SEO/AIO audited |
| `/services` | ✅ Complete | New page — 4 sections (Women's Health, Acupuncture, Massage, Additional), service cards with ABORM badge, ItemList schema, ADA/SEO/AIO audited |
| `/health-pointe-jax-careers` | ✅ Complete | New page — mission, 5 core values, 3 job listings, gradient CTA, WP copy verbatim, added to footer quick links |
| `/get-pregnant-faster` | ❌ Missing | In WP sitemap — confirm if needed (landing page?) |
| `/pathway-to-pregancy` | ❌ Missing | In WP sitemap — confirm if needed (landing page, note WP typo) |
| `/pelvic-floor-health-quiz` | ❌ Missing | In WP sitemap — quiz page, needs discussion |
| `/free-pain-screening-quiz` | ❌ Missing | In WP sitemap — quiz page, needs discussion (linked from /services/chronic-pain/) |
| `/accessibility-statement` | ⚠️ URL mismatch | WP uses `/accessibility-statement/`, we have `/accessibility/` — needs redirect or rename |

---

## Shared Components ✅

| Component | Status | Notes |
|---|---|---|
| `Layout` | ✅ | Skip-to-content + Header + Footer wrapper |
| `Header` | ✅ | Sticky, hamburger mobile nav, Services flyout, Blog in About dropdown |
| `Footer` | ✅ | NAP, social links, newsletter form |
| `HeroSection` | ✅ | Image-optional, Framer Motion, dual CTA |
| `ServiceCard` | ✅ | Hover-lift motion card |
| `TestimonialCarousel` | ✅ | Chevron nav + counter, aria-live, no dots |
| `BookingCTA` | ✅ | Gold gradient CTA band — opens AcuBliss in new tab |
| `InsuranceBanner` | ✅ | Insurance provider list |
| `PageTransition` | ✅ | Framer Motion fade wrapper |
| `ScrollReveal` | ✅ | `useInView` scroll-triggered, 4 directions |
| `ContactForm` | ✅ | React Hook Form, full ARIA error binding (unused — contact page uses LeadConnector iframe) |
| `ServicePageTemplate` | ✅ | Reusable server template for scaffolded service pages |
| `NewsletterForm` | ✅ | Email input, Mailchimp TODO stub |
| `GiftCardBuyButton` | ✅ | Variant pills, qty selector, opens Shopify checkout in new tab |
| `LazyContactForm` | ✅ | IntersectionObserver defers LeadConnector iframe — prevents CLS and perf hit |

---

## Config & Infrastructure ✅

| Item | Status | Notes |
|---|---|---|
| `tailwind.config.ts` | ✅ | Brand tokens: primary `#BF9B30`, teal `#3FBFAE`, teal-dark `#1E8A7C` |
| `next.config.mjs` | ✅ | Image patterns, 301 redirects (team pages + 125 blog posts auto-generated), /book → AcuBliss |
| `next-sitemap.config.js` | ✅ | Weekly crawl, robots.txt |
| `.env.local.example` | ✅ | All 7 API keys stubbed |
| Google Fonts | ✅ | Playfair Display (headings) + Inter (body) |
| JSON-LD | ✅ | LocalBusiness (home), ItemList + Product (shop), Service (services), ProfilePage (team), ContactPage (contact) |
| Canonical URLs | ✅ | Every page |
| OG metadata | ✅ | Title template, default image, product images on /shop/[handle] |
| Logo | ✅ | Downloaded to `public/images/logo.png` |
| Build | ✅ | `npm run build` — 0 errors, 160 routes |
| Shopify Storefront API | ✅ | Connected — env vars in Vercel (Production + Preview) |
| Blog 301 redirects | ✅ | All 125 WP posts auto-redirected from `/:slug` → `/blog/:slug` |

---

## Redirects (next.config.mjs)

| Old WP URL | New URL | Type |
|---|---|---|
| `/about-acupuncture-physician` | `/our-team/dr-julee-miller` | 301 |
| `/denise-lead-lmt` | `/our-team/denise` | 301 |
| `/yaira-lmt` | `/our-team/yaira` | 301 |
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

---

## Pending Integrations 🔧

| Integration | File | Env Vars Needed |
|---|---|---|
| **WordPress blog** | `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` | `WORDPRESS_API_URL` |
| **Resend contact form** | Create `app/actions/contact.ts` server action | `RESEND_API_KEY` |
| **Mailchimp newsletter** | `components/NewsletterForm.tsx` | `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX` |
| **Mailchimp fertility quiz drip campaign** | Build `/fertility-quiz` landing page + form → Mailchimp drip sequence | `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX` |
| **Mailchimp pelvic health quiz drip campaign** | Build `/pelvic-health-quiz` landing page + form → Mailchimp drip sequence | `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX` |

---

## 🚀 Pre-Launch Checklist — Must Complete Before Go-Live

### Shopify
- [ ] **Re-create Shopify store under client's email** — current store is under developer email, needs to be owned by client
- [ ] Upgrade Shopify dev store to **Basic plan ($29/mo)** — removes password gate, enables live checkout
- [ ] Enable remaining gift card variants in Shopify admin (confirm all $25/$50/$100 are `availableForSale`)
- [ ] Add remaining gift card products from WooCommerce store into Shopify (50 Min Massage GC, etc.)
- [ ] Connect custom domain in Shopify (for checkout branding — shows `hpjax.com` not `hpjax.myshopify.com`)
- [ ] Set up Shopify Payments or Stripe as payment processor
- [ ] Configure gift card email delivery template in Shopify admin
- [ ] Remove Shopify demo products (snowboards, ski wax) — only gift cards should be in the store

### Vercel
- [ ] **Upgrade to Vercel Pro** — required for production deployment with custom domain, team features, and SLA
- [ ] Transfer project to client's Vercel account or add client as owner

### GitHub
- [ ] **Make repository private** — currently public, should be private before go-live

### Vercel Environment Variables
- [ ] Confirm `NEXT_PUBLIC_SHOPIFY_DOMAIN` and `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` are set for **Production + Preview + Development**
- [ ] Add `RESEND_API_KEY` when contact form is wired
- [ ] Add `MAILCHIMP_*` vars when newsletter is wired
- [ ] Add `WORDPRESS_API_URL` when blog is connected

### Analytics & Tracking (needs IDs from client)
- [ ] **Google Analytics 4** — add `GA_MEASUREMENT_ID` env var, wire `next/script strategy="afterInteractive"` in `app/layout.tsx`
- [ ] **Google Tag Manager** — alternative to direct GA4
- [ ] **Facebook Pixel** — add `FB_PIXEL_ID` env var
- [ ] **Google Search Console** — verify ownership
- [ ] **Vercel Analytics** — add `<Analytics />` to `app/layout.tsx`
- [ ] **Vercel Speed Insights** — add `<SpeedInsights />` to `app/layout.tsx`

### Content
- [ ] Real hero photos for homepage and remaining service pages
- [x] Team member names, headshots, and bios — all 6 sub-pages complete
- [ ] Final copy review on all scaffolded service pages (pull verbatim from live WP site)
- [ ] OG image — proper 1200×630 PNG at `public/images/og-default.png`
- [ ] Favicon / `app/favicon.ico`
- [x] Real patient testimonials — 129 WP reviews imported
- [ ] Privacy Policy page (`/privacy-policy`) — **required before running Facebook Pixel**
- [ ] Cookie consent banner — **required for GDPR/CCPA compliance with GA4 + FB Pixel**

### SEO & Technical
- [ ] Submit sitemap to Google Search Console (`https://hpjax.com/sitemap.xml`)
- [ ] Verify all remaining 301 redirects from old WordPress URLs
- [ ] Run final Lighthouse audit on production URL (target: 100/100/100/100)
- [ ] Test Shopify checkout end-to-end on live paid store
- [ ] Wire live chat widget (client to provide embed code)

---

## 🎯 Next Session Priorities

1. **Quiz landing pages** — `/free-pain-screening-quiz` (linked from chronic pain page), `/pelvic-floor-health-quiz`, `/fertility-quiz` with Mailchimp drip
2. **Remaining missing pages** — `/get-pregnant-faster`, `/pathway-to-pregnancy`, `/accessibility-statement` redirect
3. **Page reviews** — remaining service pages not yet reviewed: massage, cosmetic, O3, APIT, B12, pelvic floor, dry needling, fertility, womens-health
4. **Analytics** — wire GA4 + FB Pixel once IDs are provided
5. **Shopify upgrade** — test full checkout end-to-end on paid plan
6. **Live chat** — add floating chat widget embed code

---

## 📧 Client Follow-Up Email — Pending

Send follow-up email summarizing key improvements over the live WordPress site. Include:

### Performance & Technical
- Next.js 14 SSG — pages served as static HTML (no PHP/WordPress overhead)
- Target PageSpeed 100/100/100/100 vs current WP scores
- Sub-100KB first-load JS bundle
- All images converted to next/image with lazy loading, explicit dimensions, priority prop on heroes
- No render-blocking scripts — all third-party JS deferred

### SEO Image Renaming
All images renamed from generic/hash filenames to descriptive kebab-case SEO filenames. Examples:
- `shutterstock_617618081-scaled-1.jpg` → `b12-nutrition-metabolism-jacksonville-fl.jpg`
- `AcupuncturePointInjectionTherapy.webp` → `acupuncture-point-injection-therapy-jacksonville-fl.webp`
- `rsw_1200h_600cg_true.webp` → `o3-ozone-therapy-jacksonville-fl.webp`
- `cosmeticacu.jpg` → `cosmetic-facial-acupuncture-treatment-jacksonville-fl.jpg`
- (all service, team, and hero images renamed similarly)

### ADA / WCAG 2.2 AA
- Native semantic HTML — no accessibility overlay widget
- Skip-to-content link, proper landmark regions on every page
- One H1 per page, logical heading hierarchy enforced
- All images have descriptive alt text; decorative images use `alt=""`
- All external links include `aria-label` with "(opens in new tab)"
- Visible focus rings on all interactive elements
- ARIA live regions on dynamic content (testimonial carousel)
- `<details>`/`<summary>` for accordions — keyboard accessible, no JS required

### AIO / LLM Readability
- Clean SSG HTML with low rendered content percentage
- JSON-LD schema on every page: MedicalWebPage, Service, FAQPage, BreadcrumbList, LocalBusiness, Person
- Service pages include `hasOfferCatalog` listing all treatment offerings
- FAQ sections with question-framed headings on every service page
- NAP (name, address, phone) as plain HTML in every page footer
- `llms.txt` in /public

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
- [x] All booking buttons consistent gold (`btn-primary`)
- [ ] Full keyboard navigation audit (manual)
- [ ] Screen reader test (VoiceOver)
- [ ] Color contrast audit (axe DevTools)

---

## ADA Fixes Log (2026-06-02)
- [x] Dr. Miller FAQ: removed ScrollReveal from inside `<dl>` (invalid nesting)
- [x] Contact page: `aria-labelledby` added to hero `<header>`
- [x] All `target="_blank"` booking links: `aria-label="... (opens in new tab)"`
- [x] TestimonialCarousel: dots removed, chevrons + counter kept (cleaner, still WCAG compliant)
- [x] Massage page "Learn More": `aria-label="Learn more about fertility massage"` added
- [x] Massage page schema: fixed invalid nested `@graph` → flat valid JSON-LD
