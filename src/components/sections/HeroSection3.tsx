"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import "./gradient.css";

export function HeroSection3() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="gradient-bg" style={{ zIndex: -1 }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="goo">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="10"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                result="goo"
              />
              <feBlend in="SourceGraphic" in2="goo" />
            </filter>
          </defs>
        </svg>
        <div className="gradients-container">
          <div className="g1"></div>
          <div className="g2"></div>
          <div className="g3"></div>
          <div className="g4"></div>
          <div className="g5"></div>
          <div className="interactive"></div>
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
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
    </section>
  );
}
