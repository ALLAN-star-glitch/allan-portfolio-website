'use client'

// components/home/CallToAction.tsx
import Link from "next/link";
import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <section className="bg-white border rounded-lg p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold">Interested in working together?</h3>
          <p className="text-gray-600 mt-1">I’m available for freelance and full-time opportunities.</p>
        </div>

        <div className="flex gap-3">
          <Link href="/contact">
            <motion.button whileHover={{ scale: 1.03 }} className="px-4 py-2 bg-[#2979FF] text-white rounded-md">
              Contact Me
            </motion.button>
          </Link>

          <a href="/resume" className="px-4 py-2 border rounded-md text-gray-700">
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
