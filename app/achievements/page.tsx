"use client";

import { motion } from "framer-motion";
import { FaAward, FaCertificate, FaTrophy } from "react-icons/fa";
import PrimaryButton from "@/components/common/PrimaryButton";

const achievements = [
  {
    id: 1,
    title: "Top Innovator Award 2024",
    organization: "Kenya Tech Summit",
    date: "October 2024",
    description:
      "Recognized for creating an impactful digital solution that enhanced job connectivity and community engagement through Pivota.",
    icon: <FaTrophy className="text-[#165dfc]" size={28} />,
  },
  {
    id: 2,
    title: "Certified Software Quality Engineer",
    organization: "International Software Testing Board (ISTQB)",
    date: "June 2023",
    description:
      "Completed advanced certification in software testing, automation, and quality management practices.",
    icon: <FaCertificate className="text-[#165dfc]" size={28} />,
  },
  {
    id: 3,
    title: "UX Design Excellence Award",
    organization: "Behance Kenya Showcase",
    date: "December 2022",
    description:
      "Awarded for outstanding UI/UX design presentation, blending minimalism with meaningful user experiences.",
    icon: <FaAward className="text-[#165dfc]" size={28} />,
  },
];

export default function AchievementsPage() {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#f9fbff] via-[#f4f8ff] to-[#eaf2ff] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0f1724] mb-4">
          Achievements & Milestones
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A reflection of dedication, passion, and the pursuit of excellence —
          each milestone represents growth, creativity, and meaningful impact.
        </p>
      </motion.div>

      {/* Achievement Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/80 backdrop-blur-sm border border-blue-50 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 p-8 text-center"
          >
            <div className="flex justify-center mb-4">{achievement.icon}</div>
            <h3 className="text-lg font-semibold text-[#0f1724] mb-2">
              {achievement.title}
            </h3>
            <p className="text-sm text-gray-500 mb-2">
              {achievement.organization} • {achievement.date}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p className="text-gray-700 text-lg mb-6">
          Always striving for growth and meaningful collaboration.
        </p>
        <div className="flex justify-center">
          <PrimaryButton label="Collaborate With Me" href="/contact" />
        </div>
      </motion.div>
    </section>
  );
}
