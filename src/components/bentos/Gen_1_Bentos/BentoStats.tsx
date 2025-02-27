"use client";

import { motion } from "framer-motion";
import { AnimatedCounter } from "../../ui/AnimatedCounter";

export function BentoStats() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg"
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-darkGrey">Impact Numbers</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-500">Cost Reduction</p>
            <div className="text-2xl font-bold text-tealAccent">
              <AnimatedCounter value="40%" />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500">Efficiency Gain</p>
            <div className="text-2xl font-bold text-tealAccent">
              <AnimatedCounter value="85%" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
