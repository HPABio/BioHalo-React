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
      className={`rounded-lg shadow-lg w-[100vw] flex justify-center ${width} ${className}`}
    >
      <div className="w-full flex flex-col relative max-w-[400px] justify-center">
        {/* First row: 5 square divs */}
        <div className="flex justify-between w-full z-10 mb-[-20px] px-6">
          {nodeLabels.map((label, index) => (
            <div
              key={index}
              className="w-full max-w-[17%] aspect-square p-1 rounded-lg flex items-center justify-center
              bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[0.75px] lg:border-[1.2px] border-mintAccent/5 lg:border-tealAccent/15 hover:border-mintAccent/10 group"
            >
              <div className="w-full aspect-square rounded-full flex items-center justify-center 
              text-lg text-tealAccent
              bg-gradient-to-tl from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[0.75px] border-mintAccent/10 group-hover:border-mintAccent/30 ">
                {icons[index]}
              </div>
            </div>
          ))}
        </div>

        {/* Second row: Network Diagram */}
        <div className="w-full h-[400px] flex items-center justify-center z-0 mt-[-140px] sm:mt-[-130px] md:mt-[-100px] px-6">
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
