"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

export default function PrimaryButton({ href, label }: ButtonProps) {
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
          bg-linear-to-r from-blue-600 to-cyan-500
          text-white font-semibold
          text-sm sm:text-base md:text-lg
          rounded-xl
          shadow-lg hover:shadow-2xl
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-blue-300/40
          cursor-pointer
          select-none
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}
