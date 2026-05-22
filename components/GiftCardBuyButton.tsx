"use client";

import { useState } from "react";
import { createCartCheckout, type GiftCardVariant } from "@/lib/shopify";

interface Props {
  variants: GiftCardVariant[];
}

export default function GiftCardBuyButton({ variants }: Props) {
  const firstAvailable = variants.find((v) => v.availableForSale);
  const [selectedId, setSelectedId] = useState(firstAvailable?.id ?? "");
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const selected = variants.find((v) => v.id === selectedId);
  const hasMultiple = variants.length > 1;

  function formatPrice(amount: string, currency: string) {
    return new Intl.NumberFormat("en-US", { style: "currency", currency }).format(parseFloat(amount));
  }

  async function handleBuy() {
    if (!selectedId || !selected?.availableForSale) return;
    setLoading(true);
    setError(null);
    try {
      const checkoutUrl = await createCartCheckout(selectedId, quantity);
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
      setLoading(false);
    } catch {
      setError("Something went wrong. Please try again or call us at (904) 448-0046.");
      setLoading(false);
    }
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
      {/* Variant selector */}
      {hasMultiple && (
        <div>
          <label htmlFor="variant-select" className="block text-sm font-semibold text-ink mb-2">
            Amount
          </label>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="variant-label">
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

      {/* Quantity */}
      <div>
        <label htmlFor="quantity" className="block text-sm font-semibold text-ink mb-2">
          Quantity
        </label>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            aria-label="Decrease quantity"
            className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-ink hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            −
          </button>
          <span id="quantity" aria-live="polite" className="w-6 text-center font-semibold text-ink">
            {quantity}
          </span>
          <button
            type="button"
            onClick={() => setQuantity((q) => q + 1)}
            aria-label="Increase quantity"
            className="w-9 h-9 rounded-lg border border-gray-300 flex items-center justify-center text-ink hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
          >
            +
          </button>
        </div>
      </div>

      {error && (
        <p role="alert" className="text-red-600 text-sm">
          {error}
        </p>
      )}

      <button
        onClick={handleBuy}
        disabled={loading || !selected?.availableForSale}
        aria-busy={loading}
        className="w-full rounded-lg bg-primary px-6 py-4 text-white font-semibold text-base hover:bg-primary-dark transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading
          ? "Redirecting to checkout…"
          : selected
          ? `Buy Now — ${formatPrice(selected.price.amount, selected.price.currencyCode)}`
          : "Buy Now"}
      </button>

      <p className="text-xs text-ink-muted text-center">
        Secure checkout via Shopify. Gift cards are delivered by email.
      </p>
    </div>
  );
}
