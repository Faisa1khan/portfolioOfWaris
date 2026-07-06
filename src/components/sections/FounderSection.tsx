"use client";

import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { staggerContainer, fadeUp, slideRight, scaleUp } from "@/utils/animations";

export default function FounderSection() {
  const { scrollYProgress } = useScroll();
  const floatY = useTransform(scrollYProgress, [0, 1], [0, -30]);

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
            <motion.h2
              variants={slideRight}
              className="text-5xl md:text-7xl font-serif text-white tracking-tight mb-2"
            >
              WARIS
            </motion.h2>
            <motion.h3
              variants={fadeUp}
              className="text-3xl md:text-5xl font-serif text-neutral-400 tracking-wide mb-6"
            >
              IBN FAROOQUE
            </motion.h3>
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4 text-xs font-sans text-neutral-500 uppercase tracking-[0.2em] font-bold mb-12"
            >
              <span className="hover:text-[#c7aa76] transition-colors duration-400">Founder</span>
              <span className="w-1.5 h-1.5 bg-[#c7aa76]/50 rounded-full" />
              <span className="hover:text-[#c7aa76] transition-colors duration-400">Producer</span>
              <span className="w-1.5 h-1.5 bg-[#c7aa76]/50 rounded-full" />
              <span className="hover:text-[#c7aa76] transition-colors duration-400">Director</span>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="prose prose-invert prose-lg max-w-none text-neutral-400 font-light leading-relaxed"
            >
              <p>
                <strong className="text-white font-medium">Waris ibn Farooque</strong> is an
                independent filmmaker from Mewat, Haryana, India, whose cinema explores raw human
                emotions, social conflict, faith, memory, and the structures of power that shape
                everyday lives.
              </p>
              <p>
                His work is driven by characters who exist beyond conventional notions of heroes
                and villains. Instead, he is drawn to morally complex individuals navigating
                impossible choices, where love, violence, belief, and survival coexist within the
                same emotional landscape. Through these contradictions, his films examine identity,
                belonging, and the invisible forces that influence human behaviour.
              </p>
              <p>
                As both producer and director, he believes filmmaking begins with observation. His
                cinematic language is shaped by atmosphere, silence, grounded performances, and an
                immersive visual realism that allows stories to unfold with honesty and emotional
                depth.
              </p>
              <p>
                His films strive to reflect society without simplification, embracing ambiguity as
                an essential part of the human experience.
              </p>
              <p>
                Through{" "}
                <strong className="text-white font-medium">Filmentleman Films</strong>, he is
                building an independent production company dedicated to developing original voices
                from India and contributing meaningful, artistically ambitious works to contemporary
                world cinema.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleUp}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <motion.div
              style={{ y: floatY }}
              className="relative aspect-[3/4] w-full overflow-hidden bg-neutral-900 border border-neutral-800 group"
            >
              <img
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop"
                alt="Waris ibn Farooque"
                className="w-full h-full object-cover filter grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[2000ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />

              {/* Overlay text on image */}
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#c7aa76] font-medium">
                  Founder & Visionary
                </span>
              </div>
            </motion.div>
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
              <span className="w-8 h-[1px] bg-[#c7aa76]/50" />
              My Goal
            </h4>
            <p className="text-xl md:text-3xl font-serif text-white italic leading-relaxed md:leading-normal max-w-4xl">
              &ldquo;My goal is to create cinema that reflects real human behavior, even within
              myths, where characters are neither heroes nor villains but simply human, and where
              every story is told with responsibility because film shapes minds, influences society,
              and balances beauty with danger.&rdquo;
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-neutral-900">
            {[
              {
                emoji: "👤",
                title: "Human First",
                desc: "Stories about people, not ideologies.",
              },
              {
                emoji: "👁️",
                title: "Authenticity",
                desc: "Truthful storytelling rooted in lived experiences.",
              },
              {
                emoji: "⚖️",
                title: "Moral Complexity",
                desc: "Exploring the grey areas where life really exists.",
              },
              {
                emoji: "🎞️",
                title: "Cinematic Truth",
                desc: "Visuals that serve the story, not the spectacle.",
              },
            ].map((pillar, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex flex-col gap-3 group cursor-default p-4 rounded-lg hover:bg-neutral-800/20 transition-all duration-500"
              >
                <span className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-400 inline-block">
                  {pillar.emoji}
                </span>
                <h5 className="text-white text-xs uppercase tracking-widest font-bold group-hover:text-[#c7aa76] transition-colors duration-400">
                  {pillar.title}
                </h5>
                <p className="text-neutral-500 text-xs group-hover:text-neutral-300 transition-colors duration-400">
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
