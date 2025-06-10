import React from "react";
import Image from "next/image";
import NetworkDiagram from "./NetworkDiagram";
import { TrendingDown, Sprout, Zap, Recycle, Leaf } from "lucide-react";

interface NetworkDiagramWithNodesProps {
  className?: string;
  nodeLabels?: string[];
  enzymeImage?: string;
  enzymeImageAlt?: string;
  width?: string;
  imageWidth?: number;
  imageHeight?: number;
}

const NetworkDiagramWithNodes: React.FC<NetworkDiagramWithNodesProps> = ({
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
    <Zap key="zap" className="w-8 h-8" />,
    <TrendingDown key="trending" className="w-8 h-8" />,
    <Recycle key="recycle" className="w-8 h-8" />,
    <Leaf key="leaf" className="w-8 h-8" />,
  ];

  return (
    <div
      className={`bg-gray-800/0 px-8 rounded-lg shadow-lg w-[350px] sm:w-full ${width} ${className}`}
    >
      <div className="w-full flex flex-col gap-0 relative">
        {/* First row: 5 square divs */}
        <div className="flex justify-between w-full z-10 mb-[-20px]">
          {nodeLabels.map((label, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] rounded-lg flex items-center justify-center p-4
              bg-gradient-to-br from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[1px] lg:border-[1.2px] border-mintAccent/5 lg:border-tealAccent/15 hover:border-mintAccent/10 group"
            >
              <div className="w-full h-full rounded-full flex items-center justify-center text-tealAccent
              bg-gradient-to-tl from-gray-900/50 to-gray-800/60 backdrop-blur-xl 
              border-[1px] border-mintAccent/10 group-hover:border-mintAccent/30">
                {icons[index]}
              </div>
            </div>
          ))}
        </div>

        {/* Second row: Network Diagram */}
        <div className="w-full h-[400px] flex items-center justify-center z-0 mt-[-140px] sm:mt-[-125px] md:mt-[-100px]">
          <NetworkDiagram className="w-full h-full" />
        </div>

        {/* Third row: One centered square div */}
        <div className="w-full flex justify-center z-10 mt-[-230px] md:mt-[-35%] bg-red-500/0">
          <div className="w-[70%] rounded-lg flex items-center justify-center bg-blue-500/0">
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

export default NetworkDiagramWithNodes;
