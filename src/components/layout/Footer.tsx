import Image from "next/image";

interface FooterNavItem {
  readonly href: string;
  readonly label: string;
}

export default function Footer() {
  const navItems: FooterNavItem[] = [
    { href: "#top", label: "Home" },
    { href: "#about-us", label: "About Us" },
    { href: "#our-menu", label: "Our Menu" },
    { href: "#locations", label: "Locations" },
    { href: "#festivals", label: "Festivals" },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/3brosWordmarkWhite@4x.png"
                alt="3Bros Logo"
                className="h-24"
                width={200}
                height={250}
              />
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Premium Sussex Wagyu beef, locally sourced and expertly crafted
              into our signature burgers. Experience the difference of true
              quality.
            </p>
          </div>

          <div className="md:col-span-1 md:flex md:justify-center">
            <nav className="space-y-2">
              <ul className="text-gray-300 space-y-1">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a href={item.href} className="hover:text-white transition-colors">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:col-span-1 md:text-right">
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-gray-300">
              <p>info@3brosfoods.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
          <p>3Bros Burgers © {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  );
}
