export function BreadcrumbsLayout() {
  return (
    <div className="space-y-16">
      {/* Basic Breadcrumbs */}
      <section className="container mx-auto px-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a href="#" className="text-gray-700 hover:text-blue-600">
                  Category
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-400">Current Page</span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="mt-4 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Basic Breadcrumbs</h2>
          <p className="text-gray-600">
            Simple text-based breadcrumb navigation with chevron separators.
          </p>
        </div>
      </section>

      {/* Styled Breadcrumbs */}
      <section className="container mx-auto px-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li className="inline-flex items-center">
              <a
                href="#"
                className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-700"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                Home
              </a>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <a
                  href="#"
                  className="px-3 py-1 bg-gray-100 rounded-md hover:bg-gray-200 text-gray-700"
                >
                  Category
                </a>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="px-3 py-1 bg-blue-100 rounded-md text-blue-700">
                  Current Page
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="mt-4 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Styled Breadcrumbs</h2>
          <p className="text-gray-600">
            Enhanced breadcrumbs with background colors and icons.
          </p>
        </div>
      </section>

      {/* Dropdown Breadcrumbs */}
      <section className="container mx-auto px-4">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-2">
            <li className="inline-flex items-center">
              <button className="px-3 py-1 bg-white border rounded-md hover:bg-gray-50 text-gray-700 flex items-center">
                <span>Home</span>
                <svg
                  className="w-4 h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <button className="px-3 py-1 bg-white border rounded-md hover:bg-gray-50 text-gray-700 flex items-center">
                  <span>Category</span>
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="px-3 py-1 bg-gray-100 rounded-md text-gray-700">
                  Current Page
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="mt-4 p-6 bg-gray-100 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Dropdown Breadcrumbs</h2>
          <p className="text-gray-600">
            Breadcrumbs with dropdown buttons for navigation through
            hierarchical structures.
          </p>
        </div>
      </section>
    </div>
  );
}
