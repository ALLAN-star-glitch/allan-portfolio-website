"use client";

import Image from "next/image";
import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SlideInWhenVisible from "@/components/animations/SlideInWhenVisible";
import ZoomInWhenVisible from "@/components/animations/ZoomInWhenVisible";
import PrimaryButton from "@/components/common/PrimaryButton";
import SecondaryButton from "@/components/common/SecondaryButton";

export default function AboutPage() {
  return (
    <section className="w-full bg-linear-to-b from-[#fafcfd] via-[#f3f7fc] to-[#e3f1ff] overflow-hidden py-20">
      {/* Container */}
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20">
        {/* === Intro Section === */}
        <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* TEXT SECTION */}
          <div className="text-center lg:text-left space-y-8">
            <SlideInWhenVisible from="up" delay={0.1}>
              <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight text-[#0f1724]">
                A Little About{" "}
                <span className="text-[#2979FF]">Who I Am</span> and What Drives
                Me.
              </h1>
            </SlideInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I’m <span className="font-semibold text-[#2979FF]">Allan Mathenge</span> — 
                a <span className="font-semibold">Software Engineer</span> and{" "}
                <span className="font-semibold">Designer</span> passionate about
                building products that blend technology, creativity, and purpose.
                My work is rooted in empathy, precision, and a drive to make digital
                experiences both functional and emotionally engaging.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                I love transforming complex ideas into elegant systems. Whether I’m
                designing intuitive interfaces, crafting scalable APIs, or improving
                user journeys — I care deeply about clarity and craftsmanship.
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.4}>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <PrimaryButton label="Get in Touch" href="/contact" />
                <SecondaryButton label="View My Work" href="/projects" />
              </div>
            </FadeInWhenVisible>
          </div>

          {/* IMAGE SECTION */}
          <ZoomInWhenVisible delay={0.2}>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-100">
                <Image
                  src="/allan2profile.png"
                  alt="Allan Mathenge"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </ZoomInWhenVisible>
        </div>

        {/* === Journey Section === */}
        <div className="mt-24 space-y-8">
          <SlideInWhenVisible from="up" delay={0.1}>
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f1724] text-center lg:text-left">
              My Journey
            </h2>
          </SlideInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl mx-auto lg:mx-0">
              My journey into tech started with curiosity — a fascination with how
              lines of code could create something meaningful. That curiosity soon
              evolved into purpose: crafting systems that solve problems and designs
              that inspire trust. Over the years, I’ve worked on diverse projects
              spanning backend systems, UI design, and cross-platform apps — each
              teaching me the balance between structure and imagination.
            </p>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg max-w-4xl mx-auto lg:mx-0">
              I’m continually learning, evolving, and striving to create technology
              that’s not just efficient, but genuinely human — experiences that
              connect with people at every interaction.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* === Philosophy / Values === */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <FadeInWhenVisible delay={0.2}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
              <h3 className="text-lg font-semibold text-[#2979FF] mb-2">
                💡 Design Thinking
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I see design as storytelling — blending empathy, flow, and clarity
                into every interaction. A good interface should *feel* effortless.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.3}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
              <h3 className="text-lg font-semibold text-[#2979FF] mb-2">
                ⚙️ Engineering Precision
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I believe in writing clean, modular, and scalable code. Every
                component, function, and decision should serve both purpose and
                elegance.
              </p>
            </div>
          </FadeInWhenVisible>

          <FadeInWhenVisible delay={0.4}>
            <div className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-blue-100">
              <h3 className="text-lg font-semibold text-[#2979FF] mb-2">
                🤝 Collaboration
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                I thrive in spaces where creativity meets logic — where people come
                together to build, learn, and push boundaries.
              </p>
            </div>
          </FadeInWhenVisible>
        </div>

        {/* === Call to Action === */}
        <div className="mt-24">
          <ZoomInWhenVisible delay={0.2}>
            <div className="bg-linear-to-r from-[#2979FF] to-[#165dfc] text-white rounded-3xl py-14 px-6 text-center shadow-xl">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Let’s Build Something Great Together
              </h2>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                I’m always open to meaningful collaborations, exciting projects, and
                conversations that challenge the ordinary.
              </p>
              <PrimaryButton label="Reach Out" href="/contact" />
            </div>
          </ZoomInWhenVisible>
        </div>
      </div>
    </section>
  );
}
