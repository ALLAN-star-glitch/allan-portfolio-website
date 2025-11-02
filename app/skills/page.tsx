"use client";

import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaCertificate,
  FaBookReader,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
} from "react-icons/si";

export default function SkillsPage() {
  const softSkills = [
    "Team Collaboration",
    "Problem Solving",
    "Adaptability",
    "Attention to Detail",
    "Communication",
    "Leadership",
  ];

  const certifications = [
    {
      title: "Meta Front-End Developer",
      issuer: "Coursera",
      year: "2024",
      icon: <FaReact className="text-sky-400 text-lg" />,
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "Amazon Web Services",
      year: "2023",
      icon: <FaCertificate className="text-yellow-500 text-lg" />,
    },
    {
      title: "Node.js & Express Mastery",
      issuer: "Udemy",
      year: "2022",
      icon: <FaNodeJs className="text-green-500 text-lg" />,
    },
    {
      title: "SQL & Databases for Developers",
      issuer: "LinkedIn Learning",
      year: "2021",
      icon: <SiPostgresql className="text-blue-600 text-lg" />,
    },
  ];

  const learning = [
    {
      topic: "Advanced Next.js Patterns",
      platform: "Frontend Masters",
      progress: 80,
    },
    {
      topic: "AI & Backend Integration",
      platform: "OpenAI + NestJS",
      progress: 65,
    },
    {
      topic: "System Design & Scalability",
      platform: "Educative.io",
      progress: 50,
    },
  ];

  return (
    <main className="min-h-screen bg-linear-to-b from-white to-blue-50 dark:from-slate-900 dark:to-slate-800 flex flex-col items-center px-6 py-20">
      {/* Title + Description */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 max-w-2xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#165dfc] mb-3">
            My Skills
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed">
            A blend of technical expertise, creative problem-solving, and a commitment to continuous learning — 
            building performant, modern, and human-centered digital experiences.
          </p>
        </motion.div>

      {/* Technical Skills */}
      <section className="max-w-6xl w-full">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Technical Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              category: "Frontend Development",
              icon: "🖥️",
              skills: [
                {
                  name: "React",
                  icon: <FaReact className="text-sky-400 text-lg" />,
                  level: 90,
                },
                {
                  name: "Next.js",
                  icon: (
                    <SiNextdotjs className="text-black dark:text-white text-lg" />
                  ),
                  level: 85,
                },
                {
                  name: "TypeScript / JavaScript",
                  icon: <SiTypescript className="text-blue-500 text-lg" />,
                  level: 85,
                },
                {
                  name: "TailwindCSS",
                  icon: <SiTailwindcss className="text-cyan-400 text-lg" />,
                  level: 90,
                },
                {
                  name: "Framer Motion / UI Animation",
                  icon: <FaReact className="text-pink-400 text-lg" />,
                  level: 75,
                },
              ],
            },
            {
              category: "Backend Development",
              icon: "⚙️",
              skills: [
                {
                  name: "Node.js / Express",
                  icon: <FaNodeJs className="text-green-500 text-lg" />,
                  level: 85,
                },
                {
                  name: "NestJS",
                  icon: <FaNodeJs className="text-red-500 text-lg" />,
                  level: 80,
                },
                {
                  name: "Python (FastAPI / Django)",
                  icon: <FaPython className="text-yellow-400 text-lg" />,
                  level: 70,
                },
                {
                  name: "REST / GraphQL APIs",
                  icon: <FaNodeJs className="text-blue-400 text-lg" />,
                  level: 75,
                },
              ],
            },
            {
              category: "Database & DevOps",
              icon: "🗄️",
              skills: [
                {
                  name: "PostgreSQL / MySQL",
                  icon: <SiPostgresql className="text-blue-600 text-lg" />,
                  level: 80,
                },
                {
                  name: "MongoDB",
                  icon: <FaNodeJs className="text-green-600 text-lg" />,
                  level: 75,
                },
                {
                  name: "Docker",
                  icon: <FaNodeJs className="text-blue-500 text-lg" />,
                  level: 70,
                },
                {
                  name: "CI/CD & Cloud Deployment",
                  icon: <FaGitAlt className="text-orange-500 text-lg" />,
                  level: 65,
                },
              ],
            },
            {
              category: "Tools & Workflow",
              icon: "🧰",
              skills: [
                {
                  name: "Git / GitHub",
                  icon: <FaGitAlt className="text-orange-500 text-lg" />,
                  level: 90,
                },
                {
                  name: "VS Code / Linux",
                  icon: <FaNodeJs className="text-blue-600 text-lg" />,
                  level: 85,
                },
                {
                  name: "Agile / Scrum",
                  icon: <FaReact className="text-[#165dfc] text-lg" />,
                  level: 80,
                },
                {
                  name: "Testing / Debugging",
                  icon: <SiTypescript className="text-blue-400 text-lg" />,
                  level: 75,
                },
              ],
            },
          ].map((group, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-gray-100 dark:border-slate-700 p-6 hover:shadow-md transition"
            >
              <div className="flex items-center mb-4">
                <div className="text-3xl mr-3">{group.icon}</div>
                <h3 className="text-lg font-semibold text-[#165dfc]">
                  {group.category}
                </h3>
              </div>

              <div className="space-y-3">
                {group.skills.map((skill, j) => (
                  <div key={j}>
                    <div className="flex justify-between items-center mb-1">
                      <div className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300">
                        {skill.icon}
                        <span>{skill.name}</span>
                      </div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 0.7, delay: j * 0.1 }}
                        className="h-2 rounded-full bg-[#165dfc]"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Soft Skills */}
      <section className="max-w-6xl w-full mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Soft Skills
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {softSkills.map((skill, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -3 }}
              transition={{ duration: 0.2 }}
              className="bg-linear-to-r from-[#165dfc]/10 to-transparent border border-[#165dfc]/20 text-gray-800 dark:text-gray-100 rounded-xl px-4 py-3 font-medium text-center shadow-sm"
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certifications & Continuous Learning */}
      <section className="max-w-6xl w-full mt-16">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-100">
          Certifications & Continuous Learning
        </h2>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-800 rounded-2xl border border-gray-100 dark:border-slate-700 shadow-sm p-5 flex items-center gap-4"
            >
              <div className="text-3xl">{cert.icon}</div>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-100">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {cert.issuer} • {cert.year}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Ongoing Learning */}
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-[#165dfc] mb-4 flex items-center gap-2">
            <FaBookReader className="text-[#165dfc]" /> Ongoing Learning
          </h3>

          <div className="space-y-4">
            {learning.map((course, i) => (
              <div key={i}>
                <div className="flex justify-between mb-1 text-sm text-gray-700 dark:text-gray-300">
                  <span>
                    {course.topic} –{" "}
                    <span className="text-gray-500">{course.platform}</span>
                  </span>
                  <span>{course.progress}%</span>
                </div>
                <div className="w-full bg-gray-100 dark:bg-slate-700 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${course.progress}%` }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                    className="h-2 rounded-full bg-[#165dfc]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
