"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function Filmentleman() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      {/* Hero Section */}
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
            <button className="px-10 py-4 bg-white text-black uppercase tracking-[0.2em] text-xs font-bold hover:bg-neutral-200 transition-colors duration-500 w-full sm:w-auto">
              View our Work
            </button>
            <button className="px-10 py-4 bg-transparent text-white border border-neutral-700 uppercase tracking-[0.2em] text-xs font-bold hover:border-white hover:bg-white/5 transition-all duration-500 w-full sm:w-auto">
              Get in Touch
            </button>
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

      {/* Vision Section */}
      <section className="py-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto flex flex-col items-center text-center relative z-10 bg-[#050505]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-150px" }}
          variants={fadeUp}
          className="w-full max-w-5xl"
        >
          <h2 className="text-sm font-sans text-neutral-500 mb-8 tracking-[0.3em] uppercase">
            Our Vision
          </h2>
          <p className="text-xl md:text-3xl lg:text-4xl text-neutral-200 font-serif font-light leading-relaxed md:leading-[1.8] text-balance">
            At Filmentleman Films, we envision a world where stories deepen our understanding of
            ourselves and of one another. We believe cinema is more than entertainment. It is a reflection
            of the human condition, a bridge between lives, cultures, and generations.
            <br /><br />
            <span className="text-neutral-500">
              Our vision is to create films that endure beyond the screen, stories that provoke thought,
              awaken empathy, and leave a lasting emotional imprint. Whether through fiction, documentaries,
              or contemporary audiovisual storytelling, we strive to explore the complexities of humanity
              with honesty, authenticity, and cinematic excellence.
            </span>
          </p>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-y border-neutral-900/50">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-2 lg:order-1 lg:col-span-5 flex flex-col justify-center"
          >
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif text-white mb-10 tracking-tight">
              About Filmentleman
            </motion.h2>
            <motion.p variants={fadeUp} className="text-neutral-400 font-light leading-relaxed mb-6 text-lg">
              Filmentleman is a Delhi NCR and Haryana-based collective of Independent filmmakers, founded
              in 2021, dedicated to creating compelling stories through cinema, documentaries, and
              contemporary audiovisual storytelling.
            </motion.p>
            <motion.p variants={fadeUp} className="text-neutral-400 font-light leading-relaxed mb-12 text-lg">
              Driven by the belief that every story has the power to deepen our understanding of ourselves
              and the world around us, Filmentleman brings together writers, directors, producers,
              cinematographers, editors, and artists who share a passion for authentic, human-centered
              storytelling.
            </motion.p>
            <motion.button variants={fadeUp} className="group flex items-center gap-6 text-white uppercase tracking-[0.2em] text-xs font-bold hover:text-neutral-300 transition-colors w-max">
              <span>View All Projects</span>
              <div className="w-16 h-[1px] bg-white group-hover:w-24 group-hover:bg-neutral-300 transition-all duration-500 ease-out" />
            </motion.button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="order-1 lg:order-2 lg:col-span-7 relative aspect-[4/3] lg:aspect-[4/5] w-full overflow-hidden bg-neutral-900"
          >
            <img
              src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=2056&auto=format&fit=crop"
              alt="Behind the scenes filmmaking"
              className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-[1500ms] ease-out hover:scale-105"
            />
            {/* Inner vignette for the image */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 pointer-events-none" />
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-40 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto bg-[#050505]">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="mb-24"
        >
          <motion.h2 variants={fadeUp} className="text-sm font-sans text-neutral-500 mb-6 tracking-[0.3em] uppercase">
            Meet the Team
          </motion.h2>
          <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-white tracking-tight max-w-2xl leading-tight">
            Discover the brilliant minds behind our acclaimed production.
          </motion.h3>
        </motion.div>

        {/* Tab/Grid Layout for Team */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {/* Team Member: Waris ibn Farooque */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="group cursor-pointer flex flex-col"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden mb-8 bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                alt="Waris ibn Farooque"
                className="w-full h-full object-cover filter grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-serif text-white tracking-wide">Waris ibn Farooque</h4>
              <p className="text-neutral-500 uppercase tracking-[0.2em] text-xs font-semibold">
                Director / Founder
              </p>
            </div>
          </motion.div>

          {/* Placeholders for future team members to show the grid structure */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeUp}
            className="group cursor-pointer flex flex-col opacity-50 hover:opacity-100 transition-opacity duration-500"
          >
             <div className="relative aspect-[3/4] w-full overflow-hidden mb-8 bg-neutral-900 flex items-center justify-center border border-neutral-800">
                <span className="text-neutral-700 uppercase tracking-widest text-xs">Portrait</span>
             </div>
             <div className="flex flex-col gap-2">
              <h4 className="text-2xl font-serif text-neutral-400 tracking-wide">Join the Collective</h4>
              <p className="text-neutral-600 uppercase tracking-[0.2em] text-xs font-semibold">
                Open Positions
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-16 px-6 md:px-12 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-8 text-neutral-500 text-xs uppercase tracking-[0.2em] font-medium bg-[#030303]">
        <p className="tracking-widest">© {new Date().getFullYear()} Filmentleman.</p>
        <div className="flex gap-10">
          <a href="#" className="hover:text-white transition-colors duration-300">Instagram</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Vimeo</a>
          <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
        </div>
      </footer>
    </div>
  );
}
