"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import PurposePracticeSection from "@/components/sections/PurposePracticeSection";
import CreativeProcessSection from "@/components/sections/CreativeProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import ArtisticPhilosophySection from "@/components/sections/ArtisticPhilosophySection";
import ProjectsPortfolioSection from "@/components/sections/ProjectsPortfolioSection";
import FounderSection from "@/components/sections/FounderSection";
import FooterSection from "@/components/sections/FooterSection";

function SectionDivider() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      className="section-divider origin-center"
    />
  );
}

export default function FilmentlemanLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white overflow-x-hidden page-reveal">
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <VisionSection />
      <SectionDivider />
      <PurposePracticeSection />
      <SectionDivider />
      <CreativeProcessSection />
      <SectionDivider />
      <ArtisticPhilosophySection />
      <SectionDivider />
      <ProjectsPortfolioSection />
      <SectionDivider />
      <FounderSection />
      <FooterSection />
      <BackToTop />
    </div>
  );
}
