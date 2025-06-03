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
import EnzymeImage2 from "@/assets/images/AdobeStock/AdobeStock_747938517 Compressed.png";
import EcoliTripletsPNG from "@/assets/images/BluePrintPNGs/E.coli.png";

import BGFabricTealPink from "@/assets/images/BGImages/BGFabricTealPink_222564810.png";
import MeshFabric from "@/assets/images/BGImages/Mesh-fabric_1020623350.png";
import LightBGWithDroplets from "@/assets/images/AdobeStock/AdobeStock_291137317.jpeg";

import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";
import beaker2 from "@/assets/images/BluePrintSVG/beaker-product.svg";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517 Compressed.png";
import BeakerHalfAndHalf from "@/assets/images/BluePrintPNGs/Beaker-half-and-half.png";

interface AlternativeWhatWeDoSectionProps {
  stats: any[];
  className?: string;
  debug?: boolean;
}

export const AlternativeWhatWeDoSection = ({
  stats,
  className,
  debug = false,
}: AlternativeWhatWeDoSectionProps) => {
  if (debug) console.log("Rendering AlternativeWhatWeDoSection");

  const refmWWD = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refmWWD,
    offset: ["center end", "start start"],
  });

  return (
    <section
      className={`${className} overflow-visible z-20 border-2 border-blue-300 mx-auto
    px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[1920px]`}
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
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 border-2 border-red-500/0">
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
          color="rgba(225,12,115,0.7)"
          className="absolute bg-red-500/0 top-[10%] left-[50%] translate-x-[-1220%] translate-y-[-10%] bg-pinkAccent"
        />

        <div className="w-full sm:w-full bg-red-500/0 relative z-10">
          <h2
            className="relative text-center font-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent 
            pb-1 leading-tight"
          >
            <span className="font-poppins font-bold flex items-center mb-2 sm:mt-8 md:mt-10 lg:mt-12 text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl w-full sm:w-[300px] md:w-[350px] lg:w-[400px] xl:w-[450px] mx-auto">
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[1em] w-auto -ml-2 sm:-ml-3 md:ml-4 lg:ml-6 xl:ml-8"
              />
              BioHalo
            </span>
            <br />
            offers a sustainable <br />
            alternative to <br />
          </h2>
          <h2
            className="relative text-center font-black font-poppins text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl
            bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent"
          >
            <span
              className="uppercase text-wrap box-decoration-clone text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              bg-clip-text text-transparent bg-gradient-to-r from-slate-800/80 via-pinkAccent/70 to-slate-800/80"
            >
              forever chemicals
            </span>
          </h2>
        </div>

        <div className="w-full h-auto overflow-hidden px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 border-2 border-red-500/0 -mt-8 sm:-mt-10 md:-mt-12 lg:-mt-14 xl:-mt-16 pb-4">
          <Image
            src={EcoliTripletsPNG}
            alt="EcoliTripletsPNG"
            className="w-full h-full object-contain grayscale opacity-20 -rotate-12 brightness-[0.1]"
          />
        </div>

        {/* Subtitle */}
        <div className="w-full">
          <h2 className="text-gray-800/60 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins text-center">
            through our <br />
            microbial-based biohalogenation platform
          </h2>
        </div>

        {/* Text */}
        <div className="w-full h-full bg-red-500/0 my-4 sm:my-6 md:my-8 lg:my-10 xl:my-12 relative">
          <p className="text-gray-500/80 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-poppins text-center">
            we can selectively halogenate organic molecules, opening up new
            possibilities for{" "}
            <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent">
              fluorine
            </span>
            -based chemistry.
          </p>
          <div className="w-full h-full border-2 border-blue-300/0">
            <Image
              src={EnzymeImage2}
              alt="EnzymeImage2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-black/0 text-gray-800/70 w-full relative border-2 border-blue-300/0">
          <div className="bg-red-500/0 relative">
            <div className="space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-12">
              <h1
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 capitalize opacity-1 text-center pb-6 sm:pb-8 md:pb-10 lg:pb-12 xl:pb-14
                bg-gradient-to-tl from-slate-800/80 via-gray-700/60 to-gray-400 bg-clip-text text-transparent"
              >
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  We explore, design,
                </span>
                <br />
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                  and produce, unmatched
                </span>
                <br />
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                >
                  new-to-market{" "}
                </span>
                <br className="hidden lg:block xl:hidden" />
                <span
                  className="bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
                  uppercase drop-shadow-sm font-black font-Poppins text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                ></span>
                products
              </h1>
              <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-poppins text-center">
                Our{" "}
                <span className="font-bold">
                  Bio-
                  <span
                    className="bg-gradient-to-tr from-teal-700 via-teal-500 to-teal-600 bg-clip-text text-transparent 
                  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
                  >
                    F
                  </span>
                  -Polymers
                </span>{" "}
                do not compromise performance
                <br />
                while also being safe and sustainable
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto pt-4 leading-relaxed">
                BioHalos revolutionary enzyme-based biohalogenation platform
                offers you near limitless possibilities for{" "}
                <span className="bg-gradient-to-tr from-pinkAccent to-red-900/80 bg-clip-text text-transparent">
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
