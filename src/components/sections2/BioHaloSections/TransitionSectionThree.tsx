import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { StatsBox } from "@/components/ui/StatsBox";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import Pharma from "@/assets/images/BluePrintSVG/Pharma.svg";
import MeshFabric from "@/assets/images/Mesh-fabric.png";

interface TransitionSectionThreeProps {
  stats: any[];
  className?: string;
} 

export function TransitionSectionThree({ stats, className = "" }: TransitionSectionThreeProps) {
  const ref4 = useRef(null);

  return (
    <section className={`${className}`}>
      {/* BG */}
      <div className="absolute w-full h-full top-0 left-0 bg-red-500/0 overflow-hidden ">
        <div
          className="absolute w-[500vw] h-[500vw] rounded-full top-0 left-[50%] translate-x-[-70%] 
          2xl:w-[600vw] 2xl:h-[600vw] 2xl:left-[50%] 2xl:translate-x-[-63%] 
          bg-gray-800/80 overflow-visible blur-[10px]"
        />
        <div
          className="absolute w-[500vw] h-[500vw] rounded-full top-0 left-[50%] translate-x-[-70%] 
          2xl:w-[600vw] 2xl:h-[600vw] 2xl:left-[50%] 2xl:translate-x-[-63%] 
          overflow-hidden border-2 border-lightGrey/30"
        >
          <div className="absolute w-[140vw] h-[100vh] top-0 left-[50%] translate-x-[70vw] bg-blue-500/0
          2xl:translate-x-[40%]">
            <div
              className="absolute w-full h-full top-0 left-0"
              style={{
                backgroundImage: `url(${BioHaloBackground.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute w-full h-full opacity-100 top-0 left-0 bg-gradient-to-bl from-tealAccent via-tealAccent/80 to-gray-950/100 mix-blend-multiply" />
            <div className="absolute w-full h-full opacity-100 top-0 left-0 bg-gradient-to-b from-tealAccent/20 to-gray-950/100 mix-blend-multiply" />
          </div>
        </div>
      </div>

      {/* Content if necessary */}
      <div className="absolute w-full h-full top-0 left-0 opacity-0">
        {/* Pharma Circles */}
        <div className="w-full h-full max-w-[1280px] mx-auto top-0 left-0 relative -translate-y-[15%]">
          {/* Big Circle */}
          <div className="absolute w-[600px] h-[600px] top-0 left-0 bg-red-500/0">
            <div className="w-full h-full relative">
              <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey">
                <Image
                  src={WaterRepellantFabric}
                  alt="WaterRepellantFabric"
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute h-full w-full rounded-full left-0 top-0 overflow-hidden flex items-center justify-center bg-gradient-to-tr from-black via-black/20 to-tealAccent/0">
                <Image
                  src={Pharma}
                  alt="BioHaloStep1"
                  className="w-[90%] translate-x-0 -translate-y-[5%] bg-yellow-400/0"
                />
              </div>
            </div>
            {/* Small Stats Circle */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div
                className="absolute h-[350px] w-[350px] rounded-full top-0 left-0 overflow-hidden flex items-center justify-center 
                bg-red-500/0 translate-x-[100%] translate-y-[-20%]"
                style={{
                  backgroundImage: `url(${MeshFabric.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div
                  className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                  bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
                />
                <motion.div
                  ref={ref4}
                  className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                  bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
                />
                <StatsBox
                  classNamesContainer="w-fit z-10 h-fit -mt-12"
                  classNamesTitle="lg-9xl w-[800px] mt-5 scale-[0.6] text-center lg:text-9xl md:text-8xl 
                  font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold -mt-14 capitalize"
                  key={3}
                  stat={stats[3]}
                  scrollYProgress={
                    useScroll({
                      target: ref4,
                      offset: ["start end", "end start"],
                    }).scrollYProgress
                  }
                  scrollEndThreshold={0.4}
                  index={3}
                  text=""
                  ratchet={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Gradient for section transition */}
      <div
        className="absolute w-full h-[50px] bottom-0 left-0 
        bg-gradient-to-t from-gray-950 to-transparent"
      />
    </section>
  );
}
