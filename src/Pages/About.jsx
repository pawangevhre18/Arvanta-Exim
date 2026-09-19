import { ArrowUpRight, Globe2, ShieldCheck, Truck, Leaf } from "lucide-react";

const bannerImage =
  "https://images.pexels.com/photos/239587/pexels-photo-239587.jpeg?auto=compress&cs=tinysrgb&w=2200";

const agricultureImage =
  "https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1800";

const products = [
  {
    name: "Dry Red Chilli",
    category: "Dehydrated Spices",
    image:
      "https://images.pexels.com/photos/239587/pexels-photo-239587.jpeg?auto=compress&cs=tinysrgb&w=1200",
    description:
      "Selected Indian dry red chillies with vibrant colour, authentic flavour and export-focused quality.",
  },
  {
    name: "Dry Garlic",
    category: "Dehydrated Spices",
    image:
      "https://ik.imagekit.io/cdnvhglobalexport/Products/Dehydrated%20Garlic/garlic_cloves.webp",
    description:
      "Carefully processed dry garlic offering natural aroma and flavour for food processing and seasoning.",
  },
  {
    name: "Coir Pith / Coco Peat",
    category: "Horticulture Products",
    image:
      "https://ravietsindustries.com/assets/images/site/gallery-1.jpg",
    description:
      "Premium natural coir pith suitable for nurseries, greenhouse cultivation and professional growing media.",
  },
];

const values = [
  {
    icon: Leaf,
    title: "Quality First",
    text: "We focus on consistent product quality, careful sourcing and dependable preparation.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Supply",
    text: "Our approach is built around transparency, reliability and long-term business relationships.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    text: "We connect Indian agricultural products with buyers and markets across the world.",
  },
];

export default function About() {
  return (
    <main className="bg-white">

      {/* HERO / BANNER */}
      <section className="relative min-h-[620px] overflow-hidden bg-[#171717] pt-36 pb-24">
        <div className="absolute inset-0">
          <img
            src={bannerImage}
            alt="Premium Indian dried red chillies"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Light overlay so red chilli remains clearly visible */}
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative mx-auto flex min-h-[420px] max-w-[1360px] items-center px-6 sm:px-10 lg:px-14">
          <div className="max-w-3xl">
            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
              About ARVANTA EXIM
            </p>

            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Connecting Indian
              <br />
              <span className="text-[#f97316]">
                Agriculture to the World.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
              We connect quality Indian agricultural products with
              international buyers through dependable sourcing,
              careful handling and export-focused solutions.
            </p>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
                Who We Are
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
                Rooted in India.
                <br />
                <span className="text-[#f97316]">
                  Connected globally.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-black/55">
                ARVANTA EXIM is an Indian export-focused business
                working with agricultural products, dehydrated
                ingredients, spices, pulses and horticultural products.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-black/55">
                Our goal is simple — make quality Indian products
                accessible to international buyers through reliable
                sourcing, professional handling and transparent
                business practices.
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="h-px w-12 bg-[#f97316]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                  Indian Origin • Global Reach
                </span>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[28px]">
              <img
                src={agricultureImage}
                alt="Indian agricultural farming"
                className="h-[460px] w-full object-cover"
              />

              <div className="absolute bottom-5 left-5 rounded-full bg-white/95 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#171717] shadow-lg">
                From Farm to Global Market
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="mb-12">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
              Our Products
            </p>

            <h2 className="mt-4 max-w-2xl font-serif text-3xl leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Selected products from
              <br />
              <span className="text-[#f97316]">
                Indian agriculture.
              </span>
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="group overflow-hidden rounded-[24px] border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-[#f97316]/40 hover:shadow-[0_20px_55px_rgba(0,0,0,0.10)]"
              >
                <div className="relative h-[270px] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />

                  <span className="absolute bottom-5 left-5 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#171717]">
                    {product.category}
                  </span>
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-serif text-2xl text-[#171717]">
                      {product.name}
                    </h3>

                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#f97316] text-black transition duration-300 group-hover:rotate-45">
                      <ArrowUpRight size={16} />
                    </div>
                  </div>

                  <p className="mt-4 text-[13px] leading-6 text-black/50">
                    {product.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#fffaf5] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
              Our Values
            </p>

            <h2 className="mt-4 font-serif text-3xl leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
              Business built on
              <br />
              <span className="text-[#f97316]">
                trust and consistency.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <div
                  key={value.title}
                  className="rounded-[22px] border border-black/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#f97316]/40"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                    <Icon size={22} />
                  </div>

                  <h3 className="mt-6 font-serif text-2xl text-[#171717]">
                    {value.title}
                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-black/50">
                    {value.text}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-[#f97316] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">

            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-black/60">
                What We Do
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-black sm:text-4xl lg:text-5xl">
                From sourcing
                <br />
                <span className="text-white">
                  to global supply.
                </span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-black/65">
                We help international buyers source Indian agricultural
                products with a focus on quality, consistency and
                dependable export coordination.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">

              <div className="rounded-[22px] bg-white p-7">
                <Globe2 className="text-[#f97316]" size={25} />

                <h3 className="mt-6 font-serif text-2xl text-[#171717]">
                  Global Sourcing
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-black/50">
                  Connecting buyers with carefully selected Indian
                  agricultural and food products.
                </p>
              </div>

              <div className="rounded-[22px] bg-white p-7">
                <ShieldCheck className="text-[#f97316]" size={25} />

                <h3 className="mt-6 font-serif text-2xl text-[#171717]">
                  Quality Focus
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-black/50">
                  Maintaining attention to product quality, handling
                  and consistency throughout the supply process.
                </p>
              </div>

              <div className="rounded-[22px] bg-white p-7 sm:col-span-2">
                <Truck className="text-[#f97316]" size={25} />

                <h3 className="mt-6 font-serif text-2xl text-[#171717]">
                  Export Coordination
                </h3>

                <p className="mt-3 max-w-2xl text-[13px] leading-6 text-black/50">
                  Supporting international requirements with organized
                  communication, product coordination and reliable
                  shipment planning.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#171717] py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
            ARVANTA EXIM
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Indian products.
            <br />
            <span className="text-[#f97316]">
              Global possibilities.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
            Quality agricultural products from India, prepared for
            international markets and long-term business relationships.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f97316] px-7 py-3.5 text-[12px] font-semibold text-black transition duration-300 hover:bg-[#fb923c]"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </a>

        </div>
      </section>

    </main>
  );
}