"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { BioHaloLogo2 } from "../ui/BioHaloLogo2";
import Image from 'next/image'
import logo from '@/assets/images/logo.png'
import FollowPath from "../ui/FollowPath";
export function HeroSection4({ className }: { className?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Log any video errors
    const video = videoRef.current;
    if (video) {
      video.addEventListener("error", (e) => {
        console.error("Video error:", video.error);
      });
    }
  }, []);

  console.log("HeroSection is rendering");

  return (
    <section
      className={`relative h-screen flex items-center justify-center overflow-hidden ${
        className || ""
      }`}
    >
      <div className="fixed w-full h-full"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-tealAccent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full  bg-[url('https://www.transparenttextures.com/patterns/ecailles.png')]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/70 via-transparent to-transparent "></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/70 via-transparent to-transparent "></div>
      <div className="absolute w-full h-full">

      </div>
      <div className="absolute w-full h-full ">
        <BioHaloLogo2
          styles={{
            classNames: "opacity-1 max-w-[1500px] max-h-[1500px]",
            width: "calc(100vw - 150px)",
            height: "calc(100vh - 150px)",
            animationduration: "1.5s",
            animationdelay: "0.3s",
          }}
        />
      </div>

      
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[150vw] h-[50vh]">
        <div
            className="w-full h-full rounded-[100%]"
            style={{
              background:
                "linear-gradient(to top, #282828 0%, rgba(248, 248, 248, 0.5) 50%, transparent 100%)",
            }}
          />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-[150vw] h-[50vh] scale-[1.1]">
        <div
          className="w-full h-full rounded-[100%]"
          style={{
            background: "radial-gradient(ellipse at center, #F8F8F8 0%, rgba(248, 248, 248, 0.5) 10%, transparent 100%)",
          }}
        />
      </div> */}
      
      
    </section>
  );
}
