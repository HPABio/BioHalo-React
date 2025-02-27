"use client";
import { useState } from "react";
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
  Trees,
} from "lucide-react";
import Image from "next/image";
import EnzymeImage2 from "@/assets/images/enzymeImage2.png";

export default function IconCarousel({ className }: { className?: string }) {
  // Animation speed controls (in seconds)
  const speeds = {
    ring1: 45, // outermost ring
    ring2: 35,
    ring3: 30,
    ring4: 25,
    ring5: 20, // innermost ring
  };

  return (
    <div className={`${className} flex items-center justify-center relative`}>
      <div className="w-[1200px] h-[1200px] flex items-center justify-center">
        {/* Ring 1 - Outermost */}
        <div className="w-full h-full rounded-full border-2 border-black/5 flex items-center justify-center relative">
          <div
            className={`absolute w-full h-full animate-spin will-change-transform`}
            style={{ animationDuration: `${speeds.ring1}s` }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div
                className="animate-spin-reverse will-change-transform"
                style={{ animationDuration: `${speeds.ring1}s` }}
              >
                <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                  <Leaf className="w-8 h-8 text-tealAccent/70" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
              <div
                className="animate-spin-reverse will-change-transform"
                style={{ animationDuration: `${speeds.ring1}s` }}
              >
                <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                  <Shield className="w-8 h-8 text-tealAccent/70" />
                </div>
              </div>
            </div>
          </div>

          {/* Ring 2 */}
          <div className="w-[80%] h-[80%] rounded-full border-2 border-black/5 flex items-center justify-center relative">
            <div
              className={`absolute w-full h-full animate-spin will-change-transform`}
              style={{ animationDuration: `${speeds.ring2}s` }}
            >
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div
                  className="animate-spin-reverse will-change-transform"
                  style={{ animationDuration: `${speeds.ring2}s` }}
                >
                  <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                    <Recycle className="w-8 h-8 text-tealAccent/70" />
                  </div>
                </div>
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                <div
                  className="animate-spin-reverse will-change-transform"
                  style={{ animationDuration: `${speeds.ring2}s` }}
                >
                  <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                    <Zap className="w-8 h-8 text-tealAccent/70" />
                  </div>
                </div>
              </div>
            </div>

            {/* Ring 3 */}
            <div className="w-[80%] h-[80%] rounded-full border-2 border-black/5 flex items-center justify-center relative">
              <div
                className={`absolute w-full h-full animate-spin will-change-transform`}
                style={{ animationDuration: `${speeds.ring3}s` }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div
                    className="animate-spin-reverse will-change-transform"
                    style={{ animationDuration: `${speeds.ring3}s` }}
                  >
                    <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                      <Thermometer className="w-8 h-8 text-tealAccent/70" />
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2">
                  <div
                    className="animate-spin-reverse will-change-transform"
                    style={{ animationDuration: `${speeds.ring3}s` }}
                  >
                    <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                      <Globe className="w-8 h-8 text-tealAccent/70" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ring 4 */}
              <div className="w-[80%] h-[80%] rounded-full border-2 border-black/5 flex items-center justify-center relative">
                <div
                  className={`absolute w-full h-full animate-spin will-change-transform`}
                  style={{ animationDuration: `${speeds.ring4}s` }}
                >
                  <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div
                      className="animate-spin-reverse will-change-transform"
                      style={{ animationDuration: `${speeds.ring4}s` }}
                    >
                      <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                        <Network className="w-8 h-8 text-tealAccent/70" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2">
                    <div
                      className="animate-spin-reverse will-change-transform"
                      style={{ animationDuration: `${speeds.ring4}s` }}
                    >
                      <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                        <Sprout className="w-8 h-8 text-tealAccent/70" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ring 5 - Innermost */}
                <div className="w-[80%] h-[80%] rounded-full border-2 border-black/5 flex items-center justify-center relative">
                  <div
                    className={`absolute w-full h-full animate-spin will-change-transform`}
                    style={{ animationDuration: `${speeds.ring5}s` }}
                  >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                      <div
                        className="animate-spin-reverse will-change-transform"
                        style={{ animationDuration: `${speeds.ring5}s` }}
                      >
                        <div className="w-[70px] h-[70px] rounded-full border-2 border-black/5 flex items-center justify-center bg-white/30">
                          <Settings className="w-8 h-8 text-tealAccent/70" />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Center circle (no rotation needed) */}
                  <div className="flex items-center justify-center bg-red-500/10">
                    <Image
                      src={EnzymeImage2}
                      alt="Bio Reactor Blueprint"
                      className="w-full h-full scale-[0.7] -mt-[60px] object-cover absolute top-0 left-0 overflow-visible bg-red-500/0 opacity-50"
                    />
                    {/* <Image
                      src={BioReactorBlueprint}
                      alt="Bio Reactor Blueprint"
                      className="w-full h-full scale-[0.7] object-cover absolute top-0 left-[10%] overflow-visible bg-red-500/0"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
