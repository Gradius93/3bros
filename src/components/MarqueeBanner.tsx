interface MarqueeBannerProps {
  text?: string;
}

const BANNER_ITEMS = 12;

export default function MarqueeBanner({
  text = "Farmed For Flavour",
}: MarqueeBannerProps) {
  return (
    <section
      aria-label={text}
      className="bg-grass text-whey border-y border-whey/20"
    >
      {/* Screen readers get the text once via aria-label on the section */}
      <div className="overflow-hidden py-5">
        <div className="banner-track" aria-hidden="true">
          {Array.from({ length: BANNER_ITEMS * 2 }).map((_, index) => (
            <div key={index} className="flex items-center">
              <span className="inline-block px-6 text-2xl sm:text-3xl font-poppins whitespace-nowrap">
                {text}
              </span>
              <span className="text-2xl sm:text-3xl font-poppins">•</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .banner-track {
          display: flex;
          width: max-content;
          animation: marquee-scroll 120s linear infinite;
        }

        @keyframes marquee-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .banner-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
