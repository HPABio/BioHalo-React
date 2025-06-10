import React, { useRef, useEffect, useMemo } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import Image from "next/image";
import {
  StatsBox,
  StaticStatsBox,
  SimpleStatsBox,
} from "@/components/ui/StatsBox";
import { TransitionSectionOne } from "@/components/sections2/BioHaloSections/TransitionSectionOne";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import WaterColorReveal from "@/components/WaterColorReveal";
import { RasterizeComponent } from "@/components/ui/RasterizeComponent";

import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import Droplets1 from "@/assets/images/Droplets1.jpg";
import ColorfulGradientRainbowTexture from "@/assets/images/BGImagesTest/ColorfulGradientRainbowTexture.jpeg";
import ElegantHandsWithLens from "@/assets/images/BGImagesTest/ElegantHandsWithLens.jpeg";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import RainJacketMist from "@/assets/images/BGImagesTest/RainJacketMist.jpeg";
import HikerOverlookingMistyValley from "@/assets/images/BGImagesTest/HikerOverlookingMistyValley.jpeg";
import TexturedGlassSurface from "@/assets/images/BGImagesTest/Textured Glass Surface.jpeg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import pollutionearth from "@/assets/images/BluePrintStyle/polutionEarth.svg";
import IndustrialPollution from "@/assets/images/BGImages/IndustrialPollution_960678749.png";
import IconToxicSkull from "@/assets/images/VariousImages/iconToxicSkull.png";
import MeshFabric from "@/assets/images/Mesh-fabric.png";

//LummiAi
import ElegantBottleDesignLummiAi from "@/assets/images/LummiAi/ElegantBottleDesign.jpeg";
import FuturisticMetallicObjectLummiAi from "@/assets/images/LummiAi/FuturisticMetallicObject.jpeg";
import FuturisticMetallicObject2LummiAi from "@/assets/images/LummiAi/FuturisticMetallicObject2.jpeg";
import FuturisticRocketEngineLummiAi from "@/assets/images/LummiAi/FuturisticRocketEngine.jpeg";
import IndustrialMachineCloseUpLummiAi from "@/assets/images/LummiAi/IndustrialMachineClose-Up.jpeg";
import JetEngineCloseUpLummiAi from "@/assets/images/LummiAi/JetEngineClose-Up.jpeg";
import JetEngineTurbineCloseUpLummiAi from "@/assets/images/LummiAi/JetEngineTurbineClose-Up.jpeg";
import LuxuriousSkincareDisplayLummiAi from "@/assets/images/LummiAi/LuxuriousSkincareDisplay.jpeg";
import LuxurySkincareDisplayLummiAi from "@/assets/images/LummiAi/LuxurySkincareDisplay.jpeg";
import MatteBlackBottleLummiAi from "@/assets/images/LummiAi/MatteBlackBottle.jpeg";
import ModernMetallicDesignLummiAi from "@/assets/images/LummiAi/ModernMetallicDesign.jpeg";
import SleekMetallicObjectLummiAi from "@/assets/images/LummiAi/SleekMetallicObject.jpeg";
import SolitudeInTheRainLummiAi from "@/assets/images/LummiAi/SolitudeInTheRain.jpeg";

//Unsplash
import TeflonMaterialUnsplash from "@/assets/images/VariousImages/TeflonMaterialUnsplash.jpg";
import TeflonMaterialUnsplash2 from "@/assets/images/VariousImages/TeflonMaterialUnsplash2.jpg";
import TeflonMaterialUnsplash3 from "@/assets/images/VariousImages/TeflonMaterialUnsplash3.jpg";
import tightMeshThickFabric from "@/assets/images/VariousImages/tightMeshThickFabric.jpg";

import LummiCPU from "@/assets/images/VariousImages/LummiCPU.png";
import LummiCPU2 from "@/assets/images/VariousImages/LummiCPU2.png";
import UnsplashCPU from "@/assets/images/VariousImages/UnsplashCPU.png";
import AdobeStockCPU from "@/assets/images/AdobeStock/AdobeStock_1514887767_Preview_CPU.jpeg";
import { url } from "inspector";
import { Rocket } from "lucide-react";
import { borderBottomLeftRadius } from "html2canvas/dist/types/css/property-descriptors/border-radius";
import { BentoStats } from "@/components/bentos/Gen_3_Bentos/BentoStats";

// Function to generate random brightness values
const generateBrightnessValues = (count: number, min: number, max: number) => {
  min = min || 0.7;
  max = max || 1.3;
  count = count || 10;
  return Array.from({ length: count }, () => {
    const brightness = min + Math.random() * (max - min); // Random value between 0.9 and 1.3
    return `blur(0px) brightness(${brightness.toFixed(2)})`;
  });
};

interface AlternativeFluorinatedMaterialsSectionProps {
  stats: any[];
  className?: string;
  debug?: boolean;
}

