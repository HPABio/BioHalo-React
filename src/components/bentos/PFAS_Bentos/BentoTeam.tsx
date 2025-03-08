"use client";

import { motion, LayoutGroup } from "framer-motion";
import Image from "next/image";

export function BentoTeam({ className }: { className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover="hover"
      className={`col-span-1 row-span-1 relative overflow-hidden rounded-3xl bg-white p-6 shadow-lg ${className}`}
    >
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-darkGrey">Meet the Team</h3>
        <div className="relative">
          <LayoutGroup id="team-circles">
            <motion.div
              className="flex"
              initial={{
                gap: "0px",
              }}
              variants={{
                hover: {
                  gap: "0.9rem",
                  paddingLeft: "70px",
                  paddingRight: "60px",
                  scale: 1.4,
                },
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                layout
                className="w-8 h-8 rounded-full bg-gradient-to-br from-tealAccent to-mintAccent border-2 border-white -ml-2 first:ml-0"
              />
              <motion.div
                layout
                className="w-8 h-8 rounded-full bg-gradient-to-br from-tealAccent to-mintAccent border-2 border-white -ml-2"
              />
              <motion.div
                layout
                className="w-8 h-8 rounded-full bg-gradient-to-br from-tealAccent to-mintAccent border-2 border-white -ml-2"
              />
              <motion.div
                layout
                className="w-8 h-8 rounded-full bg-gradient-to-br from-tealAccent to-mintAccent border-2 border-white -ml-2"
              />
              <motion.div
                layout
                className="w-8 h-8 rounded-full bg-tealAccent border-2 border-white flex items-center justify-center text-white text-xs -ml-2"
              >
                +8
              </motion.div>
            </motion.div>
          </LayoutGroup>
        </div>
        <p className="text-sm text-gray-600">
          The BioHalo team is made up of experts in biology, chemistry, and
          engineering.
        </p>
      </div>
    </motion.div>
  );
}
