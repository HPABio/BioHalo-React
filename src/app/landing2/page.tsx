"use client";

import { PfasPolution } from "@/components/sections2/PfasPolution";
import { StatsSection6 } from "@/components/sections2/StatsSection6";
import { StatsSection5 } from "@/components/sections2/StatsSection5";
import { ChallengesSection } from "@/components/sections2/ChallengesSection";
import { SolutionSection } from "@/components/sections2/SolutionSection";
import { AchievementsSection } from "@/components/sections2/AchievementsSection";
import { ConferencesSection } from "@/components/sections2/ConferencesSection";
import { BentoSection } from "@/components/sections2/BentoSection";
import { PfasProducts } from "@/components/sections2/PfasProducts";
import { HeroSection4 } from "@/components/HeroSections/HeroSection4";
import FollowPath from "@/components/ui/FollowPath";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="relative bg-lightGrey w-full h-full">
        <HeroSection4 className="bg-gradient-to-br from-mintAccent/80 to-tealAccent" />
        <StatsSection6 className="z-10  overflow-visible" />
        <StatsSection5 className="z-3" />
        <ChallengesSection className="bg-lightGrey relative" />
        <SolutionSection className="bg-white relative" />
        <BentoSection className="bg-lightGrey relative" />
        <AchievementsSection className="bg-white relative" />
        <ConferencesSection className="bg-white relative" />
      </div>
    </main>
  );
}

/* 
background-image: linear-gradient(#8b9da9, #fff6e4);
box-shadow: inset 0 0 100px hsla(0,0%,0%,.3);
} */
