import React, { useRef, useEffect } from "react";

interface InfiniteCarouselProps {
  images: string[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const posRef = useRef(0);

  useEffect(() => {
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
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div
        ref={trackRef}
        style={{ display: "flex", gap: "20px", willChange: "transform" }}
      >
        {duplicatedImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`image-${index}`}
            style={{
              width: "300px",
              height: "300px",
              flexShrink: 0,
              objectFit: "cover",
              border: "3px solid #18350E",
              borderRadius: "6px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarousel;
