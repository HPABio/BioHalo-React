"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MovingAtom } from "@/components/ui/MovingAtom";
import AtomDiagram from "@/components/ui/AtomDiagram";
import Barrels from "@/assets/images/BluePrintSVG/Barrels.svg";
import beaker from "@/assets/images/BluePrintSVG/beaker.svg";
// import BioReactorBP from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import BioReactorBP2 from "@/assets/images/BluePrintSVG/bio-reactor-product.svg";
import DNALogo from "@/assets/images/BluePrintSVG/dna-logo.svg";
import DNA_Logo_long from "@/components/ui/DNA-Logo-long";
import BioHaloStep2 from "@/assets/images/BluePrintSVG/BioHalo-step2.svg";

import BioReactorV1PNG from "@/assets/images/BluePrintPNGs/bio-reactorV1.png";
import BioReactor2PNG from "@/assets/images/BluePrintPNGs/BioReactor2.png";
import BioHaloStep2PNG from "@/assets/images/BluePrintPNGs/BioHalo-step2.png";
import DNALogoPNG from "@/assets/images/BluePrintPNGs/dna-logo.png";
import ScreenShot from "@/assets/images/ScreenShots/ScreenShot.png";
import enzymeImage from "@/assets/images/BluePrint with Color/Enzyme.png";

import {
  Beaker,
  Sprout,
  Dna,
  Microscope,
  Atom,
  // Flask,
  Leaf,
  Recycle,
  Zap,
  ArrowRight,
  Droplet,
  TrendingDown,
} from "lucide-react";
import MobileNetworkDiagramWithNodes from "@/components/mobileVersion/mobileNetworkDiagramWithNodes";
interface TechnologyFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface MobilePlatformTechnologySectionProps {
  className?: string;
}

const technologyFeatures: TechnologyFeature[] = [
  {
    id: 9,
    title: "Reduced Fluorine Usage",
    description: "Minimal fluorine required while maintaining performance.",
    icon: (
      <TrendingDown className="" />
    ),
  },
  {
    id: 8,
    title: "BioBased Materials",
    description: "Sustainable fluorinated polymers from renewable resources.",
    icon: <Sprout className="" />,
  },
  {
    id: 7,
    title: "Minimal By-Products",
    description: "Precision technology with reduced waste output.",
    icon: <Zap className="" />,
  },
  /* {
    id: 1,
    title: "Bio-Based Enzyme Platform",
    description:
      "Our computational platform predicts and optimizes enzyme performance for specific substrates and reaction conditions.",
    icon: <Dna className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  }, */
  /* {
    id: 2,
    title: "Biocatalysis",
    description:
      "We harness the power of biocatalysts to perform chemical transformations with unprecedented selectivity and efficiency.",
    icon: <Microscope className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  }, */
  {
    id: 6,
    title: "Circular Economy",
    description: "Designed for recyclability and biodegradability.",
    icon: <Recycle className="" />,
  },
  {
    id: 4,
    title: "Green Chemistry",
    description: "Mild conditions with minimal waste generation.",
    icon: <Leaf className="" />,
  },
  /* {
    id: 5,
    title: "Scalable Production",
    description:
      "Our technology seamlessly scales from laboratory to industrial production while maintaining performance and sustainability.",
    icon: <Beaker className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  }, */

  /* {
    id: 3,
    title: "Enzyme Engineering",
    description:
      "Our proprietary enzyme engineering platform enables precise control over fluorination reactions, targeting specific molecular positions.",
    icon: <Atom className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  }, */
];

// Add new interface for technology process steps
interface TechnologyProcessStep {
  id: number;
  title: string;
  description: string;
  image: any;
  alt: string;
}

