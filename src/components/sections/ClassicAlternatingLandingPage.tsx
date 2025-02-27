"use client";

import { useState } from "react";
import Image from "next/image";
import PfasMolecule from "@/components/ui/PfasMolecule";
import PfasMoleculeImage from "@/assets/images/pfasMolecule.svg";
import GradientBlobBG from "@/assets/images/GradientBlobBG.jpg";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import PollutionEarth from "@/assets/images/BluePrintStyle/polutionEarth.svg";
import PolutedEarth from "@/assets/images/BluePrintStyle/polutedEarth.svg";
import eColiBlueprint from "@/assets/images/BluePrintStyle/eColiBP.svg";
import BacteriaWindowBlueprint from "@/components/ui/BacteriaWindowBlueprint";

// import Hero from '@/components/Hero';
export default function TestBed() {
  return (
    <main className="w-full h-full">
      {/* Section 1 - Original (Image Right) */}
      <section className="w-screen h-screen flex items-center justify-center  bg-lightGrey">
        <div className="top-0 left-0 w-full h-full flex flex-row items-center justify-between gap-8 p-12 max-w-[1800px]">
          <div className="w-1/2 bg-yellow-300/0">
            <h1 className="text-7xl lg:text-9xl font-bold mb-4 bg-gradient-to-r from-pink-500 via-teal-400 to-mint-400 bg-clip-text text-transparent uppercase">
              PFAS
            </h1>
            <h2 className="text-xl lg:text-4xl mb-6">
              Per- and polyfluoroalkyl substances...
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ...also referred to as "forever chemicals" are a group of
              versatile chemicals that are extremely/highly resistant to
              degradation.
            </p>
          </div>
          <div className="w-1/2">
            <div className="w-full h-full max-w-[600px] aspect-square rounded-lg overflow-hidden shadow-xl flex items-center justify-center bg-purple-500/0">
              {/* <PfasMolecule className="w-full px-12"/>   */}
              <div className="relative w-full h-full  bg-yellow-500/0">
                {/*       <div className="absolute top-0 left-0 w-full h-full blur-sm blend-multiply">
                    <Image src={GradientBlobBG} alt="Gradient Blob BG" className="w-full h-full" />
                  </div> */}
                <div
                  className="w-full h-full bg-purple-950/0 rotate-[-90deg]"
                  style={{
                    backgroundImage: `
                        radial-gradient(at 87% 91%, hsla(174, 77%, 37%, 0.9) 0px, transparent 50%),
                        radial-gradient(at 57% 66%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 6% 90%, hsla(168, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 58% 69%, hsla(180, 82%, 35%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 82% 74%, hsla(174, 69%, 33%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 20% 45%, hsla(178, 87%, 37%, 0.85) 0px, transparent 50%)
                      `,
                  }}
                ></div>

                <Image
                  src={PfasMoleculeImage}
                  alt="PFAS Molecule"
                  className="w-full h-full absolute top-0 right-0 px-12 md:px-24 sm:blur-sm md:blur-sm lg:blur-md xl:blur-lg opacity-70"
                />
                <Image
                  src={PfasBP}
                  alt="PFAS Molecule"
                  className="w-full h-full absolute top-0 left-0 px-12 md:px-24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Image Left */}
      <section className="w-screen h-screen bg-blue-500 relative">
        <div className="absolute top-0 right-0 w-full h-full flex items-center justify-between p-12 bg-lightGrey">
          <div className="w-1/2">
            <div className="relative max-w-[600px] w-full aspect-square rounded-lg overflow-hidden shadow-none">
              {/* <div className="absolute top-0 left-0 w-full h-full blur-sm blend-multiply">
                    <Image src={GradientBlobBG} alt="Gradient Blob BG" className="w-full h-full" />
                </div> */}
              <div
                className="w-full h-full bg-purple-950/0 rotate-90"
                style={{
                  backgroundImage: `
                        radial-gradient(at 87% 91%, hsla(180, 77%, 37%, 0.9) 0px, transparent 50%),
                        radial-gradient(at 57% 66%, hsla(168, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 6% 90%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 58% 69%, hsla(174, 82%, 35%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 82% 74%, hsla(180, 69%, 33%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 20% 45%, hsla(168, 87%, 37%, 0.85) 0px, transparent 50%)
                      `,
                }}
              ></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  <Image
                    src={BioReactorBlueprint}
                    alt="BioReactor Blueprint"
                    className="w-[80%] h-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-12">
            <h1 className="text-4xl lg:text-7xl 2xl:text-9xl font-bold mb-4 bg-gradient-to-r from-purple-500 via-blue-400 to-cyan-400 bg-clip-text text-transparent uppercase">
              they are everywhere
            </h1>
            <h2 className="text-xl lg:text-4xl 3xl:text-6xl text-purple-600 mb-6">
              Due to their specific properties...
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ...they can be found in a wide range of industry applications,
              munufacturing processes, and consumer products. Including: Food
              packaging, Automotive parts, Electronics, Building materials, and
              many more
            </p>
          </div>
        </div>
      </section>
      {/* Section 5 - Image Right */}
      <section className="w-screen h-screen bg-purple-500 relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-12 bg-lightGrey">
          <div className="w-1/2 pr-12">
            <h1 className="text-4xl lg:text-7xl 2xl:text-9xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-400 bg-clip-text text-transparent uppercase">
              but three is a catch
            </h1>
            <h2 className="text-xl text-indigo-600 mb-6">
              Their extreme persistence and durability...
            </h2>
            <p className="text-gray-600 leading-relaxed">
              ...make them a serious threat to the environment and human health
              when improperly produced or disposed of.
            </p>
          </div>
          <div className="w-1/2">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-purple-950/0 rotate-90"
                style={{
                  backgroundImage: `
                        radial-gradient(at 87% 91%, hsla(168, 77%, 37%, 0.9) 0px, transparent 50%),
                        radial-gradient(at 57% 66%, hsla(180, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 6% 90%, hsla(174, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 58% 69%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 82% 74%, hsla(168, 69%, 33%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 20% 45%, hsla(180, 87%, 37%, 0.85) 0px, transparent 50%)
                      `,
                }}
              ></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <Image src={PollutionEarth} alt="Pollution Earth" className="w-[80%] h-[80%]" /> */}
                  <Image
                    src={PolutedEarth}
                    alt="Polluted Earth"
                    className="w-[80%] h-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Image Right */}
      <section className="w-screen h-screen bg-green-500 relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-12 bg-lightGrey">
          <div className="w-1/2 pr-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent uppercase">
              Sustainable Development
            </h1>
            <h2 className="text-xl text-green-600 mb-6">
              Building for the future
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to sustainable development ensures that we create
              solutions that not only solve today's challenges but also
              contribute to a better tomorrow. Join us in building a sustainable
              future.
            </p>
          </div>
          <div className="w-1/2">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-purple-950/0 rotate-[-90deg]"
                style={{
                  backgroundImage: `
                        radial-gradient(at 87% 91%, hsla(168, 77%, 37%, 0.9) 0px, transparent 50%),
                        radial-gradient(at 57% 66%, hsla(180, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 6% 90%, hsla(174, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 58% 69%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 82% 74%, hsla(168, 69%, 33%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 20% 45%, hsla(180, 87%, 37%, 0.85) 0px, transparent 50%)
                      `,
                }}
              ></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <Image src={PollutionEarth} alt="Pollution Earth" className="w-[80%] h-[80%]" /> */}
                  <Image
                    src={eColiBlueprint}
                    alt="Polluted Earth"
                    className="w-[80%] h-[80%]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3 - Image Right */}
      <section className="w-screen h-screen bg-green-500 relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-12 bg-lightGrey">
          <div className="w-1/2 pr-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-500 via-emerald-400 to-teal-400 bg-clip-text text-transparent uppercase">
              Sustainable Development
            </h1>
            <h2 className="text-xl text-green-600 mb-6">
              Building for the future
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to sustainable development ensures that we create
              solutions that not only solve today's challenges but also
              contribute to a better tomorrow. Join us in building a sustainable
              future.
            </p>
          </div>
          <div className="w-1/2">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <div
                className="w-full h-full bg-purple-950/0 rotate-[-90deg]"
                style={{
                  backgroundImage: `
                        radial-gradient(at 87% 91%, hsla(168, 77%, 37%, 0.9) 0px, transparent 50%),
                        radial-gradient(at 57% 66%, hsla(180, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 6% 90%, hsla(174, 85%, 39%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 58% 69%, hsla(327, 88%, 45%, 0.8) 0px, transparent 50%),
                        radial-gradient(at 82% 74%, hsla(168, 69%, 33%, 0.85) 0px, transparent 50%),
                        radial-gradient(at 20% 45%, hsla(180, 87%, 37%, 0.85) 0px, transparent 50%)
                      `,
                }}
              ></div>
              <div className="absolute top-0 left-0 w-full h-full">
                <div className="w-full h-full flex items-center justify-center">
                  {/* <Image src={PollutionEarth} alt="Pollution Earth" className="w-[80%] h-[80%]" /> */}
                    <BacteriaWindowBlueprint classNames="w-[80%] h-[80%] pl-6 pt-6 lg:pl-14 lg:pt-14 border-2 border-red-500 scale-100" duration="6.5s" delay="3.5s" iterationCount="2" isAnimating={false}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4 - Image Left */}
      <section className="w-screen h-screen bg-yellow-500 relative">
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between p-12 bg-lightGrey">
          <div className="w-1/2">
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl">
              <img
                src="/placeholder-image.jpg"
                alt="Global connectivity"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="w-1/2 pl-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-500 via-orange-400 to-red-400 bg-clip-text text-transparent uppercase">
              Global Connectivity
            </h1>
            <h2 className="text-xl text-yellow-600 mb-6">
              Connecting worlds, bridging gaps
            </h2>
            <p className="text-gray-600 leading-relaxed">
              In today's interconnected world, we help businesses establish and
              maintain global connections. Our solutions enable seamless
              collaboration and communication across borders and time zones.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
