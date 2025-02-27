export function FeaturedImageLayout() {
  return (
    <div className="space-y-16">
      {/* Hero Style Featured Image */}
      <section className="relative h-[500px]">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Hero image"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Hero Featured Image</h1>
            <p className="text-xl max-w-2xl mx-auto">
              A full-width hero image with overlay text centered on top
            </p>
          </div>
        </div>
      </section>

      {/* Left-aligned Featured Image */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <img
            src="https://picsum.photos/800/600"
            alt="Left aligned image"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold mb-4">Left-aligned Image</h2>
            <p className="text-gray-600 mb-4">
              This layout features an image on the left with corresponding
              content on the right. It's perfect for highlighting key features
              or telling a story about your product.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Right-aligned Featured Image */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Right-aligned Image</h2>
            <p className="text-gray-600 mb-4">
              This layout places the image on the right side with content on the
              left. It provides visual variety and helps maintain user
              engagement throughout the page.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <img
            src="https://picsum.photos/800/600"
            alt="Right aligned image"
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Overlapping Featured Image */}
      <section className="container mx-auto px-4">
        <div className="relative">
          <div className="bg-gray-100 rounded-lg p-8 md:p-12 lg:w-2/3">
            <h2 className="text-3xl font-bold mb-4">Overlapping Layout</h2>
            <p className="text-gray-600 mb-4 max-w-xl">
              This layout creates visual interest by having the image overlap
              with the content area. It breaks out of the standard grid and
              creates a more dynamic composition.
            </p>
            <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
          <img
            src="https://picsum.photos/600/400"
            alt="Overlapping image"
            className="rounded-lg shadow-lg md:absolute md:top-1/2 md:right-0 md:w-1/2 md:-translate-y-1/2"
          />
        </div>
      </section>

      {/* Background Image with Content */}
      <section
        className="relative bg-fixed bg-center bg-cover h-[400px]"
        style={{
          backgroundImage: "url(https://picsum.photos/1920/1080)",
        }}
      >
        <div className="absolute inset-0 bg-black/60">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-xl">
              <h2 className="text-3xl font-bold mb-4">Background Image</h2>
              <p className="mb-4">
                This layout uses the image as a fixed background with content
                overlaid on top. It creates a parallax-like effect and adds
                depth to the page.
              </p>
              <button className="px-6 py-2 bg-white text-blue-600 rounded-md hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
