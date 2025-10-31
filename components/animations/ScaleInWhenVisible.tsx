"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "./motionConfig"; // import your shared config

interface ScaleInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  scale?: number;
}

export default function ScaleInWhenVisible({
  children,
  delay = 0,
  duration = 0.8,
  scale = 0.95,
}: ScaleInWhenVisibleProps) {
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
