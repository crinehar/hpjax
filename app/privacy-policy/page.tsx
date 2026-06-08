import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Health Pointe Jacksonville. Learn how we collect, use, and protect your personal information.",
  alternates: { canonical: "https://hpjax.com/privacy-policy/" },
  robots: { index: true, follow: true },
};

const LAST_UPDATED = "June 8, 2026";
const CLINIC_NAME = "Health Pointe Jacksonville";
const CLINIC_ADDRESS = "3840 Belfort Rd STE 305, Jacksonville, FL 32216";
const CLINIC_EMAIL = "info@hpjax.com";
const CLINIC_PHONE = "(904) 448-0046";

export default function PrivacyPolicyPage() {
  return (
    <main id="main-content" className="bg-white">

      {/* Hero */}
      <header className="bg-teal-dark py-14 px-4 text-center">
        <h1 className="font-heading font-bold text-white text-4xl md:text-5xl mb-3">
          Privacy Policy
        </h1>
        <p className="text-white/80 text-sm">Last updated: {LAST_UPDATED}</p>
      </header>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-slate max-w-none prose-headings:font-heading prose-headings:text-ink prose-a:text-teal-dark prose-a:no-underline hover:prose-a:underline">

          <p className="lead text-ink-muted">
            {CLINIC_NAME} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
            you visit our website <strong>hpjax.com</strong> or contact us about our services.
            Please read this policy carefully. If you disagree with its terms, please discontinue use of the site.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>1. Information We Collect</h2>

          <h3>Information You Provide Directly</h3>
          <ul>
            <li>Name, email address, and phone number submitted through contact or quiz forms</li>
            <li>Health-related information you voluntarily provide in quiz or intake forms</li>
            <li>Payment information processed through Shopify when purchasing gift cards (we do not store card numbers — Shopify handles payment processing)</li>
            <li>Messages sent through our live chat widget (LeadConnector / GoHighLevel)</li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <ul>
            <li>Browser type, device type, IP address, and pages visited (via Google Analytics)</li>
            <li>Referring URLs and session duration</li>
            <li>Cookie identifiers and similar tracking technologies (see Section 5)</li>
          </ul>

          <hr className="my-8 border-surface-muted" />

          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to inquiries and schedule appointments</li>
            <li>Process gift card purchases</li>
            <li>Send appointment reminders or wellness newsletters (only if you have opted in)</li>
            <li>Improve our website and services based on usage data</li>
            <li>Run and measure digital advertising campaigns (Google Ads, Meta/Facebook)</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p>
            We do not sell your personal information to third parties.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>3. HIPAA Notice</h2>
          <p>
            {CLINIC_NAME} is a healthcare provider subject to the Health Insurance Portability and
            Accountability Act (HIPAA). Protected Health Information (PHI) collected as part of your
            clinical care is governed by our separate <strong>HIPAA Notice of Privacy Practices</strong>,
            available at our clinic and upon request. This Privacy Policy covers information collected
            through our website and marketing channels only.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>4. Third-Party Services</h2>
          <p>
            Our website uses the following third-party services that may collect information about you:
          </p>

          <h3>Google Analytics 4 &amp; Google Ads</h3>
          <p>
            We use Google Analytics to understand how visitors use our site and Google Ads to measure
            advertising effectiveness. Google may collect cookies and usage data. You can opt out via
            the <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a>.
          </p>

          <h3>Meta Pixel (Facebook)</h3>
          <p>
            We use Meta&apos;s advertising pixel to measure conversions and serve relevant ads on Facebook
            and Instagram. Meta may use cookies to track your activity across websites. You can manage
            your ad preferences at <a href="https://www.facebook.com/ads/preferences" target="_blank" rel="noopener noreferrer">facebook.com/ads/preferences</a>.
          </p>

          <h3>LeadConnector / GoHighLevel (Live Chat)</h3>
          <p>
            Our live chat widget is powered by LeadConnector (GoHighLevel). Messages you submit through
            chat are received by our team and stored in their platform. View GoHighLevel&apos;s privacy
            policy at <a href="https://www.gohighlevel.com/privacy-policy" target="_blank" rel="noopener noreferrer">gohighlevel.com/privacy-policy</a>.
          </p>

          <h3>Shopify</h3>
          <p>
            Gift card purchases are processed through Shopify&apos;s Storefront API. Payment and order
            data are handled by Shopify in accordance with their privacy policy at{" "}
            <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noopener noreferrer">shopify.com/legal/privacy</a>.
          </p>

          <h3>AcuBliss (Online Booking)</h3>
          <p>
            Appointment booking is handled by AcuBliss. Information you submit during booking is
            subject to their privacy practices.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>5. Cookies</h2>
          <p>
            We use cookies and similar technologies to operate our website, analyze traffic, and
            support advertising. These include:
          </p>
          <ul>
            <li><strong>Essential cookies</strong> — required for the site to function</li>
            <li><strong>Analytics cookies</strong> — Google Analytics (usage data)</li>
            <li><strong>Advertising cookies</strong> — Google Ads, Meta Pixel</li>
          </ul>
          <p>
            You can control cookies through your browser settings. Disabling cookies may affect site
            functionality.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>6. Data Retention</h2>
          <p>
            We retain personal information only as long as necessary to fulfill the purposes described
            in this policy or as required by law. Analytics data is retained per Google&apos;s default
            retention settings (14 months for user-level data).
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>7. Your Rights</h2>
          <p>
            Depending on your location, you may have the right to:
          </p>
          <ul>
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
          <p>
            To exercise any of these rights, contact us using the information in Section 9.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>8. Children&apos;s Privacy</h2>
          <p>
            Our website is not directed to children under 13. We do not knowingly collect personal
            information from children. If you believe a child has provided us with personal information,
            please contact us and we will delete it.
          </p>

          <hr className="my-8 border-surface-muted" />

          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your privacy rights,
            please contact us:
          </p>
          <address className="not-italic bg-surface rounded-xl p-6 text-ink-muted text-sm leading-loose">
            <strong className="text-ink">{CLINIC_NAME}</strong><br />
            {CLINIC_ADDRESS}<br />
            <a href={`tel:${CLINIC_PHONE.replace(/\D/g, "")}`} className="text-teal-dark hover:underline">{CLINIC_PHONE}</a><br />
            <a href={`mailto:${CLINIC_EMAIL}`} className="text-teal-dark hover:underline">{CLINIC_EMAIL}</a>
          </address>

          <hr className="my-8 border-surface-muted" />

          <h2>10. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be posted on this page
            with an updated &ldquo;Last updated&rdquo; date. We encourage you to review this policy periodically.
          </p>

          <div className="mt-10 p-5 bg-surface rounded-xl border border-surface-muted text-sm text-ink-muted">
            <strong className="text-ink">Note:</strong> This is a general privacy policy. {CLINIC_NAME} recommends
            having this document reviewed by a licensed attorney familiar with Florida law, HIPAA, and
            applicable digital advertising regulations before go-live.
          </div>

        </div>

        <div className="mt-12 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-dark hover:text-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
