
import { ArrowUpRight } from "lucide-react";

const products = [
  {
    name: "Coir Pith / Coco Peat",
    category: "Horticulture Products",
    description:
      "Premium coir pith and coco peat sourced from natural coconut husk, suitable for nurseries, greenhouse cultivation and professional growing media.",
    image:
      "https://images.pexels.com/photos/33702958/pexels-photo-33702958.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Chilli Flakes",
    category: "Dehydrated Spices",
    description:
      "Vibrant red chilli flakes with rich colour and authentic spice character, prepared for food processing, seasoning and international markets.",
    image:
      "https://images.pexels.com/photos/6087275/pexels-photo-6087275.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Dry Potato",
    category: "Dehydrated Vegetables",
    description:
      "Carefully dehydrated potato slices designed to retain natural flavour and convenience for food processing and commercial applications.",
    image:
      "https://images.pexels.com/photos/2286776/pexels-photo-2286776.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Dry Tomato",
    category: "Dehydrated Vegetables",
    description:
      "Naturally rich dried tomato slices offering concentrated flavour, colour and convenience for food manufacturers and culinary applications.",
    image:
      "https://images.pexels.com/photos/5589039/pexels-photo-5589039.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Dry Banana",
    category: "Dehydrated Fruits",
    description:
      "Selected banana slices processed for consistent texture and natural taste, suitable for snacks, ingredients and food processing.",
    image:
      "https://images.pexels.com/photos/9191924/pexels-photo-9191924.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Chickpea",
    category: "Pulses & Grains",
    description:
      "Premium Indian chickpeas selected for uniformity, natural colour and dependable quality for international food markets.",
    image:
      "https://images.pexels.com/photos/34945158/pexels-photo-34945158.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Dry Ginger",
    category: "Dehydrated Spices",
    description:
      "Aromatic dried ginger with authentic flavour and natural character, suitable for spice blends, food processing and culinary use.",
    image:
      "https://images.pexels.com/photos/16122304/pexels-photo-16122304.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Dry Garlic",
    category: "Dehydrated Spices",
    description:
      "Carefully processed dried garlic offering strong natural aroma and flavour for seasoning, food manufacturing and spice applications.",
    image:
      "https://images.pexels.com/photos/5692581/pexels-photo-5692581.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },

  {
    name: "Dehydrated Vegetables",
    category: "Food Ingredients",
    description:
      "A versatile range of dehydrated vegetable ingredients prepared for extended shelf life, easy handling and commercial food applications.",
    image:
      "https://images.pexels.com/photos/264537/pexels-photo-264537.jpeg?auto=compress&cs=tinysrgb&w=1800",
  },
];

export default function Gallery() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-[#171717] pt-36 pb-24">

  <div className="absolute inset-0">
    <img
      src={products[1].image}
      alt="Indian chilli flakes"
      className="h-full w-full object-cover"
    />
  </div>

  {/* Light overlay */}
  <div className="absolute inset-0 bg-black/15" />

  <div className="relative mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

    <div className="max-w-3xl">

      <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
        Our Product Gallery
      </p>

      <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
        Quality Products,
        <br />
        <span className="text-[#f97316]">
          Prepared for the World.
        </span>
      </h1>

      <p className="mt-7 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
        Explore our range of Indian agricultural products,
        dehydrated vegetables, spices, pulses and horticultural
        products prepared for reliable global supply.
      </p>

    </div>

  </div>

</section>

      {/* ================= PRODUCT GRID ================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          {/* SECTION HEADING */}
          <div className="mb-14 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">

            <div className="max-w-2xl">

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
                Product Collection
              </p>

              <h2 className="mt-4 font-serif text-3xl leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
                From Indian farms
                <br />
                <span className="text-[#f97316]">
                  to global markets.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-sm leading-7 text-black/50">
              Our product portfolio combines natural Indian produce
              with careful sourcing and export-focused quality standards.
            </p>

          </div>


          {/* ================= PRODUCT CARDS ================= */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {products.map((product, index) => (

              <article
                key={product.name}
                className="group overflow-hidden rounded-[22px] border border-black/10 bg-white transition duration-500 hover:-translate-y-1 hover:border-[#f97316]/40 hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]"
              >

                {/* IMAGE */}
                <div className="relative h-[270px] overflow-hidden bg-[#f5f5f5]">

                  <img
                    src={product.image}
                    alt={product.name}
                    loading={index > 2 ? "lazy" : "eager"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  {/* IMAGE OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />

                  {/* NUMBER */}
                  <div className="absolute left-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-[11px] font-semibold text-[#171717] backdrop-blur">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* CATEGORY */}
                  <div className="absolute bottom-5 left-5">

                    <span className="rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.15em] text-[#171717] backdrop-blur">
                      {product.category}
                    </span>

                  </div>

                </div>


                {/* CONTENT */}
                <div className="p-6 sm:p-7">

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

                  <div className="mt-6 h-px w-full bg-black/10" />

                  <div className="mt-5 flex items-center justify-between">

                    <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Export Ready
                    </span>

                    <span className="text-[10px] font-medium text-[#f97316]">
                      ARVANTA EXIM
                    </span>

                  </div>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-[#171717] py-20 sm:py-24">

        <div className="mx-auto max-w-[1100px] px-6 text-center sm:px-10">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
            Looking for Indian Products?
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            Let's discuss your
            <br />
            <span className="text-[#f97316]">
              export requirement.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-white/55">
            Share your product, quantity and destination requirements.
            Our team can help you with suitable sourcing and export
            solutions.
          </p>

          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#f97316] px-7 py-3.5 text-[12px] font-semibold text-black transition duration-300 hover:bg-[#fb923c]"
          >
            Send an Enquiry
            <ArrowUpRight size={16} />
          </a>

        </div>

      </section>

    </main>
  );
}

