"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Real3DProduct from "./Real3DProduct";

interface PradaProduct3DProps {
  product: "bag" | "shoes" | "sunglasses" | "wallet" | "watch";
  className?: string;
  autoRotate?: boolean;
}

const productConfigs = {
  bag: {
    front: {
      bg: "from-prada-black via-prada-dark to-prada-black",
      text: "PRADA",
      subtext: "Milano",
      size: "w-64 h-80",
    },
    side: {
      transform: "rotateY(90deg) translateZ(40px)",
      accent: "w-16 h-32",
    },
    handle: {
      position: "top-0",
      size: "w-2 h-16",
    },
  },
  shoes: {
    front: {
      bg: "from-prada-black via-prada-gray to-prada-black",
      text: "PRADA",
      subtext: "Sneakers",
      size: "w-72 h-48",
    },
    side: {
      transform: "rotateY(90deg) translateZ(30px)",
      accent: "w-20 h-24",
    },
    handle: null,
  },
  sunglasses: {
    front: {
      bg: "from-prada-black via-prada-dark to-prada-black",
      text: "PRADA",
      subtext: "Optical",
      size: "w-56 h-32",
    },
    side: {
      transform: "rotateY(90deg) translateZ(25px)",
      accent: "w-12 h-16",
    },
    handle: {
      position: "top-2",
      size: "w-1 h-8",
    },
  },
  wallet: {
    front: {
      bg: "from-prada-black via-prada-dark to-prada-black",
      text: "PRADA",
      subtext: "Leather",
      size: "w-48 h-64",
    },
    side: {
      transform: "rotateY(90deg) translateZ(20px)",
      accent: "w-8 h-12",
    },
    handle: null,
  },
  watch: {
    front: {
      bg: "from-prada-gold via-prada-black to-prada-gold",
      text: "PRADA",
      subtext: "Timepiece",
      size: "w-40 h-40",
    },
    side: {
      transform: "rotateY(90deg) translateZ(15px)",
      accent: "w-6 h-6",
    },
    handle: null,
  },
};

export default function PradaProduct3D({
  product,
  className = "",
  autoRotate = true,
}: PradaProduct3DProps) {
  const [useReal3D, setUseReal3D] = useState(true);
  const [rotation, setRotation] = useState(0);
  const config = productConfigs[product];

  useEffect(() => {
    // Try to use real 3D, fallback to CSS if error
    if (typeof window !== "undefined") {
      import("@react-three/fiber")
        .then(() => setUseReal3D(true))
        .catch(() => setUseReal3D(false));
    }
  }, []);

  useEffect(() => {
    if (!useReal3D && autoRotate) {
      const interval = setInterval(() => {
        setRotation((prev) => (prev + 0.5) % 360);
      }, 50);
      return () => clearInterval(interval);
    }
  }, [autoRotate, useReal3D]);

  // Use real 3D if available
  if (useReal3D) {
    try {
      return <Real3DProduct product={product} className={className} autoRotate={autoRotate} />;
    } catch {
      // Fall through to CSS 3D
    }
  }

  // Fallback to CSS 3D
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative w-full h-full flex items-center justify-center ${className}`}
    >
      <div className={`relative ${config.front.size}`} style={{ perspective: "1000px" }}>
        <div
          className="absolute inset-0 transition-transform duration-1000"
          style={{
            transform: `rotateY(${rotation}deg)`,
            transformStyle: "preserve-3d",
          }}
        >
          {/* Product Front */}
          <div
            className={`absolute inset-0 bg-gradient-to-br ${config.front.bg} rounded-lg shadow-2xl`}
            style={{
              transform: "translateZ(40px)",
              border: "2px solid rgba(212, 175, 55, 0.3)",
            }}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              <div className="text-white font-serif text-2xl md:text-3xl font-bold mb-2 tracking-wider">
                {config.front.text}
              </div>
              <div className="w-16 h-0.5 bg-prada-gold mb-2" />
              <div className="text-prada-gold text-xs font-sans tracking-widest uppercase">
                {config.front.subtext}
              </div>
            </div>
          </div>

          {/* Product Side */}
          <div
            className={`absolute inset-0 bg-gradient-to-br from-prada-dark to-prada-black rounded-lg`}
            style={{
              transform: config.side.transform,
              border: "2px solid rgba(212, 175, 55, 0.2)",
            }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className={`${config.side.accent} bg-prada-gold/20 rounded-full`} />
            </div>
          </div>

          {/* Handle/Accent (if applicable) */}
          {config.handle && (
            <div
              className={`absolute ${config.handle.position} left-1/2 ${config.handle.size} bg-prada-gold rounded-full`}
              style={{
                transform: "translateX(-50%) translateY(-20px) translateZ(60px)",
                boxShadow: "0 0 20px rgba(212, 175, 55, 0.5)",
              }}
            />
          )}

          {/* Watch-specific: Face */}
          {product === "watch" && (
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{ transform: "translateZ(45px)" }}
            >
              <div className="w-24 h-24 rounded-full bg-prada-black border-4 border-prada-gold flex items-center justify-center">
                <div className="text-prada-gold font-serif text-sm font-bold">12</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-prada-gold/30 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + i * 15}%`,
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

