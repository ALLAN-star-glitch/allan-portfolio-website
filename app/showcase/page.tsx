"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SlideInWhenVisible from "@/components/animations/SlideInWhenVisible";
import ZoomInWhenVisible from "@/components/animations/ZoomInWhenVisible";
import PrimaryButton from "@/components/common/PrimaryButton";

const showcaseItems = [
  {
    title: "Pivota Platform UI",
    category: "Product Design · SaaS",
    description:
      "A modular digital ecosystem designed for job access, service provider management, and housing discovery — built with Next.js, NestJS, and PostgreSQL.",
    image: "/showcase/pivota-ui.jpg",
    href: "/projects/pivota",
  },
  {
    title: "Lowtag eCommerce Brand",
    category: "Brand Identity · Web Design",
    description:
      "A minimalist, trust-focused dropshipping and affiliate marketplace, blending clean UI with a local-first brand experience.",
    image: "/showcase/lowtag-brand.jpg",
    href: "/projects/lowtag",
  },
  {
    title: "QA Automation Dashboard",
    category: "Automation · DevOps",
    description:
      "An advanced QA management dashboard integrating CI/CD pipelines and automated test suites for scalable reliability.",
    image: "/showcase/qa-dashboard.jpg",
    href: "/projects/qa-dashboard",
  },
  {
    title: "Gamma Portfolio Website",
    category: "Creative Direction · Web Experience",
    description:
      "An elegant, interactive personal website built for seamless motion, strong typography, and immersive design storytelling.",
    image: "/showcase/gamma-portfolio.jpg",
    href: "/projects/gamma",
  },
];

export default function ShowcasePage() {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#f9fbff] via-[#f4f8ff] to-[#eaf2ff] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <SlideInWhenVisible from="up">
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0f1724] mb-4">
            Creative Showcase
          </h2>
        </SlideInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            A collection of selected works — from design explorations to
            full-scale platform builds — blending aesthetics, usability, and
            precision engineering.
          </p>
        </FadeInWhenVisible>
      </div>

      {/* Showcase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {showcaseItems.map((item, index) => (
          <ZoomInWhenVisible key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group bg-white/80 backdrop-blur-sm border border-blue-50 rounded-3xl shadow-sm hover:shadow-md overflow-hidden transition-all duration-300"
            >
              <div className="relative w-full h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-6 flex flex-col space-y-3">
                <p className="text-xs text-gray-500">{item.category}</p>
                <h3 className="text-lg font-semibold text-[#0f1724] leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
                <div className="pt-3">
                  <PrimaryButton label="View Project" href={item.href} />
                </div>
              </div>
            </motion.div>
          </ZoomInWhenVisible>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-20">
        <FadeInWhenVisible delay={0.4}>
          <p className="text-gray-700 text-lg mb-6">
            Want to create something exceptional together?
          </p>
          <div className="flex justify-center">
            <PrimaryButton label="Start a Project" href="/contact" />
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
