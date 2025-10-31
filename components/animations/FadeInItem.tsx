"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { motionConfig } from "./motionConfig";

interface FadeInItemProps {
  children: ReactNode;
  distance?: number;
  duration?: number;
}

export default function FadeInItem({
  children,
  distance = 30,
  duration = motionConfig.transition.duration,
}: FadeInItemProps) {
  const variants = {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: { duration } },
  };

  return <motion.div variants={variants}>{children}</motion.div>;
}
