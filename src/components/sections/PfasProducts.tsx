import fluorite from 'src/assets/images/Fluorite-removebg-preview.png'
import Image from 'next/image'



export function PfasProducts() {
  return (
    <section className="relative h-screen w-full flex items-center justify-center bg-gray-500"> 
      <div className="absolute inset-0 w-full h-full">
      <Image 
      src={fluorite} 
      alt="Fluorite" 
      width={400} 
      height={400}
      style={{ 
        filter: 'drop-shadow(0 4px 6px rgba(0, 220, 19, 0.5))', // drop-shadow(x-offset y-offset blur-radius color)
        position: 'absolute' 
      }}
       />
             <Image 
      src={fluorite} 
      alt="Fluorite" 
      width={400} 
      height={400}
      style={{ 
        filter: 'drop-shadow(-4px -4px 6px rgba(0, 120, 19, 1))',
 // drop-shadow(x-offset y-offset blur-radius color)
      }}
       />
      </div>
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">PFAS Products</h2>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
          Explore our range of PFAS-related products designed for various
          applications...
        </p>
      </div>

    </section>
  );
}