// Memoized Circle Components
const Circle1 = React.memo(function Circle1() {
  console.log("Rendering Circle1 component");
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <motion.div
      ref={ref}
      initial={{ rotate: 0 }}
      transition={{ duration: 1 }}
      style={{
        rotate: useTransform(scrollYProgress, [0, 1], [0, -15]),
        y: useTransform(scrollYProgress, [0, 0.6], [0, -100]),
      }}
      className="relative w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40 grid place-items-center"
    >
      <Image
        src={ColorfulGradientRainbowTexture}
        alt="TexturedGlassSurface"
        sizes="(max-width: 768px) 100vw, 350px"
        className="w-full h-full object-cover"
      />
      <motion.div
        ref={ref}
        className="absolute w-[110%] h-[110%] min-w-[110%] min-h-[110%] 
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
        mix-blend-multiply"
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.6], [0, 0.75]),
        }}
      >
        <Image
          src={IconToxicSkull}
          alt="IconToxicSkull"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 500px"
          className="w-full h-full object-cover invert grayscale"
        />
      </motion.div>
    </motion.div>
  );
});

export function AlternativeFluorinatedMaterialsSection({
  stats,
  className = "",
  debug = false,
}: AlternativeFluorinatedMaterialsSectionProps) {
  const ref2 = useRef(null);
  const refCPUText = useRef(null);
  const refTurbine = useRef(null);
  const refBottle = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["center end", "center start"],
  });
  const { scrollYProgress: scrollYProgressBottle } = useScroll({
    target: refBottle,
    offset: ["start end", "center start"],
  });
  const shouldRasterize = false;
  const saveToAssets = false;
  if (debug) console.log("Rendering FluorinatedMaterialsSection");

  return (
    <section
      className={`${className} w-full h-full  relative bg-gradient-to-b from-black via-black to-slate-900`}
    >
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>

      <div className="w-full max-w-[580px] mx-auto h-fit relative bg-gradient-to-b from-black via-black to-transparent ">
        <div
          className="w-full h-fit relative overflow-hidden 
        bg-gradient-to-b from-black via-black to-transparent "
        >
          <div className="relative w-full h-full max-w-[1280px] flex flex-col mx-auto px-6">
            {/* TEXT COLUMN */}
           {/*  <div className="w-full flex flex-col items-center">
              <p className="text-lightGrey/30 text-lg font-poppins font-light">Forever Chemicals are also known as:</p>

              <h1 className="w-full text-center font-black font-poppins 
              bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-4 groupleading-none">
                <span className="text-4xl text-gray-500 font-medium leading-none">
                  <span className="font-bold text-transparent">P</span>er<span className="font-bold text-transparent">F</span>luoro
                  <span className="font-bold text-transparent">A</span>lkyl <span className="font-bold text-transparent">S</span>ubstances <span className="text-gray-500 font-light">&</span> <br />
                  <span className="font-bold text-transparent">P</span>oly<span className="font-bold text-transparent">F</span>luoro
                  <span className="font-bold text-transparent">A</span>lkyl <span className="font-bold text-transparent">S</span>ubstances
                </span>
                      <p className="text-md lg:text-xl text-gray-500 font-poppins font-light leading-snug">
                        or for short
                      </p>
              </h1>
                  <div className="w-full h-full flex flex-col items-center justify-center">
                      <div className="w-full h-full flex flex-col items-center justify-center 
                    border-2 border-red-500/0">
                      <BentoStats className="w-full  aspect-[16/4] border-2 border-red-500/0" />
                </div>
              </div>
            </div> */}



            {/* Content container */}
            <div className="flex flex-col gap-8 w-full">
              {/* Text content */}
              <div className="w-full px-4">
                <div className="">
                  {/* <p className="text-xl text-gray-300/90 font-poppins text-center uppercase">
                    From coatings and textiles <br />
                    to food packaging and electronics
                  </p> */}
                  <h2 className="text-4xl xl:text-5xl xl:pb-4 text-gray-400 font-poppins font-bold">
                    However...
                  </h2>
                  <p className="text-base leading-relaxed text-gray-500 font-poppins xl:text-lg">
                  these special properties also make them nearly
                    impossible to degrade and {" "}
                    <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                      highly toxic
                    </span>. Over time, PFAS accumulate in the environment and pose a threat to
                    public health and the environment itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circles section */}
      <div className="w-full h-[47vw] max-h-[500px] relative mt-24">
          {/* Circle 1 */}
          <div className="w-[50vw] aspect-[6/9] max-w-[500px] mx-auto relative flex items-center justify-center"
          style={{
            willChange: "transform, opacity",
          }}>
            <Circle1 />
          </div>
        <div className="w-full relative">
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-[100px] lg:h-[200px] 2xl:h-[300px] bg-gradient-to-t from-black via-black/60 to-transparent"></div>
    </section>
  );
}
