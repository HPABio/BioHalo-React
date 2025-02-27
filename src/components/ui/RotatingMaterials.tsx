"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import agricultureTeaser from "@/assets/images/PFAS_product_images/agriculture teaser.jpg";
import automotiveTeaser from "@/assets/images/PFAS_product_images/automotive teaser.jpg";
import aviationTeaser from "@/assets/images/PFAS_product_images/aviation teaser.jpg";
import buildingTeaser from "@/assets/images/PFAS_product_images/building teaser.jpg";
import chemicalIntermTeaser from "@/assets/images/PFAS_product_images/chemical interm teaser.jpg";
import clariantACS2022KeyVisualTeaser from "@/assets/images/PFAS_product_images/Clariant ACS 2022 Key Visual teaser.jpg";
import clariantImageTeaserBentonite20190903 from "@/assets/images/PFAS_product_images/Clariant image teaser Bentonite 20190903.jpg";
import clariantImageTeaserLego from "@/assets/images/PFAS_product_images/Clariant image teaser lego.jpg";
import clariantTeaserHealthCareTeaser20242511 from "@/assets/images/PFAS_product_images/Clariant Teaser Health Care Teaser 20242511.jpg";
import clariantTeaserReformaxLDPPlus from "@/assets/images/PFAS_product_images/Clariant Teaser Reformax LDP Plus.jpg";
import clariantPhotoWindTurbinesOnTheOceanTeaser from "@/assets/images/PFAS_product_images/Clariant_Photo_Wind turbines on the ocean_teaser 570x363.jpg";
import electronicsTeaser from "@/assets/images/PFAS_product_images/electronics teaser.jpg";
import homeCareEaser from "@/assets/images/PFAS_product_images/food teaser.jpg";
import industrialLubricants from "@/assets/images/PFAS_product_images/Gecko_570 x 363.jpg";
import industrialManuTeaser from "@/assets/images/PFAS_product_images/industrial-manu-teaser.jpg";
import mainTeaser from "@/assets/images/PFAS_product_images/Main-teaser.jpeg";
import miningTeaser from "@/assets/images/PFAS_product_images/mining-teaser.jpg";
import oilGasTeaser from "@/assets/images/PFAS_product_images/oil-gas-teaser.jpg";
import packagingTeaser from "@/assets/images/PFAS_product_images/packaging-teaser.jpg";
import refineryTeaser from "@/assets/images/PFAS_product_images/refinery-teaser.jpg";
import textileTeaser from "@/assets/images/PFAS_product_images/textile-teaser.jpg";
import wasteTeaser from "@/assets/images/PFAS_product_images/waste-teaser.jpg";

export default function RotatingMaterials() {
  const images = [
    agricultureTeaser,
    automotiveTeaser,
    aviationTeaser,
    buildingTeaser,
    chemicalIntermTeaser,
    clariantACS2022KeyVisualTeaser,
    clariantImageTeaserBentonite20190903,
    clariantImageTeaserLego,
    clariantTeaserHealthCareTeaser20242511,
    clariantTeaserReformaxLDPPlus,
    clariantPhotoWindTurbinesOnTheOceanTeaser,
    electronicsTeaser,
    homeCareEaser,
    industrialLubricants,
    industrialManuTeaser,
    mainTeaser,
    miningTeaser,
    oilGasTeaser,
    packagingTeaser,
    refineryTeaser,
    textileTeaser,
    wasteTeaser,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div className="w-full h-full rounded-full relative overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentImageIndex]}
            alt="Industry application"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
