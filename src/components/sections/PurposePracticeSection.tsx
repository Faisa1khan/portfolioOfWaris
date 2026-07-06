"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, slideLeft, slideRight } from "@/utils/animations";
import {
  Users,
  UserMinus,
  Heart,
  Mountain,
  Fingerprint,
  Hourglass,
  Link,
  Plane,
  Home,
  Map,
  Smile,
  Film,
  Video,
  Play,
  Aperture,
  Edit3,
  Handshake,
  GraduationCap,
  Award,
} from "lucide-react";

export default function PurposePracticeSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505] relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Column 1: Why We Exist */}
          <motion.div
            variants={slideRight}
            className="gold-glow bg-[#0a0a0a] border border-neutral-900/80 rounded-2xl p-10 lg:p-12 flex flex-col shadow-2xl relative overflow-hidden group hover:border-[#c7aa76]/20 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-[0.08] transition-opacity duration-700">
              <Film className="w-32 h-32 text-white" />
            </div>

            {/* Subtle gradient glow on hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#c7aa76]/[0.03] to-transparent" />

            <h3 className="text-sm font-sans tracking-[0.3em] uppercase text-[#c7aa76] font-bold mb-8 relative z-10">
              Why We Exist
            </h3>

            <h4 className="text-3xl font-serif text-white leading-snug mb-8 relative z-10">
              We believe many important stories{" "}
              <span className="italic text-neutral-500">remain untold.</span>
            </h4>

            <ul className="flex flex-col gap-6 mt-auto relative z-10">
              {[
                { icon: <Users className="w-5 h-5" />, text: "Stories from overlooked communities." },
                { icon: <UserMinus className="w-5 h-5" />, text: "Stories about emotional silence." },
                { icon: <Heart className="w-5 h-5" />, text: "Stories about love beyond social expectations." },
                { icon: <Mountain className="w-5 h-5" />, text: "Stories where the landscape itself becomes memory." },
              ].map((item, i) => (
                <li key={i} className="flex gap-4 group/item">
                  <span className="text-neutral-600 shrink-0 mt-1 group-hover/item:text-[#c7aa76] transition-colors duration-400">{item.icon}</span>
                  <span className="text-sm text-neutral-400 font-light leading-relaxed group-hover/item:text-neutral-200 transition-colors duration-400">
                    {item.text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: Our Cinema */}
          <motion.div
            variants={fadeUp}
            className="gold-glow bg-[#0a0a0a] border border-neutral-900/80 rounded-2xl p-10 lg:p-12 flex flex-col shadow-2xl relative overflow-hidden group hover:border-[#c7aa76]/20 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-[0.08] transition-opacity duration-700">
              <Aperture className="w-32 h-32 text-white" />
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#c7aa76]/[0.03] to-transparent" />

            <h3 className="text-sm font-sans tracking-[0.3em] uppercase text-[#c7aa76] font-bold mb-8 relative z-10">
              Our Cinema Explores
            </h3>

            <div className="flex flex-wrap gap-3 relative z-10">
              {[
                { label: "Identity", icon: <Fingerprint className="w-4 h-4" /> },
                { label: "Memory", icon: <Hourglass className="w-4 h-4" /> },
                { label: "Relationships", icon: <Link className="w-4 h-4" /> },
                { label: "Migration", icon: <Plane className="w-4 h-4" /> },
                { label: "Faith", icon: <Home className="w-4 h-4" /> },
                { label: "Contemporary India", icon: <Map className="w-4 h-4" /> },
                { label: "Youth", icon: <Smile className="w-4 h-4" /> },
                { label: "Loneliness", icon: <UserMinus className="w-4 h-4" /> },
                { label: "Family", icon: <Users className="w-4 h-4" /> },
                { label: "Belonging", icon: <Home className="w-4 h-4" /> },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-800 bg-[#0c0c0c] text-neutral-400 hover:text-white hover:border-[#c7aa76]/40 hover:bg-[#c7aa76]/5 transition-all duration-400 cursor-default shimmer-hover"
                >
                  <span className="opacity-50">{item.icon}</span>
                  <span className="text-xs font-light">{item.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Column 3: Areas of Practice */}
          <motion.div
            variants={slideLeft}
            className="gold-glow bg-[#0a0a0a] border border-neutral-900/80 rounded-2xl p-10 lg:p-12 flex flex-col shadow-2xl relative overflow-hidden group hover:border-[#c7aa76]/20 transition-all duration-700"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-[0.08] transition-opacity duration-700">
              <Video className="w-32 h-32 text-white" />
            </div>

            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none bg-gradient-to-br from-[#c7aa76]/[0.03] to-transparent" />

            <h3 className="text-sm font-sans tracking-[0.3em] uppercase text-[#c7aa76] font-bold mb-8 relative z-10">
              Areas of Practice
            </h3>

            <ul className="flex flex-col gap-5 mt-auto relative z-10">
              {[
                { label: "Feature Films", icon: <Film className="w-5 h-5" /> },
                { label: "Documentary Films", icon: <Video className="w-5 h-5" /> },
                { label: "Short Films", icon: <Play className="w-5 h-5" /> },
                { label: "Hybrid Cinema", icon: <Aperture className="w-5 h-5" /> },
                { label: "Creative Development", icon: <Edit3 className="w-5 h-5" /> },
                { label: "Co-productions", icon: <Handshake className="w-5 h-5" /> },
                { label: "Film Labs", icon: <GraduationCap className="w-5 h-5" /> },
                { label: "Festival Strategy", icon: <Award className="w-5 h-5" /> },
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b border-neutral-900 pb-4 group/item cursor-default hover:pl-2 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-neutral-600 group-hover/item:text-[#c7aa76] transition-colors duration-400">
                      {item.icon}
                    </span>
                    <span className="text-sm text-neutral-300 font-light group-hover/item:text-white transition-colors duration-400">
                      {item.label}
                    </span>
                  </div>
                  <div className="w-0 group-hover/item:w-8 h-[1px] bg-[#c7aa76]/50 transition-all duration-500" />
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
