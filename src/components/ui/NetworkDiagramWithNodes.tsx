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
    <Sprout key="sprout" className="w-8 h-8 text-teal-700" />,
    <Zap key="zap" className="w-8 h-8 text-teal-700" />,
    <TrendingDown key="trending" className="w-8 h-8 text-teal-700" />,
    <Recycle key="recycle" className="w-8 h-8 text-teal-700" />,
    <Leaf key="leaf" className="w-8 h-8 text-teal-700" />,
  ];

  return (
    <div
      className={`bg-gray-800/0 px-8 rounded-lg shadow-lg w-full ${width} ${className}`}
    >
      <div className="w-full flex flex-col gap-0 relative">
        {/* First row: 5 square divs */}
        <div className="flex justify-between w-full z-10 mb-[-20px]">
          {nodeLabels.map((label, index) => (
            <div
              key={index}
              className="w-[100px] h-[100px] bg-slate-900 rounded-lg flex items-center justify-center border border-[#4B5563]"
            >
              <div className="w-12 h-12 rounded-full bg-tealAccent/10 flex items-center justify-center group-hover:shadow-[0px_0px_15px_1px_rgba(18,110,99,0.3)]">
                {icons[index]}
              </div>
            </div>
          ))}
        </div>

        {/* Second row: Network Diagram */}
        <div className="w-full h-[400px] flex items-center justify-center z-0 mt-[-15%]">
          <NetworkDiagram className="w-full h-full" />
        </div>

        {/* Third row: One centered square div */}
        <div className="w-full flex justify-center z-10 mt-[-35%] bg-red-500/0">
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
