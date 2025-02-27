"use client";

import { useRef } from "react";
import { useScroll, motion } from "framer-motion";
import Image from "next/image";
import MeshFabric from "@/assets/images/Mesh-fabric.png";
import IndustrialPollution from "@/assets/images/BGImagesTest/IndustrialPollution.png";
import polutionEarth from "@/assets/images/BluePrintStyle/polutionEarth.svg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";

interface PollutionSection2Props {
  stats: {
    number: string;
    prefix?: string;
    suffix?: string | JSX.Element;
    label: string | JSX.Element;
  }[];
  className?: string;
  debug?: boolean;
}

export function PollutionSection2({
  stats,
  className = "",
  debug = false,
}: PollutionSection2Props) {
  if (debug) console.log("Rendering PollutionSection2");

  const circleVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  // Define the sizes as percentages of the container
  const sizes = ["66%", "33%", "46%", "40%"];

  // Create the circle data with calculated positions using calc
  const statsCircles = [
    {
      stat: stats[2],
      // Moved to bottom-right position (was top-left)
      position:
        "left-[calc(50%+67%)] top-[calc(50%+67%)] hidden lg:block lg:absolute  lg:flex",
      size: `h-[${sizes[0]}] w-[${sizes[0]}]`,
    },
    {
      stat: stats[7],
      // Moved to top-left position (was bottom-right)
      position:
        "left-[calc(50%-83%)] top-[calc(50%-83%)] hidden lg:block lg:absolute  lg:flex",
      size: `h-[${sizes[1]}] w-[${sizes[1]}]`,
    },
    {
      stat: stats[6],
      // Top-right position
      position: "left-[calc(50%+73%)] top-[calc(50%-73%)] hidden",
      size: `h-[${sizes[2]}] w-[${sizes[2]}]`,
    },
    {
      stat: stats[3],
      // Bottom-left position
      position:
        "left-[calc(50%-70%)] top-[calc(50%+70%)] hidden lg:block lg:absolute  lg:flex",
      size: `h-[${sizes[3]}] w-[${sizes[3]}]`,
    },
  ];

  return (
    <section className={`${className}`}>
      {/* Title */}
      <div className="flex flex-col items-center justify-center relative">
        <h1
          className="absolute w-full pb-2 font-black font-Arial text-6xl text-center lg:text-right
          bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent capitalize"
        >
          <span>
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
          className="w-full pb-2 font-black font-Arial text-6xl text-center lg:text-right
          bg-gradient-to-tl from-tealAccent to-tealAccent/30 bg-clip-text text-transparent capitalize
          blur-[1px] opacity-70"
        >
          <span>
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

      {/* Two Columns POLLUTION */}
      <div className="flex gap-8 w-full h-[1000px] xl:h-[800px] 2xl:h-[40vw] mt-0 md:-mt-14 justify-end">
        {/* Left Column with Image */}
        <div className="w-full h-full relative">
          <motion.div
            className="absolute w-[600px] h-[600px] top-[35%] left-[65%] 
            -translate-y-[50%] -translate-x-[50%]"
          >
            {/* Stats Circles */}
            {statsCircles.map((circle, index) => (
              <motion.div
                key={index}
                className={`${circle.size} rounded-full
                ${circle.position}

                overflow-hidden items-center justify-center bg-red-500/0`}
                style={{
                  backgroundImage: `url(${
                    index % 2 === 0 ? WaterRepellantFabric.src : MeshFabric.src
                  })`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  transform: "translate(-50%, -50%)",
                }}
                variants={circleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
              >
                <div
                  className="absolute w-full h-full inset-0 rounded-full overflow-hidden
                  bg-gradient-to-tr from-black via-black/50 to-tealAccent/0 mix-blend-multiply"
                />

                <div className="absolute w-full h-full top-0 left-0 flex flex-col items-center justify-center">
                  <h2 className="text-center text-lightGrey/60 text-xl font-bold capitalize mb-2">
                    {circle.stat.label}
                  </h2>
                  <div className="text-center">
                    <span
                      className="text-6xl font-bold bg-gradient-to-tl from-tealAccent to-lightGrey 
                      bg-clip-text text-transparent"
                    >
                      {circle.stat.prefix}
                      {circle.stat.number}
                      {circle.stat.suffix}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}

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
          </motion.div>
        </div>

        {/* Right Column with Text */}
        <div className="w-full pace-y-12 mt-20 text-center lg:text-right">
          <div className="space-y-4 xl:text-lg">
            <h3 className="text-gray-800/80 text-4xl">
              Persistent Pollutants <br /> with hidden health risks
            </h3>
            <p className="max-w-md text-gray-800/60 ml-auto">
              PFAS compounds, while boosting industrial performance, remain in
              our environment for decades. Their incredible durability has
              become a double-edged sword, as persistent exposure is now linked
              to hormonal imbalances, immune challenges, and even cancer.
              <span>
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
