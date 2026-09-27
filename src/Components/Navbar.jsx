// import { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import { Menu, X, ArrowUpRight } from "lucide-react";

// export default function Navbar() {
//   const [mobileOpen, setMobileOpen] = useState(false);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//     { name: " Products", path: "/products" },
//     { name: "Gallery", path: "/gallery" },
//     { name: "Why Choose Us", path: "/why-choose-us" },
//     { name: "Certifications", path: "/certifications" },
//     { name: "Contact", path: "/contact" },
//   ];

//   return (
//     <header className="fixed left-0 top-0 z-50 w-full border-b border-black/10 bg-white">
//       <div className="mx-auto flex h-[105px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">

//         {/* LOGO */}
//         <Link
//           to="/"
//           onClick={() => setMobileOpen(false)}
//           className="flex items-center"
//         >
//           <img
//             src="/images/logo.jpeg"
//             alt="ARVANTA EXIM"
//             className="h-24 w-auto object-contain"
//           />
//         </Link>

//         {/* DESKTOP NAV */}
//         <nav className="hidden items-center gap-7 lg:flex">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.path}
//               to={item.path}
//               className={({ isActive }) =>
//                 `text-[12px] font-medium transition duration-300 ${
//                   isActive
//                     ? "text-orange-600"
//                     : "text-black hover:text-orange-600"
//                 }`
//               }
//             >
//               {item.name}
//             </NavLink>
//           ))}
//         </nav>

//         {/* GET A QUOTE */}
//         <Link
//           to="/quote"
//           className="hidden items-center gap-2 rounded-full bg-[#f97316] px-6 py-3 text-[11px] font-semibold text-black transition duration-300 hover:bg-orange-600 lg:inline-flex"
//         >
//           Get a Quote
//           <ArrowUpRight size={15} />
//         </Link>

//         {/* MOBILE BUTTON */}
//         <button
//           type="button"
//           onClick={() => setMobileOpen(!mobileOpen)}
//           className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition duration-300 hover:border-orange-600 hover:text-orange-600 lg:hidden"
//           aria-label="Toggle navigation"
//         >
//           {mobileOpen ? <X size={21} /> : <Menu size={21} />}
//         </button>
//       </div>

//       {/* MOBILE MENU */}
//       {mobileOpen && (
//         <div className="border-t border-black/10 bg-white lg:hidden">
//           <nav className="mx-auto max-w-[1440px] px-6 py-5 sm:px-10">

//             {navItems.map((item) => (
//               <NavLink
//                 key={item.path}
//                 to={item.path}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) =>
//                   `block border-b border-black/10 py-4 text-[13px] font-medium transition duration-300 ${
//                     isActive
//                       ? "text-orange-600"
//                       : "text-black hover:text-orange-600"
//                   }`
//                 }
//               >
//                 {item.name}
//               </NavLink>
//             ))}

//             {/* MOBILE GET A QUOTE */}
//             <Link
//               to="/quote"
//               onClick={() => setMobileOpen(false)}
//               className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-6 py-3.5 text-[12px] font-semibold text-black transition duration-300 hover:bg-orange-600"
//             >
//               Get a Quote
//               <ArrowUpRight size={16} />
//             </Link>

//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }


import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Gallery", path: "/gallery" },
    { name: "Why Choose Us", path: "/why-choose-us" },
    { name: "Certifications", path: "/certifications" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-black/10 bg-white">
      <div className="mx-auto flex h-[105px] max-w-[1440px] items-center justify-between px-6 sm:px-10 lg:px-14">
        {/* LOGO */}
        <Link
          to="/"
          onClick={() => setMobileOpen(false)}
          className="flex items-center"
        >
          <img
            src="/images/logo.jpeg"
            alt="ARVANTA EXIM"
            className="h-24 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `text-[12px] font-medium transition duration-300 ${
                  isActive
                    ? "text-orange-600"
                    : "text-black hover:text-orange-600"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* GET A QUOTE */}
        <Link
          to="/quote"
          className="hidden items-center gap-2 rounded-full bg-[#f97316] px-6 py-3 text-[11px] font-semibold text-black transition duration-300 hover:bg-orange-600 lg:inline-flex"
        >
          Get a Quote
          <ArrowUpRight size={15} />
        </Link>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black transition duration-300 hover:border-orange-600 hover:text-orange-600 lg:hidden"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="border-t border-black/10 bg-white lg:hidden">
          <nav className="mx-auto max-w-[1440px] px-6 py-5 sm:px-10">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `block border-b border-black/10 py-4 text-[13px] font-medium transition duration-300 ${
                    isActive
                      ? "text-orange-600"
                      : "text-black hover:text-orange-600"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}

            {/* MOBILE GET A QUOTE */}
            <Link
              to="/quote"
              onClick={() => setMobileOpen(false)}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#f97316] px-6 py-3.5 text-[12px] font-semibold text-black transition duration-300 hover:bg-orange-600"
            >
              Get a Quote
              <ArrowUpRight size={16} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
