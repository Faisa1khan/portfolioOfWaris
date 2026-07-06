import React from 'react';
import { motion } from 'framer-motion';
import { fadeUp } from '@/utils/animations';

export default function VisionSection() {
  return (
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
  );
}
