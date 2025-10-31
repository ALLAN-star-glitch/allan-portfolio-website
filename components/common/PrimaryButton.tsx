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
        whileHover={{ scale: 1.03, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="
          w-full sm:w-auto
          px-6 py-3 
          bg-[#2979FF] 
          text-white 
          font-medium 
          rounded-lg 
          shadow-md 
          hover:bg-[#1f5fd1] 
          transition 
          cursor-pointer
        "
      >
        {label}
      </motion.button>
    </Link>
  );
}
