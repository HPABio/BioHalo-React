export function CardsLayout() {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Basic Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img
            src="https://picsum.photos/400/200"
            alt="Card image"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Basic Card</h3>
            <p className="text-gray-600">
              A simple card with an image and some text content below it.
            </p>
          </div>
        </div>

        {/* Hover Effect Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Hover Effect Card</h3>
            <p className="text-gray-600">
              This card scales up slightly when you hover over it.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Learn More
            </button>
          </div>
        </div>

        {/* Gradient Card */}
        <div className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg shadow-md overflow-hidden text-white">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Gradient Card</h3>
            <p className="text-white/90">
              A card with a beautiful gradient background.
            </p>
          </div>
        </div>

        {/* Feature Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-green-500">
          <div className="p-6">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
              <svg
                className="w-6 h-6 text-green-500"
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
            </div>
            <h3 className="text-xl font-semibold mb-2">Feature Card</h3>
            <p className="text-gray-600">
              A card highlighting a feature with an icon.
            </p>
          </div>
        </div>

        {/* Pricing Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">Pricing Card</h3>
            <div className="text-3xl font-bold text-blue-600 mb-4">$99/mo</div>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
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
                Feature 1
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 mr-2 text-green-500"
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
                Feature 2
              </li>
            </ul>
            <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
              Subscribe
            </button>
          </div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="bg-blue-600 h-24"></div>
          <div className="px-6 py-4">
            <div className="relative">
              <img
                src="https://picsum.photos/100/100"
                alt="Profile"
                className="w-20 h-20 rounded-full border-4 border-white absolute -top-12"
              />
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-gray-600">Software Developer</p>
            </div>
            <div className="mt-4 flex space-x-4">
              <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                Follow
              </button>
              <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50">
                Message
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
