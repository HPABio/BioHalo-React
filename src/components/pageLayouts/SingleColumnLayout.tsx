export function SingleColumnLayout() {
  return (
    <div className="max-w-3xl mx-auto px-4">
      {/* Header Section */}
      <header className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Single Column Layout</h1>
        <p className="text-gray-600">
          A clean and focused layout that keeps content centered and easy to
          read.
        </p>
      </header>

      {/* Featured Image */}
      <div className="mb-12">
        <img
          src="https://picsum.photos/1200/600"
          alt="Featured image"
          className="w-full h-64 object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Main Content */}
      <article className="prose lg:prose-lg mx-auto">
        <h2>Introduction</h2>
        <p>
          Single column layouts are perfect for blog posts, articles, and other
          content-focused pages. They help maintain readability and keep the
          user's attention on what matters most - your content.
        </p>

        <h3>Key Benefits</h3>
        <ul>
          <li>Improved readability with optimal line length</li>
          <li>Better focus on content without distractions</li>
          <li>Simplified responsive design</li>
          <li>Consistent reading experience across devices</li>
        </ul>

        <blockquote>
          "Good design is as little design as possible." - Dieter Rams
        </blockquote>

        <h3>Content Section</h3>
        <p>
          This layout uses a maximum width to ensure comfortable reading on
          larger screens while remaining fully responsive on mobile devices. The
          content is centered on the page with adequate padding on both sides.
        </p>
      </article>

      {/* Call to Action */}
      <div className="my-12 p-6 bg-gray-100 rounded-lg text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
        <p className="text-gray-600 mb-6">
          Join thousands of users who are already using our platform.
        </p>
        <button className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          Sign Up Now
        </button>
      </div>

      {/* Author Section */}
      <div className="border-t border-gray-200 pt-8 mt-8">
        <div className="flex items-center">
          <img
            src="https://picsum.photos/100/100"
            alt="Author"
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold">John Doe</h4>
            <p className="text-gray-600 text-sm">
              Content Writer & UX Designer
            </p>
          </div>
        </div>
      </div>

      {/* Related Content */}
      <div className="border-t border-gray-200 pt-8 mt-8">
        <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
        <div className="space-y-4">
          <a
            href="#"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            <h4 className="font-semibold mb-1">
              Understanding Layout Principles
            </h4>
            <p className="text-gray-600 text-sm">
              Learn the fundamentals of effective page layouts
            </p>
          </a>
          <a
            href="#"
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100"
          >
            <h4 className="font-semibold mb-1">Typography in Web Design</h4>
            <p className="text-gray-600 text-sm">
              Master the art of choosing and using fonts
            </p>
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8 mt-12 border-t border-gray-200">
        <p className="text-gray-600 text-sm">
          © 2024 Your Company. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
