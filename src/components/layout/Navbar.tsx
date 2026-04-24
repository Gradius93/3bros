import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/router";
import { MenuItem } from "@/types";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuItems: MenuItem[] = [
    { href: "/about", label: "About Us" },
    { href: "/menu", label: "Menu" },
    { href: "/locations", label: "Locations" },
    { href: "/festivals", label: "Festivals" },
    { href: "/contact", label: "Contact Us" },
  ];
  const socialMediaItems: MenuItem[] = [
    { href: "https://www.instagram.com/3brosmunch/", label: "instagram" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#12230D] border-0 shadow-none outline-none [border-bottom:0]">
      <div className="max-w-7xl h-24 mx-auto px-4 py-4 flex items-center justify-between border-0">
        <Link href="/">
          <Image
            src="/images/3bros_logo.png"
            alt="3 Bros"
            width={200}
            height={200}
          />
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-12 text-3xl font-la-petunia text-white">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={isActive ? "text-white" : "text-white hover:text-[#d8f3dc]"}
              >
                {item.label}
                {isActive && (
                  <span className="absolute left-0 bottom-1 w-full h-0.25 bg-white translate-y-2"></span>
                )}
              </Link>
            );
          })}
          {socialMediaItems.map((item) => {
            return (
              <Link
                key={item.href}
                href={item.href}
                target="_blank"
                aria-label="Instagram"
                className="hover:opacity-70 transition-opacity flex items-center"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-black"
                >
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    fill="currentColor"
                  />
                </svg>
              </Link>
            );
          })}
        </nav>
        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""
              }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Full-Screen Modal */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-all duration-300 ${isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
      >
        {/* Logo */}
        <div
          className={`absolute top-8 left-4 transition-all duration-500 delay-100 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
        >
          {/* <Image
            src="/images/LOGO43.png"
            alt="LDPG logo"
            width={100} */}
          <h1>3 Bros</h1>
        </div>

        {/* Close Button */}
        <button
          className="absolute top-6 right-6 w-8 h-8 flex flex-col justify-center items-center"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-black rotate-45 translate-y-0.5"></span>
          <span className="block w-6 h-0.5 bg-black -rotate-45 -translate-y-0.5"></span>
        </button>

        <nav
          className={`flex flex-col items-center space-y-8 transition-all duration-500 delay-100 ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {menuItems.map((item, index) => {
            const isActive = router.pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-2xl font-medium hover:underline transition-all duration-300 ${isMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  } ${isActive ? "text-[#91AF80]" : ""}`}
                style={{
                  transitionDelay: isMenuOpen ? `${(index + 1) * 100}ms` : "0ms",
                }}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
