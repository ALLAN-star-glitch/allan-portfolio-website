"use client";

import { motion } from "framer-motion";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "NestJS", "Express", "PostgreSQL", "MongoDB"],
    },
    {
      title: "Mobile Development",
      skills: ["Android (Kotlin)", "Jetpack Compose", "React Native"],
    },
    {
      title: "Blockchain & Web3",
      skills: ["Smart Contracts", "Solidity", "Ethers.js", "Web3.js"],
    },
    {
      title: "Design & Product",
      skills: ["Figma", "UI/UX", "Prototyping", "Design Systems"],
    },
    {
      title: "DevOps & Tools",
      skills: ["GitHub Actions", "Docker", "Render", "Nx Monorepo", "Kafka"],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full min-h-screen py-16 px-6 sm:px-10 lg:px-20 bg-linear-to-r from-[#f8fbff] via-[#f0f7ff] to-[#dbeaff]"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1724] mb-10 text-center">
          My <span className="text-[#2979FF]">Skills & Expertise</span>
        </h2>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="p-6 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
            >
              <h3 className="text-xl font-semibold text-[#0f1724] mb-3">
                {category.title}
              </h3>
              <ul className="space-y-2 text-gray-600">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 bg-[#2979FF] rounded-full"></span>
                    <span className="text-sm sm:text-base">{skill}</span>
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
