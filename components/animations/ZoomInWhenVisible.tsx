"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "./motionConfig";

interface ZoomInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number; // how much smaller it starts
}

export default function ZoomInWhenVisible({
  children,
  delay = 0,
  duration = motionConfig.transition.duration,
  scale = 0.85,
}: ZoomInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration,
        ease: motionConfig.transition.ease,
      }}
      viewport={motionConfig.viewport}
    >
      {children}
    </motion.div>
  );
}
