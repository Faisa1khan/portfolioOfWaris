import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/utils/animations';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Cinematic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2500&auto=format&fit=crop"
          alt="Cinematic film set background"
          className="w-full h-full object-cover opacity-50 mix-blend-luminosity scale-105 animate-[pulse_20s_ease-in-out_infinite_alternate]"
        />
        {/* Heavy Vignette & Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#050505]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_120%)]" />
      </div>

      {/* Hero Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-5xl mt-16"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.h1
          variants={fadeUp}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 tracking-tighter leading-tight drop-shadow-2xl"
        >
          Discover Yourself <br className="hidden md:block" />
          <span className="italic text-neutral-400 font-light">Through Stories</span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="text-lg md:text-xl text-neutral-300 mb-10 max-w-3xl font-light leading-relaxed drop-shadow-md"
        >
          We believe every story is a journey into the human experience. Through cinema,
          documentaries, films, and contemporary audiovisual storytelling, we search for the truths
          that connect us. We're not gentlemen. We're <strong className="font-medium text-white tracking-wide">Filmentleman</strong>.
        </motion.p>

        <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto">
          <a href="#projects" className="px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-neutral-200 transition-colors duration-500 w-full sm:w-auto inline-block text-center">
            View our Work
          </a>
          <a href="#contact" className="px-10 py-4 bg-transparent text-white border border-neutral-700 uppercase tracking-[0.2em] text-xs font-bold hover:border-white hover:bg-white/5 transition-all duration-500 w-full sm:w-auto inline-block text-center">
            Get in Touch
          </a>
        </motion.div>
      </motion.div>

      {/* Cinematic Scroll Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
      >
        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-neutral-500 to-transparent opacity-50" />
      </motion.div>
    </section>
  );
}
