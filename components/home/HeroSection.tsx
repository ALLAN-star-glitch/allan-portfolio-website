"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="pt-10 sm:pt-14 lg:pt-20 px-4 sm:px-6 lg:px-12">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text Section */}
        <div className="text-center lg:text-left space-y-8">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-[#0f1724]"
          >
            Hi, I’m <span className="text-[#2979FF]">Allan Mathenge</span> — I build
            sophisticated digital products that merge{" "}
            <span className="text-[#2979FF]">technology</span> and{" "}
            <span className="text-[#2979FF]">design</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
            className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            With expertise across backend, frontend, mobile, and blockchain development — and a
            passion for elegant design — I craft digital experiences that are scalable, beautiful,
            and human-centered.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-[#2979FF] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all"
              >
                View My Work
              </motion.button>
            </Link>

            <a href="mailto:allan@domain.com" rel="noopener noreferrer">
              <motion.button
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="px-6 py-3 bg-white text-gray-800 rounded-xl font-medium shadow-md hover:shadow-lg border border-gray-200 transition-all"
              >
                Let’s Collaborate
              </motion.button>
            </a>
          </div>

          {/* Specialties */}
          <div className="pt-4 text-xs sm:text-sm text-gray-500">
            <strong className="text-gray-700">Specialties:</strong>{" "}
            Node.js · NestJS · React · Next.js · Android · Blockchain · PostgreSQL · Figma
          </div>
        </div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex justify-center lg:justify-end"
        >
          <div className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/allan2profile.png"
              alt="Allan Mathenge"
              width={400}
              height={400}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
