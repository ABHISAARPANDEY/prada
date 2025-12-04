"use client";

import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, DollarSign } from "lucide-react";

interface ExplanationCardProps {
  icon?: "lightbulb" | "trending" | "dollar";
  title: string;
  explanation: string;
  examples?: string[];
  delay?: number;
}

export default function ExplanationCard({
  icon = "lightbulb",
  title,
  explanation,
  examples,
  delay = 0,
}: ExplanationCardProps) {
  const iconMap = {
    lightbulb: Lightbulb,
    trending: TrendingUp,
    dollar: DollarSign,
  };

  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-gradient-to-br from-white to-prada-light/30 rounded-xl p-6 border border-prada-light/20 shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-prada-gold/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-prada-gold" />
        </div>
        <div className="flex-1">
          <h3 className="font-serif font-bold text-lg text-prada-black mb-2">
            {title}
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">{explanation}</p>
          {examples && examples.length > 0 && (
            <div className="mt-4 pt-4 border-t border-prada-light/30">
              <p className="text-sm font-medium text-gray-600 mb-2">
                Example:
              </p>
              <ul className="space-y-1">
                {examples.map((example, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-start"
                  >
                    <span className="text-prada-gold mr-2">•</span>
                    <span>{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

