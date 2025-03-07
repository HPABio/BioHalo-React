"use client";

import { motion } from "framer-motion";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";

export function BentoVideo({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`group col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-pinkAccent cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={PfasBP}
          alt="Pfas Molecule"
          className="w-full h-full object-cover opacity-50"
        />
      </motion.div>
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        initial={{ backgroundImage: "none", backgroundColor: "rgba(0,0,0,0)" }}
        variants={{
          hover: {
            backgroundImage:
              "linear-gradient(to bottom right,rgba(0,0,0,0.6), rgba(0,0,0,0.2))",
          },
        }}
        transition={{ duration: 0.2 }}
      />
      <div className="relative h-full p-6 flex flex-col justify-between">
        <div className="flex justify-end">
          <PlayCircle className="text-white/80 w-8 h-8 group-hover:scale-110 transition-transform" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">Watch Demo</h3>
          <p className="text-sm text-white/80">See our technology in action</p>
        </div>
      </div>
    </motion.div>
  );
}
