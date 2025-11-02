"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { Project } from "@/lib/types";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  const { title, modalDescription, img, videoUrl, tags, liveUrl, githubUrl, id } = project;

  const imageUrl = img?.url
    ? img.url.startsWith("http")
      ? img.url
      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${img.url}`
    : "/lowtag.jpg";

  const content: BlocksContent = Array.isArray(modalDescription) ? modalDescription : [];

  // Limit preview length for modal
  const previewContent: BlocksContent = content.slice(0, 2); // show first 2 blocks as preview

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-[90%] max-h-[90vh] flex flex-col"
          initial={{ scale: 0.9, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 30 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Media */}
          <div className="relative h-64 sm:h-80 bg-gray-100">
            {videoUrl ? (
              <video src={videoUrl} controls className="w-full h-full object-cover" />
            ) : (
              <Image src={imageUrl} alt={title} fill className="object-cover" unoptimized />
            )}

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 bg-white shadow-md rounded-full p-2 cursor-pointer transition z-10"
            >
              ✕
            </button>
          </div>

          {/* Action buttons just below media */}
          <div className="flex flex-wrap items-center gap-2 p-4 border-b border-gray-200">
            {liveUrl && (
              <Link
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-[#165dfc] text-white text-sm font-medium rounded-full hover:bg-blue-600 transition"
              >
                Live Demo
              </Link>
            )}
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1 bg-gray-100 text-gray-800 text-sm font-medium rounded-full hover:bg-gray-200 transition"
              >
                Source Code
              </Link>
            )}
            {/* Read More / Case Study button */}
            <Link
              href={`/projects/${id}`}
              className="px-3 py-1 bg-white border border-gray-200 text-sm text-gray-800 rounded-full hover:bg-gray-50 transition"
            >
              Read More →
            </Link>
          </div>

          {/* Scrollable content */}
          <div className="overflow-y-auto p-6 sm:p-8 flex-1">
            <h2 className="text-2xl font-semibold text-gray-900">{title}</h2>

            {/* Preview rich text content */}
            <div className="mt-4">
              <BlocksRenderer
                content={previewContent}
                blocks={{
                  paragraph: ({ children }) => (
                    <p className="text-gray-600 leading-relaxed mt-2">{children}</p>
                  ),
                  heading: ({ children, level }) => {
                    switch (level) {
                      case 1:
                        return <h1 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h1>;
                      case 2:
                        return <h2 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h2>;
                      case 3:
                        return <h3 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h3>;
                      case 4:
                        return <h4 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h4>;
                      case 5:
                        return <h5 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h5>;
                      case 6:
                        return <h6 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h6>;
                      default:
                        return <h1 className="font-semibold mt-4 mb-2 text-gray-900">{children}</h1>;
                    }
                  },
                  list: ({ children, format }) =>
                    format === "ordered" ? (
                      <ol className="list-decimal list-inside mt-2 space-y-1">{children}</ol>
                    ) : (
                      <ul className="list-disc list-inside mt-2 space-y-1">{children}</ul>
                    ),
                  quote: ({ children }) => (
                    <blockquote className="border-l-4 border-gray-300 pl-4 italic text-gray-700 my-2">
                      {children}
                    </blockquote>
                  ),
                  code: ({ children }) => (
                    <pre className="bg-gray-100 p-2 rounded text-sm overflow-x-auto">{children}</pre>
                  ),
                  link: ({ children, url }) => (
                    <Link href={url} className="text-blue-600 underline">
                      {children}
                    </Link>
                  ),
                  image: ({ image }) => {
                    const src = image?.url?.startsWith("http")
                      ? image.url
                      : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`;
                    return (
                      <Image
                        src={src}
                        alt={image?.alternativeText || ""}
                        width={image?.width || 600}
                        height={image?.height || 400}
                        className="my-4 rounded"
                      />
                    );
                  },
                }}
                modifiers={{
                  bold: ({ children }) => <strong>{children}</strong>,
                  italic: ({ children }) => <span className="italic">{children}</span>,
                  underline: ({ children }) => <span className="underline">{children}</span>,
                  strikethrough: ({ children }) => <span className="line-through">{children}</span>,
                  code: ({ children }) => (
                    <code className="bg-gray-100 px-1 rounded text-sm">{children}</code>
                  ),
                }}
              />
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
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
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
