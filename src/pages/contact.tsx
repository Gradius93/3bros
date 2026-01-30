import SEOHead from "../components/SEOHead";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Restaurant",
      name: "3Bros Burgers",
      telephone: "020 8853 3843",
      email: "contact@3bros.co.uk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "The Studio, 6 Horn Lane",
        addressLocality: "London",
        postalCode: "SE10 0RT",
        addressCountry: "GB",
      },
    },
  };

  return (
    <>
      <SEOHead
        title="Contact Us - 3Bros Burgers"
        description="Get in touch with 3Bros Burgers. Find our contact information, locations, and opening hours. Premium Sussex-Wagyu burgers across Sussex."
        canonical="/contact"
        keywords="contact 3Bros, burger restaurant contact, 3Bros phone number, Sussex burgers contact"
        structuredData={structuredData}
      />
      {/* <TitleBanner
        title="Contact Us"
        backgroundImage="/images/BannerImage.jpg"
      /> */}
      <h1>Contact Us</h1>
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center my-8">
          <h1 className="text-2xl font-semibold mb-6 text-[var(--color-sub-green)]">
            United Kingdom
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 text-center">
            <h2 className="text-2xl font-semibold text-[var(--color-sub-green)]">
              Get in Touch
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Address
                </h3>
                <p className="text-gray-800">
                  The Studio, 6 Horn Lane
                  <br />
                  London, SE10 0RT
                </p>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Phone
                </h3>
                <a
                  href="tel:+442088533843"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  020 8853 3843
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Email
                </h3>
                <a
                  href="mailto:contact@ldpg.co.uk"
                  className="text-gray-800 hover:text-blue-600 transition-colors"
                >
                  contact@ldpg.co.uk
                </a>
              </div>

              <div>
                <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                  Office Hours
                </h3>
                <p className="text-gray-800">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
