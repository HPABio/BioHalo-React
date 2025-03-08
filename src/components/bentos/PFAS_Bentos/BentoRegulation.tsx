import React from "react";
import { motion } from "framer-motion";
import { Scale } from "lucide-react";
import Image from "next/image";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";

export const BentoRegulation = ({ className }: { className?: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white shadow-lg ${className}`}
    >
      <div className="absolute top-6 left-6 z-20">
        <Scale className="w-8 h-8 text-white/80" />
      </div>
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
        <div className="space-y-4 mt-12">
          <h3 className="text-xl font-semibold text-white">
            Regulatory Changes
          </h3>
          <p className="text-sm text-gray-300">
            Bans in the USA & EU are on the horizon
          </p>
          <div className="mt-4">
            <p className="text-sm text-mintAccent font-semibold">
              Due to growing environmental and health concerns, regulators are
              moving towards restricting PFAS use.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
