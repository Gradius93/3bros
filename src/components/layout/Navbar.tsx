import Image from "next/image";
import { useEffect, useRef, useState } from "react";

interface NavItem {
  readonly href: string;
  readonly label: string;
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

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

  const closeMenu = () => {
    setIsMenuOpen(false);
    hamburgerRef.current?.focus();
  };

  // Focus trap + Escape key for mobile menu
  useEffect(() => {
    if (!isMenuOpen) return;

    const overlay = overlayRef.current;
    if (!overlay) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const focusableEls = Array.from(
      overlay.querySelectorAll<HTMLElement>(focusableSelectors)
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    firstEl?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu();
        return;
      }
      if (e.key !== "Tab") return;
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl?.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl?.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuOpen]);

  return (
    <>
      {/* Skip to main content — first focusable element on the page */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-leaf focus:text-whey focus:rounded focus:outline-none focus:ring-2 focus:ring-whey"
      >
        Skip to main content
      </a>

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
            <nav
              aria-label="Primary navigation left"
              className="justify-self-start flex items-center gap-6 xl:gap-10 2xl:gap-12 text-white"
            >
              {leftItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${desktopNavLinkClasses} text-whey hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-whey focus:rounded`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#top"
              aria-label="Go to top"
              className="inline-block justify-self-center focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            >
              <Image
                src="/images/logo1.png"
                alt="3 Bros"
                width={200}
                height={200}
                className="w-[50px] h-auto lg:w-[100px] xl:w-[100px]"
              />
            </a>

            <nav
              aria-label="Primary navigation right"
              className="justify-self-end flex items-center gap-6 xl:gap-10 2xl:gap-12 text-white"
            >
              {rightItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={`${desktopNavLinkClasses} text-whey hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-whey focus:rounded`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Hamburger — min 44×44 px touch target (WCAG 2.5.8) */}
          <button
            ref={hamburgerRef}
            type="button"
            className="lg:hidden flex flex-col justify-center items-center min-w-[44px] min-h-[44px] space-y-1 focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
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

        {/* Mobile menu overlay */}
        <div
          id="mobile-menu"
          ref={overlayRef}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
          aria-hidden={!isMenuOpen}
          className={`lg:hidden fixed inset-0 z-50 flex flex-col transition-all duration-300 ${
            isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Top bar matching navbar */}
          <div className="bg-forest h-24 px-4 flex items-center justify-between flex-shrink-0">
            <a
              href="#top"
              onClick={closeMenu}
              aria-label="Go to top"
              className="focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            >
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
              className="text-whey text-4xl font-podium leading-none min-w-[44px] min-h-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-whey focus:rounded"
            >
              ✕
            </button>
          </div>

          <div className="bg-grass flex-1 flex flex-col justify-between overflow-y-auto">
            <nav aria-label="Mobile navigation" className="flex flex-col items-center gap-4 pt-12 px-4">
              {allItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`${mobileNavLinkClasses} text-whey focus:outline-none focus:ring-2 focus:ring-whey focus:rounded`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="flex justify-center pb-4 pt-8">
              <Image
                src="/images/bull.png"
                alt=""
                aria-hidden="true"
                width={288}
                height={288}
                className="w-72 h-auto"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
