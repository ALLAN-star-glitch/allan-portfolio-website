"use client";

import { FaRocket } from "react-icons/fa";
import {
  SiNestjs,
  SiNextdotjs,
  SiGo,
  SiKotlin,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiApachekafka,
  SiTrpc,
  SiRabbitmq,
  SiTypescript,
  SiTailwindcss,
  SiAngular,
  SiJetpackcompose,
  SiSpringboot,
  SiPython,
  SiJavascript,
  SiAmazon,
} from "react-icons/si";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
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
        duration: 0.3,
      },
    },
  };

  const skills = [
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "Golang", icon: SiGo, color: "#00ADD8" },
    { name: "Kotlin", icon: SiKotlin, color: "#7F52FF" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Redis", icon: SiRedis, color: "#DC382D" },
    { name: "Docker", icon: SiDocker, color: "#2496ED" },
    { name: "Kubernetes", icon: SiKubernetes, color: "#326CE5" },
    { name: "GraphQL", icon: SiGraphql, color: "#E10098" },
    { name: "gRPC", icon: SiTrpc, color: "#244C5A" },
    { name: "Kafka", icon: SiApachekafka, color: "#231F20" },
    { name: "RabbitMQ", icon: SiRabbitmq, color: "#FF6600" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Angular", icon: SiAngular, color: "#DD0031" },
    { name: "Jetpack Compose", icon: SiJetpackcompose, color: "#4285F4" },
    { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
    { name: "Python", icon: SiPython, color: "#3776AB" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative pb-16 lg:pb-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120]"
    >
      {/* Glow effects - matching hero section */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-b from-cyan-500/5 to-transparent blur-2xl" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl" />

      {/* Tech grid pattern - matching hero section */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-7xl mx-auto relative pt-12"
      >
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 shadow-sm text-sm font-medium text-blue-400">
              Who I Am
            </span>
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* LEFT: Personal description */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 flex flex-col justify-center"
          >
            <div className="space-y-6">
              <p className="text-gray-300 text-lg leading-relaxed">
                I&apos;m a <span className="text-cyan-400 font-semibold">software engineer</span> and{" "}
                <span className="text-cyan-400 font-semibold">product-minded designer</span> who
                builds elegant, scalable applications and thoughtful user experiences.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I enjoy solving complex system problems while keeping interfaces intuitive,
                polished, and delightful.
              </p>

              {/* Quick stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-white">3+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Projects Delivered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">100%</div>
                  <div className="text-sm text-gray-500 uppercase tracking-wider">Client Satisfaction</div>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="pt-2"
              >
                <Link
                  href="/skills"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300"
                >
                  Explore All Skills
                  <FaRocket className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT: Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-7"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-semibold text-white tracking-tight">
                  My Tech Stack
                </h3>
                <p className="text-base text-gray-500 mt-1">
                  Technologies I work with daily
                </p>
              </div>
              <Link
                href="/skills"
                className="group inline-flex items-center gap-1 text-base text-cyan-400 font-medium hover:gap-2 transition-all duration-300"
              >
                View All
                <svg
                  className="w-5 h-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Skill tiles grid — matches AboutClient design */}
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
              {skills.map((skill) => (
                <motion.div
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="group flex flex-col items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5"
                >
                  <skill.icon
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs text-gray-400 mt-2 text-center group-hover:text-white transition-colors">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}