import Image from "next/image";
import { useState } from "react";

interface NavItem {
  readonly href: string;
  readonly label: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinkBaseClasses =
    "font-podium font-normal tracking-[0.035em] uppercase whitespace-nowrap [leading-trim:both] [text-edge:cap_alphabetic]";
  const desktopNavLinkClasses = `${navLinkBaseClasses} text-right text-[40px] leading-[1]`;
  const mobileNavLinkClasses = `${navLinkBaseClasses} text-center text-[40px] leading-[40px]`;

  const leftItems: NavItem[] = [
    { href: "#about-us", label: "About Us" },
    { href: "#our-menu", label: "Our Menu" },
  ];

  const rightItems: NavItem[] = [
    { href: "#locations", label: "Locations" },
    { href: "#festivals", label: "Festivals" },
  ];

  const allItems: NavItem[] = [
    ...leftItems,
    ...rightItems,
    { href: "#contact", label: "Contact" },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-forest border-0 shadow-none outline-none [border-bottom:0]">
      <div className="max-w-7xl h-24 mx-auto px-4 py-4 flex items-center justify-between lg:justify-center border-0 relative">
        <a
          href="#top"
          aria-label="Go to top"
          className="inline-block lg:hidden"
        >
          <Image
            src="/images/logo1.png"
            alt="3 Bros"
            width={200}
            height={200}
            className="w-[100px] h-auto lg:w-[100px] xl:w-[100px]"
          />
        </a>
        <div className="hidden font-[48px] lg:grid grid-cols-[1fr_auto_1fr] items-center w-full">
          <nav className="justify-self-start flex items-center gap-6 xl:gap-10 2xl:gap-12 text-white">
            {leftItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${desktopNavLinkClasses} text-whey hover:text-white transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#top"
            aria-label="Go to top"
            className="inline-block justify-self-center"
          >
            <Image
              src="/images/logo1.png"
              alt="3 Bros"
              width={200}
              height={200}
              className="w-[50px] h-auto lg:w-[100px] xl:w-[100px]"
            />
          </a>

          <nav className="justify-self-end flex items-center gap-6 xl:gap-10 2xl:gap-12 text-white">
            {rightItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${desktopNavLinkClasses} text-whey hover:text-white transition-colors`}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
        <button
          type="button"
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
              isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      <div
        className={`lg:hidden fixed inset-0 z-50 flex flex-col transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Top bar matching navbar */}
        <div className="bg-forest h-24 px-4 flex items-center justify-between flex-shrink-0">
          <a href="#top" onClick={closeMenu} aria-label="Go to top">
            <Image
              src="/images/logo1.png"
              alt="3 Bros"
              width={100}
              height={100}
              className="w-[50px] h-auto"
            />
          </a>
          <button
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="text-whey text-4xl font-podium leading-none"
          >
            ✕
          </button>
        </div>

        <div className="bg-grass flex-1 flex flex-col justify-between overflow-y-auto">
          <nav className="flex flex-col items-center gap-4 pt-12 px-4">
            {allItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={`${mobileNavLinkClasses} text-whey`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex justify-center pb-4 pt-8">
            <Image
              src="/images/bull.png"
              alt="3Bros bull"
              width={288}
              height={288}
              className="w-72 h-auto"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
