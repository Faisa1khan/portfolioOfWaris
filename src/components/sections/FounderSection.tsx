import React from 'react';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/utils/animations';

export default function FounderSection() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="lg:col-span-7 flex flex-col order-2 lg:order-1"
          >
            <motion.h2 variants={fadeUp} className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-2">
              WARIS
            </motion.h2>
            <motion.h3 variants={fadeUp} className="text-3xl md:text-5xl font-serif text-neutral-400 tracking-wide mb-6">
              IBN FAROOQUE
            </motion.h3>
            <motion.div variants={fadeUp} className="flex items-center gap-4 text-xs font-sans text-neutral-500 uppercase tracking-[0.2em] font-bold mb-12">
              <span>Founder</span>
              <span className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>Producer</span>
              <span className="w-1 h-1 bg-neutral-700 rounded-full" />
              <span>Director</span>
            </motion.div>

            <motion.div variants={fadeUp} className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed">
              <p>
                <strong className="text-white font-medium">Waris ibn Farooque</strong> is an independent filmmaker from Mewat, Haryana, India, whose cinema explores raw human emotions, social conflict, faith, memory, and the structures of power that shape everyday lives.
              </p>
              <p>
                His work is driven by characters who exist beyond conventional notions of heroes and villains. Instead, he is drawn to morally complex individuals navigating impossible choices, where love, violence, belief, and survival coexist within the same emotional landscape. Through these contradictions, his films examine identity, belonging, and the invisible forces that influence human behaviour.
              </p>
              <p>
                As both producer and director, he believes filmmaking begins with observation. His cinematic language is shaped by atmosphere, silence, grounded performances, and an immersive visual realism that allows stories to unfold with honesty and emotional depth.
              </p>
              <p>
                His films strive to reflect society without simplification, embracing ambiguity as an essential part of the human experience.
              </p>
              <p>
                Through <strong className="text-white font-medium">Filmentleman Films</strong>, he is building an independent production company dedicated to developing original voices from India and contributing meaningful, artistically ambitious works to contemporary world cinema.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUp}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-neutral-800">
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                alt="Waris ibn Farooque"
                className="w-full h-full object-cover filter grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-[2000ms] ease-out hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </motion.div>
        </div>

        {/* Goal & Pillars */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="mt-24 pt-16 border-t border-neutral-900/50 bg-[#070707] p-8 md:p-12 rounded-xl"
        >
          <motion.div variants={fadeUp} className="mb-16">
            <h4 className="text-neutral-500 text-xs uppercase tracking-[0.3em] font-bold mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-neutral-700" />
              My Goal
            </h4>
            <p className="text-xl md:text-3xl font-serif text-white italic leading-relaxed md:leading-normal max-w-4xl">
              "My goal is to create cinema that reflects real human behavior, even within myths, where characters are neither heroes nor villains but simply human, and where every story is told with responsibility because film shapes minds, influences society, and balances beauty with danger."
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-900">
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-2xl mb-2">👤</span>
              <h5 className="text-white text-xs uppercase tracking-widest font-bold">Human First</h5>
              <p className="text-neutral-500 text-xs">Stories about people, not ideologies.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-2xl mb-2">👁️</span>
              <h5 className="text-white text-xs uppercase tracking-widest font-bold">Authenticity</h5>
              <p className="text-neutral-500 text-xs">Truthful storytelling rooted in lived experiences.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-2xl mb-2">⚖️</span>
              <h5 className="text-white text-xs uppercase tracking-widest font-bold">Moral Complexity</h5>
              <p className="text-neutral-500 text-xs">Exploring the grey areas where life really exists.</p>
            </motion.div>
            <motion.div variants={fadeUp} className="flex flex-col gap-3">
              <span className="text-2xl mb-2">🎞️</span>
              <h5 className="text-white text-xs uppercase tracking-widest font-bold">Cinematic Truth</h5>
              <p className="text-neutral-500 text-xs">Visuals that serve the story, not the spectacle.</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
