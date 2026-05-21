"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon?: React.ReactNode;
}

export default function ServiceCard({ title, description, href, icon }: ServiceCardProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-xl border border-surface-muted p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
    >
      {icon && (
        <div className="mb-4 text-primary w-10 h-10 flex items-center justify-center" aria-hidden="true">
          {icon}
        </div>
      )}
      <h3 className="text-lg font-heading font-bold text-ink mb-2 group-hover:text-primary transition-colors">
        {title}
      </h3>
      <p className="text-sm text-ink-muted leading-relaxed mb-4 flex-1">{description}</p>
      <Link
        href={href}
        className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary rounded-sm"
        aria-label={`Learn more about ${title}`}
      >
        Learn more →
      </Link>
    </motion.article>
  );
}
