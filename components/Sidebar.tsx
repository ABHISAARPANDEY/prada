"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const sections = [
  { id: "company-overview", label: "Company Overview" },
  { id: "founders", label: "Founders" },
  { id: "products", label: "Product Gallery" },
  { id: "year-insights", label: "Year Insights" },
  { id: "overview", label: "Financial Overview" },
  { id: "income-statement", label: "Income Statement" },
  { id: "balance-sheet", label: "Balance Sheet" },
  { id: "horizontal-analysis", label: "Horizontal Analysis" },
  { id: "vertical-analysis", label: "Vertical Analysis" },
  { id: "ratios", label: "Ratios" },
  { id: "cash-flows", label: "Cash Flows" },
  { id: "trends", label: "Trends" },
  { id: "tools-used", label: "Tools Used" },
  { id: "references", label: "References" },
  { id: "notes", label: "Notes & Methodology" },
];

export default function Sidebar({
  isOpen,
  onClose,
  activeSection,
  onSectionClick,
}: SidebarProps) {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            if (activeSection !== section.id) {
              // Update active section without scrolling
            }
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  const handleClick = (sectionId: string) => {
    onSectionClick(sectionId);
    onClose();
  };

  return (
    <>
      {/* Overlay for mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <aside
        className={`fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)] w-64 bg-prada-dark text-white z-50 lg:z-auto border-r border-prada-gray overflow-y-auto transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        }`}
      >
            <nav className="p-4 space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => handleClick(section.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeSection === section.id
                      ? "bg-prada-gold/20 text-prada-gold border-l-4 border-prada-gold"
                      : "text-gray-300 hover:bg-prada-gray hover:text-white"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
      </aside>
    </>
  );
}

