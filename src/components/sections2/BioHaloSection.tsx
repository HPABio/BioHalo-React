import { WhatWeDoSection } from "./BioHaloSections/WhatWeDoSection";
import { TransitionSectionOne } from "./BioHaloSections/TransitionSectionOne";
import { FluorinatedMaterialsSection } from "./BioHaloSections/FluorinatedMaterialsSection";
import { TransitionSectionTwo } from "./BioHaloSections/TransitionSectionTwo";
import { PollutionSection } from "./BioHaloSections/PollutionSection";
import { TransitionSectionThree } from "./BioHaloSections/TransitionSectionThree";
import { HealthSectionImgRight, HealthSectionImgLeft } from "./BioHaloSections/HealthSection";
import WaterColorReveal from "../WaterColorReveal";

interface BioHaloSectionProps {
  className?: string;
}

export function BioHaloSection({
  className = "w-full h-full",
}: BioHaloSectionProps) {
  const stats = [
    {
      number: "10000",
      prefix: ">",
      suffix: "",
      label: (
        <>
          Known <span className="text-lightGrey/80">fluorinated</span>{" "}
          compounds
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
          <span className="text-center text-4xl lowercase
                font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent">million tons</span>
        </>
      ),
    },
  ];

  return (
    <main className={`${className}`}>
      <WhatWeDoSection stats={stats} className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white px-14 pt-10 relative overflow-hidden xl:overflow-visible xl:overflow-y-clip" />
      <TransitionSectionOne className="w-full h-full bg-red-500/0 " />
      <FluorinatedMaterialsSection stats={stats} className="w-full bg-black bg-gradient-to-br from-black/30 via-tealAccent/10 to-gray-800/20 relative -mt-[600px]" />
      <TransitionSectionTwo />
      <PollutionSection stats={stats} className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white 
      pt-10 2xl:pt-24 px-14 relative overflow-visible z-10" />
      <TransitionSectionThree stats={stats} className="w-full h-full min-h-screen  relative " />
      <HealthSectionImgRight stats={stats} className="bg-red-500/0 min-h-[50vh] max-w-[1280px] mx-auto text-white 
        pt-10 2xl:pt-24 px-14 relative overflow-hidden xl:overflow-visible" />
    </main>
  );
}
