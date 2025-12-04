"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, Award } from "lucide-react";
import { financialData, calculateMetrics } from "@/data/pradaFinancials";
import { formatCurrency, formatPercentage } from "@/lib/utils";

interface YearInsight {
  year: number;
  title: string;
  highlights: string[];
  metrics: {
    revenue: number;
    ebit: number;
    netIncome: number;
    ebitMargin: number;
    netMargin: number;
  };
  achievements: string[];
  challenges: string[];
  strategy: string[];
}

const yearInsights: YearInsight[] = [
  {
    year: 2021,
    title: "Recovery & Resilience",
    highlights: [
      "Strong recovery from pandemic impact",
      "Digital transformation acceleration",
      "Asia-Pacific market expansion",
      "Sustainability initiatives launch",
    ],
    metrics: {
      revenue: financialData[0].netRevenues,
      ebit: financialData[0].ebit,
      netIncome: financialData[0].netIncome,
      ebitMargin: 14.5,
      netMargin: 8.8,
    },
    achievements: [
      "Achieved €3.37 billion in net revenues despite global challenges",
      "Maintained strong gross margin of 75.7%",
      "Successfully launched digital initiatives and e-commerce expansion",
      "Strengthened brand positioning in key markets",
    ],
    challenges: [
      "Navigating post-pandemic market uncertainties",
      "Supply chain disruptions affecting operations",
      "Changing consumer behavior and shopping patterns",
    ],
    strategy: [
      "Focus on digital channels and online presence",
      "Investment in sustainable practices and materials",
      "Expansion in high-growth markets, particularly Asia",
      "Product innovation and brand elevation",
    ],
  },
  {
    year: 2022,
    title: "Accelerated Growth",
    highlights: [
      "Exceptional revenue growth of 24.8%",
      "Margin expansion to 18.5% EBIT margin",
      "Strong performance across all regions",
      "Enhanced operational efficiency",
    ],
    metrics: {
      revenue: financialData[1].netRevenues,
      ebit: financialData[1].ebit,
      netIncome: financialData[1].netIncome,
      ebitMargin: 18.5,
      netMargin: 11.1,
    },
    achievements: [
      "Reached €4.20 billion in net revenues, representing 24.8% growth",
      "EBIT more than doubled, reaching €776 million",
      "Net income increased by 58% to €465.2 million",
      "Gross margin improved to 78.8%, reflecting pricing power",
      "Strong performance in leather goods and ready-to-wear categories",
    ],
    challenges: [
      "Managing rapid growth while maintaining quality standards",
      "Inflationary pressures on costs",
      "Geopolitical uncertainties affecting certain markets",
    ],
    strategy: [
      "Continued focus on direct retail expansion",
      "Premiumization strategy driving margin improvement",
      "Selective store network optimization",
      "Investment in digital capabilities and customer experience",
    ],
  },
  {
    year: 2023,
    title: "Premium Excellence",
    highlights: [
      "Record-breaking financial performance",
      "EBIT margin reached 22.5%",
      "Net income margin at 14.2%",
      "Market leadership strengthened",
    ],
    metrics: {
      revenue: financialData[2].netRevenues,
      ebit: financialData[2].ebit,
      netIncome: financialData[2].netIncome,
      ebitMargin: 22.5,
      netMargin: 14.2,
    },
    achievements: [
      "Achieved €4.73 billion in net revenues, highest in company history",
      "EBIT reached €1.06 billion, more than doubling from 2021",
      "Net income grew to €671 million, representing 128% increase from 2021",
      "EBIT margin expanded to 22.5%, among the highest in luxury sector",
      "Gross margin reached 80.4%, demonstrating exceptional product value",
      "Strong cash generation and financial flexibility",
    ],
    challenges: [
      "Maintaining growth momentum in uncertain economic environment",
      "Balancing expansion with operational excellence",
      "Managing supply chain complexity across global operations",
    ],
    strategy: [
      "Sustained focus on brand elevation and premium positioning",
      "Selective expansion in high-potential markets",
      "Continued investment in digital transformation",
      "Commitment to sustainability and responsible luxury",
      "Product innovation and category expansion",
    ],
  },
];

