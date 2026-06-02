"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, X, Menu } from "lucide-react";

// ─── Nav data ─────────────────────────────────────────────────────────────────

type NavLink = { label: string; href: string; desc?: string };

const womensHealthLinks: NavLink[] = [
  { label: "Women's Health Overview", href: "/womens-health/", desc: "Integrative care for women in Jacksonville, FL" },
  { label: "Fertility Programs", href: "/services/fertility-acupuncture-jacksonville-fl-aborm-certified-dr-julee-miller/", desc: "ABORM-certified fertility acupuncture, Jacksonville FL" },
  { label: "Pelvic Floor", href: "/pelvic-floor/", desc: "Pelvic pain, bladder issues & postpartum care" },
];

const acupunctureLinks: NavLink[] = [
  { label: "Acupuncture Services", href: "/services/acupuncture/", desc: "Licensed acupuncturists serving Jacksonville, FL" },
  { label: "Chronic Pain", href: "/chronic-pain/", desc: "Fibromyalgia, arthritis & migraine relief" },
  { label: "Neurological Disorders", href: "/neurological-disorders/", desc: "Neuropathy & stroke recovery support" },
  { label: "Sports Care", href: "/services/sports-acupuncture/", desc: "Injury recovery & performance, Jacksonville FL" },
  { label: "Pediatric Care", href: "/services/pediatric-acupuncture/", desc: "Gentle acupuncture for children & teens" },
  { label: "Quit Smoking", href: "/services/quit-smoking-program-jacksonville/", desc: "Acupuncture-based cessation program, Jacksonville" },
  { label: "Long COVID", href: "/long-covid-syndrome/", desc: "Fatigue, brain fog & long COVID recovery" },
];

const otherServicesLinks: NavLink[] = [
  { label: "Cosmetic Acupuncture", href: "/services/cosmetic-facial-acupuncture/", desc: "Natural facial rejuvenation, Jacksonville FL" },
  { label: "O3 Regenerative Therapy", href: "/services/o3-regenerative-therapy/", desc: "Ozone therapy for healing & regeneration" },
  { label: "Injection Therapy", href: "/services/acupuncture-point-injection-therapy/", desc: "Acupuncture point injection treatments" },
  { label: "B12 Injections", href: "/services/b12-injections/", desc: "Energy & wellness B12 shots, Jacksonville FL" },
];

const aboutLinks: NavLink[] = [
  { label: "Meet Our Team", href: "/our-team/", desc: "Board-certified Jacksonville acupuncturists" },
  { label: "Testimonials", href: "/testimonials/", desc: "Patient stories from Jacksonville, FL" },
  { label: "Blog", href: "/blog/", desc: "Wellness articles and health tips from our clinic" },
  { label: "Shop Gift Cards", href: "/shop/", desc: "Give the gift of health — gift cards for any service" },
];

type OpenMenu = "womens-health" | "acupuncture" | "other-services" | "about" | null;

// ─── Animation ────────────────────────────────────────────────────────────────

const dropdownAnim = {
  initial: { opacity: 0, y: -8 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.18 },
};

// ─── Simple dropdown ──────────────────────────────────────────────────────────

function SimpleDropdown({
  id,
  links,
  onClose,
}: {
  id: string;
  links: NavLink[];
  onClose: () => void;
}) {
  return (
    <motion.div
      {...dropdownAnim}
      id={id}
      role="region"
      className="absolute top-full left-0 mt-0 w-64 bg-white shadow-lg border border-surface-muted rounded-b-xl z-50 py-2"
    >
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          onClick={onClose}
          className="block px-4 py-2.5 hover:bg-surface transition-colors group"
        >
          <span className="block text-sm font-semibold text-ink group-hover:text-teal-dark transition-colors">
            {link.label}
          </span>
          {link.desc && (
            <span className="block text-xs text-ink-subtle mt-0.5 leading-snug">
              {link.desc}
            </span>
          )}
        </Link>
      ))}
    </motion.div>
  );
}

// ─── Acupuncture two-column panel ─────────────────────────────────────────────

