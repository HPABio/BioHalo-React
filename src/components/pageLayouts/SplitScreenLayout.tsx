export function SplitScreenLayout() {
  return (
    <div className="space-y-24">
      {/* Basic Split Screen */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 bg-blue-600 text-white flex items-center justify-center p-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Left Side Content</h2>
            <p className="text-lg mb-8">
              This is a basic split screen layout with equal width columns.
              Perfect for showcasing content alongside imagery or another
              content section.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1">
          <img
            src="https://picsum.photos/800/1200"
            alt="Right side image"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Diagonal Split */}
      <section className="min-h-screen relative">
        <div className="absolute inset-0">
          <div className="h-full flex">
            <div className="flex-1 bg-gray-900" />
            <div className="flex-1 bg-white" />
          </div>
          <div
            className="absolute inset-0"
            style={{
              clipPath: "polygon(0 0, 100% 0, 60% 100%, 0% 100%)",
              backgroundColor: "#1e40af",
            }}
          />
        </div>
        <div className="relative min-h-screen flex flex-col md:flex-row items-center">
          <div className="flex-1 text-white p-12">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-6">Diagonal Split</h2>
              <p className="text-lg mb-8">
                A more dynamic split screen layout using diagonal divisions to
                create visual interest and guide the user's eye through the
                content.
              </p>
              <button className="px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50">
                Get Started
              </button>
            </div>
          </div>
          <div className="flex-1 p-12">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold mb-4">Right Side Content</h3>
              <p className="text-gray-600">
                This content sits on top of the diagonal split, creating depth
                and visual hierarchy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Split with Overlap */}
      <section className="min-h-screen flex flex-col md:flex-row relative">
        <div className="flex-1 bg-purple-100 flex items-center justify-center p-12">
          <div className="max-w-xl">
            <h2 className="text-4xl font-bold mb-6">Content Split</h2>
            <p className="text-lg text-gray-600 mb-8">
              This split layout features overlapping elements that bridge the
              gap between the two sides, creating a cohesive design.
            </p>
            <div className="flex space-x-4">
              <button className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                Primary Action
              </button>
              <button className="px-6 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-50">
                Secondary
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-gray-100 flex items-center justify-center p-12">
          <div className="max-w-xl">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Featured Content</h3>
              <p className="text-gray-600 mb-6">
                This side can contain any type of content, from forms to feature
                lists or additional information.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Feature One
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Feature Two
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Feature Three
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg
              className="w-8 h-8 text-purple-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Image Split with Text Overlay */}
      <section className="min-h-screen flex flex-col md:flex-row">
        <div className="flex-1 relative">
          <img
            src="https://picsum.photos/801/1200"
            alt="Left split"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-center p-12">
              <h2 className="text-3xl font-bold mb-4">Image Split Left</h2>
              <p className="max-w-md mx-auto">
                Text overlay on image background creates depth and contrast.
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src="https://picsum.photos/802/1200"
            alt="Right split"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-white text-center p-12">
              <h2 className="text-3xl font-bold mb-4">Image Split Right</h2>
              <p className="max-w-md mx-auto">
                Matching overlays maintain visual consistency across splits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
