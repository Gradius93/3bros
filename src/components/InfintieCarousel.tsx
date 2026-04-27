import React, { useRef, useEffect } from "react";

interface InfiniteCarouselProps {
  images: string[];
}

const InfiniteCarousel: React.FC<InfiniteCarouselProps> = ({ images }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame = 0;
    let lastTimestamp = 0;
    const speed = 36;

    const step = (timestamp: number) => {
      const container = containerRef.current;
      if (!container) return;

      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const elapsed = timestamp - lastTimestamp;
      lastTimestamp = timestamp;
      container.scrollLeft += (speed * elapsed) / 1000;

      const halfWidth = container.scrollWidth / 2;
      if (container.scrollLeft >= halfWidth) {
        container.scrollLeft -= halfWidth;
      }

      animationFrame = requestAnimationFrame(step);
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const duplicatedImages = [...images, ...images];

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        overflowX: "hidden",
        width: "100%",
        scrollBehavior: "auto",
        gap: "20px",
      }}
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
            borderRadius: "3px",
          }}
        />
      ))}
    </div>
  );
};

export default InfiniteCarousel;
