"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaAndroid, FaDatabase, FaFigma } from "react-icons/fa";
import { GiChainsaw } from "react-icons/gi";

export default function AboutSection() {
  const skillGroups = [
    {
      title: "Frontend",
      icon: <FaReact className="text-[#2979FF] w-5 h-5" />,
      skills: ["React", "Next.js", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: <FaNodeJs className="text-green-600 w-5 h-5" />,
      skills: ["Node.js", "NestJS", "Express"],
    },
    {
      title: "Mobile",
      icon: <FaAndroid className="text-green-500 w-5 h-5" />,
      skills: ["Android", "Kotlin", "Jetpack Compose"],
    },
    {
      title: "Blockchain",
      icon: <GiChainsaw className="text-purple-600 w-5 h-5" />,
      skills: ["Smart Contracts", "dApps", "Web3.js"],
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-indigo-600 w-5 h-5" />,
      skills: ["PostgreSQL", "MongoDB", "Redis"],
    },
    {
      title: "Design",
      icon: <FaFigma className="text-pink-500 w-5 h-5" />,
      skills: ["Figma", "UI/UX", "Prototyping"],
    },
  ];

  return (
    <section id="about" className="pt-12 lg:pt-20 max-w-7xl mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start"
      >
        {/* Left: Description */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f1724] tracking-tight">
            About Me
          </h2>
          <p className="mt-6 text-gray-600 text-base leading-relaxed">
            I&apos;m a software engineer and product-minded designer who builds elegant, scalable
            applications and thoughtful user experiences. I enjoy solving complex system problems
            while keeping interfaces intuitive, polished, and delightful.
          </p>
        </div>

        {/* Right: Skill Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {skillGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ scale: 1.03 }}
              className="p-3 rounded-lg bg-blue-50 flex flex-col items-center gap-2 transition-transform"
            >
              {/* Icon */}
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
                {group.icon}
              </div>

              {/* Title */}
              <h3 className="text-sm font-semibold text-[#0f1724] text-center">
                {group.title}
              </h3>

              {/* Skills */}
              <ul className="text-gray-600 text-xs flex flex-wrap justify-center gap-1">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="px-2 py-0.5 bg-white rounded-md font-medium"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
