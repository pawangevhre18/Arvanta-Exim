
// import {
//   ArrowUpRight,
//   Mail,
//   Phone,
//   MapPin,
//   Clock3,
// } from "lucide-react";

// const contactImage =
//   "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000";

// export default function Contact() {
//   return (
//     <main className="bg-white">

//       {/* ================= HERO ================= */}
//       <section className="relative overflow-hidden bg-[#171717] pt-36 pb-24">

//         <div className="absolute inset-0">
//           <img
//             src={contactImage}
//             alt="International business meeting"
//             className="h-full w-full object-cover"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/35" />

//         <div className="relative mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

//           <div className="max-w-3xl">

//             <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
//               Contact ARVANTA EXIM
//             </p>

//             <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
//               Let's Build a
//               <br />
//               <span className="text-[#f97316]">
//                 Global Connection.
//               </span>
//             </h1>

//             <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
//               Whether you are looking for Indian agricultural products,
//               dehydrated ingredients or reliable export solutions,
//               our team is ready to discuss your requirements.
//             </p>

//           </div>

//         </div>
//       </section>


//       {/* ================= CONTACT INTRO ================= */}
//       <section className="bg-white py-20 sm:py-24 lg:py-28">

//         <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

//           <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

//             {/* ================= LEFT ================= */}
//             <div>

//               <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
//                 Get In Touch
//               </p>

//               <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
//                 Let's talk about
//                 <br />
//                 your <span className="text-[#f97316]">next shipment.</span>
//               </h2>

//               <p className="mt-6 max-w-lg text-sm leading-7 text-black/50">
//                 Tell us what you need and where you need it. We work
//                 with buyers, importers and businesses looking for
//                 dependable Indian products and export solutions.
//               </p>


//               {/* CONTACT DETAILS */}
//               <div className="mt-10 space-y-5">

//                 {/* EMAIL */}
//                 <div className="flex items-start gap-4">

//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
//                     <Mail size={18} />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
//                       Email
//                     </p>

//                     <a
//                       href="arvantaexim@Gmail.com"
//                       className="mt-1 block text-sm font-medium text-[#171717] transition hover:text-[#f97316]"
//                     >
//                       arvantaexim@Gmail.com
//                     </a>
//                   </div>

//                 </div>


//                 {/* PHONE */}
//                 <div className="flex items-start gap-4">

//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
//                     <Phone size={18} />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
//                       Phone
//                     </p>

//                     <p className="mt-1 text-sm font-medium text-[#171717]">
//                       +91 7828265329
//                     </p>
//                   </div>

//                 </div>


//                 {/* LOCATION */}
//                 <div className="flex items-start gap-4">

//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
//                     <MapPin size={18} />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
//                       Location
//                     </p>

//                     <p className="mt-1 text-sm font-medium text-[#171717]">
//                       India
//                     </p>
//                   </div>

//                 </div>


//                 {/* BUSINESS HOURS */}
//                 <div className="flex items-start gap-4">

//                   <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
//                     <Clock3 size={18} />
//                   </div>

//                   <div>
//                     <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
//                       Business Hours
//                     </p>

//                     <p className="mt-1 text-sm font-medium text-[#171717]">
//                       Monday – Saturday
//                     </p>

//                     <p className="text-xs text-black/45">
//                       9:00 AM – 6:00 PM IST
//                     </p>
//                   </div>

//                 </div>

//               </div>

//             </div>


//             {/* ================= FORM ================= */}
//             <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-8 lg:p-10">

//               <div className="mb-8">

//                 <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f97316]">
//                   Send An Enquiry
//                 </p>

//                 <h3 className="mt-3 font-serif text-2xl text-[#171717] sm:text-3xl">
//                   Tell us what you need.
//                 </h3>

//               </div>


//               <form className="space-y-5">

//                 {/* NAME + COMPANY */}
//                 <div className="grid gap-5 sm:grid-cols-2">

//                   <div>
//                     <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
//                       Full Name
//                     </label>

//                     <input
//                       type="text"
//                       placeholder="Your name"
//                       className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
//                       Company
//                     </label>

//                     <input
//                       type="text"
//                       placeholder="Company name"
//                       className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
//                     />
//                   </div>

//                 </div>


//                 {/* EMAIL + PHONE */}
//                 <div className="grid gap-5 sm:grid-cols-2">

