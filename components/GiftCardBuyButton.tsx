"use client";

import { useState } from "react";
import { useCart } from "@/lib/cart-context";
import type { GiftCardVariant } from "@/lib/shopify";

interface Props {
  variants: GiftCardVariant[];
  productTitle: string;
  imageUrl?: string;
}

export default function GiftCardBuyButton({ variants, productTitle, imageUrl }: Props) {
  const { addItem } = useCart();
  const firstAvailable = variants.find((v) => v.availableForSale);
  const [selectedId, setSelectedId] = useState(firstAvailable?.id ?? "");
  const [added, setAdded] = useState(false);

  const selected = variants.find((v) => v.id === selectedId);
  const hasMultiple = variants.length > 1;

  function formatPrice(amount: string, currency: string) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(
      parseFloat(amount)
    );
  }

  function handleAddToCart() {
    if (!selected?.availableForSale) return;
    addItem({
      variantId: selected.id,
      productTitle,
      variantTitle: selected.title,
      price: selected.price,
      imageUrl,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (!firstAvailable) {
    return (
      <p className="text-ink-muted text-sm">
        Currently unavailable. Call{" "}
        <a href="tel:9044480046" className="text-primary font-semibold hover:underline">
          (904) 448-0046
        </a>{" "}
        to purchase by phone.
      </p>
    );
  }

  return (
    <div className="space-y-5" aria-label="Purchase options">
      {hasMultiple && (
        <div>
          <p className="block text-sm font-semibold text-ink mb-2">Amount</p>
          <div className="flex flex-wrap gap-2" role="group" aria-label="Select amount">
            {variants.map((v) => (
              <button
                key={v.id}
                type="button"
                onClick={() => setSelectedId(v.id)}
                disabled={!v.availableForSale}
                aria-pressed={selectedId === v.id}
                className={`px-4 py-2 rounded-lg border text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1
                  ${selectedId === v.id
                    ? "bg-primary border-primary text-white"
                    : "bg-white border-gray-300 text-ink hover:border-primary"
                  }
                  disabled:opacity-40 disabled:cursor-not-allowed`}
              >
                {v.title === "Default Title"
                  ? formatPrice(v.price.amount, v.price.currencyCode)
                  : `${v.title} — ${formatPrice(v.price.amount, v.price.currencyCode)}`}
              </button>
            ))}
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={handleAddToCart}
        disabled={!selected?.availableForSale}
        aria-live="polite"
        className="w-full rounded-lg bg-primary px-6 py-4 text-white font-semibold text-base hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {added
          ? "Added to Bag ✓"
          : selected
          ? `Add to Bag — ${formatPrice(selected.price.amount, selected.price.currencyCode)}`
          : "Add to Bag"}
      </button>

      <p className="text-xs text-ink-muted text-center">
        Secure checkout via Shopify. Gift cards are delivered by email.
      </p>
    </div>
  );
}
