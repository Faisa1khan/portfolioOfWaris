import { Variants } from 'framer-motion';

// ═══════════════════════════════════════════════
// FADE ANIMATIONS
// ═══════════════════════════════════════════════

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1, ease: "easeOut" } },
};

export const fadeDown: Variants = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

// ═══════════════════════════════════════════════
// SLIDE ANIMATIONS
// ═══════════════════════════════════════════════

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -80 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] } },
};

// ═══════════════════════════════════════════════
// SCALE ANIMATIONS
// ═══════════════════════════════════════════════

export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] } },
};

// ═══════════════════════════════════════════════
// CONTAINER / STAGGER VARIANTS
// ═══════════════════════════════════════════════

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const staggerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

export const staggerSlow: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.2,
    },
  },
};

// ═══════════════════════════════════════════════
// TEXT REVEAL
// ═══════════════════════════════════════════════

export const textReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.25, 0.1, 0.25, 1] },
  },
};

// ═══════════════════════════════════════════════
// DRAW LINE
// ═══════════════════════════════════════════════

export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1.2, ease: [0.25, 0.1, 0.25, 1] } },
};
