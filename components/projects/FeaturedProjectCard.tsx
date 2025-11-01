"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const { title, description, liveUrl, githubUrl, img, tags, popularity } = project;

  // Handle Strapi image path
  const imageUrl = img?.url
    ? img.url.startsWith("http")
      ? img.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`
    : "/lowtag.jpg";

  // Dynamic popularity styles
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
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
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

        {/* Popularity badge */}
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

      <div className="p-6">
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

        <div className="mt-5 flex items-center justify-start gap-4">
          {liveUrl && (
            <Link
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#2979FF] font-medium hover:underline"
            >
              Live
            </Link>
          )}
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-500 hover:text-gray-900 hover:underline"
            >
              Source
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
