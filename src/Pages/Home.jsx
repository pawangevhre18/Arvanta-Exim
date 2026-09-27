


import { Link } from "react-router-dom";

import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  Handshake,
  Leaf,
  ShieldCheck,
  Truck,
} from "lucide-react";

const products = [
  {
    name: "Red Dry Chilli",
    category: "Premium Spice",
    image:
      // "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=90",
      "https://images.unsplash.com/photo-1601876818790-33a0783ec542?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRyeSUyMHJlZCUyMGNoaWxsaSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    name: "Dry Banana",
    category: "Natural Produce",
    image:
      // "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_banana_chips.jpg",
     "https://t3.ftcdn.net/jpg/20/73/06/06/240_F_2073060697_7gGpJKd2BwYgGQGZydQsAwtKHDrF0ob7.jpg"
  },
  {
    name: "Dehydrated Vegetables",
    category: "Authentic Produce",
    image:
      // "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=90",
      "https://mkexports.co.in/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-13-at-12.35.21_157b39fa.jpg"
  },
];

/* ================= CERTIFICATIONS ================= */

const certifications = [
  {
    name: "APEDA",
    title: "Export Registration",
    description:
      "Agricultural and Processed Food Products Export Development Authority",
    logo: "https://www.apeda.gov.in/apedawebsite/images/apeda_logo.png",
  },
  {
    name: "FSSAI",
    title: "Food Safety",
    description:
      "Food Safety and Standards Authority of India",
    logo: "https://www.fssai.gov.in/upload/uploadfiles/files/FSSAI_Logo.png",
  },
  {
    name: "ISO 22000",
    title: "Food Safety Management",
    description:
      "International food safety management system standard",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/ISO_Logo.svg/512px-ISO_Logo.svg.png",
  },
  {
    name: "SPICES BOARD",
    title: "Spice Export",
    description:
      "Spices Board India under Ministry of Commerce and Industry",
    logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4e/Spices_Board_India_logo.svg/512px-Spices_Board_India_logo.svg.png",
  },
  {
    name: "FIEO",
    title: "Export Organisation",
    description:
      "Federation of Indian Export Organisations",
    logo: "https://www.fieo.org/images/logo.png",
  },
  {
    name: "FDA",
    title: "Global Food Safety",
    description:
      "U.S. Food and Drug Administration",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/FDA_Logo.svg/512px-FDA_Logo.svg.png",
  },
];

