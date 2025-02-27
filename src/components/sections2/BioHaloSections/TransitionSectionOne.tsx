import React from "react";
import Image from "next/image";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";

// Memoized Circle Component
const TransitionCircle = React.memo(function TransitionCircle() {
  return (
    <div
      className="relative w-[1200px] h-[1200px] grid place-items-center rounded-full overflow-hidden
      before:content-[''] before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-tr before:from-tealAccent before:via-tealAccent before:to-mintAccent before:mix-blend-multiply before:opacity-60 before:z-10"
    >
      <Image
        src={WaterRepellantFabric}
        alt="WaterRepellantFabric"
        fill
        priority
        sizes="(max-width: 768px) 100vw, 1200px"
        style={{
          objectFit: "cover",
          objectPosition: "center -20%",
        }}
        className="rounded-full z-0"
      />

      <div className="w-full h-full border-2 border-lightGrey/40 absolute inset-0 z-20"></div>

      <div
        className="w-[110%] h-[110%] min-w-[110%] min-h-[110%] 
        absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-30"
      >
        <EcoliTripletsSVG
          className="w-full h-full opacity-40 mix-blend-screen"
          style={{
            transform: "translate3d(-3%, 2%, 0) scale(1.1)",
            willChange: "transform",
          }}
        />
      </div>
    </div>
  );
});

export function TransitionSectionOne({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section className={`${className} overflow-visible`}>
      {/* Section closer / Transition */}
      <div className="w-full h-full absolute top-0 left-0 bg-green-500/0">
        <div className="w-full h-full relative top-0 left-0 flex flex-col">
          <div className="w-screen h-[1300px] relative overflow-y-hidden -translate-y-[100px]">
            {/* Background Circle */}
            <div
              className="absolute w-[2000px] md:w-[3000px] xl:w-[7000px] aspect-square  
                          top-0 -left-[600px] md:-left-[1000px] lg:left-[-700px]  xl:left-[-2000px]  translate-y-[200px]
                          bg-gradient-to-b from-black via-black/50 to-black/0 
                          rounded-full overflow-hidden border-2 border-gray-500 drop-shadow-xl"
            >
              <div
                className="absolute w-[160vw] h-[1600px] top-0 left-[50%] -translate-x-[73%]"
                /* style={{
                                        backgroundImage: `url(${BioHaloBackground.src})`,
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                      }} */
              >
                <div
                  className="opacity-1 absolute bottom-[500px] left-0 w-[160vw] h-[400px] 2xl:h-[300px] 
                                              bg-gradient-to-t from-black via-black/60 to-transparent"
                />

                {/* Circle 4 V2 */}
                <div className="w-[1200px] h-[1200px] absolute top-[0%] right-[0%] -translate-x-[40%] -translate-y-[20%]">
                  <TransitionCircle />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full h-[200px] bg-gradient-to-t from-black via-black to-tealAccent/0"></div>
        </div>
      </div>
    </section>
  );
}
