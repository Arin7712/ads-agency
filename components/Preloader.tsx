"use client"; // Required for Next.js App Router

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Preloader({ onComplete } : { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify parent when animation is done
    }, 1500);
  }, []);

  return (
    isVisible && (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: "-100%" }}
        transition={{ duration: 1.2, ease: [0.77, 0, 0.18, 1] }} // Smooth cubic bezier effect
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-neutral-100 text-neutral-900 text-3xl md:text-7xl font-bold z-50"
      >
         BASIC/DEPT®
      </motion.div>
    )
  );
}