//                   <div>
//                     <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
//                       Email Address
//                     </label>

//                     <input
//                       type="email"
//                       placeholder="you@company.com"
//                       className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
//                     />
//                   </div>

//                   <div>
//                     <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
//                       Phone
//                     </label>

//                     <input
//                       type="tel"
//                       placeholder="+91"
//                       className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
//                     />
//                   </div>

//                 </div>


//                 {/* PRODUCT */}
//                 <div>

//                   <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
//                     Product Interested In
//                   </label>

//                   <select
//                     defaultValue=""
//                     className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition focus:border-[#f97316]"
//                   >
//                     <option value="" disabled>
//                       Select a product
//                     </option>

//                     <option>Coir Pith / Coco Peat</option>
//                     <option>Chilli Flakes</option>
//                     <option>Dry Potato</option>
//                     <option>Dry Tomato</option>
//                     <option>Dry Banana</option>
//                     <option>Chickpea</option>
//                     <option>Dry Ginger</option>
//                     <option>Dry Garlic</option>
//                     <option>Dehydrated Vegetables</option>
//                     <option>Other</option>
//                   </select>

//                 </div>


//                 {/* MESSAGE */}
//                 <div>

//                   <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
//                     Message
//                   </label>

//                   <textarea
//                     rows="4"
//                     placeholder="Tell us about your quantity, destination and requirements..."
//                     className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
//                   />

//                 </div>


//                 {/* SUBMIT */}
//                 <button
//                   type="submit"
//                   className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-7 py-4 text-[12px] font-semibold text-black transition duration-300 hover:bg-[#fb923c]"
//                 >
//                   Send Enquiry
//                   <ArrowUpRight size={16} />
//                 </button>

//               </form>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* ================= MAP ================= */}
//       <section className="bg-white pb-20 sm:pb-24 lg:pb-28">

//         <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

//           <div className="mb-8">

//             <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
//               Find Us
//             </p>

//             <h2 className="mt-3 font-serif text-3xl text-[#171717] sm:text-4xl">
//               Our Location
//             </h2>

//           </div>


//           <div className="overflow-hidden rounded-[24px] border border-black/10">

//             <iframe
//               src="https://www.google.com/maps?q=India&output=embed"
//               width="100%"
//               height="450"
//               style={{ border: 0 }}
//               allowFullScreen=""
//               loading="lazy"
//               referrerPolicy="no-referrer-when-downgrade"
//               title="ARVANTA EXIM Location"
//             />

//           </div>

//         </div>

//       </section>


//       {/* ================= FINAL CTA ================= */}
//       <section className="bg-[#171717] py-20 sm:py-24">

//         <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">

//           <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
//             ARVANTA EXIM
//           </p>

//           <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
//             Indian products.
//             <br />
//             <span className="text-[#f97316]">
//               Global possibilities.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/55">
//             Connect with us for product enquiries, sourcing
//             requirements and international business opportunities.
//           </p>

//         </div>

//       </section>

//     </main>
//   );
// }


import {
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  Clock3,
} from "lucide-react";

const contactImage =
  "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=2000";

