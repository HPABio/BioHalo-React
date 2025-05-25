import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { StaticStatsBox } from "@/components/ui/StatsBox";
import AtomDiagram from "@/components/ui/AtomDiagram";
import BlueprintAnimation from "@/components/ui/BlueprintAnimation";

import IndustrialPollution from "@/assets/images/BGImages/IndustrialPollution_960678749.png";
// Import images for materials and coatings showcase
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import WomanWhiteRainJacket from "@/assets/images/BGImagesTest/WomanWhiteRainJacket.jpeg";
import FoodPackaging from "@/assets/images/PFAS_product_images/food teaser.jpg";
import ElectronicsImage from "@/assets/images/PFAS_product_images/electronics teaser.jpg";
import TextileImage from "@/assets/images/PFAS_product_images/textile-teaser.jpg";
import BuildingMaterial from "@/assets/images/PFAS_product_images/building teaser.jpg";
import { MovingAtom } from "@/components/ui/MovingAtom";

interface FluorinatedMaterialsSection2Props {
  stats: any[];
  className?: string;
  debug?: boolean;
}

const productImages = [
  { image: WaterRepellantFabric, label: "Waterproof Textiles" },
  { image: FoodPackaging, label: "Food Packaging" },
  { image: ElectronicsImage, label: "Electronics" },
  { image: WomanWhiteRainJacket, label: "Outdoor Gear" },
  { image: BuildingMaterial, label: "Building Materials" },
  { image: TextileImage, label: "Carpets & Furniture" },
];

export function FluorinatedMaterialsSection2({
  stats,
  className = "",
}: FluorinatedMaterialsSection2Props) {

  return (
    <section className={`w-full h-full ${className}`}>
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 relative"
        >
          <h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-2 capitalize opacity-1 text-center xl:mt-[3vw]
                bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent py-6 sm:py-10"
          >
            <span className="text-2xl sm:text-4xl md:text-6xl">
              Discover our revolutionary <br />
            </span>

            <span
              className="absolute opacity-0 lg:opacity-50 uppercase blur-[2px] font-black font-Poppins  
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent "
            >
              biohalogenation <br />
            </span>
            <span
              className="absolute opacity-0 lg:opacity-30 uppercase blur-[4px] font-black font-Poppins
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent "
            >
              biohalogenation <br />
            </span>
            <span
              className=" bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins"
            >
              biohalogenation <br />
            </span>

            <span
              className="absolute opacity-0 lg:opacity-50 uppercase blur-[2px] font-black font-Poppins  
                bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent "
            >
              Technology
            </span>
            <span
              className="absolute opacity-0 lg:opacity-30 uppercase blur-[4px] font-black font-Poppins
              bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent"
            >
              Technology
            </span>
            <span
              className=" bg-gradient-to-r from-tealAccent via-teal-500 to-tealAccent bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins"
            >
              Technology
              <br />
            </span>

            {/* <span className="text-4xl md:text-6xl">
              The{" "}
              <span className="text-4xl md:text-6xl bg-gradient-to-br from-mintAccent/40 to-mintAccent/70 bg-clip-text text-transparent">
                Platform
              </span>{" "}
              Offers
            </span> */}
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Harnessing the potential of biology for controlled{" "}
            <span className="font-bold bg-gradient-to-bl from-red-800/80 via-pinkAccent to-purple-900/70 bg-clip-text text-transparent">
              fluorination
            </span>{" "}
            which is deemed impossible by chemical approaches
          </p>
          <MovingAtom
            width={60}
            height={60}
            hoverAmplitude={10}
            hoverDuration={4}
            shouldRotate={false}
            rotationDuration={30}
            shouldScale={true}
            scaleRange={[0.9, 1.1]}
            scaleDuration={4}
            color="rgba(18,110,119,1)"
            className="absolute top-[12%] right-[14%]
            lg:top-[12%] lg:left-[50%]
            md:translate-x-[220%] md:translate-y-[170%]
            lg:translate-x-[100%] lg:translate-y-[90%]
            xl:translate-x-[80%] xl:translate-y-[90%]"
          />
        </motion.div>
      <div className="w-full h-full bg-red-500">
        <h1>Fluorinated Materials Section</h1>
      </div>
    </section>
  );
}



