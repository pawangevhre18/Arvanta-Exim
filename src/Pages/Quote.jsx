
import {
  ArrowUpRight,
  Check,
  Globe2,
  Package,
  Send,
  ShieldCheck,
} from "lucide-react";
import { useState } from "react";

const products = [
  "Dry Red Chilli",
  "Chilli Flakes",
  "Dry Garlic",
  "Dry Ginger",
  "Dry Potato",
  "Dry Tomato",
  "Dry Banana",
  "Chickpea",
  "Coir Pith / Coco Peat",
  "Dehydrated Vegetables",
];

export default function Quote() {
  const [selectedProduct, setSelectedProduct] = useState("Dry Red Chilli");

  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="bg-[#171717] pt-36 pb-20 sm:pb-24">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">
          <div className="max-w-4xl">

            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
              Request For Quotation
            </p>

            <h1 className="mt-5 font-serif text-4xl leading-[1.05] text-white sm:text-5xl lg:text-7xl">
              Tell us what you
              <br />
              <span className="text-[#f97316]">
                want to source.
              </span>
            </h1>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/60 sm:text-base">
              Share your product, quantity and destination requirements.
              We'll help you explore suitable sourcing options from India.
            </p>

          </div>
        </div>
      </section>

      {/* MAIN AREA */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-[1360px] px-6 sm:px-10 lg:px-14">

          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">

            {/* LEFT */}
            <div>

              <div className="mb-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
                  01 — Select Product
                </p>

                <h2 className="mt-3 font-serif text-3xl text-[#171717] sm:text-4xl">
                  What are you
                  <br />
                  <span className="text-[#f97316]">
                    looking for?
                  </span>
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {products.map((product) => {
                  const active = selectedProduct === product;

                  return (
                    <button
                      key={product}
                      type="button"
                      onClick={() => setSelectedProduct(product)}
                      className={`group flex items-center justify-between rounded-[16px] border px-5 py-4 text-left transition duration-300 ${
                        active
                          ? "border-[#f97316] bg-[#fff7ed]"
                          : "border-black/10 bg-white hover:border-[#f97316]/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-full ${
                            active
                              ? "bg-[#f97316] text-black"
                              : "bg-black/[0.04] text-black/40"
                          }`}
                        >
                          <Package size={16} />
                        </div>

                        <span
                          className={`text-[13px] font-medium ${
                            active
                              ? "text-[#171717]"
                              : "text-black/60"
                          }`}
                        >
                          {product}
                        </span>
                      </div>

                      {active && (
                        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f97316]">
                          <Check size={14} />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* TRUST INFO */}
              <div className="mt-8 grid gap-3 sm:grid-cols-3 lg:grid-cols-1">

                <div className="flex items-center gap-3 rounded-[16px] bg-[#f8f8f8] p-4">
                  <Globe2 size={18} className="text-[#f97316]" />
                  <span className="text-[11px] font-medium text-black/55">
                    Global Buyer Enquiries
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-[16px] bg-[#f8f8f8] p-4">
                  <ShieldCheck size={18} className="text-[#f97316]" />
                  <span className="text-[11px] font-medium text-black/55">
                    Quality-Focused Sourcing
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-[16px] bg-[#f8f8f8] p-4">
                  <Package size={18} className="text-[#f97316]" />
                  <span className="text-[11px] font-medium text-black/55">
                    Export-Ready Products
                  </span>
                </div>

              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="rounded-[26px] bg-[#f8f8f8] p-6 sm:p-8 lg:p-10">

              <div className="mb-9 flex items-start justify-between gap-5">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#f97316]">
                    02 — Your Requirement
                  </p>

                  <h2 className="mt-3 font-serif text-2xl text-[#171717] sm:text-3xl">
                    Request a quotation
                  </h2>
                </div>

                <div className="hidden h-11 w-11 items-center justify-center rounded-full bg-[#f97316] text-black sm:flex">
                  <Send size={18} />
                </div>
              </div>

              <form className="space-y-6">

                {/* SELECTED PRODUCT */}
                <div className="rounded-[16px] border border-[#f97316]/30 bg-white p-4">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/35">
                    Selected Product
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#171717]">
                    {selectedProduct}
                  </p>
                </div>

                {/* NAME + COMPANY */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Company
                    </label>

                    <input
                      type="text"
                      placeholder="Company name"
                      className="w-full rounded-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                </div>

                {/* EMAIL + PHONE */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="you@company.com"
                      className="w-full rounded-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Phone / WhatsApp
                    </label>

                    <input
                      type="tel"
                      placeholder="+91"
                      className="w-full rounded-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                </div>

                {/* QUANTITY + DESTINATION */}
                <div className="grid gap-5 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Required Quantity
                    </label>

                    <input
                      type="text"
                      placeholder="e.g. 10 MT"
                      className="w-full rounded-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                      Destination
                    </label>

                    <input
                      type="text"
                      placeholder="Country / Port"
                      className="w-full rounded-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                    />
                  </div>

                </div>

                {/* REQUIREMENT */}
                <div>
                  <label className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.15em] text-black/40">
                    Your Requirement
                  </label>

                  <textarea
                    rows="5"
                    placeholder="Tell us about grade, packaging, delivery requirements or any other specifications..."
                    className="w-full resize-none border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm text-[#171717] outline-none placeholder:text-black/30 focus:border-[#f97316]"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-[#f97316] px-7 py-4 text-[12px] font-semibold text-black transition duration-300 hover:bg-orange-600"
                >
                  Request My Quote

                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/10 transition duration-300 group-hover:rotate-45">
                    <ArrowUpRight size={15} />
                  </span>
                </button>

                <p className="text-center text-[10px] leading-5 text-black/35">
                  By submitting this enquiry, you are requesting
                  information about product availability and pricing.
                </p>

              </form>
            </div>

          </div>
        </div>
      </section>

      {/* BOTTOM STATEMENT */}
      <section className="bg-[#171717] py-20 sm:py-24">
        <div className="mx-auto max-w-[1000px] px-6 text-center sm:px-10">

          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#f97316]">
            ARVANTA EXIM
          </p>

          <h2 className="mt-5 font-serif text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
            From your requirement
            <br />
            <span className="text-[#f97316]">
              to our global supply.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/50">
            Quality Indian products, dependable sourcing and
            export-focused solutions for international buyers.
          </p>

        </div>
      </section>

    </main>
  );
}

