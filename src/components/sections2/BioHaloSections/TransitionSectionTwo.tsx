import DNAAnalysis from "@/components/ui/DNAAnalysisSVG";
import BioHaloBackground from "@/assets/images/BioHalo-background-compressed.jpeg";

export function TransitionSectionTwo() {
  return (
    <section className="hidden bg-red-500/0">
      <div
        className="w-full h-[50vh] bg-red-500/0 relative"
        style={{
          backgroundImage: `url(${BioHaloBackground.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center">
          <DNAAnalysis className="w-full mx-auto" />
        </div>
      </div>
    </section>
  );
}
