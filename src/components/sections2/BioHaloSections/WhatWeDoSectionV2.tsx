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

  const refWWD = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refWWD,
    offset: ["center end", "start start"],
  });

  return (
    <section
      className={`${className} overflow-visible z-20 border-2 border-blue-300/0 mx-auto`}
    >
      <div className="absolute top-[-10%] left-0 w-full">
        <div
          className="relative w-full h-full border-2 border-blue-300/0
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
      <div className="max-w-[800px] mx-auto px-10 border-2 border-red-500/0 ">
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

        <div className="w-full sm:w-full bg-red-500/0 xl:mt-10 relative z-10">
          <h2
            className="relative text-center font-black font-poppins text-2xl bg-gradient-to-tl from-tealAccent to-tealAccent/60 bg-clip-text text-transparent 
          pb-6"
          >
            <span
              className="font-poppins font-bold flex items-center mb-2 sm:mt-12
          text-black text-6xl w-full sm:w-[400px] mx-auto"
            >
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[1em] w-auto -ml-3 sm:ml-8"
              />
              BioHalo
            </span>
            <br />
            offers a sustainable <br />
            alternative to <br />
            <span
              className="uppercase text-wrap box-decoration-clone text-3xl
            bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-pinkAccent/70 to-slate-800/80 "
            >
              forever chemicals
            </span>
          </h2>
        </div>

        <div className="w-full h-auto overflow-hidden px-12 border-2 border-red-500/0 -mt-8 ">
          <Image
            src={EnzymeImage2}
            alt="EnzymeImage2"
            className="w-full h-full object-cover scale-[1.1]"
          />
        </div>

        {/* Subtitle */}
        <div className="w-full ">
          <h2 className="text-gray-800/60 text-2xl  font-poppins text-center">
            through our microbial-based biohalogenation platform
          </h2>
        </div>

        {/* Text */}
        <div className="h-[200px] w-full bg-red-500/0 my-6 relative">
          <p className="text-gray-500/80 text-1xl font-poppins text-center  ">
            we can selectively halogenate organic molecules, opening up new
            possibilities for{" "}
            <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent">
              fluorine
            </span>
            -based chemistry.
          </p>
          <div className="absolute w-[100vw] max-w-[800px] h-fit inset-0 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-70%] z-[-1]">
            <Image
              src={EcoliTripletsPNG}
              alt="EcoliTripletsPNG"
              className="w-full h-full object-contain grayscale opacity-50 -rotate-12"
            />
          </div>
        </div>

        <MovingAtom
          width={580}
          height={580}
          hoverAmplitude={7}
          hoverDuration={7}
          shouldRotate={false}
          rotationDuration={5}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,0.1)" //pink
          className="absolute top-[85%] left-[99%] 
          translate-x-[-50%] translate-y-[-150%] 
          lg:translate-x-[200%] lg:-translate-y-[50%] opacity-90 z-5"
        />
        <MovingAtom
          width={180}
          height={180}
          hoverAmplitude={7}
          hoverDuration={11}
          shouldRotate={false}
          rotationDuration={20}
          shouldScale={false}
          scaleRange={[0.9, 1.8]}
          scaleDuration={24}
          color="rgba(18,110,119,0.4)" //teal
          className="absolute top-[55%] left-[-30%] translate-x-[50%] translate-y-[-80%] 
          lg:translate-x-[350%] lg:-translate-y-[500%] opacity-90 z-5"
        />

        {/* Text Section */}
        <div className="bg-black/0 text-gray-800/70 pt-0 mt-32 sm:mt-0 w-full relative ">
          {/* Header Section */}
          <div className=" bg-red-500/0 relative">
            {/* Top Text Section */}
            <div className="space-y-4">
              <h1
                className="text-3xl font-bold mb-2 capitalize opacity-1 text-center pb-10
                bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent"
              >
                <span className="text-2xl">We explore, design,</span>
                <br />
                <span className="text-2xl">and produce, unmatched</span>
                <br />
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins"
                >
                  new-to-market{" "}
                </span>
                <br className="hidden lg:block xl:hidden" />
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins"
                ></span>
                products
              </h1>
              <p className="text-2xl font-poppins text-center">
                Our{" "}
                <span className="font-bold ">
                  Bio-
                  <span className="bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent text-4xl">
                    F
                  </span>
                  -Polymers
                </span>{" "}
                do not compromise performance
                <br />
                while also being safe and sustainable
              </p>
              <p className="text-lg max-w-md pt-4 leading-relaxed">
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
        <div
          className="absolute w-[800px] h-[400px] 
          bottom-[-11%] left-[30%]"
        ></div>
      </div>

      <div className="relative bottom-0 left-0 w-full h-[100px]"></div>
      <div className="relative bottom-0 left-0 w-full h-[200px] bg-red-600/0 overflow-visible">
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
          translate-x-[-50%] translate-y-[-150%] 
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
          hoverDuration={4}
          shouldRotate={true}
          rotationDuration={21}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="hidden
          absolute top-[50%] left-[50%] translate-x-[350%] translate-y-[-260%] 
          lg:translate-x-[950%] lg:-translate-y-[500%] opacity-90 z-5"
        />
        <MovingAtom
          width={40}
          height={40}
          hoverAmplitude={7}
          hoverDuration={7}
          shouldRotate={true}
          rotationDuration={15}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(195,12,95,1)" //pink
          className="absolute top-[20%] left-[50%] translate-x-[100%] translate-y-[60%] 
          lg:translate-x-[100%] lg:-translate-y-[690%] opacity-90 z-5"
        />
        <MovingAtom
          width={50}
          height={50}
          hoverAmplitude={7}
          hoverDuration={4}
          shouldRotate={true}
          rotationDuration={25}
          shouldScale={false}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          color="rgba(18,110,119,1)" //teal
          className="hidden
          absolute top-[50%] left-[50%] translate-x-[180%] translate-y-[-480%] 
          lg:translate-x-[650%] lg:-translate-y-[350%] opacity-90 z-5"
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
          className="absolute top-[51%] left-[55%] translate-x-[-100%] translate-y-[-40%] 
          lg:translate-x-[300%] lg:-translate-y-[800%] opacity-90 z-5"
        />
        <div
          className="relative bottom-0 left-[50%] 
          translate-x-[-50%] translate-y-[-57px] 
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
