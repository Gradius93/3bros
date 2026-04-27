import Video from "next-video";
import homeHeroVideo from "../../../videos/main-video.mp4";

export default function HomeView() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4 w-full max-w-6xl">
        <div className="mx-auto mb-8 w-full max-w-5xl overflow-hidden rounded-2xl border-2 border-leaf/20 shadow-lg">
          <Video
            src={homeHeroVideo}
            autoPlay
            muted
            loop
            playsInline
            controls={false}
          />
        </div>
        <h1 className="text-8xl font-podium uppercase font-bold text-leaf mb-4">
          Serving up sustainable sussex wagyu burgers
        </h1>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#our-menu"
            className="font-poppins uppercase px-6 py-3 bg-leaf text-whey rounded-lg transition-colors"
          >
            Browse our Menu
          </a>
          <a
            href="https://www.ubereats.com/gb/store/3bros-burgers/nASx43zkUuqtNDDSD6NG9w?diningMode=DELIVERY&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMlBPMTklMjAxTFglMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjJDaElKMXg4YjQ0TlNkRWdSNS1Tcm11cFAydm8lMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIyZ29vZ2xlX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNTAuODM4NjY3Nzk5OTk5OTk2JTJDJTIybG9uZ2l0dWRlJTIyJTNBLTAuNzc4OTA2NiU3RA%3D%3D&surfaceName="
            className="font-poppins uppercase px-6 py-3 bg-whey text-leaf rounded-lg transition-colors border-2 border-leaf"
          >
            Order takeout now
          </a>
        </div>
      </div>
    </div>
  );
}
