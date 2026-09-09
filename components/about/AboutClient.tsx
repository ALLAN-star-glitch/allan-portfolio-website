/* eslint-disable react/no-unescaped-entities */
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { 
  SiNestjs, 
  SiNextdotjs, 
  SiGo, 
  SiKotlin, 
  SiPostgresql, 
  SiMongodb,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiRedis,
  SiApachekafka,
  SiTrpc,
  SiRabbitmq,
  SiTypescript,
  SiTailwindcss,
  SiJetpackcompose,
  SiAngular,
  SiSpringboot,
  SiPython,
  SiJavascript,
  SiAmazon
} from "react-icons/si";

export default function AboutClient() {
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

  const experiences = [
    {
      company: "Equity Bank Limited",
      role: "Test Automation Engineer (QA)",
      period: "February 2025 – Present",
      description: "Automating backend and frontend testing across multiple omni banking platforms, reducing regression testing time by approximately 25% for core banking modules. Conducting SIT and UAT testing on critical banking modules including RTGS/EFT fund transfers, M-Pesa integration, loan processing, and customer onboarding while validating security controls per regulatory standards.",
      icon: "🏦",
    },
    {
      company: "E & M Tech House",
      role: "Full Stack Developer",
      period: "January 2024 – December 2024",
      description: "Engineered frontend applications using Angular and TypeScript, improving page load times by approximately 20%. Designed and integrated RESTful APIs using Node.js and ExpressJS. Built responsive UI components with Bootstrap and Angular Material.",
      icon: "💻",
    },
    {
      company: "Africana College of Professionals",
      role: "ICT Support & Developer",
      period: "May 2023 – Present",
      description: "Providing ongoing ICT support, maintaining digital infrastructure, and ensuring system availability for college operations. Building and developing the college portal to streamline student and staff access to academic resources and administrative services.",
      icon: "🎓",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <div className="min-h-screen bg-[#0B1120] py-16 lg:py-24 px-6 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-sm font-medium text-blue-400">
            About Me
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            More About Me
          </h1>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Get to know more about my journey, skills, and experience
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-16"
        >
          {/* Bio Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-semibold text-white mb-4">Who I Am</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-4">
                I'm a <span className="text-cyan-400 font-semibold">software engineer</span> and{" "}
                <span className="text-cyan-400 font-semibold">QA Engineer</span> with over 3 years of experience
                building elegant, scalable applications and ensuring quality through automation.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed">
                I specialize in full-stack development with a focus on microservices architecture,
                cloud-native applications, and creating seamless user experiences. As a QA Engineer at Equity Bank,
                I've gained valuable experience in testing critical banking systems and ensuring regulatory compliance.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
                >
                  View My Work
                  <FaArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm text-gray-300 rounded-xl font-medium border border-white/10 hover:border-cyan-500/30 hover:bg-white/10 transition-all duration-300"
                >
                  <HiOutlineMail className="w-5 h-5" />
                  Contact Me
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 lg:w-80 lg:h-80">
                <div className="absolute -inset-4 rounded-full border border-cyan-500/20 animate-spin-slow" />
                <div className="absolute -inset-8 rounded-full border border-purple-500/20 animate-spin-slow-reverse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-cyan-500/30 shadow-lg shadow-cyan-500/10">
                  <Image
                    src="/allanprofile.jpg"
                    alt="Allan Mathenge"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Experience Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {experiences.map((exp) => (
                <div
                  key={exp.company}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4">
                    <span className="text-2xl">{exp.icon}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">{exp.company}</h3>
                  <p className="text-cyan-400 text-sm font-medium mt-1">{exp.role}</p>
                  <p className="text-gray-500 text-sm mt-1">{exp.period}</p>
                  <p className="text-gray-400 text-sm mt-3 leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-semibold text-white mb-6 text-center">Tech Stack</h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex flex-col items-center p-4 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/5 hover:-translate-y-1"
                >
                  <skill.icon
                    className="w-8 h-8 transition-all duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="text-xs text-gray-400 mt-2 text-center group-hover:text-white transition-colors">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 pt-4">
            <Link
              href="https://github.com/ALLAN-star-glitch"
              target="_blank"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
            >
              <FaGithub className="w-5 h-5" />
            </Link>
            <Link
              href="https://linkedin.com/in/allan-mathenge"
              target="_blank"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
            >
              <FaLinkedin className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com"
              target="_blank"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
            >
              <FaTwitter className="w-5 h-5" />
            </Link>
            <Link
              href="mailto:allanmathenge67@gmail.com"
              className="p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 hover:bg-white/10 hover:shadow-md transition-all duration-300"
            >
              <HiOutlineMail className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}