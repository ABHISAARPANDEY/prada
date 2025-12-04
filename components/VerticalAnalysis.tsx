"use client";

import { motion } from "framer-motion";
import { getVerticalAnalysis, VerticalAnalysisItem } from "@/data/pradaFinancials";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import ExplanationCard from "./ExplanationCard";
import InfoTooltip from "./InfoTooltip";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function VerticalAnalysis() {
  const { incomeStatement, balanceSheet } = getVerticalAnalysis();

  const getTrendIcon = (trend: string) => {
    if (trend === "increasing") return <TrendingUp size={16} className="text-green-600" />;
    if (trend === "decreasing") return <TrendingDown size={16} className="text-red-600" />;
    return <Minus size={16} className="text-gray-400" />;
  };

  const renderTable = (data: VerticalAnalysisItem[], title: string, baseItem: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-6 border border-prada-light/20 shadow-lg mb-8"
    >
      <h3 className="text-2xl font-serif font-bold text-prada-black mb-2 flex items-center">
        {title}
        <InfoTooltip
          title="Vertical Analysis"
          content="Vertical analysis (common-size analysis) expresses each line item as a percentage of a base figure. For income statements, all items are shown as % of revenue. For balance sheets, all items are shown as % of total assets. This makes it easy to compare the composition of financial statements across years."
        />
      </h3>
      <p className="text-sm text-gray-600 mb-6">
        All figures expressed as percentage of <strong>{baseItem}</strong>
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-prada-gold/30">
              <th className="text-left py-3 px-4 font-serif font-bold text-prada-black">Item</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2021 (EUR M)</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2021 (%)</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2022 (EUR M)</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2022 (%)</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2023 (EUR M)</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2023 (%)</th>
              <th className="text-center py-3 px-4 font-serif font-bold text-prada-black">Trend</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={item.item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="border-b border-prada-light/20 hover:bg-prada-light/10 transition-colors"
              >
                <td className="py-3 px-4 font-medium text-prada-black">{item.item}</td>
                <td className="py-3 px-4 text-right text-gray-600">{formatCurrency(item.year2021)}</td>
                <td className="py-3 px-4 text-right font-semibold text-prada-black">{formatPercentage(item.year2021Percent)}</td>
                <td className="py-3 px-4 text-right text-gray-600">{formatCurrency(item.year2022)}</td>
                <td className="py-3 px-4 text-right font-semibold text-prada-black">{formatPercentage(item.year2022Percent)}</td>
                <td className="py-3 px-4 text-right text-gray-600">{formatCurrency(item.year2023)}</td>
                <td className="py-3 px-4 text-right font-semibold text-prada-black">{formatPercentage(item.year2023Percent)}</td>
                <td className="py-3 px-4 text-center">{getTrendIcon(item.trend)}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Key Insights */}
      <div className="mt-6 p-4 bg-gradient-to-r from-prada-light/30 to-white rounded-lg border border-prada-light/20">
        <h4 className="font-serif font-bold text-prada-black mb-3 flex items-center gap-2">
          <TrendingUp className="text-prada-gold" size={20} />
          Key Insights
        </h4>
        <ul className="space-y-2 text-sm text-gray-700">
          {data.map((item, idx) => {
            if (item.item === "Gross Margin" || item.item === "EBIT" || item.item === "Net Income") {
              const change = item.year2023Percent - item.year2021Percent;
              return (
                <li key={item.item} className="flex items-start gap-2">
                  <span className="text-prada-gold mt-1">•</span>
                  <span>
                    <strong>{item.item}</strong>: Increased from {formatPercentage(item.year2021Percent)} to {formatPercentage(item.year2023Percent)} 
                    ({change >= 0 ? "+" : ""}{formatPercentage(change)} improvement)
                  </span>
                </li>
              );
            }
            if (item.item === "Cost of Goods Sold" || item.item === "Operating Expenses") {
              const change = item.year2023Percent - item.year2021Percent;
              if (change < 0) {
                return (
                  <li key={item.item} className="flex items-start gap-2">
                    <span className="text-prada-gold mt-1">•</span>
                    <span>
                      <strong>{item.item}</strong>: Decreased from {formatPercentage(item.year2021Percent)} to {formatPercentage(item.year2023Percent)} 
                      ({formatPercentage(Math.abs(change))} improvement in efficiency)
                    </span>
                  </li>
                );
              }
            }
            return null;
          })}
        </ul>
      </div>
    </motion.div>
  );

  return (
    <div>
      <ExplanationCard
        icon="trending"
        title="What is Vertical Analysis?"
        explanation="Vertical Analysis (also called Common-Size Analysis) expresses each financial statement item as a percentage of a base figure. For income statements, all items are shown as a percentage of Net Revenues. For balance sheets, all items are shown as a percentage of Total Assets. This allows MBA students to easily compare the composition and structure of financial statements across different years, regardless of the absolute size of the company."
        examples={[
          "If COGS is 24.3% of revenue in 2021 and 19.7% in 2023, the company is becoming more efficient",
          "If EBIT margin increases from 14.5% to 22.5%, profitability is improving",
          "If equity is 45% of assets in 2021 and 51% in 2023, the company is becoming less leveraged",
        ]}
        delay={0}
      />

      {renderTable(incomeStatement, "Income Statement - Vertical Analysis (Common-Size)", "Net Revenues")}
      {renderTable(balanceSheet, "Balance Sheet - Vertical Analysis (Common-Size)", "Total Assets")}
    </div>
  );
}