// Create process step data
const technologyProcessSteps: TechnologyProcessStep[] = [
  {
    id: 1,
    title: "DNA Engineering",
    description:
      "Our genetic engineering platform enables precise control over microbial gene expression.",
    image: DNALogoPNG,
    alt: "DNA Structure",
  },
  {
    id: 2,
    title: "Metabolic Engineering",
    description:
      "We rewire the metabolism of microorganisms tailored for the production of fluorinated monomers and polymers containing fluorine atoms at specific molecular positions.",
    image: enzymeImage,
    alt: "Enzyme Structure",
  },
  {
    id: 3,
    title: "Screening & Optimization",
    description:
      "In an iterative process, we screen and optimize the enzymes and strains for optimal performance.",
    image: BioHaloStep2PNG,
    alt: "BioHalo Process",
  },
  {
    id: 4,
    title: "Industrial Scaling",
    description:
      "Our fermentation process enables sustainable production compatible with industrial scale.",
    image: BioReactor2PNG,
    alt: "Bioreactor Blueprint",
  },
];

export const MobilePlatformTechnologySection = ({
  className = "",
}: MobilePlatformTechnologySectionProps) => {
  return (
    <section className={`w-full relative ${className} overflow-hidden`}>
      <div className="relative bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-black/0 via-black/50 to-black">
      </div>

      <div className="max-w-7xl mx-auto px-12 -mt-32">
        <div className="absolute bottom-[100%] left-[100%] translate-x-[-50%] translate-y-[50%] opacity-[4%] mix-blend-screen">
          <AtomDiagram width={5300} height={5300} color="rgba(18,110,119,1)" />
        </div>
        <div className="absolute top-[100%] right-[100%] translate-x-[50%] -translate-y-[50%] opacity-[50%]">
          <AtomDiagram width={2300} height={2300} color="rgba(20,40,50,1)" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative pt-12 sm:pt-24
          flex flex-col items-center justify-center"
        >
          <h1 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent
          text-xl sm:text-3xl font-Poppins font-light relative">
              discover our revolutionary <br />
              <MovingAtom
            width={50}
            height={50}
            hoverAmplitude={5}
            hoverDuration={4}
            color="rgba(18,110,119,1)"
            className="absolute opacity-50
            top-[0%] right-[50%]
            translate-x-[450%] translate-y-[-50%]"
          />
            </h1>
          <h1
            className="text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent
            leading-none">
            <span
              className="text-3xl leading-none sm:text-4xl 
              bg-gradient-to-tr from-teal-900 via-teal-500 to-teal-800 bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins "
            >
              biohalogenation <br />
            </span>
            <span
              className="text-3xl leading-none sm:text-4xl uppercase drop-shadow-sm font-normal font-Poppins
              bg-gradient-to-br from-mintAccent/60 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparentt"
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
          <p className="text-gray-500 sm:w-[70%] mx-auto mt-12 font-light text-xs leading-tight 
          sm:text-base sm:leading-tight ">
            {/* Harnessing the potential of biology for controlled{" "} */}
            By harnessing the potential of biology <br /> we can achieve  <span className="font-bold bg-tealAccent bg-gradient-to-r from-mintAccent/10 via-mintAccent/60 to-mintAccent/10 bg-clip-text text-transparent">
            controlled fluorination
            </span>{" "}on a level of precision  which is deemed impossible by standard chemical approaches.
          </p>
          
        </motion.div>


        {/* Process Steps Section */}
        <div className="space-y-14 mb-24 sm:px-12">
          {technologyProcessSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="max-sm:text-center px-4 flex flex-col items-center gap-8"
            >
              {/* Image */}
              <div className="flex-1 relative group p-4">
                <div className="absolute inset-0 bg-tealAccent/20 rounded-2xl blur-3xl group-hover:blur-2xl opacity-70 transition-all duration-500 -z-10"></div>
                <div
                  className="bg-gray-200/0 bg-gradient-to-br from-gray-200/10 via-slate-700/20 to-tealAccent/20 p-6 rounded-2xl border border-tealAccent/30 backdrop-blur-sm shadow-xl 
                overflow-hidden h-[250px] flex items-center justify-center sm:p-12"
                >
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={450}
                    height={450}
                    style={{ objectFit: "contain" }}
                    className="opacity-90 w-full h-auto max-h-[350px] sm:p-12 transition-all duration-500 filter hover:grayscale-[30%] group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -left-3 bg-tealAccent/80 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.id}
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-left px-6">
                <h3 className="text-2xl font-bold mb-2 leading-tight
                bg-lightGrey bg-gradient-to-br from-lightGrey via-gray-900/60 to-gray-300 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm mb-3">{step.description}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-tealAccent to-mintAccent/50 rounded-full mb-6"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div
          className="grid grid-cols-1 gap-12 mb-20 px-4 mt-16 relative"
          id="mobile-platform-features-content"
        >
          {/* Section detection helper - invisible element to help with intersection detection */}
          <div
            className="absolute top-0 left-0 w-full h-24 -mt-16 pointer-events-none"
            aria-hidden="true"
          ></div>

          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-tealAccent/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-tealAccent/10 rounded-full blur-3xl transform translate-x-1/3"></div>
            <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-pinkAccent/5 rounded-full blur-xl"></div>
          </div>

          <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center relative pt-12 sm:pt-24
          flex flex-col items-center justify-center"
        >
          <h1 className="text-center bg-gradient-to-br from-mintAccent/30 via-gray-500/40 to-lightGrey/30 bg-clip-text text-transparent
          text-xl sm:text-3xl font-Poppins font-light relative">
              explore our <br />
              <MovingAtom
            width={50}
            height={50}
            hoverAmplitude={5}
            hoverDuration={4}
            color="rgba(18,110,119,1)"
            className="absolute opacity-50
            top-[0%] right-[50%]
            translate-x-[450%] translate-y-[-50%]"
          />
            </h1>
          <h1
            className="text-center bg-gradient-to-br from-mintAccent/50 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparent
            leading-none">
            <span
              className="text-3xl leading-none sm:text-4xl 
              bg-gradient-to-tr from-teal-900 via-teal-500 to-teal-800 bg-clip-text text-transparent
              uppercase drop-shadow-sm font-black font-Poppins "
            >
              biohalogenation <br />
            </span>
            <span
              className="text-3xl leading-none sm:text-4xl uppercase drop-shadow-sm font-normal font-Poppins
              bg-gradient-to-br from-mintAccent/60 via-gray-500/60 to-lightGrey/50 bg-clip-text text-transparentt"
            >
              key features
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
          
        </motion.div>


          {/* Right side: Features list */}
          <div className="flex flex-col justify-center items-center w-full">
          <p className="text-gray-500 sm:w-[80%] mx-auto font-light text-xs leading-tight 
          sm:text-base sm:leading-tight text-center pb-2
          ">
            Our revolutionary biohalogenation platform offers unique
            advantages over traditional fluorination methods
          </p>
            <MobileNetworkDiagramWithNodes
              enzymeImage={enzymeImage.src}
              enzymeImageAlt="Enzyme"
              width="max-w-3xl"
              imageWidth={600}
              imageHeight={400}
            />
          </div>
          <div className="grid grid-cols-1 gap-3 -mt-14 px-0 sm:px-32">
            {technologyFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
                className="p-3 
                bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm 
                border border-tealAccent/10 rounded-lg hover:border-tealAccent/30 transition-all group"
              >
                <div className="flex items-center space-x-3 ">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-tealAccent/10 flex items-center justify-center 
                  group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)] text-tealAccent"
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                        <h3 className="text-base font-semibold leading-tight sm:text-xl sm:leading-snug sm:mb-1
                        bg-lightGrey bg-gradient-to-br from-lightGrey via-gray-900/60 to-gray-300 bg-clip-text text-transparent">
                          {feature.title}
                        </h3>
                        <p className="text-gray-500 text-xs sm:text-sm pb-2 pt-1 leading-tight
                        sm:font-normal sm:leading-tight">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
