"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerSlow, textReveal } from "@/utils/animations";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image with Parallax */}
      <motion.div className="absolute inset-0 z-0" style={{ y: bgY }}>
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2500&auto=format&fit=crop"
          alt="Cinematic film set background"
          className="w-full h-full object-cover opacity-40 mix-blend-luminosity scale-110"
        />
        {/* Heavy Vignette & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)]" />
      </motion.div>

      {/* Cinematic Letterbox Bars */}
      <motion.div
        className="letterbox-bar letterbox-top"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 2 }}
      />
      <motion.div
        className="letterbox-bar letterbox-bottom"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ delay: 2, duration: 2 }}
      />

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl"
        style={{ opacity }}
        initial="hidden"
        animate="visible"
        variants={staggerSlow}
      >
        {/* Small badge */}
        <motion.div
          variants={textReveal}
          className="mb-8 px-6 py-2 rounded-full border border-neutral-700/50 bg-white/[0.03] backdrop-blur-sm"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#c7aa76] font-medium">
            Independent Film Collective
          </span>
        </motion.div>

        <motion.h1
          variants={textReveal}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-white mb-6 tracking-tighter leading-[1.1] drop-shadow-2xl"
        >
          Discover Yourself <br className="hidden md:block" />
          <span className="italic text-neutral-400 font-light">Through Stories</span>
        </motion.h1>

        <motion.p
          variants={textReveal}
          className="text-base md:text-lg text-neutral-400 mb-12 max-w-2xl font-light leading-relaxed"
        >
          We believe every story is a journey into the human experience. Through cinema,
          documentaries, films, and contemporary audiovisual storytelling, we search for the truths
          that connect us. We&apos;re not gentlemen. We&apos;re{" "}
          <strong className="font-medium text-white tracking-wide">Filmentleman</strong>.
        </motion.p>

        <motion.div variants={textReveal} className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a
            href="#projects"
            className="group relative px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-bold overflow-hidden w-full sm:w-auto inline-block text-center transition-all duration-500"
          >
            <span className="relative z-10">View our Work</span>
            <div className="absolute inset-0 bg-[#c7aa76] transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </a>
          <a
            href="#contact"
            className="group px-10 py-4 bg-transparent text-white border border-neutral-700 uppercase tracking-[0.2em] text-xs font-bold hover:border-[#c7aa76] hover:text-[#c7aa76] transition-all duration-500 w-full sm:w-auto inline-block text-center"
          >
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1.5 }}
        style={{ opacity }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">Scroll</span>
        <ChevronDown className="w-4 h-4 text-neutral-500 scroll-bounce" />
      </motion.div>
    </section>
  );
}
