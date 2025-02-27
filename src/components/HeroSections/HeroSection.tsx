"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useEffect, useRef } from "react";
import { PeriodicTable } from "../sections2/PeriodicTable";
// If you still need this RollingPFAS import, keep it; otherwise, remove it

export function HeroSection() {
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

  return (
    <section className="relative z-40 h-screen overflow-hidden bg-lightGrey">
      {/* Background Video */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        poster="/videos/fallback-image.jpg"
      >
        <source src="/videos/BGVideoPrism.mp4" type="video/mp4" />
        {/* <source src="/videos/BGVideo.mp4" type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>

      {/* Main content container */}
      <div className="relative z-10 grid grid-cols-2 h-full bg-gradient-to-tr from-gray-900 to-transparent">
        {/* LEFT COLUMN: hero text & calls-to-action */}
        <div className="flex flex-col items-center justify-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-md mx-auto"
          >
            <h1 className="text-5xl font-bold text-darkGrey mb-6">
              BioHalo: The Biohalogenation Company
            </h1>
            <p className="text-lg text-darkGrey/80 mb-8">
              Replacing PFAS with sustainable, high-performance biofluorinated
              materials
            </p>
            <div className="flex justify-center gap-4">
              <Button variant="default" size="lg">
                Learn More
              </Button>
              <Button variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: embed the CodePen iframe */}
        <div className="flex items-center justify-center p-4 border-l/*  border-mediumGrey  */">
          <div className="w-5/6 rounded-3xl bg-gradient-to-r from-darkGrey to-gray-700 p-6 text-white opacity-30">
            <PeriodicTable />
          </div>
        </div>
      </div>
    </section>
  );
}
