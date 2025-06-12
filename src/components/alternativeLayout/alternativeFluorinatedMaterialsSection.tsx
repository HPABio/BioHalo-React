"use client";

import React, { useRef, useEffect, useMemo } from "react";
import { useScroll, motion, useTransform, useInView } from "framer-motion";
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



// Memoized Circle Components
const Circle1 = React.memo(function Circle1() {
  console.log("Rendering Circle1 component");
  const ref = useRef(null);
  const isInView = useInView(ref, {once: true});
  console.log("Circle1 isInView", isInView);
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


  export function AlternativeFluorinatedMaterialsSection({ className }: { className?: string }) {
    const refSkull1 = useRef(null);
    const isInView = useInView(refSkull1, {once: true});
    console.log("Skull1 isInView", isInView);
  const { scrollYProgress: scrollYProgressSkull1 } = useScroll({
    target: refSkull1,
    offset: ["center end", "center start"],
  })
  return (
    <section
      className={`${className} w-full h-full  relative bg-gradient-to-b from-black via-black to-slate-900`}>
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>
      <div className="w-full max-w-[580px] mx-auto h-fit relative bg-gradient-to-b from-black via-black to-transparent ">
        <div
          className="w-full h-fit relative overflow-hidden 
        bg-gradient-to-b from-black via-black to-transparent">
          <div className="relative w-full h-full max-w-[1280px] flex flex-col mx-auto px-6">
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
      <div className="w-full h-[47vw] max-h-[500px] relative mt-24 bg-black">
        <div className="w-full h-[47vw] max-h-[500px] mt-12 absolute top-0 left-0 z-0
        opacity-30 lg:opacity-50 xl:max-w-[1400px] xl:left-1/2 xl:translate-x-[-50%]"
        style={{
          backgroundImage: `url(${IndustrialPollution.src})`,
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundBlendMode: "multiply",
        }}>
           <div className="w-full h-1/2 lg:h-2/3
           bg-gradient-to-b from-black via-black/80 to-transparent md:block hidden"/>
           <div className="w-full h-[90px] sm:h-1/2 absolute top-0 left-0 
           bg-gradient-to-b from-black via-black/50 to-transparent md:hidden"/>
           <div className="w-[100px] h-full absolute top-0 left-0 rotate-6 translate-x-[-25%]
           bg-gradient-to-r from-black via-black/70 to-transparent xl:block hidden"/>
           <div className="w-[100px] h-full absolute top-0 right-0 -rotate-6 translate-x-[25%]
           bg-gradient-to-l from-black via-black/70 to-transparent xl:block hidden"/>
        </div>
          {/* Circle 1 */}
          <div className="absolute top-0 left-[50%] translate-x-[-55%] w-[50vw] aspect-[6/9] max-w-[500px] mx-auto flex items-center justify-center z-10"
          style={{willChange: "transform, opacity",}}>
            {/* <Circle1 /> */}
            <motion.div
                ref={refSkull1}
                initial={{ rotate: 0 }}
                transition={{ duration: 1 }}
                style={{
                  rotate: useTransform(
                    isInView ? scrollYProgressSkull1 : scrollYProgressSkull1, [0, 1], [0, -15]),
                  y: useTransform(isInView ? scrollYProgressSkull1 : scrollYProgressSkull1, [0, 0.6], [0, -100]),
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
                  className="absolute w-[110%] h-[110%] min-w-[110%] min-h-[110%] 
                  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 
                  mix-blend-multiply"
                  style={{
                    opacity: useTransform(scrollYProgressSkull1, [0, 0.6], [0, 1]),
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
          </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-[30px] sm:h-[100px] lg:h-[200px] bg-gradient-to-t from-black via-black/60 to-transparent z-10"></div>
    </section>
  );
}
