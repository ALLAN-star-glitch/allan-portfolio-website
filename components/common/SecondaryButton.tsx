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
          text-gray-700
          bg-white/70 backdrop-blur-md
          border border-gray-300/70 
          rounded-xl
          hover:text-blue-600 
          hover:border-blue-400
          hover:bg-blue-50/60
          hover:shadow-md hover:shadow-blue-100/40
          transition-all duration-300 ease-out
          focus:outline-none focus:ring-4 focus:ring-blue-200/40
          cursor-pointer
          select-none
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}
