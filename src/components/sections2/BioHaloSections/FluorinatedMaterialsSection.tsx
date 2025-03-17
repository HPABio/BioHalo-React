import React, { useRef, useEffect, useMemo } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import {
  StatsBox,
  StaticStatsBox,
  SimpleStatsBox,
} from "@/components/ui/StatsBox";
import { TransitionSectionOne } from "@/components/sections2/BioHaloSections/TransitionSectionOne";
import EcoliTripletsSVG from "../../ui/EcoliTripletsSVG";
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
import IndustrialPollution from "@/assets/images/BGImagesTest/IndustrialPollution.png";


interface FluorinatedMaterialsSectionProps {
  stats: any[];
  className?: string;
  debug?: boolean;
}

// Memoized Circle Components
const Circle1 = React.memo(function Circle1() {
  console.log("Rendering Circle1 component");
  return (
    <div
      className="relative w-[350px] h-[350px] rounded-full overflow-hidden border-2 border-lightGrey/40 grid place-items-center">
      <Image
        src={TexturedGlassSurface}
        alt="TexturedGlassSurface"
        sizes="(max-width: 768px) 100vw, 350px"
        className="w-full h-full object-cover"
      />
      <div
        className="absolute w-[110%] h-[110%] min-w-[110%] min-h-[110%] 
        top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] "
      >
        <EcoliTripletsSVG
          className="w-full h-full opacity-40 mix-blend-screen"
          style={{
            willChange: "opacity, transform",
            transform: "translate3d(-3%, 2%, 0) scale(1.1)",
          }}
        />
      </div>
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
            transform: "translate3d(-3%, 2%, 0) scale(1.1)",
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
    <div className="relative w-[900px] h-[900px] grid place-items-center rounded-full overflow-hidden">
      <Image
        src={IndustrialPollution}
        alt="IndustrialPollution"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 900px"
        style={{ objectFit: "cover" }}
        className="rounded-full"
      />
      <div className="w-full h-full border-2 border-lightGrey opacity-80 absolute inset-0"></div>
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
      <div className="absolute w-full h-full bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-overlay opacity-70"></div>
      <div className="absolute w-full h-full bg-gradient-to-t from-black via-tealAccent to-mintAccent/0 mix-blend-multiply opacity-1"></div>
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

export function FluorinatedMaterialsSection({
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
    
    <section className={`${className} relative`}>
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>

        <div className="w-full md:h-[1200px] lg:h-[1400px]  relative">
          <div className="w-full h-full relative bg-gradient-to-b bg-teal-950 from-black via-black/70 to-black">
            
          </div>

        <div className="absolute w-full h-full top-0 left-0 overflow-hidden xl:overflow-visible xl:bg-transparent bg-black  ">
          <div className="w-full h-full max-w-[1280px] mx-auto px-14  pt-[50px] -mb-[0px]">
            {/* TEXT COLUMN */}
            <div className="w-full bg-red-500/0">
              <h1 className="max-w-[720px] font-black font-Arial text-4xl md:text-6xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
                <span className="">We encounter</span>
                <br />
                <span className="absolute bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent blur-sm opacity-50">
                  Fluorinated{" "}
                </span>
                <span className="bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                  Fluorinated{" "}
                </span>
                <span className=""> Materials</span>
                <br />
                in our lives every day
              </h1>
            </div>

        {/* Flexbox container */}
            <div className="mt-0 flex flex-row gap-8 min-w-[1280px] lg:h-full h-[1000px] ">
              {/* left column */}
              <div className="w-1/2">
                <div className="space-y-4 ">
                  <p className="text-2xl md:text-3xl text-gray-300">
                    From coatings and textiles to <br />
                    food packaging and electronics, <br />
                    <span className="relative group">
                      <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent cursor-help">
                        PFAS
                      </span>
                      <span className="invisible group-hover:visible absolute left-0 top-full mt-2 w-64 p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg text-sm text-gray-800 transition-all duration-200 ease-in-out">
                      <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent cursor-help">
                        PFAS
                      </span> are Per- and PolyfluoroAlkyl Substances also known as "<span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent cursor-help">
                      forever chemicals
                      </span>"
                      </span>
                    </span>{" "}
                    are everywhere.
                  </p>
                  <p className="text-lg max-w-md pt-4 leading-relaxed text-gray-500">
                    Due to their unique properties, like heat resistance, water
                    repellency, and chemical stability, these so called "<span className="bg-gradient-to-tr from-fuchsia-700/70 via-pinkAccent to-red-900/80 bg-clip-text text-transparent">
                  foever chemicals
                </span>" are highly sought
                    after and used in a wide range of materials and technologies. From industrial
                    applications to consumer products, fluorinated-compounds are everywhere.
                  </p>
                </div>
              </div>

              {/* right column */}
              <div className="w-1/2 h-[1400px] bg-green-600/0 relative lg:mt-0 -mt-32">
                {/* Circle 1 */}
                <div className="w-[350px] h-[350px] absolute top-[-10%] right-[0%] ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
                  <Circle1 />
                </div>

                {/* Circle 2 */}
                <div className="w-[550px] h-[550px] absolute top-[0] right-[18%] ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
                  <Circle2 />
                </div>



                {/* Circle 3 */}
                <div
                  className="w-[900px] h-[900px] absolute bottom-[20%] right-[45%] ml-auto translate-y-[15%] translate-x-[0%] bg-green-500/0
                  lg:translate-y-[15%] lg:translate-x-[5%]"
                  style={{ willChange: "transform" }}
                >
                  <motion.div
                    className="relative w-[900px] h-[900px]"
                    ref={ref2}
                  >
                    <Circle3Base />

                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      {/* Blurred Title */}
                      <SimpleStatsBox
                        classNamesContainer="w-fit h-fit mt-14"
                        classNamesTitle="lg-9xl w-[800px] scale-[2.2] blur-sm opacity-35 text-center text-9xl font-Arial
                                    font-black -mb-8 bg-gradient-to-tl from-lightGrey via-gray-400 to-lightGrey/70 bg-clip-text text-transparent"
                        classNamesSubTitle="text-center text-lightGrey/60 text-3xl font-bold mt-20 capitalize"
                        stat={stats[4]}
                        scrollYProgress={scrollYProgress}
                        scrollEndThreshold={0.4}
                        index={4}
                      />

                      {/* Primary Title */}
                        <SimpleStatsBox
                          classNamesContainer="absolute w-fit h-fit mt-14"
                          classNamesTitle="lg-9xl w-[800px] scale-[2.2] text-center text-9xl font-Arial
                                  font-black -mb-8 bg-gradient-to-tl from-lightGrey via-gray-400 to-lightGrey/70 bg-clip-text text-transparent"
                          classNamesSubTitle="text-center text-lightGrey/60 text-3xl font-bold mt-20 capitalize"
                          stat={stats[4]}
                          scrollYProgress={scrollYProgress}
                          scrollEndThreshold={0.4}
                          index={4}
                        />
                    </div>
                  </motion.div>
                </div>

                {/* Circle 4 */}
                <div className="block xl:hidden w-[700px] h-[700px] absolute top-[50%] left-0 translate-y-[35%] -translate-x-[120%]">
                  <div className="relative w-[700px] h-[700px] rounded-full overflow-hidden border-2 border-lightGrey/40 grid place-items-center">
                    <Image
                      src={WaterRepellantFabric}
                      alt="WaterRepellantFabric"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, 700px"
                      style={{ objectFit: "cover" }}
                      className="w-full h-full absolute inset-0"
                    />

                    <div className="opacity-60 absolute inset-0 bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-multiply"></div>
                    <div className="opacity-10 w-full h-full flex items-center justify-center">
                      {/* <EcoliTripletsSVG className="w-[100%] h-[100%] translate-x-[-3%] translate-y-[2%] opacity-40 mix-blend-screen" /> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>
      <div className="absolute hidden lg:block bottom-0 right-0 w-full h-[200px] bg-gradient-to-t from-black via-black/90 to-transparent"></div>
      {/* <div className="w-full h-[100px] absolute bottom-0 left-0 bg-gradient-to-t from-black/0 via-black/70 to-black/100"/> */}
    </section>
  );
}

export function FluorinatedMaterialsSectionBACKUP({
  stats,
  className = "",
}: FluorinatedMaterialsSectionProps) {
  const ref2 = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });

  return (
    <section className={`${className} relative`}>
      <div className="absolute top-0 right-0 w-full h-[100px] bg-gradient-to-t from-black/0 via-black/70 to-black"></div>

      <div className="hidden bottom-0 right-0 w-full h-full bg-gradient-to-t from-black via-black/70 to-tealAccent/0"></div>

      <div className="w-full h-[1700px] xl:h-[2000px]  relative border-2 border-red-500/0 ">
        <div className="w-full h-full relative">
          <div className=" w-full h-[75%] xl:h-[60%] top-0 left-0 bg-black" />
          <TransitionSectionOne
            className="absolute w-screen h-[800px] xl:block hidden bottom-0 left-0 
                      rotate-180 overflow-hidden  "
          />
        </div>

        <div className="absolute w-full h-full top-0 left-0 overflow-hidden xl:overflow-visible xl:bg-transparent bg-black  ">
          <div className="w-full h-full max-w-[1280px] mx-auto px-14  pt-[100px] -mb-[0px]">
            {/* TEXT COLUMN */}
            <div className="w-full bg-red-500/0">
              <h1 className="max-w-[720px] font-black font-Arial text-4xl md:text-6xl bg-gradient-to-br from-mintAccent to-tealAccent bg-clip-text text-transparent pb-10">
                <span className="">We encounter</span>
                <br />
                <span className="absolute bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent blur-sm opacity-50">
                  Fluorinated{" "}
                </span>
                <span className="bg-gradient-to-tr from-red-600 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                  Fluorinated{" "}
                </span>
                <span className=""> Materials</span>
                <br />
                in our lives every day
              </h1>
            </div>

            <div className="mt-0 flex flex-row gap-8 min-w-[1280px] lg:h-full h-[1000px] ">
              {/* left column */}
              <div className="w-1/2">
                <div className="space-y-4 ">
                  <p className="text-2xl md:text-3xl text-gray-300">
                    From coatings and textiles to <br />
                    food packaging and electronics, <br />
                    <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
                      PFAS
                    </span>{" "}
                    are everywhere.
                  </p>
                  <p className="text-lg max-w-md pt-4 leading-relaxed text-gray-500">
                    Due to their unique properties, like heat resistance, water
                    repellency, and chemical stability, they are highly sought
                    after and used in a wide range of products. From industrial
                    applications to consumer products, PFAS are everywhere.
                  </p>
                </div>
              </div>

              {/* right column */}
              <div className="w-1/2 h-[1400px] bg-green-600/0 relative lg:mt-0 -mt-32">
                {/* Circle 1 */}
                <div className=" w-[350px] h-[350px] absolute top-[-10%] right-[0%] ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
                  <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40">
                    <Image
                      src={TexturedGlassSurface}
                      alt="RainJacketMist"
                      className="object-cover w-full h-full"
                    />
                    <div className="opacity-20 absolute h-full w-full rounded-full left-0 top-0 bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-multiply"></div>
                  </div>
                  <div className="opacity-30 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
                    {/* <EcoliTripletsSVG className="w-[100%] h-[100%] scale-[1.1] translate-x-[-3%] translate-y-[2%] opacity-40 mix-blend-screen" /> */}
                  </div>
                </div>
                {/* Circle 2 */}
                <div className=" w-[550px] h-[550px] absolute top-[0] right-[18%] ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
                  <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40">
                    <Image
                      src={ColorfulGradientRainbowTexture}
                      alt="WomanWhiteRainJacket"
                      className="w-full h-full object-cover"
                    />
                    <div className="opacity-0 absolute h-full w-full rounded-full left-0 top-0 bg-gradient-to-tr from-tealAccent via-gray-800 to-gray-800 mix-blend-multiply"></div>
                  </div>
                  <div className="opacity-60 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
                    {/* <EcoliTripletsSVG className="w-[100%] h-[100%] scale-[1.1] translate-x-[-3%] translate-y-[2%] opacity-40 mix-blend-screen" /> */}
                  </div>
                </div>

                <div
                  className="hidden xl:block w-[700px] h-[700px] absolute 
                        bottom-[-10%] right-[120%] ml-auto translate-y-[20%] translate-x-[5%] 
                        opacity-70 bg-black/70 rounded-full blur-[25px]"
                />

                {/* Circle 4 V2 */}
                <div className=" w-[1200px] h-[1200px] hidden absolute bottom-[-10%] right-[120%] ml-auto translate-y-[40%] -translate-x-[6%] bg-green-500/0">
                  <div className="opacity-1 scale-x-[-1] absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40 ">
                    <Image
                      src={WaterRepellantFabric}
                      alt="WaterRepellantFabric"
                      className="object-cover w-full h-full "
                    />
                    <div className="opacity-60 absolute h-full w-full rounded-full left-0 top-0 bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-multiply"></div>
                  </div>
                  <div className="opacity-10 absolute h-full w-full rounded-full left-0 top-0 overflow-hidden flex items-center justify-center">
                    {/* <EcoliTripletsSVG className="w-[100%] h-[100%] scale-[1.1] translate-x-[-3%] translate-y-[2%] opacity-40 mix-blend-screen" /> */}
                  </div>
                </div>

                {/* Circle 3 */}
                <div className=" w-[900px] h-[900px] absolute bottom-[20%] right-[45%] ml-auto translate-y-[15%] translate-x-[5%] bg-green-500/0">
                  <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/0 ">
                    <Image
                      src={Droplets1}
                      alt="Droplets1"
                      className="object-cover w-full h-full"
                    />
                    <div
                      className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 
                              bg-gradient-to-tr from-tealAccent via-tealAccent/80 to-tealAccent/40 mix-blend-color-multiply"
                    />
                    <div
                      className="opacity-80 absolute h-full w-full rounded-full left-0 top-0 
                              bg-gradient-to-tr from-black via-black/80 to-black mix-blend-color-multiply"
                    />
                    <div
                      className="opacity-80 absolute h-full w-full rounded-full left-0 top-0 
                              border-2 border-lightGrey"
                    />
                  </div>
                  <div className="opacity-1 absolute h-[99%] w-[99%] rounded-full left-0 top-0 overflow-hidden flex items-center justify-center">
                    {/* <EcoliTripletsSVG className="w-[100%] h-[100%] scale-[1.1] translate-x-[-3%] translate-y-[2%] opacity-70 invert mix-blend-color-burn" /> */}
                  </div>
                  <motion.div
                    ref={ref2}
                    className="opacity-1 absolute h-full w-full rounded-full left-0 top-[-5%] overflow-visible flex items-center justify-center"
                  >
                    <SimpleStatsBox
                      classNamesContainer="w-fit  h-fit mt-14"
                      classNamesTitle="lg-9xl w-[800px] mt-5 scale-[2.4] blur-sm opacity-35 text-center lg:text-9xl md:text-8xl 
                              font-bold mb-6 bg-gradient-to-tl from-lightGrey to-lightGrey/40 bg-clip-text text-transparent"
                      classNamesSubTitle="text-center text-lightGrey/60 text-3xl font-bold mt-20 capitalize"
                      stat={stats[4]}
                      scrollYProgress={scrollYProgress}
                      scrollEndThreshold={0.6}
                      index={4}
                      ratchet={false}
                    />
                    <SimpleStatsBox
                      classNamesContainer="absolute w-fit  h-fit mt-14"
                      classNamesTitle="lg-9xl w-[800px] mt-5 scale-[2.4] text-center lg:text-9xl md:text-8xl 
                              font-bold mb-6 bg-gradient-to-br from-lightGrey to-lightGrey/40 bg-clip-text text-transparent"
                      classNamesSubTitle="text-center text-lightGrey/60 text-3xl font-bold mt-20 capitalize"
                      stat={stats[4]}
                      scrollYProgress={scrollYProgress}
                      scrollEndThreshold={0.6}
                      index={4}
                      ratchet={false}
                    />
                  </motion.div>

                  <motion.div className="opacity-1 hidden  h-full w-full rounded-full left-0 top-[-5%] overflow-visible  items-center justify-center">
                    <StaticStatsBox
                      classNamesContainer="w-fit  h-fit mt-14"
                      classNamesTitle="lg-9xl w-[800px] mt-5 scale-[2.4] blur-sm opacity-35 text-center lg:text-9xl md:text-8xl 
                              font-bold mb-6 bg-gradient-to-tl from-lightGrey to-lightGrey/40 bg-clip-text text-transparent"
                      classNamesSubTitle="text-center text-lightGrey/60 text-3xl font-bold mt-20 capitalize"
                      stat={stats[4]}
                    />
                    <StaticStatsBox
                      classNamesContainer="absolute w-fit  h-fit mt-14"
                      classNamesTitle="lg-9xl w-[800px] mt-5 scale-[2.4] text-center lg:text-9xl md:text-8xl 
                              font-bold mb-6 bg-gradient-to-br from-lightGrey to-lightGrey/40 bg-clip-text text-transparent"
                      classNamesSubTitle="text-center text-lightGrey/60 text-3xl font-bold mt-20 capitalize"
                      stat={stats[4]}
                    />
                  </motion.div>
                </div>

                {/* Circle 4 */}
                <div
                  className="block xl:hidden w-[700px] h-[700px] absolute top-[50%] left-0
                      translate-y-[35%] -translate-x-[120%]
                      "
                >
                  <div className="opacity-1 absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey/40 ">
                    <Image
                      src={WaterRepellantFabric}
                      alt="WaterRepellantFabric"
                      className="object-cover w-full h-full "
                    />
                    <div className="opacity-60 absolute h-full w-full rounded-full left-0 top-0 bg-gradient-to-tr from-tealAccent via-tealAccent to-mintAccent mix-blend-multiply"></div>
                  </div>
                  <div className="opacity-10 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="w-full h-[100px] absolute bottom-0 left-0 bg-gradient-to-t from-black/0 via-black/70 to-black/100"/> */}
    </section>
  );
}
