"use client";

import { motion } from "framer-motion";
import {
  Leaf,
  Shield,
  Recycle,
  Zap,
  Thermometer,
  Globe,
  Network,
  Sprout,
  Settings,
  Gauge,
  Droplet,
  BarChart3,
  Wind,
  Atom,
  Sliders,
  /*   Seedling,
  Flask, */
  Repeat,
} from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="p-6 rounded-xl bg-white/40 backdrop-blur-sm border border-tealAccent/30 hover:border-tealAccent/60 transition-all group"
  >
    <div className="w-12 h-12 rounded-full bg-tealAccent/20 flex items-center justify-center mb-4 group-hover:bg-tealAccent/40 transition-all">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
      {title}
    </h3>
    <p className="text-gray-700 dark:text-gray-200">{description}</p>
  </motion.div>
);


const features = [
  
  
  {
    icon: <Atom className="w-6 h-6 text-tealAccent" />,
    title: "Minimal By-Products",
    description:
      "Our precision technology produces fewer unwanted by-products, increasing efficiency and reducing waste.",
  },
  
  {
    icon: <Atom className="w-6 h-6 text-tealAccent" />,
    title: "Bio-Based Materials",
    description:
      "We utilize biological systems and renewable resources to create sustainable fluorinated polymers.",
  },
  {
    icon: <Droplet className="w-6 h-6 text-pinkAccent" />,
    title: "Reduced Fluorine Usage",
    description:
      "Our technology requires significantly less fluorine while maintaining or enhancing material performance.",
  },
  
  
];


const features_arcived = [
  {
    icon: <Leaf className="w-6 h-6 text-tealAccent" />,
    title: "Eco-Friendly Process",
    description:
      "Our biohalogenation platform uses sustainable, renewable resources and produces minimal waste products.",
  },
  {
    icon: <Shield className="w-6 h-6 text-tealAccent" />,
    title: "Enhanced Safety",
    description:
      "Our products are designed to be safe for both human health and the environment, unlike traditional PFAS.",
  },
  {
    icon: <Recycle className="w-6 h-6 text-tealAccent" />,
    title: "Fully Recyclable",
    description:
      "Our biofluorinated materials are designed for circularity, reducing environmental impact.",
  },
  {
    icon: <Zap className="w-6 h-6 text-tealAccent" />,
    title: "Energy Efficient",
    description:
      "Our biological processes require significantly less energy than traditional chemical synthesis.",
  },
  {
    icon: <Repeat className="w-6 h-6 text-tealAccent" />,
    title: "Renewable & Waste Feedstock",
    description:
      "Our technology utilizes renewable resources and waste materials as feedstock, promoting circular economy principles.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-tealAccent" />,
    title: "60% Reduced GHG Emissions",
    description:
      "Our biofluorination process significantly reduces greenhouse gas emissions compared to traditional methods.",
  },
  {
    icon: <Wind className="w-6 h-6 text-tealAccent" />,
    title: "Low Pollutant Generation",
    description:
      "Our processes generate minimal environmental pollutants, protecting ecosystems and human health.",
  },
  {
    icon: <Atom className="w-6 h-6 text-tealAccent" />,
    title: "Minimal By-Products",
    description:
      "Our precision technology produces fewer unwanted by-products, increasing efficiency and reducing waste.",
  },
  {
    icon: <Atom className="w-6 h-6 text-tealAccent" />,
    title: "Controlled Mono Fluorination",
    description:
      "Our patented process enables precise control over fluorination, targeting specific molecular positions.",
  },
  {
    icon: <Atom className="w-6 h-6 text-tealAccent" />,
    title: "Bio-Based Materials",
    description:
      "We utilize biological systems and renewable resources to create sustainable fluorinated polymers.",
  },
  {
    icon: <Droplet className="w-6 h-6 text-tealAccent" />,
    title: "Reduced Fluorine Usage",
    description:
      "Our technology requires significantly less fluorine while maintaining or enhancing material performance.",
  },
  {
    icon: <Sliders className="w-6 h-6 text-tealAccent" />,
    title: "Fine-Tuning Capabilities",
    description:
      "Our platform allows precise adjustment of properties to meet specific performance requirements.",
  },
  {
    icon: <Thermometer className="w-6 h-6 text-tealAccent" />,
    title: "High Temperature Tolerance",
    description:
      "Our materials maintain stability and performance even under extreme temperature conditions.",
  },
  {
    icon: <Globe className="w-6 h-6 text-tealAccent" />,
    title: "Global Solution",
    description:
      "Our platform provides a worldwide solution to PFAS dependency, adaptable to various industries and applications.",
  },
  {
    icon: <Network className="w-6 h-6 text-tealAccent" />,
    title: "Advanced Process Control",
    description:
      "Precise control over the biohalogenation process ensures consistent, high-quality products.",
  },
  {
    icon: <Sprout className="w-6 h-6 text-tealAccent" />,
    title: "Sustainable Growth",
    description:
      "Our platform scales efficiently while maintaining environmental responsibility.",
  },
  {
    icon: <Settings className="w-6 h-6 text-tealAccent" />,
    title: "Customizable Solutions",
    description:
      "Flexible technology that can be adapted to meet specific industry requirements.",
  },
  {
    icon: <Gauge className="w-6 h-6 text-tealAccent" />,
    title: "Performance Optimization",
    description:
      "Continuous monitoring and improvement of process efficiency and product quality.",
  },
];

interface PlatformFeaturesSectionProps {
  className?: string;
  debug?: boolean;
}

export const PlatformFeaturesSection = ({
  className = "",
  debug = false,
}: PlatformFeaturesSectionProps) => {
  if (debug) console.log("Rendering PlatformFeaturesSection");

  return (
    <section className={`w-full px-12 ${className}`}>
      <div className="w-full max-w-7xl mx-auto px-6 py-24 bg-gradient-to-br from-white via-mintAccent/30 to-tealAccent/10 dark:from-gray-900 dark:via-tealAccent/20 dark:to-tealAccent/10 rounded-xl relative">
        <div className="absolute w-full h-full border-2 border-tealAccent/30 top-0 left-0 rounded-xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl pb-4 font-bold text-tealAccent">
            Our Platform Capabilities
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto font-medium">
            Our biohalogenation platform represents a breakthrough in
            sustainable chemistry, offering a complete solution to replace PFAS
            while maintaining or exceeding performance requirements.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
