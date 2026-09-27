// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   ArrowUpRight,
//   BadgeCheck,
//   Globe2,
//   Handshake,
//   Leaf,
//   ShieldCheck,
//   Sprout,
//   Truck,
// } from "lucide-react";

// const ORANGE = "#f97316";

// // High-resolution direct image URLs
// const CHICKPEA_IMAGE =
//   "https://images.pexels.com/photos/34945158/pexels-photo-34945158.jpeg?auto=compress&cs=tinysrgb&w=2400";

// const DRY_ONION_IMAGE =
//   "https://images.pexels.com/photos/37238882/pexels-photo-37238882.jpeg?auto=compress&cs=tinysrgb&w=2400";

// const AGRICULTURE_IMAGE =
//   "https://media.assettype.com/outlookmoney/2025-05-29/lag3msro/agriculture-75007551920.jpg?w=2200";

// const reasons = [
//   {
//     icon: <Leaf size={24} />,
//     title: "Premium Indian Produce",
//     text: "We focus on carefully selected agricultural products sourced from trusted Indian origins.",
//   },
//   {
//     icon: <ShieldCheck size={24} />,
//     title: "Quality Focused",
//     text: "Every product is handled with attention to quality, consistency and export requirements.",
//   },
//   {
//     icon: <BadgeCheck size={24} />,
//     title: "Reliable Standards",
//     text: "Our approach is built around dependable processes and consistent product standards.",
//   },
//   {
//     icon: <Globe2 size={24} />,
//     title: "Global Reach",
//     text: "We connect Indian agricultural products with buyers and markets across the world.",
//   },
//   {
//     icon: <Truck size={24} />,
//     title: "Export Support",
//     text: "From sourcing to shipment coordination, we work to make international trade smoother.",
//   },
//   {
//     icon: <Handshake size={24} />,
//     title: "Trusted Partnership",
//     text: "We believe long-term business relationships are built through transparency and reliability.",
//   },
// ];

// export default function WhyChooseUs() {
//   return (
//     <main className="bg-white">

//       {/* ================= PAGE HERO ================= */}
//       <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-black">

//         <img
//           src={CHICKPEA_IMAGE}
//           alt="Premium Indian chickpeas"
//           className="absolute inset-0 h-full w-full object-cover"
//         />

//         <div className="absolute inset-0 bg-black/35" />

//         <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

//         <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-20 pt-40 sm:px-10 lg:px-14 lg:pb-24">

//           <div className="max-w-[800px]">

//             <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">

//               <span
//                 className="h-1.5 w-1.5 rounded-full"
//                 style={{ backgroundColor: ORANGE }}
//               />

//               <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/90">
//                 Why Choose Arvanta
//               </span>

//             </div>

//             <h1 className="font-serif text-[50px] leading-[0.98] text-white sm:text-[70px] lg:text-[84px]">
//               Built on Quality.
//               <br />

//               <span
//                 className="italic"
//                 style={{ color: ORANGE }}
//               >
//                 Driven by Trust.
//               </span>
//             </h1>

//             <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-white/75 sm:text-[17px]">
//               We bring together quality Indian agricultural products,
//               dependable export processes and long-term business
//               relationships to create a trusted global supply network.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* ================= INTRO ================= */}
//       <section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

//         <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

//           <div>

//             <p
//               className="text-[10px] font-semibold uppercase tracking-[0.3em]"
//               style={{ color: ORANGE }}
//             >
//               Why Choose Us
//             </p>

//             <h2 className="mt-4 font-serif text-[43px] leading-[1.05] text-[#171717] sm:text-[58px]">
//               More than
//               <br />

//               <span
//                 className="italic"
//                 style={{ color: ORANGE }}
//               >
//                 just exports.
//               </span>
//             </h2>

//           </div>

//           <div>

//             <p className="max-w-[700px] text-[17px] leading-8 text-[#555]">
//               At Arvanta Exim, our focus goes beyond moving products
//               from one country to another. We aim to build reliable
//               partnerships by combining product quality, responsible
//               sourcing and dependable export support.
//             </p>

//           </div>

//         </div>

//       </section>


//       {/* ================= SIX CARDS ================= */}
//       <section className="bg-[#f7f7f7] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

//         <div className="mx-auto max-w-[1360px]">

//           <div className="mb-14 max-w-[700px]">

//             <p
//               className="text-[10px] font-semibold uppercase tracking-[0.3em]"
//               style={{ color: ORANGE }}
//             >
//               Our Difference
//             </p>

//             <h2 className="mt-4 font-serif text-[42px] leading-[1.05] text-[#171717] sm:text-[55px]">
//               Why businesses
//               <br />

//               <span
//                 className="italic"
//                 style={{ color: ORANGE }}
//               >
//                 choose Arvanta.
//               </span>
//             </h2>

