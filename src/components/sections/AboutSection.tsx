import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/utils/animations';
import { Clapperboard, Film, Video, MonitorPlay, Megaphone, Target } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="relative py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden border-y border-neutral-900/50">
      
      {/* Background Texture (Dark mode paper/grunge adaptation) */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/aged-paper.png")' }} />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 relative z-10">
        
        {/* Left Column - Visuals & Branding */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:w-1/3 flex flex-col relative"
        >
          {/* Faux Torn Edge divider - Desktop only */}
          <div className="hidden lg:block absolute -right-12 top-0 bottom-0 w-24 bg-[#050505] transform rotate-[2deg] origin-top translate-x-4 mix-blend-multiply opacity-50 blur-[2px]" />

          <motion.div variants={fadeUp} className="flex flex-col items-center mb-16">
            <div className="w-32 h-32 bg-neutral-900 rounded-full border-2 border-[#c7aa76] flex items-center justify-center shadow-[0_0_30px_rgba(199,170,118,0.15)] relative mb-6">
               <Clapperboard className="w-12 h-12 text-[#c7aa76]" />
               <div className="absolute inset-0 border border-[#c7aa76]/40 rounded-full scale-[1.1]" />
            </div>
            <h3 className="text-xl font-serif tracking-[0.3em] text-[#c7aa76] uppercase text-center">
              Filmentleman
              <span className="block text-xs font-sans tracking-[0.4em] text-neutral-500 mt-2">Films</span>
            </h3>
            <div className="w-16 h-[1px] bg-[#c7aa76]/50 mt-6" />
          </motion.div>

          {/* Polaroid Placeholders */}
          <div className="relative h-96 w-full hidden md:block">
            <motion.div variants={fadeUp} className="absolute top-0 left-0 w-48 aspect-square bg-neutral-200 p-3 pb-8 rotate-[-5deg] shadow-2xl z-10 hover:z-30 hover:rotate-0 transition-all">
              <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale" alt="Cinema" />
            </motion.div>
            <motion.div variants={fadeUp} className="absolute top-24 right-0 w-48 aspect-square bg-neutral-200 p-3 pb-8 rotate-[8deg] shadow-2xl z-20 hover:z-30 hover:rotate-0 transition-all">
              <img src="https://images.unsplash.com/photo-1542204165-65bf26472b9b?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover filter grayscale" alt="Architecture" />
            </motion.div>
            <motion.div variants={fadeUp} className="absolute bottom-0 left-12 w-56 aspect-[4/3] bg-[#f5f5dc] p-2 rotate-[-2deg] shadow-2xl z-25 hover:z-30 hover:rotate-0 transition-all border border-neutral-300">
               {/* Sketch/Notebook placeholder */}
              <img src="https://images.unsplash.com/photo-1581023791494-b1ed499748e6?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover filter contrast-125 sepia-[.3]" alt="Notebook" />
            </motion.div>
          </div>
        </motion.div>


        {/* Right Column - Text Content */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="lg:w-2/3 flex flex-col pt-8"
        >
          <motion.h4 variants={fadeUp} className="text-[#c7aa76] text-sm md:text-base font-bold tracking-[0.4em] uppercase mb-2">
            About
          </motion.h4>
          <motion.h2 variants={fadeUp} className="text-6xl md:text-8xl lg:text-[7rem] font-sans font-bold text-white tracking-tighter uppercase leading-none mb-12">
            Filmentleman
          </motion.h2>

          <div className="prose prose-invert prose-lg max-w-none text-neutral-300 font-light leading-relaxed mb-16">
            <motion.p variants={fadeUp} className="mb-6">
              <strong className="text-white font-medium">Filmentleman</strong> is a <strong className="text-[#c7aa76] font-medium">Delhi NCR and Haryana-based</strong> collective of Independent filmmakers, founded in 2021, dedicated to creating compelling stories through cinema, documentaries, and contemporary audiovisual storytelling.
            </motion.p>
            <motion.p variants={fadeUp} className="mb-6">
              Driven by the belief that <strong className="text-white font-medium">every story</strong> has the power to deepen our understanding of ourselves and the world around us, Filmentleman brings together writers, directors, producers, cinematographers, editors, and artists who share a passion for <strong className="text-[#c7aa76] font-medium">authentic, human-centered storytelling.</strong>
            </motion.p>
            <motion.p variants={fadeUp}>
              From independent films and documentaries to branded content, digital narratives, and commercial productions, we approach every project with <strong className="text-[#c7aa76] font-medium">cinematic craftsmanship, creative integrity,</strong> and a commitment to <strong className="text-[#c7aa76] font-medium">meaningful storytelling.</strong>
            </motion.p>
          </div>

        </motion.div>
      </div>

      {/* Bottom Row - Services Grid & Quote */}
      <div className="max-w-7xl mx-auto mt-24 relative z-10 border-t border-neutral-800 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 items-start">
          
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "FILMS", desc: "Crafted with passion and purpose.", icon: <Film className="w-6 h-6 text-[#c7aa76]" /> },
              { title: "DOCUMENTARIES", desc: "Real stories. Real people. Real impact.", icon: <Video className="w-6 h-6 text-[#c7aa76]" /> },
              { title: "DIGITAL NARRATIVES", desc: "Stories for the new world.", icon: <MonitorPlay className="w-6 h-6 text-[#c7aa76]" /> },
              { title: "BRANDED CONTENT", desc: "Ideas that connect and inspire.", icon: <Megaphone className="w-6 h-6 text-[#c7aa76]" /> },
              { title: "COMMERCIAL PRODUCTIONS", desc: "Creative solutions. Cinematic excellence.", icon: <Target className="w-6 h-6 text-[#c7aa76]" /> },
            ].map((service, i) => (
              <motion.div 
                key={i} 
                initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                className="flex flex-col items-center text-center gap-4"
              >
                <div className="h-12 flex items-center justify-center">
                  {service.icon}
                </div>
                <h5 className="text-xs font-bold text-white tracking-widest uppercase">{service.title}</h5>
                <p className="text-[10px] text-neutral-400 font-light leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="lg:col-span-2 md:pl-12 lg:border-l border-neutral-800 flex flex-col justify-center"
          >
             <div className="text-6xl font-serif text-[#c7aa76]/30 leading-[0.5] mb-4">“</div>
             <p className="text-xl md:text-2xl font-serif text-neutral-300 italic font-light leading-relaxed">
               We don't just make films. We tell stories that stay with you.
             </p>
          </motion.div>

        </div>
      </div>

    </section>
  );
}
