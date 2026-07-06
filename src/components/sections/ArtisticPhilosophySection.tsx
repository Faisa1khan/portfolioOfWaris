import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/utils/animations';

export default function ArtisticPhilosophySection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#080808] border-b border-neutral-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column - Statement */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.h2 variants={fadeUp} className="text-sm font-sans text-neutral-500 mb-8 tracking-[0.3em] uppercase">
            03
          </motion.h2>
          <motion.h3 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-10 tracking-tight">
            Artistic<br />Philosophy
          </motion.h3>
          <motion.p variants={fadeUp} className="text-xl text-neutral-300 font-light leading-relaxed mb-6">
            We are drawn toward stories that exist between certainty and ambiguity.
          </motion.p>
          <motion.p variants={fadeUp} className="text-lg text-neutral-400 font-light leading-relaxed mb-12">
            Rather than constructing narratives around heroes or villains, we seek characters who struggle with ordinary dilemmas that reveal larger emotional and social truths.
          </motion.p>
          <motion.div variants={fadeUp} className="pl-6 border-l border-neutral-700">
            <p className="text-2xl font-serif text-white italic">
              "We believe cinema should invite reflection rather than provide conclusions."
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
          <motion.h4 variants={fadeUp} className="text-xs font-sans text-neutral-500 mb-12 tracking-[0.3em] uppercase border-b border-neutral-900 pb-4">
            Our Films Are Shaped By:
          </motion.h4>
          
          <div className="flex flex-col gap-6">
            {[
              "Emotional realism",
              "Human vulnerability",
              "Quiet observation",
              "Cultural authenticity",
              "Visual restraint",
              "Cinematic patience",
              "Moral complexity"
            ].map((label, index) => (
              <motion.div 
                key={index} 
                variants={fadeUp} 
                className="flex items-baseline gap-6 group cursor-default"
              >
                <span className="text-[10px] font-mono text-neutral-600 font-bold tracking-[0.2em] group-hover:text-[#c7aa76] transition-colors">
                  0{index + 1}
                </span>
                <span className="text-2xl md:text-3xl font-serif text-neutral-400 group-hover:text-white transition-colors tracking-wide">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
