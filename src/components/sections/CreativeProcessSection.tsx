import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/utils/animations';

export default function CreativeProcessSection() {
  const steps = [
    { title: "RESEARCH", desc: "We begin with deep research—understanding people, places, culture, and the unspoken layers behind every story." },
    { title: "WRITING", desc: "Ideas take shape through writing—exploring characters, conflict, and the emotional core of the story." },
    { title: "DEVELOPMENT", desc: "We refine the narrative, structure, and world of the film through creative discussions and critical feedback." },
    { title: "VISUAL EXPLORATION", desc: "We build the visual language—mood, tone, references, and imagery that define the film's atmosphere." },
    { title: "CASTING", desc: "Finding the right faces and performers who can bring authenticity and depth to the story." },
    { title: "PRODUCTION", desc: "Bringing everything to life on set with precision, collaboration, and a strong creative vision." },
    { title: "POST-PRODUCTION", desc: "Shaping the story in the edit, sound, and color—enhancing emotion, rhythm, and cinematic impact." },
    { title: "FESTIVAL STRATEGY", desc: "Positioning the film for the right festivals and audiences with a thoughtful and targeted approach." },
    { title: "DISTRIBUTION", desc: "Connecting the film with global audiences and partners to create long-term impact and reach." },
  ];

  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#050505]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
        
        {/* Left Column - Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-5 flex flex-col lg:sticky lg:top-32"
        >
          <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter mb-8 leading-none">
            CREATIVE<br />PROCESS
          </motion.h2>
          
          <motion.p variants={fadeUp} className="text-xl text-neutral-400 font-serif font-light leading-relaxed mb-12 max-w-sm">
            Every project is developed collaboratively while preserving the director's <strong className="text-white italic">artistic voice.</strong>
          </motion.p>
          
          {/* Subtle minimal graphic */}
          <motion.div variants={fadeUp} className="w-16 h-[1px] bg-[#c7aa76]/50 mb-12" />
        </motion.div>

        {/* Right Column - Minimalist Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
        >
           {steps.map((step, index) => (
             <motion.div key={index} variants={fadeUp} className="flex flex-col gap-3 group cursor-default">
               <span className="text-[10px] font-sans tracking-[0.3em] text-neutral-600 font-bold group-hover:text-[#c7aa76] transition-colors">
                 0{index + 1}
               </span>
               <h4 className="text-lg font-serif text-white tracking-wide">
                 {step.title}
               </h4>
               <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                 {step.desc}
               </p>
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
