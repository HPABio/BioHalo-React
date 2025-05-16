"use client";

import { ChromaticText } from "@/components/testbed/ChromaticText";
import { HaloComponent } from "@/components/testbed/HaloComponent";
import { HaloComponent2 } from "@/components/testbed/HaloComponent";
import { HaloComponent3 } from "@/components/testbed/HaloComponent";
import { BioHaloSection } from "@/components/testbed/BioHaloSection";
import { BlueprintSection } from "@/components/testbed/BlueprintSection";
import HeroSectionFloatingPlasmids from "../HeroSections/HeroSectionFloatingPlasmids";
import PfasMolecule from "@/components/ui/PfasMolecule";
import ClassicAlternatingLandingPage from "./ClassicAlternatingLandingPage";
import RotatingMaterials from "@/components/ui/RotatingMaterials";
import { motion } from "framer-motion";
import WaterColorReveal from "@/components/WaterColorReveal";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import { useRef } from "react";
import Image from "next/image";
import { FluorinatedMaterialsSection } from "../sections2/BioHaloSections/FluorinatedMaterialsSection";
import { BentoFourBoxSectionR } from "../sections2/BentoFourBoxSectionR";
import { BentoFourBoxSectionL } from "../sections2/BentoFourBoxSectionL";


export default function ComponentTestbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <main className="relative min-h-screen w-screen bg-lightGrey overflow-hidden">
      
      
      
      <section className="w-screen h-screen flex items-center justify-center bg-red-500/0 mx-auto px-14">
        <div className="w-full h-[600px] flex items-center justify-center bg-blue-500/0">
                  <div id="BentoFourBoxSectionR Text"
                  className="w-full h-[600px] flex items-center justify-center bg-blue-500/0">
                    <div  className="w-full h-full flex flex-stretch items-center justify-center bg-blue-500"></div>
                  </div>
        </div>
      </section>


      <section className="w-screen h-screen flex items-center justify-center bg-red-500/0">
        <div className="w-full h-[600px] flex items-center justify-center bg-blue-500/0">
                  <BentoFourBoxSectionR />
                  <div id="BentoFourBoxSectionL Text"
                  className="w-full h-[600px] flex items-center justify-center bg-blue-500/0">
                  </div>
        </div>
      </section>



      <section className="w-screen h-screen flex items-center justify-center bg-red-500/0">
        <div className="w-[600px] h-[600px] flex items-center justify-center bg-blue-500/0">
          <RotatingMaterials />
        </div>
      </section>
      
      
      <section className="w-screen h-[300vh] bg-red-500/0">
             <FluorinatedMaterialsSection stats={stats} />
      </section>
      
      
      <section
        ref={sectionRef}
        className="w-screen h-screen flex items-center justify-center bg-red-500/50"
      >
        <div
          className="w-[600px] h-[600px] flex items-center justify-center bg-blue-500/60"
          ref={containerRef}
        >
          <WaterColorReveal
            width={600}
            height={600}
            className="bg-yellow-500/60"
          >
            <div className="w-full h-full flex items-center justify-center bg-white">
              <Image
                src={WomanWhiteRainJacket.src}
                alt="Woman in white rain jacket"
                width={600}
                height={600}
                className="object-cover"
              />
            </div>
          </WaterColorReveal>
        </div>
      </section>

      <div className="w-screen h-screen flex items-center justify-center">
        {/* <HaloComponent /> */}
        {/* <HaloComponent2 /> */}
        {/* <HaloComponent3 className="blur-xl" count={35} baseDuration={34} radius={350} /> */}
      </div>

      {/* <HeroSectionFloatingPlasmids className="z-10 flex flex-col items-center justify-center" />
      <div className="one absolute top-0 left-0 w-full h-full bg-green-500/0">
        <div className="two flex flex-col w-full h-full items-center justify-center">
          <div className="three relative h-[1080px] w-[1920px] bg-yellow-500/0">
            <div className="four absolute top-0 left-0 w-full h-full bg-red-500/0 blur-md z-20">
              <PfasMolecule className="absolute top-0 left-[50%] w-[150vh] bg-yellow-500/0 opacity-40 rotate-[70deg]" />
              <PfasMolecule className="absolute top-0 right-50%] w-[150vh] bg-yellow-500/0 opacity-40 rotate-[70deg]" />
            </div>
          </div>
        </div>
      </div>

      <section className="w-screen h-[100vh] bg-blue-500/50">
        <div className="w-full h-full bg-black flex items-center justify-center mix-blend-normal">
          <ChromaticText text="Chromatic Aberration" />
        </div>
      </section>

      <BioHaloSection />
      <section className="min-w-screen min-h-screen w-full h-full bg-green-500/10 flex flex-col items-center justify-center">
        <ClassicAlternatingLandingPage />
      </section>

      <BlueprintSection /> */}
    </main>
  );
}