//           </div>

//           <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

//             {reasons.map((reason) => (
//               <div
//                 key={reason.title}
//                 className="group rounded-[24px] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
//               >

//                 <div
//                   className="flex h-14 w-14 items-center justify-center rounded-full transition duration-300"
//                   style={{
//                     backgroundColor: "rgba(249,115,22,0.10)",
//                     color: ORANGE,
//                   }}
//                 >
//                   {reason.icon}
//                 </div>

//                 <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
//                   {reason.title}
//                 </h3>

//                 <p className="mt-4 text-[13px] leading-7 text-[#666]">
//                   {reason.text}
//                 </p>

//                 <div
//                   className="mt-7 h-[2px] w-10 transition-all duration-300 group-hover:w-16"
//                   style={{ backgroundColor: ORANGE }}
//                 />

//               </div>
//             ))}

//           </div>

//         </div>

//       </section>


//       {/* ================= CHICKPEA + DRY ONION BANNER ================= */}
//       <section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

//         <div className="mx-auto max-w-[1360px]">

//           <div className="relative overflow-hidden rounded-[30px] bg-black">

//             <div className="grid min-h-[460px] md:grid-cols-2">

//               {/* CHICKPEA */}
//               <div className="relative overflow-hidden">

//                 <img
//                   src={CHICKPEA_IMAGE}
//                   alt="Dried chickpeas"
//                   className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-black/25" />

//               </div>


//               {/* DRY ONION */}
//               <div className="relative overflow-hidden">

//                 <img
//                   src={DRY_ONION_IMAGE}
//                   alt="Dry brown onions"
//                   className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
//                 />

//                 <div className="absolute inset-0 bg-black/25" />

//               </div>

//             </div>


//             {/* CENTER CONTENT */}
//             <div className="absolute inset-0 flex items-center px-7 sm:px-12 lg:px-16">

//               <div className="max-w-[620px]">

//                 <p
//                   className="text-[10px] font-semibold uppercase tracking-[0.3em]"
//                   style={{ color: ORANGE }}
//                 >
//                   Fresh • Natural • Export Ready
//                 </p>

//                 <h2 className="mt-5 font-serif text-[42px] leading-[1.05] text-white sm:text-[58px]">
//                   From the farm
//                   <br />

//                   <span
//                     className="italic"
//                     style={{ color: ORANGE }}
//                   >
//                     to the world.
//                   </span>
//                 </h2>

//                 <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/75">
//                   From premium chickpeas to carefully selected dry
//                   onions, we bring Indian agricultural produce to
//                   international markets with care and consistency.
//                 </p>

//                 <Link
//                   to="/products"
//                   className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[13px] font-semibold text-black transition hover:opacity-90"
//                   style={{ backgroundColor: ORANGE }}
//                 >
//                   Explore Our Products
//                   <ArrowRight size={16} />
//                 </Link>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ================= AGRICULTURE FIELD IMAGE ================= */}
//       <section className="bg-white px-6 pb-24 sm:px-10 lg:px-14 lg:pb-32">

//         <div className="mx-auto max-w-[1360px]">

//           <div className="relative overflow-hidden rounded-[30px] bg-black">

//             <img
//               src={AGRICULTURE_IMAGE}
//               alt="Indian agricultural field"
//               className="h-[500px] w-full object-cover sm:h-[600px]"
//             />

//             <div className="absolute inset-0 bg-black/30" />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

//             <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

//               <div>

//                 <div
//                   className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-black shadow-xl"
//                   style={{ backgroundColor: ORANGE }}
//                 >
//                   <Sprout size={29} />
//                 </div>

//                 <p
//                   className="mt-7 text-[10px] font-semibold uppercase tracking-[0.35em]"
//                   style={{ color: ORANGE }}
//                 >
//                   From Indian Farms
//                 </p>

//                 <h2 className="mt-4 font-serif text-[43px] leading-[1.05] text-white sm:text-[65px]">
//                   Rooted in
//                   <br />

//                   <span
//                     className="italic"
//                     style={{ color: ORANGE }}
//                   >
//                     Indian Agriculture.
//                   </span>
//                 </h2>

//                 <p className="mx-auto mt-5 max-w-[550px] text-[14px] leading-7 text-white/75">
//                   Strong agricultural roots, carefully sourced produce
//                   and a commitment to delivering India's finest to
//                   markets around the world.
//                 </p>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ================= CTA ================= */}
//       <section className="bg-black px-6 py-24 sm:px-10 lg:px-14 lg:py-28">

//         <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-9 md:flex-row md:items-center">

//           <div>

//             <p
//               className="text-[10px] uppercase tracking-[0.3em]"
//               style={{ color: ORANGE }}
//             >
//               Partner With Us
//             </p>

