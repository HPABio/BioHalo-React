"use client";

import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import Image from "next/image";
import React, { Suspense, memo, useRef } from "react";
import dynamic from "next/dynamic";
import {
  HeroSection1,
  HeroSection2,
  HeroSection3,
  HeroSection4,
  HeroSection5,
} from "@/components/HeroSections/HeroSections";
import {
  FluorinatedMaterialsSection,
  FluorinatedMaterialsSectionV2,
} from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
import { FluorinatedMaterialsSection2 } from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection2";
import {
  PollutionSection,
  PollutionSectionBACKUP,
} from "@/components/sections2/BioHaloSections/PollutionSection";
import { FollowingCircle } from "@/components/ui/FollowingCircle";
import { TransitionSectionOne } from "@/components/sections2/BioHaloSections/TransitionSectionOne";
import { TransitionSectionTwo } from "@/components/sections2/BioHaloSections/TransitionSectionTwo";
import { TransitionSectionThree } from "@/components/sections2/BioHaloSections/TransitionSectionThree";

import { WhatWeDoSection } from "@/components/sections2/BioHaloSections/WhatWeDoSection";
import { FeatureOfPFAS } from "@/components/sections2/BioHaloSections/FeatureOfPFAS";
import { PollutionSection2 } from "@/components/sections2/BioHaloSections/PollutionSection2";
import { HealthSectionImgRight } from "@/components/sections2/BioHaloSections/HealthSection";
import { PlatformFeaturesSection } from "@/components/sections2/BioHaloSections/PlatformFeaturesSection";
import { BentoSection2 } from "@/components/sections2/BentoSection2";
import { TransitionSectionFour } from "@/components/sections2/BioHaloSections/TransitionSectionFour";
import IconCarousel from "@/components/ui/IconCarousel";
import { BentosPFASSection } from "@/components/sections2/BentosPFASSection";
import { TeamSection } from "@/components/sections2/BioHaloSections/TeamSection";

// Import the new sections
import { MeetUsAtSection } from "@/components/sections2/BioHaloSections/MeetUsAtSection";
import { PlatformTechnologySection } from "@/components/sections2/BioHaloSections/PlatformTechnologySection";
import { PartnersMarqueeSection } from "@/components/sections2/BioHaloSections/PartnersMarqueeSection";
import { SuccessesSection } from "@/components/sections2/BioHaloSections/SuccessesSection";
import { ContactSection } from "@/components/sections2/BioHaloSections/ContactSection";

import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";
import industrialPollutionImage from "@/assets/images/VariousImages/IndustrialPollution.png";
import industrialPollutionImageV2 from "@/assets/images/VariousImages/IndutrialPollutionV2.png";
import industrialPollutionImageV3 from "@/assets/images/VariousImages/IndustrialPollutionV3.png";
import industrialPollutionImageV3flipped from "@/assets/images/VariousImages/IndustrialPollutionV3flipped.png";
import ribbonImage from "@/assets/images/BGImagesTest/Twisted Ribbon Structure transparent.png";
import abstractImage from "@/assets/images/BGImagesTest/Abstract Black and White Design Transition.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { SimpleStatsBox } from "./ui/StatsBox";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import Pharma from "@/assets/images/BluePrintSVG/Pharma.svg";
import MeshFabric from "@/assets/images/Mesh-fabric.png";
import Droplets1 from "@/assets/images/Droplets1.jpg";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import BGFabricTealPink from "@/assets/images/BGImagesTest/BGFabricTealPink.png";
import BlackSmokeDivider from "@/assets/images/VariousImages/BlackSmokeDivider.png";
import A from "@/assets/images/Lettering/WornOurMetal/A.png";
import C from "@/assets/images/Lettering/WornOurMetal/C.png";
import C2 from "@/assets/images/Lettering/WornOurMetal/C2.png";
import E from "@/assets/images/Lettering/WornOurMetal/E.png";
import E2 from "@/assets/images/Lettering/WornOurMetal/E2.png";
import F from "@/assets/images/Lettering/WornOurMetal/F.png";
import H from "@/assets/images/Lettering/WornOurMetal/H.png";
import I from "@/assets/images/Lettering/WornOurMetal/I.png";
import I2 from "@/assets/images/Lettering/WornOurMetal/I2.png";
import M from "@/assets/images/Lettering/WornOurMetal/M.png";
import L from "@/assets/images/Lettering/WornOurMetal/L.png";
import O from "@/assets/images/Lettering/WornOurMetal/O.png";
import R from "@/assets/images/Lettering/WornOurMetal/R.png";
import S from "@/assets/images/Lettering/WornOurMetal/S.png";
import V from "@/assets/images/Lettering/WornOurMetal/V.png";

