"use client";

import { useEffect, useState } from "react";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import { getFeaturedProjects } from "@/lib/api";
import { Project } from "@/lib/types";
import ZoomInWhenVisible from "../animations/ZoomInWhenVisible";
import { motionConfig } from "../animations/motionConfig";

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
    <section id="featured-projects" className="py-12 px-6 sm:px-10 lg:px-20">
      {/* Title */}
      <ZoomInWhenVisible delay={0.1} duration={0.9}>
        <h2 className="text-2xl font-bold mb-8 text-gray-900 text-center">
          Featured Projects
        </h2>
      </ZoomInWhenVisible>

      {/* Content */}
      {loading ? (
        <ZoomInWhenVisible duration={0.8}>
          <p className="text-gray-500 text-center">Loading projects...</p>
        </ZoomInWhenVisible>
      ) : projects.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ZoomInWhenVisible
              key={project.id}
              delay={index * 0.15}
              duration={motionConfig.transition.duration + 0.2}
            >
              <FeaturedProjectCard project={project} />
            </ZoomInWhenVisible>
          ))}
        </div>
      ) : (
        <ZoomInWhenVisible duration={0.8}>
          <p className="text-gray-500 text-center">
            No featured projects found.
          </p>
        </ZoomInWhenVisible>
      )}
    </section>
  );
}
