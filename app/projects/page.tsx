"use client";

import { useEffect, useState } from "react";
import { Project } from "@/lib/types";
import { getProjects } from "@/lib/api"; // Updated API helper for pagination
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import { motionConfig } from "@/components/animations/motionConfig";
import SlideInWhenVisible from "@/components/animations/SlideInWhenVisible";
import ZoomInWhenVisible from "@/components/animations/ZoomInWhenVisible";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Pagination state
  const [page, setPage] = useState(1);
  const [pageSize] = useState(6); // Items per page
  const [totalPages, setTotalPages] = useState(1);

  // Fetch projects with pagination
  useEffect(() => {
    async function fetchProjects() {
      setLoading(true);
      try {
        const response = await getProjects(page, pageSize);
        setProjects(response.data);
        setTotalPages(response.meta.pagination.pageCount);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, [page, pageSize]);

  return (
    <section className="pt-16 lg:pt-28 px-6 sm:px-10 lg:px-20">
      {/* Elegant Header */}
      <SlideInWhenVisible from="up" delay={0.1}>
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0f1724] tracking-tight">
            <span className="text-[#165dfc]">My</span> Projects
          </h1>

          {/* Accent Line */}
          <div className="mt-3 h-1 w-24 bg-[#165dfc] rounded-full mx-auto"></div>

          <p className="mt-4 text-gray-600 text-lg sm:text-xl">
            Explore my portfolio of projects, showcasing skills in software development, design, and quality assurance.
          </p>
        </div>
      </SlideInWhenVisible>

      {/* Loading indicator */}
      {loading && (
        <p className="text-sm text-gray-500 text-center mt-6 animate-pulse">
          Loading projects…
        </p>
      )}

      {/* Project Grid */}
      <div className="mt-12">
        {loading ? (
          // Skeleton loaders
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="rounded-xl border border-gray-200 p-4 animate-pulse shadow-sm bg-white"
              >
                <div className="h-40 bg-gray-200 rounded-lg mb-4" />
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-3" />
                <div className="h-3 bg-gray-200 rounded w-1/2 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-5/6 mb-2" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : projects.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ZoomInWhenVisible
                key={project.id}
                delay={index * 0.15}
                duration={motionConfig.transition.duration + 0.2}
              >
                <ProjectCard
                  project={project}
                  onView={(p) => setSelectedProject(p)}
                />
              </ZoomInWhenVisible>
            ))}
          </div>
        ) : (
          <ZoomInWhenVisible duration={0.8}>
            <p className="text-gray-500 text-center mt-6">
              No projects found.
            </p>
          </ZoomInWhenVisible>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex justify-center gap-3">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 rounded ${
                page === i + 1
                  ? "bg-[#165dfc] text-white"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-3 py-1 rounded bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}

      {/* Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
