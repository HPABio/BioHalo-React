"use client";

import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import Image from "next/image";
import React, { Suspense } from "react";
import { HeroSection5 } from "@/components/HeroSections/HeroSection5";
import { FluorinatedMaterialsSection } from "@/components/sections2/BioHaloSections/FluorinatedMaterialsSection";
import { StatsBox } from "@/components/ui/StatsBox";
import { PollutionSection } from "@/components/sections2/BioHaloSections/PollutionSection";
import { HealthSectionImgLeft } from "@/components/sections2/BioHaloSections/HealthSection";
import { FollowingCircle } from "@/components/ui/FollowingCircle";

import { TransitionSectionOne } from "@/components/sections2/BioHaloSections/TransitionSectionOne";
import { TransitionSectionTwo } from "@/components/sections2/BioHaloSections/TransitionSectionTwo";
import { TransitionSectionThree } from "@/components/sections2/BioHaloSections/TransitionSectionThree";

// Lazy load components
const WhatWeDoSection = React.lazy(() =>
  import("@/components/sections2/BioHaloSections/WhatWeDoSection").then(
    (mod) => ({ default: mod.WhatWeDoSection })
  )
);
const FeatureOfPFAS = React.lazy(() =>
  import("@/components/sections2/BioHaloSections/FeatureOfPFAS").then(
    (mod) => ({ default: mod.FeatureOfPFAS })
  )
);
const PollutionSection2 = React.lazy(() =>
  import("@/components/sections2/BioHaloSections/PollutionSection2").then(
    (mod) => ({ default: mod.PollutionSection2 })
  )
);
const HealthSectionImgRight = React.lazy(() =>
  import("@/components/sections2/BioHaloSections/HealthSection").then(
    (mod) => ({ default: mod.HealthSectionImgRight })
  )
);
const PlatformFeaturesSection = React.lazy(() =>
  import("@/components/sections2/BioHaloSections/PlatformFeaturesSection").then(
    (mod) => ({ default: mod.PlatformFeaturesSection })
  )
);
const IconCarousel = React.lazy(() => import("@/components/ui/IconCarousel"));
const BentoSection2 = React.lazy(() =>
  import("./sections2/BentoSection2").then((mod) => ({
    default: mod.BentoSection2,
  }))
);
const TransitionSectionFour = React.lazy(() =>
  import("@/components/sections2/BioHaloSections/TransitionSectionFour").then(
    (mod) => ({ default: mod.TransitionSectionFour })
  )
);

// Loading component for Suspense fallback
const LoadingSpinner = () => (
  <div className="w-full h-[50vh] flex items-center justify-center">
    <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-tealAccent"></div>
  </div>
);

// Debug configuration
const DEBUG_MODE = {
  enabled: false,
  components: {
    showcase: true,
    hero: true,
    fluorinatedMaterials: true,
    whatWeDo: true,
    featureOfPFAS: true,
    health: true,
    pollution: true,
    platformFeatures: true,
    bento: true,
  },
};

export const Showcase3 = () => {
  if (DEBUG_MODE.enabled && DEBUG_MODE.components.showcase) {
    console.log("Showcase2 component initialization started");
  }

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

  if (DEBUG_MODE.enabled && DEBUG_MODE.components.showcase) {
    console.log("Stats data initialized");
  }

  React.useEffect(() => {
    if (DEBUG_MODE.enabled) {
      console.log("Starting Showcase2 component render");
      if (DEBUG_MODE.components.hero) console.log("Rendering Hero Section");
      if (DEBUG_MODE.components.fluorinatedMaterials)
        console.log("Rendering Fluorinated Materials Section");
      if (DEBUG_MODE.components.whatWeDo)
        console.log("Rendering What We Do Section");
      if (DEBUG_MODE.components.featureOfPFAS)
        console.log("Rendering PFAS Features Section");
      if (DEBUG_MODE.components.health) console.log("Rendering Health Section");
      if (DEBUG_MODE.components.pollution)
        console.log("Rendering Pollution Section");
      if (DEBUG_MODE.components.platformFeatures)
        console.log("Rendering Icon Carousel and Platform Features");
      if (DEBUG_MODE.components.bento)
        console.log("Rendering Value Proposition Section");
    }
  }, []);

  console.log("Showcase2 component rendering");

  return (
    <main className="min-h-screen w-full h-full bg-gradient-to-br from-lightGrey via-mintAccent/50 to-tealAccent/70 overflow-hidden">
      {/* <ShowcaseNavbar /> */}
      <div
        id="top"
        className="fixed top-[10%] right-5 w-[60px] h-[60px] bg-red-500/0 flex flex-row items-center justify-center gap-4 z-[100]"
      >
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

      <HeroSection5
        className="w-screen h-screen relative"
        debug={DEBUG_MODE.enabled && DEBUG_MODE.components.hero}
      />
      <section
        className="py-16 bg-black text-center px-4"
        id="transition-section-one"
      >
        <div className="w-full h-[300px]"></div>
      </section>

      <FluorinatedMaterialsSection
        stats={stats}
        className="relative w-full h-full overflow-hidden xl:overflow-visible z-10 xl:-mb-[100px]"
        debug={DEBUG_MODE.enabled && DEBUG_MODE.components.fluorinatedMaterials}
      />

      <section id="what-we-do">
        <WhatWeDoSection
          stats={stats}
          className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white px-14 mt-32 relative"
          debug={DEBUG_MODE.enabled && DEBUG_MODE.components.whatWeDo}
        />
      </section>

      <section id="feature-pfas" className="w-full h-full relative pt-32">
        <TransitionSectionFour
          className="w-full h-[200px]"
          circleSize={700}
        />
        <FeatureOfPFAS
          className="w-full min-h-[70vh] bg-black"
          debug={DEBUG_MODE.enabled && DEBUG_MODE.components.featureOfPFAS}
        />
        <TransitionSectionFour
          className="w-full h-[200px] rotate-180"
          circleSize={700}
        />
      </section>

      <section id="health" className="w-full h-full relative pt-32">
        <HealthSectionImgRight
          stats={stats}
          className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto px-14 relative overflow-hidden xl:overflow-visible mb-36"
          debug={DEBUG_MODE.enabled && DEBUG_MODE.components.health}
        />
      </section>

      <section id="pollution" className="min-h-screen">
        <PollutionSection2
          stats={stats}
          className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto px-14 relative overflow-visible z-10"
          debug={DEBUG_MODE.enabled && DEBUG_MODE.components.pollution}
        />
      </section>

      <section className="bg-red-500/0 w-full">
        <div className="w-full h-[700px] pt-10 overflow-hidden">
          <IconCarousel className="w-[1200px] h-[1200px] -mb-[500px] mx-auto" />
        </div>

        <div id="platform-features">
          <PlatformFeaturesSection
            debug={DEBUG_MODE.enabled && DEBUG_MODE.components.platformFeatures}
          />
        </div>
      </section>

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
        <BentoSection2 className="bg-lightGrey relative" />
      </section>

      {/* Team Section */}
      <section id="team-section" className="py-16 bg-gray-100 text-center px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Meet Our Team</h2>
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
    </main>
  );
};
