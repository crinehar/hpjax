"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface BookingCTAProps {
  heading?: string;
  body?: string;
  ctaLabel?: string;
}

export default function BookingCTA({
  heading = "Ready to Start Your Wellness Journey?",
  body = "Our licensed acupuncturists and wellness practitioners are here to help. Book your appointment online in minutes.",
  ctaLabel = "Book Your Appointment",
}: BookingCTAProps) {
  return (
    <section
      className="bg-gradient-to-br from-teal-dark to-ink py-16"
      aria-label="Book an appointment"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-lg text-gray-200 leading-relaxed mb-8 max-w-2xl mx-auto">{body}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 bg-primary text-ink font-body font-bold text-base px-8 py-4 rounded-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              {ctaLabel}
            </Link>
            <a
              href="tel:9044480046"
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-body font-bold text-base px-8 py-4 rounded-md transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              (904) 448-0046
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
