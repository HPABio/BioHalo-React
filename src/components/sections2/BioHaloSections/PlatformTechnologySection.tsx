"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { MovingAtom } from "@/components/ui/MovingAtom";
import AtomDiagram from "@/components/ui/AtomDiagram";
import Barrels from "@/assets/images/BluePrintSVG/Barrels.svg";
import beaker from "@/assets/images/BluePrintSVG/beaker.svg";
import BioReactorBP from "@/assets/images/BluePrintSVG/bio-reactor.svg";
import DNALogo from "@/assets/images/BluePrintSVG/dna-logo.svg";
import DNA_Logo_long from "@/components/ui/DNA-Logo-long";
import BioHaloStep2 from "@/assets/images/BluePrintSVG/BioHalo-step2.svg";
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
import NetworkDiagramWithNodes from "@/components/ui/NetworkDiagramWithNodes";
interface TechnologyFeature {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
}

interface PlatformTechnologySectionProps {
  className?: string;
}

const technologyFeatures: TechnologyFeature[] = [
  {
    id: 9,
    title: "Reduced Fluorine Usage",
    description:
      "Our technology requires significantly less fluorine while maintaining or enhancing material performance.",
    icon: (
      <TrendingDown className="w-8 h-8  text-teal-700 hover:text-teal-500" />
    ),
  },
  {
    id: 8,
    title: "Bio-Based Materials",
    description:
      "We utilize biological systems and renewable resources to create sustainable and safe fluorinated polymers.",
    icon: <Sprout className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  },
  {
    id: 7,
    title: "Minimal By-Products",
    description:
      "Our precision technology produces fewer unwanted by-products, increasing efficiency and reducing waste.",
    icon: <Zap className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
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
    description:
      "Our platform is designed with end-of-life considerations, enabling recyclability and biodegradability.",
    icon: <Recycle className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
  },
  {
    id: 4,
    title: "Green Chemistry",
    description:
      "Our processes operate under mild conditions, using renewable resources and generating minimal waste.",
    icon: <Leaf className="w-8 h-8 text-teal-700 hover:text-teal-500" />,
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
    image: DNALogo,
    alt: "DNA Structure",
  },
  {
    id: 2,
    title: "Metabolic Engineering Technology for controlled fluorination",
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
    image: BioHaloStep2,
    alt: "BioHalo Process",
  },
  {
    id: 4,
    title: "Industrial Scaling",
    description:
      "Our fermentation process enables sustainable production compatible with industrial scale.",
    image: BioReactorBP,
    alt: "Bioreactor Blueprint",
  },
];

