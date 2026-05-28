export default function HomeView() {
  return (
    <section className="h-screen flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-0 sm:px-4 h-full pt-0 pb-2 flex flex-col justify-start">
        <div className="mx-auto mb-4 w-full max-w-5xl h-[52vh] sm:h-[56vh] lg:h-[60vh] max-h-[calc(100vh-220px)] overflow-hidden rounded-none sm:rounded-2xl border-0 sm:border-2 border-leaf/20 shadow-lg shrink-0">
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

        <h1 className="text-center text-3xl sm:text-4xl lg:text-6xl font-podium uppercase font-bold text-leaf mb-3 leading-tight shrink-0">
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
