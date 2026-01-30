import Link from "next/link";
import SEOHead from "../components/SEOHead";

export function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "3Bros Burgers",
    description:
      "The Sussex-Wagyu Burger Specialists. Premium burgers made with locally-sourced Sussex Wagyu beef from Trenchmore Farm.",
    servesCuisine: "Burgers",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressCountry: "GB",
      addressRegion: "Sussex",
    },
  };
  return (
    <>
      <SEOHead
        title="3Bros Burgers - The Sussex-Wagyu Burger Specialists"
        description="Premium burgers made with locally-sourced Sussex Wagyu beef from Trenchmore Farm. Find us across Sussex - Brighton, Chichester, Lewes, and more."
        canonical="/"
        keywords="3Bros burgers, Sussex Wagyu beef, best burgers Brighton, Wagyu burgers UK, premium burgers Sussex, Trenchmore Farm"
        structuredData={structuredData}
      />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center px-4">
          <h1 className="text-5xl font-bold text-white mb-4">3Bros Burgers</h1>
          <p className="text-xl text-gray-300 mb-8">
            The Sussex-Wagyu Burger Specialists
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/festivals"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Festivals
            </Link>
            <Link
              href="/locations"
              className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Locations
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
