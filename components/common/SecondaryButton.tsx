"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

export default function SecondaryButton({ href, label }: ButtonProps) {
  return (
    <Link href={href} className="inline-block w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 250, damping: 12 }}
        className="
          flex items-center justify-center
          w-full sm:w-auto
          px-6 sm:px-8 md:px-10 
          py-2.5 sm:py-3 md:py-3.5
          text-sm sm:text-base md:text-lg
          font-semibold
          text-gray-300
          bg-white/5 backdrop-blur-sm
          border border-white/10
          rounded-xl
          hover:text-cyan-400
          hover:border-cyan-500/50
          hover:bg-white/10
          hover:shadow-lg hover:shadow-cyan-500/5
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-4 focus:ring-cyan-500/20
          cursor-pointer
          select-none
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}