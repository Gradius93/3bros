export default function HomeView() {
  return (
    <section className="h-screen flex items-start justify-center overflow-hidden">
      <div className="w-full max-w-6xl px-0 sm:px-4 h-full pt-0 pb-2 flex flex-col justify-start">
        <div className="mx-auto mb-4 w-full max-w-5xl h-[52vh] sm:h-[56vh] lg:h-[60vh] max-h-[calc(100vh-220px)] overflow-hidden rounded-none sm:rounded-2xl border-0 sm:border-2 border-leaf/20 shadow-lg shrink-0">
          <div className="h-full w-full">
            {/* poster gives the browser an LCP candidate immediately; video loads after */}
            <video
              src="/videos/main-video.mp4"
              poster="/images/3bros_desktop_safe_1920x1080.png"
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
          Serving up sustainable sussex wagyu burgers
        </h1>

        <div className="flex gap-3 justify-center flex-wrap pb-1 shrink-0">
          <a
            href="#our-menu"
            className="font-poppins uppercase px-6 py-3 min-h-[44px] bg-leaf text-whey rounded-lg hover:bg-leaf/90 transition-colors focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
          >
            Browse our Menu
          </a>
          <a
            href="https://www.ubereats.com/gb/store/3bros-burgers/nASx43zkUuqtNDDSD6NG9w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlBPMTklMjAxTFglMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKMXg4YjQ0TlNkRWdSNS1Tcm11cFAydm8lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTAuODM4NjY3Nzk5OTk5OTk2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTAuNzc4OTA2NiU3RA%3D%3D&surfaceName="
            target="_blank"
            rel="noopener noreferrer"
            className="font-poppins uppercase px-6 py-3 min-h-[44px] bg-whey text-leaf rounded-lg hover:bg-whey/80 transition-colors border-2 border-leaf focus:outline-none focus:ring-2 focus:ring-leaf focus:ring-offset-2"
          >
            Order takeout now
            <span className="sr-only">(opens in new tab)</span>
          </a>
        </div>
      </div>
    </section>
  );
}