import ABlackLiquid from "@/assets/images/Lettering/BlackLiquid/A.png";
import CBlackLiquid from "@/assets/images/Lettering/BlackLiquid/C.png";
import C2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/C2.png";
import EBlackLiquid from "@/assets/images/Lettering/BlackLiquid/E.png";
import E2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/E2.png";
import FBlackLiquid from "@/assets/images/Lettering/BlackLiquid/F.png";
import F2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/F2.png";
import HBlackLiquid from "@/assets/images/Lettering/BlackLiquid/H.png";
import IBlackLiquid from "@/assets/images/Lettering/BlackLiquid/I.png";
import LBlackLiquid from "@/assets/images/Lettering/BlackLiquid/L.png";
import MBlackLiquid from "@/assets/images/Lettering/BlackLiquid/M.png";
import OBlackLiquid from "@/assets/images/Lettering/BlackLiquid/O.png";
import O2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/O2.png";
import PBlackLiquid from "@/assets/images/Lettering/BlackLiquid/P.png";
import RBlackLiquid from "@/assets/images/Lettering/BlackLiquid/R.png";
import SBlackLiquid from "@/assets/images/Lettering/BlackLiquid/S.png";
import S2BlackLiquid from "@/assets/images/Lettering/BlackLiquid/S2.png";
import VBlackLiquid from "@/assets/images/Lettering/BlackLiquid/V.png";
// ✅ Memoize static sections to prevent re-renders
const MemoizedTransitionSectionFour = memo(TransitionSectionFour);

// Array of letter images for the "FOREVER CHEMICALS" display
const letterImages = [
  F, // F
  O, // O
  R, // R
  E, // E
  V, // V
  E2, // E
  R, // R

  C, // C
  C, // C
  H, // H
  E, // E
  M, // M (Note: M is not in the imports, would need to be added)
  I, // I
  C2, // C
  A, // A
  L, // L
  S, // S
];
const letterImagesBlackLiquid = [
  FBlackLiquid, // F
  O2BlackLiquid, // O
  RBlackLiquid, // R
  EBlackLiquid, // E
  VBlackLiquid, // V
  E2BlackLiquid, // E
  RBlackLiquid, // R

  CBlackLiquid, // C
  CBlackLiquid, // C
  HBlackLiquid, // H
  EBlackLiquid, // E
  MBlackLiquid, // M (Note: M is not in the imports, would need to be added)
  IBlackLiquid, // I
  C2BlackLiquid, // C
  ABlackLiquid, // A
  LBlackLiquid, // L
  SBlackLiquid, // S
];

