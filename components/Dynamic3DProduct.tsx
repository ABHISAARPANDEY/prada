"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";

// Dynamically import the 3D component with no SSR
const Real3DProductLoader = dynamic(
  () => import("./Real3DProduct"),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-prada-gold/30 border-t-prada-gold rounded-full animate-spin" />
      </div>
    ),
  }
);

interface Dynamic3DProductProps {
  product: "bag" | "shoes" | "sunglasses" | "wallet" | "watch";
  className?: string;
  autoRotate?: boolean;
}

export default function Dynamic3DProduct(props: Dynamic3DProductProps) {
  return (
    <Suspense fallback={<div className="w-full h-full bg-prada-light/20 rounded-lg" />}>
      <Real3DProductLoader {...props} />
    </Suspense>
  );
}

