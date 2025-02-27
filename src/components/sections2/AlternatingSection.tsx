import Image from 'next/image';
import { ReactNode } from 'react';
import { MovingAtom } from '../ui/MovingAtom';

interface SectionProps {
  title: string;
  subtitle: string;
  text: string;
  imageUrl?: string;
  imageAlt?: string;
  isReversed: boolean;
  children?: ReactNode;
  divClassNames?: string; // Added divClassNames for additional modifications
  imageClassNames?: string; // Added imageClassNames for additional modifications
}

export default function AlternatingSection({
  title,
  subtitle,
  text,
  imageUrl,
  imageAlt,
  isReversed,
  children,
  divClassNames, // Destructure divClassNames
  imageClassNames // Destructure imageClassNames
}: SectionProps) {
  const content = children || (imageUrl && imageAlt ? (
    <div className={`w-full max-w-[500px] mx-auto ${divClassNames}`}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={500}
        height={300}
        className={`rounded-lg shadow-lg w-full h-auto ${imageClassNames}`} // Apply imageClassNames
      />
    </div>
  ) : null);

  return (
    <div className={`relative flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center mb-16`}>
      <div className="flex-1 relative max-w-xl">
        
        <div className="absolute inset-0 z-0">
        <MovingAtom
          width={80}
          height={80}
          hoverAmplitude={15}
          hoverDuration={4}
          shouldRotate={false}
          rotationDuration={30}
          shouldScale={true}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          className="absolute 
          top-[90%] left-[0%]
          md:top-[0%] md:left-[70%] z-[11] "
        />
            <MovingAtom
          width={85}
          height={85}
          hoverAmplitude={15}
          hoverDuration={3}
          shouldRotate={false}
          rotationDuration={30}
          shouldScale={true}
          scaleRange={[0.9, 1.1]}
          scaleDuration={4}
          className="absolute 
          top-[10%] left-[70%]
          md:top-[80%] md:left-[0%] z-[11] "
        />
            <MovingAtom
          width={65}
          height={65}
          hoverAmplitude={15}
          hoverDuration={2}
          shouldRotate={true}
          rotationDuration={30}
          shouldScale={true}
          scaleRange={[0.9, 1.0]}
          scaleDuration={2}
          className="absolute 
          top-[-15%] left-[0%]
          md:top-[-5%] md:left-[-10%] z-[9] "
        />
          {isReversed ? (
            <>
              <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{backgroundColor: '#225566'}}></div> {/* Teal */}
              <div className="absolute top-0 left-0 w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{backgroundColor: '#BCE2E2'}}></div> {/* Mint */}
              <div className="absolute -bottom-8 right-20 w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{backgroundColor: '#E10C73'}}></div> {/* Pink */}
            </>
          ) : (
            <>
              <div className="absolute top-0 left-0 w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob hidden lg:block" style={{backgroundColor: '#225566'}}></div> {/* Teal */}
              <div className="absolute top-0 right-0 w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" style={{backgroundColor: '#BCE2E2'}}></div> {/* Mint */}
              <div className="absolute -bottom-8 left-20 w-[30vw] h-[30vw] max-w-[256px] max-h-[256px] rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" style={{backgroundColor: '#E10C73'}}></div> {/* Pink */}
            </>
          )}
        </div>
        <div className="relative z-10">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <h4 className="text-xl text-gray-600 mb-4">{subtitle}</h4>
          <p className="text-base text-gray-700">{text}</p>
        </div>
      </div>
      
      <div className="flex-1 w-full md:w-auto">
        {content}
      </div>
    </div>
  );
}

