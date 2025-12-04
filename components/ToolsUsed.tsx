"use client";

import { motion } from "framer-motion";
import { BarChart3, FileSpreadsheet, Database, Palette, Zap, Globe, FileText } from "lucide-react";

interface Tool {
  name: string;
  description: string;
  icon: React.ReactNode;
  purpose: string;
  contribution: string;
}

const tools: Tool[] = [
  {
    name: "Microsoft Excel",
    description: "Spreadsheet software for financial data analysis",
    icon: <FileSpreadsheet className="w-8 h-8" />,
    purpose: "Data Collection & Analysis",
    contribution: "Primary tool for organizing, cleaning, and analyzing PRADA's financial data from annual reports. Used to calculate financial ratios, growth rates, perform horizontal and vertical analysis, and create preliminary charts and tables.",
  },
  {
    name: "Financial Charts & Graphs",
    description: "Data visualization for financial analysis",
    icon: <BarChart3 className="w-8 h-8" />,
    purpose: "Data Visualization",
    contribution: "Created all interactive charts including line charts, bar charts, and trend analysis visualizations. Made complex financial data easy to understand through visual representations. Used Excel charts and advanced charting tools to present data clearly.",
  },
  {
    name: "Financial Analysis Methodologies",
    description: "Standard financial analysis techniques",
    icon: <Database className="w-8 h-8" />,
    purpose: "Analytical Framework",
    contribution: "Applied industry-standard financial analysis methods including horizontal analysis (trend analysis), vertical analysis (common-size analysis), ratio analysis, and comparative analysis to evaluate PRADA's financial performance.",
  },
  {
    name: "Annual Reports & Financial Statements",
    description: "PRADA Group official financial documents",
    icon: <FileText className="w-8 h-8" />,
    purpose: "Primary Data Source",
    contribution: "Extracted and analyzed financial data from PRADA Group Annual Reports (2021, 2022, 2023). These official documents provided audited financial statements, income statements, balance sheets, and cash flow statements.",
  },
  {
    name: "Financial Ratios & Metrics",
    description: "Standard financial performance indicators",
    icon: <BarChart3 className="w-8 h-8" />,
    purpose: "Performance Measurement",
    contribution: "Calculated and analyzed key financial ratios including profitability ratios (gross margin, EBIT margin, net margin), leverage ratios (debt-to-equity), and efficiency ratios (return on equity) to assess PRADA's financial health.",
  },
  {
    name: "Statistical Analysis Tools",
    description: "Tools for growth rate and trend calculations",
    icon: <Zap className="w-8 h-8" />,
    purpose: "Trend Analysis",
    contribution: "Used Excel formulas and statistical methods to calculate year-over-year growth rates, compound annual growth rates (CAGR), percentage changes, and identify financial trends over the 3-year period.",
  },
  {
    name: "Presentation & Design Tools",
    description: "Tools for creating professional presentations",
    icon: <Palette className="w-8 h-8" />,
    purpose: "Visual Presentation",
    contribution: "Utilized design principles and presentation tools to create an elegant, professional dashboard that effectively communicates financial insights. Applied luxury brand aesthetics to match PRADA's brand identity.",
  },
  {
    name: "Research & Industry Analysis",
    description: "Industry benchmarks and market research",
    icon: <Globe className="w-8 h-8" />,
    purpose: "Context & Benchmarking",
    contribution: "Conducted research on luxury fashion industry standards, benchmarks, and best practices. Used industry data to provide context for PRADA's performance and validate analysis findings.",
  },
];

export default function ToolsUsed() {
  return (
    <motion.section
      id="tools-used"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-20"
    >
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-prada-black mb-4">
          Tools & Technologies Used
        </h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A comprehensive overview of the tools, technologies, and software used to create this
          financial analysis dashboard
        </p>
        <div className="w-32 h-1 bg-gradient-to-r from-transparent via-prada-gold to-transparent mx-auto mt-6 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-gradient-to-br from-white via-prada-light/20 to-white rounded-xl p-6 border border-prada-light/20 shadow-lg hover:shadow-xl transition-all duration-300 group"
          >
            <div className="flex items-center justify-center w-16 h-16 bg-prada-gold/10 rounded-lg mb-4 text-prada-gold group-hover:bg-prada-gold/20 transition-colors">
              {tool.icon}
            </div>
            <h3 className="text-xl font-serif font-bold text-prada-black mb-2">{tool.name}</h3>
            <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
            <div className="pt-3 border-t border-prada-light/30">
              <p className="text-xs font-semibold text-prada-gold mb-1 uppercase tracking-wide">
                {tool.purpose}
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">{tool.contribution}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Methodology Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 bg-gradient-to-br from-prada-black via-prada-dark to-prada-black rounded-2xl p-8 md:p-12 text-white"
      >
        <h3 className="text-3xl font-serif font-bold mb-6 text-center">Development Methodology</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-prada-gold mb-2">1</div>
            <h4 className="font-serif font-bold mb-2">Data Collection</h4>
            <p className="text-sm text-gray-300">
              Gathered financial data from PRADA Group Annual Reports (2021-2023) using Excel for
              organization and initial data entry
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-prada-gold mb-2">2</div>
            <h4 className="font-serif font-bold mb-2">Financial Analysis</h4>
            <p className="text-sm text-gray-300">
              Performed horizontal and vertical analysis, calculated financial ratios, and identified
              trends using Excel formulas and financial analysis methodologies
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-serif font-bold text-prada-gold mb-2">3</div>
            <h4 className="font-serif font-bold mb-2">Visualization & Presentation</h4>
            <p className="text-sm text-gray-300">
              Created charts, graphs, and visualizations to present financial insights clearly.
              Designed professional dashboard layout following financial reporting best practices
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}

