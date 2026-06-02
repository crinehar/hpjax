"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface HeroSectionProps {
  heading: string;
  subheading: string;
  ctaLabel?: string;
  ctaHref?: string;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
  overlay?: boolean;
}

export default function HeroSection({
  heading,
  subheading,
  ctaLabel = "Book Your Appointment",
  ctaHref = "https://healthpointejacksonville.acubliss.app/portal/booking/",
  secondaryCtaLabel,
  secondaryCtaHref,
  imageSrc,
  imageAlt = "",
  overlay = true,
}: HeroSectionProps) {
  return (
    <section
      className="relative min-h-[560px] flex items-center bg-ink overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background image */}
      {imageSrc && (
        <div className="absolute inset-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          {overlay && <div className="absolute inset-0 bg-ink/60" aria-hidden="true" />}
        </div>
      )}

      {/* Fallback gradient when no image */}
      {!imageSrc && (
        <div
          className="absolute inset-0 bg-gradient-to-br from-ink via-ink/90 to-secondary-dark"
          aria-hidden="true"
        />
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
            {heading}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed mb-8">
            {subheading}
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href={ctaHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ctaLabel} (opens in new tab)`}
              className="btn-primary text-base px-8 py-4"
            >
              {ctaLabel}
            </a>
            {secondaryCtaLabel && secondaryCtaHref && (
              <Link
                href={secondaryCtaHref}
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-ink font-body font-semibold text-base px-8 py-4 rounded-md transition-colors duration-200"
              >
                {secondaryCtaLabel}
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
