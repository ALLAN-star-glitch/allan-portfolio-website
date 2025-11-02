"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { FiSearch } from "react-icons/fi";
import { FaCalendarAlt, FaFolderOpen } from "react-icons/fa";

const posts = [
  {
    id: 1,
    title: "Designing for Emotion: The Subtle Art of UI Psychology",
    date: "October 10, 2025",
    category: "Design",
    excerpt:
      "Great design isn’t just about looks — it’s about how it makes people feel. Let’s explore how emotion drives engagement and connection.",
    image: "/blog1.jpg",
  },
  {
    id: 2,
    title: "Mastering Async Patterns in Next.js 14",
    date: "September 22, 2025",
    category: "Development",
    excerpt:
      "Learn how to structure async components in Next.js 14 and handle streaming UI for performance and user delight.",
    image: "/blog2.jpg",
  },
  {
    id: 3,
    title: "Why Minimalism Still Wins in 2025",
    date: "August 28, 2025",
    category: "UX Strategy",
    excerpt:
      "In a noisy digital world, simplicity is still power. Discover why less continues to be more in modern design philosophy.",
    image: "/blog3.jpg",
  },
];

const categories = ["All", "Design", "Development", "UX Strategy", "Productivity"];

export default function BlogArchivePage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredPosts = posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10 relative">
      {/* Main Content */}
      <motion.div
        className="lg:col-span-3 space-y-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-2 tracking-tight">
          Blog Archive
        </h1>
        <p className="text-gray-600 mb-8 text-lg">
          Dive into insights, tutorials, and design stories that inspire better digital experiences.
        </p>

        {/* Filters — Desktop Sticky, Mobile Floating */}
        {!isMobile ? (
          <div className="sticky top-20 z-20 bg-white/90 backdrop-blur-md border border-gray-100 rounded-2xl px-4 py-3 shadow-sm flex flex-wrap gap-3 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full border text-sm transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#165dfc] text-white border-[#165dfc]"
                    : "border-gray-200 text-gray-700 hover:border-[#165dfc]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        ) : null}

        {/* Posts */}
        <AnimatePresence>
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <motion.article
                key={post.id}
                className="group bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md hover:border-[#165dfc]/40 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
              >
                {/* Featured Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                </div>

                {/* Post Content */}
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-6">
                    <span className="flex items-center gap-1">
                      <FaCalendarAlt className="text-gray-400" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaFolderOpen className="text-gray-400" /> {post.category}
                    </span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-[#165dfc] transition-colors duration-200">
                      {post.title}
                    </h2>
                  </Link>
                  <p className="text-gray-600 leading-relaxed mb-5">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.id}`}
                    className="inline-flex items-center text-[#165dfc] font-medium group-hover:underline"
                  >
                    Read more →
                  </Link>
                </div>
              </motion.article>
            ))
          ) : (
            <p className="text-gray-500">No posts match your search.</p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sticky Sidebar for Desktop */}
     {/* Sidebar (Non-sticky) */}
<motion.aside
  className="hidden lg:block space-y-8"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
>
  {/* Sidebar Image */}
  <div className="relative w-full h-56 rounded-3xl overflow-hidden shadow-sm">
    <Image
      src="/blog4.jpg"
      alt="Creative Studio"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6">
      <h3 className="text-white font-semibold text-lg">The Studio Blog</h3>
      <p className="text-gray-200 text-sm">
        Exploring design, code, and the future of creative technology.
      </p>
    </div>
  </div>

  {/* Search */}
  <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Search</h3>
    <div className="flex items-center border border-gray-200 rounded-2xl px-3 py-2 focus-within:border-[#165dfc] transition">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full bg-transparent focus:outline-none text-gray-700"
      />
    </div>
  </div>

  {/* Categories */}
  <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Categories</h3>
    <ul className="space-y-2 text-gray-600">
      {categories.slice(1).map((cat) => (
        <li key={cat}>
          <button
            onClick={() => setActiveCategory(cat)}
            className={`w-full text-left hover:text-[#165dfc] transition ${
              activeCategory === cat ? "font-semibold text-[#165dfc]" : ""
            }`}
          >
            {cat}
          </button>
        </li>
      ))}
    </ul>
  </div>

  {/* Recent Posts */}
  <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-sm">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">
      Recent Posts
    </h3>
    <ul className="space-y-4 text-gray-700">
      {posts.slice(0, 3).map((post) => (
        <li key={post.id} className="flex items-center gap-3">
          <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
          <Link
            href={`/blog/${post.id}`}
            className="hover:text-[#165dfc] text-sm transition"
          >
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  </div>
</motion.aside>


      {/* Mobile Floating Filters */}
      {isMobile && (
        <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-lg border-t border-gray-200 z-50 shadow-lg py-3 px-4 flex overflow-x-auto gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full border text-sm shrink-0 transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#165dfc] text-white border-[#165dfc]"
                  : "border-gray-200 text-gray-700 hover:border-[#165dfc]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
