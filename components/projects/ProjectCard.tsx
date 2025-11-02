"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  onView?: (project: Project) => void; // optional click handler for modal
}

export default function ProjectCard({ project, onView }: ProjectCardProps) {
  const { title, description, img, tags, popularity } = project;

  // Handle Strapi image path
  const imageUrl = img?.url
    ? img.url.startsWith("http")
      ? img.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`
    : "/lowtag.jpg";

  // Dynamic popularity badge styles
  const getPopularityStyle = (value?: string) => {
    switch (value?.toLowerCase()) {
      case "trending":
        return "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md";
      case "popular":
        return "bg-blue-100 text-blue-600";
      case "featured":
        return "bg-green-100 text-green-600";
      case "new":
        return "bg-purple-100 text-purple-600";
      case "classic":
        return "bg-gray-200 text-gray-600";
      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.25 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 flex flex-col justify-between"
    >
      <div className="relative h-64 w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
          unoptimized
        />

        {/* Popularity Badge */}
        {popularity && (
          <span
            className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm ${getPopularityStyle(
              popularity
            )}`}
          >
            {popularity}
          </span>
        )}
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>

          <p className="text-gray-600 mt-2 line-clamp-3">
            {Array.isArray(description)
              ? description[0]?.children?.[0]?.text || ""
              : description}
          </p>

          {tags && tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* View Project Button */}
        {onView && (
          <button
            onClick={() => onView(project)}
            className="mt-6 w-full px-4 py-2 bg-[#165dfc] text-white text-sm font-medium rounded-md cursor-pointer hover:bg-blue-600 transition"
          >
            View Project
          </button>
        )}
      </div>
    </motion.article>
  );
}
