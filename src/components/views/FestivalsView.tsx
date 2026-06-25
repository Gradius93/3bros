"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const vanImages = [
  { src: "/images/3bros_van.jpeg", alt: "3Bros burger van at a festival" },
  { src: "/images/3bros_van2.jpeg", alt: "3Bros burger van serving customers" },
];

const festivalsByMonth = [
  {
    month: "June",
    events: [
      {
        dates: "Saturday 13th",
        datetime: "2026-06-13",
        name: "Brighton Central Park @ Black Rock — Puzzle presents Sweely Burnski Julian Anthony Laidlaw Locklead Maxime dB RTK Tarantino",
      },
      {
        dates: "Wednesday 17th",
        datetime: "2026-06-17",
        name: "Brighton Central Park @ Black Rock — England v Croatia",
      },
      {
        dates: "Saturday 20th",
        datetime: "2026-06-20",
        name: "Brighton Central Park @ Black Rock — SHY FX",
      },
      {
        dates: "Sunday 21st",
        datetime: "2026-06-21",
        name: "Brighton Central Park @ Black Rock — The Road to Nashville",
      },
      {
        dates: "June 27",
        datetime: "2026-06-27",
        name: "Early Summer Market (Trenchmore Farm)",
      },
    ],
  },
  {
    month: "July",
    events: [
      {
        dates: "Friday 3rd - Sunday 5th July",
        datetime: "2026-07-03",
        name: "Love Supreme (Glynde Place, E. Sussex)",
      },
      {
        dates: "Thursday 23rd - Sunday 26th July",
        datetime: "2026-07-23",
        name: "Latitude Festival (Henham Park, Suffolk)",
      },
    ],
  },
  {
    month: "August",
    events: [
      {
        dates: "Aug 8–10",
        datetime: "2026-08-08",
        name: "Trenchmore Farm's Late Summer Market",
      },
      {
        dates: "Aug 1st, 2nd, 8th, 9th, 15th, 16th",
        datetime: "2026-08-15",
        name: "Loxwood Joust (Horsham)",
      },
      {
        dates: "Thursday 27th - Monday 31st August",
        datetime: "2026-08-27",
        name: "Leeds Festival (Bramham Park, W. Yorkshire)",
      },
    ],
  },
  {
    month: "October",
    events: [
      {
        dates: "Oct 11",
        datetime: "2026-10-11",
        name: "Trenchmore Farm's Autumn Market",
      },
    ],
  },
  {
    month: "November - December",
    events: [
      {
        dates: "Nov – Dec",
        datetime: "2026-11-01",
        name: "Hyde Park's Winter Wonderland",
      },
    ],
  },
];

export default function FestivalsView() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % vanImages.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-whey py-8" aria-label="Festival appearances">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: sliding image strip */}
          <div className="relative w-full aspect-square overflow-hidden rounded-sm border-2 border-leaf order-2 md:order-1">
            <div
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{
                width: `${vanImages.length * 100}%`,
                transform: `translateX(-${current * (100 / vanImages.length)}%)`,
              }}
            >
              {vanImages.map((img) => (
                <div
                  key={img.src}
                  className="relative h-full"
                  style={{ width: `${100 / vanImages.length}%` }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right: title + festival list */}
          <div className="order-1 md:order-2">
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
                        <time
                          dateTime={event.datetime}
                          className="block text-leaf/70 text-sm"
                        >
                          {event.dates}
                        </time>
                        <p className="text-leaf font-poppins text-base">
                          {event.name}
                        </p>
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
