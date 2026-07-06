"use client";

import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, fadeUp, textReveal } from "@/utils/animations";
import { Mail, Phone, Globe } from "lucide-react";

export default function FooterSection() {
  return (
    <footer id="contact" className="bg-[#050505] text-white">
      {/* Big Contact CTA */}
      <div className="py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-900/50 flex flex-col items-center text-center bg-[#080808] relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c7aa76] opacity-[0.02] blur-[150px] pointer-events-none rounded-full" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center relative z-10"
        >
          <motion.h4
            variants={fadeUp}
            className="text-sm font-sans tracking-[0.4em] text-neutral-500 uppercase font-bold mb-6"
          >
            Get in Touch
          </motion.h4>
          <motion.h2
            variants={textReveal}
            className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 tracking-tight"
          >
            Have a story to{" "}
            <span className="text-[#c7aa76] italic">tell?</span>
          </motion.h2>
          <motion.a
            variants={fadeUp}
            href="mailto:filmentleman.films@gmail.com"
            className="group text-xl md:text-3xl font-sans font-light text-white hover:text-[#c7aa76] transition-colors duration-500 relative pb-2"
          >
            filmentleman.films@gmail.com
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#c7aa76]/30 group-hover:bg-[#c7aa76] transition-colors duration-500" />
          </motion.a>
        </motion.div>
      </div>

      {/* Main Footer Content */}
      <div className="py-24 px-6 md:px-12 lg:px-24 border-t border-neutral-900/50 relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#c7aa76] opacity-[0.03] blur-[100px] pointer-events-none rounded-t-full" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
          {/* Branding */}
          <div className="flex flex-col gap-8 max-w-md">
            <h3 className="text-3xl md:text-4xl font-serif tracking-widest uppercase">
              Filmentleman
            </h3>
            <p className="text-neutral-400 font-light leading-relaxed text-lg">
              An independent production company dedicated to authentic human stories. We believe
              cinema should invite reflection rather than provide conclusions.
            </p>
            <div className="flex items-center gap-6 mt-4 text-[#c7aa76]">
              <a
                href="mailto:filmentleman.films@gmail.com"
                className="hover:text-white transition-colors duration-400 hover:scale-110 transform"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+919992276792"
                className="hover:text-white transition-colors duration-400 hover:scale-110 transform"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/filmentleman"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-400 hover:scale-110 transform flex items-center justify-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-6 h-6"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://www.filmentleman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors duration-400 hover:scale-110 transform"
              >
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            <div className="flex flex-col gap-6">
              <span className="text-[#c7aa76] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                Collaborations
              </span>
              <div className="flex flex-col gap-4 text-neutral-400 font-light text-sm">
                {["STAGE OTT", "DW NEWS", "AL-JAZEERA", "SRS FILMS", "RANG FILM WORKS"].map(
                  (name) => (
                    <span
                      key={name}
                      className="cursor-default link-hover-underline hover:text-white transition-colors duration-400"
                    >
                      {name}
                    </span>
                  )
                )}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[#c7aa76] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                Navigation
              </span>
              <div className="flex flex-col gap-4 text-neutral-400 font-light text-sm">
                {[
                  { label: "Projects", href: "#projects" },
                  { label: "About Us", href: "#about" },
                  { label: "Creative Process", href: "#process" },
                  { label: "Philosophy", href: "#philosophy" },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="link-hover-underline hover:text-white transition-colors duration-400"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <span className="text-[#c7aa76] text-xs font-mono tracking-[0.2em] uppercase font-bold">
                Location
              </span>
              <div className="flex flex-col gap-4 text-neutral-400 font-light text-sm">
                <span>Mewat, Haryana</span>
                <span>India</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-neutral-900 bg-[#030303]">
        <div className="max-w-7xl mx-auto py-6 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center gap-4 text-neutral-600 text-xs font-mono uppercase tracking-widest">
          <span>
            &copy; {new Date().getFullYear()} Filmentleman Films. All rights reserved.
          </span>
          <span>Designed for Cinema.</span>
        </div>
      </div>
    </footer>
  );
}
