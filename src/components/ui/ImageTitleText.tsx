import Image from "next/image";
import React from "react";

interface ImageTitleTextProps {
  letterImages: any[];
  className?: string;
}

export const ImageTitleText: React.FC<ImageTitleTextProps> = ({
  letterImages,
  className = "",
}) => {
  return (
    <div
      className={`w-full h-[140px] flex justify-center items-center mt-16 ${className}`}
    >
      <div className="flex flex-row w-full h-full max-w-[1200px] px-4 mix-blend-darken relative">
        {letterImages.map((Letter, index) => (
          <div
            key={index}
            className="flex-1 w-full h-full flex justify-center items-center relative -ml-2"
            style={{ zIndex: index }}
          >
            {index === 7 ? (
              // Empty div for space between "FOREVER" and "CHEMICALS"
              <div className="w-full h-full"></div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={Letter}
                  alt={`Letter ${index}`}
                  fill
                  className="object-contain"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
