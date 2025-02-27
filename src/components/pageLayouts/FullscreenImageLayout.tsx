export function FullscreenImageLayout() {
  return (
    <div className="space-y-16">
      {/* Basic Fullscreen Hero */}
      <section className="relative h-screen">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Fullscreen hero"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Fullscreen Image Layout
            </h1>
            <p className="text-xl mb-8">
              Create immersive experiences with edge-to-edge imagery
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* Split Fullscreen */}
      <section className="h-screen flex flex-col md:flex-row">
        <div className="flex-1 relative">
          <img
            src="https://picsum.photos/1200/800"
            alt="Left split"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4">Left Section</h2>
              <p>Fullscreen split layout with image backgrounds</p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src="https://picsum.photos/1201/800"
            alt="Right split"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="text-white text-center p-8">
              <h2 className="text-3xl font-bold mb-4">Right Section</h2>
              <p>Perfect for showcasing dual content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Fullscreen with Scroll Indicator */}
      <section className="relative h-screen">
        <img
          src="https://picsum.photos/1920/1081"
          alt="Fullscreen with scroll"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/80 flex flex-col items-center justify-between py-16">
          <div className="text-center text-white max-w-4xl px-4">
            <h2 className="text-5xl font-bold mb-6">Scroll for More</h2>
            <p className="text-xl">
              Fullscreen image with a gradient overlay and scroll indicator
            </p>
          </div>
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* Fullscreen Grid */}
      <section className="h-screen grid grid-cols-2 md:grid-cols-4 grid-rows-2">
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/600/400"
            alt="Grid item 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 1
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/601/400"
            alt="Grid item 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 2
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/602/400"
            alt="Grid item 3"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 3
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/603/400"
            alt="Grid item 4"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 4
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/604/400"
            alt="Grid item 5"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 5
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/605/400"
            alt="Grid item 6"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 6
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/606/400"
            alt="Grid item 7"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 7
            </p>
          </div>
        </div>
        <div className="relative group cursor-pointer">
          <img
            src="https://picsum.photos/607/400"
            alt="Grid item 8"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors flex items-center justify-center">
            <p className="text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition-opacity">
              Image 8
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