// Copy all the content from page.tsx here
const stats = [
  {
    number: "10000",
    prefix: ">",
    suffix: "",
    label: (
      <>
        <span
          className="text-lg md:text-xl lg:text-2xl xl:text-4xl  uppercase font-bold text-center bg-gradient-to-bl 
        from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent"
        >
          fluorinated compounds
        </span>{" "}
        <br /> are already known
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
        <span className="text-4xl md:text-7xl ">k</span>
      </>
    ),
    label: (
      <>
        <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-normal">
          tons of{" "}
        </span>
        <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
          Fluoropolymers
        </span>
        <br />
        <span className="font-normal text-lg md:text-2xl lg:text-3xl">
          Are Exported from the EU annually
        </span>
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
  {
    number: "49",
    prefix: "+",
    suffix: (
      <>
        <span className="text-4xl md:text-7xl ">k</span>
      </>
    ),
    label: (
      <>
        <span className="text-sm lg:text-2xl  uppercase font-normal  text-center">
          tons of{" "}
        </span>
        <span
          className="text-sm lg:text-2xl  uppercase font-bold text-center bg-gradient-to-bl 
        from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent"
        >
          Fluoropolymers
        </span>
        <br />
        <span className="font-normal text-base lg:text-lg">
          Are Exported from the EU annually
        </span>
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
];

import { ImageTitleText } from "@/components/ui/ImageTitleText";

export const Showcase4 = () => {
  console.log("Showcase4 component rendering");

  const ref4 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref4,
    offset: ["start end", "end start"],
  });

  return (
    <main
      className="min-h-screen w-full h-full bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70 overflow-hidden"
      id="top"
    >
      {/* Invisible element for top section detection */}
      <div
        className="absolute top-0 h-32 w-full pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* <HeroSection1 className="w-screen h-screen relative" /> */}
      {/* <HeroSection2 className="w-screen h-screen relative overflow-hidden" /> */}
      {/* <HeroSection4 className=" block w-screen h-screen relative overflow-hidden" /> */}
      <HeroSection4 className=" md:hidden block w-screen h-screen relative overflow-hidden" />
      <HeroSection5 className=" hidden md:block w-screen h-screen relative overflow-hidden" />
      <section className="" id="transition-section-one">
        {/* Background image of enzyme */}
        <div className="relative w-full h-full">
          <div
            className="absolute w-[80vw] h-[80vw] max-w-[1450px] top-0 right-0 opacity-1 blur-[6px]
        translate-x-[35%] translate-y-[-50%]"
          >
            <motion.div
              className="absolute w-full h-full"
              style={{
                y: useTransform(useScroll().scrollY, [0, 1000], [0, -200]),
              }}
            >
              <Image
                src={enzymeImage}
                alt="Enzyme"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>

          {/* <div className="relative w-full h-[300px] bg-gradient-to-t from-black/90 via-black/90 to-black/0"/> */}
        </div>

        {/* Title text made of letter images V2 */}
        {/*       <div className="relative w-full h-screen pt-24">
          <ImageTitleText letterImages={letterImages} />
        </div> */}

        <div
          className="relative w-full min-h-[200px] h-[30vw] xl:h-[30vw] pt-16 "
          style={{
            backgroundImage: `url(${BlackSmokeDivider.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        />
      </section>

      {/* <FluorinatedMaterialsSection
        className="relative w-full h-full overflow-hidden z-10 pt-6"
        stats={stats}
      /> */}
      <section className="w-full h-fit bg-red-500/0">
        <FluorinatedMaterialsSectionV2
          className="relative w-full h-fit overflow-hidden z-10 pt-6"
          stats={stats}
        />
      </section>

      {/* Health Section */}
      <section
        id="health-section"
        className="relative w-full h-[70vw] max-h-[700px]"
      >
        <div
          className="absolute w-full h-full bottom-0 bg-black max-w-[1450px] left-1/2 -translate-x-1/2 "
          style={{
            backgroundImage: `url(${industrialPollutionImageV3.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Fade to black */}
          <div className="absolute w-full h-[60%] top-0 left-0  bg-gradient-to-b from-black via-black to-transparent" />
          <div className="absolute w-full h-[12%] bottom-0 left-0  bg-gradient-to-t from-black via-black to-transparent" />
          <div className="absolute w-full h-full top-0 left-0  bg-gradient-to-l from-black via-black/30 to-transparent" />
          {/* Center Content with Image */}
          <motion.div
            ref={ref4}
            className="absolute w-[40%] aspect-square rounded-full right-0 top-0 overflow-hidden flex flex-col items-center justify-center"
            style={{ willChange: "transform, opacity" }} // Optimize transformations and transparency
          >
            <div
              className="absolute w-[80%] h-[80%] top-[3%] "
              style={{
                backgroundImage: `url(${Pharma.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* Gradient Overlay */}
            <div
              className="absolute w-full h-full inset-0 rounded-full overflow-hidden bg-gradient-to-t from-black via-black/50 to-transparent"
              style={{ willChange: "opacity" }} // Helps with smooth opacity transitions
            />

            {/* Animated Stats Box */}
            <motion.div
              className="absolute top-[63%] -translate-y-[65%] w-full"
              ref={ref4}
              style={{ willChange: "transform, opacity" }} // Optimizing framer-motion animation
            >
              <SimpleStatsBox
                classNamesContainer="w-fit mx-auto z-20 "
                classNamesTitle="text-center text-6xl lg:text-9xl font-black mb-4 bg-gradient-to-tl from-lightGrey/40 via-gray-200 to-lightGrey/80 bg-clip-text text-transparent"
                classNamesSubTitle="text-center text-lightGrey/80 text-lg lg:text-4xl font-bold capitalize -mt-8"
                stat={stats[3]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.4}
                index={3}
                text=""
                ratchet={false}
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="what-we-do"
        className="pt-12 md:pt-20 xl:pt-48 min-h-[80vh] relative overflow-hidden"
      >
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>

        <WhatWeDoSection
          className="min-h-[50vh] w-[100vw] text-white relative"
          stats={stats}
        />
      </section>

      {/* Platform Technology Section */}
      <section
        id="platform-technology"
        className="w-full min-h-[80vh] relative"
      >
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>

        <PlatformTechnologySection className="bg-gradient-to-b from-black via-gray-900 to-black" />
      </section>

      {/* Icon Carousel Section - No ID here since it's not in the navigation */}
      <section className="w-full">
        <div className="bg-red-500/0 w-full">
          <div className="w-full h-[400px] pt-10 overflow-hidden flex items-center justify-center">
            <IconCarousel className="w-[1200px] h-[1200px] mx-auto mt-[50px] scale-[0.5] md:scale-100" />
          </div>
        </div>
      </section>

      {/*       <section className="bg-red-500/0 w-full">
        <div className="w-full h-[700px] pt-10 overflow-hidden">
          <IconCarousel className="w-[1200px] h-[1200px] mb-[500px] mx-auto" />
        </div>
        <div id="platform-features">
          <PlatformFeaturesSection />
        </div>
      </section> */}

      {/* Successes Section 
      <section id="successes" className="w-full">
        <SuccessesSection className="bg-gradient-to-br from-lightGrey/90 via-mintAccent/30 to-tealAccent/10" />
      </section>
        */}

      {/* Partners Marquee Section */}
      {/* <section id="partners" className="w-full">
        <PartnersMarqueeSection />
      </section> */}

      {/* Meet Us At Section 
      <section id="meet-us-at" className="w-full">
        <MeetUsAtSection className="bg-gradient-to-br from-lightGrey/90 via-mintAccent/30 to-tealAccent/10" />
      </section>
        */}

      {/* Team Section */}
      <section id="team-section" className="min-h-[80vh] relative">
        {/* Section detection helper */}
        <div
          className="absolute top-0 h-24 w-full pointer-events-none"
          aria-hidden="true"
        ></div>

        <TeamSection className="w-full" />
      </section>

      {/* Contact Section */}
      <section id="contact-section">
        <ContactSection className="w-full" />
      </section>

      {/* Bento Section 
      <section className="py-16 bg-lightGrey text-center px-4">
        <BentoSection2 className="bg-lightGrey relative" />
      </section>
        */}
    </main>
  );
};
