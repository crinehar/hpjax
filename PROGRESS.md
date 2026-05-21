# Health Pointe Jacksonville — Rebuild Progress

## Status: Homepage cleanup complete, deployed to Vercel ✅
**Last updated:** 2026-05-21

---

## Pages — All 25 routes scaffolded ✅

| Route | Status | Notes |
|---|---|---|
| `/` | ✅ Scaffolded | Hero, services grid, testimonials, BookingCTA, JSON-LD |
| `/about` | ✅ Scaffolded | Mission copy placeholder |
| `/our-team` | ✅ Scaffolded | Placeholder silhouette cards — needs real team photos + bios |
| `/testimonials` | ✅ Scaffolded | Static testimonials — swap with live reviews |
| `/contact` | ✅ Scaffolded | React Hook Form wired; needs Resend server action |
| `/accessibility` | ✅ Scaffolded | WCAG 2.1 AA statement |
| `/book` | ✅ Scaffolded | AcuBliss iframe container — **needs src URL uncommented** |
| `/gift-cards` | ✅ Scaffolded | Shopify stub — **needs Storefront API** |
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

---

## Config & Infrastructure ✅

| Item | Status | Notes |
|---|---|---|
| `tailwind.config.ts` | ✅ | Brand tokens: primary `#BF9B30`, secondary `#7BA368` |
| `next.config.mjs` | ✅ | Image remote patterns for hpjax.com |
| `next-sitemap.config.js` | ✅ | Weekly crawl, robots.txt |
| `.env.local.example` | ✅ | All 7 API keys stubbed |
| `.lighthouserc.json` | ✅ | 95 perf / 100 a11y / 100 BP / 100 SEO |
| Google Fonts | ✅ | Playfair Display (headings) + Inter (body) |
| JSON-LD | ✅ | LocalBusiness schema on homepage |
| Canonical URLs | ✅ | Every page |
| OG metadata | ✅ | Title template, default image |
| Logo | ✅ | Downloaded to `public/images/logo.png` |
| Build | ✅ | `npm run build` — 0 errors, 30 routes |
| Dev server | ✅ | HTTP 200 on `localhost:3000` |

---

## Pending Integrations 🔧

| Integration | File | Env Vars Needed |
|---|---|---|
| **AcuBliss booking iframe** | `app/book/page.tsx` — uncomment the `<iframe>` | none (public URL) |
| **WordPress blog** | `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` | `WORDPRESS_API_URL` |
| **Shopify gift cards** | `app/gift-cards/page.tsx` | `NEXT_PUBLIC_SHOPIFY_DOMAIN`, `NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN` |
| **Resend contact form** | Create `app/actions/contact.ts` server action | `RESEND_API_KEY` |
| **Mailchimp newsletter** | `components/NewsletterForm.tsx` | `MAILCHIMP_API_KEY`, `MAILCHIMP_AUDIENCE_ID`, `MAILCHIMP_SERVER_PREFIX` |

---

## Still Needed (Content)

- [ ] Real hero photos for homepage and service pages
- [ ] Team member names, headshots, and bios (`/our-team`)
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
- [ ] Full keyboard navigation audit (manual)
- [ ] Screen reader test (VoiceOver)
- [ ] Color contrast audit (axe DevTools)

---

## 🎯 Next Session Priority — ADA Score to 100

**Current PageSpeed scores (hpjax.vercel.app — 2026-05-21):**
| Category | Score |
|---|---|
| Performance | 92 |
| Accessibility | 86 ← focus here |
| Best Practices | 100 ✅ |
| SEO | 92 |

**Goal:** Accessibility 86 → 100. Work through every Lighthouse accessibility failure systematically.

**Known issues to address:**
- [ ] Run full Lighthouse accessibility report and capture all failing audits
- [ ] Fix any color contrast failures (ink-muted, ink-subtle on white/surface backgrounds)
- [ ] Audit `<ScrollReveal>` (renders `<div>`) inside `<ul>` — invalid HTML, screen readers affected
- [ ] Verify `lang` attribute and page `<title>` on all routes
- [ ] Audit focus order / tab sequence on mobile nav and dropdowns
- [ ] Verify all interactive states are keyboard accessible
- [ ] Check `aria-expanded` / `aria-controls` wiring on Header dropdowns
- [ ] Audit form error announcement timing
- [ ] TopBanner `role="banner"` conflicts with `<header>` landmark (both are banner role)
