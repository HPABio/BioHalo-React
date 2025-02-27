"use client";

import { motion } from "framer-motion";
import { PeriodicTableNeoMorph } from "../../sections/PeriodicTableNeoMorph";

export function BentoPeriodicTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-2 row-span-2 relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-darkGrey">
          Interactive Periodic Table
        </h3>
        <div className="w-full flex justify-center">
          <PeriodicTableNeoMorph />
        </div>
      </div>
    </motion.div>
  );
}
