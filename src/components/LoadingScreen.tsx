import Image from "next/image";

interface LoadingScreenProps {
  isLoaded: boolean;
}

export default function LoadingScreen({ isLoaded }: LoadingScreenProps) {
  return (
    <div
      role="status"
      aria-label="Loading 3Bros website"
      aria-busy={!isLoaded}
      className={`fixed inset-0 z-[100] bg-forest flex items-center justify-center transition-opacity duration-500 ${
        isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <Image
        src="/images/logo1.png"
        alt=""
        aria-hidden="true"
        width={150}
        height={150}
        className="animate-bounce motion-reduce:animate-none"
        priority
      />
    </div>
  );
}
