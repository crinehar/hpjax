# Health Pointe Jacksonville — hpjax.com Rebuild

## Project Mission
Rebuild hpjax.com from WordPress/Elementor into Next.js 14+. 
Top priorities in order: PageSpeed 100s, Native ADA/WCAG 2.2 AA, AIO/LLM readability, then design fidelity.

## Tech Stack
- Next.js 14+ App Router, TypeScript
- Tailwind CSS v3
- Framer Motion
- Vercel hosting
- Headless WordPress (blog via REST API)
- Shopify Headless (gift cards via Storefront API)
- AcuBliss iframe embed (booking)
- React Hook Form + Resend (contact form)
- Mailchimp (newsletter)
- Vercel Analytics + Speed Insights

## Brand
- Site: https://hpjax.com
- Logo: https://hpjax.com/wp-content/uploads/2025/03/health-pointe-horizontal-logo.png
- NAP: 3840 Belfort Rd STE 305, Jacksonville FL 32216 | 904-448-0046
- Feel: warm, clean, professional medical — not clinical or cold
- Primary actions: Book Now → /book, Verify Insurance (external), Gift Cards → /gift-cards
- Primary color: teal `#3FBFAE` / teal-dark `#1E8A7C` (4.6:1 on white, WCAG AA)

## Copy Rules (non-negotiable)
- NEVER invent or rewrite page copy — always pull verbatim text from the live WordPress site
- Before building any section with body copy (headings, paragraphs, CTAs), fetch the live WP equivalent URL
- If a page doesn't exist yet on WordPress, ask the user to provide the copy
- This applies to ALL pages, not just the homepage

## Performance Rules (non-negotiable)
- Target: 100/100/100/100 on PageSpeed Insights mobile and desktop
- Every image: next/image with explicit width, height, alt — no exceptions
- Hero image: priority prop + preload
- Default to Server Components — "use client" only when Framer Motion or state requires it
- No third-party scripts in <head> — next/script strategy="lazyOnload" only
- AcuBliss iframe: fixed-height container to prevent CLS
- Bundle target: <100KB first load JS
- Run @next/bundle-analyzer before any PR

## ADA Rules (non-negotiable)
- No accessibility overlay — native semantic HTML only
- Every page: skip-to-content link, header, nav, main, footer landmarks
- One H1 per page, logical heading hierarchy, no skipped levels
- All inputs: associated <label>, aria-required, aria-describedby for errors
- All icon-only buttons: aria-label
- Focus rings visible on all interactive elements — never outline:none
- Color contrast: 4.5:1 minimum, 7:1 preferred
- Run axe DevTools on every component before merging
- aria-live="polite" region for form success/error states

## AIO Rules
- Clean SSG HTML — low rendered content percentage for LLM readability
- Semantic heading hierarchy on every page
- FAQ sections on service pages with question-framed H2s
- JSON-LD schemas: LocalBusiness (home), Article (blog), Service (services), FAQ (condition pages)
- llms.txt in /public — update after URL restructure
- NAP in footer as plain HTML text always

## SEO Rules (implement but don't strategize — SEO team owns strategy)
- Implement whatever meta titles, descriptions, and schema the SEO team provides
- Review their work for technical correctness before deploying
- Every page: title, description, og:image, canonical URL via Next.js Metadata API
- Title template: "%s | Health Pointe Jacksonville"
- Sitemap via next-sitemap including dynamic blog slugs
- robots.txt configured

## API Stubs (do not call live until keys are provided)
- Blog: fully static via `lib/posts-data.ts` — no WordPress API, WordPress deleted at DNS cutover
- Shopify Storefront API: NEXT_PUBLIC_SHOPIFY_DOMAIN, NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
- Resend: RESEND_API_KEY
- Constant Contact (newsletter): CONSTANT_CONTACT_API_KEY

## File Structure
app/
  layout.tsx         — root layout, metadata defaults, skip link
  page.tsx           — homepage (COMPLETE — verbatim WP copy, pending audit)
  our-team/page.tsx
  testimonials/page.tsx
  contact/page.tsx
  accessibility/page.tsx
  book/page.tsx      — AcuBliss iframe (LIVE)
  gift-cards/page.tsx
  womens-health/page.tsx
  blog/
    page.tsx
    [slug]/page.tsx
  pelvic-floor/page.tsx
  chronic-pain/page.tsx
  neurological-disorders/page.tsx
  long-covid-syndrome/page.tsx
  services/
    fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/page.tsx
    acupuncture/page.tsx
    sports-acupuncture/page.tsx
    pediatric-acupuncture/page.tsx
    quit-smoking-program-jacksonville/page.tsx
    cosmetic-facial-acupuncture/page.tsx
    o3-regenerative-therapy/page.tsx
    acupuncture-point-injection-therapy/page.tsx
    b12-injections/page.tsx
    massage-therapy-jacksonville/page.tsx
components/
  TopBanner.tsx      — teal utility bar (insurance link, social icons, TikTok)
  Header.tsx         — disclosure mega-menu nav, mobile accordion
  Layout.tsx         — TopBanner + Header + Footer wrapper
  Footer.tsx
  TestimonialCarousel.tsx
  BookingCTA.tsx     — accepts heading/body/ctaLabel props
  InsuranceBanner.tsx
  VideoFacade.tsx    — YouTube thumbnail-first, iframe on click
  ContactForm.tsx    — React Hook Form + Resend server action stub
  ScrollReveal.tsx   — Framer Motion whileInView wrapper
lib/
  blog.ts            — WordPress REST API fetcher (stubbed)
  shopify.ts         — Shopify Storefront API (stubbed)
  schema.ts          — JSON-LD generators (homepageSchema, servicePageSchema, etc.)
public/
  llms.txt
  robots.txt
  images/            — all images renamed for SEO (descriptive kebab-case filenames)
