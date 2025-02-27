"use client";

import Barrels from "@/assets/images/BluePrintSVG/Barrels.svg";
import beaker from "@/assets/images/BluePrintSVG/beaker.svg";
import bioReactor from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import BioHaloStep1 from "@/assets/images/BluePrintSVG/BioHalo-step1.svg";
import BioHaloStep2 from "@/assets/images/BluePrintSVG/BioHalo-step2.svg";
import BioHaloStep3 from "@/assets/images/BluePrintSVG/BioHalo-step3.svg";
import biotechScreening from "@/assets/images/BluePrintSVG/biotech-screening.svg";
import cameraLens from "@/assets/images/BluePrintSVG/Camera Lens.svg";
import dnaLogo from "@/assets/images/BluePrintSVG/dna-logo.svg";
import EColi from "@/assets/images/BluePrintSVG/E.coli.svg";
import FireSavety from "@/assets/images/BluePrintSVG/Fire Savety.svg";
import FuelCan from "@/assets/images/BluePrintSVG/Fuel Can.svg";
import Pharma from "@/assets/images/BluePrintSVG/Pharma.svg";

import MeshFabric from "@/assets/images/Mesh-fabric.png";
import BGSwirlTealPink from "@/assets/images/BGImagesTest/BGSwirlTealPink.png";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";
import EnzymeImage2 from "@/assets/images/enzymeImage2.png";
import EnzymeImage from "@/assets/images/enzymeImage.png";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";
import Droplets1 from "@/assets/images/Droplets1.jpg";
import ColorfulGradientRainbowTexture from "@/assets/images/BGImagesTest/ColorfulGradientRainbowTexture.jpeg";
import ElegantHandsWithLens from "@/assets/images/BGImagesTest/ElegantHandsWithLens.jpeg";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import RainJacketMist from "@/assets/images/BGImagesTest/RainJacketMist.jpeg";

import Image from "next/image";
import React, { useRef, Profiler, Suspense, lazy, useEffect } from "react";
import { WhatWeDoSection } from "@/components/sections2/BioHaloSections/WhatWeDoSection";
import { TransitionSectionOne } from "@/components/sections2/BioHaloSections/TransitionSectionOne";
import { FluorinatedMaterialsSection } from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
import { TransitionSectionTwo } from "@/components/sections2/BioHaloSections/TransitionSectionTwo";
import { TransitionSectionThree } from "@/components/sections2/BioHaloSections/TransitionSectionThree";
import WaterColorReveal from "@/components/WaterColorReveal";
import { StatsBox } from "@/components/ui/StatsBox";
import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSection4 } from "@/components/HeroSections/HeroSection4";
import { HeroSection5 } from "@/components/HeroSections/HeroSection5";
import { PFASSection } from "@/components/sections2/PFASSection";
import { BioHaloSection } from "@/components/sections2/BioHaloSection";
import IconCarousel from "@/components/ui/IconCarousel";
import DNAAnalysis from "@/components/ui/DNAAnalysisSVG";
import BioReactorTanks from "@/components/ui/BioReactorTanksSVG";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import BioHaloLogoNoTextSVG from "@/components/ui/BioHaloLogoNoTextSVG";
import { Leaf, Shield, Recycle, Zap, Thermometer, Globe } from "lucide-react";
import { FeatureOfPFAS } from "@/components/sections2/BioHaloSections/FeatureOfPFAS";
import { PollutionSection } from "@/components/sections2/BioHaloSections/PollutionSection";
import {
  HealthSectionImgRight,
  HealthSectionImgLeft,
} from "@/components/sections2/BioHaloSections/HealthSection";

// Lazy load components that are not immediately visible

const PlatformFeaturesSection = lazy(() =>
  import("@/components/sections2/BioHaloSections/PlatformFeaturesSection").then(
    (module) => ({
      default: module.PlatformFeaturesSection,
    })
  )
);

