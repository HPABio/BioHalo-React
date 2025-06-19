"use client";
import { motion } from "framer-motion";
import { Droplet, Flame, Shield, Clock, Zap, Layers } from "lucide-react";

const benefits = [
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Heat Resistant",
    description: "Withstands extreme temperatures",
  },
  {
    icon: <Droplet className="w-6 h-6" />,
    title: "Water Repellent",
    description: "Excellent hydrophobic properties",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Chemical Resistant",
    description: "Resists harsh chemicals and solvents",
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Durable",
    description: "Long-lasting material properties",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Long-lived",
    description: "Exceptional stability over time",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Low Friction",
    description: "Superior non-stick properties",
  },
];

export function PFASBenefits({ className }: { className?: string }) {
  return (
    <div className={`grid sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-4 ${className}`}>
      {benefits.map((benefit, index) => (
        <motion.div
          key={benefit.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-3 py-4 px-4 rounded-lg backdrop-blur-[10px] bg-white/15
           hover:bg-white/10 border-2 border-lightGrey/40"
        >
          <div className="text-tealAccent/80 mt-1">{benefit.icon}</div>
          <div>
            <h3 className="font-semibold text-sm md:text-lg bg-slate-200 bg-gradient-to-br from-mintAccent via-mintAccent/10 to-tealAccent/80 bg-clip-text text-transparent">
              {benefit.title}
            </h3>
            <p className="text-xs lg:text-sm text-gray-200 lg:leading-tight">{benefit.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
