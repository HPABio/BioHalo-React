export function HeroLayout() {
  return (
    <div className="space-y-32">
      {/* Basic Hero with Background Image */}
      <section className="relative h-screen">
        <img
          src="https://picsum.photos/1920/1080"
          alt="Hero background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Welcome to Our Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Discover amazing features and possibilities that await you
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100">
                Get Started
              </button>
              <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white/10">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Split Hero with Image */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 flex items-center justify-center p-12 bg-gray-100">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Transform Your Business</h2>
            <p className="text-gray-600 text-lg mb-8">
              Our platform provides all the tools you need to take your business
              to the next level. Experience the power of modern solutions.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/800/600"
            alt="Hero feature"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Animated Hero with Gradient */}
      <section className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center p-12">
        <div className="text-center text-white">
          <div className="animate-bounce mb-8">
            <svg
              className="w-16 h-16 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
              />
            </svg>
          </div>
          <h2 className="text-5xl font-bold mb-6">Innovative Solutions</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Experience the next generation of digital transformation with our
            cutting-edge platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-all">
              <span className="group-hover:mr-2 transition-all">
                Get Started
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-all">
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Video Background Hero */}
      <section className="relative h-screen overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://picsum.photos/1920/1080"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">
              Immersive Experience
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Create unforgettable moments with our platform
            </p>
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100">
              Explore Now
            </button>
          </div>
        </div>
      </section>

      {/* Hero with Features Grid */}
      <section className="min-h-screen bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Everything You Need</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our platform provides comprehensive solutions for all your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <svg
                    className="w-6 h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Feature {item}</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  do eiusmod tempor incididunt ut labore.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
