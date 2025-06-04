import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import {
  StatsBox,
  StaticStatsBox,
  SimpleStatsBox,
} from "@/components/ui/StatsBox";
import { MovingAtom } from "../../ui/MovingAtom";
import WaterColorReveal from "@/components/WaterColorReveal";
import EnzymeImage2 from "@/assets/images/enzymeImage2.png";

import BGFabricTealPink from "@/assets/images/BGImages/BGFabricTealPink_222564810.png";
import MeshFabric from "@/assets/images/BGImages/Mesh-fabric_1020623350.png";
import LightBGWithDroplets from "@/assets/images/AdobeStock/AdobeStock_291137317.jpeg";

import BioFMonomer from "@/assets/images/BluePrintSVG/BioF-Monomer.svg";
import EcoliTripletsSVG from "../../ui/EcoliTripletsSVG";
import beaker2 from "@/assets/images/BluePrintSVG/beaker-product.svg";
import BioHaloLogoOnly from "@/assets/BioHaloLogoOnly.svg";
import logo from "@/assets/images/logo.png";
import BioReactorBlueprint from "@/assets/images/BluePrint with Color/bio-reactor.png";
import BeakerBlueprint from "@/assets/images/BluePrint with Color/beaker.png";
import BioReactorSVG from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import DNALogo from "@/assets/images/BluePrintSVG/dna-logo.svg";
import BioHaloStep2 from "@/assets/images/BluePrintSVG/BioHalo-step2.svg";
import BioReactorBP from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import NetworkDiagramWithNodes from "@/components/ui/NetworkDiagramWithNodes";
import enzymeImage from "@/assets/images/AdobeStock/AdobeStock_747938517_Compressed.png";
import BeakerHalfAndHalf from "@/assets/images/BluePrintPNGs/Beaker-half-and-half.png";

interface WhatWeDoSectionProps {
  stats: any[];
  className?: string;
  debug?: boolean;
}

