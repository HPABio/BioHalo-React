'use client'

import DoublePlasmid from "@/components/ui/Double Plasmid";
import { BioHaloLogo2 } from "@/components/ui/BioHaloLogo2";

export default function HeroSectionFloatingPlasmids({className="h-full w-full"}: {className?: string}) {
return (
  <main className={`relative min-h-screen ${className}`}>

    <section className="relative w-full hidden 2xl:block">
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-[1490px] h-[1080px] overflow-hidden">
          <div className="absolute w-[3000px] h-[3000px] left-[770px] top-[calc(1080px*1.7)] -translate-x-1/2 -translate-y-1/2">
            <DoublePlasmid
              classNames="h-auto mt-[0] animate-spin-superslow blur-xl "
              color1="#BCE2E2"
              color2="#E10C7330"
            />
          </div>

          <div className="flex justify-center items-center left-0 w-full h-full">
            <div className="relative w-fit h-fit z-10">
              <BioHaloLogo2
                styles={{
                  width: "1390px",
                  height: "980px",
                  animationduration: "3s",
                  animationdelay: "1.7s",
                }}
              />
            </div>
          </div>

          <div className="absolute min-w-[3000px] w-[calc(1490px*2.3)] h-[240vh] min-left-[-1000px] left-[-770px] top-[calc((1080px)*-2.35)] z-20">
            <DoublePlasmid
              classNames="h-auto mt-[0] animate-spin-superslow blur-xl"
              color1="#BCE2E2"
              color2="#225566"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-full z-30"
            style={{
              background:
                "linear-gradient(to right, #F8F8F8 0%, transparent 20%, transparent 80%, #F8F8F8 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>


    <section className="relative min-h-1/2 hidden md:block 2xl:hidden">
      <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-[750px] h-[540px] overflow-hidden">
          <div className="absolute w-[1500px] h-[1500px] left-[380px] top-[calc(540px*1.7)] -translate-x-1/2 -translate-y-1/2">
            <DoublePlasmid
              classNames="h-auto mt-[0] animate-spin-superslow blur-lg "
              color1="#BCE2E2"
              color2="#E10C7330"
            />
          </div>

          <div className="flex justify-center items-center left-0 w-full h-full">
            <div className="relative w-fit h-fit z-10">
              <BioHaloLogo2
                styles={{
                  width: "calc(1390px/2)",
                  height: "calc(980px/2)",
                  animationduration: "3s",
                  animationdelay: "1.7s",
                }}
              />
            </div>
          </div>

          <div className="absolute min-w-[1500px] w-[calc(750px*2.3)] min-left-[-500px] left-[-380px] top-[calc((540px)*-2.35)] z-20">
            <DoublePlasmid
              classNames="h-auto mt-[0] animate-spin-superslow blur-xl"
              color1="#BCE2E2"
              color2="#225566"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-full z-30"
            style={{
              background:
                "linear-gradient(to right, #F8F8F8 0%, transparent 20%, transparent 80%, #F8F8F8 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>

    <section className="relative min-h-1/2 block md:hidden">
    <div className="flex justify-center items-center w-full h-full">
        <div className="relative w-[calc(750px/2)] h-[calc(540px/2)] overflow-hidden">
          <div className="absolute w-[calc(1500px/2)] h-[calc(1500px/2)] left-[calc(380px/2)] top-[calc(calc(540px/2)*1.7)] -translate-x-1/2 -translate-y-1/2">
            <DoublePlasmid
              classNames="h-auto mt-[0] animate-spin-superslow blur-[9px]"
              color1="#BCE2E2"
              color2="#E10C7330"
            />
          </div>

          <div className="flex justify-center items-center left-0 w-full h-full">
            <div className="relative w-fit h-fit z-10">
              <BioHaloLogo2
                styles={{
                  width: "calc(1390px/4)",
                  height: "calc(980px/4)",
                  animationduration: "3s",
                  animationdelay: "1.7s",
                }}
              />
            </div>
          </div>

          <div className="absolute min-w-[750px] w-[calc(375px*2.3)] left-[-220px] top-[calc(270px*-2.35)] z-20">
            <DoublePlasmid
              classNames="h-auto mt-[0] animate-spin-superslow blur-[12px]"
              color1="#BCE2E2"
              color2="#225566"
            />
          </div>
          <div
            className="absolute bottom-0 left-0 w-full h-full z-30"
            style={{
              background:
                "linear-gradient(to right, #F8F8F8 0%, transparent 20%, transparent 80%, #F8F8F8 100%)",
            }}
          ></div>
        </div>
      </div>
    </section>
  </main>
);
}