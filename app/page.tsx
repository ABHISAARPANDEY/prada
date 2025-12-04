"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import KpiCard from "@/components/KpiCard";
import SectionHeader from "@/components/SectionHeader";
import LineChart from "@/components/LineChart";
import BarChart from "@/components/BarChart";
import {
  financialData,
  calculateMetrics,
  getYearOverYearGrowth,
  calculateGrowthRate,
} from "@/data/pradaFinancials";
import { formatCurrency, formatPercentage } from "@/lib/utils";
import PradaProduct3D from "@/components/PradaProduct3D";
import CompanyOverview from "@/components/CompanyOverview";
import FoundersSection from "@/components/FoundersSection";
import YearInsights from "@/components/YearInsights";
import ExplanationCard from "@/components/ExplanationCard";
import InfoTooltip from "@/components/InfoTooltip";
import HorizontalAnalysis from "@/components/HorizontalAnalysis";
import VerticalAnalysis from "@/components/VerticalAnalysis";
import LandingBanner from "@/components/LandingBanner";
import ToolsUsed from "@/components/ToolsUsed";
import References from "@/components/References";

export default function Dashboard() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("overview");

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveSection(sectionId);
    }
  };

  // Prepare chart data
  const overviewChartData = financialData.map((d) => ({
    year: d.year,
    "Net Revenues": d.netRevenues,
    EBIT: d.ebit,
    "Net Income": d.netIncome,
  }));

  const incomeStatementData = financialData.map((d) => ({
    year: d.year,
    "Net Revenues": d.netRevenues,
    EBIT: d.ebit,
    "Net Income": d.netIncome,
    "Cost of Goods Sold": d.costOfGoodsSold,
    "Operating Expenses": d.operatingExpenses,
  }));

  const balanceSheetData = financialData.map((d) => ({
    year: d.year,
    "Total Assets": d.totalAssets,
    "Total Equity": d.totalEquity,
    Debt: d.totalAssets - d.totalEquity,
  }));

  const ratiosData = financialData.map((d) => {
    const metrics = calculateMetrics(d);
    return {
      year: d.year,
      "Gross Margin %": metrics.grossMarginPercent,
      "EBIT Margin %": metrics.ebitMargin,
      "Net Margin %": metrics.netIncomeMargin,
      "Debt-to-Equity %": metrics.debtToEquity,
      "ROE %": metrics.returnOnEquity,
    };
  });

  const cashFlowData = financialData.map((d) => ({
    year: d.year,
    "Operating CF": d.operatingCashFlow,
    "Investing CF": d.investingCashFlow,
    "Financing CF": d.financingCashFlow,
  }));

  const { revenueGrowth, netIncomeGrowth, years } = getYearOverYearGrowth(
    financialData
  );
  const trendsData = years.map((year, index) => ({
    year,
    "Revenue Growth %": revenueGrowth[index],
    "Net Income Growth %": netIncomeGrowth[index],
  }));

  // Calculate latest metrics for KPI cards
  const latestData = financialData[financialData.length - 1];
  const previousData = financialData[financialData.length - 2];
  const latestMetrics = calculateMetrics(latestData);

  const revenueGrowth2023 = calculateGrowthRate(
    latestData.netRevenues,
    previousData.netRevenues
  );
  const ebitGrowth2023 = calculateGrowthRate(
    latestData.ebit,
    previousData.ebit
  );
  const netIncomeGrowth2023 = calculateGrowthRate(
    latestData.netIncome,
    previousData.netIncome
  );

  return (
    <div className="min-h-screen bg-prada-light">
      <LandingBanner />
      <Navbar
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        isMenuOpen={isMenuOpen}
      />
      <div className="flex">
        <Sidebar
          isOpen={isMenuOpen}
          onClose={() => setIsMenuOpen(false)}
          activeSection={activeSection}
          onSectionClick={scrollToSection}
        />
        <main className="flex-1 lg:ml-0">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {/* Company Overview Section */}
            <section id="company-overview" className="mb-20">
              <CompanyOverview />
            </section>

            {/* Founders Section */}
            <FoundersSection />

            {/* Products Gallery Section */}
            <section id="products" className="mb-20">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h1 className="text-5xl md:text-6xl font-serif font-bold text-prada-black leading-tight mb-4">
                  PRADA Group
                  <br />
                  <span className="text-prada-gold">Financial Excellence</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                  A comprehensive analysis of PRADA's financial performance from 2021 to 2023,
                  showcasing remarkable growth and operational efficiency in the luxury fashion
                  industry.
                </p>
                <div className="flex items-center justify-center space-x-8">
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold text-prada-black">
                      +40.4%
                    </span>
                    <span className="text-sm text-gray-600">Revenue Growth</span>
                  </div>
                  <div className="h-12 w-px bg-prada-light" />
                  <div className="flex flex-col">
                    <span className="text-3xl font-serif font-bold text-prada-black">
                      +128%
                    </span>
                    <span className="text-sm text-gray-600">Net Income Growth</span>
                  </div>
                </div>
              </motion.div>

              {/* 3D Products Gallery */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {(
                  [
                    {
                      type: "bag",
                      name: "Saffiano Leather Handbag",
                      description: "Iconic PRADA handbag featuring the signature Saffiano leather",
                      price: "€2,500",
                      year: "2023 Collection",
                    },
                    {
                      type: "shoes",
                      name: "Cloudbust Thunder",
                      description: "Futuristic sneakers combining style and performance",
                      price: "€950",
                      year: "2023 Collection",
                    },
                    {
                      type: "sunglasses",
                      name: "PRADA Optical",
                      description: "Luxury eyewear with premium lenses and Italian craftsmanship",
                      price: "€450",
                      year: "2023 Collection",
                    },
                    {
                      type: "wallet",
                      name: "Saffiano Wallet",
                      description: "Elegant leather wallet with multiple card slots",
                      price: "€550",
                      year: "2023 Collection",
                    },
                    {
                      type: "watch",
                      name: "Luna Rossa Timepiece",
                      description: "Precision Swiss movement with Italian design",
                      price: "€3,200",
                      year: "2023 Collection",
                    },
                  ] as const
                ).map((product, index) => (
                  <motion.div
                    key={product.type}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group bg-gradient-to-br from-white via-prada-light/20 to-white rounded-2xl p-6 border border-prada-light/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className="h-64 mb-6 bg-gradient-to-br from-prada-light to-white rounded-xl overflow-hidden relative">
                      <PradaProduct3D product={product.type} autoRotate={true} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-xl font-serif font-bold text-prada-black mb-1">
                          {product.name}
                        </h3>
                        <p className="text-sm text-prada-gold font-medium">{product.year}</p>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-prada-light/30">
                        <span className="text-2xl font-serif font-bold text-prada-black">
                          {product.price}
                        </span>
                        <span className="text-xs text-gray-500 uppercase tracking-wide">
                          Luxury
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Year Insights Section */}
            <section id="year-insights" className="mb-20">
              <YearInsights />
            </section>

            {/* Overview Section */}
            <section id="overview" className="mb-16">
              <SectionHeader
                title="Overview"
                subtitle="Key performance indicators and financial trends (2021-2023)"
              />

              {/* KPI Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <KpiCard
                  title="Net Revenues 2023"
                  value={latestData.netRevenues}
                  subtitle="EUR million"
                  trend={{
                    value: revenueGrowth2023,
                    label: "vs 2022",
                  }}
                  delay={0.1}
                />
                <KpiCard
                  title="EBIT 2023"
                  value={latestData.ebit}
                  subtitle="EUR million"
                  trend={{
                    value: ebitGrowth2023,
                    label: "vs 2022",
                  }}
                  delay={0.2}
                />
                <KpiCard
                  title="Net Income 2023"
                  value={latestData.netIncome}
                  subtitle="EUR million"
                  trend={{
                    value: netIncomeGrowth2023,
                    label: "vs 2022",
                  }}
                  delay={0.3}
                />
                <KpiCard
                  title="EBIT Margin 2023"
                  value={latestMetrics.ebitMargin}
                  subtitle="% of net revenues"
                  format="percentage"
                  delay={0.4}
                />
              </div>

              {/* Main Chart */}
              <div className="mb-8">
                <LineChart
                  data={overviewChartData}
                  dataKeys={[
                    { key: "Net Revenues", name: "Net Revenues", color: "#0B0B0B" },
                    { key: "EBIT", name: "EBIT", color: "#D4AF37" },
                    { key: "Net Income", name: "Net Income", color: "#666" },
                  ]}
                  xAxisKey="year"
                  yAxisLabel="EUR (Million)"
                  delay={0.5}
                />
              </div>

              {/* Explanation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <ExplanationCard
                  icon="dollar"
                  title="What is Net Revenue?"
                  explanation="Net Revenue is the total amount of money PRADA earned from selling its products (handbags, clothing, accessories) after accounting for returns and discounts. Think of it as the company's total sales income. From 2021 to 2023, PRADA's revenue grew by 40.4%, meaning they sold significantly more products each year."
                  examples={[
                    "2021: €3.37 billion in sales",
                    "2022: €4.20 billion in sales (+24.8% growth)",
                    "2023: €4.73 billion in sales (+12.5% growth)",
                  ]}
                  delay={0.6}
                />
                <ExplanationCard
                  icon="trending"
                  title="What is EBIT?"
                  explanation="EBIT (Earnings Before Interest and Taxes) represents how profitable PRADA's core business operations are - essentially how much money they make from selling products before paying interest on loans or taxes. It's a key indicator of operational efficiency. PRADA's EBIT more than doubled from €489.5M to €1,061.7M, showing excellent business performance."
                  examples={[
                    "Higher EBIT = More efficient operations",
                    "EBIT Margin shows profit as % of revenue",
                    "PRADA improved from 14.5% to 22.5% margin",
                  ]}
                  delay={0.7}
                />
              </div>

              {/* Commentary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="bg-gradient-to-br from-white to-prada-light/20 rounded-xl p-8 border border-prada-light/20 shadow-lg"
              >
                <h3 className="text-2xl font-serif font-bold mb-4 flex items-center">
                  Executive Summary
                  <InfoTooltip
                    title="Executive Summary"
                    content="This summary provides a high-level overview of PRADA's financial performance. It's designed to give you a quick understanding of how well the company performed over the three-year period."
                  />
                </h3>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    PRADA Group demonstrated <strong>exceptional financial performance</strong> from
                    2021 to 2023, with net revenues growing from{" "}
                    <strong>€3,365.7 million</strong> to{" "}
                    <strong>€4,726.4 million</strong>, representing a{" "}
                    <strong className="text-prada-gold">40.4% increase</strong> over the period.
                  </p>
                  <p>
                    The company's profitability improved dramatically:{" "}
                    <strong>EBIT more than doubled</strong> from €489.5M to
                    €1,061.7M, while <strong>net income increased by 128%</strong> from
                    €294.3M to €671.0M. This means PRADA not only sold more
                    products, but also became much more efficient at turning
                    sales into profit.
                  </p>
                  <p>
                    The company achieved significant <strong>margin expansion</strong>, with
                    EBIT margin improving from 14.5% to 22.5% and net income
                    margin rising from 8.8% to 14.2%. This reflects improved
                    operational efficiency, better pricing strategies, and
                    stronger brand positioning in the luxury market.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Income Statement Section */}
            <section id="income-statement" className="mb-16">
              <SectionHeader
                title="Income Statement"
                subtitle="Revenue, costs, and profitability analysis"
              />

              {/* Explanation */}
              <ExplanationCard
                icon="lightbulb"
                title="Understanding the Income Statement"
                explanation="The Income Statement shows how much money PRADA made (revenue) and how much it spent (costs) over a year. It's like a detailed report card showing the company's financial performance. The key numbers to watch are: Net Revenues (total sales), Cost of Goods Sold (what it costs to make products), Operating Expenses (running the business), and Net Income (profit after all expenses)."
                examples={[
                  "Revenue - Costs = Profit",
                  "Higher margins mean more efficient operations",
                  "PRADA's margins improved significantly over 3 years",
                ]}
                delay={0}
              />

              {/* Table */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-6 border border-prada-light/20 mb-8 overflow-x-auto"
              >
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b-2 border-prada-gold/30 bg-prada-light/30">
                      <th className="text-left py-4 px-4 font-serif font-bold text-prada-black">
                        Metric
                        <InfoTooltip
                          title="Financial Metrics"
                          content="These metrics show different aspects of PRADA's financial performance. Each metric tells a story about how the company is doing financially."
                        />
                      </th>
                      <th className="text-right py-4 px-4 font-serif font-bold text-prada-black">
                        2021
                      </th>
                      <th className="text-right py-4 px-4 font-serif font-bold text-prada-black">
                        2022
                      </th>
                      <th className="text-right py-4 px-4 font-serif font-bold text-prada-black">
                        2023
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-prada-light/50 hover:bg-prada-light/10 transition-colors">
                      <td className="py-3 px-4 font-medium">
                        Net Revenues
                        <InfoTooltip
                          title="Net Revenues"
                          content="The total amount of money PRADA received from selling products, after accounting for returns and discounts. This is the company's top-line income."
                        />
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[0].netRevenues)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[1].netRevenues)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[2].netRevenues)}
                      </td>
                    </tr>
                    <tr className="border-b border-prada-light/50 hover:bg-prada-light/10 transition-colors">
                      <td className="py-3 px-4">
                        Cost of Goods Sold
                        <InfoTooltip
                          title="Cost of Goods Sold (COGS)"
                          content="The direct costs of producing PRADA products, including materials (leather, fabric), manufacturing, and labor. Lower COGS relative to revenue means better profitability."
                        />
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[0].costOfGoodsSold)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[1].costOfGoodsSold)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[2].costOfGoodsSold)}
                      </td>
                    </tr>
                    <tr className="border-b border-prada-light/50 hover:bg-prada-light/10 transition-colors">
                      <td className="py-3 px-4">
                        Gross Margin %
                        <InfoTooltip
                          title="Gross Margin Percentage"
                          content="Shows what percentage of revenue remains after paying for the direct costs of making products. A higher gross margin means PRADA keeps more money from each sale. PRADA's gross margin improved from 75.7% to 80.4%, which is excellent for a luxury brand."
                        />
                      </td>
                      <td className="text-right py-3 px-4">75.7%</td>
                      <td className="text-right py-3 px-4">78.8%</td>
                      <td className="text-right py-3 px-4">80.4%</td>
                    </tr>
                    <tr className="border-b border-prada-light/50 hover:bg-prada-light/10 transition-colors">
                      <td className="py-3 px-4">
                        Operating Expenses
                        <InfoTooltip
                          title="Operating Expenses"
                          content="Costs of running the business, including store rent, employee salaries, marketing, advertising, and administrative costs. These are necessary expenses to operate PRADA stores and market the brand."
                        />
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[0].operatingExpenses)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[1].operatingExpenses)}
                      </td>
                      <td className="text-right py-3 px-4">
                        {formatCurrency(financialData[2].operatingExpenses)}
                      </td>
                    </tr>
                    <tr className="border-b border-prada-light/50 hover:bg-prada-light/10 transition-colors">
                      <td className="py-3 px-4 font-medium">
                        EBIT
                        <InfoTooltip
                          title="EBIT (Earnings Before Interest and Taxes)"
                          content="The profit from core business operations before paying interest on loans or taxes. It shows how profitable PRADA's main business is. PRADA's EBIT more than doubled, showing excellent operational performance."
                        />
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCurrency(financialData[0].ebit)}
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCurrency(financialData[1].ebit)}
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCurrency(financialData[2].ebit)}
                      </td>
                    </tr>
                    <tr className="hover:bg-prada-light/10 transition-colors">
                      <td className="py-3 px-4 font-medium">
                        Net Income
                        <InfoTooltip
                          title="Net Income"
                          content="The final profit after all expenses, taxes, and interest payments. This is the 'bottom line' - the actual profit PRADA keeps. It increased by 128% from 2021 to 2023, showing exceptional growth."
                        />
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCurrency(financialData[0].netIncome)}
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCurrency(financialData[1].netIncome)}
                      </td>
                      <td className="text-right py-3 px-4 font-medium">
                        {formatCurrency(financialData[2].netIncome)}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </motion.div>

              {/* Bar Chart */}
              <BarChart
                data={incomeStatementData}
                dataKeys={[
                  { key: "Net Revenues", name: "Net Revenues", color: "#0B0B0B" },
                  { key: "EBIT", name: "EBIT", color: "#D4AF37" },
                ]}
                xAxisKey="year"
                yAxisLabel="EUR (Million)"
              />
            </section>

            {/* Balance Sheet Section */}
            <section id="balance-sheet" className="mb-16">
              <SectionHeader
                title="Balance Sheet"
                subtitle="Assets, equity, and financial position"
              />

              {/* Explanation */}
              <ExplanationCard
                icon="dollar"
                title="What is a Balance Sheet?"
                explanation="A Balance Sheet is like a snapshot of PRADA's financial health at a specific point in time. It shows what the company owns (Assets), what it owes (Debt), and what belongs to shareholders (Equity). The key equation is: Assets = Equity + Debt. This tells us how financially stable and strong PRADA is."
                examples={[
                  "Assets: Everything PRADA owns (stores, inventory, cash, etc.)",
                  "Equity: Money invested by owners/shareholders",
                  "Debt: Money borrowed that must be repaid",
                ]}
                delay={0}
              />

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {financialData.map((d, index) => {
                  const debt = d.totalAssets - d.totalEquity;
                  return (
                    <motion.div
                      key={d.year}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-white rounded-lg p-6 border border-prada-light/20"
                    >
                      <h3 className="text-lg font-serif font-bold mb-4">
                        {d.year}
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <p className="text-sm text-gray-600">Total Assets</p>
                          <p className="text-xl font-bold">
                            {formatCurrency(d.totalAssets)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Total Equity</p>
                          <p className="text-xl font-bold">
                            {formatCurrency(d.totalEquity)}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Debt</p>
                          <p className="text-xl font-bold">
                            {formatCurrency(debt)}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Chart */}
              <BarChart
                data={balanceSheetData}
                dataKeys={[
                  { key: "Total Assets", name: "Total Assets", color: "#0B0B0B" },
                  { key: "Total Equity", name: "Total Equity", color: "#D4AF37" },
                  { key: "Debt", name: "Debt", color: "#666" },
                ]}
                xAxisKey="year"
                yAxisLabel="EUR (Million)"
              />
            </section>

            {/* Horizontal Analysis Section */}
            <section id="horizontal-analysis" className="mb-16">
              <SectionHeader
                title="Horizontal Analysis"
                subtitle="Year-over-year changes and growth trends (2021-2023)"
              />
              <HorizontalAnalysis />
            </section>

            {/* Vertical Analysis Section */}
            <section id="vertical-analysis" className="mb-16">
              <SectionHeader
                title="Vertical Analysis"
                subtitle="Common-size financial statements showing relative proportions"
              />
              <VerticalAnalysis />
            </section>

            {/* Ratios Section */}
            <section id="ratios" className="mb-16">
              <SectionHeader
                title="Financial Ratios"
                subtitle="Profitability, leverage, and efficiency metrics"
              />

              {/* Explanation Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <ExplanationCard
                  icon="trending"
                  title="Profitability Ratios"
                  explanation="These ratios show how efficiently PRADA converts sales into profit. Higher margins mean the company keeps more money from each sale. PRADA's margins improved significantly, showing better pricing power and cost control."
                  examples={[
                    "Gross Margin: Profit after production costs",
                    "EBIT Margin: Operating profit efficiency",
                    "Net Margin: Final profit after all expenses",
                  ]}
                  delay={0}
                />
                <ExplanationCard
                  icon="dollar"
                  title="Leverage Ratios"
                  explanation="Debt-to-Equity ratio shows how much PRADA relies on borrowed money versus owner's money. A lower ratio generally means less financial risk. PRADA maintains a healthy balance."
                  examples={[
                    "Debt-to-Equity: How much debt vs equity",
                    "Lower is generally safer",
                    "PRADA maintains conservative leverage",
                  ]}
                  delay={0.1}
                />
                <ExplanationCard
                  icon="lightbulb"
                  title="Return on Equity (ROE)"
                  explanation="ROE shows how well PRADA uses shareholders' money to generate profits. It's like a return on investment for owners. Higher ROE means better use of capital."
                  examples={[
                    "ROE = Net Income ÷ Equity",
                    "Shows efficiency of using owner's money",
                    "PRADA's ROE improved over the period",
                  ]}
                  delay={0.2}
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <LineChart
                  data={ratiosData}
                  dataKeys={[
                    {
                      key: "Gross Margin %",
                      name: "Gross Margin %",
                      color: "#0B0B0B",
                    },
                    {
                      key: "EBIT Margin %",
                      name: "EBIT Margin %",
                      color: "#D4AF37",
                    },
                    {
                      key: "Net Margin %",
                      name: "Net Margin %",
                      color: "#666",
                    },
                  ]}
                  xAxisKey="year"
                  yAxisLabel="%"
                  height={350}
                  isPercentage={true}
                />
                <LineChart
                  data={ratiosData}
                  dataKeys={[
                    {
                      key: "Debt-to-Equity %",
                      name: "Debt-to-Equity %",
                      color: "#0B0B0B",
                    },
                    {
                      key: "ROE %",
                      name: "Return on Equity %",
                      color: "#D4AF37",
                    },
                  ]}
                  xAxisKey="year"
                  yAxisLabel="%"
                  height={350}
                  isPercentage={true}
                />
              </div>
            </section>

            {/* Cash Flows Section */}
            <section id="cash-flows" className="mb-16">
              <SectionHeader
                title="Cash Flows"
                subtitle="Operating, investing, and financing activities"
              />

              {/* Explanation */}
              <ExplanationCard
                icon="dollar"
                title="Understanding Cash Flow"
                explanation="Cash Flow shows the actual money moving in and out of PRADA. It's different from profit because it tracks real cash, not just accounting numbers. There are three types: Operating (money from business), Investing (money spent on assets), and Financing (money from loans or investors)."
                examples={[
                  "Operating CF: Cash from selling products (positive is good)",
                  "Investing CF: Cash spent on stores, equipment (usually negative)",
                  "Financing CF: Cash from loans or paying dividends",
                ]}
                delay={0}
              />

              <BarChart
                data={cashFlowData}
                dataKeys={[
                  {
                    key: "Operating CF",
                    name: "Operating Cash Flow",
                    color: "#0B0B0B",
                  },
                  {
                    key: "Investing CF",
                    name: "Investing Cash Flow",
                    color: "#666",
                  },
                  {
                    key: "Financing CF",
                    name: "Financing Cash Flow",
                    color: "#D4AF37",
                  },
                ]}
                xAxisKey="year"
                yAxisLabel="EUR (Million)"
              />
            </section>

            {/* Trends Section */}
            <section id="trends" className="mb-16">
              <SectionHeader
                title="Trend Analysis"
                subtitle="Year-over-year growth rates and performance trends"
              />

              <div className="mb-8">
                <LineChart
                  data={trendsData}
                  dataKeys={[
                    {
                      key: "Revenue Growth %",
                      name: "Revenue Growth %",
                      color: "#0B0B0B",
                    },
                    {
                      key: "Net Income Growth %",
                      name: "Net Income Growth %",
                      color: "#D4AF37",
                    },
                  ]}
                  xAxisKey="year"
                  yAxisLabel="Growth %"
                  isPercentage={true}
                />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-gradient-to-br from-white to-prada-light/20 rounded-xl p-6 border border-prada-light/20 shadow-lg">
                  <h3 className="text-xl font-serif font-bold mb-3 flex items-center">
                    Revenue Growth
                    <InfoTooltip
                      title="Revenue Growth"
                      content="Year-over-year growth shows how much PRADA's sales increased compared to the previous year. Positive growth means the company is expanding and selling more products."
                    />
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    PRADA Group achieved <strong>strong revenue growth</strong> throughout the
                    period, with 2022 showing <strong className="text-prada-gold">24.8% growth</strong> and 2023 continuing
                    the momentum with <strong className="text-prada-gold">12.5% growth</strong>. 
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This consistent upward trend reflects successful brand positioning, 
                    effective marketing, and market expansion. In simple terms, PRADA 
                    sold significantly more products each year, showing strong demand 
                    for their luxury goods.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-white to-prada-light/20 rounded-xl p-6 border border-prada-light/20 shadow-lg">
                  <h3 className="text-xl font-serif font-bold mb-3 flex items-center">
                    Margin Expansion
                    <InfoTooltip
                      title="Margin Expansion"
                      content="Margin expansion means PRADA is keeping a larger percentage of each sale as profit. This happens when the company can charge higher prices, reduce costs, or both."
                    />
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    The company demonstrated <strong>significant margin expansion</strong> over
                    the three-year period, with EBIT margin improving by{" "}
                    <strong className="text-prada-gold">8 percentage points</strong> and net income margin increasing by{" "}
                    <strong className="text-prada-gold">5.4 percentage points</strong>.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    This indicates enhanced operational efficiency and pricing power. 
                    Think of it this way: PRADA not only sold more products, but also 
                    made more profit from each sale, showing they can command premium 
                    prices in the luxury market.
                  </p>
                </div>
              </motion.div>
            </section>

            {/* Tools Used Section */}
            <section id="tools-used" className="mb-20">
              <ToolsUsed />
            </section>

            {/* References Section */}
            <section id="references" className="mb-20">
              <References />
            </section>

            {/* Notes & Methodology Section */}
            <section id="notes" className="mb-16">
              <SectionHeader
                title="Notes & Methodology"
                subtitle="Data sources, definitions, and analytical approach"
              />

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg p-8 border border-prada-light/20 space-y-6"
              >
                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">
                    Data Sources
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    All financial data presented in this dashboard is derived
                    from PRADA Group Annual Reports for the years 2021, 2022,
                    and 2023. All figures are reported in EUR millions unless
                    otherwise stated. Percentages are calculated based on the
                    reported figures and may be subject to rounding.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">
                    Key Definitions
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>EBIT (Earnings Before Interest and Taxes):</strong>{" "}
                      Operating profit before deducting interest and tax
                      expenses.
                    </li>
                    <li>
                      <strong>Gross Margin:</strong> Net revenues minus cost of
                      goods sold, expressed as a percentage of net revenues.
                    </li>
                    <li>
                      <strong>EBIT Margin:</strong> EBIT as a percentage of net
                      revenues, indicating operational profitability.
                    </li>
                    <li>
                      <strong>Net Income Margin:</strong> Net income as a
                      percentage of net revenues, representing overall
                      profitability after all expenses.
                    </li>
                    <li>
                      <strong>Debt-to-Equity Ratio:</strong> Total debt divided
                      by total equity, expressed as a percentage, indicating
                      financial leverage.
                    </li>
                    <li>
                      <strong>Return on Equity (ROE):</strong> Net income
                      divided by total equity, expressed as a percentage,
                      measuring profitability relative to shareholders' equity.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">
                    Analytical Methodology
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    This dashboard employs both horizontal and vertical analysis
                    techniques:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li>
                      <strong>Horizontal Analysis:</strong> Comparison of
                      financial metrics across multiple years to identify trends
                      and growth patterns.
                    </li>
                    <li>
                      <strong>Vertical Analysis:</strong> Expression of line
                      items as percentages of a base figure (e.g., net revenues)
                      to assess relative proportions.
                    </li>
                    <li>
                      <strong>Ratio Analysis:</strong> Calculation of financial
                      ratios to evaluate profitability, efficiency, and
                      leverage.
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-serif font-bold mb-3">
                    Limitations
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Some figures, particularly operating expenses and cash flow
                    components, are estimated based on available data and
                    industry norms. Actual figures may vary. This dashboard is
                    intended for analytical purposes and should not be used as a
                    substitute for official financial statements.
                  </p>
                </div>
              </motion.div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

