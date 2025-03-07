"use client";

import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import MeshFabric from "@/assets/images/Mesh-fabric.png";

export function BentoContact({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`group relative col-span-1 row-span-1 overflow-hidden rounded-3xl bg-darkGrey cursor-pointer ${className}`}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={{
          hover: { scale: 1.1 },
        }}
        transition={{ duration: 0.2 }}
      >
        <Image
          src={MeshFabric}
          alt="Mesh Fabric"
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

      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-black/60 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-black/60 via-transparent to-transparent"></div>

      <div className="w-full h-full p-6 absolute top-0 left-0 z-10">
        <div className="h-full flex flex-col justify-between">
          <div className="w-10 h-10 rounded-full flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <div className="flex items-center gap-2 text-white/80">
              <span className="text-sm">Contact us</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
