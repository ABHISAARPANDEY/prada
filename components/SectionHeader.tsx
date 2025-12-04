"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export default function SectionHeader({
  title,
  subtitle,
  id,
}: SectionHeaderProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-prada-black mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 text-lg max-w-3xl leading-relaxed">{subtitle}</p>
      )}
      <div className="w-32 h-1 bg-gradient-to-r from-prada-gold to-transparent mt-6 rounded-full" />
    </motion.div>
  );
}

