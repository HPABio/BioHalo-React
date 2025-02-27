export function MagazineLayout() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Magazine Header */}
      <header className="text-center mb-12">
        <h1 className="text-6xl font-serif font-bold mb-4">The Magazine</h1>
        <p className="text-gray-600 text-xl">
          Volume 1 • Issue 12 • January 2024
        </p>
      </header>

      {/* Featured Article */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative h-[600px]">
          <img
            src="https://picsum.photos/800/1200"
            alt="Featured article"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
            <span className="text-white/80 text-sm">Photography</span>
            <h2 className="text-3xl font-bold text-white mt-2">
              The Art of Urban Photography
            </h2>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-blue-600 font-semibold">Featured Story</span>
          <h2 className="text-4xl font-serif font-bold mt-2 mb-6">
            Capturing Life in the City
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            In the heart of every metropolis lies countless stories waiting to
            be told through the lens of a camera. Urban photography is more than
            just taking pictures—it's about capturing the essence of city life,
            the interplay of light and shadow, and the countless moments that
            make up the urban experience.
          </p>
          <button className="self-start px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800">
            Read More
          </button>
        </div>
      </div>

      {/* Three Column Section */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div>
          <img
            src="https://picsum.photos/600/400"
            alt="Article 1"
            className="w-full h-48 object-cover mb-4"
          />
          <span className="text-blue-600 text-sm">Travel</span>
          <h3 className="text-xl font-bold mt-2 mb-3">Hidden Gems of Europe</h3>
          <p className="text-gray-600">
            Discover the lesser-known destinations that make Europe a treasure
            trove of experiences.
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/601/400"
            alt="Article 2"
            className="w-full h-48 object-cover mb-4"
          />
          <span className="text-blue-600 text-sm">Culture</span>
          <h3 className="text-xl font-bold mt-2 mb-3">
            The Evolution of Street Art
          </h3>
          <p className="text-gray-600">
            From vandalism to valuable: how street art became a respected art
            form.
          </p>
        </div>
        <div>
          <img
            src="https://picsum.photos/602/400"
            alt="Article 3"
            className="w-full h-48 object-cover mb-4"
          />
          <span className="text-blue-600 text-sm">Technology</span>
          <h3 className="text-xl font-bold mt-2 mb-3">
            The Future of Artificial Intelligence
          </h3>
          <p className="text-gray-600">
            Exploring the latest developments in AI and their impact on society.
          </p>
        </div>
      </div>

      {/* Quote Section */}
      <div className="bg-gray-100 p-12 mb-12 text-center">
        <blockquote className="text-3xl font-serif italic max-w-3xl mx-auto">
          "The best magazines don't just reflect culture; they help shape it."
        </blockquote>
        <p className="mt-4 text-gray-600">— Magazine Editor-in-Chief</p>
      </div>

      {/* Two Column Article Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <article className="border-t-2 border-black pt-4">
          <span className="text-blue-600 text-sm">Lifestyle</span>
          <h3 className="text-2xl font-bold mt-2 mb-3">
            The Rise of Minimalist Living
          </h3>
          <p className="text-gray-600 mb-4">
            How the minimalist movement is changing the way we think about
            possessions and lifestyle.
          </p>
          <a href="#" className="text-black font-semibold hover:underline">
            Continue Reading →
          </a>
        </article>
        <article className="border-t-2 border-black pt-4">
          <span className="text-blue-600 text-sm">Food</span>
          <h3 className="text-2xl font-bold mt-2 mb-3">
            The New Wave of Plant-Based Cuisine
          </h3>
          <p className="text-gray-600 mb-4">
            Exploring how innovative chefs are revolutionizing plant-based
            cooking.
          </p>
          <a href="#" className="text-black font-semibold hover:underline">
            Continue Reading →
          </a>
        </article>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white p-12 text-center">
        <h3 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h3>
        <p className="mb-6">
          Get the latest stories and updates delivered to your inbox.
        </p>
        <div className="max-w-md mx-auto flex gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 rounded-full text-black"
          />
          <button className="px-6 py-2 bg-white text-black rounded-full hover:bg-gray-100">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}
