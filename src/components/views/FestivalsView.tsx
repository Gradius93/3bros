import Image from "next/image";

const festivalsByMonth = [
  {
    month: "June",
    events: [
      { dates: "June 12–14", name: "Brighton Summer Street Food Weekender" },
    ],
  },
  {
    month: "July",
    events: [
      { dates: "July 4–6", name: "Love Supreme" },
      { dates: "July 24–25", name: "South Coast Sounds & Bites" },
    ],
  },
  {
    month: "August",
    events: [
      { dates: "Aug 8–10", name: "Trenchmore Farm's Late Summer Market" },
      { dates: "Aug 22–24", name: "Leeds Festival" },
    ],
  },
  {
    month: "October",
    events: [
      { dates: "Oct 11", name: "Trenchmore Farm's Autumn Market" },
    ],
  },
];

export default function FestivalsView() {
  return (
    <div className="bg-whey py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: image */}
          <div className="relative w-full aspect-square overflow-hidden rounded-sm">
            <Image
              src="/images/3Bros_gazebo-festival.jpg"
              alt="3Bros at a festival"
              fill
              className="object-cover"
            />
          </div>

          {/* Right: title + festival list */}
          <div>
            <h2 className="font-podium text-5xl sm:text-6xl md:text-7xl lg:text-9xl uppercase font-normal leading-none text-leaf mb-10 text-center md:text-left">
              Festivals
            </h2>

            <div className="space-y-8 text-center">
              {festivalsByMonth.map(({ month, events }) => (
                <div key={month}>
                  <h3 className="font-poppins text-2xl uppercase text-leaf mb-2">
                    {month}
                  </h3>
                  <div className="space-y-3">
                    {events.map((event) => (
                      <div key={event.name}>
                        <p className="text-leaf/50 text-sm">{event.dates}</p>
                        <p className="text-leaf font-poppins text-base">{event.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
