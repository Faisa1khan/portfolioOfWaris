"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideRight, drawLine } from "@/utils/animations";

export default function CreativeProcessSection() {
  const steps = [
    {
      title: "RESEARCH",
      desc: "We begin with deep research—understanding people, places, culture, and the unspoken layers behind every story.",
    },
    {
      title: "WRITING",
      desc: "Ideas take shape through writing—exploring characters, conflict, and the emotional core of the story.",
    },
    {
      title: "DEVELOPMENT",
      desc: "We refine the narrative, structure, and world of the film through creative discussions and critical feedback.",
    },
    {
      title: "VISUAL EXPLORATION",
      desc: "We build the visual language—mood, tone, references, and imagery that define the film's atmosphere.",
    },
    {
      title: "CASTING",
      desc: "Finding the right faces and performers who can bring authenticity and depth to the story.",
    },
    {
      title: "PRODUCTION",
      desc: "Bringing everything to life on set with precision, collaboration, and a strong creative vision.",
    },
    {
      title: "POST-PRODUCTION",
      desc: "Shaping the story in the edit, sound, and color—enhancing emotion, rhythm, and cinematic impact.",
    },
    {
      title: "FESTIVAL STRATEGY",
      desc: "Positioning the film for the right festivals and audiences with a thoughtful and targeted approach.",
    },
    {
      title: "DISTRIBUTION",
      desc: "Connecting the film with global audiences and partners to create long-term impact and reach.",
    },
  ];

  return (
    <section id="process" className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        {/* Left Column - Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-5 flex flex-col lg:sticky lg:top-32"
        >
          <motion.h2
            variants={slideRight}
            className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter mb-8 leading-none"
          >
            CREATIVE
            <br />
            PROCESS
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-xl text-neutral-400 font-serif font-light leading-relaxed mb-12 max-w-sm"
          >
            Every project is developed collaboratively while preserving the director&apos;s{" "}
            <strong className="text-white italic">artistic voice.</strong>
          </motion.p>

          {/* Animated horizontal rule */}
          <motion.div
            variants={drawLine}
            className="w-16 h-[1px] bg-[#c7aa76]/50 mb-12 origin-left"
          />

          {/* Step count indicator */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="text-4xl font-mono text-[#c7aa76] font-light">09</span>
            <span className="text-xs text-neutral-500 uppercase tracking-[0.2em]">Steps to<br />Excellence</span>
          </motion.div>
        </motion.div>

        {/* Right Column - Timeline Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-7 relative"
        >
          {/* Vertical timeline line */}
          <div className="absolute left-[7px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-neutral-800 via-neutral-800 to-transparent hidden md:block" />

          <div className="flex flex-col gap-10 md:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex gap-6 group cursor-default relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex flex-col items-center shrink-0">
                  <div className="w-[15px] h-[15px] rounded-full border-2 border-neutral-700 bg-[#050505] group-hover:border-[#c7aa76] group-hover:bg-[#c7aa76]/20 transition-all duration-500 relative z-10" />
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2 pb-2 group-hover:translate-x-2 transition-transform duration-400">
                  <div className="flex items-center gap-4">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-neutral-600 font-bold group-hover:text-[#c7aa76] transition-colors duration-400">
                      0{index + 1}
                    </span>
                    <h4 className="text-lg font-serif text-white tracking-wide group-hover:text-[#c7aa76] transition-colors duration-400">
                      {step.title}
                    </h4>
                  </div>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-300 transition-colors duration-400 ml-[3.25rem] md:ml-0 max-w-md">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