export default function Home() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden bg-black">

        <img
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=2200&q=90"
          alt="Indian red spices"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/25" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-[1360px] items-end px-6 pb-24 pt-40 sm:px-10 lg:px-14 lg:pb-28">

          <div className="max-w-[850px]">

            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md">

              <span className="h-1.5 w-1.5 rounded-full bg-[#F97316]" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/90">
                Indian Origin • Global Reach
              </span>

            </div>

            <h1 className="font-serif text-[52px] leading-[0.98] text-white sm:text-[72px] lg:text-[88px]">

              Bringing the Taste
              <br />

              of India to the{" "}

              <span className="italic text-[#F97316]">
                World.
              </span>

            </h1>

            <p className="mt-7 max-w-[610px] text-[15px] leading-7 text-white/75 sm:text-[17px]">
              Premium Indian agricultural products delivered to
              international markets with quality, consistency and
              trusted export partnerships.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#F97316] px-7 py-4 text-[13px] font-semibold text-black transition duration-300 hover:bg-[#F97316]"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>

              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[13px] font-semibold text-white backdrop-blur-md transition duration-300 hover:bg-white hover:text-black"
              >
                Discover Arvanta
                <ArrowUpRight size={16} />
              </Link>

            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-white/15 bg-black/20 backdrop-blur-md">

          <div className="mx-auto grid max-w-[1360px] grid-cols-3 px-6 sm:px-10 lg:px-14">

            <Stat number="20+" label="Products" />

            <Stat number="15+" label="Export Markets" />

            <Stat number="100%" label="Quality Focus" />

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F97316]">
              About Arvanta Exim
            </p>

            <h2 className="mt-4 font-serif text-[44px] leading-[1.05] text-[#171717] sm:text-[58px]">

              Indian roots.
              <br />

              <span className="italic text-[#F97316]">
                Global ambition.
              </span>

            </h2>

          </div>

          <div>

            <p className="max-w-[680px] text-[17px] leading-8 text-[#555]">
              We connect India's agricultural strength with buyers
              across international markets, delivering carefully
              sourced products backed by dependable export solutions.
            </p>

            <Link
              to="/about"
              className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#F97316] transition hover:text-[#171717]"
            >
              Discover Our Story
              <ArrowRight size={15} />
            </Link>

          </div>

        </div>

      </section>


      {/* ================= PRODUCTS ================= */}
      <section className="bg-[#f7f7f7] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-[1360px]">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F97316]">
                Our Products
              </p>

              <h2 className="mt-4 font-serif text-[43px] leading-[1.05] text-[#171717] sm:text-[55px]">

                From Indian farms
                <br />

                <span className="italic text-[#F97316]">
                  to global tables.
                </span>

              </h2>

            </div>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-[13px] font-semibold text-[#F97316]"
            >
              View All Products
              <ArrowUpRight size={15} />
            </Link>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {products.map((product) => (
              <div
                key={product.name}
                className="group overflow-hidden rounded-[24px] bg-black"
              >

                <div className="relative aspect-[0.9] overflow-hidden">

                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <p className="mb-2 text-[9px] uppercase tracking-[0.25em] text-[#F97316]">
                      {product.category}
                    </p>

                    <h3 className="font-serif text-[29px] text-white">
                      {product.name}
                    </h3>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= EXPORT ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto grid max-w-[1360px] gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">

          <div className="relative overflow-hidden rounded-[28px]">

            <img
              src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1500&q=85"
              alt="Global export"
              className="h-[500px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-black/85 px-6 py-5 backdrop-blur-md">

              <p className="font-serif text-3xl text-white">
                Worldwide
              </p>

              <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-[#F97316]">
                Export Network
              </p>

            </div>

          </div>


          <div>

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F97316]">
              Global Export
            </p>

            <h2 className="mt-4 font-serif text-[44px] leading-[1.05] text-[#171717] sm:text-[58px]">

              Taking India's
              <br />

              <span className="italic text-[#F97316]">
                finest abroad.
              </span>

            </h2>

            <p className="mt-7 max-w-[600px] text-[15px] leading-8 text-[#555]">
              From sourcing and quality checks to documentation and
              shipment coordination, we focus on making international
              trade reliable and straightforward.
            </p>


            <div className="mt-9 grid gap-6 sm:grid-cols-2">

              <Feature
                icon={<Globe2 size={21} />}
                title="Global Reach"
                text="Connecting Indian products with international buyers."
              />

              <Feature
                icon={<Truck size={21} />}
                title="Reliable Logistics"
                text="Efficient coordination from source to destination."
              />

              <Feature
                icon={<Leaf size={21} />}
                title="Natural Products"
                text="Carefully sourced agricultural products."
              />

              <Feature
                icon={<ShieldCheck size={21} />}
                title="Quality Focus"
                text="Consistency and quality throughout the process."
              />

            </div>

          </div>

        </div>

      </section>


      {/* ================= WHY CHOOSE US ================= */}
      <section className="bg-[#f7f7f7] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-[1360px]">

          {/* HEADER */}
          <div className="mb-14 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F97316]">
                Why Choose Arvanta
              </p>

              <h2 className="mt-4 font-serif text-[43px] leading-[1.03] text-[#171717] sm:text-[58px]">

                More than
                <br />

                <span className="italic text-[#E85D00]">
                  just exports.
                </span>

              </h2>

            </div>

            <div>

              <p className="max-w-[680px] text-[15px] leading-8 text-[#555] sm:text-[17px]">
                At Arvanta Exim, our focus goes beyond moving products
                from one country to another. We combine quality,
                responsible sourcing and dependable export support
                to build long-term global partnerships.
              </p>

            </div>

          </div>


          {/* SIX CARDS */}
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {/* CARD 1 */}
            <div className="group relative overflow-hidden rounded-[24px] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <span className="absolute right-7 top-6 font-serif text-[45px] text-black/[0.04]">
                01
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] transition duration-500 group-hover:bg-[#F97316] group-hover:text-black">
                <Leaf size={23} />
              </div>

              <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                Premium Indian Produce
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#666]">
                Carefully selected agricultural products sourced from
                trusted Indian origins.
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#F97316] transition-all duration-500 group-hover:w-20" />

            </div>


            {/* CARD 2 */}
            <div className="group relative overflow-hidden rounded-[24px] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <span className="absolute right-7 top-6 font-serif text-[45px] text-black/[0.04]">
                02
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E85D00]/10 text-[#E85D00] transition duration-500 group-hover:bg-[#E85D00] group-hover:text-black">
                <ShieldCheck size={23} />
              </div>

              <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                Quality Focused
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#666]">
                Every product is handled with attention to quality,
                consistency and export requirements.
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#E85D00] transition-all duration-500 group-hover:w-20" />

            </div>


            {/* CARD 3 */}
            <div className="group relative overflow-hidden rounded-[24px] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <span className="absolute right-7 top-6 font-serif text-[45px] text-black/[0.04]">
                03
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E85D00]/10 text-[#E85D00] transition duration-500 group-hover:bg-[#E85D00] group-hover:text-black">
                <BadgeCheck size={23} />
              </div>

              <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                Reliable Standards
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#666]">
                Our approach is built around dependable processes and
                consistent product standards.
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#E85D00] transition-all duration-500 group-hover:w-20" />

            </div>


            {/* CARD 4 */}
            <div className="group relative overflow-hidden rounded-[24px] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <span className="absolute right-7 top-6 font-serif text-[45px] text-black/[0.04]">
                04
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F97316]/10 text-[#F97316] transition duration-500 group-hover:bg-[#E85D00] group-hover:text-black">
                <Globe2 size={23} />
              </div>

              <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                Global Reach
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#666]">
                Connecting Indian agricultural products with buyers
                and markets across the world.
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#E85D00] transition-all duration-500 group-hover:w-20" />

            </div>


            {/* CARD 5 */}
            <div className="group relative overflow-hidden rounded-[24px] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <span className="absolute right-7 top-6 font-serif text-[45px] text-black/[0.04]">
                05
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E85D00]/10 text-[#E85D00] transition duration-500 group-hover:bg-[#E85D00] group-hover:text-black">
                <Truck size={23} />
              </div>

              <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                Export Support
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#666]">
                From sourcing to shipment coordination, we work to make
                international trade smoother.
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#E85D00] transition-all duration-500 group-hover:w-20" />

            </div>


            {/* CARD 6 */}
            <div className="group relative overflow-hidden rounded-[24px] bg-white p-8 transition duration-500 hover:-translate-y-2 hover:shadow-xl">

              <span className="absolute right-7 top-6 font-serif text-[45px] text-black/[0.04]">
                06
              </span>

              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#E85D00]/10 text-[#E85D00] transition duration-500 group-hover:bg-[#E85D00] group-hover:text-black">
                <Handshake size={23} />
              </div>

              <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                Trusted Partnership
              </h3>

              <p className="mt-4 text-[13px] leading-7 text-[#666]">
                Long-term business relationships built through
                transparency and reliability.
              </p>

              <div className="mt-7 h-[2px] w-10 bg-[#E85D00] transition-all duration-500 group-hover:w-20" />

            </div>

          </div>


          {/* BOTTOM STATS */}
          <div className="mt-16 border-t border-black/10 pt-10">

            <div className="grid gap-8 md:grid-cols-3">

              <div>
                <p className="font-serif text-[36px] text-[#171717]">
                  Quality
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#C94A00]">
                  At Every Step
                </p>
              </div>


              <div>
                <p className="font-serif text-[36px] text-[#171717]">
                  Global
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#C94A00]">
                  Export Vision
                </p>
              </div>


              <div>
                <p className="font-serif text-[36px] text-[#171717]">
                  Trusted
                </p>

                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-[#C94A00]">
                  Business Partnerships
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CERTIFICATIONS ================= */}

      <section className="bg-[#f7f7f7] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-[1360px]">

          <div className="mx-auto mb-14 max-w-[780px] text-center">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#C94A00]">
              Certifications & Registrations
            </p>

            <h2 className="mt-4 font-serif text-[43px] leading-[1.05] text-[#171717] sm:text-[55px]">

              Built on trust.
              <br />

              <span className="italic text-[#E85D00]">
                Backed by standards.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-[650px] text-[15px] leading-7 text-[#666]">
              Our commitment to quality, food safety and responsible
              international trade is reflected through industry
              registrations and standards.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {certifications.map((certificate) => (

              <div
                key={certificate.name}
                className="group relative overflow-hidden rounded-[24px] border border-[#e4e4e4] bg-white p-7 transition duration-500 hover:-translate-y-2 hover:border-[#E85D00] hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >

                <div className="flex h-[150px] items-center justify-center rounded-[18px] bg-[#fafafa]">

                  <div className="flex h-[105px] w-[105px] items-center justify-center rounded-full border border-[#E85D00]/30 bg-white p-5 shadow-sm transition duration-500 group-hover:scale-105">

                    <img
                      src={certificate.logo}
                      alt={`${certificate.name} logo`}
                      className="max-h-[70px] max-w-[75px] object-contain"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";

                        e.currentTarget.parentElement.innerHTML = `
                          <span style="
                            font-family: serif;
                            font-size: 16px;
                            font-weight: 700;
                            color: #E85D00;
                            text-align: center;
                          ">
                            ${certificate.name}
                          </span>
                        `;
                      }}
                    />

                  </div>

                </div>


                <div className="pt-6 text-center">

                  <h3 className="font-serif text-[25px] text-[#171717]">
                    {certificate.name}
                  </h3>

                  <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#E85D00]">
                    {certificate.title}
                  </p>

                  <p className="mx-auto mt-4 max-w-[300px] text-[12px] leading-6 text-[#666]">
                    {certificate.description}
                  </p>

                </div>


                <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-[#E85D00] transition-all duration-500 group-hover:w-full" />

              </div>

            ))}

          </div>


          <div className="mt-14 flex flex-col items-center justify-center gap-4 text-center sm:flex-row">

            <div className="h-px w-12 bg-[#d8d8d8]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#888]">
              Quality • Safety • Compliance • Global Trade
            </p>

            <div className="h-px w-12 bg-[#d8d8d8]" />

          </div>

        </div>

      </section>
{/* ================= CTA ================= */}

<section className="bg-[#171717] px-6 py-20 sm:px-10 lg:px-14 lg:py-24">

  <div className="mx-auto max-w-[1360px]">

    <div className="relative overflow-hidden rounded-[30px] bg-black">

      {/* ================= BACKGROUND IMAGE ================= */}

      <img
        src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=90"
        alt="Indian agricultural fields"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* ================= IMAGE OVERLAY ================= */}

      <div className="absolute inset-0 bg-black/45" />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/10" />


      {/* ================= CTA CONTENT ================= */}

      <div className="relative z-10 grid min-h-[470px] items-center gap-12 px-7 py-14 sm:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-16 lg:py-16">

        {/* ================= LEFT CONTENT ================= */}

        <div>

          {/* SMALL LABEL */}

          <div className="mb-6 flex items-center gap-3">

            <span className="h-px w-10 bg-[#F26A00]" />

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#F26A00]">
              Start a Partnership
            </p>

          </div>


          {/* HEADING */}

          <h2 className="max-w-[720px] font-serif text-[42px] leading-[1.04] text-white sm:text-[55px] lg:text-[64px]">

            Looking for a reliable
            <br />

            <span className="italic text-[#F26A00]">
              Indian export partner?
            </span>

          </h2>


          {/* DESCRIPTION */}

          <p className="mt-6 max-w-[600px] text-[14px] leading-7 text-white/75 sm:text-[15px]">
            Let's build a reliable global supply partnership with
            quality Indian agricultural products, dependable
            coordination and export-focused solutions.
          </p>


          {/* BUTTONS */}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            {/* GET A QUOTE */}

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#E85D00] px-7 py-4 text-[13px] font-semibold text-black transition duration-300 hover:bg-[#F26A00] hover:shadow-[0_10px_35px_rgba(242,106,0,0.25)]"
            >
              Get a Quote

              <ArrowUpRight size={16} />

            </Link>


            {/* EXPLORE PRODUCTS */}

            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-3 rounded-full border border-white/30 bg-white/10 px-7 py-4 text-[13px] font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white hover:bg-white hover:text-black"
            >
              Explore Products

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>


        {/* ================= RIGHT IMAGE CARD ================= */}

        <div className="relative hidden lg:block">

          <div className="relative ml-auto h-[320px] w-full max-w-[430px] overflow-hidden rounded-[26px] border border-white/20 shadow-2xl">

            <img
              src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=1200&q=90"
              alt="Agricultural farm produce"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />


            {/* IMAGE GRADIENT */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />


            {/* IMAGE CONTENT */}

            <div className="absolute bottom-6 left-6 right-6">

              <p className="text-[9px] font-semibold uppercase tracking-[0.25em] text-[#F26A00]">
                Indian Origin
              </p>

              <p className="mt-1 font-serif text-[27px] text-white">
                From Farm to World
              </p>

            </div>

          </div>


          {/* ================= FLOATING BADGE ================= */}

          <div className="absolute -bottom-5 -left-5 rounded-2xl border border-black/10 bg-white px-6 py-4 shadow-2xl">

            <p className="font-serif text-[25px] text-[#171717]">
              Global
            </p>

            <p className="mt-1 text-[8px] font-semibold uppercase tracking-[0.2em] text-[#C94A00]">
              Export Vision
            </p>

          </div>


          {/* ================= SMALL ORANGE ACCENT ================= */}

          <div className="absolute -right-3 -top-3 h-16 w-16 rounded-full bg-[#F26A00]/90 blur-[1px]" />

        </div>

      </div>

    </div>

  </div>

</section>

    </main>
  );
}

      
/* ================= STAT ================= */

function Stat({ number, label }) {
  return (
    <div className="border-r border-white/15 py-5 last:border-r-0 sm:py-6">

      <p className="font-serif text-[25px] text-white sm:text-[30px]">
        {number}
      </p>

      <p className="mt-1 text-[8px] uppercase tracking-[0.2em] text-white/50 sm:text-[9px]">
        {label}
      </p>

    </div>
  );
}


/* ================= FEATURE ================= */

function Feature({ icon, title, text }) {
  return (
    <div className="flex gap-4">

      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#E85D00]/10 text-[#E85D00]">
        {icon}
      </div>

      <div>

        <h3 className="text-[14px] font-semibold text-[#171717]">
          {title}
        </h3>

        <p className="mt-2 text-[12px] leading-6 text-[#666]">
          {text}
        </p>

      </div>

    </div>
  );
}

