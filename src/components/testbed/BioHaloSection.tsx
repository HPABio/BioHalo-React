"use client";

import Image from "next/image";
import BioHaloLogoPNG from "@/assets/images/logo.png";
import BioReactor from "@/assets/images/BioReactorBlueprint.svg";
import HaloSVG from "@/components/ui/HaloSVG";

export const BioHaloSection = () => {
  return (
    <>
      <section className="w-screen h-[50vh] flex items-center justify-between px-16 bg-gradient-to-br from-blue-500/20 to-blue-500/5">
        <div className="max-w-[1080px] mx-auto w-full flex items-center justify-between">
          <div className="w-1/2 h-full flex flex-col justify-center space-y-8 pr-12">
            <Image src={BioHaloLogoPNG} alt="BioHalo Logo" className="w-96" />
            <h2 className="text-3xl font-semibold text-gray-600">
              Using{" "}
              <span className="absolute font-black font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent uppercase blur-[3px] opacity-55">
                biohalogenation
              </span>
              <span className="font-black font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent uppercase">
                biohalogenation
              </span>{" "}
              to disrupt the{" "}
              <span className="font-black font-Arial">PFAS </span> industry
            </h2>
            <p className="text-xl leading-relaxed text-gray-500">
              At biohalo we use biohalogenation to create fluorinated
              biopolymers that can be used in a wide range of applications.
            </p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-gray-800 rounded-2xl shadow-lg">
              <Image src={BioReactor} alt="PFAS" className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="w-screen h-[50vh] flex items-center justify-between px-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-[1080px] mx-auto w-full flex items-center justify-between">
          <div className="w-1/2 h-full flex flex-col justify-center space-y-8 pr-12">
            <Image src={BioHaloLogoPNG} alt="BioHalo Logo" className="w-96" />
            <h2 className="text-3xl font-semibold text-gray-300 uppercase relative">
              Using{" "}
              <span className="absolute font-black font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent blur-[3px] opacity-55">
                biohalogenation
              </span>
              <span className="font-black font-Arial bg-gradient-to-tl from-tealAccent to-mintAccent bg-clip-text text-transparent">
                biohalogenation
              </span>{" "}
              to disrupt the{" "}
              <span className="font-black font-Arial">PFAS </span> industry
            </h2>
            <p className="text-xl leading-relaxed text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>
          <div className="w-1/2 h-full flex items-center justify-center">
            <div className="w-4/5 h-4/5 bg-gray-800/0 rounded-2xl shadow-none">
              <HaloSVG className="w-full h-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
