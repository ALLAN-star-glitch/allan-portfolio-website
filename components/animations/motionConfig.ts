// components/animations/motionConfig.ts
import { Easing } from "framer-motion";

export const defaultEase: Easing = [0.4, 0, 0.2, 1];

export const motionConfig = {
  transition: {
    duration: 0.8,
    ease: defaultEase,
  },
  viewport: {
    once: false, // trigger every time in view
    amount: 0.25, // how much needs to be visible before animating
  },
};
