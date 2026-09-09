"use client";

import { FaReact, FaNodeJs, FaAndroid, FaDatabase, FaFigma, FaCloud, FaRocket, FaRobot } from "react-icons/fa";
import { TbBrandGolang, TbBrandPython } from "react-icons/tb";
import { motion, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineRobot } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";

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

  const skillGroups = [
    {
      title: "Frontend",
      icon: <FaReact className="text-[#06B6D4] w-6 h-6" />,
      skills: ["React", "Next.js", "Tailwind CSS"],
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/20",
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-[#68A063] w-6 h-6" />,
      skills: ["Node.js", "NestJS", "Golang"],
      bg: "bg-green-500/10",
      border: "border-green-500/20",
    },
    {
      title: "Mobile",
      icon: <FaAndroid className="text-[#3DDC84] w-6 h-6" />,
      skills: ["Android", "Kotlin", "Compose"],
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20",
    },
    {
      title: "AI & ML",
      icon: <AiOutlineRobot className="text-[#7C3AED] w-6 h-6" />,
      skills: ["AI-Powered Apps", "Machine Learning", "Python"],
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    {
      title: "Microservices",
      icon: <BiNetworkChart className="text-[#EC4899] w-6 h-6" />,
      skills: ["RESTful APIs", "Docker", "Kubernetes"],
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
    {
      title: "Automation Testing",
      icon: <FaRobot className="text-[#F59E0B] w-6 h-6" />,
      skills: ["Robot Framework", "Python", "Selenium"],
      bg: "bg-amber-500/10",
      border: "border-amber-500/20",
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-[#4F46E5] w-6 h-6" />,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
      bg: "bg-indigo-500/10",
      border: "border-indigo-500/20",
    },
    {
      title: "DevOps",
      icon: <FaCloud className="text-[#38BDF8] w-6 h-6" />,
      skills: ["Docker", "Kubernetes", "CI/CD"],
      bg: "bg-sky-500/10",
      border: "border-sky-500/20",
    },
    {
      title: "Design",
      icon: <FaFigma className="text-[#EC4899] w-6 h-6" />,
      skills: ["Figma", "UI/UX", "Prototyping"],
      bg: "bg-pink-500/10",
      border: "border-pink-500/20",
    },
  ];

  const getGradientBorder = (index: number) => {
    const gradients = [
      "from-cyan-400 to-cyan-600",
      "from-green-400 to-green-600",
      "from-emerald-400 to-emerald-600",
      "from-purple-400 to-purple-600",
      "from-pink-400 to-pink-600",
      "from-amber-400 to-amber-600",
      "from-indigo-400 to-indigo-600",
      "from-sky-400 to-sky-600",
      "from-pink-400 to-pink-600",
    ];
    return gradients[index % gradients.length];
  };

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

            {/* Skill cards grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 400 },
                  }}
                  className="group relative"
                >
                  <div
                    className={`relative h-full p-5 rounded-2xl ${group.bg} border ${group.border} backdrop-blur-sm transition-all duration-300 group-hover:shadow-xl group-hover:border-white/20 overflow-hidden`}
                  >
                    {/* Gradient top border */}
                    <div
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${getGradientBorder(index)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                    />

                    {/* Icon */}
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 shadow-sm group-hover:shadow-md transition-all duration-300">
                      {group.icon}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-white/0 via-white/10 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </div>

                    {/* Title */}
                    <h4 className="mt-3 text-base font-semibold text-white">
                      {group.title}
                    </h4>

                    {/* Skills tags */}
                    <div className="mt-2.5 flex flex-wrap gap-1.5">
                      {group.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 text-sm font-medium text-gray-400 bg-white/5 rounded-md border border-white/10"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}