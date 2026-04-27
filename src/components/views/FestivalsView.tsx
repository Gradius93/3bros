const upcomingFestivals = [
  {
    name: "Brighton Summer Street Food Weekender",
    date: "June 12-14",
    city: "Brighton",
    note: "Signature Sussex Wagyu burger menu + loaded fries.",
  },
  {
    name: "South Coast Sounds & Bites",
    date: "July 24-25",
    city: "Chichester",
    note: "Late-night service and festival specials.",
  },
  {
    name: "Harvest Yard Festival",
    date: "September 18",
    city: "Horsham",
    note: "Farm-focused lineup with Trenchmore collaboration.",
  },
];

export default function FestivalsView() {
  return (
    <div className="bg-forest text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-5xl font-la-petunia mb-4">Festivals</h2>
        <p className="text-white/80 max-w-2xl mb-10">
          Find us at food festivals and weekend events across the South. We bring
          the full 3Bros energy: proper burgers, proper service, proper queues.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {upcomingFestivals.map((festival) => (
            <article
              key={festival.name}
              className="bg-white/10 rounded-xl p-6 border border-white/20"
            >
              <p className="text-sm uppercase tracking-wide text-white/70 mb-2">
                {festival.date} - {festival.city}
              </p>
              <h3 className="text-xl font-semibold mb-2">{festival.name}</h3>
              <p className="text-white/80">{festival.note}</p>
            </article>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="https://www.instagram.com/3brosmunch/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-white text-forest px-5 py-3 font-semibold hover:bg-gray-100 transition-colors"
          >
            See Live Festival Updates
          </a>
        </div>
      </div>
    </div>
  );
}
