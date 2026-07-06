import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/utils/animations';
import { Mail, Phone, Globe } from 'lucide-react';

export default function FooterSection() {
  return (
    <footer className="bg-[#050505] text-white">
      {/* Big Contact CTA */}
      <div className="py-32 px-6 md:px-12 lg:px-24 border-t border-neutral-900/50 flex flex-col items-center text-center bg-[#080808]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="flex flex-col items-center"
        >
          <motion.h4 variants={fadeUp} className="text-sm font-sans tracking-[0.4em] text-neutral-500 uppercase font-bold mb-6">
            Get in Touch
          </motion.h4>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-6xl lg:text-7xl font-serif mb-12 tracking-tight">
            Have a story to <span className="text-[#c7aa76] italic">tell?</span>
          </motion.h2>
          <motion.a 
            variants={fadeUp}
            href="mailto:filmentleman.films@gmail.com" 
            className="text-xl md:text-3xl font-sans font-light text-white hover:text-[#c7aa76] transition-colors border-b border-[#c7aa76]/30 hover:border-[#c7aa76] pb-2"
          >
            filmentleman.films@gmail.com
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
              An independent production company dedicated to authentic human stories. We believe cinema should invite reflection rather than provide conclusions.
            </p>
            <div className="flex items-center gap-6 mt-4 text-[#c7aa76]">
              <a href="mailto:filmentleman.films@gmail.com" className="hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="tel:+919992276792" className="hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/filmentleman" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </a>
              <a href="https://www.filmentleman.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                <Globe className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24 w-full lg:w-auto">
            
            <div className="flex flex-col gap-6">
              <span className="text-[#c7aa76] text-xs font-mono tracking-[0.2em] uppercase font-bold">Collaborations</span>
              <div className="flex flex-col gap-4 text-neutral-400 font-light text-sm">
                <span className="cursor-default hover:text-white transition-colors">STAGE OTT</span>
                <span className="cursor-default hover:text-white transition-colors">DW NEWS</span>
                <span className="cursor-default hover:text-white transition-colors">AL-JAZEERA</span>
                <span className="cursor-default hover:text-white transition-colors">SRS FILMS</span>
                <span className="cursor-default hover:text-white transition-colors">RANG FILM WORKS</span>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-[#c7aa76] text-xs font-mono tracking-[0.2em] uppercase font-bold">Navigation</span>
              <div className="flex flex-col gap-4 text-neutral-400 font-light text-sm">
                <a href="#" className="hover:text-white transition-colors">Projects</a>
                <a href="#" className="hover:text-white transition-colors">About Us</a>
                <a href="#" className="hover:text-white transition-colors">Creative Process</a>
                <a href="#" className="hover:text-white transition-colors">Philosophy</a>
              </div>
            </div>

            <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
              <span className="text-[#c7aa76] text-xs font-mono tracking-[0.2em] uppercase font-bold">Location</span>
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
          <span>© {new Date().getFullYear()} Filmentleman Films. All rights reserved.</span>
          <span>Designed for Cinema.</span>
        </div>
      </div>
    </footer>
  );
}
