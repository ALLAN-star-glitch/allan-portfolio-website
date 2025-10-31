"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "./motionConfig";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
}

export default function FadeInWhenVisible({
  children,
  delay = 0,
  duration = motionConfig.transition.duration,
  y = 20,
}: FadeInWhenVisibleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
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
