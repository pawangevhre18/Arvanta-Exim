


import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f7f7f7] text-[#171717]">

      {/* ================= MAIN FOOTER ================= */}
      <div className="mx-auto max-w-[1360px] px-6 py-16 sm:px-10 lg:px-14 lg:py-20">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.7fr_1fr]">

          {/* ================= BRAND ================= */}
          <div>

            <Link
              to="/"
              className="inline-flex items-center gap-3"
            >

              {/* LOGO */}
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E85D00]">
                <span className="font-serif text-xl font-bold text-black">
                  A
                </span>
              </div>

              {/* BRAND NAME */}
              <div className="leading-none">

                <div className="font-serif text-[18px] tracking-[0.18em] text-[#171717]">
                  ARVANTA
                </div>

                <div className="mt-1 text-[8px] tracking-[0.45em] text-[#E85D00]">
                  EXIM
                </div>

              </div>

            </Link>


            {/* DESCRIPTION */}
            <p className="mt-6 max-w-[380px] text-[13px] leading-7 text-[#666]">
              Connecting the richness of Indian agriculture with
              international markets through quality, trust and
              dependable export solutions.
            </p>


            {/* ================= SOCIAL ICONS ================= */}
            <div className="mt-7 flex items-center gap-3">

              {/* INSTAGRAM */}
              <SocialIcon
                href="https://www.instagram.com/arvantaexim?stkn=N2Y3ZXJ3eDRjY2kx"
                label="Instagram"
                brandClass="hover:border-[#E1306C] hover:bg-[#DD2A7B] hover:text-white"
              >
                <span className="text-[12px] font-bold">
                  IG
                </span>
              </SocialIcon>


              {/* FACEBOOK */}
              <SocialIcon
                href="https://www.facebook.com/share/1C7xmcTqP7/"
                label="Facebook"
                brandClass="hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white"
              >
                <span className="text-[18px] font-bold">
                  f
                </span>
              </SocialIcon>


              {/* LINKEDIN */}
              <SocialIcon
                href="https://www.linkedin.com/in/krish-patel-5359773a5/"
                label="LinkedIn"
                brandClass="hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
              >
                <span className="text-[12px] font-bold">
                  in
                </span>
              </SocialIcon>


            </div>

          </div>


          {/* ================= COMPANY ================= */}
          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#EC5800]">
              Company
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <FooterLink to="/about">
                About Us
              </FooterLink>

              <FooterLink to="/why-choose-us">
                Why Choose Us
              </FooterLink>

              <FooterLink to="/certifications">
                Certifications
              </FooterLink>

              <FooterLink to="/contact">
                Contact
              </FooterLink>

            </div>

          </div>


          {/* ================= EXPLORE ================= */}
          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#EC5800]">
              Explore
            </h3>

            <div className="mt-6 flex flex-col gap-4">

              <FooterLink to="/products">
                Products
              </FooterLink>

              <FooterLink to="/gallery">
                Gallery
              </FooterLink>

              <FooterLink to="/contact">
                Get a Quote
              </FooterLink>

            </div>

          </div>


          {/* ================= CONTACT ================= */}
          <div>

            <h3 className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#EC5800]">
              Get In Touch
            </h3>

            <div className="mt-6 space-y-4 text-[13px] leading-6 text-[#666]">

              <p>
                India
              </p>

              <a
                href="mailto:arvantaexim@gmail.com"
                className="block transition hover:text-[#EC5800]"
              >
arvantaexim@Gmail.com
              </a>

              <p>
                Available for international
                <br />
                business enquiries.
              </p>

            </div>

          </div>

        </div>

      </div>


      {/* ================= BOTTOM BAR ================= */}
      <div className="border-t border-black/10 bg-[#3a3838]">

        <div className="mx-auto flex max-w-[1360px] flex-col justify-between gap-3 px-6 py-5 text-[10px] uppercase tracking-[0.15em] text-white/45 sm:flex-row sm:px-10 lg:px-14">

          <p>
            © {new Date().getFullYear()} Arvanta Exim. All rights reserved.
          </p>

          <p className="text-[rgb(241,240,245)]">
            Indian Origin • Global Reach
          </p>

        </div>

      </div>

    </footer>
  );
}


/* ================= FOOTER LINK ================= */

function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className="group flex items-center gap-1 text-[13px] text-[#555] transition duration-300 hover:text-[#EC5800]"
    >
      {children}

      <ArrowUpRight
        size={12}
        className="transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </Link>
  );
}


/* ================= SOCIAL ICON ================= */

function SocialIcon({
  href,
  children,
  label,
  brandClass,
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className={`flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-[#555] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${brandClass}`}
    >
      {children}
    </a>
  );
}