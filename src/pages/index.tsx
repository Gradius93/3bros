export function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="text-center px-4">
        <h1 className="text-5xl font-bold text-white mb-4">Welcome to 3Bros</h1>
        <p className="text-xl text-gray-300 mb-8">
          Your next big project starts here
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/about"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Learn More
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
