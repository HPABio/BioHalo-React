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

import ElegantBottleDesignLummiAi from "@/assets/images/LummiAi/Elegant Bottle Design.jpeg";
import FuturisticRocketEngineLummiAi from "@/assets/images/LummiAi/Futuristic Rocket Engine.jpeg";
import IndustrialMachineCloseUpLummiAi from "@/assets/images/LummiAi/Industrial Machine Close-Up.jpeg";
import JetEngineCloseUpLummiAi from "@/assets/images/LummiAi/Jet Engine Close-Up.jpeg";
import JetEngineTurbineCloseUpLummiAi from "@/assets/images/LummiAi/Jet Engine Turbine Close-Up.jpeg";
import LuxuriousSkincareDisplayLummiAi from "@/assets/images/LummiAi/Luxurious Skincare Display.jpeg";
import LuxurySkincareDisplayLummiAi from "@/assets/images/LummiAi/Luxury Skincare Display.jpeg";
import SolitudeInTheRainLummiAi from "@/assets/images/LummiAi/Solitude in the Rain.jpeg";


import LummiCPU from "@/assets/images/VariousImages/LummiCPU.png";
import LummiCPU2 from "@/assets/images/VariousImages/LummiCPU2.png";
import UnsplashCPU from "@/assets/images/VariousImages/UnsplashCPU.png";
import AdobeStockCPU from "@/assets/images/AdobeStock/AdobeStock_1514887767_Preview_CPU.jpeg";
import { url } from "inspector";

interface FluorinatedMaterialsSectionProps {
  stats: any[];
  className?: string;
  debug?: boolean;
}

// Memoized Circle Components
const Circle1 = React.memo(function Circle1() {
  console.log("Rendering Circle1 component");
  const ref = useRef(null);
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "center start"],
  });
  return (
    <motion.div
      ref={ref2}
      initial={{ rotate: 0 }}
      transition={{ duration: 1 }}
      style={{
        rotate: useTransform(scrollYProgress2, [0, 1], [0, -15]),
      }}
      className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-2 border-lightGrey/40 grid place-items-center"
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
          opacity: useTransform(scrollYProgress, [0, 0.6], [0, 1]),
        }}
      >
        <Image
          src={IconToxicSkull}
          alt="IconToxicSkull"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 500px"
          className="w-full h-full object-cover invert grayscale -rotate-[25deg] translate-x-[-7%] translate-y-[-7%]"
        />
      </motion.div>
    </motion.div>
  );
});

export function MobileFluorinatedMaterialsSection({
  stats,
  className = "",
  debug = false,
}: FluorinatedMaterialsSectionProps) {
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["center end", "center start"],
  });

  const shouldRasterize = false;
  const saveToAssets = false;
  if (debug) console.log("Rendering FluorinatedMaterialsSection");

  return (
    <section
      className={`${className} w-full h-full relative bg-gradient-to-b from-black via-black to-slate-900`}
    >
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>

      <div className="w-full h-fit relative bg-gradient-to-b from-black via-black to-transparent">
        <div className="w-full h-fit relative overflow-hidden bg-gradient-to-b from-black via-black to-transparent">
          <div className="relative w-full h-full max-w-[1280px] flex flex-col mx-auto px-6">
            {/* TEXT COLUMN */}
            <div className="w-full flex flex-col items-center">
              <h1 className="w-full text-center font-black font-poppins text-3xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
                <span className="text-8xl bg-gradient-to-r from-pink-950 via-pinkAccent to-pink-950 bg-clip-text text-transparent">
                  PFAS{" "}
                </span>
                <br />
                <span className="text-2xl text-gray-500 font-bold">
                  also known as
                  <br />"
                </span>
                <span className="bg-gradient-to-r from-pink-950 via-pinkAccent to-pink-950 bg-clip-text text-transparent box-decoration-clone">
                  Forever Chemicals
                </span>
                "
                <br />
                <span className="text-xl text-gray-500 font-bold">
                  {" "}
                  are fluorinated materials that can be found everywhere
                </span>
              </h1>
            </div>



            <div className="w-full h-fit min-h-[100px] flex flex-col items-center justify-center gap-4">
            <div className="w-full relative">
                <div 
                  className="w-[86%] aspect-square rounded-full overflow-visible relative left-0 "
                  style={{
                    background: `url(${LuxuriousSkincareDisplayLummiAi.src})`,
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                </div>
                <div className="w-fit h-fit flex items-center justify-center absolute bottom-0 right-0">
                  <p className="text-sm text-slate-300/50 font-black font-poppins" style={{ lineHeight: "1.3" }}>
                    from <br />
                    <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60" style={{ lineHeight: ".3" }}>
                      Protective<br />
                    </span>
                    <span className="text-xl text-tealAccent uppercase font-semibold font-poppins" style={{ lineHeight: ".1" }}>
                      Coatings
                    </span>
                  </p>
                </div>
              </div>

              
              <div className="w-full h-fit relative">
                <div 
                  className="w-[85%] aspect-square rounded-full overflow-visible relative left-0"
                  style={{
                    background: `url(${AdobeStockCPU.src})`,
                    backgroundSize: "88%",
                    backgroundPosition: "40% 50%",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                </div>
                <div className="w-fit h-fit flex items-center justify-center absolute bottom-0 right-0">
                  <p className="text-sm text-slate-300/50 font-black font-poppins" style={{ lineHeight: "1.3" }}>
                    from <br />
                    <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60" style={{ lineHeight: ".3" }}>
                      Protective<br />
                    </span>
                    <span className="text-xl text-tealAccent uppercase font-semibold font-poppins" style={{ lineHeight: ".1" }}>
                      Coatings
                    </span>
                  </p>
                </div>
              </div>

             
              <div className="w-full h-fit relative">
                <div 
                  className="w-full aspect-square rounded-full overflow-visible relative"
                  style={{
                    background: `url(https://plus.unsplash.com/premium_photo-1683120972279-87efe2ba252f?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                </div>
                <div className="w-fit h-fit flex items-center justify-center absolute bottom-0 right-0">
                  <p className="text-sm text-slate-300/50 font-black font-poppins" style={{ lineHeight: "1.3" }}>
                    from <br />
                    <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60" style={{ lineHeight: ".3" }}>
                      Protective<br />
                    </span>
                    <span className="text-xl text-tealAccent uppercase font-semibold font-poppins" style={{ lineHeight: ".1" }}>
                      Coatings
                    </span>
                  </p>
                </div>
              </div>
            </div>



            {/* Content container */}
            <div className="mt-8 flex flex-col gap-8 w-full">
              {/* Text content */}
              <div className="w-full px-4">
                <div className="space-y-4">
                  <p className="text-xl text-gray-300/90 font-poppins text-center uppercase">
                    From coatings and textiles <br />
                    to food packaging and electronics
                  </p>
                  <p className="text-base pt-4 leading-relaxed text-gray-500 font-poppins">
                    Due to their unique properties, like heat resistance and
                    water repellency, they are used in a wide range of products.
                    However, these special properties also make them nearly
                    impossible to degrade and <br />{" "}
                    <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                      highly toxic
                    </span>
                    . PFAS accumulate in the environment and pose a threat to
                    public health and the environment itself.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Circles section */}
      <div className="w-full h-fit relative">
        <div className="w-full relative sm:translate-y-[300px] md:hidden">
          {/* Circle 1 */}
          <div className="w-[250px] h-[250px] sm:w-[550px] sm:h-[550px] mx-auto mb-8 rotate-45">
            <Circle1 />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 w-full h-[100px] bg-gradient-to-t from-black via-black/60 to-transparent"></div>
    </section>
  );
}
