import Image from "next/image";

export default function AboutView() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start lg:items-stretch">
          <div className="prose prose-lg max-w-none bg-leaf border border-leaf rounded-xl p-6 sm:p-12 lg:p-20 text-whey">
            <div className="text-center">
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 font-podium uppercase tracking-[0.035em] text-center">
                About Us
              </h2>
              <h3 className="text-3xl font-la-petunia mb-2">The Beginning</h3>

              <p className="text-md leading-[1.125] mb-10">
                3Bros started in peak lockdown with three friends in their early
                twenties, a shared obsession with great food, and a
                not-so-humble mission: build the ultimate burger. The idea took
                shape at Honeybee Café in Woodingdean, Brighton, where countless
                experiments in a garage-converted prep kitchen led to one simple
                rule — keep it simple and only use the best ingredients.
              </p>
            </div>
            <div className="text-center mb-12">
              <h3 className="text-3xl font-la-petunia mb-2">The Middle</h3>

              <p className="text-md leading-[1.125] mb-10">
                In 2022, things levelled up with a partnership with Trenchmore
                Farm, one of the UK&apos;s top Wagyu beef producers. This took
                our burgers to another level. Rich, juicy & seriously marbled.
                The beef speaks for itself and keeps you coming back for more.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-la-petunia mb-2">The Future</h3>
              <p className="text-md leading-[1.125] mb-10">
                We now operate 4 permanent locations, with a brand new unit at
                Winchester&apos;s Helch due to open in May 2026. 3Bros is
                always looking for new ventures and we plan to expand
                nationwide. The goal hasn&apos;t changed: make the best burger
                the UK&apos;s ever seen, back brilliant farmers and suppliers,
                and prove that doing things properly just tastes better.
              </p>
            </div>
          </div>

          <SectionImage
            src="/images/thebros.jpg"
            alt="The three founders of 3Bros Burgers"
          />
        </div>
      </section>
      <section className="mb-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start lg:items-stretch">
          <div className="flex flex-col gap-6">
            <SectionImage
              src="/images/mooooooo.jpg"
              alt="Wagyu cattle grazing at Trenchmore Farm, Horsham"
            />
            <SectionImage
              src="/images/morecows.jpg"
              alt="The Sussex Wagyu herd at Trenchmore Farm"
            />
          </div>

          <div className="prose prose-lg max-w-none text-center bg-forest border border-forest rounded-xl p-20 text-whey">
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 font-podium uppercase tracking-[0.035em] text-center">
              The Farm
            </h3>
            <h4 className="text-3xl font-la-petunia mb-2">
              Trenchmore &amp; Regenerative Agriculture
            </h4>
            <p className="text-md mb-6 leading-[1.125]">
              Nestled in Cowfold, West Sussex, Trenchmore Farm is an
              award-winning pioneer of British regenerative farming. Their
              journey began over a decade ago when Red (Akaushi) Japanese Wagyu
              embryos were brought over to establish what has become the
              exceptional Sussex Wagyu herd.
            </p>
            <p className="text-md leading-[1.125] mb-6">
              Trenchmore combines traditional British farming ethics with
              world-class Wagyu genetics, crossing full-blood lines with native
              breeds like Sussex and Angus to perfectly suit the local climate
              and grazing lands.
            </p>
            <h4 className="text-3xl font-la-petunia mb-2">
              World-Class Welfare
            </h4>
            <p className="text-md leading-[1.125] mb-6">
              Cattle are raised under strict animal welfare standards, living
              slow, natural lives. As a suckler herd, calves spend their first
              six to eight months alongside their mothers.
            </p>
            <h4 className="text-3xl font-la-petunia mb-2">
              Unique, Sustainable Diet
            </h4>
            <p className="text-md leading-[1.125] mb-6">
              The herd enjoys a grass-led diet of pasture, hay, and silage,
              supplemented with local brewer&apos;s grains and sweet apple
              pomace left over from Trenchmore&apos;s own Silly Moo Cider
              process.
            </p>
            <p className="text-md leading-[1.125]">
              Our partnership with Trenchmore Farm ensures that every 3Bros
              burger is built on a foundation of respect for the animal,
              restoration of the soil, and uncompromising quality.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start lg:items-stretch">
          <div className="prose prose-lg max-w-none text-center bg-akushi-gold border border-akushi-gold rounded-xl p-20 text-whey">
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 font-podium uppercase tracking-[0.035em] text-center">
              Our Meat
            </h3>
            <h4 className="text-3xl font-la-petunia mb-2">
              The Sussex Wagyu Experience
            </h4>
            <p className="text-md mb-6 leading-[1.125]">
              This is Wagyu beef, reimagined. While traditional Japanese Wagyu
              is famously rich, Trenchmore&apos;s grass-led grazing system
              creates a flavour profile that is cleaner, meatier, and
              beautifully balanced — delivering luxury without the overpowering
              heaviness.
            </p>
            <h4 className="text-3xl font-la-petunia mb-2">
              Signature Marbling
            </h4>
            <p className="text-md mb-6 leading-[1.125]">
              Intramuscular fat webs intricately throughout the meat. When it
              hits the grill, this fat melts naturally, basting the burger from
              the inside out for unmatched juiciness.
            </p>
            <h4 className="text-3xl font-la-petunia mb-2">The Texture</h4>
            <p className="text-md mb-6 leading-[1.125]">
              Because the cattle grow slowly and naturally, the beef develops an
              incredibly tender, melt-in-your-mouth texture that holds its
              structure perfectly.
            </p>
            <h4 className="text-3xl font-la-petunia mb-2">
              Deep, Complex Flavour
            </h4>
            <p className="text-md leading-[1.125]">
              The combination of heritage genetics and a unique cider-pomace
              diet yields a deep, complex beefiness with subtle, sweet
              undertones.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <SectionImage
              src="/images/pepperpatties.jpg"
              alt="3Bros Sussex Wagyu smash burger patties seasoned with pepper"
            />
            <SectionImage
              src="/images/pattys.jpg"
              alt="3Bros burger patties made from Trenchmore Farm Wagyu beef"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function SectionImage({
  src,
  alt,
}: {
  readonly src: string;
  readonly alt: string;
}) {
  return (
    <div className="relative w-full min-h-[420px] aspect-[4/5] overflow-hidden rounded-xl border-3 border-leaf lg:min-h-0 lg:h-full lg:aspect-auto">
      <Image src={src} alt={alt} fill className="object-cover" />
    </div>
  );
}
