"use client";

import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import Image from "next/image";
import React, { Suspense, memo } from "react";
import dynamic from "next/dynamic";
import { HeroSection1, HeroSection2, HeroSection3, HeroSection4, HeroSection5 } from "@/components/HeroSections/HeroSections";
import { FluorinatedMaterialsSection } from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
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


import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517 Compressed.png";
import ribbonImage from "@/assets/images/BGImagesTest/Twisted Ribbon Structure transparent.png";
import abstractImage from "@/assets/images/BGImagesTest/Abstract Black and White Design Transition.png";


// ✅ Memoize static sections to prevent re-renders
const MemoizedTransitionSectionFour = memo(TransitionSectionFour);

// Copy all the content from page.tsx here
const stats = [
  {
    number: "10000",
    prefix: ">",
    suffix: "",
    label: (
      <>
        <span className="text-lightGrey/80">fluorinated</span> compounds <br className="md:hidden block" /> are already known
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
        <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-normal">tons of </span>
        <span className="text-2xl md:text-4xl lg:text-5xl uppercase font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
          Fluoropolymers
        </span>
        <br />
        <span className="font-normal text-lg md:text-2xl lg:text-3xl">Are Exported from the EU annually</span>
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

export const Showcase4 = () => {
  console.log("Showcase4 component rendering");

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
      <HeroSection5 className="w-screen h-screen relative overflow-hidden" />
      <section
        className="pb-16 bg-black"
        id="transition-section-one"
      >
        <div className="relative w-full h-[100px] lg:h-[200px]">

        <div className="absolute w-[80vw] h-[80vw] max-w-[1450px] top-0 right-0 opacity-1 blur-[6px]
        translate-x-[35%] translate-y-[-50%]">
          <Image 
            src={enzymeImage} 
            alt="Enzyme" 
            fill 
            className="object-contain"
          />
        </div>
{/*         <div className="absolute w-[110vw] h-[400px] top-[50%] left-[50%] opacity-1 translate-x-[-50%] translate-y-[-64%]">
          <Image 
            src={abstractImage} 
            alt="Abstract" 
            fill 
            className="object-fill "
          />
        </div>
        <div className="absolute w-[300px] h-[100vw] top-[50%] left-[50%] opacity-1 translate-x-[-50%] translate-y-[-58%]">
          <Image 
            src={ribbonImage} 
            alt="Ribbon" 
            fill 
            className="object-fill rotate-[-90deg] hidden"
          />
        </div> */}

        <div className="relative w-full h-[300px] bg-gradient-to-t from-black/90 via-black/90 to-black/0"/>

        </div>
      </section>

      <FluorinatedMaterialsSection
        className="relative w-full h-full overflow-hidden z-10 pt-6"
        stats={stats}
      />

      <section id="what-we-do" className="pt-12 md:pt-20 xl:pt-48 min-h-[80vh] relative">
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