export default function YearInsights() {
  return (
    <section className="mb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-prada-black mb-4 text-center">
          Year-by-Year Insights
        </h2>
        <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto">
          Detailed analysis of PRADA Group's performance, strategy, and achievements for each
          year
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-prada-gold to-transparent mx-auto mt-6 rounded-full" />
      </motion.div>

      <div className="space-y-16">
        {yearInsights.map((insight, index) => {
          const metrics = calculateMetrics(
            financialData.find((d) => d.year === insight.year) || financialData[0]
          );

          return (
            <motion.div
              key={insight.year}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-br from-white via-prada-light/20 to-white rounded-2xl p-8 md:p-12 border border-prada-light/20 shadow-xl"
            >
              {/* Year Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 pb-6 border-b-2 border-prada-gold/30">
                <div>
                  <h3 className="text-3xl md:text-4xl font-serif font-bold text-prada-black mb-2">
                    {insight.year}
                  </h3>
                  <p className="text-xl text-prada-gold font-serif font-medium">
                    {insight.title}
                  </p>
                </div>
                <div className="mt-4 md:mt-0 grid grid-cols-2 md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">Revenue</p>
                    <p className="text-lg font-bold text-prada-black">
                      {formatCurrency(insight.metrics.revenue)}
                    </p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-500 mb-1">EBIT Margin</p>
                    <p className="text-lg font-bold text-prada-gold">
                      {formatPercentage(insight.metrics.ebitMargin)}
                    </p>
                  </div>
                  <div className="text-center col-span-2 md:col-span-1">
                    <p className="text-xs text-gray-500 mb-1">Net Margin</p>
                    <p className="text-lg font-bold text-prada-black">
                      {formatPercentage(insight.metrics.netMargin)}
                    </p>
                  </div>
                </div>
              </div>

              {/* Key Highlights */}
              <div className="mb-8">
                <h4 className="text-xl font-serif font-bold text-prada-black mb-4 flex items-center">
                  <TrendingUp className="w-5 h-5 text-prada-gold mr-2" />
                  Key Highlights
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {insight.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                      className="flex items-start space-x-2 bg-white/50 rounded-lg p-3"
                    >
                      <div className="w-2 h-2 bg-prada-gold rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-700">{highlight}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="mb-8">
                <h4 className="text-xl font-serif font-bold text-prada-black mb-4 flex items-center">
                  <Award className="w-5 h-5 text-prada-gold mr-2" />
                  Major Achievements
                </h4>
                <div className="space-y-3">
                  {insight.achievements.map((achievement, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                      className="bg-gradient-to-r from-prada-gold/10 to-transparent rounded-lg p-4 border-l-4 border-prada-gold"
                    >
                      <p className="text-gray-700 leading-relaxed">{achievement}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Strategy & Challenges Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Strategic Focus */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-prada-black mb-4 flex items-center">
                    <Target className="w-5 h-5 text-prada-gold mr-2" />
                    Strategic Focus
                  </h4>
                  <div className="space-y-2">
                    {insight.strategy.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start space-x-2"
                      >
                        <DollarSign className="w-4 h-4 text-prada-gold mt-1 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Challenges & Opportunities */}
                <div>
                  <h4 className="text-xl font-serif font-bold text-prada-black mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 text-prada-gold mr-2" />
                    Market Context
                  </h4>
                  <div className="space-y-2">
                    {insight.challenges.map((challenge, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.2 + i * 0.1 }}
                        className="flex items-start space-x-2 bg-prada-light/30 rounded-lg p-3"
                      >
                        <div className="w-4 h-4 border-2 border-prada-gold rounded-full mt-0.5 flex-shrink-0" />
                        <p className="text-gray-600 text-sm">{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

