"use client";

import { motion } from "framer-motion";
import { getHorizontalAnalysis, HorizontalAnalysisItem } from "@/data/pradaFinancials";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import ExplanationCard from "./ExplanationCard";
import InfoTooltip from "./InfoTooltip";
import { TrendingUp, TrendingDown, Minus } from "lucide-react";

export default function HorizontalAnalysis() {
  const { incomeStatement, balanceSheet } = getHorizontalAnalysis();

  const renderTable = (data: HorizontalAnalysisItem[], title: string) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl p-6 border border-prada-light/20 shadow-lg mb-8"
    >
      <h3 className="text-2xl font-serif font-bold text-prada-black mb-6 flex items-center">
        {title}
        <InfoTooltip
          title="Horizontal Analysis"
          content="Horizontal analysis compares financial data across multiple periods to identify trends, growth patterns, and changes in financial performance over time."
        />
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b-2 border-prada-gold/30">
              <th className="text-left py-3 px-4 font-serif font-bold text-prada-black">Item</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2021</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2022</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">2023</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">Change 2022</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">% Change 2022</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">Change 2023</th>
              <th className="text-right py-3 px-4 font-serif font-bold text-prada-black">% Change 2023</th>
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
                <td className="py-3 px-4 text-right text-gray-700">{formatCurrency(item.year2021)}</td>
                <td className="py-3 px-4 text-right text-gray-700">{formatCurrency(item.year2022)}</td>
                <td className="py-3 px-4 text-right text-gray-700 font-semibold">{formatCurrency(item.year2023)}</td>
                <td className={`py-3 px-4 text-right ${item.change2022 >= 0 ? "text-green-600" : "text-red-600"}`}>
                  <div className="flex items-center justify-end gap-1">
                    {item.change2022 >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {formatCurrency(item.change2022)}
                  </div>
                </td>
                <td className={`py-3 px-4 text-right font-semibold ${item.change2022Percent >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {formatPercentage(item.change2022Percent)}
                </td>
                <td className={`py-3 px-4 text-right ${item.change2023 >= 0 ? "text-green-600" : "text-red-600"}`}>
                  <div className="flex items-center justify-end gap-1">
                    {item.change2023 >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {formatCurrency(item.change2023)}
                  </div>
                </td>
                <td className={`py-3 px-4 text-right font-semibold ${item.change2023Percent >= 0 ? "text-green-600" : "text-red-600"}`}>
                  {formatPercentage(item.change2023Percent)}
                </td>
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
          {data.map((item) => {
            if (item.cagr2021_2023) {
              return (
                <li key={item.item} className="flex items-start gap-2">
                  <span className="text-prada-gold mt-1">•</span>
                  <span>
                    <strong>{item.item}</strong>: CAGR (2021-2023) = {formatPercentage(item.cagr2021_2023)}
                  </span>
                </li>
              );
            }
            return null;
          })}
          <li className="flex items-start gap-2">
            <span className="text-prada-gold mt-1">•</span>
            <span>
              <strong>Revenue Growth</strong>: {formatPercentage(data[0].change2022Percent)} in 2022, {formatPercentage(data[0].change2023Percent)} in 2023
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-prada-gold mt-1">•</span>
            <span>
              <strong>Profitability Improvement</strong>: Net Income grew {formatPercentage(data[data.length - 1].change2023Percent)} in 2023
            </span>
          </li>
        </ul>
      </div>
    </motion.div>
  );

  return (
    <div>
      <ExplanationCard
        icon="trending"
        title="What is Horizontal Analysis?"
        explanation="Horizontal Analysis (also called Trend Analysis) compares financial data across multiple time periods to identify trends, growth patterns, and changes. It shows how each line item has changed in absolute terms (EUR) and percentage terms (%) from one year to the next. This helps MBA students understand the direction and magnitude of financial changes over time."
        examples={[
          "If revenue was €3.37B in 2021 and €4.73B in 2023, that's a 40.4% increase",
          "If operating expenses grew slower than revenue, it shows improved efficiency",
          "CAGR (Compound Annual Growth Rate) shows the average annual growth rate over multiple years",
        ]}
        delay={0}
      />

      {renderTable(incomeStatement, "Income Statement - Horizontal Analysis")}
      {renderTable(balanceSheet, "Balance Sheet - Horizontal Analysis")}
    </div>
  );
}

