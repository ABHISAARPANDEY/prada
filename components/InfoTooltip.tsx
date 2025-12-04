"use client";

import { useState } from "react";
import { Info, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface InfoTooltipProps {
  title: string;
  content: string;
  children?: React.ReactNode;
}

export default function InfoTooltip({ title, content, children }: InfoTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-prada-gold/20 text-prada-gold hover:bg-prada-gold/30 transition-colors ml-2"
        aria-label="More information"
      >
        <Info size={14} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <>
            <div
              className="fixed inset-0 z-50"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.95 }}
              className="absolute left-0 top-8 w-80 bg-white border border-prada-light/30 rounded-lg shadow-2xl p-4 z-50"
            >
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-serif font-bold text-prada-black text-sm">
                  {title}
                </h4>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-prada-black transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{content}</p>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

