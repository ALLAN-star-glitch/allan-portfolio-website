/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaArrowRight, FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function CallToAction() {
  return (
    <section className="relative py-16 lg:py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120]">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center"
        >
          {/* Glow behind the CTA */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Badge */}
            <span className="inline-block px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-sm font-medium text-blue-400 mb-6">
              Let's Build Together
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
              Ready to bring your
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                {" "}idea to life?
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto mb-8">
              I'm currently open to new opportunities, collaborations, and exciting projects. 
              Let's connect and create something amazing together.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope className="w-4 h-4" />
                Get in Touch
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl font-medium text-base border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 hover:scale-105 transition-all duration-300"
              >
                View My Work
                <FaArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4">
              <Link
                href="https://github.com/ALLAN-star-glitch"
                target="_blank"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
                aria-label="GitHub"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/allan-mathenge"
                target="_blank"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="mailto:allanmathenge67@gmail.com"
                className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
                aria-label="Email"
              >
                <FaEnvelope className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}