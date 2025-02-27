import Image from "next/image";
import PfasBP from "@/assets/images/BluePrintStyle/pfasBP.svg";
import BioReactorBlueprint from "@/assets/images/BioReactorBlueprint.svg";
import { PeriodicTable } from "@/components/sections2/PeriodicTable";

interface PFASSectionProps {
  className?: string;
}

export const PFASSection = ({ className = "" }: PFASSectionProps) => {
  return (
    <section
      className={`w-screen relative bg-lightGrey pt-12 xl:pt-24 ${className}`}
    >
      {/* Background */}
      <div
        className="absolute top-0 left-0 w-full h-full  
               bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-tealAccent/80 via-mintAccent to-transparent"
      />

      <div className="w-full flex items-center justify-center relative">
        <h1 className="text-9xl md:scale-[2.5] xl:scale-[4] md:mt-12 lg:mt-24 font-bold mix-blend-multiply text-transparent bg-clip-text bg-gradient-to-b from-tealAccent via-mintAccent/70 to-transparent opacity-30 drop-shadow-md">
          PFAS
        </h1>
      </div>

      {/* Content */}
      <div className="w-full relative border-2 border-red-300/0">
        <div className="w-full max-w-[1200px] flex flex-col items-center justify-center bg-red-100/0 mx-auto px-4">
          {/* Title and description */}
          <div className="w-full flex flex-col items-center justify-center bg-blue-500/0 ">
            {/*             <h2> <span className="absolute lg:block hidden blur-[1px] lg:blur-[2px] opacity-55 text-3xl lg:text-5xl xl:text-6xl capitalize text-center bg-gradient-to-br from-lightGre/50 via-lightGrey/70 to-gray-300/50 text-transparent bg-clip-text drop-shadow-md">  
              Per- and polyfluoroalkyl substances</span>
              <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl capitalize text-center bg-gradient-to-br from-lightGre/50 via-lightGrey/70 to-gray-300/50 text-transparent bg-clip-text drop-shadow-md">Per- and polyfluoroalkyl substances</span>
            </h2> */}
            <h2 className="-mt-12 mb-12">
              <span className="absolute lg:block hidden blur-[1px] lg:blur-[2px] opacity-55 text-3xl lg:text-5xl xl:text-6xl capitalize font-black font-Arial bg-gradient-to-tl from-tealAccent via-tealAccent/70 to-tealAccent/40 bg-clip-text text-transparent">
                Per- and polyfluoroalkyl substances
              </span>
              <span className="font-black font-Arial text-3xl lg:text-5xl xl:text-6xl capitalize font-Arial bg-gradient-to-tl from-tealAccent via-tealAccent/70 to-tealAccent/40 bg-clip-text text-transparent">
                Per- and polyfluoroalkyl substances
              </span>
            </h2>

            <div className="w-full ml-24 pt-6 flex items-center justify-center relative border-2 border-blue-500/0 ">
              <div className="w-full h-full [mask-image:linear-gradient(to_top,transparent,black)]">
                <div className="relative w-full flex items-center justify-center bg-red-500/0">
                  <Image
                    src={PfasBP}
                    alt="PfasBP"
                    className="w-1/3 absolute z-10 left-20 bottom-10"
                  />
                  <div className="xl:w-2/3 border-2 border-red-500/0 [mask-image:linear-gradient(to_top,transparent,black)]">
                    <div className="w-full h-full [mask-image:linear-gradient(to_top_right,transparent,black)]">
                      <PeriodicTable className="border-2 border-lightGrey bg-white/25 rounded-lg opacity-90 pt-4" />
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="w-[30%] h-[40%] bg-red-500/0 absolute z-10 right-10 -bottom-5 rounded-lg overflow-hidden">
                <div className="w-full h-full bg-white/40 absolute rounded-xl"></div>
                  <div className="w-full h-full border-2 border-white/60 absolute rounded-xl"></div>
              </div> */}
            </div>

            {/*           <p className="leading-relaxed bg-red-500/0 text-center text-tealAccent/60 text-xl w-2/3">
              Are a group of versatile chemicals that are extremely/highly
              resistant to degradation also referred to as "forever chemicals"
            </p> */}

            <h3 className="hidden leading-relaxed bg-red-500/0 text-center text-tealAccent/60 text-xl md:text-2xl lg:text-3xl xl:text-4xl w-2/3">
              Are extremely versatile chemicals that are highly resistant to
              degradation and can be found in a wide range of products and
              applications
            </h3>
          </div>
        </div>

        <div className="hidden w-full h-[1200px]"> </div>
      </div>
    </section>
  );
};
