import Image from "next/image";
import React, { useRef, useEffect } from "react";

interface InfiniteCarouselProps {
  images: string[];
  alts?: string[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
    // Respect the user's reduced-motion preference — skip animation entirely
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let animationFrame = 0;
    let lastTimestamp = 0;
    const speed = 36;

    const step = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const elapsed = Math.min(timestamp - lastTimestamp, 100);
      lastTimestamp = timestamp;

      const track = trackRef.current;
      if (!track) return;

      posRef.current += (speed * elapsed) / 1000;

      const halfWidth = track.scrollWidth / 2;
      if (posRef.current >= halfWidth) {
        posRef.current -= halfWidth;
      }

      track.style.transform = `translateX(-${posRef.current}px)`;
      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const duplicatedImages = [...images, ...images];

  return (
    // aria-hidden: the carousel is purely decorative — the same images appear
    // individually with proper alt text elsewhere, so screen readers skip this.
    <div style={{ overflow: "hidden", width: "100%" }} aria-hidden="true">
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "20px", willChange: "transform" }}
      >
        {duplicatedImages.map((src, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              height: "300px",
              flexShrink: 0,
              position: "relative",
              border: "3px solid #18350E",
              borderRadius: "6px",
              overflow: "hidden",
            }}
          >
            <Image
              src={src}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
