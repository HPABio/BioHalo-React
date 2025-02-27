"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StatsBox } from "../ui/StatsBox";
import pfasStats from "@/assets/pfasStats.json";

// Function to generate 6 unique random numbers between 4 and 27
function getRandomIndices(): number[] {
  const indices = new Set<number>();
  while (indices.size < 6) {
    indices.add(Math.floor(Math.random() * (27 - 4 + 1)) + 4);
  }
  return Array.from(indices);
}

export function StatsSection5({ className }: { className?: string }) {
  const [statIndices] = useState(() => getRandomIndices());
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
  });

  return (
    <section
      ref={sectionRef}
      className={`relative overflow-hidden min-h-screen ${
        className || ""
      }`}
    >
      {/* Main container - Adding flex-col to properly stack children */}
      <div className="w-full pt-16 flex flex-col items-center">
        {/* Grid container */}
        <div className="grid grid-cols-1 max-w-[2000px] md:grid-cols-2 pt-[20vh] px-12 md:px-[20vw] lg:px-32 gap-8 w-full">
          {/* First stats box */}
          <div className=" w-full flex  -mb-[64px] justify-center items-top md:h-[19vh] relative">
            <div
              className="absolute top-0 left-50 md:top-[-10%] md:left-[55%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit md:min-w-[510px] fle z-10 h-fit"
              classNamesTitle="text-8xl text-center lg:text-9xl md:text-8xl drop-shadow-lg font-bold mb-2 bg-gradient-to-l from-primary/90 to-tealAccent bg-clip-text text-transparent"
              classNamesSubTitle="text-center text-gray-500 text-2xl font-bold -mt-5"
              key={statIndices[0]}
              stat={pfasStats.stats[statIndices[0]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.2}
              index={statIndices[0]}
              text=""
            />
          </div>
          <div className="w-full h-0 /10 md:h-[19vh] "></div>

          {/* Second row */}
          <div className="w-full /10 h-0 md:h-[33vh] ">
            {" "}
            {/* Added fixed height */}
          </div>
          <div className=" w-full flex justify-center  items-top md:h-[33vh] relative">
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[19%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[45%] md:top-[0] md:left-[clamp(15%, 25%, 45%)] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit h-fit top-10"
              classNamesTitle="text-9xl lg:text-9xl text-center md:text-8xl font-bold text-tealAccent mb-2"
              classNamesSubTitle="text-mintAccent text-center text-2xl font-bold -mt-5"
              key={statIndices[1]}
              stat={pfasStats.stats[statIndices[1]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.2}
              index={statIndices[1]}
              text=""
            />
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1  md:grid-cols-2 gap-8 mt-[2rem] w-full">
          {/* Third stats box */}
          <div className=" w-full flex   justify-center items-top md:h-[23vh] relative">
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="text-8xl text-center lg:text-9xl md:text-8xl md:text-[clamp(5rem,3cqw, 34rem)] font-bold text-tealAccent mb-2"
              classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
              key={statIndices[2]}
              stat={pfasStats.stats[statIndices[2]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.2}
              index={statIndices[2]}
              text=""
            />
          </div>
          <div className="w-full h-[33vh] "> {/* Added fixed height */}</div>
          <div className="w-full h-full">
            {" "}
            {/* Added fixed height to match */}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1  w-full">
          {/* Third stats box */}
          <div className=" w-full flex  justify-center items-top md:h-[23vh] relative">
            <div
              className="absolute top-0 left-[45%] md:top-[-13%] md:left-[42%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="lg-8xl text-center lg:text-9xl md:text-8xl drop-shadow-md font-bold mb-2 bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
              classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
              key={statIndices[3]}
              stat={pfasStats.stats[statIndices[3]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.44}
              index={statIndices[3]}
              text=""
            />
          </div>
          
          
          
          
          <div className="w-full bg-red-500 h-[0vh] "> {/* Added fixed height */}</div>





          <div className="w-full h-full">
            {" "}
            {/* Added fixed height to match */}
          </div>
        </div>
        {/* Final green div */}
        <div className="w-full  h-[200px]"> {/* Added explicit height */}</div>
      </div>
      <div className="w-full pt-16 flex flex-col items-center">
        {/* Grid container */}
        <div className="grid grid-cols-1 min-w-[1210px] max-w-[2000px] md:grid-cols-2 pt-[20vh] px-12 md:px-[20vw] lg:px-32 gap-8 w-full">
          {/* First stats box */}
          <div className=" w-full flex  -mb-[64px] justify-center items-top md:h-[19vh] relative">
            <div
              className="absolute top-0 left-50 md:top-[-10%] md:left-[55%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit md:min-w-[510px] z-10 h-fit"
              classNamesTitle="text-8xl text-center lg:text-9xl md:text-8xl drop-shadow-lg font-bold mb-2 bg-gradient-to-l from-primary/90 to-tealAccent bg-clip-text text-transparent"
              classNamesSubTitle="text-center text-gray-500 text-2xl font-bold -mt-5"
              key={statIndices[0]}
              stat={pfasStats.stats[statIndices[0]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.36}
              index={statIndices[0]}
              text=""
            />
          </div>
          <div className="w-full h-0 /10 md:h-[19vh] "></div>

          {/* Second row */}
          <div className="w-full /10 h-0 md:h-[33vh] ">
            {" "}
            {/* Added fixed height */}
          </div>
          <div className=" w-full flex justify-center  items-top md:h-[33vh] relative">
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[19%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[45%] md:top-[0] md:left-[clamp(15%, 25%, 45%)] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit h-fit top-10"
              classNamesTitle="text-9xl text-center lg:text-9xl md:text-8xl font-bold text-tealAccent mb-2"
              classNamesSubTitle="text-mintAccent text-center text-2xl font-bold -mt-5"
              key={statIndices[1]}
              stat={pfasStats.stats[statIndices[1]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.41}
              index={statIndices[1]}
              text=""
            />
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1  md:grid-cols-2 gap-8 mt-[2rem] w-full">
          {/* Third stats box */}
          <div className=" w-full flex   justify-center items-top md:h-[23vh] relative">
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="text-8xl text-center lg:text-9xl md:text-8xl md:text-[clamp(5rem,3cqw, 34rem)] font-bold text-tealAccent mb-2"
              classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
              key={statIndices[2]}
              stat={pfasStats.stats[statIndices[2]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.8}
              index={statIndices[2]}
              text=""
            />
          </div>
          <div className="w-full h-[33vh] "> {/* Added fixed height */}</div>
          <div className="w-full h-full">
            {" "}
            {/* Added fixed height to match */}
          </div>
        </div>
        <div className="hidden md:grid grid-cols-1  w-full">
          {/* Third stats box */}
          <div className=" w-full flex  justify-center items-top md:h-[23vh] relative">
            <div
              className="absolute top-0 left-[45%] md:top-[-13%] md:left-[42%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"
              style={{ backgroundColor: "#225566" }}
            ></div>{" "}
            {/* Teal */}
            <div
              className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"
              style={{ backgroundColor: "#BCE2E2" }}
            ></div>{" "}
            {/* Mint */}
            <div
              className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000"
              style={{ backgroundColor: "#E10C73" }}
            ></div>{" "}
            {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="lg-8xl text-center lg:text-9xl md:text-8xl drop-shadow-md font-bold mb-2 bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
              classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
              key={statIndices[3]}
              stat={pfasStats.stats[statIndices[3]]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.44}
              index={statIndices[3]}
              text=""
            />
          </div>
          <div className="w-full h-full">
            {" "}
            {/* Added fixed height to match */}
          </div>
        </div>
        {/* Final green div */}
        <div className="w-full  h-[200px]"> {/* Added explicit height */}</div>
      </div>
    </section>
  );
}
