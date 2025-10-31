"use client";

import Image from "next/image";
import Link from "next/link";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import SlideInWhenVisible from "../animations/SlideInWhenVisible";
import ZoomInWhenVisible from "../animations/ZoomInWhenVisible";

export default function HeroSection() {
  return (
    <section className="w-full bg-linear-to-r from-[#fafcfd] via-[#f3f7fc] to-[#e3f1ff] overflow-hidden">
      {/* Container */}
      <div className="pt-10 pb-10 lg:pt-20 px-6 sm:px-10 lg:px-20">
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">
          {/* TEXT SECTION */}
          <div className="text-center lg:text-left space-y-8">
            {/* Heading */}
            <SlideInWhenVisible from="up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl font-bold leading-tight text-[#0f1724]">
                Hi, I’m <span className="text-[#2979FF]">Allan Mathenge</span> — I
                build sophisticated digital products that merge{" "}
                <span className="text-[#2979FF]">technology</span> and{" "}
                <span className="text-[#2979FF]">design</span>.
              </h1>
            </SlideInWhenVisible>

            {/* Subtext */}
            <FadeInWhenVisible delay={0.2}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                With expertise across backend, frontend, mobile, and blockchain
                development — and a passion for elegant design — I craft digital
                experiences that are scalable, beautiful, and human-centered.
              </p>
            </FadeInWhenVisible>

            {/* Buttons */}
            <FadeInWhenVisible delay={0.3}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <Link href="/projects">
                  <button className="px-6 py-3 bg-[#2979FF] text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    View My Work
                  </button>
                </Link>

                <a href="mailto:allan@domain.com" rel="noopener noreferrer">
                  <button className="px-6 py-3 bg-white text-gray-800 rounded-xl font-medium shadow-md hover:shadow-lg border border-gray-200 transition-all hover:-translate-y-1">
                    Let’s Collaborate
                  </button>
                </a>
              </div>
            </FadeInWhenVisible>

            {/* Skills */}
            <FadeInWhenVisible delay={0.4}>
              <div className="pt-4 text-xs sm:text-sm text-gray-500">
                <strong className="text-gray-700">Specialties:</strong>{" "}
                Node.js · NestJS · React · Next.js · Android · Blockchain ·
                PostgreSQL · Figma
              </div>
            </FadeInWhenVisible>
          </div>

          {/* IMAGE SECTION */}
          <ZoomInWhenVisible delay={0.15}>
            <div className="flex justify-center lg:justify-end">
              {/* Mobile image */}
              <div
                className="
                  relative 
                  w-32 h-32 sm:w-40 sm:h-40 
                  lg:hidden 
                  rounded-full overflow-hidden
                  border-4 border-blue-100 shadow-lg
                "
              >
                <Image
                  src="/allanprofile.jpg"
                  alt="Allan Mathenge"
                  width={160}
                  height={160}
                  className="object-cover"
                  priority
                />
              </div>

              {/* Desktop image */}
              <div
                className="
                  hidden lg:block
                  relative 
                  w-96 h-96 
                  rounded-3xl overflow-hidden 
                  shadow-2xl
                "
              >
                <Image
                  src="/allan2profile.png"
                  alt="Allan Mathenge"
                  width={400}
                  height={400}
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ZoomInWhenVisible>
        </div>
      </div>
    </section>
  );
}
