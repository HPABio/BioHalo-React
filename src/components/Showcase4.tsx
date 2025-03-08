"use client";

import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import Image from "next/image";
import React, { Suspense, memo } from "react";
import dynamic from "next/dynamic";
import { HeroSection5 } from "@/components/HeroSections/HeroSection5";
import { FluorinatedMaterialsSection } from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
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


// Import the new sections
import { MeetUsAtSection } from "@/components/sections2/BioHaloSections/MeetUsAtSection";
import { PlatformTechnologySection } from "@/components/sections2/BioHaloSections/PlatformTechnologySection";
import { PartnersMarqueeSection } from "@/components/sections2/BioHaloSections/PartnersMarqueeSection";
import { SuccessesSection } from "@/components/sections2/BioHaloSections/SuccessesSection";

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

export const Showcase4 = () => {
  console.log("Showcase4 component rendering");

  return (
    <main className="min-h-screen w-full h-full bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70 overflow-hidden">
      <HeroSection5 className="w-screen h-screen relative" />

      <section
        className="py-16 bg-black text-center px-4"
        id="transition-section-one"
      >
        <div className="w-full h-[300px]"></div>
      </section>

      <FluorinatedMaterialsSection
        className="relative w-full h-full overflow-hidden xl:overflow-visible z-10 xl:-mb-[100px]"
        stats={stats}
      />

      <section id="what-we-do">
        <WhatWeDoSection
          className="min-h-[50vh] max-w-[1280px] mx-auto text-white px-14 mt-32 relative border-2 border-red-500/0"
          stats={stats}
        />
      </section>

          {/* Platform Technology Section */}
          <section id="platform-technology" className="w-full pt-48">
        <PlatformTechnologySection className="bg-gradient-to-b from-black via-gray-900 to-black" />
      </section>

      <section className="w-full h-full relative">
        <BentosPFASSection className="bg-black relative" />
      </section>


      <section id="feature-pfas" className="w-full h-full relative pt-48">
        {/* <MemoizedTransitionSectionFour className="w-full h-[200px]" circleSize={700} /> */}

        <FeatureOfPFAS className="w-full min-h-[70vh] bg-black" />

        <MemoizedTransitionSectionFour
          className="w-full h-[200px] rotate-180"
          circleSize={700}
        />
      </section>

      <section id="health" className="w-full h-full relative pt-32">
        <HealthSectionImgRight
          className="min-h-[50vh] max-w-[1280px] mx-auto px-14 relative overflow-hidden xl:overflow-visible mb-36"
          stats={stats}
        />
      </section>

      {/* Pollution Section */}

      <section id="pollution" className="min-h-screen">
        <PollutionSection
          className="min-h-[50vh] max-w-[1280px] mx-auto px-14 relative overflow-visible z-10"
          stats={stats}
        />
      </section>

  

      <section className="bg-red-500/0 w-full">
        <div className="w-full h-[700px] pt-10 overflow-hidden">
          <IconCarousel className="w-[1200px] h-[1200px] -mb-[500px] mx-auto" />
        </div>
        <div id="platform-features">
          <PlatformFeaturesSection />
        </div>
      </section>

      {/* Successes Section */}
      <section id="successes" className="w-full">
        <SuccessesSection className="bg-gradient-to-br from-lightGrey/90 via-mintAccent/30 to-tealAccent/10" />
      </section>

      {/* Partners Marquee Section */}
      <section id="partners" className="w-full">
        <PartnersMarqueeSection />
      </section>

      {/* Meet Us At Section */}
      <section id="meet-us-at" className="w-full">
        <MeetUsAtSection className="bg-gradient-to-br from-lightGrey/90 via-mintAccent/30 to-tealAccent/10" />
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-5xl md:text-6xl font-black mb-8 bg-gradient-to-bl from-mintAccent via-tealAccent to-teal-900 bg-clip-text text-transparent">
          Meet Our Team
        </h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Team Member Card */}
          <div className="bg-white p-6 shadow rounded">
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

          {/* Team Member Card */}
          <div className="bg-white p-6 shadow rounded">
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

          {/* Team Member Card */}
          <div className="bg-white p-6 shadow rounded">
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

      <section className="py-16 bg-lightGrey text-center px-4">
        <BentoSection2 className="bg-lightGrey relative" />
      </section>
    </main>
  );
};