export const WhatWeDoSection = ({
  stats,
  className,
  debug = false,
}: WhatWeDoSectionProps) => {
  if (debug) console.log("Rendering WhatWeDoSection");

  const refWWD = useRef(null);
  const { scrollYProgress } = useScroll({
    target: refWWD,
    offset: ["center end", "start start"],
  });

  return (
    <section className={`${className} overflow-visible`}>
      <div className="absolute top-[-10%] left-0 w-full">
        <div
          className="relative w-full h-full 
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
      <div className="max-w-[1280px] mx-auto px-14 ">
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

        <div
          className="absolute hidden lg:block
        top-10 xl:top-0 left-[45%] w-[45%] xl:w-[55%]  max-w-[900px] translate-x-[12vw] xl:translate-x-[5vw]"
        >
          <motion.div
            animate={{
              y: [0, -30, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={enzymeImage}
              alt="EnzymeImage"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
        {/*       <div className="hidden lg:block xl:hidden absolute w-[400px] h-[400px] top-0 right-[5%]  rounded-full 
      border-2 border-lightGrey"
      style={{
        backgroundImage: `url(${DNALogo.src})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      /> */}

        <div className="w-full sm:w-full md:w-[720px] bg-red-500/0 xl:mt-10 relative z-10">
          <h2
            className="relative font-black font-Arial text-4xl sm:text-5xl md:text-6xl bg-gradient-to-tl from-tealAccent to-tealAccent/60 bg-clip-text text-transparent 
          pb-6 md:pb-10"
          >
            <span
              className="font-poppins font-bold flex items-center -mb-8 sm:-mb-10 md:-mb-14
          text-black text-6xl md:text-[clamp(110px,10vw,150px)] w-full sm:w-[400px] md:w-[560px]"
            >
              BioHalo
              <Image
                src={BioHaloLogoOnly}
                alt="BioHalo Logo"
                className="h-[1em] w-auto ml-2 sm:ml-3 md:ml-4 "
              />
            </span>
            <br />
            provides the world <br />
            with sustainable <br />
            <span className="relative group">
              <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent cursor-help">
                PFAS{" "}
              </span>
              <span className="invisible font-normal group-hover:visible absolute left-0 top-full mt-2 w-56 sm:w-60 md:w-64 p-3 md:p-4 bg-white/90 backdrop-blur-md rounded-lg shadow-lg text-xs sm:text-sm text-gray-800 z-50 transition-all duration-200 ease-in-out">
                <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent cursor-help">
                  PFAS
                </span>{" "}
                are Per- and PolyfluoroAlkyl Substances also known as "
                <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent cursor-help">
                  forever chemicals
                </span>
                "
              </span>
            </span>
            alternatives
          </h2>
        </div>

        {/* Subtitle */}
        <div className="w-full sm:w-full md:w-[720px] bg-red-500/0">
          <h2 className="text-gray-800/60 text-4xl sm:text-5xl md:text-6xl font-poppins">
            through our microbial-based biohalogenation platform
          </h2>
        </div>

        {/* Text */}
        <div className="h-[200px] w-full md:w-[480px] bg-red-500/0 my-6 md:mt-10">
          <p className="text-gray-500/80 text-2xl font-poppins">
            we can selectively halogenate organic molecules, opening up new
            possibilities for{" "}
            <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent">
              fluorine
            </span>
            -based chemistry.
          </p>
        </div>

        {/* Circular Image Section */}
        <div className="relative w-full md:w-[1200px] h-[600px] sm:h-[700px] md:h-[750px] lg:h-[800px] bg-red-500/0 mt-16 md:mt-16 lg:ml-[2vw]">
          {/* Top/Middle Circle */}
          <div className="absolute h-[400px] w-[400px] sm:h-[500px] sm:w-[500px] md:h-[600px] md:w-[600px] lg:h-[700px] lg:w-[700px] xl:h-[800px] xl:w-[800px] rounded-full left-[10%] sm:left-[15%] md:left-[10%] lg:left-[15%] xl:left-[25%] -top-[15%] sm:-top-[18%] md:-top-[20%] lg:-top-[17%] xl:-top-[15%] overflow-hidden drop-shadow-xl flex items-center justify-center">
            <Image
              src={BGFabricTealPink}
              alt="BGFabricTealPink"
              className="w-full h-full object-cover blur-none "
            />
            <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 overflow-visible flex items-center justify-center">
              <EcoliTripletsSVG
                className="w-[100%] h-[100%] scale-[1.1] translate-x-[-3%] translate-y-[2%] opacity-1 invert mix-blend-overlay"
                style={{
                  willChange: "opacity, transform",
                }}
              />
            </div>
          </div>

          {/* Left Circle */}
          <div
            className="absolute h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] lg:h-[500px] lg:w-[500px] xl:h-[600px] xl:w-[600px] rounded-full 
          bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-tealAccent via-transparent to-transparent
          left-[0%] sm:left-[5%] md:left-[0%] lg:left-[5%] xl:left-[0%] top-[30%] sm:top-[25%] md:top-[20%] lg:top-[17%] xl:top-[15%] overflow-hidden"
          >
            <div className="opacity-1 absolute h-full w-full rounded-full left-0 top-0 overflow-hidden border-2 border-mintAccent flex items-center justify-center">
              <Image
                src={MeshFabric}
                alt="MeshFabric"
                className="object-cover w-full h-full"
              />
            </div>
            <motion.div
              ref={refWWD}
              className="absolute h-full w-full rounded-full left-0 top-0 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-black via-black/20 to-tealAccent/0"
            >
              <SimpleStatsBox
                classNamesContainer="w-fit z-10 h-fit"
                classNamesTitle="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl w-full sm:w-[400px] md:w-[500px] lg:w-[700px] xl:w-[800px] mt-5 sm:scale-[1.1] md:scale-[1.15] lg:scale-[1.2] text-center
              font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:1px_rgb(229,231,235,0.1)] sm:[-webkit-text-stroke:1.5px_rgb(229,231,235,0.1)] md:[-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:1px_rgb(229,231,235,0.1)] sm:[text-stroke:1.5px_rgb(229,231,235,0.1)] md:[text-stroke:2px_rgb(229,231,235,0.1)]"
                classNamesSubTitle="text-center text-lightGrey/60 text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold -mt-2 sm:-mt-3 md:-mt-4 lg:-mt-5 capitalize"
                stat={stats[0]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.6}
                index={0}
                text=""
                ratchet={true}
              />
            </motion.div>
          </div>

          {/* Right/Bottom Circle */}
          <div className="hidden xl:flex absolute h-[500px] w-[500px] rounded-full bg-mintAccent -right-[5%] lg:top-[60%] items-center justify-center overflow-hidden drop-shadow-xl  border-2 border-lightGrey">
            <Image
              src={enzymeImage}
              alt="EnzymeImage"
              className="w-full h-full object-cover bg-yellow-400/0"
            />
          </div>
          <div
            className="hidden xl:flex absolute opacity-80 h-[500px] w-[500px] rounded-full -right-[5%] top-[60%] items-center justify-center overflow-hidden 
          bg-gradient-to-tr from-black via-tealAccent to-tealAccent/90 mix-blend-multiply border-2 border-mintAccent/90"
          ></div>
          <div className="hidden xl:flex absolute h-[500px] w-[500px] rounded-full bg-mintAccent/0 -right-[5%] top-[60%] items-center justify-center overflow-hidden">
            <Image
              src={BioFMonomer}
              alt="BioFMonomer"
              className="w-[98%] translate-x-0 -translate-y-[10%] bg-yellow-400/0 mix-blend-screen opacity-50 grayscale"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="bg-black/0 text-gray-800/70 pt-0 -mt-24 lg:mt-0 lg:pt-8 w-full md:w-[1200px] relative">
          {/* Header Section */}
          <div className="space-y-16 bg-red-500/0 relative">
            {/* Top Text Section */}
            <div className="space-y-4">
              <h1 className="font-black font-Arial text-4xl md:text-6xl bg-gradient-to-br from-teal-800/70 via-tealAccent/80 to-tealAccent/40 bg-clip-text text-transparent pb-10">
                <span className="">We explore, design,</span>
                <br />
                <span className="">and produce, unmatched</span>
                <br />
                <span className="bg-gradient-to-tr from-pinkAccent to-tealAccent/60 bg-clip-text text-transparent">
                  new-to-market{" "}
                </span>{" "}
                <br className="hidden lg:block xl:hidden" />
                products
              </h1>
              <p className="text-2xl md:text-3xl">
                Our{" "}
                <span className="font-bold ">
                  Bio-
                  <span className="bg-gradient-to-tr from-pinkAccent to-red-900/80 bg-clip-text text-transparent text-4xl">
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
                <span className="bg-gradient-to-tr from-pinkAccent to-red-900/80 bg-clip-text text-transparent">
                  fluorine
                </span>
                -enhanced compound development.
                {/* These incredible achievements
                are made possible by advances in synthetic biology and
                biotechnology. Bringing us closer to understanding nature's
                fundamental principles and putting them to good use. */}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="absolute w-[800px] h-[400px] opacity-50
        bottom-[-7%] left-[30%] invert grayscale"
        style={{
          backgroundImage: `url(${BioHaloStep2.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "opacity, transform",
        }}
        >
      </div> */}
        <div
          className="absolute w-[800px] h-[400px] 
          bottom-[-11%] left-[30%]"
        ></div>
      </div>

      <div className="relative bottom-0 left-0 w-full h-[100px] md:h-[200px]">
        {/*   <div className="w-full h-full opacity-1"
        style={{
          backgroundImage: `url(${BioReactorBP.src})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          willChange: "opacity, transform",}}/> */}
      </div>
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
            md:translate-x-[-50%] md:translate-y-[-250%] 
            2xl:translate-x-[200%] 2xl:-translate-y-[50%] opacity-90 z-5"
        />
        <div
          className="absolute bottom-0 left-[50%]
            translate-x-[-50%] md:translate-y-[72px] 2xl:translate-y-[86px]
            w-[300px] h-[300px] md:w-[500px] md:h-[500px] 2xl:w-[600px] 2xl:h-[600px]"
          style={{
            backgroundImage: `url(${BeakerHalfAndHalf.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
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
          className="absolute top-[50%] left-[50%] translate-x-[50%] translate-y-[-80%] 
          2xl:translate-x-[350%] 2xl:-translate-y-[500%] opacity-90 z-5"
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
          className="hidden md:block
          absolute top-[18%] left-[50%] translate-x-[350%] translate-y-[-260%] 
          2xl:translate-x-[950%] 2xl:-translate-y-[500%] opacity-90 z-5"
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
          className="absolute top-[2%] left-[50%] translate-x-[100%] translate-y-[20%] 
          2xl:translate-x-[100%] 2xl:-translate-y-[690%] opacity-90 z-5"
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
          className="hidden md:block
          absolute top-[20%] left-[47%] translate-x-[180%] translate-y-[-480%] 
          2xl:translate-x-[650%] 2xl:-translate-y-[350%] opacity-90 z-5"
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
          className="absolute top-[20%] left-[50%] translate-x-[-100%] translate-y-[-40%] 
          2xl:translate-x-[300%] 2xl:-translate-y-[800%] opacity-90 z-5"
        />
      </div>
    </section>
  );
};
