"use client";

import { FaReact, FaNodeJs, FaAndroid, FaDatabase, FaFigma } from "react-icons/fa";
import { GiChainsaw } from "react-icons/gi";
import SlideInWhenVisible from "../animations/SlideInWhenVisible";
import FadeInWhenVisible from "../animations/FadeInWhenVisible";
import ZoomInWhenVisible from "../animations/ZoomInWhenVisible";
import { motionConfig } from "../animations/motionConfig";
import Link from "next/link";

export default function AboutSection() {
  const skillGroups = [
    { title: "Frontend", icon: <FaReact className="text-[#2979FF] w-5 h-5" />, skills: ["React", "Next.js", "Tailwind CSS"] },
    { title: "Backend", icon: <FaNodeJs className="text-green-600 w-5 h-5" />, skills: ["Node.js", "NestJS", "Express"] },
    { title: "Mobile", icon: <FaAndroid className="text-green-500 w-5 h-5" />, skills: ["Android", "Kotlin", "Jetpack Compose"] },
    { title: "Blockchain", icon: <GiChainsaw className="text-purple-600 w-5 h-5" />, skills: ["Smart Contracts", "dApps", "Web3.js"] },
    { title: "Databases", icon: <FaDatabase className="text-indigo-600 w-5 h-5" />, skills: ["PostgreSQL", "MongoDB", "Redis"] },
    { title: "Design", icon: <FaFigma className="text-pink-500 w-5 h-5" />, skills: ["Figma", "UI/UX", "Prototyping"] },
  ];

  return (
    <section id="about" className="pt-12 lg:pt-20 px-6 sm:px-10 lg:px-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

        {/* LEFT: Description */}
        <div>
          <SlideInWhenVisible from="up" delay={0.1}>
            <h2 className="text-3xl sm:text-4xl font-semibold text-[#0f1724] tracking-tight">
              About Me
            </h2>
          </SlideInWhenVisible>

          <FadeInWhenVisible delay={0.2}>
            <p className="mt-6 text-gray-600 text-base leading-relaxed max-w-lg">
              I&apos;m a software engineer and product-minded designer who builds elegant, scalable
              applications and thoughtful user experiences. I enjoy solving complex system problems
              while keeping interfaces intuitive, polished, and delightful.
            </p>
          </FadeInWhenVisible>
        </div>

        {/* RIGHT: Skills */}
        <div>
          {/* Skills title and link */}
          <div className="flex items-center justify-between mb-4">
            <SlideInWhenVisible from="up" delay={0.1}>
              <h3 className="text-xl font-semibold text-[#0f1724] tracking-tight">Skills</h3>
            </SlideInWhenVisible>

            <FadeInWhenVisible delay={0.15}>
              <Link href="/skills" className="text-sm text-[#2979FF] hover:underline">
                View More Skills →
              </Link>
            </FadeInWhenVisible>
          </div>

          {/* Skill Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {skillGroups.map((group, index) => (
              <ZoomInWhenVisible
                key={group.title}
                delay={index * 0.12}
                duration={motionConfig.transition.duration}
              >
                <div className="p-3 rounded-lg bg-blue-50 flex flex-col items-center gap-2 transition-transform hover:scale-105 shadow-sm">
                  {/* Icon */}
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-white shadow-sm">
                    {group.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold text-[#0f1724] text-center">{group.title}</h3>

                  {/* Skills */}
                  <ul className="text-gray-600 text-xs flex flex-wrap justify-center gap-1">
                    {group.skills.map((skill) => (
                      <li key={skill} className="px-2 py-0.5 bg-white rounded-md font-medium">{skill}</li>
                    ))}
                  </ul>
                </div>
              </ZoomInWhenVisible>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
