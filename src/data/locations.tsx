import type { Location } from "../types";

export const locations: Location[] = [
    {
        id: 1,
        name: "Horsham",
        description:
            "Farm Shop serving fresh, locally-sourced produce. Menu expanding and opening four days a week this spring.",
        address: "Trenchmore Farm, Burnthouse Lane",
        city: "Horsham, RH13 8DG",
        hours: "Every Saturday: 11am – 4pm",
        image: "/images/3bros_farm-location.webp",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=Trenchmore+Farm+Burnthouse+Lane+Horsham+RH13+8DG",
    },
    {
        id: 2,
        name: "Brighton",
        description:
            "Food Hall in Brighton's iconic King's Road Arches, bringing quality dining to the seafront.",
        address: "King's Road Arches",
        city: "Brighton, BN1 1NB",
        hours: "Mon-Fri: 11:30am – close | Sat-Sun: 11am – close",
        image: "/images/3bros_shelter-hall-location.jpg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=King's+Road+Arches+Brighton+BN1+1NB",
    },
    {
        id: 4,
        name: "Winchester",
        description:
            "Food Hall located in Winchester's Upper Brook Street, offering daily dining in the heart of the city.",
        address: "19 Upper Brook Street",
        city: "Winchester, SO23 8AL",
        hours: "Mon-Sun: 11:30am – close",
        image: "/images/3bros_helch-locations.jpeg",
        mapsUrl:
            "https://www.google.com/maps/search/?api=1&query=19+Upper+Brook+Street+Winchester+SO23+8AL",
    },
];