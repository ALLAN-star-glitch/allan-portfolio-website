"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import { getFeaturedProjects } from "@/lib/api";
import { Project } from "@/lib/types";


export default function FeaturedProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getFeaturedProjects();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching featured projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <section id="featured-projects" className="py-12">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-8 text-gray-900">
          Featured Projects
        </h2>

        {loading ? (
          <p className="text-gray-500">Loading projects...</p>
        ) : projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <FeaturedProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No featured projects found.</p>
        )}
      </motion.div>
    </section>
  );
}
