"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Prada3DModelProps {
  className?: string;
  autoRotate?: boolean;
}

export default function Prada3DModel({
  className = "",
  autoRotate = true,
}: Prada3DModelProps) {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (autoRotate) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoRotate]);

  // CSS 3D Fallback - Elegant animated PRADA bag visualization
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      <div className="relative w-64 h-80" style={{ perspective: "1000px" }}>
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* PRADA Bag Front */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-prada-black via-prada-dark to-prada-black rounded-lg shadow-2xl"
            style={{
              transform: "translateZ(40px)",
              border: "2px solid rgba(212, 175, 55, 0.3)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="text-white font-serif text-4xl font-bold mb-4 tracking-wider">
                PRADA
              </div>
              <div className="w-24 h-0.5 bg-prada-gold mb-4" />
              <div className="text-prada-gold text-sm font-sans tracking-widest uppercase">
                Milano
              </div>
            </div>
          </div>

          {/* PRADA Bag Side */}
          <div
            className="absolute inset-0 bg-gradient-to-br from-prada-dark to-prada-black rounded-lg"
            style={{
              transform: "rotateY(90deg) translateZ(40px)",
              border: "2px solid rgba(212, 175, 55, 0.2)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-32 bg-prada-gold/20 rounded-full" />
            </div>
          </div>

          {/* Handle */}
          <div
            className="absolute top-0 left-1/2 w-2 h-16 bg-prada-gold rounded-full"
            style={{
              transform: "translateX(-50%) translateY(-20px) translateZ(60px)",
              boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
            }}
          />
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-prada-gold/30 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}
