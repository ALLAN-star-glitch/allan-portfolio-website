"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineRobot } from "react-icons/ai";

export default function HeroSection() {
  const [videoError, setVideoError] = useState(false);

  // Hardcoded data
  const heroData = {
    title: "Full Stack Developer & Test Automation Engineer crafting seamless digital experiences with modern web technologies.",
    specialties: ["Full Stack", "Mobile", "Backend", "Automation Testing", "Python", "Golang", "Next.js", "Kotlin"],
    name: "Allan,",
    image: "/images/hero/hero-image.jpeg",
    aiNote: "I also build AI-powered applications, integrating machine learning into practical, user-friendly solutions.",
  };

  // Animation variants
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 120,
        duration: 0.4,
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.5,
      },
    },
  };

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[#0B1120]">
      {/* 1. VIDEO BACKGROUND */}
      {!videoError && (
        <div className="absolute inset-0 w-full h-full z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-50"
            onError={() => setVideoError(true)}
          >
            <source
              src="/videos/coding-workspace.mp4"
              type="video/mp4"
            />
            <source
              src="https://www.pexels.com/download/video/34268782/"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      )}

      {/* Fallback gradient if video fails */}
      {videoError && (
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#0B1120] via-[#1A2332] to-[#0B1120]" />
      )}

      {/* 2. GRADIENT OVERLAY - More subtle and elegant */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0B1120]/30 via-[#0B1120]/20 via-40% to-[#0B1120]/70 to-90%" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0B1120]/50 via-transparent to-transparent" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0B1120]/20 via-transparent to-[#0B1120]/10" />

      {/* 3. TECH GRID OVERLAY - More subtle */}
      <div className="absolute inset-0 z-10 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      {/* 4. GLOW EFFECTS - More subtle */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 z-10 bg-blue-500/5 rounded-full blur-3xl -translate-y-1/4 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 z-10 bg-purple-500/5 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl" />

      {/* 5. CONTENT */}
      <div className="relative z-20 pt-20 pb-0 lg:pt-28 px-6 sm:px-10 lg:px-20 max-w-7xl mx-auto min-h-screen flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center py-8"
        >
          {/* LEFT: Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            {/* Greeting badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 shadow-sm text-sm font-medium text-blue-400">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                Open to Opportunities
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight text-white">
                Hi, I&apos;m{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {heroData.name}
                </span>
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl font-medium text-gray-300">
                  I build sophisticated
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  digital products
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              {heroData.title}
            </motion.p>

            {/* AI Note */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20"
            >
              <AiOutlineRobot className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">
                {heroData.aiNote}
              </span>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-4 pt-1"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
              >
                View My Work
                <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl font-medium text-base border border-white/10 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                <HiOutlineMail className="w-5 h-5" />
                Let&apos;s Collaborate
              </Link>
            </motion.div>

            {/* Specialties */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-2 pt-1"
            >
              {heroData.specialties.map((specialty) => (
                <span
                  key={specialty}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-gray-400 shadow-sm hover:border-blue-500/30 hover:text-blue-400 transition-colors duration-300"
                >
                  {specialty}
                </span>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center lg:justify-start gap-4 pt-1"
            >
              <Link
                href="https://github.com/ALLAN-star-glitch"
                target="_blank"
                className="p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
              >
                <FaGithub className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com/in/allan-mathenge"
                target="_blank"
                className="p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="p-2.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
              >
                <FaTwitter className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* RIGHT: Image Section */}
          <motion.div
            variants={imageVariants}
            className="hidden lg:flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Main image container */}
              <div className="relative w-[420px] h-[420px]">
                {/* Decorative rings */}
                <div className="absolute -inset-4 rounded-full border border-cyan-500/20 animate-spin-slow" />
                <div className="absolute -inset-8 rounded-full border border-purple-500/20 animate-spin-slow-reverse" />
                <div className="absolute -inset-12 rounded-full border border-blue-500/10" />
                
                {/* Pulsing ring */}
                <div className="absolute -inset-6 rounded-full border-2 border-cyan-500/30 animate-pulse-ring" />
                
                {/* Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20 group-hover:shadow-blue-500/30 transition-shadow duration-500">
                  <Image
                    src={heroData.image}
                    alt="Allan Mathenge - Full Stack Developer"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 via-transparent to-purple-600/10" />
                </div>
              </div>

              {/* Floating badge 1 - Experience */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/10 glass-tech"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">3+</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400">Years of</p>
                    <p className="text-sm font-semibold text-white">Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge 2 - Projects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-4 -left-4 bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl p-4 border border-white/10 glass-tech"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-lg">✨</span>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-400">Projects</p>
                    <p className="text-sm font-semibold text-white">15+ Delivered</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge 3 - AI */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800/90 backdrop-blur-sm rounded-2xl shadow-xl px-4 py-2 border border-white/10 glass-tech"
              >
                <div className="flex items-center gap-2">
                  <AiOutlineRobot className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs font-medium text-white">AI-Powered</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-500 uppercase tracking-wider">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex justify-center p-1.5">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
          />
        </div>
      </motion.div>
    </section>
  );
}