export default function Contact() {
  return (
    <main className="bg-white">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-[#171717] pt-36 pb-24">

        <div className="absolute inset-0">
          <img
            src={contactImage}
            alt="International business meeting"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/35" />

        <div className="relative mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="max-w-3xl">

            <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
              Contact ARVANTA EXIM
            </p>

            <h1 className="font-serif text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              Let's Build a
              <br />
              <span className="text-[#f97316]">
                Global Connection.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              Whether you are looking for Indian agricultural products,
              dehydrated ingredients or reliable export solutions,
              our team is ready to discuss your requirements.
            </p>

          </div>

        </div>
      </section>


      {/* ================= CONTACT INTRO ================= */}
      <section className="bg-white py-20 sm:py-24 lg:py-28">

        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">

            {/* ================= LEFT ================= */}
            <div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
                Get In Touch
              </p>

              <h2 className="mt-4 max-w-xl font-serif text-3xl leading-tight text-[#171717] sm:text-4xl lg:text-5xl">
                Let's talk about
                <br />
                your <span className="text-[#f97316]">next shipment.</span>
              </h2>

              <p className="mt-6 max-w-lg text-sm leading-7 text-black/50">
                Tell us what you need and where you need it. We work
                with buyers, importers and businesses looking for
                dependable Indian products and export solutions.
              </p>


              {/* CONTACT DETAILS */}
              <div className="mt-10 space-y-5">

                {/* EMAIL */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                    <Mail size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Email
                    </p>

                    <a
                      href="mailto:arvantaexim@gmail.com"
                      className="mt-1 block text-sm font-medium text-[#171717] transition hover:text-[#f97316]"
                    >
                      arvantaexim@gmail.com
                    </a>
                  </div>

                </div>


                {/* PHONE */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                    <Phone size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Phone
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#171717]">
                      +91 7828265329
                    </p>
                  </div>

                </div>


                {/* LOCATION */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Location
                    </p>

                    <a
                      href="https://maps.app.goo.gl/UBa72ihUZby4NLNi7?g_st=awb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-sm font-medium leading-6 text-[#171717] transition hover:text-[#f97316]"
                    >
                      Shiva Mobile's, Morttak Chouraha,
                      <br />
                      Khargone Rd, Sanawad,
                      <br />
                      Madhya Pradesh 451111
                    </a>
                  </div>

                </div>


                {/* BUSINESS HOURS */}
                <div className="flex items-start gap-4">

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f97316]/10 text-[#f97316]">
                    <Clock3 size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      Business Hours
                    </p>

                    <p className="mt-1 text-sm font-medium text-[#171717]">
                      Monday – Saturday
                    </p>

                    <p className="text-xs text-black/45">
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>

                </div>

              </div>

            </div>


            {/* ================= FORM ================= */}
            <div className="rounded-[24px] border border-black/10 bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.07)] sm:p-8 lg:p-10">

              <div className="mb-8">

                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#f97316]">
                  Send An Enquiry
                </p>

                <h3 className="mt-3 font-serif text-2xl text-[#171717] sm:text-3xl">
                  Tell us what you need.
                </h3>

              </div>


              <form className="space-y-5">

                {/* NAME + COMPANY */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                </div>


                {/* EMAIL + PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                      Phone
                    </label>

                    <input
                      type="tel"
                      placeholder="+91"
                      className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                </div>


                {/* PRODUCT */}
                <div>

                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                    Product Interested In
                  </label>

                  <select
                    defaultValue=""
                    className="w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition focus:border-[#f97316]"
                  >
                    <option value="" disabled>
                      Select a product
                    </option>

                    <option>Coir Pith / Coco Peat</option>
                    <option>Chilli Flakes</option>
                    <option>Dry Potato</option>
                    <option>Dry Tomato</option>
                    <option>Dry Banana</option>
                    <option>Chickpea</option>
                    <option>Dry Ginger</option>
                    <option>Dry Garlic</option>
                    <option>Dehydrated Vegetables</option>
                    <option>Other</option>
                  </select>

                </div>


                {/* MESSAGE */}
                <div>

                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/45">
                    Message
                  </label>

                  <textarea
                    rows="4"
                    placeholder="Tell us about your quantity, destination and requirements..."
                    className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none transition placeholder:text-black/30 focus:border-[#f97316]"
                  />

                </div>


                {/* SUBMIT */}
                <button
                  type="submit"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-7 py-4 text-[12px] font-semibold text-black transition duration-300 hover:bg-[#fb923c]"
                >
                  Send Enquiry
                  <ArrowUpRight size={16} />
                </button>

              </form>

            </div>

          </div>

        </div>

      </section>


      {/* ================= MAP ================= */}
      <section className="bg-white pb-20 sm:pb-24 lg:pb-28">

        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="mb-8">

            <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
              Find Us
            </p>

            <h2 className="mt-3 font-serif text-3xl text-[#171717] sm:text-4xl">
              Our Location
            </h2>

          </div>


          <div className="overflow-hidden rounded-[24px] border border-black/10">

            <iframe
              src="https://www.google.com/maps?q=Shiva%20Mobile's,%20Morttak%20Chouraha,%20Khargone%20Rd,%20Sanawad,%20Madhya%20Pradesh%20451111&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ARVANTA EXIM Location"
            />

          </div>

        </div>

      </section>


      {/* ================= FINAL CTA ================= */}
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
            Connect with us for product enquiries, sourcing
            requirements and international business opportunities.
          </p>

        </div>

      </section>

    </main>
  );
}