"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import PradaLogo from "./PradaLogo";
import { GraduationCap, MapPin, X } from "lucide-react";

interface Presenter {
  name: string;
  uid: string;
  role: string;
}

// Presenters with their UIDs and roles
const presenters: Presenter[] = [
  { name: "Shashwat", uid: "25LMMB1105", role: "Financial Analyst" },
  { name: "Nitin", uid: "25LMMB1073", role: "Data Analyst" },
  { name: "Tushar", uid: "25lmmb1106", role: "Research Lead" },
  { name: "Aditya", uid: "25LMMB1114", role: "Content Developer" },
  { name: "Pranshu", uid: "25lmmb1119", role: "Tools Provider" },
  { name: "Presenter 6", uid: "25LMMBXXXX", role: "Presenter" },
  { name: "Presenter 7", uid: "25LMMBXXXX", role: "Presenter" },
  { name: "Presenter 8", uid: "25LMMBXXXX", role: "Presenter" },
];

export default function LandingBanner() {
  const [isVisible, setIsVisible] = useState(true);

  const handleEnter = () => {
    setIsVisible(false);
    // Scroll to first section after a brief delay
    setTimeout(() => {
      const firstSection = document.getElementById("company-overview");
      if (firstSection) {
        firstSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-gradient-to-br from-prada-black via-prada-dark to-prada-black flex items-center justify-center"
    >
      {/* Close Button */}
      <button
        onClick={handleEnter}
        className="absolute top-6 right-6 text-white hover:text-prada-gold transition-colors z-10"
        aria-label="Close banner"
      >
        <X size={28} />
      </button>

      <div className="text-center px-4 max-w-4xl mx-auto">
        {/* Prada Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <PradaLogo size="lg" className="text-white mx-auto mb-6" />
          <div className="w-48 h-0.5 bg-prada-gold mx-auto" />
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
        >
          Financial Analysis Dashboard
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-300 mb-6"
        >
          2021 - 2023
        </motion.p>

        {/* Subject Information */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mb-8"
        >
          <p className="text-lg md:text-xl text-prada-gold font-serif font-semibold mb-2">
            Accounting For Managers
          </p>
          <p className="text-base md:text-lg text-gray-400 font-sans">
            Subject Code: 25COT-601
          </p>
        </motion.div>

        {/* Presented To */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-white font-serif">
            Presented to <span className="text-prada-gold font-bold">Dr. Alka Singh</span>
          </p>
        </motion.div>

        {/* Presenters Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center gap-2 text-prada-gold mb-6">
            <GraduationCap size={24} />
            <h2 className="text-2xl md:text-3xl font-serif font-bold">Presented By</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {presenters.map((presenter, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-prada-gold/20 hover:border-prada-gold/50 transition-all duration-300 text-center"
              >
                <p className="text-white font-serif font-semibold text-sm md:text-base mb-1">
                  {presenter.name}
                </p>
                <p className="text-prada-gold font-sans text-xs md:text-sm mb-1">
                  {presenter.uid}
                </p>
                <p className="text-gray-400 font-sans text-xs">
                  {presenter.role}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* University Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="flex items-center justify-center gap-2 text-gray-400 text-lg"
        >
          <MapPin size={20} />
          <span>Chandigarh University, Uttar Pradesh</span>
        </motion.div>

        {/* Continue Button */}
        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          onClick={handleEnter}
          className="mt-12 px-8 py-4 bg-prada-gold text-prada-black font-serif font-bold text-lg rounded-lg hover:bg-prada-gold/90 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Enter Dashboard
        </motion.button>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-prada-gold/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

