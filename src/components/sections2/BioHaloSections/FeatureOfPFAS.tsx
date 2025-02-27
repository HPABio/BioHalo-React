"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

const pfasFeatures = [
  {
    title: "Persistence",
    description:
      "PFAS are known as 'forever chemicals' due to their strong chemical bonds",
    icon: "🔄",
  },
  {
    title: "Bioaccumulation",
    description: "These compounds can accumulate in living organisms over time",
    icon: "🌱",
  },
  {
    title: "Water Resistance",
    description: "Highly effective at repelling water and oils",
    icon: "💧",
  },
  {
    title: "Wide Distribution",
    description: "Found in various environmental matrices globally",
    icon: "🌍",
  },
  {
    title: "Chemical Stability",
    description: "Resistant to heat, chemical, and biological degradation",
    icon: "⚗️",
  },
  {
    title: "Industrial Use",
    description: "Widely used in manufacturing and consumer products",
    icon: "🏭",
  },
];

const FeatureCardV1 = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeatureCardV2 = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-[2.5rem] p-8 shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="bg-blue-100 rounded-2xl w-16 h-16 flex items-center justify-center mb-4">
      <span className="text-3xl">{icon}</span>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

const FeatureCardV3 = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: string;
}) => (
  <motion.div
    whileHover={{ rotate: 2 }}
    className="bg-white rounded-[3rem] p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100"
  >
    <div className="flex items-center space-x-4 mb-4">
      <div className="bg-purple-100 rounded-2xl w-12 h-12 flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
    <p className="text-gray-600">{description}</p>
  </motion.div>
);

interface FeatureOfPFASProps {
  className?: string;
  debug?: boolean;
}

export const FeatureOfPFAS = ({
  className,
  debug = false,
}: FeatureOfPFASProps) => {
  if (debug) console.log("Rendering FeatureOfPFAS");

  const ref = useRef(null);
  const [version, setVersion] = useState(1);

  const renderVersion = () => {
    switch (version) {
      case 1:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {pfasFeatures.map((feature, index) => (
              <FeatureCardV1 key={index} {...feature} />
            ))}
          </div>
        );
      case 2:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 [&>*:nth-child(even)]:translate-y-8">
            {pfasFeatures.map((feature, index) => (
              <FeatureCardV2 key={index} {...feature} />
            ))}
          </div>
        );
      case 3:
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 [&>*:nth-child(3n+2)]:-translate-y-6 [&>*:nth-child(3n+3)]:translate-y-6">
            {pfasFeatures.map((feature, index) => (
              <FeatureCardV3 key={index} {...feature} />
            ))}
          </div>
        );
    }
  };

  return (
    <section ref={ref} className={`${className} py-20 relative overflow-hidden`}>
      <div className="w-full h-full max-w-[1280px] mx-auto px-6 md:px-14">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 capitalize">Fluorine drives our modern society</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Understanding the key characteristics of Per- and Polyfluoroalkyl
            Substances
          </p>
          <div className="flex justify-center space-x-4 mt-8">
            {[1, 2, 3].map((v) => (
              <button
                key={v}
                onClick={() => setVersion(v)}
                className={`px-4 py-2 rounded-full ${
                  version === v
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                } transition-all duration-300`}
              >
                Version {v}
              </button>
            ))}
          </div>
        </div>
        {renderVersion()}
      </div>

      {/* Under Construction Banner */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-yellow-400/70 text-black/60 text-6xl font-black py-8 px-16 rotate-[35deg] transform scale-[300%] shadow-2xl">
          UNDER CONSTRUCTION
        </div>
      </div>
    </section>
  );
};
