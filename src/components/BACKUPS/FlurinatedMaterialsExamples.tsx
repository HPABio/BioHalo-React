"use client";

import { motion } from "framer-motion";
import { useTransform, useScroll } from "framer-motion";

import AdobeStockCPU from "@/assets/images/AdobeStock/AdobeStock_1514887767_Preview_CPU.jpeg";
import JetEngineCloseUpLummiAi from "@/assets/images/LummiAi/JetEngineClose-Up.jpeg";
import MatteBlackBottleLummiAi from "@/assets/images/LummiAi/MatteBlackBottle.jpeg";
import { useRef } from "react";

// Function to generate random brightness values
const generateBrightnessValues = (count: number, min: number, max: number) => {
    min = min || 0.7;
    max = max || 1.3;
    count = count || 10;
    return Array.from({ length: count }, () => {
      const brightness = min + Math.random() * (max - min); // Random value between 0.9 and 1.3
      return `blur(0px) brightness(${brightness.toFixed(2)})`;
    });
  };

export function FlurinatedMaterialsExamples() {
    const refCPUText = useRef(null);
    const refTurbine = useRef(null);
    const refBottle = useRef(null);
    const { scrollYProgress: scrollYProgressBottle } = useScroll({
      target: refBottle,
      offset: ["start end", "center start"],
    });
  return (
    <div>
        {/* Vertical Bento Layout */}
            
        <div className="w-full flex-col gap-8 py-8">
              {/* First Bento Box - CPU Section */}

              <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  initial={{
                    filter: "blur(0px) brightness(1)",
                  }}
                  whileInView={{
                    filter: generateBrightnessValues(10, 0.8, 1.3),
                    transition: {
                      duration: 4,
                      ease: "easeInOut",
                      repeat: Infinity,
                    },
                  }}
                  className="w-full h-full relative"
                  style={{
                    background: `url(${AdobeStockCPU.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                  <motion.div
                    ref={refCPUText}
                    initial={{ filter: "brightness(1)" }}
                    style={{
                      filter: useTransform(
                        useScroll({
                          target: refCPUText,
                          offset: ["start end", "start start"],
                        }).scrollYProgress,
                        [0, 0.4, 0.5, 1],
                        [
                          "brightness(1)",
                          "brightness(3)",
                          "brightness(2)",
                          "brightness(1)",
                        ]
                      ),
                    }}
                    className="absolute bottom-8 right-8"
                  >
                    <p className="text-sm text-slate-300/50 font-medium font-poppins leading-none">
                      <span className="text-3xl text-tealAccent uppercase font-semibold font-poppins leading-none">
                        electronics
                        <br />
                      </span>
                      production of
                      <br />
                      <span className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60 leading-none">
                        semiconductors &
                      </span>
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Second Bento Box - Aerospace Section */}
              <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  ref={refTurbine}
                  initial={{ filter: "brightness(1) saturate(0.7)" }}
                  style={{
                    background: `url(${JetEngineCloseUpLummiAi.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    filter: useTransform(
                      useScroll({
                        target: refTurbine,
                        offset: ["start end", "center start"],
                      }).scrollYProgress,
                      [0, 0.3, 0.5, 1],
                      [
                        "brightness(1) saturate(0.7)",
                        "brightness(2) saturate(1.2)",
                        "brightness(3) saturate(1)",
                        "brightness(0.8) saturate(0.7)",
                      ]
                    ),
                  }}
                  className="w-full h-full relative"
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, transparent 0%, transparent 40%, black 65%, black 100%)",
                    }}
                  />
                  <motion.div
                    ref={refTurbine}
                    initial={{ filter: "brightness(1)" }}
                    style={{
                      filter: useTransform(
                        useScroll({
                          target: refTurbine,
                          offset: ["start end", "start start"],
                        }).scrollYProgress,
                        [0, 0.2, 0.4, 1],
                        [
                          "brightness(1)",
                          "brightness(1.5)",
                          "brightness(2.5)",
                          "brightness(1)",
                        ]
                      ),
                    }}
                    className="absolute bottom-8 left-8"
                  >
                    <p className="text-sm text-slate-300/50 font-black font-poppins text-right">
                      <span
                        className="text-xl text-tealAccent uppercase font-semibold font-poppins"
                        style={{ lineHeight: ".1" }}
                      >
                        components
                      </span>
                      <br />
                      improving
                      <br />
                      <span
                        className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60"
                        style={{ lineHeight: ".3" }}
                      >
                        aerospace
                      </span>
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              {/* Third Bento Box - Coating Section */}
              <div className="w-full h-[400px] relative rounded-3xl overflow-hidden bg-black/20 backdrop-blur-sm border border-white/10">
                <motion.div
                  ref={refBottle}
                  className="w-full h-full relative"
                  initial={{
                    rotate: -30,
                    scale: 0.7,
                    opacity: 0,
                    backgroundSize: "70%",
                    filter: "blur(0px) brightness(1)",
                  }}
                  style={{
                    background: `url(${MatteBlackBottleLummiAi.src})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    rotate: useTransform(
                      scrollYProgressBottle,
                      [0, 0.6],
                      [-30, 0]
                    ),
                    scale: useTransform(
                      scrollYProgressBottle,
                      [0, 0.4, 0.9, 1],
                      [0.7, 1.1, 1.1, 0.9]
                    ),
                    backgroundSize: useTransform(
                      scrollYProgressBottle,
                      [0, 0.5],
                      ["80%", "100%"]
                    ),
                    opacity: useTransform(
                      scrollYProgressBottle,
                      [0, 0.5, 0.9, 1],
                      [0, 1, 1, 0.1]
                    ),
                    filter: useTransform(
                      scrollYProgressBottle,
                      [0, 0.3, 0.9, 1],
                      [
                        "blur(2px) brightness(0.9)",
                        "blur(0px) brightness(2)",
                        "blur(0px) brightness(1.2)",
                        "blur(2px) brightness(0.3)",
                      ]
                    ),
                  }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "radial-gradient(circle, transparent 0%, transparent 40%, black 75%, black 100%)",
                    }}
                  />
                  <div className="absolute bottom-8 left-8">
                    <p className="text-sm text-slate-300/50 font-black font-poppins text-right">
                      sealing and coating
                      <br />
                      <span
                        className="text-md text-tealAccent uppercase font-semibold font-poppins opacity-60"
                        style={{ lineHeight: ".3" }}
                      >
                        surfaces and materials
                        <br />
                      </span>
                      <span
                        className="text-xl text-tealAccent uppercase font-semibold font-poppins"
                        style={{ lineHeight: ".1" }}
                      >
                        sealing and coating
                      </span>
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
    </div>
  );
}