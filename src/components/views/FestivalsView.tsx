import Image from "next/image";

const festivalsByMonth = [
  {
    month: "June",
    events: [
      { dates: "June 12–14", datetime: "2026-06-12", name: "Brighton Summer Street Food Weekender" },
    ],
  },
  {
    month: "July",
    events: [
      { dates: "July 4–6", datetime: "2026-07-04", name: "Love Supreme" },
      { dates: "July 24–25", datetime: "2026-07-24", name: "South Coast Sounds & Bites" },
    ],
  },
  {
    month: "August",
    events: [
      { dates: "Aug 8–10", datetime: "2026-08-08", name: "Trenchmore Farm's Late Summer Market" },
      { dates: "Aug 22–24", datetime: "2026-08-22", name: "Leeds Festival" },
    ],
  },
  {
    month: "October",
    events: [
      { dates: "Oct 11", datetime: "2026-10-11", name: "Trenchmore Farm's Autumn Market" },
    ],
  },
];

export default function FestivalsView() {
  return (
    <section className="bg-whey py-8" aria-label="Festival appearances">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: image */}
          <div className="relative w-full aspect-square overflow-hidden rounded-sm">
            <Image
              src="/images/3Bros_gazebo-festival.jpg"
              alt="3Bros gazebo set up at a festival"
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
                  <ul className="space-y-3 list-none">
                    {events.map((event) => (
                      <li key={event.name}>
                        {/* text-leaf/70 ≈ 5:1 contrast on bg-whey, passing 4.5:1 AA */}
                        <time dateTime={event.datetime} className="block text-leaf/70 text-sm">
                          {event.dates}
                        </time>
                        <p className="text-leaf font-poppins text-base">{event.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
