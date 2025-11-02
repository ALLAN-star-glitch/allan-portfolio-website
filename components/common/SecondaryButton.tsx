"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

export default function SecondaryButton({ href, label }: ButtonProps) {
  return (
    <Link href={href} className="w-full sm:w-auto">
      <motion.button
        whileHover={{ scale: 1.03, y: -3 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 250, damping: 12 }}
        className="
          w-full sm:w-auto
          flex items-center justify-center
          px-8 py-3
          border border-gray-300/80 
          text-gray-700
          font-semibold text-lg
          rounded-xl
          bg-white/70 backdrop-blur-md
          hover:text-blue-600 
          hover:border-blue-400
          hover:shadow-md hover:shadow-blue-100/50
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-blue-200/40
          cursor-pointer
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}
