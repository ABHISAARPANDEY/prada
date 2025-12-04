"use client";

import { motion } from "framer-motion";
import { formatCurrency, formatPercentage } from "@/lib/utils";

interface KpiCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  trend?: {
    value: number;
    label: string;
  };
  format?: "currency" | "percentage" | "number";
  delay?: number;
}

export default function KpiCard({
  title,
  value,
  subtitle,
  trend,
  format = "currency",
  delay = 0,
}: KpiCardProps) {
  const formattedValue =
    format === "currency"
      ? formatCurrency(Number(value))
      : format === "percentage"
      ? formatPercentage(Number(value))
      : value;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group relative bg-gradient-to-br from-white to-prada-light/10 border border-prada-light/20 rounded-xl p-6 hover:shadow-2xl hover:border-prada-gold/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="flex flex-col space-y-2">
        <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">
          {title}
        </p>
        <p className="text-3xl font-serif font-bold text-prada-black">
          {formattedValue}
        </p>
        {subtitle && (
          <p className="text-xs text-gray-500 mt-1">{subtitle}</p>
        )}
        {trend && (
          <div className="flex items-center space-x-2 mt-2">
            <span
              className={`text-sm font-medium ${
                trend.value >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {trend.value >= 0 ? "↑" : "↓"} {Math.abs(trend.value).toFixed(1)}%
            </span>
            <span className="text-xs text-gray-500">{trend.label}</span>
          </div>
        )}
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-prada-gold/0 to-prada-gold/0 group-hover:from-prada-gold/5 group-hover:to-transparent rounded-lg transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

