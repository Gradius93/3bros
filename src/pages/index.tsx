import { useEffect, useState } from "react";
import InfiniteCarousel from "@/components/InfintieCarousel";
import LoadingScreen from "@/components/LoadingScreen";
import MarqueeBanner from "@/components/MarqueeBanner";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  AboutView,
  ContactView,
  FestivalsView,
  HomeView,
  LocationsView,
  MenuView,
} from "@/components/views";

const carouselAlts = [
  "3Bros Sussex Wagyu smash burger",
  "3Bros burger with fries at Shelter Hall Brighton",
  "Trenchmore Farm Wagyu cattle in Sussex",
  "3Bros food hall counter serving customers",
  "3Bros halloumi fries and dipping sauce",
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FoodEstablishment",
      "@id": "https://3bros.co.uk/#brand",
      name: "3Bros Burgers",
      description:
        "The Sussex-Wagyu Burger Specialists. Premium smash burgers made with Trenchmore Farm Wagyu beef, with permanent locations and festival appearances across the South of England.",
      servesCuisine: ["Burgers", "American"],
      priceRange: "££",
      url: "https://3bros.co.uk",
      image: "https://3bros.co.uk/images/3bros_desktop_safe_1920x1080.png",
      logo: "https://3bros.co.uk/images/3bros_logo.png",
      email: "3brosfood@gmail.com",
      sameAs: ["https://www.instagram.com/3brosmunch/"],
      areaServed: {
        "@type": "GeoCircle",
        geoMidpoint: {
          "@type": "GeoCoordinates",
          latitude: 50.9,
          longitude: -0.5,
        },
        geoRadius: "100000",
      },
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://3bros.co.uk/#trenchmore",
      name: "3Bros Burgers — Trenchmore Farm",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Trenchmore Farm, Burnthouse Lane",
        addressLocality: "Horsham",
        postalCode: "RH13 8DG",
        addressCountry: "GB",
      },
      openingHours: ["Sa 11:00-16:00"],
      parentOrganization: { "@id": "https://3bros.co.uk/#brand" },
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://3bros.co.uk/#shelter-hall",
      name: "3Bros Burgers — Shelter Hall Brighton",
      address: {
        "@type": "PostalAddress",
        streetAddress: "King's Road Arches",
        addressLocality: "Brighton",
        postalCode: "BN1 1NB",
        addressCountry: "GB",
      },
      openingHours: ["Mo-Fr 11:30-23:00", "Sa-Su 11:00-23:00"],
      parentOrganization: { "@id": "https://3bros.co.uk/#brand" },
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://3bros.co.uk/#ghost-feast",
      name: "3Bros Burgers — The Ghost at the Feast, Chichester",
      address: {
        "@type": "PostalAddress",
        streetAddress: "33–34 North Street",
        addressLocality: "Chichester",
        postalCode: "PO19 1LX",
        addressCountry: "GB",
      },
      openingHours: ["Mo-Su 12:00-23:00"],
      parentOrganization: { "@id": "https://3bros.co.uk/#brand" },
    },
    {
      "@type": "FoodEstablishment",
      "@id": "https://3bros.co.uk/#helch-winchester",
      name: "3Bros Burgers — Helch Winchester",
      address: {
        "@type": "PostalAddress",
        streetAddress: "19 Upper Brook Street",
        addressLocality: "Winchester",
        postalCode: "SO23 8AL",
        addressCountry: "GB",
      },
      openingHours: ["Mo-Su 11:30-23:00"],
      parentOrganization: { "@id": "https://3bros.co.uk/#brand" },
    },
  ],
};

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  // Only show the loader if the page takes more than 300 ms — avoids blocking
  // LCP on fast connections / repeat visits where the loader is pure overhead.
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    if (document.readyState === "complete") {
      // Already loaded — skip loader entirely
      setIsLoaded(true);
      return;
    }
    // Show loader only after a 300 ms delay so fast loads never see it
    const showTimer = setTimeout(() => setShowLoader(true), 300);
    const handleLoad = () => {
      clearTimeout(showTimer);
      setIsLoaded(true);
      setTimeout(() => setShowLoader(false), 500);
    };
    window.addEventListener("load", handleLoad);
    return () => {
      clearTimeout(showTimer);
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen flex flex-col">
      {showLoader && <LoadingScreen isLoaded={isLoaded} />}
      <SEOHead
        title="3Bros Burgers — Sussex Wagyu Smash Burgers | South of England"
        description="3Bros serve premium Sussex Wagyu smash burgers made with Trenchmore Farm beef. Find us at Shelter Hall Brighton, Chichester, Winchester, and Trenchmore Farm."
        canonical="/"
        ogImage="/images/3bros_desktop_safe_1920x1080.png"
        keywords="3Bros burgers, Sussex Wagyu beef, smash burger, Shelter Hall Brighton, Trenchmore Farm, Chichester, Winchester"
        structuredData={structuredData}
      />
      <Navbar />
      <main id="main-content" role="main" className="border-0 flex-1">
        <section id="home" className="scroll-mt-28">
          <HomeView />
        </section>
        <div className="my-4">
          <InfiniteCarousel
            images={[
              "/images/carousel1.jpg",
              "/images/carousel2.jpg",
              "/images/carousel3.jpg",
              "/images/carousel4.jpg",
              "/images/carousel5.jpg",
            ]}
            alts={carouselAlts}
          />
        </div>
        <section id="about-us" className="scroll-mt-32">
          <AboutView />
        </section>
        <section id="our-menu" className="scroll-mt-24">
          <MarqueeBanner text="Farmed For Flavour" />
          <MenuView />
        </section>

        <section id="locations" className="scroll-mt-24">
          <MarqueeBanner text="A Bite of Sussex" />
          <LocationsView />
        </section>

        <section id="festivals" className="scroll-mt-32">
          <FestivalsView />
        </section>
            {/* to be fixed / review */}
        {/* <section id="contact" className="scroll-mt-24 bg-whey">
          <ContactView />
        </section> */}
      </main>
      <Footer />
    </div>
  );
}
