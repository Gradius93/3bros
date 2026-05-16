import Image from "next/image";

export default function Footer() {
  const navItems = [
    { href: "#about-us", label: "About Us" },
    { href: "#about-us", label: "The Farm" },
    { href: "#our-menu", label: "Our Menu" },
    { href: "#locations", label: "Locations" },
    { href: "#festivals", label: "Festivals" },
  ];

  return (
    <footer className="bg-forest text-whey">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center sm:text-left">

          {/* Logo */}
          <div className="flex items-center justify-center">
            <Image
              src="/images/footerlogo1.png"
              alt="3Bros Burgers logo"
              width={320}
              height={160}
            />
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation" className="flex justify-center">
            <ul className="space-y-2 font-poppins text-sm uppercase tracking-wide flex flex-col items-center">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-whey hover:text-grass transition-colors focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="space-y-3 text-sm font-poppins flex flex-col items-center sm:items-start">
            <a
              href="mailto:3brosfood@gmail.com"
              className="flex items-center gap-3 hover:text-grass transition-colors focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0l-9.75 6.75L2.25 6.75" />
              </svg>
              <span>3brosfood@gmail.com</span>
            </a>
            <a
              href="https://maps.google.com/?q=Trenchmore+Farm,+Horsham+RH13+8DG"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-grass transition-colors focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span>
                Trenchmore Farm,<br />Brighton &amp; Hove RH13 8DG
              </span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
            <a
              href="https://www.instagram.com/3brosmunch/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-grass transition-colors focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <span>@3brosmunch</span>
              <span className="sr-only">(opens in new tab)</span>
            </a>
            {/* text-whey/60 gives ~6.5:1 contrast on bg-forest, passing 4.5:1 for small text */}
            <p className="text-whey/60 text-xs uppercase tracking-wide pt-2">
              © 3Bros Burgers {new Date().getFullYear()}
            </p>
          </div>

          {/* Tagline */}
          <p className="text-whey/80 text-sm font-poppins leading-relaxed">
            Premium Sussex Wagyu beef, locally sourced and expertly crafted into
            our signature burgers. Experience the difference.
          </p>
        </div>
      </div>
    </footer>
  );
}
