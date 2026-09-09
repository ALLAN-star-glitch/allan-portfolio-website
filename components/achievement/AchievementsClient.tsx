"use client";

import { motion, Variants } from "framer-motion";
import { 
  FaTrophy, 
  FaAward, 
  FaCertificate, 
  FaMedal,
  FaStar,
  FaUserGraduate,
  FaBriefcase,
  FaCode,
  FaRocket,
  FaCrown,
  FaBuilding,
  FaUsers
} from "react-icons/fa";
import { MdVerified, MdEmojiEvents } from "react-icons/md";
import { GiBrain, } from "react-icons/gi";

export default function AchievementsClient() {
  const achievements = {
    awards: [
      {
        id: 1,
        title: "Best Creative and Innovator Award",
        organization: "Equity Bank Limited",
        year: "2025",
        description: "Recognized for outstanding creativity and innovation in test automation and quality assurance, delivering cutting-edge solutions that transformed banking operations and improved efficiency.",
        icon: <FaCrown className="w-6 h-6 text-yellow-400" />,
        featured: true,
      },
      {
        id: 2,
        title: "Excellence in Quality Assurance",
        organization: "Equity Bank Limited",
        year: "2025",
        description: "Awarded for exceptional contributions to QA automation, reducing regression testing time by 25% and ensuring high-quality delivery across multiple banking platforms.",
        icon: <FaMedal className="w-6 h-6 text-blue-400" />,
      },
      {
        id: 3,
        title: "Outstanding Full Stack Development",
        organization: "E & M Tech House",
        year: "2024",
        description: "Recognized for exceptional full-stack development contributions, delivering high-quality applications with innovative solutions.",
        icon: <FaCode className="w-6 h-6 text-cyan-400" />,
      },
    ],
    certifications: [
      {
        id: 1,
        title: "Certified Full Stack Developer",
        organization: "Africana College of Professionals",
        year: "2024",
        description: "Comprehensive training in modern full-stack development technologies including React, Node.js, and cloud deployment.",
        icon: <FaCertificate className="w-6 h-6 text-purple-400" />,
      },
      {
        id: 2,
        title: "Google Android Development Certification",
        organization: "Google Developer Training",
        year: "2024",
        description: "Professional certification in Android app development with Kotlin and Jetpack Compose.",
        icon: <FaCertificate className="w-6 h-6 text-green-400" />,
      },
      {
        id: 3,
        title: "QA Automation Engineering",
        organization: "Equity Bank / Internal Training",
        year: "2025",
        description: "Specialized training in test automation frameworks including Selenium, Robot Framework, and continuous integration.",
        icon: <FaCertificate className="w-6 h-6 text-blue-400" />,
      },
    ],
    achievements: [
      {
        id: 1,
        title: "Reduced Regression Testing Time by 25%",
        organization: "Equity Bank",
        year: "2025",
        description: "Implemented automated testing across multiple omni banking platforms, significantly reducing testing time and improving deployment efficiency.",
        icon: <FaRocket className="w-6 h-6 text-cyan-400" />,
      },
      {
        id: 2,
        title: "Improved Page Load Times by 20%",
        organization: "E & M Tech House",
        year: "2024",
        description: "Engineered frontend applications using Angular and TypeScript, optimizing performance and enhancing user experience.",
        icon: <FaRocket className="w-6 h-6 text-green-400" />,
      },
      {
        id: 3,
        title: "Built Multi-Category Pan-African Platform",
        organization: "PivotaConnect",
        year: "2025",
        description: "Architected and developed a unified platform connecting users to opportunities across employment, housing, and social support.",
        icon: <GiBrain className="w-6 h-6 text-purple-400" />,
      },
    ],
  };

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
    <div className="min-h-screen bg-[#0B1120] py-16 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="px-5 py-2 rounded-full bg-yellow-500/10 backdrop-blur-sm border border-yellow-500/20 text-sm font-medium text-yellow-400">
            Recognition
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Achievements & Awards
          </h1>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-yellow-500 via-orange-500 to-red-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A collection of awards, certifications, and professional achievements
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {/* Featured Award - Best Creative and Innovator Award at Equity Bank */}
          {achievements.awards.find(a => a.featured) && (
            <motion.div variants={itemVariants} className="relative">
              <div className="relative bg-gradient-to-r from-yellow-500/10 via-amber-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-8 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/5 to-orange-500/5" />
                
                {/* Animated glow */}
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
                
                <div className="relative z-10 flex flex-col md:flex-row items-center gap-6">
                  <div className="flex-shrink-0 w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border-2 border-yellow-500/30 flex items-center justify-center">
                    <FaCrown className="w-10 h-10 text-yellow-400" />
                  </div>
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-2 flex-wrap justify-center md:justify-start">
                      <span className="text-sm font-medium text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-full border border-yellow-500/20">
                        🏆 Best of 2025
                      </span>
                      <span className="text-sm font-medium text-orange-400 bg-orange-500/10 px-3 py-1 rounded-full border border-orange-500/20">
                        Featured Award
                      </span>
                      <span className="text-sm font-medium text-blue-400 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        <FaBuilding className="w-3 h-3 inline mr-1" />
                        Equity Bank
                      </span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white mt-2">
                      {achievements.awards.find(a => a.featured)?.title}
                    </h2>
                    <p className="text-gray-400 mt-1">
                      {achievements.awards.find(a => a.featured)?.organization} • {achievements.awards.find(a => a.featured)?.year}
                    </p>
                    <p className="text-gray-300 mt-2 max-w-2xl">
                      {achievements.awards.find(a => a.featured)?.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}


          {/* Key Achievements Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-3 mb-6">
              <MdEmojiEvents className="w-7 h-7 text-purple-400" />
              <h2 className="text-2xl font-semibold text-white">Key Achievements</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.achievements.map((achievement) => (
                <div
                  key={achievement.id}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/5 group"
                >
                  <div className="flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:bg-white/10 transition-colors">
                      {achievement.icon}
                    </div>
                    <h3 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{achievement.organization} • {achievement.year}</p>
                    <p className="text-gray-400 text-sm mt-2">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}