"use client";

import ClassicAlternatingLandingPage from "@/components/sections/ClassicAlternatingLandingPage";
import HeroSectionFloatingPlasmids from "@/components/HeroSections/HeroSectionFloatingPlasmids";
import { StatsSection6 } from "@/components/sections2/StatsSection6";
import Image from "next/image";

import beaker from "@/assets/images/BluePrint with Color/beaker.png";
import bioreactor from "@/assets/images/BluePrint with Color/bio-reactor.png";
import biotechscreening from "@/assets/images/BluePrint with Color/biotech-screening.png";
import dnalogo from "@/assets/images/BluePrint with Color/dna-logo.png";
import factory from "@/assets/images/BluePrint with Color/factory.png";
import pfasmolecule from "@/assets/images/BluePrint with Color/pfas-molecule.png";
import polutedearth from "@/assets/images/BluePrint with Color/poluted-earth.png";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import BioHaloBG from "@/assets/images/BioHalo-background-compressed.jpeg";

export default function Landing3() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-800 text-white">
      {/* Hero Section Container */}
      <div className="relative h-screen w-screen bg-lightGrey z-10">
        <div className="w-full h-full">
          <HeroSectionFloatingPlasmids className="z-10 flex flex-col items-center justify-center" />
        </div>
      </div>

      {/* Stats Section */}
      <StatsSection6 className="z-10 overflow-visible" />

      {/* Content Sections Container */}
      <div className="relative flex flex-col">
        <div className="fixed z-5 inset-0">
          <Image
            src={BioHaloBG}
            alt="BioHalo BG"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#30546490] to-black/100"></div>
        </div>
        <div className="h-[25vh] z-[20] w-full bg-gradient-to-b from-lightGrey 25% via-lightGrey/50 50% to-transparent 75%">
          {" "}
        </div>
        <div className="relative md:w-[720px] lg:w-[1080px] mx-auto">
          {/* Test Section */}
          <section className="w-full min-h-screen flex flex-col items-center justify-center bg-red-500/0">
            <div className="w-full h-full flex flex-col items-center justify-center p-6 sm:p-12 relative bg-blue-500/0">
              {/* BACKGROUND */}
              <div className="w-[80%] max-w-[600px] aspect-square bg-green-500/0">
                <div className="relative w-full h-full rounded-lg overflow-visible bg-yellow-500/0">
                  {/* BLURRED IMAGE */}
                  <div className="absolute top-0 left-0 w-full h-full p-6 block blur-md opacity-50 bg-purple-500/0">
                    <Image
                      src={PfasBP}
                      alt="PFAS Molecule"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full p-6 block opacity-50">
                    <Image
                      src={PfasBP}
                      alt="PFAS Molecule"
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* BACKGROUND TEXT */}
                  <div className="absolute top-0 left-0 w-full h-full p-6 block">
                    <div className="w-full h-full flex items-center justify-center opacity-90">
                      <h1 className="text-8xl md:text-9xl lg:scale-[2] xl:scale-[4] blur-lg font-bold bg-gradient-to-r from-pink-500 via-teal-400 to-mint-400 bg-clip-text text-transparent uppercase">
                        PFAS
                      </h1>
                    </div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full p-6 block">
                    <div className="w-full h-full flex items-center justify-center opacity-100 blur-sm">
                      <h1 className="text-8xl md:text-9xl lg:scale-[2] xl:scale-[4] font-bold bg-gradient-to-r from-pink-500 via-teal-400 to-mint-400 bg-clip-text text-transparent uppercase">
                        PFAS
                      </h1>
                    </div>
                  </div>
                </div>
              </div>

              {/* Text overlay */}
              <div className="max-w-[400px] text-center space-y-4 lg:-mt-12">
                {/*  <h1 className="text-6xl sm:text-5xl lg:text-9xl font-bold bg-gradient-to-r from-pink-500 via-teal-400 to-mint-400 bg-clip-text text-transparent uppercase">
                    PFAS
                  </h1> */}
                <h2 className="text-lg sm:text-xl lg:text-2xl">
                  Per- and polyfluoroalkyl substances...
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  ...also referred to as{" "}
                  <span className="bold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 bg-clip-text text-transparent">
                    "forever chemicals"{" "}
                  </span>
                  are a group of versatile chemicals that are extremely
                  resistant to degradation.
                </p>
              </div>
            </div>
          </section>

          {/* Section 1 */}
          <section className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 p-6 sm:p-12">
              <div className="w-full sm:w-1/2 space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-teal-400 to-mint-400 bg-clip-text text-transparent uppercase">
                  PFAS
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl">
                  Per- and polyfluoroalkyl substances...
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  ...also referred to as{" "}
                  <span className="bold bg-gradient-to-r from-fuchsia-500 via-fuchsia-400 to-fuchsia-300 bg-clip-text text-transparent">
                    "forever chemicals"{" "}
                  </span>
                  are a group of versatile chemicals that are extremely
                  resistant to degradation.
                </p>
              </div>
              <div className="w-full sm:w-1/2 max-w-[400px]">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  {/* <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      radial-gradient(at 87% 91%, hsla(174, 77%, 37%, 0.9) 0px, transparent 50%),
                      radial-gradient(at 57% 66%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%),
                      radial-gradient(at 6% 90%, hsla(168, 85%, 39%, 0.85) 0px, transparent 50%)
                    `,
                    }}
                  ></div> */}
                  <div className="absolute top-0 left-0 w-full h-full p-6 block group-hover:hidden">
                    <Image
                      src={PfasBP}
                      alt="PFAS Molecule"
                      className="w-full h-full p-6"
                    />
                  </div>
                  <div className="absolute top-0 left-0 w-full h-auto my-auto p-6 hidden group-hover:block">
                    <Image
                      src={pfasmolecule}
                      alt="PFAS Molecule"
                      className="w-full h-full p-6"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section className="w-full min-h-screen flex items-center justify-center">
            <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-8 p-6 sm:p-12">
              <div className="w-full sm:w-1/2 max-w-[400px] order-2 sm:order-1">
                <div className="relative w-full aspect-square rounded-lg overflow-hidden">
                  <div
                    className="w-full h-full"
                    style={{
                      backgroundImage: `
                      radial-gradient(at 87% 91%, hsla(180, 77%, 37%, 0.9) 0px, transparent 50%),
                      radial-gradient(at 57% 66%, hsla(168, 85%, 39%, 0.85) 0px, transparent 50%),
                      radial-gradient(at 6% 90%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%)
                    `,
                    }}
                  ></div>
                  <Image
                    src={BioReactorBlueprint}
                    alt="BioReactor Blueprint"
                    className="absolute top-0 left-0 w-full h-full p-6"
                  />
                </div>
              </div>
              <div className="w-full sm:w-1/2 space-y-4 order-1 sm:order-2">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent uppercase">
                  they are everywhere
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-purple-600">
                  Due to their specific properties...
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  ...they can be found in a wide range of industry applications
                  and consumer products.
                </p>
              </div>
            </div>
          </section>

          {/* Additional sections... */}
        </div>
      </div>

      {/* 
      <div className="relative lg:max-w-[1536px] h-screen w-screen bg-lightGrey">
        <div className="w-full h-full">
            <ClassicAlternatingLandingPage />
        </div>
      </div> */}
    </main>
  );
}
