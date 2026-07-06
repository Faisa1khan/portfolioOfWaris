"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideRight, textReveal } from "@/utils/animations";

export default function ArtisticPhilosophySection() {
  const pillars = [
    "Emotional realism",
    "Human vulnerability",
    "Quiet observation",
    "Cultural authenticity",
    "Visual restraint",
    "Cinematic patience",
    "Moral complexity",
  ];

  return (
    <section
      id="philosophy"
      className="py-32 px-6 md:px-12 lg:px-24 bg-[#080808] border-b border-neutral-900/50"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left Column - Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2
            variants={fadeUp}
            className="text-sm font-sans text-neutral-500 mb-8 tracking-[0.3em] uppercase"
          >
            03
          </motion.h2>
          <motion.h3
            variants={slideRight}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 tracking-tight"
          >
            Artistic
            <br />
            Philosophy
          </motion.h3>
          <motion.p
            variants={textReveal}
            className="text-xl text-neutral-300 font-light leading-relaxed mb-6"
          >
            We are drawn toward stories that exist between certainty and ambiguity.
          </motion.p>
          <motion.p
            variants={textReveal}
            className="text-lg text-neutral-400 font-light leading-relaxed mb-12"
          >
            Rather than constructing narratives around heroes or villains, we seek characters who
            struggle with ordinary dilemmas that reveal larger emotional and social truths.
          </motion.p>
          <motion.div
            variants={fadeUp}
            className="pl-6 border-l-2 border-[#c7aa76]/40 relative"
          >
            <div className="absolute -left-[1px] top-0 w-[2px] h-0 bg-[#c7aa76] group-hover:h-full transition-all duration-1000" />
            <p className="text-2xl font-serif text-white italic leading-relaxed">
              &ldquo;We believe cinema should invite reflection rather than provide
              conclusions.&rdquo;
            </p>
          </motion.div>
        </motion.div>

        {/* Right Column - Minimalist Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col justify-center lg:pl-12"
        >
          <motion.h4
            variants={fadeUp}
            className="text-xs font-sans text-neutral-500 mb-12 tracking-[0.3em] uppercase border-b border-neutral-900 pb-4"
          >
            Our Films Are Shaped By:
          </motion.h4>

          <div className="flex flex-col gap-4">
            {pillars.map((label, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ x: 12 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className="flex items-center gap-6 group cursor-default py-2 border-b border-neutral-900/50 hover:border-[#c7aa76]/20 transition-colors duration-500"
              >
                <span className="text-[10px] font-mono text-neutral-700 font-bold tracking-[0.2em] group-hover:text-[#c7aa76] transition-colors duration-500 w-8">
                  0{index + 1}
                </span>
                <span className="text-xl md:text-2xl font-serif text-neutral-500 group-hover:text-white transition-colors duration-500 tracking-wide">
                  {label}
                </span>
                <div className="flex-1" />
                <div className="w-0 group-hover:w-6 h-[1px] bg-[#c7aa76] transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
