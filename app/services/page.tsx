"use client";


import FadeInWhenVisible from "@/components/animations/FadeInWhenVisible";
import SlideInWhenVisible from "@/components/animations/SlideInWhenVisible";
import ZoomInWhenVisible from "@/components/animations/ZoomInWhenVisible";
import PrimaryButton from "@/components/common/PrimaryButton";
import { motion } from "framer-motion";
import { Code, Smartphone, Palette, Server } from "lucide-react";


const services = [
  {
    title: "Software Development",
    description:
      "End-to-end software development using modern frameworks — from concept to deployment. I focus on clean architecture, scalability, and performance.",
    icon: <Code className="w-10 h-10 text-[#165dfc]" />,
  },
  {
    title: "UI/UX Design",
    description:
      "Designing intuitive interfaces and delightful user experiences that balance aesthetics and usability. I combine design thinking with empathy and precision.",
    icon: <Palette className="w-10 h-10 text-[#165dfc]" />,
  },
  {
    title: "Quality Assurance & Automation",
    description:
      "Delivering high-quality solutions through meticulous testing and automation strategies that ensure reliability and long-term stability.",
    icon: <Server className="w-10 h-10 text-[#165dfc]" />,
  },
  {
    title: "Mobile Development",
    description:
      "Building responsive and native-like mobile experiences using React Native and modern cross-platform tools that bring ideas to users’ fingertips.",
    icon: <Smartphone className="w-10 h-10 text-[#165dfc]" />,
  },
];

export default function ServicesPage() {
  return (
    <section className="min-h-screen bg-linear-to-b from-[#f8fbff] via-[#f4f8ff] to-[#e9f2ff] py-20 px-6 sm:px-10 lg:px-20 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-16">
        <SlideInWhenVisible from="up">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#0f1724] mb-4">
            What I Do
          </h2>
        </SlideInWhenVisible>
        <FadeInWhenVisible delay={0.2}>
          <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
            I craft digital solutions that merge functionality with elegance —
            transforming ideas into engaging, high-performing experiences.
          </p>
        </FadeInWhenVisible>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <ZoomInWhenVisible key={index} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -5, transition: { duration: 0.3 } }}
              className="bg-white/80 backdrop-blur-sm border border-blue-50 shadow-sm hover:shadow-lg rounded-3xl p-8 flex flex-col items-center text-center space-y-5 transition-all duration-300"
            >
              <div className="p-3 bg-blue-50 rounded-2xl shadow-inner">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#0f1724]">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          </ZoomInWhenVisible>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <FadeInWhenVisible delay={0.4}>
          <p className="text-gray-700 text-lg mb-6">
            Have a project in mind? Let’s make it exceptional together.
          </p>
          <div className="flex justify-center">
            <PrimaryButton label="Let's Collaborate" href="/contact" />
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
