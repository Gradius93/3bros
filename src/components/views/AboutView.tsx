import Image from "next/image";

export default function AboutView() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <section className="mb-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start lg:items-stretch">
          <div className="prose prose-lg max-w-none bg-leaf border border-gray-300 rounded-xl p-6 sm:p-12 lg:p-20 text-whey">
            <div className="text-center">
              <h2 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 font-podium uppercase tracking-[0.035em] text-center">
                About Us
              </h2>
              <h3 className="text-3xl font-la-petunia mb-2">The Beginning</h3>

              <p className="text-md leading-[1.125] mb-10">
                3Bros started in 2020 with three friends in their early
                twenties, a shared obsession with great food, and a
                not-so-humble mission: build the ultimate burger. The idea took
                shape at Honeybee Café in Woodingdean, Brighton, where countless
                experiments led to one simple rule - keep it simple and only use
                the best ingredients.
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

          <div className="prose prose-lg max-w-none text-center bg-forest border border-gray-300 rounded-xl p-20 text-whey">
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 font-podium uppercase tracking-[0.035em] text-center">
              The Farm
            </h3>
            <h4 className="text-3xl font-la-petunia mb-2 font-la-petunia">
              Trenchmore Farm
            </h4>
            <p className="text-md mb-6 leading-[1.125]">
              Trenchmore Farm (Cowfold, West Sussex) is a pioneer of British
              regenerative farming. The journey began over ten years ago, when
              Japanese Wagyu embryos were brought over from Japan to establish
              what would become the Sussex Wagyu herd.
            </p>
            <p className="text-md leading-[1.125] mb-6">
              The farm focuses on slow-growth, pasture-based systems that allow
              cattle to develop naturally, resulting in beautifully marbled,
              flavourful beef. By combining traditional British farming values
              with world-class Wagyu genetics, Trenchmore delivers a product
              that&apos;s both consistently high-quality and responsibly
              produced.
            </p>
            <p className="text-md leading-[1.125]">
              Our partnership with Trenchmore Farm ensures that every burger we
              serve is made with the highest quality beef, raised with care and
              respect for the land and the animal. It&apos;s this commitment to
              excellence that makes the 3Bros burger truly exceptional.
            </p>
          </div>
        </div>
      </section>
      <section className="mb-6">
        <div className="grid lg:grid-cols-2 gap-6 items-start lg:items-stretch">
          <div className="prose prose-lg max-w-none text-center bg-akushi-gold border border-gray-300 rounded-xl p-20 text-whey">
            <h3 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-10 font-podium uppercase tracking-[0.035em] text-center">
              Our Meat
            </h3>
            <h4 className="text-4xl font-bold mb-6 font-la-petunia">
              Sussex Wagyu Beef
            </h4>
            <p className="text-md mb-8">
              British Wagyu is Wagyu beef raised in the UK using Wagyu genetics,
              but farmed to British standards and landscapes. It delivers the
              signature marbling and richness Wagyu is known for, with a flavour
              profile that&apos;s often cleaner, meatier and better balanced
              than its Japanese counterpart.
            </p>

            <ul className="space-y-4">
              <li>
                <strong className="block font-semibold font-poppins">
                  Wagyu genetics
                </strong>
                <p className="text-md mt-1">
                  British Wagyu cattle are bred from full-blood or crossbred
                  Wagyu lines, crossed with traditional British breeds like
                  Sussex, Angus or Hereford to suit the UK climate and grazing
                  systems.
                </p>
              </li>

              <li>
                <strong className="block font-semibold font-poppins">
                  British farming standards
                </strong>
                <p className="text-md mt-1">
                  The cattle are raised under some of the world&apos;s highest
                  animal welfare regulations, often with slow-growing,
                  pasture-based systems.
                </p>
              </li>

              <li>
                <strong className="block font-semibold font-poppins">
                  Grass-led diets
                </strong>
                <p className="text-md  mt-1">
                  Unlike Japanese Wagyu, which is usually grain-fed, British
                  Wagyu is commonly grass-fed or grass-led, resulting in rich
                  marbling without overpowering heaviness.
                </p>
              </li>

              <li>
                <strong className="block font-semibold">
                  Slower, natural growth
                </strong>
                <p className="text-md  mt-1">
                  Trenchmore's cattle are typically grown over a longer period,
                  allowing flavour to develop. They are a suckler herd, spending
                  their first six to eight months with their mothers on a diet
                  of milk then grass, hay, silage, local brewer’s grains and
                  apple pomace from the Silly Moo Cider process.
                </p>
              </li>
            </ul>
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
