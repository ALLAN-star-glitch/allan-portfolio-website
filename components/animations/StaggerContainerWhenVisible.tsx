"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "./motionConfig";

interface StaggerContainerWhenVisibleProps {
  children: ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
}

export default function StaggerContainerWhenVisible({
  children,
  delayChildren = 0.2,
  staggerChildren = 0.15,
}: StaggerContainerWhenVisibleProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={motionConfig.viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren,
            delayChildren,
            ease: motionConfig.transition.ease,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
