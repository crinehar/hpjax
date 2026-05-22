import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getGiftCards } from "@/lib/shopify";
import { shopPageSchema } from "@/lib/schema";
import BookingCTA from "@/components/BookingCTA";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Gift Cards — Acupuncture & Wellness",
  description:
    "Give the gift of healing. Health Pointe Jacksonville gift cards are redeemable for acupuncture, massage therapy, and wellness services in Jacksonville, FL. Starting from $10.",
  alternates: { canonical: "https://hpjax.com/shop/" },
  openGraph: {
    title: "Gift Cards — Health Pointe Jacksonville",
    description:
      "Give the gift of healing. Redeemable for acupuncture, massage, and wellness services in Jacksonville, FL.",
    url: "https://hpjax.com/shop/",
    type: "website",
    siteName: "Health Pointe Jacksonville",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gift Cards — Health Pointe Jacksonville",
    description:
      "Give the gift of healing. Redeemable for acupuncture, massage, and wellness services in Jacksonville, FL.",
  },
};

function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    parseFloat(amount)
  );
}

export default async function ShopPage() {
  const giftCards = await getGiftCards().catch(() => []);

  const schema = shopPageSchema(
    giftCards.map((c) => {
      const lowestVariant = c.variants.reduce((min, v) =>
        parseFloat(v.price.amount) < parseFloat(min.price.amount) ? v : min
      );
      return {
        title: c.title,
        handle: c.handle,
        description: c.description || `${c.title} — redeemable for any service at Health Pointe Jacksonville.`,
        price: lowestVariant.price.amount,
        currencyCode: lowestVariant.price.currencyCode,
        imageUrl: c.featuredImage?.url,
        imageAlt: c.featuredImage?.altText ?? c.title,
        availableForSale: c.variants.some((v) => v.availableForSale),
      };
    })
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section aria-labelledby="shop-heading" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-4">
              <h1 id="shop-heading" className="section-heading">Gift Cards</h1>
            </div>
          </ScrollReveal>

          {/* AIO: introductory prose for LLM crawlers and screen readers */}
          <ScrollReveal delay={0.05}>
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="section-subheading">
                Give someone the gift of health. Health Pointe Jacksonville gift cards are
                redeemable for any service at our clinic — including acupuncture, massage
                therapy, B12 injections, and more. Gift cards are delivered by email.
              </p>
            </div>
          </ScrollReveal>

          {giftCards.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-ink-muted">
                Gift cards are temporarily unavailable. Call us at{" "}
                <a
                  href="tel:9044480046"
                  className="text-primary font-semibold hover:underline"
                >
                  (904) 448-0046
                </a>{" "}
                to purchase by phone.
              </p>
            </div>
          ) : (
            <ul
              role="list"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {giftCards.map((card, i) => {
                const lowestVariant = card.variants.reduce((min, v) =>
                  parseFloat(v.price.amount) < parseFloat(min.price.amount) ? v : min
                );
                const hasMultipleVariants = card.variants.length > 1;
                const isOnSale = card.variants.some((v) => v.compareAtPrice);
                const priceLabel = `${hasMultipleVariants ? "from " : ""}${formatPrice(
                  lowestVariant.price.amount,
                  lowestVariant.price.currencyCode
                )}`;

                return (
                  <li key={card.id}>
                    <ScrollReveal delay={i * 0.05}>
                      <Link
                        href={`/shop/${card.handle}`}
                        className="group block rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                        aria-label={`${card.title} — ${priceLabel}. View details.`}
                      >
                        <div className="relative aspect-[4/3] bg-surface-muted overflow-hidden">
                          {card.featuredImage ? (
                            <Image
                              src={card.featuredImage.url}
                              alt={card.featuredImage.altText ?? card.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                          ) : (
                            <div
                              className="w-full h-full flex items-center justify-center text-5xl"
                              aria-hidden="true"
                            >
                              🎁
                            </div>
                          )}
                          {isOnSale && (
                            <span
                              className="absolute top-3 left-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded"
                              aria-label="On sale"
                            >
                              SALE
                            </span>
                          )}
                        </div>

                        <div className="p-5" aria-hidden="true">
                          <h2 className="font-heading font-bold text-ink text-lg leading-snug mb-1 group-hover:text-primary transition-colors">
                            {card.title}
                          </h2>
                          {card.description && (
                            <p className="text-ink-muted text-sm line-clamp-2 mb-3">
                              {card.description}
                            </p>
                          )}
                          <p className="font-semibold text-primary text-base">
                            {hasMultipleVariants ? "From " : ""}
                            {formatPrice(
                              lowestVariant.price.amount,
                              lowestVariant.price.currencyCode
                            )}
                            {lowestVariant.compareAtPrice && (
                              <span
                                className="ml-2 text-ink-muted line-through font-normal text-sm"
                                aria-label={`Original price ${formatPrice(
                                  lowestVariant.compareAtPrice.amount,
                                  lowestVariant.compareAtPrice.currencyCode
                                )}`}
                              >
                                {formatPrice(
                                  lowestVariant.compareAtPrice.amount,
                                  lowestVariant.compareAtPrice.currencyCode
                                )}
                              </span>
                            )}
                          </p>
                        </div>
                      </Link>
                    </ScrollReveal>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      <BookingCTA
        heading="Book a Service Today"
        body="Not sure which gift card to get? Browse our services first."
        ctaLabel="View Services"
      />
    </>
  );
}