export default function Landing6() {
  const stats = [
    {
      number: "10000",
      prefix: ">",
      suffix: "",
      label: (
        <>
          known <span className="text-lightGrey/80">fluorinated</span> compounds
        </>
      ),
    },
    {
      number: "25",
      prefix: "+",
      suffix: "bn €",
      label: "Global Annual PFAS Market",
    },
    {
      number: "20000",
      prefix: ">",
      label: (
        <>
          <span className="text-4xl font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
            Contaminated
          </span>
          <br />
          Sites in Europe alone
        </>
      ),
    },
    {
      number: "50",
      prefix: "+",
      suffix: "bn€",
      label: "Health-Related Costs",
    },
    {
      number: "49",
      prefix: "+",
      suffix: (
        <>
          <span className="text-7xl ">k</span>
        </>
      ),
      label: (
        <>
          <span className="text-5xl uppercase font-normal">tons of </span>
          <span className="text-5xl uppercase font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
            Fluoropolymers
          </span>
          <br />
          <span className="font-normal">Are Exported from the EU Annual</span>
        </>
      ),
      note: (
        <>
          <span className="text-5xl font-normal">
            Europe is a net exporter of fluoropolymers, with 49,000 tonnes
            estimated to be produced annually in the EU28/EEA, 24,000 tonnes
            exported outside of the EU28/EEA, and around 15,000 tonnes imported.
          </span>
        </>
      ),
      link_source:
        "https://fluoropolymers.eu/wp-content/uploads/2023/12/Fluoropolymers_SEA_2022.pdf",
    },
    {
      number: "3000",
      prefix: "+",
      suffix: " years",
      label: "Maximum Environmental Persistence",
    },
    {
      number: "500",
      prefix: "+",
      suffix: "",
      label: "",
    },
    {
      number: "4.4",
      prefix: "+",
      suffix: "",
      label: (
        <>
          <span
            className="text-center text-4xl lowercase
                font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
          >
            million tons
          </span>
        </>
      ),
    },
  ];

  const sectionsInView = useRef(new Set<string>());

  const onRenderCallback = (
    id: string,
    phase: string,
    actualDuration: number,
    baseDuration: number
  ) => {
    console.log(`${id} took ${actualDuration}ms to render`);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
          if (entry.isIntersecting) {
            sectionsInView.current.add(id);
          } else {
            sectionsInView.current.delete(id);
          }
        });
      },
      {
        rootMargin: "100px",
        threshold: 0,
      }
    );

    // Observe all section elements
    document.querySelectorAll("section[id]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70 overflow-hidden">
      <div className="fixed top-[10%] right-5 w-[60px] h-[60px] bg-red-500/0 flex flex-row items-center justify-center gap-4 z-[100]">
        <div className="md:hidden flex w-[50px] h-[50px] rounded-full bg-red-500  items-center justify-center">
          SM
        </div>
        <div className="hidden md:flex lg:hidden w-[50px] h-[50px] rounded-full bg-yellow-500  items-center justify-center">
          MD
        </div>
        <div className="hidden lg:flex xl:hidden w-[50px] h-[50px] rounded-full bg-green-500  items-center justify-center">
          LG
        </div>
        <div className="hidden xl:flex 2xl:hidden w-[50px] h-[50px] rounded-full bg-blue-500  items-center justify-center">
          XL
        </div>
        <div className="hidden 2xl:flex w-[50px] h-[50px] rounded-full bg-purple-500  items-center justify-center">
          2XL
        </div>
      </div>
      <Profiler id="hero-section" onRender={onRenderCallback}>
        <HeroSection5 className="w-screen h-screen" />
      </Profiler>

      <Profiler id="fluorinated-materials" onRender={onRenderCallback}>
        <FluorinatedMaterialsSection
          stats={stats}
          className="w-full bg-black bg-gradient-to-br from-black/30 via-tealAccent/10 to-gray-800/20 relative pt-[100px]"
        />
      </Profiler>

      <section id="feature-pfas">
        <FeatureOfPFAS className="w-full h-screen" />
      </section>

      <section id="pollution" className="min-h-screen">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <PollutionSection
            stats={stats}
            className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white 
              pt-10 2xl:pt-24 px-14 relative overflow-visible z-10"
          />
        </Suspense>
      </section>

      <section id="health" className="min-h-screen">
        <Suspense
          fallback={
            <div className="h-screen flex items-center justify-center">
              Loading...
            </div>
          }
        >
          <HealthSectionImgRight
            stats={stats}
            className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white 
              pt-10 pr-32 relative overflow-hidden xl:overflow-visible"
          />
        </Suspense>
      </section>

      <WhatWeDoSection
        stats={stats}
        className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white px-14 mt-12 relative"
      />

      <section className="bg-red-500/0 w-full">
        <div className="w-full h-[700px] pt-10 overflow-hidden">
          <IconCarousel className="w-[1200px] h-[1200px] -mb-[500px] mx-auto" />
        </div>

        <PlatformFeaturesSection />

        <div className="w-full pt-10 bg-lightGrey">
          <h2 className="text-3xl font-semibold text-gray-300 uppercase relative text-center">
            Using <br />{" "}
            <span className="absolute font-black text-6xl font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent blur-[3px] opacity-55">
              biohalogenation
            </span>
            <span className="font-black font-Arial text-6xl bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent">
              biohalogenation
            </span>
            <br /> to disrupt the{" "}
            <span className="font-black font-Arial">PFAS </span> industry
          </h2>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-16 bg-lightGrey text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            We innovate, incubate, and launch new companies
          </h2>
          <p className="text-gray-700">
            Using programmed biology to shape the human future, our studio
            builds with entrepreneurs to create innovative solutions in food,
            industrials, materials, and consumer health.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member Card */}
          <div className="bg-white p-6 shadow rounded">
            {/* Replace placeholder src with real image if available */}
            <Image
              src={WomanWhiteRainJacket}
              alt="Jason Kakoyiannis"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Jason Kakoyiannis</h3>
            <p className="text-gray-600">Managing Partner</p>
          </div>
          <div className="bg-white p-6 shadow rounded">
            <Image
              src={WomanWhiteRainJacket}
              alt="Brian Brazeau"
              className="w-32 h-32 rounded-full mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold">Brian Brazeau</h3>
            <p className="text-gray-600">Partner</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white text-center px-4">
        <div className="max-w-xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-600 mb-8">
            Have an idea? We'd love to hear from you.
          </p>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-300 rounded"
            />
            <textarea
              placeholder="Your Message"
              className="w-full px-4 py-2 border border-gray-300 rounded"
              rows={4}
            />
            <button
              type="submit"
              className="px-6 py-2 bg-tealAccent text-white rounded hover:bg-teal-500"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <p className="mb-2">Let's grow a new world together.</p>
          <p className="text-sm">© 2025 Ferment. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
