"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Pivota Platform",
      description:
        "A modular marketplace platform built with NestJS, Next.js, and PostgreSQL. It supports role-based access control, microservices, and premium subscription plans.",
      image: "/projects/pivota.png",
      tags: ["NestJS", "Next.js", "PostgreSQL", "Kafka", "RBAC"],
      link: "https://pivota.app",
    },
    {
      title: "Lowtag",
      description:
        "An eCommerce platform for affordable goods in Kenya — combining affiliate marketing and dropshipping. Optimized for performance and smooth product management.",
      image: "/projects/lowtag.png",
      tags: ["Next.js", "Strapi", "Tailwind", "Stripe", "Render"],
      link: "https://lowtag.com",
    },
    {
      title: "Pivota Admin Portal",
      description:
        "A robust admin dashboard for managing roles, categories, and plans — built using NestJS, React, and PostgreSQL with elegant modular architecture.",
      image: "/projects/pivota-admin.png",
      tags: ["React", "NestJS", "PostgreSQL", "RBAC"],
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built with Next.js, Tailwind CSS, and Framer Motion — focusing on minimalism, fluid motion, and clarity.",
      image: "/projects/portfolio.png",
      tags: ["Next.js", "Tailwind", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <main className="min-h-screen w-full bg-linear-to-br from-[#f8fbff] via-[#f0f6ff] to-[#dceaff] pt-20 pb-24 px-6 sm:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-[#0f1724] mb-4">
          My <span className="text-[#2979FF]">Projects</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          A curated collection of the most meaningful projects I’ve worked on —
          showcasing how I combine design thinking, technical depth, and system scalability
          to deliver real-world solutions.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02 }}
            className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col"
          >
            {/* Image */}
            <div className="relative w-full h-52 sm:h-56 lg:h-48 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
              <h3 className="text-lg font-semibold text-[#0f1724] mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4 grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-blue-50 text-[#2979FF] rounded-md text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#2979FF] hover:underline mt-auto"
              >
                View Project →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