//             <h2 className="mt-4 max-w-[700px] font-serif text-[40px] leading-[1.08] text-white sm:text-[55px]">
//               Ready to build a
//               <br />

//               <span
//                 className="italic"
//                 style={{ color: ORANGE }}
//               >
//                 trusted partnership?
//               </span>
//             </h2>

//           </div>

//           <Link
//             to="/contact"
//             className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full px-8 py-4 text-[13px] font-semibold text-black transition hover:opacity-90"
//             style={{ backgroundColor: ORANGE }}
//           >
//             Get a Quote
//             <ArrowUpRight size={16} />
//           </Link>

//         </div>

//       </section>

//     </main>
//   );
// }



import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Globe2,
  Handshake,
  Leaf,
  ShieldCheck,
  Sprout,
  Truck,
} from "lucide-react";

const ORANGE = "#f97316";

// High-resolution direct image URL
const CHICKPEA_IMAGE =
  "https://images.pexels.com/photos/34945158/pexels-photo-34945158.jpeg?auto=compress&cs=tinysrgb&w=2400";

const AGRICULTURE_IMAGE =
  "https://media.assettype.com/outlookmoney/2025-05-29/lag3msro/agriculture-75007551920.jpg?w=2200";

const reasons = [
  {
    icon: <Leaf size={24} />,
    title: "Premium Indian Produce",
    text: "We focus on carefully selected agricultural products sourced from trusted Indian origins.",
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Quality Focused",
    text: "Every product is handled with attention to quality, consistency and export requirements.",
  },
  {
    icon: <BadgeCheck size={24} />,
    title: "Reliable Standards",
    text: "Our approach is built around dependable processes and consistent product standards.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Global Reach",
    text: "We connect Indian agricultural products with buyers and markets across the world.",
  },
  {
    icon: <Truck size={24} />,
    title: "Export Support",
    text: "From sourcing to shipment coordination, we work to make international trade smoother.",
  },
  {
    icon: <Handshake size={24} />,
    title: "Trusted Partnership",
    text: "We believe long-term business relationships are built through transparency and reliability.",
  },
];