function AcupuncturePanel({ id, onClose }: { id: string; onClose: () => void }) {
  const mid = Math.ceil(acupunctureLinks.length / 2);
  const col1 = acupunctureLinks.slice(0, mid);
  const col2 = acupunctureLinks.slice(mid);

  return (
    <motion.div
      {...dropdownAnim}
      id={id}
      role="region"
      aria-label="Acupuncture treatments"
      className="absolute top-full left-0 mt-0 w-[440px] bg-white shadow-lg border border-surface-muted rounded-b-xl z-50 p-4"
    >
      <p className="text-xs font-bold uppercase tracking-widest text-teal mb-3 px-2" aria-hidden="true">
        Acupuncture Treatments
      </p>
      <div className="grid grid-cols-2 gap-x-4">
        {[col1, col2].map((col, ci) => (
          <ul key={ci} className="space-y-0.5">
            {col.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block px-2 py-2 hover:bg-surface rounded transition-colors group"
                >
                  <span className="block text-sm font-semibold text-ink group-hover:text-teal-dark transition-colors">
                    {link.label}
                  </span>
                  {link.desc && (
                    <span className="block text-xs text-ink-subtle mt-0.5 leading-snug">
                      {link.desc}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </motion.div>
  );
}

// ─── NavButton ────────────────────────────────────────────────────────────────

function NavButton({
  label,
  menuId,
  panelId,
  open,
  onToggle,
  triggerRef,
}: {
  label: string;
  menuId: OpenMenu;
  panelId: string;
  open: OpenMenu;
  onToggle: (id: OpenMenu) => void;
  triggerRef: React.RefObject<HTMLButtonElement>;
}) {
  const isOpen = open === menuId;
  return (
    <button
      ref={triggerRef}
      type="button"
      aria-expanded={isOpen}
      aria-controls={panelId}
      className={`flex items-center gap-1 px-3 py-2 text-sm font-semibold rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark ${
        isOpen ? "text-teal-dark bg-surface" : "text-ink hover:text-teal-dark hover:bg-surface"
      }`}
      onClick={() => onToggle(menuId)}
    >
      {label}
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        aria-hidden="true"
      />
    </button>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────

export default function Header() {
  const [open, setOpen] = useState<OpenMenu>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  // Trigger refs — used to return focus on Escape
  const triggerRefs: Record<string, React.RefObject<HTMLButtonElement>> = {
    "womens-health": useRef<HTMLButtonElement>(null),
    "acupuncture": useRef<HTMLButtonElement>(null),
    "other-services": useRef<HTMLButtonElement>(null),
    "about": useRef<HTMLButtonElement>(null),
  };

  const close = useCallback((returnFocusTo?: OpenMenu) => {
    setOpen(null);
    if (returnFocusTo && triggerRefs[returnFocusTo]?.current) {
      triggerRefs[returnFocusTo].current!.focus();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (id: OpenMenu) => setOpen((prev) => (prev === id ? null : id));

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setOpen(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Escape — close and return focus to trigger
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        if (open) {
          close(open);
        } else {
          setMobileOpen(false);
        }
      }
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [open, close]);

  const toggleMobile = (key: string) =>
    setMobileExpanded((prev) => (prev === key ? null : key));

  return (
    <header
      ref={headerRef}
      aria-label="Site header"
      className="sticky top-0 z-40 bg-white border-b border-surface-muted shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark rounded-sm"
            onClick={() => setOpen(null)}
          >
            <Image
              src="/images/logo.png"
              alt="Health Pointe Jacksonville — Acupuncture Wellness Clinic"
              width={220}
              height={60}
              priority
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-1">

            {/* Women's Health */}
            <div className="relative">
              <NavButton
                label="Women's Health"
                menuId="womens-health"
                panelId="panel-womens-health"
                open={open}
                onToggle={toggle}
                triggerRef={triggerRefs["womens-health"]}
              />
              <AnimatePresence>
                {open === "womens-health" && (
                  <SimpleDropdown
                    id="panel-womens-health"
                    links={womensHealthLinks}
                    onClose={() => close("womens-health")}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Acupuncture */}
            <div className="relative">
              <NavButton
                label="Acupuncture"
                menuId="acupuncture"
                panelId="panel-acupuncture"
                open={open}
                onToggle={toggle}
                triggerRef={triggerRefs["acupuncture"]}
              />
              <AnimatePresence>
                {open === "acupuncture" && (
                  <AcupuncturePanel
                    id="panel-acupuncture"
                    onClose={() => close("acupuncture")}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* Massage — direct link */}
            <Link
              href="/services/massage-therapy-jacksonville/"
              className="px-3 py-2 text-sm font-semibold text-ink hover:text-teal-dark hover:bg-surface rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              onClick={() => setOpen(null)}
            >
              Massage
            </Link>

            {/* Other Services */}
            <div className="relative">
              <NavButton
                label="Other Services"
                menuId="other-services"
                panelId="panel-other-services"
                open={open}
                onToggle={toggle}
                triggerRef={triggerRefs["other-services"]}
              />
              <AnimatePresence>
                {open === "other-services" && (
                  <SimpleDropdown
                    id="panel-other-services"
                    links={otherServicesLinks}
                    onClose={() => close("other-services")}
                  />
                )}
              </AnimatePresence>
            </div>

            {/* About */}
            <div className="relative">
              <NavButton
                label="About"
                menuId="about"
                panelId="panel-about"
                open={open}
                onToggle={toggle}
                triggerRef={triggerRefs["about"]}
              />
              <AnimatePresence>
                {open === "about" && (
                  <SimpleDropdown
                    id="panel-about"
                    links={aboutLinks}
                    onClose={() => close("about")}
                  />
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact/"
              className="px-3 py-2 text-sm font-semibold text-ink hover:text-teal-dark hover:bg-surface rounded-md transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
              onClick={() => setOpen(null)}
            >
              Contact
            </Link>

            <a
              href="https://healthpointejacksonville.acubliss.app/portal/booking/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Book Now (opens in new tab)"
              className="btn-primary ml-3"
              onClick={() => setOpen(null)}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-ink hover:text-teal-dark hover:bg-surface transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-dark"
            aria-label={mobileOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden border-t border-surface-muted bg-white"
          >
            <nav aria-label="Mobile navigation" className="px-4 py-4 space-y-1">

              {[
                { key: "womens-health", label: "Women's Health", links: womensHealthLinks },
                { key: "acupuncture", label: "Acupuncture", links: acupunctureLinks },
                { key: "other-services", label: "Other Services", links: otherServicesLinks },
                { key: "about", label: "About", links: aboutLinks },
              ].map(({ key, label, links }) => {
                const panelId = `mobile-panel-${key}`;
                return (
                  <div key={key}>
                    <button
                      type="button"
                      aria-expanded={mobileExpanded === key}
                      aria-controls={panelId}
                      className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-ink hover:text-teal-dark rounded-md transition-colors"
                      onClick={() => toggleMobile(key)}
                    >
                      {label}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${mobileExpanded === key ? "rotate-180" : ""}`}
                        aria-hidden="true"
                      />
                    </button>
                    <AnimatePresence>
                      {mobileExpanded === key && (
                        <motion.div
                          id={panelId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2 }}
                          className="overflow-hidden pl-3"
                        >
                          {links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              className="block px-3 py-2 text-sm text-ink-muted hover:text-teal-dark hover:bg-surface rounded-md transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {link.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              <Link
                href="/services/massage-therapy-jacksonville/"
                className="block px-3 py-2 text-sm font-semibold text-ink hover:text-teal-dark hover:bg-surface rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Massage
              </Link>

              <Link
                href="/contact/"
                className="block px-3 py-2 text-sm font-semibold text-ink hover:text-teal-dark hover:bg-surface rounded-md transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </Link>

              <div className="pt-2">
                <a
                  href="https://healthpointejacksonville.acubliss.app/portal/booking/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Book Now (opens in new tab)"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
