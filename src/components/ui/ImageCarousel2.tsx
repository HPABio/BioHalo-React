"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import ImageDeligation from "./ImageDeligation";

interface CarouselItem {
  imageUrl: string;
  title: string;
  topic: string;
  description: string;
  imageArray: string[];
}

interface ImageCarousel2Props {
    items?: typeof ImageDeligation; //this is a enum 
    classNameContainer?: string;
    classNameImage?: string;
}

export function ImageCarousel2({ 
    items = ImageDeligation,
    classNameContainer = "w-1/2 h-1/2",
    classNameImage = "w-full h-full"
}: ImageCarousel2Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentIdx, setCurrentIdx] = useState(0);
  
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start center", "end center"],
    });

    return (
        <div ref={containerRef} className={classNameContainer}>
            <Image 
                src={items[0]} 
                alt="Carousel image"

                className={classNameImage}
            />
        </div>
    );
}
