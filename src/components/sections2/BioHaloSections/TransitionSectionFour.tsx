import Image from "next/image";
import { PeriodicTable } from "@/components/sections2/PeriodicTable";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";
import WaterRepellantFabric from "@/assets/images/water-repellant-fabric.png";
import EcoliTripletsSVG from "@/components/ui/EcoliTripletsSVG";



export function TransitionSectionFour({ className = "", circleSize = 300 }: { className?: string, circleSize?: number }) {
  return (
    <section className={`${className} overflow-visible`} >
      <div className="w-full h-full overflow-hidden relative" >


        <div className={`w-[${circleSize}vw] h-[${circleSize}vw] bg-black rounded-full
        absolute top-0 left-[50%] -translate-x-[50%]`}></div>
      </div>
      <div></div>
      <div></div>
      <div></div>
      
    </section>
  );
}
