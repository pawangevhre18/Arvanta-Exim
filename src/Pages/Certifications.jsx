
const certificates = [
  {
    short: "APEDA",
    title: "APEDA",
    subtitle: "Agricultural & Processed Food Products Export Development Authority",
    type: "EXPORT",
    icon: "🌿",
  },
  {
    short: "FSSAI",
    title: "FSSAI",
    subtitle: "Food Safety & Standards Authority of India",
    type: "FOOD SAFETY",
    icon: "🛡️",
  },
  {
    short: "ISO",
    title: "ISO 22000",
    subtitle: "Food Safety Management System",
    type: "QUALITY",
    icon: "✓",
  },
  {
    short: "SPICES",
    title: "Spices Board",
    subtitle: "Ministry of Commerce & Industry, Government of India",
    type: "SPICES",
    icon: "🌶️",
  },
  {
    short: "FIEO",
    title: "FIEO",
    subtitle: "Federation of Indian Export Organisations",
    type: "EXPORT",
    icon: "🌐",
  },
  {
    short: "FDA",
    title: "FDA",
    subtitle: "U.S. Food & Drug Administration",
    type: "GLOBAL FOOD SAFETY",
    icon: "🇺🇸",
  },
];

function Certificates() {
  return (
    <section className="relative overflow-hidden bg-[#f8f7f2] py-20">
      
      {/* Background decoration */}
      <div className="absolute -left-20 top-20 h-60 w-60 rounded-full bg-[#d9a441]/10 blur-3xl" />
      <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-[#31572c]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.25em] text-[#b17c1b]">
            Certifications & Registrations
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-[#24351f] sm:text-4xl lg:text-5xl">
            Trusted Standards.
            <span className="block text-[#b17c1b]">
              Global Confidence.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600">
            Our commitment to quality, food safety and international export
            standards helps us deliver reliable agricultural products to
            customers across global markets.
          </p>
        </div>

        {/* Certificate Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {certificates.map((certificate) => (
            <div
              key={certificate.title}
              className="group relative overflow-hidden rounded-2xl border border-[#ddd8c9] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#b17c1b] hover:shadow-xl"
            >

              {/* Top badge */}
              <div className="absolute right-5 top-5 rounded-full bg-[#f5efe0] px-3 py-1 text-[10px] font-bold tracking-widest text-[#92701f]">
                {certificate.type}
              </div>

              {/* Logo Area */}
              <div className="flex h-32 items-center justify-center rounded-xl bg-[#faf9f5]">
                <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-[3px] border-[#b17c1b] bg-white shadow-md transition-transform duration-300 group-hover:scale-110">

                  {/* Inner ring */}
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#b17c1b]/60" />

                  <div className="relative text-center">
                    <div className="mb-1 text-2xl">
                      {certificate.icon}
                    </div>

                    <div className="text-sm font-black tracking-wide text-[#31572c]">
                      {certificate.short}
                    </div>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="mt-6 text-center">

                <h3 className="text-xl font-bold text-[#24351f]">
                  {certificate.title}
                </h3>

                <p className="mt-2 min-h-[48px] text-sm leading-6 text-gray-500">
                  {certificate.subtitle}
                </p>

                <div className="mx-auto mt-5 h-[2px] w-12 bg-[#b17c1b] transition-all duration-300 group-hover:w-20" />

              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-[#31572c] via-[#b17c1b] to-[#31572c] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}

        </div>

        {/* Bottom Trust Line */}
        <div className="mt-14 flex flex-col items-center justify-center gap-3 text-center sm:flex-row">
          <div className="h-px w-16 bg-[#d7cfbd]" />

          <p className="text-sm font-medium text-gray-500">
            Quality • Food Safety • Export Compliance • Global Standards
          </p>

          <div className="h-px w-16 bg-[#d7cfbd]" />
        </div>

      </div>
    </section>
  );
}

export default Certificates;

