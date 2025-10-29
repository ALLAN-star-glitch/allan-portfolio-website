"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{
          duration: 0.4,
          ease: [0.4, 0, 0.2, 1], // smooth easing
        }}
        className=" md:p-12 lg:p-16 min-h-screen bg-linear-to-b from-white to-[#f9fafc]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
