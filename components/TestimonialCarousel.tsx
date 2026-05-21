"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  id: number;
  name?: string;
  quote: string;
  service?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I cannot thank Dr. Julee and her professional staff enough for my well being. The treatments I have received have improved my health and my GP is happy with the improvement as well. It takes a woman to recognize and treat women issues. Masseuse Denise is wonderful as well. She puts me back together each time. I love they are all a part of my healthcare team!",
  },
  {
    id: 2,
    quote:
      "Dr Miller has given me my Life back, 5 weeks ago I could barely walk, so much pain, I had to quit my job and didn't know what else to do, I know she helped me in the past and I knew she was my last hope, here I am today ready to work again 90% better and smiling again. She is wonderful and her team",
  },
  {
    id: 3,
    quote:
      "I call Dr. Miller my miracle baby maker. My husband and I have tried to conceive for four years now… We were ready to try IVF, but after a few months of acupuncture with Dr. Miller, we were able to conceive naturally. She and her team have been absolutely wonderful",
  },
  {
    id: 4,
    quote:
      "I am so glad that I found this office. I arrived knowing I'll be taken care of and leave refreshed. The entire staff is warm, kind, and respectful. The treatments have improved my wellness and significantly reduced pain from a shoulder injury and almost eliminated the horrible migraines I had been experiencing.",
  },
];

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

export default function TestimonialCarousel({
  testimonials = defaultTestimonials,
}: TestimonialCarouselProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function navigate(next: number) {
    setDirection(next > index ? 1 : -1);
    setIndex(next);
  }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
  };

  const current = testimonials[index];

  return (
    <section aria-label="Patient testimonials" className="bg-surface-muted py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="section-heading">What our patients have to say</h2>

        <div className="relative min-h-[200px] flex items-center justify-center">
          <AnimatePresence custom={direction} mode="wait">
            <motion.blockquote
              key={current.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="text-center"
            >
              <svg
                className="mx-auto mb-4 w-8 h-8 text-primary opacity-60"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg text-ink-muted italic leading-relaxed mb-6">{current.quote}</p>
              {(current.name || current.service) && (
                <footer>
                  {current.name && (
                    <cite className="not-italic font-heading font-bold text-ink">{current.name}</cite>
                  )}
                  {current.service && (
                    <span className="block text-sm text-primary mt-1">{current.service} Patient</span>
                  )}
                </footer>
              )}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Screen-reader live region — announces slide changes */}
        <div aria-live="polite" aria-atomic="true" className="sr-only">
          Testimonial {index + 1} of {testimonials.length}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-8" role="group" aria-label="Testimonial navigation">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              aria-pressed={i === index}
              aria-current={i === index ? "true" : undefined}
              aria-label={`Go to testimonial ${i + 1} of ${testimonials.length}`}
              onClick={() => navigate(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                i === index ? "bg-primary w-6" : "bg-gray-300 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Prev / Next */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate(index === 0 ? testimonials.length - 1 : index - 1)}
            aria-label="Previous testimonial"
            className="p-2 rounded-full border border-surface-muted hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => navigate(index === testimonials.length - 1 ? 0 : index + 1)}
            aria-label="Next testimonial"
            className="p-2 rounded-full border border-surface-muted hover:border-primary hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
