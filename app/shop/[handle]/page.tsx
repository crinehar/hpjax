import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getGiftCardByHandle } from "@/lib/shopify";
import { giftCardProductSchema } from "@/lib/schema";
import GiftCardBuyButton from "@/components/GiftCardBuyButton";
import BookingCTA from "@/components/BookingCTA";

interface Props {
  params: { handle: string };
}

export const dynamic = "force-dynamic";

function fallbackDescription(title: string): string {
  return `Purchase a ${title} from Health Pointe Jacksonville — redeemable for acupuncture, massage therapy, and wellness services in Jacksonville, FL. Gift cards are delivered by email.`;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const card = await getGiftCardByHandle(params.handle).catch(() => null);
  if (!card) return {};

  const isPlaceholder =
    !card.description || card.description.length < 60;
  const description = isPlaceholder
    ? fallbackDescription(card.title)
    : card.description.slice(0, 155);

  const lowestPrice = card.variants.reduce((min, v) =>
    parseFloat(v.price.amount) < parseFloat(min.price.amount) ? v : min
  );

  return {
    title: `${card.title} — Gift Card`,
    description,
    alternates: { canonical: `https://hpjax.com/shop/${card.handle}/` },
    openGraph: {
      title: `${card.title} | Health Pointe Jacksonville`,
      description,
      url: `https://hpjax.com/shop/${card.handle}/`,
      type: "website",
      siteName: "Health Pointe Jacksonville",
      ...(card.featuredImage && {
        images: [
          {
            url: card.featuredImage.url,
            width: card.featuredImage.width,
            height: card.featuredImage.height,
            alt: card.featuredImage.altText ?? card.title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: `${card.title} | Health Pointe Jacksonville`,
      description,
      ...(card.featuredImage && { images: [card.featuredImage.url] }),
    },
    other: {
      "product:price:amount": parseFloat(lowestPrice.price.amount).toFixed(2),
      "product:price:currency": lowestPrice.price.currencyCode,
    },
  };
}

function formatPrice(amount: string, currency: string) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
    parseFloat(amount)
  );
}

export default async function GiftCardDetailPage({ params }: Props) {
  const card = await getGiftCardByHandle(params.handle).catch(() => null);
  if (!card) notFound();

  const schema = giftCardProductSchema({
    title: card.title,
    description: card.description || fallbackDescription(card.title),
    handle: card.handle,
    imageUrl: card.featuredImage?.url,
    imageAlt: card.featuredImage?.altText ?? card.title,
    variants: card.variants.map((v) => ({
      price: v.price.amount,
      currencyCode: v.price.currencyCode,
      availableForSale: v.availableForSale,
    })),
  });

  const lowestVariant = card.variants.reduce((min, v) =>
    parseFloat(v.price.amount) < parseFloat(min.price.amount) ? v : min
  );
  const highestVariant = card.variants.reduce((max, v) =>
    parseFloat(v.price.amount) > parseFloat(max.price.amount) ? v : max
  );
  const priceRange =
    lowestVariant.id !== highestVariant.id
      ? `${formatPrice(lowestVariant.price.amount, lowestVariant.price.currencyCode)} – ${formatPrice(highestVariant.price.amount, highestVariant.price.currencyCode)}`
      : formatPrice(lowestVariant.price.amount, lowestVariant.price.currencyCode);

  const isPlaceholderDesc = !card.description || card.description.length < 60;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <section aria-labelledby="product-heading" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-ink-muted">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/shop/" className="hover:text-primary transition-colors">
                  Shop
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-ink font-medium" aria-current="page">
                {card.title}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Product image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-surface-muted">
              {card.featuredImage ? (
                <Image
                  src={card.featuredImage.url}
                  alt={card.featuredImage.altText ?? card.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-7xl"
                  aria-hidden="true"
                >
                  🎁
                </div>
              )}
            </div>

            {/* Product details */}
            <div>
              <h1
                id="product-heading"
                className="font-heading font-bold text-ink text-3xl sm:text-4xl leading-tight mb-3"
              >
                {card.title}
              </h1>

              <p
                className="text-2xl font-semibold text-primary mb-6"
                aria-label={`Price: ${priceRange}${lowestVariant.compareAtPrice ? `. Original price: ${formatPrice(lowestVariant.compareAtPrice.amount, lowestVariant.compareAtPrice.currencyCode)}` : ""}`}
              >
                <span aria-hidden="true">{priceRange}</span>
                {lowestVariant.compareAtPrice && (
                  <span
                    className="ml-3 text-lg text-ink-muted line-through font-normal"
                    aria-hidden="true"
                  >
                    {formatPrice(
                      lowestVariant.compareAtPrice.amount,
                      lowestVariant.compareAtPrice.currencyCode
                    )}
                  </span>
                )}
              </p>

              {/* Description — use fallback if Shopify placeholder */}
              {isPlaceholderDesc ? (
                <p className="text-ink-muted leading-relaxed mb-8">
                  {fallbackDescription(card.title)}
                </p>
              ) : (
                <div
                  className="prose prose-sm text-ink-muted mb-8 max-w-none"
                  dangerouslySetInnerHTML={{ __html: card.descriptionHtml }}
                />
              )}

              <GiftCardBuyButton variants={card.variants} />

              <p className="mt-6 text-sm text-ink-muted">
                <strong>How it works:</strong> Select an amount, complete checkout, and your
                gift card code will be delivered by email. Redeemable for any service at
                Health Pointe Jacksonville, 3840 Belfort Rd STE 305, Jacksonville FL 32216.
              </p>
            </div>
          </div>
        </div>
      </section>

      <BookingCTA
        heading="Ready to Book?"
        body="Gift cards can be redeemed for any service. Book your appointment online."
        ctaLabel="Book Now"
      />
    </>
  );
}
