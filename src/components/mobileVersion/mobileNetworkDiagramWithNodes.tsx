import React from "react";
import Image from "next/image";
import MobileNetworkDiagram from "@/components/mobileVersion/mobileNetworkDiagram";
import { TrendingDown, Sprout, Zap, Recycle, Leaf } from "lucide-react";

interface MobileNetworkDiagramWithNodesProps {
  className?: string;
  nodeLabels?: string[];
  enzymeImage?: string;
  enzymeImageAlt?: string;
  width?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const MobileNetworkDiagramWithNodes: React.FC<MobileNetworkDiagramWithNodesProps> = ({
  className = "",
  nodeLabels = [
    "Bio-Based Materials",
    "Minimal By-Products",
    "Reduced Fluorine",
    "Circular Economy",
    "Green Chemistry",
  ],
  enzymeImage,
  enzymeImageAlt = "Enzyme",
  width = "max-w-2xl",
  imageWidth = 500,
  imageHeight = 500,
}) => {
  const icons = [
    <Sprout key="sprout" className="" />,
    <Zap key="zap" className="" />,
    <TrendingDown key="trending" className="" />,
    <Recycle key="recycle" className="" />,
    <Leaf key="leaf" className="" />,
  ];

  return (
    <div
      className={`bg-gray-900/20 px-8 rounded-lg shadow-lg w-[350px] sm:w-full ${width} ${className}`}
    >
      <div className="w-full flex flex-col gap-0 relative">
        {/* First row: 5 square divs */}
        <div className="flex justify-between w-full z-10 mb-[-20px]">
          {nodeLabels.map((label, index) => (
            <div
              key={index}
              className="w-[50px] sm:w-[90px] aspect-square p-1 sm:p-4
              bg-gray-800/20 rounded-lg flex items-center justify-center border border-tealAccent/20 backdrop-blur-sm"
            >
              <div className="w-full h-full rounded-full bg-slate-900/50 flex items-center justify-center 
              text-sm text-tealAccent ">
                {icons[index]}
              </div>
            </div>
          ))}
        </div>

        {/* Second row: Network Diagram */}
        <div className="w-full h-[400px] flex items-center justify-center z-0 mt-[-140px] sm:mt-[-125px] md:mt-[-100px]">
          <MobileNetworkDiagram className="w-full h-full" />
        </div>

        {/* Third row: One centered square div */}
        <div className="w-full flex justify-center z-10 mt-[-230px]">
          <div className="w-[70%] rounded-lg flex items-center justify-center bg-transparent">
            {enzymeImage && (
              <Image
                src={enzymeImage}
                alt={enzymeImageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-contain"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNetworkDiagramWithNodes;
