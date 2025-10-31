"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "./motionConfig";

interface SlideInWhenVisibleProps {
  children: ReactNode;
  from?: "left" | "right" | "up" | "down";
  delay?: number;
  duration?: number;
  distance?: number;
}

export default function SlideInWhenVisible({
  children,
  from = "up",
  delay = 0,
  duration = motionConfig.transition.duration,
  distance = 40,
}: SlideInWhenVisibleProps) {
  const axis = from === "left" || from === "right" ? "x" : "y";
  const value = from === "left" || from === "up" ? -distance : distance;

  return (
    <motion.div
      initial={{ opacity: 0, [axis]: value }}
      whileInView={{ opacity: 1, [axis]: 0 }}
      transition={{
        duration,
        delay,
        ease: motionConfig.transition.ease,
      }}
      viewport={motionConfig.viewport}
    >
      {children}
    </motion.div>
  );
}