export default function WhyChooseUs() {
  return (
    <main className="bg-white">

      {/* ================= PAGE HERO ================= */}
      <section className="relative flex min-h-[72vh] items-end overflow-hidden bg-black">

        <img
          src={CHICKPEA_IMAGE}
          alt="Premium Indian chickpeas"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />

        <div className="relative z-10 mx-auto w-full max-w-[1360px] px-6 pb-20 pt-40 sm:px-10 lg:px-14 lg:pb-24">

          <div className="max-w-[800px]">

            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-md">

              <span
                className="h-1.5 w-1.5 rounded-full"
                style={{ backgroundColor: ORANGE }}
              />

              <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/90">
                Why Choose Arvanta
              </span>

            </div>

            <h1 className="font-serif text-[50px] leading-[0.98] text-white sm:text-[70px] lg:text-[84px]">
              Built on Quality.
              <br />

              <span
                className="italic"
                style={{ color: ORANGE }}
              >
                Driven by Trust.
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-[15px] leading-7 text-white/75 sm:text-[17px]">
              We bring together quality Indian agricultural products,
              dependable export processes and long-term business
              relationships to create a trusted global supply network.
            </p>

          </div>

        </div>

      </section>


      {/* ================= INTRO ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto grid max-w-[1360px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">

          <div>

            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: ORANGE }}
            >
              Why Choose Us
            </p>

            <h2 className="mt-4 font-serif text-[43px] leading-[1.05] text-[#171717] sm:text-[58px]">
              More than
              <br />

              <span
                className="italic"
                style={{ color: ORANGE }}
              >
                just exports.
              </span>
            </h2>

          </div>

          <div>

            <p className="max-w-[700px] text-[17px] leading-8 text-[#555]">
              At Arvanta Exim, our focus goes beyond moving products
              from one country to another. We aim to build reliable
              partnerships by combining product quality, responsible
              sourcing and dependable export support.
            </p>

          </div>

        </div>

      </section>


      {/* ================= SIX CARDS ================= */}
      <section className="bg-[#f7f7f7] px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-[1360px]">

          <div className="mb-14 max-w-[700px]">

            <p
              className="text-[10px] font-semibold uppercase tracking-[0.3em]"
              style={{ color: ORANGE }}
            >
              Our Difference
            </p>

            <h2 className="mt-4 font-serif text-[42px] leading-[1.05] text-[#171717] sm:text-[55px]">
              Why businesses
              <br />

              <span
                className="italic"
                style={{ color: ORANGE }}
              >
                choose Arvanta.
              </span>
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="group rounded-[24px] bg-white p-8 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >

                <div
                  className="flex h-14 w-14 items-center justify-center rounded-full transition duration-300"
                  style={{
                    backgroundColor: "rgba(249,115,22,0.10)",
                    color: ORANGE,
                  }}
                >
                  {reason.icon}
                </div>

                <h3 className="mt-7 font-serif text-[27px] leading-tight text-[#171717]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-[13px] leading-7 text-[#666]">
                  {reason.text}
                </p>

                <div
                  className="mt-7 h-[2px] w-10 transition-all duration-300 group-hover:w-16"
                  style={{ backgroundColor: ORANGE }}
                />

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* ================= CHICKPEA BANNER ================= */}
      <section className="bg-white px-6 py-24 sm:px-10 lg:px-14 lg:py-32">

        <div className="mx-auto max-w-[1360px]">

          <div className="relative min-h-[520px] overflow-hidden rounded-[30px] bg-black">

            {/* SINGLE CHICKPEA IMAGE */}
            <img
              src={CHICKPEA_IMAGE}
              alt="Premium dried chickpeas"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-105"
            />

            {/* DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/45" />

            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-transparent" />

            {/* CENTER CONTENT */}
            <div className="relative z-10 flex min-h-[520px] items-center px-7 py-16 sm:px-12 lg:px-16">

              <div className="max-w-[620px]">

                <p
                  className="text-[10px] font-semibold uppercase tracking-[0.3em]"
                  style={{ color: ORANGE }}
                >
                  Fresh • Natural • Export Ready
                </p>

                <h2 className="mt-5 font-serif text-[42px] leading-[1.05] text-white sm:text-[58px]">
                  From the farm
                  <br />

                  <span
                    className="italic"
                    style={{ color: ORANGE }}
                  >
                    to the world.
                  </span>
                </h2>

                <p className="mt-6 max-w-[520px] text-[14px] leading-7 text-white/75">
                  From premium Indian chickpeas to carefully selected
                  agricultural produce, we bring quality products to
                  international markets with care and consistency.
                </p>

                <Link
                  to="/products"
                  className="mt-8 inline-flex items-center gap-3 rounded-full px-7 py-4 text-[13px] font-semibold text-black transition hover:opacity-90"
                  style={{ backgroundColor: ORANGE }}
                >
                  Explore Our Products
                  <ArrowRight size={16} />
                </Link>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= AGRICULTURE FIELD IMAGE ================= */}
      <section className="bg-white px-6 pb-24 sm:px-10 lg:px-14 lg:pb-32">

        <div className="mx-auto max-w-[1360px]">

          <div className="relative overflow-hidden rounded-[30px] bg-black">

            <img
              src={AGRICULTURE_IMAGE}
              alt="Indian agricultural field"
              className="h-[500px] w-full object-cover sm:h-[600px]"
            />

            <div className="absolute inset-0 bg-black/30" />

            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            <div className="absolute inset-0 flex items-center justify-center px-6 text-center">

              <div>

                <div
                  className="mx-auto flex h-16 w-16 items-center justify-center rounded-full text-black shadow-xl"
                  style={{ backgroundColor: ORANGE }}
                >
                  <Sprout size={29} />
                </div>

                <p
                  className="mt-7 text-[10px] font-semibold uppercase tracking-[0.35em]"
                  style={{ color: ORANGE }}
                >
                  From Indian Farms
                </p>

                <h2 className="mt-4 font-serif text-[43px] leading-[1.05] text-white sm:text-[65px]">
                  Rooted in
                  <br />

                  <span
                    className="italic"
                    style={{ color: ORANGE }}
                  >
                    Indian Agriculture.
                  </span>
                </h2>

                <p className="mx-auto mt-5 max-w-[550px] text-[14px] leading-7 text-white/75">
                  Strong agricultural roots, carefully sourced produce
                  and a commitment to delivering India's finest to
                  markets around the world.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}
      <section className="bg-black px-6 py-24 sm:px-10 lg:px-14 lg:py-28">

        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-9 md:flex-row md:items-center">

          <div>

            <p
              className="text-[10px] uppercase tracking-[0.3em]"
              style={{ color: ORANGE }}
            >
              Partner With Us
            </p>

            <h2 className="mt-4 max-w-[700px] font-serif text-[40px] leading-[1.08] text-white sm:text-[55px]">
              Ready to build a
              <br />

              <span
                className="italic"
                style={{ color: ORANGE }}
              >
                trusted partnership?
              </span>
            </h2>

          </div>

          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full px-8 py-4 text-[13px] font-semibold text-black transition hover:opacity-90"
            style={{ backgroundColor: ORANGE }}
          >
            Get a Quote
            <ArrowUpRight size={16} />
          </Link>

        </div>

      </section>

    </main>
  );
}
