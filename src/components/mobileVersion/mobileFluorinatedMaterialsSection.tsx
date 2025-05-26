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

interface FluorinatedMaterialsSectionProps {
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
    <div className="relative w-[500px] h-[500px] rounded-full overflow-hidden border-2 border-lightGrey/40 grid place-items-center">
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
          opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.7])
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
    </div>
  );
});

const Circle2 = React.memo(function Circle2() {
  console.log("Rendering Circle2 component");
  return (
    <div
      className="relative w-[550px] h-[550px] grid place-items-center rounded-full overflow-hidden border-2 border-lightGrey/40
    before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-tealAccent before:via-gray-800 before:to-gray-800 before:mix-blend-multiply before:opacity-0 before:"
    >
      <Image
        src={ColorfulGradientRainbowTexture}
        alt="ColorfulGradientRainbowTexture"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 550px"
        style={{ objectFit: "cover" }}
        className="rounded-full "
      />
      <div
        className="w-[110%] h-[110%] min-w-[110%] min-h-[110%]
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
      >
        <EcoliTripletsSVG
          className="w-full h-full opacity-40 mix-blend-screen"
          style={{
            transform: "translate3d(-3%, 2%, 0) scale(1.1) rotate(32deg)",
            willChange: "opacity, transform",
          }}
        />
      </div>
    </div>
  );
});

const Circle3Base = React.memo(function Circle3Base() {
  console.log("Rendering Circle3Base component");
  return (
    <div className="relative w-[400px] h-[400px] md:w-[650px] md:h-[650px] lg:w-[900px] lg:h-[900px] grid place-items-center rounded-full overflow-hidden">
      <Image
        src={IndustrialPollution}
        alt="IndustrialPollution"
        fill
        priority
        style={{ objectFit: "cover" }}
        className="rounded-full"
      />
      <div className="w-full h-full border-2 border-lightGrey opacity-80 absolute inset-0 rounded-full"></div>
      <div
        className="w-[110%] h-[110%] min-w-[110%] min-h-[110%] 
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] rotate-180"
      >
        <EcoliTripletsSVG
          className="w-full h-full opacity-70 invert grayscale mix-blend-overlay"
          style={{
            transform: "translate3d(-2%, 2%, 0)",
            willChange: "opacity, transform",
          }}
        />
      </div>
      <div className="absolute w-full h-full bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-overlay opacity-20"></div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black via-slate-900 to-teal-950/20 mix-blend-multiply opacity-60"></div>
    </div>
  );
});

const Circle4 = React.memo(function Circle4() {
  console.log("Rendering Circle4 component");
  return (
    <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40 grid place-items-center">
      <Image
        src={WaterRepellantFabric}
        alt="WaterRepellantFabric"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        style={{ objectFit: "cover" }}
        className="rounded-full scale-x-[-1]"
      />
      <div className="w-full h-full bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-multiply opacity-60"></div>
      <div
        className="w-[110%] h-[110%] min-w-[110%] min-h-[110%] 
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      >
        <EcoliTripletsSVG
          className="w-full h-full opacity-70 invert mix-blend-color-burn"
          style={{
            transform: "translate3d(-3%, 2%, 0) scale(1.1)",
            willChange: "opacity, transform",
          }}
        />
      </div>
    </div>
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
    <section className={`${className} h-[1700px] w-full relative`}>
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>

      <div className="w-full min-h-screen h-[1030px] sm:h-[900px] relative bg-gradient-to-b bg-teal-950 from-black via-black to-slate-800/70">
        <div className="absolute w-full h-fit top-0 left-0 overflow-hidden bg-gradient-to-b from-black via-black to-transparent ">
          <div className="w-full h-fit max-w-[1280px] mx-auto px-6 pt-24 pb-[40px]">
            {/* TEXT COLUMN */}
            <div className="w-full flex flex-col items-center">
              <h1 className="w-full text-center font-black font-poppins text-3xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
                <span className="text-8xl bg-gradient-to-r from-pink-950 via-pinkAccent to-pink-950 bg-clip-text text-transparent">
                  PFAS{" "}
                </span>
                <br />
                <span className="text-2xl">also known as</span>
                <br />"
              
                <span className="bg-gradient-to-r from-pink-950 via-pinkAccent to-pink-950 bg-clip-text text-transparent box-decoration-clone">
                  Forever Chemicals
                </span>"
                <br />
                <span className="text-xl">
                  {" "}
                  are fluorinated materials that can be found everywhere
                </span>
              </h1>
            </div>

            {/* Content container */}
            <div className="mt-8 flex flex-col gap-8 w-full h-fit">
              {/* Text content */}
              <div className="w-full px-4 h-fit">
                <div className="space-y-4">
                  <p className="text-xl text-gray-300/90 font-poppins text-center uppercase">
                    From coatings and textiles to <br />
                    food packaging and electronics
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
      <div className="absolute block bottom-0 right-0 w-full h-[300px] bg-gradient-to-t from-black via-black/90 to-transparent"/>
                      {/* Circles section */}
                      <div className="w-full absolute bottom-0 left-0 h-fit">

                        <div className="w-full relative -mt-24 sm:translate-y-[300px] h-fit md:hidden">
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
