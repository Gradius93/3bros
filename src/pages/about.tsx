// import TitleBanner from "@/components/banners/TitleBanner";
// import PartnersBanner from "@/components/banners/PartnersBanner";
import SEOHead from "../components/SEOHead";
// import Image from "next/image";
// import Link from "next/link";

export default function About() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "3Bros Burgers",
    foundingDate: "2020",
    description:
      "Founded in 2020 by three friends with a passion for great food, 3Bros specializes in crafting the ultimate burger using premium Sussex Wagyu beef from Trenchmore Farm. Expanding nationwide with multiple locations.",
    servesCuisine: "Burgers",
    priceRange: "$$",
    areaServed: {
      "@type": "Place",
      name: "United Kingdom",
    },
    knowsAbout: [
      "Sussex Wagyu Beef",
      "British Wagyu",
      "Gourmet Burgers",
      "Trenchmore Farm Partnership",
    ],
  };

  return (
    <>
      <SEOHead
        title="3Bros"
        description="Founded in 2020 by three friends passionate about great food, 3Bros creates the ultimate burger using premium Sussex Wagyu beef from Trenchmore Farm. Expanding nationwide with locations across the UK."
        canonical="/about"
        keywords="3Bros burgers, Sussex Wagyu beef, British Wagyu, gourmet burgers UK, Trenchmore Farm, best burger restaurant, Wagyu burger specialists, premium burgers Brighton"
        ogImage="/images/3bros_logo.png"
        structuredData={structuredData}
      />
      {/* <TitleBanner title="About Us" backgroundImage="/images/BannerImage.jpg" /> */}

      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* About Us Section - Image Left, Content Right */}
        <section className="mb-24">
          <h1 className="text-4xl font-bold text-gray-900 mb-12">About Us</h1>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="relative">
              {/* <Image
                src="/images/3bros-restaurant.jpg"
                alt="3Bros burger restaurant"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              /> */}
            </div>

            {/* Text Content Section */}
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-600 mb-6">
                3Bros started in 2020 with three friends in their early
                twenties, a shared obsession with great food, and a
                not-so-humble mission: build the ultimate burger. The idea took
                shape at Honeybee Café in Woodingdean, Brighton, where countless
                experiments led to one simple rule — keep it simple and only use
                the best ingredients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                In 2022, things levelled up with a partnership with Trenchmore
                Farm, one of the UK&apos;s top Wagyu beef producers. This took
                our burgers to another level. Rich, juicy and seriously fatty,
                the beef is to die for — the kind that keeps you coming back for
                &ldquo;just one more bite&rdquo;.
              </p>
              <p className="text-lg text-gray-600">
                That partnership kicked serious momentum into the brand. With
                Helch Winchester opening as location number four, 3Bros is
                officially on the move, with big plans to go nationwide. The
                goal hasn&apos;t changed: make the best burger the UK&apos;s
                ever seen, back brilliant farmers and suppliers, and prove that
                doing things properly just tastes better.
              </p>
            </div>
          </div>
        </section>

        {/* Our Meat Section - Content Left, Image Right */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Our Meat</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content Section */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sussex Wagyu Beef
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                British Wagyu is Wagyu beef raised in the UK using Wagyu
                genetics, but farmed to British standards and landscapes. It
                delivers the signature marbling and richness Wagyu is known for,
                with a flavour profile that&apos;s often cleaner, meatier and
                better balanced than its Japanese counterpart.
              </p>

              <ul className="space-y-4">
                <li>
                  <strong className="block text-gray-900 font-semibold">
                    Wagyu genetics
                  </strong>
                  <p className="text-lg text-gray-600 mt-1">
                    British Wagyu cattle are bred from full-blood or crossbred
                    Wagyu lines, crossed with traditional British breeds like
                    Sussex, Angus or Hereford to suit the UK climate and grazing
                    systems.
                  </p>
                </li>

                <li>
                  <strong className="block text-gray-900 font-semibold">
                    British farming standards
                  </strong>
                  <p className="text-lg text-gray-600 mt-1">
                    The cattle are raised under some of the world&apos;s highest
                    animal welfare regulations, often with slow-growing,
                    pasture-based systems.
                  </p>
                </li>

                <li>
                  <strong className="block text-gray-900 font-semibold">
                    Grass-led diets
                  </strong>
                  <p className="text-lg text-gray-600 mt-1">
                    Unlike Japanese Wagyu, which is usually grain-fed, British
                    Wagyu is commonly grass-fed or grass-led, resulting in rich
                    marbling without overpowering heaviness.
                  </p>
                </li>

                <li>
                  <strong className="block text-gray-900 font-semibold">
                    Slower, natural growth
                  </strong>
                  <p className="text-lg text-gray-600 mt-1">
                    Cattle are typically grown over a longer period, allowing
                    flavour to develop
                  </p>
                </li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="relative">
              {/* <Image
                src="/images/wagyu-beef.jpg"
                alt="Sussex Wagyu beef"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              /> */}
            </div>
          </div>
        </section>

        {/* Dividing Line */}
        <div className="my-16">
          <hr className="border-gray-300" />
        </div>

        {/* The Farm Section - Image Left, Content Right */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">The Farm</h2>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Image Section */}
            <div className="relative">
              {/* <Image
                src="/images/trenchmore-farm.jpg"
                alt="Trenchmore Farm"
                width={600}
                height={400}
                className="rounded-lg shadow-lg object-cover w-full h-[400px]"
              /> */}
            </div>

            {/* Text Content Section */}
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Trenchmore Farm
              </h3>
              <p className="text-lg text-gray-600 mb-6">
                Trenchmore Farm is a one-of-a-kind farm, run by truly
                one-of-a-kind people. The journey began over ten years ago, when
                Japanese Wagyu embryos were brought over from Japan to establish
                what would become the Sussex Wagyu herd.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                The farm focuses on slow-growth, pasture-based systems that
                allow cattle to develop naturally, resulting in beautifully
                marbled, flavourful beef. By combining traditional British
                farming values with world-class Wagyu genetics, Trenchmore
                delivers a product that&apos;s both luxurious and responsibly
                produced.
              </p>
              <p className="text-lg text-gray-600">
                Our partnership with Trenchmore Farm ensures that every burger
                we serve is made with the highest quality beef, raised with care
                and respect for the land and the animal. It&apos;s this
                commitment to excellence that makes the 3Bros burger truly
                exceptional.
              </p>
            </div>
          </div>
        </section>

        {/* <PartnersBanner /> */}
      </div>
    </>
  );
}
