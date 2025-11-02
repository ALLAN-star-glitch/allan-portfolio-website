"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import PrimaryButton from "@/components/common/PrimaryButton";
import { FiSearch } from "react-icons/fi";

// USD to KES approximate conversion rate
const USD_TO_KES = 150;

interface Resource {
  id: number;
  title: string;
  description: string;
  price: number; // USD
  image: string;
  category: string;
}

const resourcesData: Resource[] = [
  {
    id: 1,
    title: "UI Design Kit",
    description: "A premium Figma UI Kit for modern dashboards and apps.",
    price: 15,
    image: "/blog2.jpg",
    category: "Design",
  },
  {
    id: 2,
    title: "Next.js Starter Template",
    description: "Production-ready template for SaaS and portfolio projects.",
    price: 25,
    image: "/blog3.jpg",
    category: "Development",
  },
  {
    id: 3,
    title: "Automation Test Scripts",
    description: "Reusable Cypress automation test scripts.",
    price: 12,
    image: "/blog4.jpg",
    category: "QA & Automation",
  },
];

export default function DigitalResourcesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<number>(30);

  const categories = ["All", "Design", "Development", "QA & Automation"];

  const filteredResources = useMemo(() => {
    return resourcesData.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" || resource.category === selectedCategory;
      const matchesSearch = resource.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesPrice = resource.price <= maxPrice;
      return matchesCategory && matchesSearch && matchesPrice;
    });
  }, [selectedCategory, searchTerm, maxPrice]);

  return (
    <div className="min-h-screen bg-linear-to-b from-gray-50 to-gray-100 py-16 px-4 sm:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="relative mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <Image
          src="/blog1.jpg"
          alt="Pesapal Payment Banner"
          width={1600}
          height={400}
          className="object-cover w-full h-64 sm:h-80"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black/70 to-black/40 flex flex-col items-center justify-center text-center text-white px-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 tracking-tight"
          >
            Premium Digital Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg sm:text-xl md:text-2xl max-w-2xl text-gray-200"
          >
            Explore templates, design kits, and tools — securely pay via{" "}
            <span className="text-blue-400 font-semibold">Pesapal</span>.
          </motion.p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Sidebar Filters */}
        <aside className="lg:w-1/4 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 h-fit">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">
            Filters
          </h2>

          {/* Search */}
          <div className="relative mb-6">
            <FiSearch className="absolute left-3 top-3 text-gray-400 text-lg" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Category Filter */}
          <h3 className="text-sm font-semibold text-gray-600 mb-3">
            Category
          </h3>
          <ul className="space-y-3 mb-8">
            {categories.map((category) => (
              <motion.li
                key={category}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <button
                  onClick={() => setSelectedCategory(category)}
                  className={`block w-full text-left px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              </motion.li>
            ))}
          </ul>

          {/* Price Filter */}
          <h3 className="text-sm font-semibold text-gray-600 mb-3">
            Price (max: ${maxPrice})
          </h3>
          <input
            type="range"
            min={0}
            max={30}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-blue-600 cursor-pointer"
          />
        </aside>

        {/* Resource Grid */}
        <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          <AnimatePresence>
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative"
                >
                  {/* Image with price + category tags */}
                  <div className="relative">
                    <Image
                      src={resource.image}
                      alt={resource.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-56 group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Price Tag (Updated to Blue Gradient) */}
                        <div className="absolute top-4 left-4 bg-linear-to-r from-sky-500 to-blue-700 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                        ${resource.price}{" "}
                        <span className="text-xs font-normal opacity-90">
                            (KES {(resource.price * USD_TO_KES).toLocaleString()})
                        </span>
                        </div>


                    {/* Category Tag (Soft Blue Outline) */}
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md border border-blue-200 text-sm px-3 py-1 rounded-full shadow-sm text-blue-800 font-medium">
                        {resource.category}
                        </div>

                  </div>

                  {/* Details */}
                  <div className="p-6 flex flex-col h-full justify-between">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-blue-600 transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    <div className="flex items-center justify-end mt-auto">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <PrimaryButton
                          href={`/checkout/${resource.id}`}
                          label="Buy Now"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full text-center text-gray-500 py-20"
              >
                No resources found.
              </motion.div>
            )}
          </AnimatePresence>
        </section>
      </div>
    </div>
  );
}
