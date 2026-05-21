import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Accessibility Statement",
  description: "Health Pointe Jacksonville's commitment to web accessibility. We strive to meet WCAG 2.1 AA standards.",
  alternates: { canonical: "https://hpjax.com/accessibility" },
};

export default function AccessibilityPage() {
  return (
    <section aria-labelledby="accessibility-heading" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h1 id="accessibility-heading" className="section-heading">Accessibility Statement</h1>
          <p className="text-ink-muted leading-relaxed mb-4">
            Health Pointe Jacksonville is committed to ensuring digital accessibility for people with disabilities. We continually improve the user experience for everyone and apply relevant accessibility standards.
          </p>

          <h2 className="text-xl font-heading font-bold text-ink mt-8 mb-3">Conformance Status</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            We aim to conform to the{" "}
            <a
              href="https://www.w3.org/TR/WCAG21/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            </a>
            . This site uses native semantic HTML, ARIA landmarks, visible focus indicators, and descriptive alternative text for all images.
          </p>

          <h2 className="text-xl font-heading font-bold text-ink mt-8 mb-3">Technical Specifications</h2>
          <ul className="list-disc list-inside space-y-2 text-ink-muted text-sm">
            <li>Skip-to-content link on every page</li>
            <li>Semantic landmarks: <code>header</code>, <code>nav</code>, <code>main</code>, <code>footer</code></li>
            <li>All images include descriptive alt text</li>
            <li>Visible keyboard focus indicators on all interactive elements</li>
            <li>Color contrast ratios meet WCAG AA minimums</li>
            <li>No auto-playing audio or video</li>
            <li>No accessibility overlays or third-party widgets that modify the DOM</li>
          </ul>

          <h2 className="text-xl font-heading font-bold text-ink mt-8 mb-3">Feedback</h2>
          <p className="text-ink-muted leading-relaxed mb-4">
            We welcome feedback on the accessibility of this site. If you experience any barriers, please contact us:
          </p>
          <ul className="list-none space-y-2 text-ink-muted text-sm">
            <li>
              Phone:{" "}
              <a href="tel:9044480046" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm">
                (904) 448-0046
              </a>
            </li>
            <li>
              Email:{" "}
              <a href="mailto:info@hpjax.com" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm">
                info@hpjax.com
              </a>
            </li>
          </ul>

          <p className="text-xs text-ink-subtle mt-8">Last reviewed: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long" })}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}
