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

  const menuItems = [...leftItems, ...rightItems];

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
        className={`lg:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <button
          type="button"
          className="absolute top-6 right-6 w-8 h-8 flex flex-col justify-center items-center"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-black rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-0.5" />
        </button>

        <nav className="flex flex-col items-center space-y-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`${mobileNavLinkClasses} hover:underline`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
