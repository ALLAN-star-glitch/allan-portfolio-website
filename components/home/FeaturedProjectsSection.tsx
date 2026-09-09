"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

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

export default function FeaturedProjectsSection() {
  const featuredProjects = [
    {
      id: 1,
      title: "PivotaConnect Platform",
      description:
        "A unified pan-African digital marketplace API connecting users to employment, housing, and social support opportunities. Built with microservices architecture serving both formal and informal economies.",
      tech: ["NestJS", "GraphQL", "gRPC", "PostgreSQL", "Redis", "Kafka"],
      github: "https://github.com/ALLAN-star-glitch/pivota-api",
      featured: true,
    },
    {
      id: 2,
      title: "PivotaConnect Web",
      description:
        "Monorepo frontend for the PivotaConnect platform using Next.js and TurboRepo. Features a microservices backend with gRPC, Kafka, and RabbitMQ for seamless communication.",
      tech: ["Next.js", "TurboRepo", "NestJS", "gRPC", "Kafka", "Docker"],
      github: "https://github.com/ALLAN-star-glitch/pivota-frontend-turbo-repo.git",
      featured: true,
    },
    {
      id: 3,
      title: "PivotaConnect Android",
      description:
        "Native Android app built with Jetpack Compose and Kotlin. Follows Clean Architecture with MVVM pattern, featuring offline support and M-PESA integration.",
      tech: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Ktor", "Coil"],
      github: "https://github.com/ALLAN-star-glitch/AndroidPivotaApp",
      featured: true,
    },
    {
      id: 4,
      title: "Nuruvent API",
      description:
        "Training and professional development event platform backend built with Go. Uses Hexagonal Architecture with Fiber framework, Casbin RBAC, and Asynq for background jobs.",
      tech: ["Go", "Fiber", "PostgreSQL", "Redis", "Casbin", "Hexagonal Architecture"],
      github: "https://github.com/ALLAN-star-glitch/nuruvent_backend",
      live: "https://nuruvent.com",
      featured: true,
    },
    {
      id: 5,
      title: "Nuruvent Web",
      description:
        "Event management and training discovery platform frontend. Enables trainers to create events, manage registrations, and issue QR-verified certificates.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
      github: "https://github.com/ALLAN-star-glitch/nuruvent",
      live: "https://nuruvent.com",
      featured: true,
    },
    {
      id: 6,
      title: "Flownatty API",
      description:
        "E-commerce marketplace backend built with Go and Gin framework. Features JWT authentication, M-Pesa Daraja API integration, and PostgreSQL with GORM.",
      tech: ["Go", "Gin", "PostgreSQL", "GORM", "JWT", "M-Pesa"],
      github: "https://github.com/ALLAN-star-glitch/flownatty-backend",
      featured: true,
    },
  ];

  return (
    <section id="projects" className="relative py-16 lg:py-24 px-6 sm:px-10 lg:px-20 bg-gradient-to-b from-[#0B1120] via-[#0F172A] to-[#0B1120]">
      {/* Background decorations */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-2xl" />
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#4f4f4f_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="px-5 py-2 rounded-full bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-sm font-medium text-blue-400">
            My Work
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full mx-auto" />
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            A selection of projects demonstrating my expertise in full-stack development, mobile apps, and cloud architecture
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/5 hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Featured Badge */}
                {project.featured && (
                  <span className="inline-block px-2 py-0.5 text-xs font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20 mb-3">
                    Featured
                  </span>
                )}

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-white/5 rounded-md border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-white/5 rounded-md border border-white/10">
                      +{project.tech.length - 4}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4 pt-2 border-t border-white/5">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Code
                  </Link>
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-3.5 h-3.5" />
                      Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-medium text-base shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300"
          >
            View All Projects
            <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}