export default function HomeView() {
  return (
    <section className="h-screen flex items-start justify-center overflow-hidden">
      <div className="w-full px-4 h-full pt-4 pb-2 flex flex-col justify-start">
        <div className="mb-4 w-full h-[52vh] sm:h-[56vh] lg:h-[60vh] max-h-[calc(100vh-220px)] overflow-hidden rounded-2xl border-2 border-leaf shadow-lg shrink-0">
          <div className="h-full w-full">
            {/* poster gives the browser an LCP candidate immediately; video loads after */}
            <video
              src="/videos/main-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              aria-hidden="true"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-center font-podium uppercase font-bold text-leaf mb-3 leading-none shrink-0" style={{ fontSize: "clamp(1.5rem, 7.8vw, 8rem)" }}>
          Serving up sustainable<br />sussex wagyu burgers
        </h1>

        <div className="flex gap-3 justify-center flex-wrap pb-1 shrink-0">
          <a
            href="#our-menu"
            className="font-poppins uppercase px-6 py-3 min-h-[44px] bg-leaf text-whey rounded-lg hover:bg-leaf/90 transition-colors focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
          >
            Browse our Menu
          </a>
        </div>
      </div>
    </section>
  );
}
