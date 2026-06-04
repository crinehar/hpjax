import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Accessibility Statement | Health Pointe Jacksonville",
  description:
    "Health Pointe Jacksonville's commitment to web accessibility. We strive to meet WCAG 2.2 Level AA standards and welcome feedback from all users.",
  alternates: { canonical: "https://hpjax.com/accessibility/" },
};

export default function AccessibilityPage() {
  return (
    <main>
      <section aria-labelledby="accessibility-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h1 id="accessibility-heading" className="section-heading mb-6">
              Accessibility Statement
            </h1>
            <p className="text-ink-muted leading-relaxed mb-10">
              Health Pointe Jacksonville is committed to ensuring our website is accessible and welcoming to everyone, regardless of ability or the technology they use to browse the web.
            </p>

            <h2 className="font-heading font-bold text-ink text-xl mt-10 mb-3">What Are We Doing?</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              To help us make our website a positive place for everyone, we&apos;ve been using the{" "}
              <a
                href="https://www.w3.org/TR/WCAG22/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Web Content Accessibility Guidelines 2.2 (opens in new tab)"
                className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm"
              >
                Web Content Accessibility Guidelines (WCAG) 2.2
              </a>
              . These guidelines explain how to make web content more accessible for people with disabilities, and user-friendly for everyone.
            </p>

            <h2 className="font-heading font-bold text-ink text-xl mt-10 mb-3">How Are We Doing?</h2>
            <p className="text-ink-muted leading-relaxed mb-4">
              We are working hard to achieve our goal of Level AA accessibility, but we realize there are some areas that still need improving. This site is built with native semantic HTML — no accessibility overlays or third-party widgets — so every improvement is real and lasting.
            </p>
            <ul className="space-y-2 text-ink-muted text-sm mb-6">
              {[
                "Skip-to-content link on every page",
                "Semantic landmarks: header, nav, main, footer",
                "All images include descriptive alt text",
                "Visible keyboard focus indicators on all interactive elements",
                "Color contrast ratios meet WCAG AA minimums (4.5:1)",
                "No auto-playing audio or video",
                "No accessibility overlays or third-party widgets that modify the DOM",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1.5 w-2 h-2 flex-shrink-0 rounded-full bg-teal-dark" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="font-heading font-bold text-ink text-xl mt-10 mb-3">Contact Us — We Are Here to Help</h2>
            <p className="text-ink-muted leading-relaxed mb-5">
              If you enjoyed using the hpjax.com website, or if you had trouble with any part of it, please get in touch. We will work with you to provide the information or item you seek through a communication method that is accessible for you.
            </p>
            <ul className="list-none space-y-3 text-ink-muted">
              <li>
                <span className="font-semibold text-ink">Email: </span>
                <a
                  href="mailto:info@hpjax.com"
                  className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm"
                >
                  info@hpjax.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-ink">Call us: </span>
                <a
                  href="tel:9044480046"
                  className="text-teal-dark underline underline-offset-2 hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm"
                >
                  (904) 448-0046
                </a>
              </li>
            </ul>

            <p className="text-xs text-ink-muted mt-10">Last reviewed: June 2026</p>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
