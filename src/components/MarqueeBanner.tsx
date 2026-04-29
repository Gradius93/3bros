interface MarqueeBannerProps {
  text?: string;
}

const BANNER_ITEMS = 12;

export default function MarqueeBanner({
  text = "Farmed For Flavour",
}: MarqueeBannerProps) {
  return (
    <section
      aria-label="Scrolling text banner"
      className="bg-grass text-whey border-y border-whey/20"
    >
      <div className="overflow-hidden py-2">
        <div className="banner-track">
          {Array.from({ length: BANNER_ITEMS * 2 }).map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block px-4 text-sm sm:text-base font-poppins whitespace-nowrap">
                {text}
              </span>
              <span aria-hidden="true" className="text-sm sm:text-base font-poppins">
                •
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .banner-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 45s linear infinite;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
}
