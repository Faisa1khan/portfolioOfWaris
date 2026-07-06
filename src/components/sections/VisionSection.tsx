"use client";

import React from "react";
import { motion } from "framer-motion";
import { fadeUp, textReveal, drawLine, staggerContainer } from "@/utils/animations";
import { Eye } from "lucide-react";

export default function VisionSection() {
  return (
    <section
      id="vision"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 bg-[#050505]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="w-full max-w-4xl"
      >
        {/* Decorative Icon */}
        <motion.div variants={fadeUp} className="flex justify-center mb-8">
          <div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center bg-neutral-900/50">
            <Eye className="w-7 h-7 text-[#c7aa76] opacity-70" />
          </div>
        </motion.div>

        <motion.h2
          variants={textReveal}
          className="text-sm font-sans text-[#c7aa76] mb-10 tracking-[0.3em] uppercase font-medium"
        >
          Our Vision
        </motion.h2>

        {/* Animated horizontal rule */}
        <motion.div
          variants={drawLine}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c7aa76]/50 to-transparent mx-auto mb-12 origin-center"
        />

        <motion.p
          variants={textReveal}
          className="text-lg md:text-2xl lg:text-3xl text-neutral-200 font-serif font-light leading-relaxed md:leading-[1.8] text-balance mb-10"
        >
          At Filmentleman Films, we envision a world where stories deepen our understanding of
          ourselves and of one another. We believe cinema is more than entertainment. It is a
          reflection of the human condition, a bridge between lives, cultures, and generations.
        </motion.p>

        <motion.p
          variants={textReveal}
          className="text-base md:text-lg lg:text-xl text-neutral-500 font-serif font-light leading-relaxed md:leading-[1.8] text-balance"
        >
          Our vision is to create films that endure beyond the screen, stories that provoke
          thought, awaken empathy, and leave a lasting emotional imprint. Whether through fiction,
          documentaries, or contemporary audiovisual storytelling, we strive to explore the
          complexities of humanity with honesty, authenticity, and cinematic excellence.
        </motion.p>

        {/* Decorative bottom element */}
        <motion.div
          variants={drawLine}
          className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#c7aa76]/50 to-transparent mx-auto mt-12 origin-center"
        />
      </motion.div>
    </section>
  );
}
