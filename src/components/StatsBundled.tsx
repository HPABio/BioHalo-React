"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  MotionValue,
} from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { StatsBox } from "./ui/StatsBox";


const stats = [
  {
    number: "25",
    prefix: "+",
    suffix: "bn €",
    label: "Global Annual PFAS Market",
  },
  {
    number: "20000",
    prefix: "+",
    label: "Contaminated Sites in Europe",
  },
  {
    number: "50",
    prefix: "+",
    suffix: "bn €",
    label: "Health-Related Costs",
  },
];


export function StatsBundled({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className={`relative bg-lightGrey  border-b-12 overflow-hidden min-h-screen ${
        className || ""
      }`}
    >
      {/* Main container - Adding flex-col to properly stack children */}
      <div className="w-full pt-16 flex flex-col items-center">
        {/* Grid container */}
        <div className="grid grid-cols-1 min-w-[1210px] max-w-[2000px] md:grid-cols-2 pt-[20vh] px-12 gap-8 w-full">
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
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="text-8xl lg:text-9xl md:text-8xl drop-shadow-lg font-bold mb-2 bg-gradient-to-l from-primary/90 to-tealAccent bg-clip-text text-transparent"
              classNamesSubTitle="text-center text-gray-500 text-2xl font-bold -mt-5"
              key={0}
              stat={stats[0]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.2}
              index={0}
              text=""
            />
          </div>
          <div className="w-full h-0 /10 md:h-[22vh] "></div>

          {/* Second row */}
          <div className="w-full /10 h-0 md:h-[33vh] ">
            {" "}
            {/* Added fixed height */}
          </div>
          <div className=" w-full flex justify-center  items-top md:h-[33vh] relative">
            <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block"  style={{ backgroundColor: "#225566" }} ></div>{" "} {/* Teal */}
            <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"  style={{ backgroundColor: "#BCE2E2" }} ></div>{" "} {/* Mint */}
            <div className="absolute top-0 left-[45%] md:top-[0] md:left-[clamp(15%, 25%, 45%)] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: "#E10C73" }}  ></div>{" "} {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit h-fit top-10"
              classNamesTitle="text-9xl lg:text-9xl md:text-8xl font-bold text-tealAccent mb-2"
              classNamesSubTitle="text-mintAccent text-center text-2xl font-bold -mt-5"
              key={1}
              stat={stats[1]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.3}
              index={1}
              text=""
            />
          </div>
        </div>

        <div className="md:hidden grid grid-cols-1  md:grid-cols-2 gap-8 mt-[2rem] w-full">
          {/* Third stats box */}
          <div className=" w-full flex   justify-center items-top md:h-[23vh] relative">
            <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{ backgroundColor: "#225566" }} ></div>{" "} {/* Teal */}
            <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ backgroundColor: "#BCE2E2" }} ></div>{" "} {/* Mint */}
            <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: "#E10C73" }} ></div>{" "} {/* Pink */}
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="text-8xl lg:text-9xl md:text-8xl md:text-[clamp(5rem,3cqw, 34rem)] font-bold text-tealAccent mb-2"
              classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
              key={2}
              stat={stats[2]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.2}
              index={2}
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
          <div className=" w-full flex   justify-center items-top md:h-[23vh] relative">
            <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{ backgroundColor: "#225566" }} ></div>{" "}{/* Teal */}
            <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ backgroundColor: "#BCE2E2" }} ></div>{" "}{/* Mint */}
            <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: "#E10C73" }} ></div>{" "}{/* Pink */}
            <StatsBox
              classNamesContainer="w-fit z-10 h-fit"
              classNamesTitle="lg-8xl lg:text-9xl md:text-8xl drop-shadow-md font-bold mb-2 bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
              classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
              key={2}
              stat={stats[2]}
              scrollYProgress={scrollYProgress}
              scrollEndThreshold={0.4}
              index={2}
              text=""
            />
          </div>
          <div className="w-full h-[33vh] "> {/* Added fixed height */}</div>
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


export function StatsBundled2 ({ className, ref, scrollYProgress }: { className?: string, 
  ref?: React.RefObject<HTMLElement>, 
  scrollYProgress?: MotionValue<number> }) {

  return (
    <div id="all-in-on" className="grid grid-cols-1  w-full">
      <div id="all-in-on" className="grid grid-cols-1 w-full">
          {/* Mobile-like stats container */}
          <div className="w-[500px]  mx-auto flex flex-col items-center">
            {/* First stats box */}
            <div className="w-full flex justify-center items-top relative">
            <div className="absolute top-0 left-[45%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"  style={{ backgroundColor: "#BCE2E2" }} ></div>{" "} {/* Mint */}
            <div className="absolute top-0 left-[17%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: "#E10C73" }}  ></div>{" "} {/* Pink */}
              <StatsBox
                classNamesContainer="w-fit z-10 h-fit"
                classNamesTitle="text-8xl font-bold mb-2 bg-gradient-to-r from-primary/85 to-tealAccent bg-clip-text text-transparent"
                classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
                stat={stats[0]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.6}
                index={0}
                text=""
              />
            </div>

            {/* Spacing */}
            <div className="h-[38px]"></div>

            {/* Second stats box */}
            <div className="w-full flex justify-center items-top relative">
            <div className="absolute top-0 left-[25%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ backgroundColor: "#BCE2E2" }} ></div>{" "} {/* Mint */}
            <div className="absolute top-0 left-[45%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: "#E10C73" }} ></div>{" "} {/* Pink */}
              <StatsBox
                classNamesContainer="w-fit h-fit"
                classNamesTitle="text-9xl font-bold text-tealAccent mb-2"
                classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
                stat={stats[1]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.7}
                index={1}
                text=""
              />
            </div>

            {/* Spacing */}
            <div className="h-[38px]"></div>

            {/* Third stats box */}
            <div className="w-full flex justify-center items-top relative">  
            <div className="absolute top-0 left-[35%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{ backgroundColor: "#BCE2E2" }} ></div>{" "}{/* Mint */}
            <div className="absolute top-0 left-[45%] w-[30vw] h-[30vw] min-w-[200px] min-h-[200px] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{ backgroundColor: "#E10C73" }} ></div>{" "}{/* Pink */}
              <StatsBox
                classNamesContainer="w-fit z-10 h-fit"
                classNamesTitle="text-8xl drop-shadow-lg font-bold mb-2 bg-gradient-to-l from-primary/90 to-tealAccent bg-clip-text text-transparent"
                // classNamesTitle="text-8xl font-bold mb-2 bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
                classNamesSubTitle="text-center text-tealAccent/50 text-2xl font-bold -mt-5"
                stat={stats[2]}
                scrollYProgress={scrollYProgress}
                scrollEndThreshold={0.8}
                index={2}
                text=""
              />
            </div>

            {/* Bottom spacing */}
            <div className="h-[100px]"></div>
        </div>
      </div>
    </div>
  );
};




