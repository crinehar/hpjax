import type { Metadata } from "next";
import ScrollReveal from "@/components/ScrollReveal";
import BookingCTA from "@/components/BookingCTA";

export const metadata: Metadata = {
  title: "Gift Cards",
  description: "Give the gift of wellness — purchase Health Pointe Jacksonville gift cards for acupuncture and wellness services.",
  alternates: { canonical: "https://hpjax.com/gift-cards" },
};

export default function GiftCardsPage() {
  return (
    <>
      <section aria-labelledby="gift-cards-heading" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 id="gift-cards-heading" className="section-heading">Gift Cards</h1>
            <p className="section-subheading">
              Give someone the gift of health. Our gift cards are redeemable for any service at Health Pointe Jacksonville.
            </p>
          </ScrollReveal>

          {/* TODO: Wire up Shopify Storefront API using:
              NEXT_PUBLIC_SHOPIFY_DOMAIN and NEXT_PUBLIC_SHOPIFY_STOREFRONT_TOKEN
              Fetch products from the "Gift Cards" collection and render a buy button */}
          <ScrollReveal delay={0.1}>
            <div className="mt-8 p-10 rounded-xl border-2 border-dashed border-primary/30 bg-surface-muted">
              <div className="text-5xl mb-4" aria-hidden="true">🎁</div>
              <h2 className="font-heading font-bold text-ink text-xl mb-3">Shopify Gift Cards Coming Soon</h2>
              <p className="text-ink-muted text-sm leading-relaxed">
                The gift card store is being set up. In the meantime, call us at{" "}
                <a href="tel:9044480046" className="text-primary font-semibold hover:underline">
                  (904) 448-0046
                </a>{" "}
                to purchase a gift card over the phone.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <BookingCTA
        heading="Book a Service Today"
        body="Not sure which gift card amount to get? Browse our services first."
        ctaLabel="View Services"
      />
    </>
  );
}
