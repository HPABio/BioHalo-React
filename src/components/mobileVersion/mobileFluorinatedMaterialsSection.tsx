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
          <div className="relative w-full h-full max-w-[1280px] flex flex-col mx-auto px-6 pt-24">
            {/* TEXT COLUMN */}
            <div className="w-full flex flex-col items-center">
              <h1 className="w-full text-center font-black font-poppins bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10 groupleading-none">
                <span className="text-2xl text-gray-500 font-medium capitalize leading-none">
                  Perfluoroalkyl and <br className="block md:hidden" />{" "}
                  polyfluoroalkyl substances
                  <br />
                </span>
                <span className="text-xl text-gray-500 font-poppins font-light leading-snug">
                  also known as
                  <br />
                </span>
                <span className="text-8xl bg-gradient-to-r from-pink-950 via-pinkAccent to-pink-950 bg-clip-text text-transparent leading-tight">
                  PFAS{" "}
                </span>
                <br />
                <span className="text-xl text-gray-500 font-poppins font-light leading-none">
                  {" "}
                  play a crucial role in virtually every major sector of our
                  modern economy. 
                  {/* They are used in... */}
                </span>
              </h1>
            </div>

            {/* Vertical Bento Layout */}
            
            <div className="w-full flex-col gap-8 py-8 hidden">
              {/* First Bento Box - CPU Section */}

              {/* <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  initial={{
                    filter: "blur(0px) brightness(1)",
                  }}
                  whileInView={{
                    filter: generateBrightnessValues(10, 0.8, 1.3),
                    transition: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  }}
                  className="w-full h-full relative"
                  style={{
                    background: `url(${AdobeStockCPU.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                  <motion.div
                    ref={refCPUText}
                    initial={{ filter: "brightness(1)" }}
                    style={{
                      filter: useTransform(
                        useScroll({
                          target: refCPUText,
                          offset: ["start end", "start start"],
                        }).scrollYProgress,
                        [0, 0.4, 0.5, 1],
                        [
                          "brightness(1)",
                          "brightness(3)",
                          "brightness(2)",
                          "brightness(1)",
                        ]
                      ),
                    }}
                    className="absolute bottom-8 right-8"
                  >
                    <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
                      <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
                        electronics
                        <br />
                      </span>
                      production of
                      <br />
                      <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
                        semiconductors &
                      </span>
                    </p>
                  </motion.div>
                </motion.div>
              </div> */}

              {/* Second Bento Box - Aerospace Section */}
              {/* <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  ref={refTurbine}
                  initial={{ filter: "brightness(1) saturate(0.7)" }}
                  style={{
                    background: `url(${JetEngineCloseUpLummiAi.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: useTransform(
                      useScroll({
                        target: refTurbine,
                        offset: ["start end", "center start"],
                      }).scrollYProgress,
                      [0, 0.3, 0.5, 1],
                      [
                        "brightness(1) saturate(0.7)",
                        "brightness(2) saturate(1.2)",
                        "brightness(3) saturate(1)",
                        "brightness(0.8) saturate(0.7)",
                      ]
                    ),
                  }}
                  className="w-full h-full relative"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                  <motion.div
                    ref={refTurbine}
                    initial={{ filter: "brightness(1)" }}
                    style={{
                      filter: useTransform(
                        useScroll({
                          target: refTurbine,
                          offset: ["start end", "start start"],
                        }).scrollYProgress,
                        [0, 0.2, 0.4, 1],
                        [
                          "brightness(1)",
                          "brightness(1.5)",
                          "brightness(2.5)",
                          "brightness(1)",
                        ]
                      ),
                    }}
                    className="absolute bottom-8 left-8"
                  >
                    <p className="text-sm text-slate-300/50 font-black font-poppins text-right">
                      <span
                        className="text-xl text-tealAccent uppercase font-semibold font-poppins"
                        style={{ lineHeight: ".1" }}
                      >
                        components
                      </span>
                      <br />
                      improving
                      <br />
                      <span
                        className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60"
                        style={{ lineHeight: ".3" }}
                      >
                        aerospace
                      </span>
                    </p>
                  </motion.div>
                </motion.div>
              </div> */}

              {/* Third Bento Box - Coating Section */}
              {/* <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  ref={refBottle}
                  className="w-full h-full relative"
                  initial={{
                    rotate: -30,
                    scale: 0.7,
                    opacity: 0,
                    backgroundSize: "70%",
                    filter: "blur(0px) brightness(1)",
                  }}
                  style={{
                    background: `url(${MatteBlackBottleLummiAi.src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    rotate: useTransform(
                      scrollYProgressBottle,
                      [0, 0.6],
                      [-30, 0]
                    ),
                    scale: useTransform(
                      scrollYProgressBottle,
                      [0, 0.4, 0.9, 1],
                      [0.7, 1.1, 1.1, 0.9]
                    ),
                    backgroundSize: useTransform(
                      scrollYProgressBottle,
                      [0, 0.5],
                      ["80%", "100%"]
                    ),
                    opacity: useTransform(
                      scrollYProgressBottle,
                      [0, 0.5, 0.9, 1],
                      [0, 1, 1, 0.1]
                    ),
                    filter: useTransform(
                      scrollYProgressBottle,
                      [0, 0.3, 0.9, 1],
                      [
                        "blur(2px) brightness(0.9)",
                        "blur(0px) brightness(2)",
                        "blur(0px) brightness(1.2)",
                        "blur(2px) brightness(0.3)",
                      ]
                    ),
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, transparent 0%, transparent 40%, black 75%, black 100%)",
                    }}
                  />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-sm text-slate-300/50 font-black font-poppins text-right">
                      sealing and coating
                      <br />
                      <span
                        className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60"
                        style={{ lineHeight: ".3" }}
                      >
                        surfaces and materials
                        <br />
                      </span>
                      <span
                        className="text-xl text-tealAccent uppercase font-semibold font-poppins"
                        style={{ lineHeight: ".1" }}
                      >
                        sealing and coating
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div> */}
            </div>

            {/* Content container */}
            <div className="mt-6 flex flex-col gap-8 w-full">
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
