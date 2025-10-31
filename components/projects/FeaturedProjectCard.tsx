import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Project } from "@/lib/types";

interface FeaturedProjectCardProps {
  project: Project;
}

export default function FeaturedProjectCard({ project }: FeaturedProjectCardProps) {
  const { title, description, liveUrl, githubUrl, image, tags } = project;

  // Handle Strapi image path
  const imageUrl = image?.url
  ? image.url.startsWith("http")
    ? image.url
    : `${process.env.NEXT_PUBLIC_STRAPI_URL}${image.url}`
  : "/placeholder.png";


  return (
    <motion.article
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300"
    >
      <div className="h-64 w-full relative">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
          unoptimized
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-2 line-clamp-3">{description}</p>

        {tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-3 py-1 bg-blue-100 rounded-full text-blue-500"
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
