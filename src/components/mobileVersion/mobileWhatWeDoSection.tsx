import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import {
  StatsBox,
  StaticStatsBox,
  SimpleStatsBox,
} from "@/components/ui/StatsBox";
import { MovingAtom } from "@/components/ui/MovingAtom";
import WaterColorReveal from "@/components/WaterColorReveal";
import EnzymeImage2 from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";
import EcoliTripletsPNG from "@/assets/images/BluePrintPNGs/E.coli.png";

import BGFabricTealPink from "@/assets/images/BGImages/BGFabricTealPink_222564810.png";
import MeshFabric from "@/assets/images/BGImages/Mesh-fabric_1020623350.png";
import LightBGWithDroplets from "@/assets/images/AdobeStock/AdobeStock_291137317.jpeg";

import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import beaker2 from "@/assets/images/BluePrintSVG/beaker-product.svg";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";
import BeakerHalfAndHalf from "@/assets/images/BluePrintPNGs/Beaker-half-and-half.png";

interface MobileWhatWeDoSectionProps {
  stats: any[];
  className?: string;
  debug?: boolean;
}

export const MobileWhatWeDoSection = ({
  stats,
  className,
  debug = false,
}: MobileWhatWeDoSectionProps) => {
  if (debug) console.log("Rendering MobileWhatWeDoSection");

  const refmWWD = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refmWWD,
    offset: ["center end", "start start"],
  });

  return (
    <section
      className={`${className} overflow-visible z-20 border-2 border-blue-300/0 mx-auto`}
    >
      <div className="absolute top-0 left-0 w-full overflow-hidden">
        <div
          className="relative w-full h-full border-2 border-blue-300/0 translate-y-[-30%]
          [mask-image:linear-gradient(to_bottom_right,black,black,transparent)]"
        >
          <Image
            src={LightBGWithDroplets}
            alt="LightBGWithDroplets"
            className="w-full h-full object-contain -scale-x-100 mix-blend-overlay opacity-20
            [mask-image:linear-gradient(to_bottom,black,black,transparent)]"
          />
        </div>
      </div>
      <div className="max-w-[800px]  mx-auto px-10 pt-12 border-2 border-red-500/0 ">
        {/* Title */}

        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={6}
          hoverDuration={2}
          shouldRotate={true}
          rotationDuration={45}
          shouldScale={true}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(225,12,115,0.7)" //pink
          className="absolute bg-red-500/0 top-[10%] left-[50%] translate-x-[-1220%] translate-y-[-10%] bg-pinkAccent"
        />

        <div className="w-full sm:w-full bg-red-500/0  relative z-10">
          <h2
            className="relative text-center font-black font-poppins text-2xl 
            border-2 border-blue-300/0
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
            bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent 
            pb-1 leading-tight"
          >
            <span
              className="font-poppins font-bold flex items-center justify-center mb-2 
              sm:mt-12 text-black text-6xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-10xl 2xl:text-11xl w-full 
              sm:w-[600px] md:w-[800px] lg:w-[1000px] xl:w-[1200px] 2xl:w-[1400px] mx-auto"
            >
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[1em] w-auto -ml-3 sm:ml-8"
              />
              BioHalo
            </span>
          </h2>
    
          <h2
            className="relative text-center font-black font-poppins text-2xl 
            border-2 border-blue-300/0
            sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl
            bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent 
            pb-1 leading-tight"
          >
            offers a sustainable <br />
            alternative to <br />
          </h2>
          <h2
            className="relative text-center font-black font-poppins text-2xl 
            bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent"
          >
            <span
              className="uppercase text-wrap box-decoration-clone text-3xl 
              bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-pinkAccent/70 to-slate-800/80 "
            >
              forever chemicals
            </span>
          </h2>
        </div>

        <div className="w-full h-auto overflow-hidden px-12 border-2 border-red-500/0 -mt-12 sm:-mt-28  pb-4">
          <Image
            src={EcoliTripletsPNG}
            alt="EcoliTripletsPNG"
            className="w-full h-full object-contain grayscale opacity-40 sm:opacity-20 0 -rotate-12 brightness-[0.1]"
          />
        </div>

        {/* Subtitle */}
        <div className="w-full ">
          <h2 className="text-gray-800/60 text-2xl  font-poppins text-center sm:leading-tight ">
            through our <br />
            microbial-based
            <br />
            biohalogenation platform
          </h2>
        </div>

        {/* Text */}
        <div className="w-full h-full bg-red-500/0 mt-6 relative">
          <p className="text-gray-500/80 text-1xl font-poppins text-center">
            we can selectively halogenate organic{" "}
            <br className="hidden sm:block" /> molecules, opening up new
            possibilities for <br className="hidden sm:block" />
            <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent">
              fluorine
            </span>
            -based chemistry.
          </p>
          <div className="w-full h-full border-2 border-blue-300/0 relative mt-12">
            <MovingAtom
              width={80}
              height={80}
              hoverAmplitude={4}
              hoverDuration={4}
              shouldRotate={false}
              rotationDuration={20}
              shouldScale={false}
              scaleRange={[0.9, 1.8]}
              scaleDuration={24}
              color="rgba(18,110,119,1)" //teal
              className="absolute top-[-0%] left-[50%] translate-x-[-50%] translate-y-[0%] 
              opacity-[0.3] rotate-[19deg] sm:scale-[1.8] sm:translate-y-[30%]"
            />
            <Image
              src={EnzymeImage2}
              alt="EnzymeImage2"
              className="w-full h-full object-cover relative z-10"
            />
          </div>
        </div>

        <MovingAtom
          width={580}
          height={580}
          hoverAmplitude={4}
          hoverDuration={4}
          shouldRotate={false}
          rotationDuration={5}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="absolute top-[105%] left-[99%] 
          translate-x-[-50%] translate-y-[-150%] opacity-[0.07] z-5"
        />
        <MovingAtom
          width={100}
          height={100}
          hoverAmplitude={7}
          hoverDuration={16}
          shouldRotate={false}
          rotationDuration={20}
          shouldScale={false}
          scaleRange={[0.9, 1.8]}
          scaleDuration={24}
          color="rgba(18,110,119,1)" //teal
          className="absolute top-[50%] right-[50%] 
          translate-x-[-80%] translate-y-[280%] opacity-[0.3] z-5
          sm:translate-x-[-165%] sm:translate-y-[250%]"
        />

        {/* Text Section */}
        <div className="bg-black/0 text-gray-800/70 w-full relative border-2 border-blue-300/0 -mt-6">
          {/* Header Section */}
          <div className=" bg-red-500/0 relative">
            {/* Top Text Section */}
            <div className="space-y-4">
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-2 capitalize opacity-1 text-center pb-10
                bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent"
              >
                <span className="text-2xl sm:text-3xl ">
                  We explore, design,
                  <br />
                  and produce, unmatched
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins sm:text-5xl"
                >
                  new-to-market{" "}
                </span>
                <br className="hidden sm:block xl:hidden" />
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins"
                ></span>
                products
              </h1>
              <div className="w-fit h-full border-2 border-blue-300/0 relative mx-auto ">
                <p className="text-2xl sm:text-3xl sm:leading-tight font-poppins text-center sm:py-4">
                  Our{" "}
                  <span className="font-bold ">
                    Bio-
                    <span
                      className="bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent 
                        text-4xl"
                    >
                      F
                    </span>
                    -Polymers
                  </span>{" "}
                  do <br />
                  not compromise <br />
                  performance
                  <br />
                  while also being safe <br />
                  and sustainable
                </p>
                <p className="text-lg max-w-md pt-8 sm:pt-12 leading-relaxed sm:mx-auto sm:text-center sm:leading-snug">
                  BioHalos revolutionary enzyme-based biohalogenation platform
                  offers you near limitless possibilities for{" "}
                  <span className="bg-gradient-to-tr from-pinkAccent to-red-900/80 bg-clip-text text-transparent ">
                    fluorine
                  </span>
                  -enhanced compound development.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute w-[800px] h-[400px] 
          bottom-[-11%] left-[30%]"
        ></div>
      </div>

      <div className="relative bottom-0 left-0 w-full h-[60px]"></div>
      <div className="relative bottom-0 left-0 w-[80%] h-[200px] bg-red-600/0 overflow-visible mx-auto pl-12">
        <MovingAtom
          width={80}
          height={80}
          hoverAmplitude={7}
          hoverDuration={5}
          shouldRotate={true}
          rotationDuration={25}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="absolute top-[50%] left-[50%] 
          translate-x-[-40%] translate-y-[-150%] 
          lg:translate-x-[200%] lg:-translate-y-[50%] opacity-90 z-5"
        />
        <MovingAtom
          width={80}
          height={80}
          hoverAmplitude={7}
          hoverDuration={6}
          shouldRotate={true}
          rotationDuration={20}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(18,110,119,1)" //teal
          className="absolute top-[10%] left-[50%] translate-x-[50%] translate-y-[-80%] 
          lg:translate-x-[350%] lg:-translate-y-[500%] opacity-90 z-5"
        />

        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={7}
          hoverDuration={7}
          shouldRotate={true}
          rotationDuration={15}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="absolute top-[20%] left-[50%] translate-x-[160%] translate-y-[20%] 
          lg:translate-x-[100%] lg:-translate-y-[690%] opacity-90 z-5"
        />

        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={7}
          hoverDuration={5}
          shouldRotate={true}
          rotationDuration={16}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(18,110,119,1)" //teal
          className="absolute top-[51%] left-[55%] translate-x-[-10%] translate-y-[-10%] 
          lg:translate-x-[300%] lg:-translate-y-[800%] opacity-90 z-5"
        />
        <div
          className="relative bottom-0 left-[50%] 
          translate-x-[-50%] translate-y-[-54px] 
          lg:translate-x-[-30%] lg:translate-y-[-380px] 
          w-[300px] h-[300px] lg:w-[800px] lg:h-[800px]"
          style={{
            backgroundImage: `url(${BeakerHalfAndHalf.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>
    </section>
  );
};
