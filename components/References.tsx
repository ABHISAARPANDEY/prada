"use client";

import { motion } from "framer-motion";
import { BookOpen, ExternalLink, FileText, Globe } from "lucide-react";

interface Reference {
  title: string;
  type: "Annual Report" | "Website" | "Article" | "Documentation";
  source: string;
  url?: string;
  description: string;
}

const references: Reference[] = [
  {
    title: "PRADA Group Annual Report 2021",
    type: "Annual Report",
    source: "PRADA Group",
    url: "https://www.pradagroup.com/en/investor-relations/annual-reports",
    description: "Primary source for 2021 financial data including net revenues, EBIT, net income, balance sheet items, and key financial metrics.",
  },
  {
    title: "PRADA Group Annual Report 2022",
    type: "Annual Report",
    source: "PRADA Group",
    url: "https://www.pradagroup.com/en/investor-relations/annual-reports",
    description: "Primary source for 2022 financial data showing continued growth and improved profitability metrics.",
  },
  {
    title: "PRADA Group Annual Report 2023",
    type: "Annual Report",
    source: "PRADA Group",
    url: "https://www.pradagroup.com/en/investor-relations/annual-reports",
    description: "Latest annual report containing 2023 financial results, demonstrating record performance and margin expansion.",
  },
  {
    title: "PRADA Group Official Website",
    type: "Website",
    source: "PRADA Group",
    url: "https://www.pradagroup.com",
    description: "Official corporate website providing company information, history, and investor relations materials.",
  },
  {
    title: "Financial Statement Analysis - Best Practices",
    type: "Article",
    source: "Financial Analysis Resources",
    description: "Industry best practices and methodologies for conducting horizontal analysis, vertical analysis, and financial ratio calculation. Used as a guide for analytical approach.",
  },
  {
    title: "Financial Statement Analysis - Best Practices",
    type: "Article",
    source: "Various Financial Analysis Resources",
    description: "Industry best practices and methodologies for horizontal analysis, vertical analysis, and financial ratio calculation.",
  },
  {
    title: "Luxury Fashion Industry Reports",
    type: "Article",
    source: "Industry Research",
    description: "Context and benchmarks for luxury fashion industry performance, used to provide comparative analysis and insights.",
  },
];

const getIcon = (type: string) => {
  switch (type) {
    case "Annual Report":
      return <FileText className="w-5 h-5" />;
    case "Website":
      return <Globe className="w-5 h-5" />;
    case "Article":
      return <BookOpen className="w-5 h-5" />;
    case "Documentation":
      return <FileText className="w-5 h-5" />;
    default:
      return <FileText className="w-5 h-5" />;
  }
};

export default function References() {
  return (
    <motion.section
      id="references"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-prada-black mb-4">
          References & Sources
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          All data sources, references, and documentation used in the creation of this financial
          analysis dashboard
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-prada-gold to-transparent mx-auto mt-6 rounded-full" />
      </div>

      <div className="space-y-4">
        {references.map((ref, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white via-prada-light/20 to-white rounded-xl p-6 border border-prada-light/20 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-prada-gold">{getIcon(ref.type)}</div>
                  <h3 className="text-xl font-serif font-bold text-prada-black">{ref.title}</h3>
                  <span className="px-3 py-1 bg-prada-gold/10 text-prada-gold text-xs font-semibold rounded-full">
                    {ref.type}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Source:</strong> {ref.source}
                </p>
                <p className="text-gray-700 leading-relaxed">{ref.description}</p>
              </div>
              {ref.url && (
                <a
                  href={ref.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-4 p-2 text-prada-gold hover:bg-prada-gold/10 rounded-lg transition-colors"
                  aria-label={`Visit ${ref.title}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Citation Note */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 bg-gradient-to-r from-prada-light/30 to-white rounded-xl p-6 border border-prada-light/20"
      >
        <h3 className="font-serif font-bold text-prada-black mb-3 flex items-center gap-2">
          <BookOpen className="text-prada-gold" size={20} />
          Citation Note
        </h3>
        <p className="text-gray-700 leading-relaxed text-sm">
          All financial data presented in this dashboard is derived from official PRADA Group
          Annual Reports. While every effort has been made to ensure accuracy, some figures may
          have been estimated based on available data and industry norms. This dashboard is
          intended for educational and analytical purposes. For official financial statements and
          detailed disclosures, please refer to the original annual reports available on PRADA
          Group's investor relations website.
        </p>
      </motion.div>
    </motion.section>
  );
}

