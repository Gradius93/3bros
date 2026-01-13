// import TitleBanner from "@/components/banners/TitleBanner";
// import PartnersBanner from "@/components/banners/PartnersBanner";
// import SEOHead from "@/components/SEOHead";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  //   const structuredData = {
  //     "@context": "https://schema.org",
  //     "@type": "AboutPage",
  //     mainEntity: {
  //       "@type": "RealEstateAgent",
  //       name: "LDPG - Land Development Property Group",
  //       foundingDate: "2013-07",
  //       description:
  //         "Founded in July 2013 by Sudarshan and Navneet Vij, LDPG unites the resources of Mulberry Building Developers and Wyberton Homes Limited, focusing on high-quality residential development in South East London.",
  //       founder: [
  //         {
  //           "@type": "Person",
  //           name: "Sudarshan Vij",
  //         },
  //         {
  //           "@type": "Person",
  //           name: "Navneet Vij",
  //         },
  //       ],
  //       areaServed: {
  //         "@type": "Place",
  //         name: "South East London",
  //       },
  //       serviceType: [
  //         "High quality residential development",
  //         "Derelict building renovation",
  //         "Land development",
  //         "Contemporary luxury homes",
  //         "Apartment development",
  //         "Commercial properties",
  //       ],
  //     },
  //   };

  return (
    <>
      {/* <SEOHead
        title="About LDPG - 30+ Years of Excellence in Property Development"
        description="Founded in 2013 by Sudarshan and Navneet Vij, LDPG has over 30 years of industry experience, specializing in transforming derelict buildings into luxury homes in South East London."
        canonical="/about"
        keywords="LDPG history, property developers London, Sudarshan Vij, Navneet Vij, Mulberry Building Developers, Wyberton Homes, South East London development"
        ogImage="/images/langton-way.jpg"
        structuredData={structuredData}
      /> */}
      {/* <TitleBanner title="About Us" backgroundImage="/images/BannerImage.jpg" /> */}
      <h1>About Us</h1>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative">
            {/* <Image
              src="/images/langton-way.jpg"
              alt="LDPG Langton Way development project - modern residential building in South East London"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-[400px]"
            /> */}
          </div>

          {/* Text Content Section */}
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-600 mb-6">
              Founded in August 2020, 3Bros was born out of the passion of three
              friends in their early 20s at Honeybee Café in Woodingdean,
              Brighton. With a garage-converted prep kitchen, operating four
              nights a week, they quickly earned the admiration of local patrons
              with their menu.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              The trio soon forged a shared vision to create the ultimate
              burger, with Trenchmore Farm in Sussex to source the finest
              ingredients. With a commitment to quality, 3Bros became known for
              their dedication to using the best local produce, aiming to raise
              awareness about the origins of their ingredients and the
              importance of sustainable, transparent farming practices.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              At the heart of their menu are hand-pressed Sussex-Wagyu burgers,
              crafted from a unique blend of beef raised sustainably at
              Trenchmore. In late 2024, they opened their first permanent
              location at The Ghost at the Feast in Chichester, marking a new
              chapter for the brand. Now, in Spring 2025, 3Bros is excited to
              return to their roots, with the opening of their second permanent
              location in Brighton!
            </p>
          </div>
        </div>

        {/* Dividing Line */}
        <div className="max-w-7xl mx-auto px-4 my-16">
          <hr className="border-gray-300" />
        </div>

        {/* <div className="max-w-7xl mx-auto px-4">
          <PartnersBanner />
        </div> */}
      </div>
    </>
  );
}
