"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Project } from "@/lib/types";
import { getProjects } from "@/lib/api";
import ProjectDetailModal from "@/components/projects/ProjectDetailModal";
import { motionConfig } from "@/components/animations/motionConfig";
import SlideInWhenVisible from "@/components/animations/SlideInWhenVisible";
import ZoomInWhenVisible from "@/components/animations/ZoomInWhenVisible";
import ProjectCard from "@/components/projects/ProjectCard";

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [page, setPage] = useState(1);
  const [pageSize] = useState(6);
  const [totalPages, setTotalPages] = useState(1);

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
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
            <span className="text-[#165dfc]">My</span> Projects
          </h1>

          {/* Accent Line */}
          <div className="mt-3 h-1 w-24 bg-[#165dfc] rounded-full mx-auto"></div>

          <p className="mt-4 text-gray-600 text-lg sm:text-xl">
            Explore my portfolio of projects, showcasing skills in software development, design, and quality assurance.
          </p>

          {/* Call-to-action button */}
          <Link
            href="/contact"
            className="mt-6 inline-block px-8 py-3 bg-[#165dfc] text-white font-semibold rounded-2xl shadow-lg hover:bg-blue-600 transition-all duration-300 ease-in-out"
          >
            Let&apos;s Connect
          </Link>
        </div>
      </SlideInWhenVisible>

      {/* Project Grid */}
      <div className="mt-12">
        {loading ? (
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
            <p className="text-gray-500 text-center mt-6">No projects found.</p>
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
                  ? "bg-[#165dfc] text-white shadow-md"
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

      {/* Banner CTA */}
      <div className="mt-16 bg-[#165dfc] rounded-2xl p-12 text-center text-white shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4">
          Interested in collaborating or hiring me?
        </h2>
        <p className="mb-6 text-lg sm:text-xl">
          Let&apos;s build something amazing together!
        </p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-[#165dfc] font-semibold rounded-2xl shadow-md hover:bg-gray-100 transition-all duration-300 ease-in-out"
        >
          Get in Touch
        </Link>
      </div>

      {/* Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
