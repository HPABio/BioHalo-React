"use client";

import { motion } from "framer-motion";
import { Droplet } from "lucide-react";
import Image from "next/image";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";

export function BentoWaterRepellant({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white shadow-lg ${className}`}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={WaterRepellantFabric}
          alt="Water Repellant Fabric"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{
          backgroundImage:
            "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 100%)",
        }}
        variants={{
          hover: {
            backgroundImage:
              "radial-gradient(circle at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 50%,rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.8) 100%)",
          },
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black/60 via-transparent to-transparent"></div>
      <div className="p-6 absolute top-0 left-0 w-full h-full">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-lightGrey">
              Water Repellency
            </h3>
            <motion.div
              className="w-12 h-12 rounded-full bg-mintAccent/30 border-2 border-tealAccent/70 flex items-center justify-center"
              initial={{
                color: "rgba(34,85,102,1)",
                scale: 1,
                rotate: 0,
                borderColor: "rgba(34,85,102,1)",
              }}
              variants={{
                hover: {
                  color: "rgba(56,189,248,1)",
                  scale: 1.2,
                  rotate: -20,
                  borderColor: "rgba(56,189,248,0.6)",
                  backgroundColor: "rgba(56,189,248,0.1)",
                },
              }}
              transition={{ duration: 0.2 }}
            >
              <Droplet className="w-6 h-6" />
            </motion.div>
          </div>
          <div className="pt-7 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-300">Water Contact Angle</p>
              <div className="text-2xl font-bold text-mintAccent">150°</div>
            </div>
            <div>
              <p className="text-sm text-gray-300">Durability</p>
              <div className="text-2xl font-bold text-mintAccent">
                50+ washes
              </div>
            </div>
          </div>
          <p className="text-[11px] text-gray-300 leading-tight">
            Advanced fluoropolymer treatment creates a superhydrophobic surface
            that repels water and stains
          </p>
        </div>
      </div>
    </motion.div>
  );
}