export const PlatformTechnologySection = ({
  className = "",
}: PlatformTechnologySectionProps) => {
  return (
    <section className={`w-full relative ${className} overflow-hidden`}>
      <div className="relative bottom-0 left-0 w-full h-[200px] bg-gradient-to-b from-black/0 via-black/50 to-black">
        <div
          className="relative top-0 left-[50%] 
          translate-x-[-50%] translate-y-[-250px] 
          md:translate-x-[-50%] md:translate-y-[-380px] 
          lg:translate-x-[-30%]  lg:translate-y-[-580px] 
          w-[300px] h-[300px] md:w-[500px] md:h-[500px] lg:w-[800px] lg:h-[800px] "
          style={{
            backgroundImage: `url(${beaker.src})`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 xl:px-8 -mt-32 md:mt-0">
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

        {/* Process Steps Section */}
        <div className="space-y-14 xl:space-y-24 mb-24 md:pt-16">
          {technologyProcessSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`max-sm:text-center px-4 md:px-12 lg:px-24 flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-16`}
            >
              {/* Image */}
              <div className="flex-1 relative group">
                <div className="absolute inset-0 bg-tealAccent/20 rounded-2xl blur-3xl group-hover:blur-2xl opacity-70 transition-all duration-500 -z-10"></div>
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 rounded-2xl border border-tealAccent/20 backdrop-blur-sm shadow-xl overflow-hidden h-[250px] lg:h-[350px] flex items-center justify-center">
                  <Image
                    src={step.image}
                    alt={step.alt}
                    width={450}
                    height={450}
                    style={{ objectFit: "contain" }}
                    className="opacity-90 w-full h-auto max-h-[350px] transition-all duration-500 filter hover:grayscale-[30%] group-hover:scale-105"
                  />
                </div>
                <div className="absolute -bottom-3 -right-3 bg-tealAccent/80 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {step.id}
                </div>
              </div>

              {/* Text content */}
              <div className="flex-1 text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-gray-200 to-gray-400 bg-clip-text text-transparent">
                  {step.title}
                </h3>
                <p className="text-gray-400 text-lg mb-6">{step.description}</p>
                <div className="w-24 h-1 bg-gradient-to-r from-tealAccent to-mintAccent/50 rounded-full mb-6"></div>

                {index < technologyProcessSteps.length - 1 && (
                  <div className="hidden md:flex items-center text-tealAccent/70">
                    {/* <span className="mr-2">Next Step</span>
                    <ArrowRight className="w-5 h-5 animate-pulse" /> */}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features Section */}
        <div
          className="grid grid-cols-1 gap-12 mb-20 px-4 md:px-12  md:pt-16 mt-16 relative"
          id="platform-features-content"
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
            className="text-center mb-12 relative"
          >
            <h2 className="text-3xl md:text-5xl font-bold capitalize bg-gradient-to-br from-mintAccent/60 to-mintAccent/80 bg-clip-text text-transparent py-6">
              Key Technology Features
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Our revolutionary biohalogenation platform offers unique
              advantages over traditional fluorination methods
            </p>
            <div className="absolute w-full h-0.5 bg-gradient-to-r from-transparent via-tealAccent to-transparent mt-6 opacity-30"></div>
          </motion.div>

          {/* Right side: Features list */}
          <div className="flex justify-center items-center w-full">
            <NetworkDiagramWithNodes
              enzymeImage={enzymeImage.src}
              enzymeImageAlt="Enzyme"
              width="max-w-3xl"
              imageWidth={600}
              imageHeight={400}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 -mt-14">
            {technologyFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: feature.id * 0.1 }}
                className={`p-6 bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-tealAccent/10 rounded-xl hover:border-tealAccent/30 transition-all group ${
                  index === technologyFeatures.length - 1
                    ? "md:col-span-2 md:max-w-[calc(50%-12px)] md:mx-auto"
                    : ""
                }`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)]">
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 text-gray-300">
                      {feature.title}
                    </h3>
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-tealAccent/20 to-transparent mb-3" />
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-md text-gray-400 max-w-3xl mx-auto md:mt-12 p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-tealAccent/10 backdrop-blur-sm"
          >
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Microscope className="w-6 h-6 text-tealAccent/70" />
                </div>
                <p>
                  We use a combination of computational tools and experimental
                  techniques to optimize enzyme performance and metabolic
                  pathways.
                </p>
              </div>

              <div className="w-full h-px bg-gradient-to-r from-transparent via-tealAccent/20 to-transparent" />

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <Leaf className="w-6 h-6 text-tealAccent/70" />
                </div>
                <p>
                  Our technology enables the creation of bio-based alternatives
                  to traditional fluorinated materials, offering superior
                  performance while eliminating the environmental and health
                  concerns associated with PFAS.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 p-8 rounded-xl">
          <h3 className="text-2xl font-semibold mb-4 text-gray-400">
            Transforming Industries with Sustainable Solutions
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform technology enables the creation of bio-based
            alternatives to traditional fluorinated materials, offering superior
            performance while eliminating the environmental and health concerns
            associated with PFAS.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex capitalize items-center justify-center px-6 py-3 bg-tealAccent text-white font-medium rounded-lg hover:bg-tealAccent/90 transition-colors"
            >
              Learn More About Our Technology via our newsletter
              <Zap className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div>
 */}

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative text-center bg-gradient-to-br from-tealAccent/10 to-mintAccent/20 p-8 rounded-xl"
        >
          <p className="text-lg font-semibold mb-4 text-gray-400">
            When working with our highly specialized enzyme platform, our team
            of highly skilled scientists and engineers scout and tailor
            enzymatic functions for your specific application. We use a
            combination of computational tools and experimental techniques to
            optimize enzyme performance, ensuring that your application receives
            the best possible variant for your specific usecase.
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our platform technology enables the creation of bio-based
            alternatives to traditional fluorinated materials, offering superior
            performance while eliminating the environmental and health concerns
            associated with PFAS.
          </p>
          <div className="mt-6">
            <a
              href="#contact"
              className="inline-flex capitalize items-center justify-center px-6 py-3 bg-tealAccent text-white font-medium rounded-lg hover:bg-tealAccent/90 transition-colors"
            >
              Learn More About Our Technology via our newsletter
              <Zap className="w-5 h-5 ml-2" />
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
};
