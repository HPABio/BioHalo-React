import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import { StatsBox, StaticStatsBox } from "@/components/ui/StatsBox";
import WaterColorReveal from "@/components/WaterColorReveal";
import MeshFabric from "@/assets/images/Mesh-fabric.png";
import IndustrialPollution from "@/assets/images/BGImagesTest/IndustrialPollution.png";
import polutionEarth from "@/assets/images/BluePrintStyle/polutionEarth.svg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";

interface PollutionSectionProps {
  stats: any[];
  className?: string;
}

export function PollutionSection({
  stats,
  className = "",
}: PollutionSectionProps) {
  const refMD = useRef(null);
  const refLG = useRef(null);

  return (
    <section className={`${className}`}>
      {/* Title  */}
      <div className="flex flex-col items-center justify-center relative">
        <h1
          className="absolute w-full pb-2 font-black font-Arial text-6xl text-center lg:text-right
        bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent capitalize"
        >
          <span className="">
            for Public Health and
            <br /> the environment alike <br />
            The Consequences of
            <br /> pollution can be
            <br />
            <span className="bg-gradient-to-t from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
              devastating
              <br />
            </span>
          </span>
        </h1>
        <h1
          className=" w-full pb-2 font-black font-Arial text-6xl text-center lg:text-right
        bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent capitalize
        blur-[1px] opacity-70"
        >
          <span className="">
            for Public Health and
            <br /> the environment alike <br />
            The Consequences of
            <br /> pollution can be
            <br />
            <span className="bg-gradient-to-t from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
              devastating
              <br />
            </span>
          </span>
        </h1>
      </div>

      {/*Two Columns POLLUTION */}
      <div
        className="flex gap-8 w-full h-[1000px] xl:h-[800px] 2xl:h-[40vw] mt-0 md:-mt-14 justify-end"
        ref={refLG}
      >
        {/* Left Column with Image */}
        <div className="w-full h-full relative">
          <motion.div
            className="absolute w-[600px] h-[600px] top-[35%] left-[65%] 
            -translate-y-[50%] -translate-x-[50%]"
          >
            {/* Stats Circle Contaminated Sites */}
            <div
              className="hidden lg:absolute h-[66%] w-[66%] rounded-full
              left-[20%] top-[-15%] -translate-x-[50%] -translate-y-[50%] 
              overflow-hidden lg:flex items-center justify-center bg-red-500/0"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    flex flex-col items-center justify-center"
              />

              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
              />

              <StaticStatsBox
                classNamesContainer="w-fit z-10 h-fit -mt-12"
                classNamesTitle="lg-9xl w-[800px] mt-5 scale-[0.7] text-center lg:text-9xl md:text-8xl 
                font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold -mt-14 capitalize"
                key={2}
                stat={stats[2]}
                /* scrollYProgress={
                  useScroll({
                    target: refLG,
                    offset: ["start end", "end start"],
                  }).scrollYProgress
                }
                scrollEndThreshold={0.2}
                index={2}
                text=""
                ratchet={true} */
              />
            </div>

            {/* Big Stats Circle */}
            <div
              className="absolute w-full h-full rounded-full
              bg-gradient-to-tr from-black via-teal-900 to-black"
            >
              <div
                className="absolute w-full h-full rounded-full scale-[1.1] 
                            bg-gradient-to-tr from-black via-teal-900 to-black blur-[50px] opacity-40 xl:opacity-70 2xl:opacity-50"
              />
              <div
                className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey drop-shadow-2xl"
                style={{
                  backgroundImage: `url(${IndustrialPollution.src})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>

              <div className="absolute opacity-1 overflow-visible h-full w-full rounded-full left-0 top-0 flex items-center justify-center">
                <Image
                  src={polutionEarth}
                  alt="BioHaloStep1"
                  className="w-full scale-[1.15] translate-x-0 translate-y-[12%] bg-yellow-400/0"
                />
              </div>
            </div>

            {/*Stats Circle 4.4 million tons of PFAS released*/}
            <div
              className="hidden lg:absolute h-[46%] w-[46%] rounded-full 
              overflow-hidden items-center justify-center bg-red-500/0"
              style={{
                backgroundImage: `url(${MeshFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute w-[50%] h-[50%] inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    flex flex-col items-center justify-center"
              />
              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    "
              />
              <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center 2xl:scale-[1.2]">
                <StaticStatsBox
                  classNamesContainer="w-fit z-10 h-fit bg-gray-400/0 -mt-8 -ml-4 "
                  classNamesTitle="lg-8xl text-center text-9xl leading-none scale-[0.7]
                    font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold capitalize -mt-8"
                  stat={stats[7]}
                  /* scrollYProgress={
                      useScroll({
                        target: refLG,
                        offset: ["start end", "end start"],
                      }).scrollYProgress
                    }
                    scrollEndThreshold={0.8}
                    index={7}
                    text=""
                    ratchet={true} */
                />
                <h2 className="text-center text-lightGrey/60 text-1xl font-bold lowerfcase mt-0">
                  Amount of Released
                  <br />
                  Fluorinated materials <br />
                  by 2053
                </h2>
                <h2
                  className="font-bold pb-4 w-[800px] text-center text-5xl -mt-10
                      bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                ></h2>
              </div>
            </div>

            {/*Stats Circle Degradation Time  */}
            <div
              className="hidden lg:absolute h-[33%] w-[33%] max-w-[600px] max-h-[600px] 
              left-[87%] top-[100%]  -translate-x-[50%] -translate-y-[50%] 
              overflow-hidden lg:flex items-center justify-center bg-red-500/0 rounded-full"
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
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
              />
              {/* Stats right */}
              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    "
              />
              <div className="absolute w-full h-full top-0 left-0 -mt-1 bg-green-40 flex flex-col items-center justify-center">
                <h2 className="text-center text-lightGrey/60 text-lg font-bold capitalize">
                  Minimum
                  <br />
                  Degradation Time
                </h2>

                <StaticStatsBox
                  classNamesContainer="w-fit z-10 h-fit bg-gray-400/0 -mt-0"
                  classNamesTitle="lg-8xl w-[800px]  text-center text-6xl
                    font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold capitalize"
                  stat={stats[6]}
                  /*  scrollYProgress={
                      useScroll({
                        target: refLG,
                        offset: ["start end", "end start"],
                      }).scrollYProgress
                    }
                    scrollEndThreshold={0.2}
                    index={6}
                    text=""
                    ratchet={true} */
                />
                <h2
                  className="font-bold pb-4 w-[800px] text-center text-3xl -mt-4
                      bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                >
                  years
                </h2>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Column with Text */}
        <div className="w-full pace-y-12 mt-20 text-center lg:text-right">
          <div className="space-y-4 xl:text-lg">
            <h3 className="text-gray-800/80 text-4xl ">
              Persistent Pollutants <br /> with hidden health risks
            </h3>
            <p className="max-w-md text-gray-800/60 ml-auto">
              PFAS compounds, while boosting industrial performance, remain in
              our environment for decades. Their incredible durability has
              become a double-edged sword, as persistent exposure is now linked
              to hormonal imbalances, immune challenges, and even cancer.
              <span className="">
                <br />
              </span>
            </p>
            <p className="max-w-[330px] xl:w-[65%] ml-auto md:max-w-md text-gray-800/60">
              Emerging research underscores the importance of rethinking our use
              of these chemicals and implementing comprehensive strategies to
              monitor and mitigate their impact on public health. Addressing
              this silent crisis is essential for a healthier future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PollutionSectionBACKUP({
  stats,
  className = "",
}: PollutionSectionProps) {
  const refMD = useRef(null);
  const refLG = useRef(null);

  return (
    <section className={`${className}`}>
      <div className="flex flex-col items-center justify-center relative">
        <h1
          className="absolute w-full pb-2 font-black font-Arial text-6xl text-center lg:text-left
        bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent"
        >
          <span className="">
            But these compounds <br />
            have a big toll on
            <span className="bg-gradient-to-t from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent">
              <br />
              Public Health
            </span>
          </span>
        </h1>
        <h1
          className="w-full pb-2 font-black font-Arial text-6xl text-center lg:text-left
        bg-gradient-to-tl from-tealAccent to-tealAccent/60 bg-clip-text text-transparent opacity-70"
        >
          <span className="">
            But these compounds <br />
            have a big toll on
            <span
              className="bg-gradient-to-tr from-pinkAccent to-tealAccent/30 bg-clip-text text-transparent
           blur-[3px] opacity-70"
            >
              <br />
              Public Health
            </span>
          </span>
        </h1>
      </div>

      {/*Two Columns POLLUTION */}
      <div
        className="flex gap-8 w-full h-[1000px] xl:h-[800px] 2xl:h-[40vw] mt-0 md:-mt-14 "
        ref={refLG}
      >
        {/* Left Column with Text */}
        <div className="space-y-12 mt-20">
          <div className="space-y-4 lg:pr-10 xl:text-lg">
            <h3 className="text-gray-800/80 text-4xl ">
              Persistent Pollutants <br /> with hidden health risks
            </h3>
            <p className="max-w-md text-gray-800/60">
              PFAS compounds, while boosting industrial performance, remain in
              our environment for decades. Their incredible durability has
              become a double-edged sword, as persistent exposure is now linked
              to hormonal imbalances, immune challenges, and even cancer.
              <span className="">
                <br />
              </span>
            </p>
            <p className="max-w-[330px] xl:w-[65%] mr-auto md:max-w-md text-gray-800/60">
              Emerging research underscores the importance of rethinking our use
              of these chemicals and implementing comprehensive strategies to
              monitor and mitigate their impact on public health. Addressing
              this silent crisis is essential for a healthier future.
            </p>
          </div>
        </div>

        {/* Right Column with Image */}
        <div className="relative">
          <motion.div
            className="absolute w-[600px] h-[600px] top-0 right-0 lg:left-0 
            translate-y-[75%] translate-x-[30vw]
            lg:translate-y-[75%] lg:-translate-x-[47%]
            xl:w-[700px] xl:h-[700px] xl:translate-y-[50%] xl:-translate-x-[35%]"
          >
            {/*LG Stats Circle in the back*/}
            <div
              className="hidden lg:absolute h-[66%] w-[66%] rounded-full left-[50%] top-0 
              -translate-x-[5%] -translate-y-[65%] 
              overflow-hidden lg:flex items-center justify-center bg-red-500/0"
              style={{
                backgroundImage: `url(${WaterRepellantFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    flex flex-col items-center justify-center"
              />

              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
              />

              <StaticStatsBox
                classNamesContainer="w-fit z-10 h-fit -mt-12"
                classNamesTitle="lg-9xl w-[800px] mt-5 scale-[0.7] text-center lg:text-9xl md:text-8xl 
                font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold -mt-14 capitalize"
                key={2}
                stat={stats[2]}
                /* scrollYProgress={
                  useScroll({
                    target: refLG,
                    offset: ["start end", "end start"],
                  }).scrollYProgress
                }
                scrollEndThreshold={0.2}
                index={2}
                text=""
                ratchet={true} */
              />
            </div>
            {/* Big Stats Circle */}
            <div
              className="absolute w-full h-full rounded-full
              bg-gradient-to-tr from-black via-teal-900 to-black blur-[40px] xl:blur-[20px] opacity-70 2xl:opacity-50 "
            />
            <div className="absolute w-full h-full rounded-full overflow-hidden border-2 border-lightGrey drop-shadow-2xl">
              <Image
                src={IndustrialPollution}
                alt="WaterRepellantFabric"
                className="object-cover w-full h-full"
              />
            </div>

            <div
              className="absolute opacity-1 overflow-visible h-full w-full rounded-full left-0 top-0 flex items-center justify-center 
              bg-gradient-to-tr from-black/50 via-black/20 to-tealAccent/0"
              style={{
                backgroundImage: `url(${polutionEarth.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>

            {/*LG Stats Circle front left */}
            <div
              className="hidden lg:absolute h-[46%] w-[46%] rounded-full left-[50%] top-0 -translate-x-[160%] translate-y-[110%] 
              overflow-hidden lg:flex items-center justify-center bg-red-500/0"
              style={{
                backgroundImage: `url(${MeshFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    flex flex-col items-center justify-center"
              />
              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    "
              />
              <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center 2xl:scale-[1.2]">
                <StaticStatsBox
                  classNamesContainer="w-fit z-10 h-fit bg-gray-400/0 -mt-8 -ml-4 "
                  classNamesTitle="lg-8xl text-center text-9xl leading-none scale-[0.7]
                    font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold capitalize -mt-8"
                  stat={stats[7]}
                  /* scrollYProgress={
                      useScroll({
                        target: refLG,
                        offset: ["start end", "end start"],
                      }).scrollYProgress
                    }
                    scrollEndThreshold={0.8}
                    index={7}
                    text=""
                    ratchet={true} */
                />
                <h2 className="text-center text-lightGrey/60 text-1xl font-bold lowerfcase mt-0">
                  Amount of Released
                  <br />
                  Fluorinated materials <br />
                  by 2053
                </h2>
                <h2
                  className="font-bold pb-4 w-[800px] text-center text-5xl -mt-10
                      bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                ></h2>
              </div>
            </div>

            {/*LG Stats Circle bottom right */}
            <div
              className="hidden lg:absolute h-[33%] w-[33%] max-w-[600px] max-h-[600px] left-[50%] top-0 
              translate-x-[125%] translate-y-[230%] 
              overflow-hidden lg:flex items-center justify-center bg-red-500/0 rounded-full"
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
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
              />
              {/* Stats right */}
              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    "
              />
              <div className="absolute w-full h-full top-0 left-0 -mt-1 bg-green-40 flex flex-col items-center justify-center">
                <h2 className="text-center text-lightGrey/60 text-lg font-bold capitalize">
                  Minimum
                  <br />
                  Degradation Time
                </h2>

                <StaticStatsBox
                  classNamesContainer="w-fit z-10 h-fit bg-gray-400/0 -mt-0"
                  classNamesTitle="lg-8xl w-[800px]  text-center text-6xl
                    font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold capitalize"
                  stat={stats[6]}
                  /*  scrollYProgress={
                      useScroll({
                        target: refLG,
                        offset: ["start end", "end start"],
                      }).scrollYProgress
                    }
                    scrollEndThreshold={0.2}
                    index={6}
                    text=""
                    ratchet={true} */
                />
                <h2
                  className="font-bold pb-4 w-[800px] text-center text-3xl -mt-4
                      bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                >
                  years
                </h2>
              </div>
            </div>

            {/* MD Bottom left circle*/}
            <div
              className="absolute lg:hidden h-[66%] w-[66%] rounded-full left-[50%] top-0 
              -translate-x-[125%] translate-y-[85%] 
              2xl:w-[450px] 2xl:h-[450px] 
              overflow-hidden flex items-center justify-center bg-red-500/0"
              style={{
                backgroundImage: `url(${MeshFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    flex flex-col items-center justify-center"
              />

              <motion.div
                ref={refMD}
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
              />
              <StaticStatsBox
                classNamesContainer="w-fit z-10 h-fit -mt-12"
                classNamesTitle="lg-9xl w-[800px] mt-5 scale-[0.7] text-center lg:text-9xl md:text-8xl 
                font-bold mb-6 bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold -mt-14 capitalize"
                stat={stats[2]}
                /* scrollYProgress={
                  useScroll({
                    target: refLG,
                    offset: ["start end", "end start"],
                  }).scrollYProgress
                }
                scrollEndThreshold={0.6}
                index={2}
                text=""
                ratchet={true} */
              />
            </div>

            {/*MD Stats Circle top */}
            <div
              className="lg:hidden absolute h-[46%] w-[46%] rounded-full left-[50%] top-0 
                          translate-x-[10%] -translate-y-[55%] 
                          overflow-hidden flex items-center justify-center bg-red-500/0"
              style={{
                backgroundImage: `url(${MeshFabric.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                                flex flex-col items-center justify-center"
              />
              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                                "
              />
              <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center 2xl:scale-[1.2]">
                <StaticStatsBox
                  classNamesContainer="w-fit z-10 h-fit bg-gray-400/0 -mt-8 -ml-4 "
                  classNamesTitle="lg-8xl text-center text-9xl leading-none scale-[0.7]
                                font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold capitalize -mt-8"
                  stat={stats[7]}
                  /* scrollYProgress={
                                  useScroll({
                                    target: refLG,
                                    offset: ["start end", "end start"],
                                  }).scrollYProgress
                                }
                                scrollEndThreshold={0.6}
                                index={7}
                                text=""
                                ratchet={false} */
                />
                <h2 className="text-center text-lightGrey/60 text-1xl font-bold lowerfcase mt-0">
                  Amount of Released
                  <br />
                  Fluorinated materials <br />
                  by 2053
                </h2>
                <h2
                  className="font-bold pb-4 w-[800px] text-center text-5xl -mt-10
                                  bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                ></h2>
              </div>
            </div>

            {/*MD Stats Circle bottom right */}
            <div
              className="lg:hidden absolute h-[33%] w-[33%] max-w-[600px] max-h-[600px] left-[50%] top-0 
              translate-x-[50%] translate-y-[230%] 
              overflow-hidden flex items-center justify-center bg-red-500/0 rounded-full"
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
              <div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
              />
              {/* Stats right */}
              <motion.div
                className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                    bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply
                    "
              />
              <div className="absolute w-full h-full top-0 left-0 -mt-1 bg-green-40 flex flex-col items-center justify-center">
                <h2 className="text-center text-lightGrey/60 text-lg font-bold capitalize">
                  Minimum
                  <br />
                  Degradation Time
                </h2>

                <StaticStatsBox
                  classNamesContainer="w-fit z-10 h-fit bg-gray-400/0 -mt-0"
                  classNamesTitle="lg-8xl w-[800px]  text-center text-6xl
                    font-bold bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent [-webkit-text-stroke:2px_rgb(229,231,235,0.1)] [text-stroke:2px_rgb(229,231,235,0.1)]"
                  classNamesSubTitle="text-center text-lightGrey/60 text-2xl font-bold capitalize"
                  stat={stats[6]}
                  /* scrollYProgress={
                      useScroll({
                        target: refLG,
                        offset: ["start end", "end start"],
                      }).scrollYProgress
                    }
                    scrollEndThreshold={0.7}
                    index={6}
                    text=""
                    ratchet={false} */
                />
                <h2
                  className="font-bold pb-4 w-[800px] text-center text-3xl -mt-4
                      bg-gradient-to-tl from-tealAccent to-lightGrey bg-clip-text text-transparent"
                >
                  years
                </h2>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
