"use client";

import { useEffect, useState } from "react";
import FeaturedProjectCard from "@/components/projects/FeaturedProjectCard";
import { getFeaturedProjects } from "@/lib/api";
import { Project } from "@/lib/types";
import ZoomInWhenVisible from "../animations/ZoomInWhenVisible";
import SlideInWhenVisible from "../animations/SlideInWhenVisible";
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
    <section id="featured-projects" className="pt-12 lg:pt-20 px-6 sm:px-10 lg:px-20">
      {/* Title */}
      <SlideInWhenVisible from="up" delay={0.1}>
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f1724] tracking-tight text-center">
          Featured Projects
        </h2>
      </SlideInWhenVisible>

      {/* Loading indicator (animated text under title) */}
      {loading && (
        <p className="text-sm text-gray-500 text-center mt-2 animate-pulse">
          Loading featured projects…
        </p>
      )}

      {/* Content */}
      <div className="mt-10">
        {loading ? (
          // Skeleton Cards
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-4 animate-pulse shadow-sm bg-white"
              >
                {/* Image skeleton */}
                <div className="h-40 bg-gray-200 rounded-lg mb-4" />

                {/* Text skeletons */}
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          // Actual Projects
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
          // No Projects Fallback
          <ZoomInWhenVisible duration={0.8}>
            <p className="text-gray-500 text-center">
              No featured projects found.
            </p>
          </ZoomInWhenVisible>
        )}
      </div>
    </section>
  );
}
