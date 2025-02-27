"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";
import dropletsImageDark from "@/assets/images/droplets-dark.jpg";
import { useRef, useState, useEffect } from "react";
import { AnimatedCounterScroll } from "../ui/AnimatedCounterScroll";
import { StatsBox } from "../ui/StatsBox";
import { ImageCarousel } from "@/components/ImageCarousel";

import Image1 from "@/assets/images/PFAS_product_images/textile-teaser.jpg";
import Image2 from "@/assets/images/PFAS_product_images/refinery-teaser.jpg";
import Image3 from "@/assets/images/PFAS_product_images/packaging-teaser.jpg";
import Image4 from "@/assets/images/PFAS_product_images/oil-gas-teaser.jpg";
import Image5 from "@/assets/images/PFAS_product_images/mining-teaser.jpg";
import { ImageArrayDiagonal } from "../ui/ImageArrayDiagonal";




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



const sampleItems = [
  {
    imageUrl: Image1.src,
    title: "TEXTILES",
    topic: "Industry Solutions",
    description:
      "Innovative solutions for the textile industry with our fluorine-free alternatives.",
  },
  {
    imageUrl: Image2.src,
    title: "REFINERIES",
    topic: "Process Enhancement",
    description:
      "Advanced refinery processes with environmentally conscious technologies.",
  },
  {
    imageUrl: Image3.src,
    title: "PACKAGING",
    topic: "Sustainable Solutions",
    description:
      "Eco-friendly packaging solutions without compromising performance.",
  },
  {
    imageUrl: Image4.src,
    title: "OIL & GAS",
    topic: "Industry Innovation",
    description:
      "Revolutionary approaches to oil and gas processing with reduced environmental impact.",
  },
  {
    imageUrl: Image5.src,
    title: "MINING",
    topic: "Extraction Excellence",
    description:
      "Sustainable mining solutions that protect both performance and the environment.",
  },
];

export function StatsSection4({ className }: { className?: string }) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  return (
    <section
      ref={sectionRef}
      className={`relative bg-lightGrey  border-b-12 overflow-hidden min-h-screen ${className || ''}`}
    >   
        {/* Main container - Adding flex-col to properly stack children */}
        <div className="w-full pt-16  flex flex-col"> 
          {/* Grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2  gap-8 w-full">
              
              {/* First stats box */}
              <div className=" w-full flex  -mb-[64px] justify-center items-top md:h-[23vh] relative">
              <div className="absolute top-0 left-50 md:top-[-10%] md:left-[55%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{backgroundColor: '#225566'}}></div> {/* Teal */}
              <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{backgroundColor: '#BCE2E2'}}></div> {/* Mint */}
              <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{backgroundColor: '#E10C73'}}></div> {/* Pink */}
                <StatsBox
                  classNamesContainer="w-fit z-10 h-fit"
                  classNamesTitle="text-9xl md:text-[clamp(5rem, 7cqw, 45rem)] font-bold text-tealAccent mb-2"
                  classNamesSubTitle="text-center text-gray-500 text-2xl font-bold -mt-5"
                  key={0}
                  stat={stats[0]}
                  scrollYProgress={scrollYProgress}
                  scrollEndThreshold={0.2}
                  index={0}
                  text=""
                />
              </div>
              < div className="w-full h-0 /10 md:h-[33vh] "> 
              </div>

              {/* Second row */}
              <div className="w-full /10 h-0 md:h-[33vh] "> {/* Added fixed height */}
              </div>
              <div className=" w-full flex justify-center  items-top md:h-[33vh] relative">
              <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{backgroundColor: '#225566'}}></div> {/* Teal */}
              <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{backgroundColor: '#BCE2E2'}}></div> {/* Mint */}
              <div className="absolute top-0 left-[45%] md:top-[0] md:left-[clamp(15%, 25%, 45%)] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{backgroundColor: '#E10C73'}}></div> {/* Pink */}
                <StatsBox
                  classNamesContainer="w-fit h-fit top-10"
                  classNamesTitle="text-9xl md:text-9xl font-bold text-tealAccent mb-2"
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

          <div className="grid grid-cols-1  md:grid-cols-2 gap-8 mt-[2rem] w-full">
              {/* Third stats box */}
              <div className=" w-full flex   justify-center items-top md:h-[23vh] relative">
              <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{backgroundColor: '#225566'}}></div> {/* Teal */}
              <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{backgroundColor: '#BCE2E2'}}></div> {/* Mint */}
              <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{backgroundColor: '#E10C73'}}></div> {/* Pink */}
                <StatsBox
                  classNamesContainer="w-fit z-10 h-fit"
                  classNamesTitle="text-9xl md:text-[clamp(5rem,3cqw, 34rem)] font-bold text-tealAccent mb-2"
                  classNamesSubTitle="text-center text-gray-500 text-2xl font-bold -mt-5"
                  key={2}
                  stat={stats[2]}
                  scrollYProgress={scrollYProgress}
                  scrollEndThreshold={0.2}
                  index={2}
                  text=""
                />
              </div>
              <div className="w-full h-[33vh] "> {/* Added fixed height */}
              </div>
              <div className="w-full h-full"> {/* Added fixed height to match */}
              </div>
          </div>
          <div className="grid grid-cols-1  w-full">
              {/* Third stats box */}
              <div className=" w-full flex   justify-center items-top md:h-[23vh] relative">
              <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{backgroundColor: '#225566'}}></div> {/* Teal */}
              <div className="absolute top-0 left-[35%] md:top-[-5%] md:left-[50%]  w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{backgroundColor: '#BCE2E2'}}></div> {/* Mint */}
              <div className="absolute top-0 left-[45%] md:top-[5%] md:left-[35%] w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{backgroundColor: '#E10C73'}}></div> {/* Pink */}
                <StatsBox
                  classNamesContainer="w-fit z-10 h-fit"
                  classNamesTitle="text-9xl drop-shadow-sm font-bold mb-2 bg-gradient-to-r from-primary to-danger bg-clip-text text-transparent"
                  classNamesSubTitle="text-center text-gray-500 text-2xl font-bold -mt-5"
                  key={2}
                  stat={stats[2]}
                  scrollYProgress={scrollYProgress}
                  scrollEndThreshold={0.2}
                  index={2}
                  text=""
                />
              </div>
              <div className="w-full h-[33vh] "> {/* Added fixed height */}
              </div>
              <div className="w-full h-full"> {/* Added fixed height to match */}
              </div>
          </div>
          {/* Final green div */}
          <div className="w-full  h-[200px]"> {/* Added explicit height */}
          </div>
        </div>
    </section>
  );
}



