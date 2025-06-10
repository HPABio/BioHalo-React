import React from "react";
import AtomDiagram from "@/components/ui/AtomDiagram";

interface FluorineElementProps {
  className?: string;
}

const FluorineElement: React.FC<FluorineElementProps> = ({
  className = "",
}) => {
  return (
    <div className={`flex flex-col item justify-center ${className}`}>
      <div className="w-full h-[5vh] md:h-[10vh]"></div>
      <div className="w-full h-[300px] md:h-[400px] flex flex-col items-center justify-center">
        {/* Fluorine Element / Periodic Table */}
        <div className="relative flex flex-col items-center justify-center">
          <AtomDiagram className="absolute h-full w-full top-[-50%] left-[50%] translate-x-[-50%] translate-y-[50%] scale-[2] md:scale-[3] opacity-10" />
          <div className="relative aspect-square py-1 md:w-40 border-[2.5px] md:border-[4px] border-gray-600/80 drop-shadow-xl rounded-xl 
          flex flex-col items-center justify-center 
          bg-gradient-to-br from-slate-100/60 to-slate-900/10 backdrop-blur-[3px] text-gray-500 
          hover:scale-105 transition-transform duration-300">
            <span className="text-[min(8vw,4rem)] font-bold tracking-wider">
              F
            </span>
            <span className="text-[min(4vw,1rem)] font-semibold tracking-wide">
              Fluorine
            </span>
            <span className="absolute top-2 left-3 text-[min(4vw,0.85rem)] md:text-[min(6vw,0.875rem)] font-bold">
              9
            </span>
            <span className="text-[min(2.5vw,0.75rem)] md:text-[min(3vw,0.875rem)] font-medium">
              18.99
            </span>
          </div>
          {/* Subtitle */}
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-600 text-center mt-6 md:mt-8 max-w-2xl leading-tight px-4">
            our modern society <br className="sm:hidden block" /> is built on <br />
            <span className="md:text-4xl bg-gradient-to-bl from-red-800/90 via-pinkAccent to-purple-900/80 bg-clip-text text-transparent font-extrabold">
              fluorinated materials
            </span>
          </h2>
        </div>
      </div>
      <div className="w-full h-[5vh] md:h-[10vh] border-2 border-yellow-500/0 hidden"></div>
    </div>
  );
};

export default FluorineElement;
