"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { staggerContainer, fadeUp, slideRight } from "@/utils/animations";
import {
  Clapperboard,
  Clock,
  Smile,
  Calendar,
  Tv,
  Trophy,
  Crosshair,
  Film,
  Image as ImageIcon,
} from "lucide-react";
import { projectsData } from "@/data/projectsData";

export default function ProjectsPortfolioSection() {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projectsData.length));
  };

  const hasMore = visibleCount < projectsData.length;

  return (
    <section id="projects" className="py-32 bg-[#050505]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 mb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <motion.h2
              variants={fadeUp}
              className="text-sm font-sans text-[#c7aa76] mb-4 tracking-[0.3em] uppercase font-medium"
            >
              Selected Works
            </motion.h2>
            <motion.h3
              variants={slideRight}
              className="text-4xl md:text-6xl font-serif text-white tracking-tight"
            >
              Our Projects
            </motion.h3>
          </div>
          <motion.div variants={fadeUp} className="flex items-center gap-3 text-neutral-500">
            <span className="text-3xl font-mono text-[#c7aa76] font-light">{String(projectsData.length).padStart(2, '0')}</span>
            <span className="text-xs uppercase tracking-[0.2em]">Total<br />Projects</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-32">
        <AnimatePresence mode="popLayout">
          {projectsData.slice(0, visibleCount).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative w-full overflow-hidden border-y border-neutral-900/50"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={project.bgImage}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-15 filter blur-sm scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/40" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-24 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
                {/* Left Column - Details */}
                <div className="lg:col-span-5 flex flex-col">
                  {project.label ? (
                    <h4 className="text-[#c75300] text-xs font-sans tracking-[0.3em] uppercase font-bold mb-2">
                      {project.label}:
                    </h4>
                  ) : (
                    <h4 className="text-neutral-500 text-xs font-sans tracking-[0.3em] uppercase font-bold mb-2">
                      Project Title:
                    </h4>
                  )}
                  <h3 className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tighter uppercase leading-none mb-1">
                    {project.title}
                  </h3>
                  {project.subtitle && (
                    <h5 className="text-xl md:text-2xl font-serif text-neutral-300 tracking-wide mb-8">
                      {project.subtitle}
                    </h5>
                  )}
                  {!project.subtitle && <div className="h-8" />}

                  {/* Red Brush Stroke Decoration */}
                  <div className="w-32 h-2 bg-red-800/80 rounded-full blur-[2px] mb-12 -mt-4 transform -rotate-1" />

                  {/* Meta Information List */}
                  <ul className="flex flex-col gap-5 border-y border-neutral-800/50 py-8 mb-12">
                    <li className="flex items-center gap-6">
                      <Clapperboard className="w-5 h-5 text-neutral-500 shrink-0" />
                      <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                        Category:
                      </span>
                      <span className="text-sm text-neutral-200 font-light">
                        {project.category}
                      </span>
                    </li>
                    {project.duration && (
                      <li className="flex items-center gap-6">
                        <Clock className="w-5 h-5 text-neutral-500 shrink-0" />
                        <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                          Duration:
                        </span>
                        <span className="text-sm text-neutral-200 font-light">
                          {project.duration}
                        </span>
                      </li>
                    )}
                    {project.genre && (
                      <li className="flex items-center gap-6">
                        <Smile className="w-5 h-5 text-neutral-500 shrink-0" />
                        <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                          Genre:
                        </span>
                        <span className="text-sm text-neutral-200 font-light">
                          {project.genre}
                        </span>
                      </li>
                    )}
                    <li className="flex items-center gap-6">
                      <Calendar className="w-5 h-5 text-neutral-500 shrink-0" />
                      <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                        Year:
                      </span>
                      <span className="text-sm text-neutral-200 font-light">{project.year}</span>
                    </li>
                    {project.status && (
                      <li className="flex items-center gap-6">
                        <Film className="w-5 h-5 text-neutral-500 shrink-0" />
                        <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                          Status:
                        </span>
                        <span className="text-sm text-neutral-200 font-light">
                          {project.status}
                        </span>
                      </li>
                    )}
                    {project.streaming && (
                      <li className="flex items-center gap-6">
                        <Tv className="w-5 h-5 text-neutral-500 shrink-0" />
                        <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                          Streaming On:
                        </span>
                        <span className="text-sm text-white font-bold">{project.streaming}</span>
                      </li>
                    )}
                    {project.awarded && (
                      <li className="flex items-center gap-6">
                        <Trophy className="w-5 h-5 text-[#c7aa76] shrink-0" />
                        <span className="text-xs text-neutral-400 uppercase tracking-widest font-bold w-32 shrink-0">
                          Awarded:
                        </span>
                        <span className="text-sm text-[#c7aa76] font-light leading-relaxed">
                          {project.awarded}
                        </span>
                      </li>
                    )}
                  </ul>

                  {/* Logline */}
                  <div className="flex flex-col relative pl-4 border-l-2 border-neutral-700/50">
                    <div className="flex items-center gap-3 mb-6">
                      <Crosshair className="w-5 h-5 text-neutral-500" />
                      <h4 className="text-sm font-sans tracking-[0.2em] uppercase font-bold text-neutral-300">
                        {project.title === "QAREEN" ||
                        project.title === "ONCE UPON A TIME IN COFFEE SHOP"
                          ? "PREMISE:"
                          : "LOGLINE:"}
                      </h4>
                      <div className="flex-1 h-[1px] bg-neutral-800 ml-4" />
                    </div>
                    <p className="text-neutral-400 font-serif leading-relaxed italic text-base relative z-10 whitespace-pre-wrap">
                      <span className="absolute -left-6 -top-2 text-4xl text-[#c7aa76]/20 font-serif">
                        &ldquo;
                      </span>
                      {project.logline}
                      <span className="ml-2 text-[#c7aa76]/20 font-serif">&rdquo;</span>
                    </p>
                  </div>
                </div>

                {/* Right Column - Media Grid (Placeholders — user will add later) */}
                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((shot) => (
                    <div
                      key={shot}
                      className="relative aspect-video bg-neutral-900/50 border border-neutral-800/80 flex items-center justify-center group overflow-hidden hover:border-neutral-700/80 transition-colors duration-500"
                    >
                      {/* Decorative Corner Brackets */}
                      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-neutral-600 opacity-30 group-hover:opacity-60 group-hover:border-[#c7aa76]/50 transition-all duration-500" />
                      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-neutral-600 opacity-30 group-hover:opacity-60 group-hover:border-[#c7aa76]/50 transition-all duration-500" />
                      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-neutral-600 opacity-30 group-hover:opacity-60 group-hover:border-[#c7aa76]/50 transition-all duration-500" />
                      <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-neutral-600 opacity-30 group-hover:opacity-60 group-hover:border-[#c7aa76]/50 transition-all duration-500" />

                      {/* Placeholder Text */}
                      <div className="flex flex-col items-center gap-2 relative z-10">
                        <ImageIcon className="w-6 h-6 text-neutral-700 group-hover:text-neutral-500 transition-colors duration-500" />
                        <span className="text-[10px] text-neutral-600 uppercase tracking-widest font-mono font-medium group-hover:text-neutral-400 transition-colors duration-500">
                          Coming Soon
                        </span>
                        <div className="w-8 h-[1px] bg-neutral-800 group-hover:bg-neutral-600 group-hover:w-12 transition-all duration-500" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {hasMore && (
        <div className="flex justify-center mt-32 mb-16 px-6">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleLoadMore}
            className="group flex items-center gap-6 text-[#c7aa76] hover:text-white transition-colors py-4 px-10 border border-[#c7aa76]/30 hover:border-[#c7aa76] rounded-full relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#c7aa76]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="text-sm font-sans tracking-[0.2em] uppercase font-bold relative z-10">
              Load More Projects
            </span>
            <div className="w-12 h-[1px] bg-[#c7aa76] group-hover:bg-white group-hover:w-16 transition-all duration-300 relative z-10" />
          </motion.button>
        </div>
      )}
    </section>
  );
}
