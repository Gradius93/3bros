import InfiniteCarousel from "@/components/InfintieCarousel";
import SEOHead from "@/components/SEOHead";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import {
  AboutView,
  FestivalsView,
  HomeView,
  LocationsView,
  MenuView,
} from "@/components/views";

export default function Page() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "3Bros Burgers",
    description:
      "The Sussex-Wagyu Burger Specialists. Premium burgers, locations and festivals across the South of England.",
    servesCuisine: "Burgers",
    priceRange: "$$",
  };

  return (
    <div id="top" className="min-h-screen flex flex-col">
      <SEOHead
        title="3Bros Burgers - Sussex Wagyu Burgers, Locations and Festivals"
        description="Explore 3Bros in one place: about us, our menu, locations, and festivals across the South of England."
        canonical="/"
        keywords="3Bros burgers, Sussex Wagyu beef, burger menu, locations, festivals"
        structuredData={structuredData}
      />
      <Navbar />
      <main id="main-content" role="main" className="border-0 flex-1">
        <section id="home" className="scroll-mt-28">
          <HomeView />
        </section>
        <div className="my-12">
          <InfiniteCarousel
            images={[
              "/images/carousel1.jpg",
              "/images/carousel2.jpg",
              "/images/carousel3.jpg",
              "/images/carousel4.jpg",
              "/images/carousel5.jpg",
            ]}
          />
        </div>
        <section id="about-us" className="scroll-mt-32">
          <AboutView />
        </section>

        <section id="our-menu" className="scroll-mt-32">
          <MenuView />
        </section>

        <section id="locations" className="scroll-mt-32">
          <LocationsView />
        </section>

        <section id="festivals" className="scroll-mt-32">
          <FestivalsView />
        </section>
      </main>
      <Footer />
    </div>
  );
}
