"use client";

import Image from "next/image";
import BioHaloBG from "@/assets/images/BioHalo-background-compressed.jpeg";
import { HeroSection4 } from "@/components/HeroSections/HeroSection4";
import { BentoSection2 } from "@/components/sections2/BentoSection2";
import HaloComponent from "@/components/ui/HaloComponent";
import IconCarousel from "@/components/ui/IconCarousel";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import BioReactor from "@/assets/images/BluePrint with Color/bio-reactor.png";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import { PeriodicTable } from "@/components/sections2/PeriodicTable";
import { StatsSection } from "@/components/sections2/StatsSection";
import { StatsSection2 } from "@/components/sections2/StatsSection2";
import { StatsSection3 } from "@/components/sections2/StatsSection3";
import { StatsSection4 } from "@/components/sections2/StatsSection4";
import { StatsSection5 } from "@/components/sections2/StatsSection5";
import { PFASSection } from "@/components/sections2/PFASSection";

export default function Landing4() {
  return (
    <main className="min-h-screen">
      <div className="relative w-full h-full bg-gradient-to-br from-mintAccent/80 to-tealAccent ">
        <HeroSection4 className="" />

        {/* Section 1 */}
        <PFASSection />

        {/* Devider & Transition */}
        <div className="w-full relative h-[100px] ">
          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-transparent via-lightGrey to-lightGrey -mt-12"></div>
        </div>

        {/* Stats Section 4 */}
        <div className="w-full bg-lightGrey">
          {/* <StatsSection4 className="pt-24 max-w-[1200px] mx-auto" /> */}
        </div>

        {/* Section 2 */}
        <section className="w-screen relative bg-lightGrey overflow-hidden">
          <div className="w-full h-[200px] absolute -top-24 bg-gradient-to-t from-transparent via-lightGrey to-transparent"></div>
          <div className="w-full h-[200px] absolute -top-24 bg-gradient-to-t from-transparent via-mintAccent/20 to-transparent"></div>

          {/* Icon Carousel Component */}
          <div className="w-full pt-24 flex flex-col items-center justify-center bg-gradient-to-b from-mintAccent/0 to-tealAccent/70">
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
            <IconCarousel className="w-[1200px] h-[1200px] mt-12" />
          </div>
        </section>

        {/* Section 3 */}
        <section className="w-screen relative bg-lightGrey overflow-hidden">
          <div className="w-full h-[200px] absolute -top-24 bg-gradient-to-t from-transparent via-lightGrey to-transparent"></div>
          <div className="w-full h-[200px] absolute -top-24 bg-gradient-to-t from-transparent via-mintAccent/20 to-transparent"></div>

          {/* Icon Carousel Component */}
          <div className="w-full pt-24 flex flex-col items-center justify-center bg-gradient-to-b from-mintAccent/0 to-tealAccent/30 pb-24">
            <h2 className="text-3xl font-semibold text-gray-300 uppercase relative text-center">
              Our <br />{" "}
              <span className="absolute font-black text-6xl font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent blur-[3px] opacity-55">
                Bio-f-platform
              </span>
              <span className="font-black font-Arial text-6xl bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent">
                Bio-f-platform
              </span>
              <br /> enables us to design
              <span className="font-black font-Arial">PFAS </span> industry
            </h2>
            {/* <IconCarousel className="w-[1200px] h-[1200px] mt-12" /> */}
          </div>
        </section>

        {/* Bento Section */}
        <BentoSection2 className="bg-lightGrey relative" />
        {/*       <StatsSection6 className="z-10  overflow-visible" />
      <StatsSection5 className="z-3" />
      <ChallengesSection className="bg-lightGrey relative" />
      <SolutionSection className="bg-white relative" />
      <AchievementsSection className="bg-white relative" />
      <ConferencesSection className="bg-white relative" /> */}
      </div>
    </main>
  );
}
