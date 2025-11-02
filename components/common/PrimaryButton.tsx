"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface ButtonProps {
  href: string;
  label: string;
}

export default function PrimaryButton({ href, label }: ButtonProps) {
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
          bg-linear-to-r from-blue-600 to-cyan-500
          text-white font-semibold text-lg
          rounded-xl
          shadow-lg hover:shadow-2xl
          transition-all duration-300
          focus:outline-none focus:ring-4 focus:ring-blue-300/40
          cursor-pointer
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}
