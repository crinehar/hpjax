"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart-context";
import { createCartCheckout } from "@/lib/shopify";

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal, currencyCode, totalItems } = useCart();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fmt = (amount: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: currencyCode }).format(amount);

  async function handleCheckout() {
    setLoading(true);
    setError(null);
    try {
      const lines = items.map((i) => ({ variantId: i.variantId, quantity: i.quantity }));
      const url = await createCartCheckout(lines);
      window.open(url, "_blank", "noopener,noreferrer");
    } catch {
      setError("Something went wrong. Please try again or call (904) 448-0046.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-ink/40 z-50"
            aria-hidden="true"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
            className="fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-surface-muted">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-teal-dark" aria-hidden="true" />
                <h2 className="font-heading font-bold text-ink text-lg">
                  Shopping Bag
                  {totalItems > 0 && (
                    <span className="ml-2 text-sm font-normal text-ink-muted">
                      ({totalItems} {totalItems === 1 ? "item" : "items"})
                    </span>
                  )}
                </h2>
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="p-1.5 rounded-md text-ink-muted hover:text-ink hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-12 h-12 text-ink-subtle mb-4" aria-hidden="true" />
                  <p className="font-semibold text-ink mb-1">Your bag is empty</p>
                  <p className="text-sm text-ink-muted mb-6">Add a gift card to get started.</p>
                  <Link
                    href="/shop/"
                    onClick={closeCart}
                    className="text-sm font-semibold text-teal-dark hover:text-teal underline underline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded"
                  >
                    Browse Gift Cards →
                  </Link>
                </div>
              ) : (
                <ul role="list" className="space-y-5">
                  {items.map((item) => (
                    <li
                      key={item.variantId}
                      className="flex gap-4 pb-5 border-b border-surface-muted last:border-0"
                    >
                      {/* Thumbnail */}
                      <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-surface-muted">
                        {item.imageUrl ? (
                          <Image
                            src={item.imageUrl}
                            alt={item.productTitle}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        ) : (
                          <div
                            className="w-full h-full flex items-center justify-center text-2xl"
                            aria-hidden="true"
                          >
                            🎁
                          </div>
                        )}
                      </div>

                      {/* Details */}
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-ink text-sm leading-snug">
                          {item.productTitle}
                        </p>
                        {item.variantTitle !== "Default Title" && (
                          <p className="text-xs text-ink-muted mt-0.5">{item.variantTitle}</p>
                        )}
                        <p className="text-sm font-semibold text-teal-dark mt-1">
                          {fmt(parseFloat(item.price.amount) * item.quantity)}
                        </p>

                        {/* Quantity + remove */}
                        <div className="flex items-center gap-2 mt-2">
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.variantId, -1)}
                            aria-label={`Decrease quantity of ${item.productTitle}`}
                            className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center text-ink hover:border-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark"
                          >
                            −
                          </button>
                          <span
                            className="w-5 text-center text-sm font-semibold"
                            aria-live="polite"
                          >
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() => updateQuantity(item.variantId, 1)}
                            aria-label={`Increase quantity of ${item.productTitle}`}
                            className="w-7 h-7 rounded border border-gray-300 flex items-center justify-center text-ink hover:border-teal-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark"
                          >
                            +
                          </button>
                          <button
                            type="button"
                            onClick={() => removeItem(item.variantId)}
                            aria-label={`Remove ${item.productTitle} from cart`}
                            className="ml-1 text-xs text-ink-subtle hover:text-red-500 transition-colors focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-teal-dark rounded"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-surface-muted space-y-3">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-semibold text-ink">Subtotal</span>
                  <span className="font-bold text-ink text-lg">{fmt(subtotal)}</span>
                </div>
                {error && (
                  <p role="alert" className="text-red-600 text-sm">
                    {error}
                  </p>
                )}
                <button
                  type="button"
                  onClick={handleCheckout}
                  disabled={loading}
                  aria-busy={loading}
                  className="w-full rounded-lg bg-teal-dark text-white font-bold text-base px-6 py-4 hover:bg-teal transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Redirecting to checkout…" : "Checkout"}
                </button>
                <button
                  type="button"
                  onClick={closeCart}
                  className="w-full rounded-lg border border-teal-dark text-teal-dark font-semibold text-base px-6 py-3 hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
                >
                  Keep Shopping
                </button>
                <p className="text-xs text-ink-muted text-center">
                  Secure checkout via Shopify. Gift cards delivered by email.
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
