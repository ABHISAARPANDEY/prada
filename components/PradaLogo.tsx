"use client";

import { motion } from "framer-motion";

interface PradaLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PradaLogo({ className = "", size = "md" }: PradaLogoProps) {
  const sizeClasses = {
    sm: "h-6",
    md: "h-8",
    lg: "h-12",
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`${sizeClasses[size]} ${className} relative`}
      style={{ 
        perspective: "1000px",
        transformStyle: "preserve-3d"
      }}
    >
      <motion.div
        animate={{
          rotateY: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
          width: "100%",
          height: "100%",
        }}
        className="w-full h-full"
      >
        <svg
          viewBox="0 0 200 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          style={{
            backfaceVisibility: "visible",
            WebkitBackfaceVisibility: "visible",
          }}
        >
          {/* Prada Text Logo */}
          <text
            x="10"
            y="40"
            fontFamily="Playfair Display, serif"
            fontSize="42"
            fontWeight="700"
            fill="currentColor"
            letterSpacing="2"
          >
            PRADA
          </text>
          {/* Decorative line */}
          <line
            x1="10"
            y1="45"
            x2="190"
            y2="45"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.3"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

