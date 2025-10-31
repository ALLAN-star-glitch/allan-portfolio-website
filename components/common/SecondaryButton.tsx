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
        whileHover={{ scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          w-full sm:w-auto
          px-6 py-3 
          border border-gray-300 
          text-gray-700 
          font-medium 
          rounded-lg 
          hover:border-[#2979FF] 
          hover:text-[#2979FF] 
          transition 
          cursor-pointer
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}
