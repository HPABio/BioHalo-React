"use client";

import { SnapScrollSections } from "@/components/ui/SnapScrollSections";
import { FiveSectionScroll } from "@/components/sections/FiveSectionScroll";
import { HeroSection4 } from "@/components/HeroSections/HeroSection4";
import { StatsSection5 } from "@/components/sections2/StatsSection5";
import { StatsSection6 } from "@/components/sections2/StatsSection6";
import { ChallengesSection } from "@/components/sections2/ChallengesSection";
import { SolutionSection } from "@/components/sections2/SolutionSection";
import { BentoSection } from "@/components/sections2/BentoSection";
import { AchievementsSection } from "@/components/sections2/AchievementsSection";
import { ConferencesSection } from "@/components/sections2/ConferencesSection";
import { BioHaloLogo2 } from "@/components/ui/BioHaloLogo2";
import Image from "next/image";

export default function ScrollingWorkshop() {
  return (
    <main className="h-full w-full bg-lightGrey">
      <SnapScrollSections>
        <section className="section w-screen h-screen bg-purple-900 flex justify-center items-center">
          {/* <h1 className="text-9xl text-white">Section 1</h1> */}
          {/* <HeroSection4 /> */}
          <BioHaloLogo2
            styles={{
              classNames: "opacity-1 max-w-[1500px] max-h-[1500px]",
              width: "calc(100vw - 150px)",
              height: "calc(100vh - 150px)",
              animationduration: "1.5s",
              animationdelay: "0.3s",
            }}
          />
        </section>
        {/*       <section className="section w-screen h-screen bg-purple-900 flex justify-center items-center">
        <StatsSection5 className="z-3" />
      </section> */}

        <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <StatsSection6 className="z-10 overflow-visible" />
        </section>
        {/*         <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <StatsSection5 className="z-10 overflow-visible"/>
        </section> */}
        <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <ChallengesSection className="bg-lightGrey relative overflow-visible mt-[10%]" />
        </section>
        <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <SolutionSection className="bg-white relative overflow-visible" />
        </section>
        <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <BentoSection className="bg-lightGrey relative overflow-visible" />
        </section>
        <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <AchievementsSection className="bg-white relative overflow-visible" />
        </section>
        <section className="section w-screen h-screen bg-lightGrey flex justify-center items-center">
          <ConferencesSection className="bg-white relative overflow-visible" />
        </section>
      </SnapScrollSections>

      {/*       <SnapScrollSections>
        <section className="section h-screen w-screen bg-blue-900 flex justify-center items-center">
          <h1 className=" text-9xl text-yellow-200">
                    Section 1
                </h1>
        </section>
        <section className="section h-screen w-screen bg-indigo-900 flex justify-center items-center">
        <h1 className=" text-9xl text-yellow-200">
                    Section 2
                </h1>
        </section>
        <section className="section h-screen w-screen bg-blue-900 flex justify-center items-center">
        <h1 className=" text-9xl text-yellow-200">
                    Section 3
                </h1>
        </section>
        <section className="section h-screen w-screen bg-indigo-900 flex justify-center items-center">
        <h1 className=" text-9xl text-yellow-200">
                    Section 4
                </h1>
        </section>
        <section className="section h-screen w-screen bg-blue-900 flex justify-center items-center">
        <h1 className=" text-9xl text-yellow-200">
                    Section 5
                </h1>
        </section>
        <section className="section h-screen w-screen bg-indigo-900 flex justify-center items-center">
        <h1 className=" text-9xl text-yellow-200">
                    Section 6
                </h1>
        </section>
        <section className="section h-screen w-screen bg-blue-900 flex justify-center items-center">
        <h1 className=" text-9xl text-yellow-200">
                    Section 7
                </h1>
        </section>

      </SnapScrollSections> */}
    </main>
  );
}
