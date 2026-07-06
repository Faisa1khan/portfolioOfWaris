"use client";

import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import VisionSection from "@/components/sections/VisionSection";
import PurposePracticeSection from "@/components/sections/PurposePracticeSection";
import CreativeProcessSection from "@/components/sections/CreativeProcessSection";
import AboutSection from "@/components/sections/AboutSection";
import ArtisticPhilosophySection from "@/components/sections/ArtisticPhilosophySection";
import ProjectsPortfolioSection from "@/components/sections/ProjectsPortfolioSection";
import FounderSection from "@/components/sections/FounderSection";
import FooterSection from "@/components/sections/FooterSection";

export default function FilmentlemanLanding() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <PurposePracticeSection />
      <CreativeProcessSection />
      <ArtisticPhilosophySection />
      <ProjectsPortfolioSection />
      <FounderSection />
      <FooterSection />
    </div>
  );
}
