

// import { useMemo, useRef, useState } from "react";

// const FALLBACK_IMAGE =
//   "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

// const WHATSAPP_NUMBER = "917828265329";

// const products = [
//   {
//     id: 1,
//     name: "Dry Ginger",
//     category: "Dehydrated",
//     featured: true,
//     description:
//       "Premium quality dehydrated ginger products processed for food and industrial applications.",
//     items: [
//       {
//         name: "Dry Ginger",
//         hs: "09101120",
//         image:
//           "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp",
//       },
//       {
//         name: "Ginger Powder",
//         hs: "09101210",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/image_7e0ef0a7-e256-45f1-847f-307d8107c67d.png?v=1773125334&width=1946",
//       },
//       {
//         name: "Ginger Flex",
//         hs: "09101120",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_shreds.jpg",
//       },
//     ],
//   },

//   {
//     id: 2,
//     name: "Dry Onion",
//     category: "Dehydrated",
//     description:
//       "Dehydrated onion products with consistent quality, flavor and texture.",
//     items: [
//       {
//         name: " Red Dry Onion Flakes",
//         hs: "07122000",
//         image:
//           "https://t3.ftcdn.net/jpg/05/76/93/26/240_F_576932666_T3RZiBJ02vikLcnfsMygCT4ySgNMe4k1.jpg",
//       },
//       {
//         name: " White Dry Onion Flakes",
//         hs: "07122000",
//         image:
//           "https://t3.ftcdn.net/jpg/21/93/98/94/240_F_2193989407_nE8F9VqomleDtWEUI1xkr28YX35oGfYT.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//     ],
//   },

//   {
//     id: 3,
//     name: "Dry Potato",
//     category: "Dehydrated",
//     description:
//       "Selected dehydrated potato products suitable for food processing and commercial use.",
//     items: [
//       {
//         name: "Dry Potato Powder",
//         hs: "07129060",
//         image:
//           // "https://t3.ftcdn.net/jpg/04/86/08/80/240_F_486088078_0nRGsQUt9GdzoI21ScRCxy8eXiJREjek.jpg",
//           "https://t4.ftcdn.net/jpg/21/78/54/27/240_F_2178542718_VbE8tRX60rdHdZwev02W2iN9RXj9cfrT.jpg",
//       },
//       {
//         name: "Potato Flakes",
//         hs: "07129060",
//         image:
//           //  "https://t3.ftcdn.net/jpg/21/96/16/48/240_F_2196164878_w3l1MHnHV9OPGBShIXXvWuYK6LzD2dNE.jpg",
//           "https://t4.ftcdn.net/jpg/09/60/12/51/240_F_960125196_cIxJD9waId8YfBU2nivW1Yv1ONa9F3Zm.jpg",
//       },
//       {
//         name: "Potato Starch",
//         hs: "11081300",
//         image:
//           "https://t4.ftcdn.net/jpg/16/46/72/87/240_F_1646728767_d0Im3ztEgAJZVv5jQfYJjUCMovM4Q5ut.jpg",
//       },
//     ],
//   },

//   {
//     id: 4,
//     name: "Dry Garlic",
//     category: "Dehydrated",
//     featured: true,
//     description:
//       "Premium dehydrated garlic processed to retain its natural aroma and flavor.",
//     items: [
//       {
//         name: "Dry Garlic",
//         hs: "07129030",
//         image:
//           "https://t3.ftcdn.net/jpg/12/70/85/04/240_F_1270850408_4PYSLLxQL5SmXxJem5Fw4ju8aQDx3U8J.jpg",
//       },
//       {
//         name: "Dry Garlic Powder",
//         hs: "07129030",
//         image:
//           "https://t4.ftcdn.net/jpg/09/27/48/71/240_F_927487170_NG7iS6V9RXZoFDNTXJL7RC8YdjgYhq9j.jpg",
//       },
//       {
//         name: "Dry Garlic Flakes",
//         hs: "07129030",
//         image:
//           "https://www.selbermacher24.at/app/uploads/2024/08/Knoblauchflocken.jpg",
//       },
//     ],
//   },

//   {
//     id: 5,
//     name: "Dry Tomato",
//     category: "Dehydrated",
//     description:
//       "Dehydrated tomato products offering rich color, flavor and convenient storage.",
//     items: [
//       {
//         name: "Dry Tomato Flakes",
//         hs: "07129090",
//         image:
//           "https://t3.ftcdn.net/jpg/00/67/08/56/240_F_67085638_s1HQ3RfBb8FhPF9GmHRYMnp8AWYaKcc2.jpg",
//       },
//       {
//         name: "Dry Tomato Powder",
//         hs: "07129090",
//         image:
//           "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
//       },
//     ],
//   },

//   {
//     id: 6,
//     name: "Dry Banana",
//     category: "Dehydrated",
//     description:
//       "Quality banana-based products prepared for food manufacturing and export applications.",
//     items: [
//       {
//         name: "Green Banana powder",
//         hs: "08039000",
//         image:
//           "https://t3.ftcdn.net/jpg/07/92/45/38/240_F_792453883_zYf6PNRz5SYbUhIykT9Jlp3LNyKIADm8.jpg",
//       },
//       {
//         name: "Dry Banana",
//         hs: "08039000",
//         image:
//           "https://t3.ftcdn.net/jpg/21/61/43/70/240_F_2161437009_0VrShaAwxHieis2JrpDIl7CiP1M2tNhn.jpg",
//       },
//       {
//         name: "Banana Flakes",
//         hs: "08039000",
//         image:
//           "https://t4.ftcdn.net/jpg/14/34/70/57/240_F_1434705707_vRoJFJirloi2q4yVAa4NRLjUSyS5jYiA.jpg",
//       },
//     ],
//   },

//   {
//     id: 7,
//     name: "Beetroot",
//     category: "Dehydrated",
//     description:
//       "Finely processed beetroot powder for food, beverage and ingredient applications.",
//     items: [
//       {
//         name: "Beetroot Powder",
//         hs: "07129090",
//         image:
//           "https://t3.ftcdn.net/jpg/20/97/16/06/240_F_2097160641_YSbOs2V7mQBBMRVcDGy73risDH0d48Gm.jpg",
//       },
//     ],
//   },

//   {
//     id: 8,
//     name: "Red Chilli",
//     category: "Spices",
//     featured: true,
//     description:
//       "Premium quality dried red chilli products with strong color, aroma and flavor.",
//     items: [
//       {
//         name: "Whole Dry Red Chilli",
//         hs: "09042110",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/arbol-chile-whole-stemless-featured-image.png?v=1774432921&width=1100",
//       },
//       {
//         name: "Red Chilli Flakes",
//         hs: "09042219",
//         image:
//           "https://t3.ftcdn.net/jpg/20/76/90/98/240_F_2076909828_PeKmkDRXzgxi5TOb1nu5XgWGA3l2Fd1p.jpg",
//       },
//       {
//         name: "Red Chilli Powder",
//         hs: "09042211",
//         image:
//           "https://t4.ftcdn.net/jpg/21/84/72/59/240_F_2184725959_lfSSkgCicoOJbheD882RBHuJk8aJG30R.jpg",
//       },
//     ],
//   },

//   {
//     id: 9,
//     name: "Chickpeas",
//     category: "Agricultural",
//     featured: true,

//     bannerImage:
//       "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpeas.jpg",

//     description:
//       "Carefully selected chickpea varieties processed and supplied for domestic and export markets.",

//     items: [
//       {
//         name: "Kabuli Chana",
//         hs: "07132010",
//         image:
//           "https://t3.ftcdn.net/jpg/07/14/27/38/240_F_714273861_uxH1oVRn8SoZtU4tABMuOejXI6LeDj9y.jpg",
//       },
//       {
//         name: "Desi Chana",
//         hs: "07132020",
//         image:
//           "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
//       },
//     ],
//   },

//   {
//     id: 10,
//     name: "Coir Pith",
//     category: "Natural",
//     description:
//       "Natural coconut-based growing media suitable for horticulture and agricultural applications.",
//     items: [
//       {
//         name: "Coir Pith",
//         hs: "53050040",
//         image:
//           "https://t3.ftcdn.net/jpg/16/04/48/00/240_F_1604480047_Zf7306LwxBzQq04Qt8hHfCxlLEuzpFJ7.jpg",
//       },
//       {
//         name: "Coco Peat",
//         hs: "53050040",
//         image:
//           "https://thumbnail.image.rakuten.co.jp/%400_mall/a-mederu/cabinet/imgrc0101955041.jpg",
//       },
//     ],
//   },
//   {
//     id: 11,
//     name: "A2 ghee",
//     category: "Dehydrated",
//     description:
//       "Finely processed beetroot powder for food, beverage and ingredient applications.",
//     items: [
//       {
//         name: "deshi ghee",
//         hs: "07129090",
//         image:
//           "https://t4.ftcdn.net/jpg/11/60/41/87/240_F_1160418796_QLW7swCLHsaGs0OhGlbdmSCrBYrL3AuC.jpg",
//       },
//     ],
//   },
// ];

// /* =========================================================
//    PRODUCT IMAGE
//    Existing image + drag/swipe 360-style interaction
//    ========================================================= */

// const ProductImage = ({ src, alt, className = "" }) => {
//   const [imageSrc, setImageSrc] = useState(src);
//   const [rotation, setRotation] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const dragging = useRef(false);
//   const lastX = useRef(0);

//   const handlePointerDown = (event) => {
//     dragging.current = true;
//     setIsDragging(true);
//     lastX.current = event.clientX;

//     event.currentTarget.setPointerCapture(event.pointerId);
//   };

//   const handlePointerMove = (event) => {
//     if (!dragging.current) return;

//     const movement = event.clientX - lastX.current;

//     lastX.current = event.clientX;

//     setRotation((previous) => previous + movement * 1.5);
//   };

//   const handlePointerUp = (event) => {
//     dragging.current = false;
//     setIsDragging(false);

//     try {
//       event.currentTarget.releasePointerCapture(event.pointerId);
//     } catch {
//       // Ignore pointer release errors
//     }
//   };

//   const handlePointerCancel = () => {
//     dragging.current = false;
//     setIsDragging(false);
//   };

//   return (
//     <div
//       className="h-full w-full select-none touch-pan-y"
//       onPointerDown={handlePointerDown}
//       onPointerMove={handlePointerMove}
//       onPointerUp={handlePointerUp}
//       onPointerCancel={handlePointerCancel}
//       style={{
//         perspective: "1000px",
//         cursor: isDragging ? "grabbing" : "grab",
//       }}
//     >
//       <div
//         className="h-full w-full"
//         style={{
//           transform: `rotateY(${rotation}deg)`,
//           transformStyle: "preserve-3d",
//           transition: isDragging ? "none" : "transform 0.15s ease-out",
//         }}
//       >
//         <img
//           src={imageSrc}
//           alt={alt}
//           loading="lazy"
//           draggable={false}
//           onError={() => {
//             if (imageSrc !== FALLBACK_IMAGE) {
//               setImageSrc(FALLBACK_IMAGE);
//             }
//           }}
//           className={`h-full w-full object-contain mix-blend-multiply ${className}`}
//         />
//       </div>
//     </div>
//   );
// };

// const Product = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = ["All", "Dehydrated", "Spices", "Agricultural", "Natural"];

//   const filteredProducts = useMemo(() => {
//     if (activeCategory === "All") return products;

//     return products.filter((product) => product.category === activeCategory);
//   }, [activeCategory]);

//   const totalVariants = products.reduce(
//     (total, product) => total + product.items.length,
//     0,
//   );

//   return (
//     <section
//       id="products"
//       className="relative scroll-mt-[90px] overflow-hidden bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8"
//     >
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600">
//             Our Products
//           </span>

//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Premium Products,
//             <span className="text-orange-500"> Global Standards</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
//             Explore our carefully processed range of dehydrated foods, spices,
//             agricultural products and natural products.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="mb-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/50 sm:grid-cols-4">
//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">
//               {products.length}+
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Product Categories
//             </p>
//           </div>

//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">
//               {totalVariants}+
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Product Variants
//             </p>
//           </div>

//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">100%</div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Quality Focused
//             </p>
//           </div>

//           <div className="p-5 text-center">
//             <div className="text-3xl font-extrabold text-orange-500">
//               Global
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Export Ready
//             </p>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="mb-10 flex flex-wrap justify-center gap-3">
//           {categories.map((category) => {
//             const active = activeCategory === category;

//             return (
//               <button
//                 key={category}
//                 type="button"
//                 onClick={() => setActiveCategory(category)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
//                   active
//                     ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
//                     : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
//                 }`}
//               >
//                 {category === "Dehydrated"
//                   ? "Dehydrated Foods"
//                   : category === "Agricultural"
//                     ? "Agricultural Products"
//                     : category === "Natural"
//                       ? "Natural Products"
//                       : category}
//               </button>
//             );
//           })}
//         </div>

//         {/* Product Grid */}
//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProducts.map((product) => {
//             const previewItem = product.items[0];

//             return (
//               <div
//                 key={product.id}
//                 className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100/70"
//               >
//                 {/* Featured */}
//                 {product.featured && (
//                   <div className="absolute left-4 top-4 z-10">
//                     <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
//                       Featured
//                     </span>
//                   </div>
//                 )}

//                 {/* Image */}
//                 <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-8">
//                   <ProductImage
//                     src={previewItem.image}
//                     alt={previewItem.name}
//                     className="transition-transform duration-700 group-hover:scale-110"
//                   />

//                   <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3 flex items-center justify-between gap-3">
//                     <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
//                       {product.category}
//                     </span>

//                     <span className="text-xs font-medium text-gray-400">
//                       {product.items.length} variants
//                     </span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {product.name}
//                   </h3>

//                   <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
//                     {product.description}
//                   </p>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedProduct(product)}
//                     className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500"
//                   >
//                     View All Products
//                     <span className="text-lg transition-transform group-hover:translate-x-1">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Quality Strip */}
//         <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
//           {[
//             "Natural Processing",
//             "Hygienically Packed",
//             "Quality Focused",
//             "Export Ready",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-gray-700"
//             >
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
//                 ✓
//               </span>
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="relative mt-16 overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 text-center sm:px-10">
//           <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
//           <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

//           <div className="relative">
//             <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
//               Need Something Specific?
//             </span>

//             <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
//               Looking for a specific product?
//             </h3>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
//               Tell us your product requirement, quantity and specifications. Our
//               team will help you with the right solution.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 const whatsappMessage = `Hello ARVANTA EXIM Team,

// I am interested in your products and would like to request a quote.

// Please share the available products, pricing, specifications, packaging details and export terms.

// Thank you.`;

//                 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   whatsappMessage,
//                 )}`;

//                 window.open(whatsappUrl, "_blank");
//               }}
//               className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
//             >
//               Request a Quote
//               <span className="text-lg">→</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           PRODUCT MODAL
//           ===================================================== */}

//       {selectedProduct && (
//         <div
//           className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedProduct(null)}
//         >
//           <div
//             className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
//               <div>
//                 <span className="text-sm font-semibold text-orange-500">
//                   {selectedProduct.category}
//                 </span>

//                 <h3 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
//                   {selectedProduct.name}
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Modal Content */}
//             <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-5 sm:p-7">
//               <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
//                 {selectedProduct.items.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50"
//                   >
//                     {/* Item Image */}
//                     <div className="flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-7">
//                       <ProductImage
//                         src={item.image}
//                         alt={item.name}
//                         className="transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>

//                     {/* Item Info */}
//                     <div className="p-5">
//                       <h4 className="text-lg font-bold text-gray-900">
//                         {item.name}
//                       </h4>

//                       <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
//                         <span className="text-xs font-medium text-gray-500">
//                           HS Code
//                         </span>

//                         <span className="text-sm font-bold text-gray-800">
//                           {item.hs}
//                         </span>
//                       </div>

//                       {/* Enquire Now */}
//                       <button
//                         type="button"
//                         onClick={() => setSelectedItem(item)}
//                         className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
//                       >
//                         Enquire Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           PREMIUM ENQUIRY MODAL
//           ===================================================== */}

//       {selectedItem && (
//         <div
//           className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedItem(null)}
//         >
//           <div
//             className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Enquiry Header */}
//             <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
//               <div>
//                 <span className="text-sm font-semibold text-orange-500">
//                   Product Enquiry
//                 </span>

//                 <h3 className="mt-1 text-2xl font-extrabold text-gray-900">
//                   Request a Quote
//                 </h3>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Tell us your requirement and our team will get back to you.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedItem(null)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Selected Product Preview */}
//             <div className="border-b border-gray-100 bg-orange-50/50 px-5 py-4 sm:px-7">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
//                   <img
//                     src={selectedItem.image}
//                     alt={selectedItem.name}
//                     className="h-full w-full object-contain mix-blend-multiply"
//                     onError={(event) => {
//                       event.currentTarget.src = FALLBACK_IMAGE;
//                     }}
//                   />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
//                     Selected Product
//                   </p>

//                   <h4 className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedItem.name}
//                   </h4>

//                   <p className="text-xs text-gray-500">
//                     HS Code: {selectedItem.hs}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Enquiry Form */}
//             <form
//               className="max-h-[calc(92vh-190px)] overflow-y-auto p-5 sm:p-7"
//               onSubmit={(event) => {
//                 event.preventDefault();

//                 const formData = new FormData(event.currentTarget);

//                 const name = formData.get("name");
//                 const company = formData.get("company");
//                 const email = formData.get("email");
//                 const phone = formData.get("phone");
//                 const country = formData.get("country");
//                 const quantity = formData.get("quantity");
//                 const unit = formData.get("unit");
//                 const message = formData.get("message");

//                 const whatsappMessage = `Hello ARVANTA EXIM Team,

// I would like to enquire about the following product:

// Product: ${selectedItem.name}
// HS Code: ${selectedItem.hs}

// Customer Details:
// Name: ${name}
// Company: ${company}
// Business Email: ${email}
// WhatsApp / Phone: ${phone}
// Country: ${country}

// Requirement:
// Quantity: ${quantity} ${unit}

// Additional Requirements:
// ${message || "No additional requirements provided."}

// Please share the price, availability, specifications, packaging details and export terms.

// Regards,
// ${name}`;

//                 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   whatsappMessage,
//                 )}`;

//                 window.open(whatsappUrl, "_blank");
//               }}
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 {/* Full Name */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Company */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Company Name
//                   </label>

//                   <input
//                     type="text"
//                     name="company"
//                     required
//                     placeholder="Enter company name"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Business Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="company@example.com"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     WhatsApp / Phone
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Country */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Country
//                   </label>

//                   <input
//                     type="text"
//                     name="country"
//                     required
//                     placeholder="Enter your country"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Quantity */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Required Quantity
//                   </label>

//                   <div className="flex gap-2">
//                     <input
//                       type="number"
//                       name="quantity"
//                       min="1"
//                       required
//                       placeholder="e.g. 500"
//                       className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     />

//                     <select
//                       name="unit"
//                       className="w-28 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     >
//                       <option value="KG">KG</option>
//                       <option value="MT">MT</option>
//                       <option value="Container">Container</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="mt-5">
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   Additional Requirements
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Tell us about packaging, specifications, destination port or any other requirement..."
//                   className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                 />
//               </div>

//               {/* Information */}
//               <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
//                 <p className="text-xs leading-5 text-gray-600">
//                   By submitting this enquiry, WhatsApp will open with your
//                   product and requirement details already prepared.
//                 </p>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-300"
//               >
//                 Send Enquiry
//                 <span className="text-lg">→</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Product;


// import { useMemo, useRef, useState } from "react";

// const FALLBACK_IMAGE =
//   "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

// const WHATSAPP_NUMBER = "917828265329";

// const products = [
//   {
//     id: 1,
//     name: "Dry Ginger",
//     category: "Dehydrated",
//     featured: true,
//     description:
//       "Premium quality dehydrated ginger products processed for food and industrial applications.",
//     items: [
//       {
//         name: "Dry Ginger",
//         hs: "09101120",
//         image:
//           "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp",
//       },
//       {
//         name: "Ginger Powder",
//         hs: "09101210",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/image_7e0ef0a7-e256-45f1-847f-307d8107c67d.png?v=1773125334&width=1946",
//       },
//       {
//         name: "Ginger Flex",
//         hs: "09101120",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_shreds.jpg",
//       },
//     ],
//   },

//   {
//     id: 2,
//     name: "Dry Onion",
//     category: "Dehydrated",
//     description:
//       "Dehydrated onion products with consistent quality, flavor and texture.",
//     items: [
//       {
//         name: " Red Dry Onion Flakes",
//         hs: "07122000",
//         image:
//           "https://t3.ftcdn.net/jpg/05/76/93/26/240_F_576932666_T3RZiBJ02vikLcnfsMygCT4ySgNMe4k1.jpg",
//       },
//       {
//         name: " White Dry Onion Flakes",
//         hs: "07122000",
//         image:
//           "https://t3.ftcdn.net/jpg/21/93/98/94/240_F_2193989407_nE8F9VqomleDtWEUI1xkr28YX35oGfYT.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//     ],
//   },

//   {
//     id: 3,
//     name: "Dry Potato",
//     category: "Dehydrated",
//     description:
//       "Selected dehydrated potato products suitable for food processing and commercial use.",
//     items: [
//       {
//         name: "Dry Potato Powder",
//         hs: "07129060",
//         image:
//           "https://t4.ftcdn.net/jpg/21/78/54/27/240_F_2178542718_VbE8tRX60rdHdZwev02W2iN9RXj9cfrT.jpg",
//       },
//       {
//         name: "Potato Flakes",
//         hs: "07129060",
//         image:
//           "https://t4.ftcdn.net/jpg/09/60/12/51/240_F_960125196_cIxJD9waId8YfBU2nivW1Yv1ONa9F3Zm.jpg",
//       },
//       {
//         name: "Potato Starch",
//         hs: "11081300",
//         image:
//           "https://t4.ftcdn.net/jpg/16/46/72/87/240_F_1646728767_d0Im3ztEgAJZVv5jQfYJjUCMovM4Q5ut.jpg",
//       },
//     ],
//   },

//   {
//     id: 4,
//     name: "Dry Garlic",
//     category: "Dehydrated",
//     featured: true,
//     description:
//       "Premium dehydrated garlic processed to retain its natural aroma and flavor.",
//     items: [
//       {
//         name: "Dry Garlic",
//         hs: "07129030",
//         image:
//           "https://t3.ftcdn.net/jpg/12/70/85/04/240_F_1270850408_4PYSLLxQL5SmXxJem5Fw4ju8aQDx3U8J.jpg",
//       },
//       {
//         name: "Dry Garlic Powder",
//         hs: "07129030",
//         image:
//           "https://t4.ftcdn.net/jpg/09/27/48/71/240_F_927487170_NG7iS6V9RXZoFDNTXJL7RC8YdjgYhq9j.jpg",
//       },
//       {
//         name: "Dry Garlic Flakes",
//         hs: "07129030",
//         image:
//           "https://www.selbermacher24.at/app/uploads/2024/08/Knoblauchflocken.jpg",
//       },
//     ],
//   },

//   {
//     id: 5,
//     name: "Dry Tomato",
//     category: "Dehydrated",
//     description:
//       "Dehydrated tomato products offering rich color, flavor and convenient storage.",
//     items: [
//       {
//         name: "Dry Tomato Flakes",
//         hs: "07129090",
//         image:
//           "https://t3.ftcdn.net/jpg/00/67/08/56/240_F_67085638_s1HQ3RfBb8FhPF9GmHRYMnp8AWYaKcc2.jpg",
//       },
//       {
//         name: "Dry Tomato Powder",
//         hs: "07129090",
//         image:
//           "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
//       },
//     ],
//   },

//   {
//     id: 6,
//     name: "Dry Banana",
//     category: "Dehydrated",
//     description:
//       "Quality banana-based products prepared for food manufacturing and export applications.",
//     items: [
//       {
//         name: "Green Banana powder",
//         hs: "08039000",
//         image:
//           "https://t3.ftcdn.net/jpg/07/92/45/38/240_F_792453883_zYf6PNRz5SYbUhIykT9Jlp3LNyKIADm8.jpg",
//       },
//       {
//         name: "Dry Banana",
//         hs: "08039000",
//         image:
//           "https://t3.ftcdn.net/jpg/21/61/43/70/240_F_2161437009_0VrShaAwxHieis2JrpDIl7CiP1M2tNhn.jpg",
//       },
//       {
//         name: "Banana Flakes",
//         hs: "08039000",
//         image:
//           "https://t4.ftcdn.net/jpg/14/34/70/57/240_F_1434705707_vRoJFJirloi2q4yVAa4NRLjUSyS5jYiA.jpg",
//       },
//     ],
//   },

//   {
//     id: 7,
//     name: "Beetroot",
//     category: "Dehydrated",
//     description:
//       "Finely processed beetroot powder for food, beverage and ingredient applications.",
//     items: [
//       {
//         name: "Beetroot Powder",
//         hs: "07129090",
//         image:
//           "https://t3.ftcdn.net/jpg/20/97/16/06/240_F_2097160641_YSbOs2V7mQBBMRVcDGy73risDH0d48Gm.jpg",
//       },
//     ],
//   },

//   {
//     id: 8,
//     name: "Red Chilli",
//     category: "Spices",
//     featured: true,
//     description:
//       "Premium quality dried red chilli products with strong color, aroma and flavor.",
//     items: [
//       {
//         name: "Whole Dry Red Chilli",
//         hs: "09042110",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/arbol-chile-whole-stemless-featured-image.png?v=1774432921&width=1100",
//       },
//       {
//         name: "Red Chilli Flakes",
//         hs: "09042219",
//         image:
//           "https://t3.ftcdn.net/jpg/20/76/90/98/240_F_2076909828_PeKmkDRXzgxi5TOb1nu5XgWGA3l2Fd1p.jpg",
//       },
//       {
//         name: "Red Chilli Powder",
//         hs: "09042211",
//         image:
//           "https://t4.ftcdn.net/jpg/21/84/72/59/240_F_2184725959_lfSSkgCicoOJbheD882RBHuJk8aJG30R.jpg",
//       },
//     ],
//   },

//   {
//     id: 9,
//     name: "Chickpeas",
//     category: "Agricultural",
//     featured: true,

//     bannerImage:
//       "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpeas.jpg",

//     description:
//       "Carefully selected chickpea varieties processed and supplied for domestic and export markets.",

//     items: [
//       {
//         name: "Kabuli Chana",
//         hs: "07132010",
//         image:
//           "https://t3.ftcdn.net/jpg/07/14/27/38/240_F_714273861_uxH1oVRn8SoZtU4tABMuOejXI6LeDj9y.jpg",
//       },
//       {
//         name: "Desi Chana",
//         hs: "07132020",
//         image:
//           "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
//       },
//     ],
//   },

//   {
//     id: 10,
//     name: "Coir Pith",
//     category: "Natural",
//     description:
//       "Natural coconut-based growing media suitable for horticulture and agricultural applications.",
//     items: [
//       {
//         name: "Coir Pith",
//         hs: "53050040",
//         image:
//           "https://t3.ftcdn.net/jpg/16/04/48/00/240_F_1604480047_Zf7306LwxBzQq04Qt8hHfCxlLEuzpFJ7.jpg",
//       },
//       {
//         name: "Coco Peat",
//         hs: "53050040",
//         image:
//           "https://thumbnail.image.rakuten.co.jp/%400_mall/a-mederu/cabinet/imgrc0101955041.jpg",
//       },
//     ],
//   },

//   {
//     id: 11,
//     name: "A2 ghee",
//     category: "Dehydrated",
//     description:
//       "Finely processed beetroot powder for food, beverage and ingredient applications.",
//     items: [
//       {
//         name: "deshi ghee",
//         hs: "07129090",
//         image:
//           "https://t4.ftcdn.net/jpg/11/60/41/87/240_F_1160418796_QLW7swCLHsaGs0OhGlbdmSCrBYrL3AuC.jpg",
//       },
//     ],
//   },
// ];

// /* =========================================================
//    PRODUCT IMAGE
//    Existing image + drag/swipe 360-style interaction
//    ========================================================= */

// const ProductImage = ({ src, alt, className = "" }) => {
//   const [imageSrc, setImageSrc] = useState(src);
//   const [rotation, setRotation] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const dragging = useRef(false);
//   const lastX = useRef(0);

//   const handlePointerDown = (event) => {
//     dragging.current = true;
//     setIsDragging(true);
//     lastX.current = event.clientX;

//     event.currentTarget.setPointerCapture(event.pointerId);
//   };

//   const handlePointerMove = (event) => {
//     if (!dragging.current) return;

//     const movement = event.clientX - lastX.current;

//     lastX.current = event.clientX;

//     setRotation((previous) => previous + movement * 1.5);
//   };

//   const handlePointerUp = (event) => {
//     dragging.current = false;
//     setIsDragging(false);

//     try {
//       event.currentTarget.releasePointerCapture(event.pointerId);
//     } catch {
//       // Ignore pointer release errors
//     }
//   };

//   const handlePointerCancel = () => {
//     dragging.current = false;
//     setIsDragging(false);
//   };

//   return (
//     <div
//       className="h-full w-full select-none touch-pan-y"
//       onPointerDown={handlePointerDown}
//       onPointerMove={handlePointerMove}
//       onPointerUp={handlePointerUp}
//       onPointerCancel={handlePointerCancel}
//       style={{
//         perspective: "1000px",
//         cursor: isDragging ? "grabbing" : "grab",
//       }}
//     >
//       <div
//         className="h-full w-full"
//         style={{
//           transform: `rotateY(${rotation}deg)`,
//           transformStyle: "preserve-3d",
//           transition: isDragging ? "none" : "transform 0.15s ease-out",
//         }}
//       >
//         <img
//           src={imageSrc}
//           alt={alt}
//           loading="lazy"
//           draggable={false}
//           onError={() => {
//             if (imageSrc !== FALLBACK_IMAGE) {
//               setImageSrc(FALLBACK_IMAGE);
//             }
//           }}
//           className={`h-full w-full object-contain mix-blend-multiply ${className}`}
//         />
//       </div>
//     </div>
//   );
// };

// const Product = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("All");

//   const categories = ["All", "Dehydrated", "Spices", "Agricultural", "Natural"];

//   const filteredProducts = useMemo(() => {
//     if (activeCategory === "All") return products;

//     return products.filter((product) => product.category === activeCategory);
//   }, [activeCategory]);

//   const totalVariants = products.reduce(
//     (total, product) => total + product.items.length,
//     0,
//   );

//   return (
//     <section
//       id="products"
//       className="relative scroll-mt-[90px] overflow-hidden bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8"
//     >
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600">
//             Our Products
//           </span>

//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Premium Products,
//             <span className="text-orange-500"> Global Standards</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
//             Explore our carefully processed range of dehydrated foods, spices,
//             agricultural products and natural products.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="mb-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/50 sm:grid-cols-4">
//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">
//               {products.length}+
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Product Categories
//             </p>
//           </div>

//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">
//               {totalVariants}+
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Product Variants
//             </p>
//           </div>

//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">100%</div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Quality Focused
//             </p>
//           </div>

//           <div className="p-5 text-center">
//             <div className="text-3xl font-extrabold text-orange-500">
//               Global
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Export Ready
//             </p>
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="mb-10 flex flex-wrap justify-center gap-3">
//           {categories.map((category) => {
//             const active = activeCategory === category;

//             return (
//               <button
//                 key={category}
//                 type="button"
//                 onClick={() => setActiveCategory(category)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
//                   active
//                     ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
//                     : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
//                 }`}
//               >
//                 {category === "Dehydrated"
//                   ? "Dehydrated Foods"
//                   : category === "Agricultural"
//                     ? "Agricultural Products"
//                     : category === "Natural"
//                       ? "Natural Products"
//                       : category}
//               </button>
//             );
//           })}
//         </div>

//         {/* Product Grid */}
//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProducts.map((product) => {
//             const previewItem = product.items[0];

//             return (
//               <div
//                 key={product.id}
//                 className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100/70"
//               >
//                 {/* Featured */}
//                 {product.featured && (
//                   <div className="absolute left-4 top-4 z-10">
//                     <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
//                       Featured
//                     </span>
//                   </div>
//                 )}

//                 {/* Image */}
//                 <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-8">
//                   <ProductImage
//                     src={previewItem.image}
//                     alt={previewItem.name}
//                     className="transition-transform duration-700 group-hover:scale-110"
//                   />

//                   <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3 flex items-center justify-between gap-3">
//                     <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
//                       {product.category}
//                     </span>

//                     <span className="text-xs font-medium text-gray-400">
//                       {product.items.length} variants
//                     </span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {product.name}
//                   </h3>

//                   <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
//                     {product.description}
//                   </p>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedProduct(product)}
//                     className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500"
//                   >
//                     View All Products
//                     <span className="text-lg transition-transform group-hover:translate-x-1">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* Quality Strip */}
//         <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
//           {[
//             "Natural Processing",
//             "Hygienically Packed",
//             "Quality Focused",
//             "Export Ready",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-gray-700"
//             >
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
//                 ✓
//               </span>
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="relative mt-16 overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 text-center sm:px-10">
//           <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
//           <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

//           <div className="relative">
//             <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
//               Need Something Specific?
//             </span>

//             <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
//               Looking for a specific product?
//             </h3>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
//               Tell us your product requirement, quantity and specifications. Our
//               team will help you with the right solution.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 const whatsappMessage = `Hello ARVANTA EXIM Team,

// I am interested in your products and would like to request a quote.

// Please share the available products, pricing, specifications, packaging details and export terms.

// Thank you.`;

//                 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   whatsappMessage,
//                 )}`;

//                 window.open(whatsappUrl, "_blank");
//               }}
//               className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
//             >
//               Request a Quote
//               <span className="text-lg">→</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           PRODUCT MODAL
//           ===================================================== */}

//       {selectedProduct && (
//         <div
//           className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedProduct(null)}
//         >
//           <div
//             className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
//               <div>
//                 <span className="text-sm font-semibold text-orange-500">
//                   {selectedProduct.category}
//                 </span>

//                 <h3 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
//                   {selectedProduct.name}
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Modal Content - Horizontal Slider */}
//             <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-5 sm:p-7">
//               <div
//                 className="flex gap-5 overflow-x-auto pb-5"
//                 style={{
//                   scrollbarWidth: "auto",
//                   WebkitOverflowScrolling: "touch",
//                 }}
//               >
//                 {selectedProduct.items.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group w-[85%] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 sm:w-[48%] lg:w-[31.8%]"
//                   >
//                     {/* Item Image */}
//                     <div className="flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-7">
//                       <ProductImage
//                         src={item.image}
//                         alt={item.name}
//                         className="transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>

//                     {/* Item Info */}
//                     <div className="p-5">
//                       <h4 className="text-lg font-bold text-gray-900">
//                         {item.name}
//                       </h4>

//                       <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
//                         <span className="text-xs font-medium text-gray-500">
//                           HS Code
//                         </span>

//                         <span className="text-sm font-bold text-gray-800">
//                           {item.hs}
//                         </span>
//                       </div>

//                       {/* Enquire Now */}
//                       <button
//                         type="button"
//                         onClick={() => setSelectedItem(item)}
//                         className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
//                       >
//                         Enquire Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           PREMIUM ENQUIRY MODAL
//           ===================================================== */}

//       {selectedItem && (
//         <div
//           className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedItem(null)}
//         >
//           <div
//             className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Enquiry Header */}
//             <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
//               <div>
//                 <span className="text-sm font-semibold text-orange-500">
//                   Product Enquiry
//                 </span>

//                 <h3 className="mt-1 text-2xl font-extrabold text-gray-900">
//                   Request a Quote
//                 </h3>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Tell us your requirement and our team will get back to you.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedItem(null)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Selected Product Preview */}
//             <div className="border-b border-gray-100 bg-orange-50/50 px-5 py-4 sm:px-7">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
//                   <img
//                     src={selectedItem.image}
//                     alt={selectedItem.name}
//                     className="h-full w-full object-contain mix-blend-multiply"
//                     onError={(event) => {
//                       event.currentTarget.src = FALLBACK_IMAGE;
//                     }}
//                   />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
//                     Selected Product
//                   </p>

//                   <h4 className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedItem.name}
//                   </h4>

//                   <p className="text-xs text-gray-500">
//                     HS Code: {selectedItem.hs}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Enquiry Form */}
//             <form
//               className="max-h-[calc(92vh-190px)] overflow-y-auto p-5 sm:p-7"
//               onSubmit={(event) => {
//                 event.preventDefault();

//                 const formData = new FormData(event.currentTarget);

//                 const name = formData.get("name");
//                 const company = formData.get("company");
//                 const email = formData.get("email");
//                 const phone = formData.get("phone");
//                 const country = formData.get("country");
//                 const quantity = formData.get("quantity");
//                 const unit = formData.get("unit");
//                 const message = formData.get("message");

//                 const whatsappMessage = `Hello ARVANTA EXIM Team,

// I would like to enquire about the following product:

// Product: ${selectedItem.name}
// HS Code: ${selectedItem.hs}

// Customer Details:
// Name: ${name}
// Company: ${company}
// Business Email: ${email}
// WhatsApp / Phone: ${phone}
// Country: ${country}

// Requirement:
// Quantity: ${quantity} ${unit}

// Additional Requirements:
// ${message || "No additional requirements provided."}

// Please share the price, availability, specifications, packaging details and export terms.

// Regards,
// ${name}`;

//                 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   whatsappMessage,
//                 )}`;

//                 window.open(whatsappUrl, "_blank");
//               }}
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 {/* Full Name */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Company */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Company Name
//                   </label>

//                   <input
//                     type="text"
//                     name="company"
//                     required
//                     placeholder="Enter company name"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Business Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="company@example.com"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     WhatsApp / Phone
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Country */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Country
//                   </label>

//                   <input
//                     type="text"
//                     name="country"
//                     required
//                     placeholder="Enter your country"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Quantity */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Required Quantity
//                   </label>

//                   <div className="flex gap-2">
//                     <input
//                       type="number"
//                       name="quantity"
//                       min="1"
//                       required
//                       placeholder="e.g. 500"
//                       className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     />

//                     <select
//                       name="unit"
//                       className="w-28 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     >
//                       <option value="KG">KG</option>
//                       <option value="MT">MT</option>
//                       <option value="Container">Container</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="mt-5">
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   Additional Requirements
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Tell us about packaging, specifications, destination port or any other requirement..."
//                   className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                 />
//               </div>

//               {/* Information */}
//               <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
//                 <p className="text-xs leading-5 text-gray-600">
//                   By submitting this enquiry, WhatsApp will open with your
//                   product and requirement details already prepared.
//                 </p>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-300"
//               >
//                 Send Enquiry
//                 <span className="text-lg">→</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Product;




// import { useMemo, useRef, useState } from "react";
// import { Search } from "lucide-react";

// const FALLBACK_IMAGE =
//   "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

// const WHATSAPP_NUMBER = "917828265329";

// const products = [
//   {
//     id: 1,
//     name: "Dry Ginger",
//     category: "Dehydrated",
//     featured: true,
//     description:
//       "Premium quality dehydrated ginger products processed for food and industrial applications.",
//     items: [
//       {
//         name: "Dry Ginger",
//         hs: "09101120",
//         image:
//           "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp",
//       },
//       {
//         name: "Ginger Powder",
//         hs: "09101210",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/image_7e0ef0a7-e256-45f1-847f-307d8107c67d.png?v=1773125334&width=1946",
//       },
//       {
//         name: "Ginger Flex",
//         hs: "09101120",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_shreds.jpg",
//       },
//     ],
//   },

//   {
//     id: 2,
//     name: "Dry Onion",
//     category: "Dehydrated",
//     description:
//       "Dehydrated onion products with consistent quality, flavor and texture.",
//     items: [
//       {
//         name: " Red Dry Onion Flakes",
//         hs: "07122000",
//         image:
//           "https://t3.ftcdn.net/jpg/05/76/93/26/240_F_576932666_T3RZiBJ02vikLcnfsMygCT4ySgNMe4k1.jpg",
//       },
//       {
//         name: " White Dry Onion Flakes",
//         hs: "07122000",
//         image:
//           "https://t3.ftcdn.net/jpg/21/93/98/94/240_F_2193989407_nE8F9VqomleDtWEUI1xkr28YX35oGfYT.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hs: "07122000",
//         image:
//           "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
//       },
//     ],
//   },

//   {
//     id: 3,
//     name: "Dry Potato",
//     category: "Dehydrated",
//     description:
//       "Selected dehydrated potato products suitable for food processing and commercial use.",
//     items: [
//       {
//         name: "Dry Potato Powder",
//         hs: "07129060",
//         image:
//           "https://t4.ftcdn.net/jpg/21/78/54/27/240_F_2178542718_VbE8tRX60rdHdZwev02W2iN9RXj9cfrT.jpg",
//       },
//       {
//         name: "Potato Flakes",
//         hs: "07129060",
//         image:
//           "https://t4.ftcdn.net/jpg/09/60/12/51/240_F_960125196_cIxJD9waId8YfBU2nivW1Yv1ONa9F3Zm.jpg",
//       },
//       {
//         name: "Potato Starch",
//         hs: "11081300",
//         image:
//           "https://t4.ftcdn.net/jpg/16/46/72/87/240_F_1646728767_d0Im3ztEgAJZVv5jQfYJjUCMovM4Q5ut.jpg",
//       },
//     ],
//   },

//   {
//     id: 4,
//     name: "Dry Garlic",
//     category: "Dehydrated",
//     featured: true,
//     description:
//       "Premium dehydrated garlic processed to retain its natural aroma and flavor.",
//     items: [
//       {
//         name: "Dry Garlic",
//         hs: "07129030",
//         image:
//           "https://t3.ftcdn.net/jpg/12/70/85/04/240_F_1270850408_4PYSLLxQL5SmXxJem5Fw4ju8aQDx3U8J.jpg",
//       },
//       {
//         name: "Dry Garlic Powder",
//         hs: "07129030",
//         image:
//           "https://t4.ftcdn.net/jpg/09/27/48/71/240_F_927487170_NG7iS6V9RXZoFDNTXJL7RC8YdjgYhq9j.jpg",
//       },
//       {
//         name: "Dry Garlic Flakes",
//         hs: "07129030",
//         image:
//           "https://www.selbermacher24.at/app/uploads/2024/08/Knoblauchflocken.jpg",
//       },
//     ],
//   },

//   {
//     id: 5,
//     name: "Dry Tomato",
//     category: "Dehydrated",
//     description:
//       "Dehydrated tomato products offering rich color, flavor and convenient storage.",
//     items: [
//       {
//         name: "Dry Tomato Flakes",
//         hs: "07129090",
//         image:
//           "https://t3.ftcdn.net/jpg/00/67/08/56/240_F_67085638_s1HQ3RfBb8FhPF9GmHRYMnp8AWYaKcc2.jpg",
//       },
//       {
//         name: "Dry Tomato Powder",
//         hs: "07129090",
//         image:
//           "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
//       },
//     ],
//   },

//   {
//     id: 6,
//     name: "Dry Banana",
//     category: "Dehydrated",
//     description:
//       "Quality banana-based products prepared for food manufacturing and export applications.",
//     items: [
//       {
//         name: "Green Banana powder",
//         hs: "08039000",
//         image:
//           "https://t3.ftcdn.net/jpg/07/92/45/38/240_F_792453883_zYf6PNRz5SYbUhIykT9Jlp3LNyKIADm8.jpg",
//       },
//       {
//         name: "Dry Banana",
//         hs: "08039000",
//         image:
//           "https://t3.ftcdn.net/jpg/21/61/43/70/240_F_2161437009_0VrShaAwxHieis2JrpDIl7CiP1M2tNhn.jpg",
//       },
//       {
//         name: "Banana Flakes",
//         hs: "08039000",
//         image:
//           "https://t4.ftcdn.net/jpg/14/34/70/57/240_F_1434705707_vRoJFJirloi2q4yVAa4NRLjUSyS5jYiA.jpg",
//       },
//     ],
//   },

//   {
//     id: 7,
//     name: "Beetroot",
//     category: "Dehydrated",
//     description:
//       "Finely processed beetroot powder for food, beverage and ingredient applications.",
//     items: [
//       {
//         name: "Beetroot Powder",
//         hs: "07129090",
//         image:
//           "https://t3.ftcdn.net/jpg/20/97/16/06/240_F_2097160641_YSbOs2V7mQBBMRVcDGy73risDH0d48Gm.jpg",
//       },
//     ],
//   },

//   {
//     id: 8,
//     name: "Red Chilli",
//     category: "Spices",
//     featured: true,
//     description:
//       "Premium quality dried red chilli products with strong color, aroma and flavor.",
//     items: [
//       {
//         name: "Whole Dry Red Chilli",
//         hs: "09042110",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/arbol-chile-whole-stemless-featured-image.png?v=1774432921&width=1100",
//       },
//       {
//         name: "Red Chilli Flakes",
//         hs: "09042219",
//         image:
//           "https://t3.ftcdn.net/jpg/20/76/90/98/240_F_2076909828_PeKmkDRXzgxi5TOb1nu5XgWGA3l2Fd1p.jpg",
//       },
//       {
//         name: "Red Chilli Powder",
//         hs: "09042211",
//         image:
//           "https://t4.ftcdn.net/jpg/21/84/72/59/240_F_2184725959_lfSSkgCicoOJbheD882RBHuJk8aJG30R.jpg",
//       },
//     ],
//   },

//   {
//     id: 9,
//     name: "Chickpeas",
//     category: "Agricultural",
//     featured: true,

//     bannerImage:
//       "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpeas.jpg",

//     description:
//       "Carefully selected chickpea varieties processed and supplied for domestic and export markets.",

//     items: [
//       {
//         name: "Kabuli Chana",
//         hs: "07132010",
//         image:
//           "https://t3.ftcdn.net/jpg/07/14/27/38/240_F_714273861_uxH1oVRn8SoZtU4tABMuOejXI6LeDj9y.jpg",
//       },
//       {
//         name: "Desi Chana",
//         hs: "07132020",
//         image:
//           "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
//       },
//     ],
//   },

//   {
//     id: 10,
//     name: "Coir Pith",
//     category: "Natural",
//     description:
//       "Natural coconut-based growing media suitable for horticulture and agricultural applications.",
//     items: [
//       {
//         name: "Coir Pith",
//         hs: "53050040",
//         image:
//           "https://t3.ftcdn.net/jpg/16/04/48/00/240_F_1604480047_Zf7306LwxBzQq04Qt8hHfCxlLEuzpFJ7.jpg",
//       },
//       {
//         name: "Coco Peat",
//         hs: "53050040",
//         image:
//           "https://thumbnail.image.rakuten.co.jp/%400_mall/a-mederu/cabinet/imgrc0101955041.jpg",
//       },
//     ],
//   },


// {
//   id: 11,
//   name: "A2 ghee",
//   category: "Dehydrated",
//   description:
//     "Premium quality A2 Desi Ghee, traditionally prepared with rich aroma, authentic taste and natural goodness. Available in 1 KG, 5 KG and 15 KG packaging.",
//   items: [
//     {
//       name: "deshi ghee",
//       hs: "07129090",
//       image:
//         "https://t4.ftcdn.net/jpg/11/60/41/87/240_F_1160418796_QLW7swCLHsaGs0OhGlbdmSCrBYrL3AuC.jpg",
//       packaging: ["1 KG", "5 KG", "15 KG"],
//     },
//   ],
// },

// ];

// /* =========================================================
//   PRODUCT IMAGE
//   Existing image + drag/swipe 360-style interaction
//   ========================================================= */

// const ProductImage = ({ src, alt, className = "" }) => {
//   const [imageSrc, setImageSrc] = useState(src);
//   const [rotation, setRotation] = useState(0);
//   const [isDragging, setIsDragging] = useState(false);

//   const dragging = useRef(false);
//   const lastX = useRef(0);

//   const handlePointerDown = (event) => {
//     dragging.current = true;
//     setIsDragging(true);
//     lastX.current = event.clientX;

//     event.currentTarget.setPointerCapture(event.pointerId);
//   };

//   const handlePointerMove = (event) => {
//     if (!dragging.current) return;

//     const movement = event.clientX - lastX.current;

//     lastX.current = event.clientX;

//     setRotation((previous) => previous + movement * 1.5);
//   };

//   const handlePointerUp = (event) => {
//     dragging.current = false;
//     setIsDragging(false);

//     try {
//       event.currentTarget.releasePointerCapture(event.pointerId);
//     } catch {
//       // Ignore pointer release errors
//     }
//   };

//   const handlePointerCancel = () => {
//     dragging.current = false;
//     setIsDragging(false);
//   };

//   return (
//     <div
//       className="h-full w-full select-none touch-pan-y"
//       onPointerDown={handlePointerDown}
//       onPointerMove={handlePointerMove}
//       onPointerUp={handlePointerUp}
//       onPointerCancel={handlePointerCancel}
//       style={{
//         perspective: "1000px",
//         cursor: isDragging ? "grabbing" : "grab",
//       }}
//     >
//       <div
//         className="h-full w-full"
//         style={{
//           transform: `rotateY(${rotation}deg)`,
//           transformStyle: "preserve-3d",
//           transition: isDragging ? "none" : "transform 0.15s ease-out",
//         }}
//       >
//         <img
//           src={imageSrc}
//           alt={alt}
//           loading="lazy"
//           draggable={false}
//           onError={() => {
//             if (imageSrc !== FALLBACK_IMAGE) {
//               setImageSrc(FALLBACK_IMAGE);
//             }
//           }}
//           className={`h-full w-full object-contain mix-blend-multiply ${className}`}
//         />
//       </div>
//     </div>
//   );
// };

// const Product = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [selectedItem, setSelectedItem] = useState(null);
//   const [activeCategory, setActiveCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const categories = ["All", "Dehydrated", "Spices", "Agricultural", "Natural"];

//   const filteredProducts = useMemo(() => {
//     const categoryFiltered =
//       activeCategory === "All"
//         ? products
//         : products.filter((product) => product.category === activeCategory);

//     const search = searchQuery.trim().toLowerCase();

//     if (!search) return categoryFiltered;

//     return categoryFiltered.filter((product) => {
//       const productText = [
//         product.name,
//         product.category,
//         product.description,
//         ...product.items.map((item) => `${item.name} ${item.hs}`),
//       ]
//         .join(" ")
//         .toLowerCase();

//       return productText.includes(search);
//     });
//   }, [activeCategory, searchQuery]);

//   const totalVariants = products.reduce(
//     (total, product) => total + product.items.length,
//     0,
//   );

//   return (
//     <section
//       id="products"
//       className="relative scroll-mt-[90px] overflow-hidden bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8"
//     >
//       {/* Decorative background */}
//       <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
//       <div className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

//       <div className="relative mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mx-auto mb-12 max-w-3xl text-center">
//           <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600">
//             Our Products
//           </span>

//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Premium Products,
//             <span className="text-orange-500"> Global Standards</span>
//           </h2>

//           <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
//             Explore our carefully processed range of dehydrated foods, spices,
//             agricultural products and natural products.
//           </p>
//         </div>

//         {/* Stats */}
//         <div className="mb-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/50 sm:grid-cols-4">
//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">
//               {products.length}+
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Product Categories
//             </p>
//           </div>

//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">
//               {totalVariants}+
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Product Variants
//             </p>
//           </div>

//           <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
//             <div className="text-3xl font-extrabold text-orange-500">100%</div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Quality Focused
//             </p>
//           </div>

//           <div className="p-5 text-center">
//             <div className="text-3xl font-extrabold text-orange-500">
//               Global
//             </div>
//             <p className="mt-1 text-sm font-medium text-gray-600">
//               Export Ready
//             </p>
//           </div>
//         </div>

//         {/* Search Products */}
//         <div className="mb-7 flex justify-center">
//           <div className="relative w-full max-w-2xl">
//             <Search
//               size={20}
//               className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             />

//             <input
//               type="text"
//               value={searchQuery}
//               onChange={(event) => setSearchQuery(event.target.value)}
//               placeholder="Search products..."
//               className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
//             />

//             {searchQuery && (
//               <button
//                 type="button"
//                 onClick={() => setSearchQuery("")}
//                 className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Clear search"
//               >
//                 ×
//               </button>
//             )}
//           </div>
//         </div>

//         {/* Category Filter */}
//         <div className="mb-10 flex flex-wrap justify-center gap-3">
//           {categories.map((category) => {
//             const active = activeCategory === category;

//             return (
//               <button
//                 key={category}
//                 type="button"
//                 onClick={() => setActiveCategory(category)}
//                 className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
//                   active
//                     ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
//                     : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
//                 }`}
//               >
//                 {category === "Dehydrated"
//                   ? "Dehydrated Foods"
//                   : category === "Agricultural"
//                     ? "Agricultural Products"
//                     : category === "Natural"
//                       ? "Natural Products"
//                       : category}
//               </button>
//             );
//           })}
//         </div>

//         {/* Product Grid */}
//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
//           {filteredProducts.map((product) => {
//             const previewItem = product.items[0];

//             return (
//               <div
//                 key={product.id}
//                 className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100/70"
//               >
//                 {/* Featured */}
//                 {product.featured && (
//                   <div className="absolute left-4 top-4 z-10">
//                     <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
//                       Featured
//                     </span>
//                   </div>
//                 )}

//                 {/* Image */}
//                 <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-8">
//                   <ProductImage
//                     src={previewItem.image}
//                     alt={previewItem.name}
//                     className="transition-transform duration-700 group-hover:scale-110"
//                   />

//                   <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
//                 </div>

//                 {/* Content */}
//                 <div className="p-6">
//                   <div className="mb-3 flex items-center justify-between gap-3">
//                     <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
//                       {product.category}
//                     </span>

//                     <span className="text-xs font-medium text-gray-400">
//                       {product.items.length} variants
//                     </span>
//                   </div>

//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {product.name}
//                   </h3>

//                   <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
//                     {product.description}
//                   </p>

//                   <button
//                     type="button"
//                     onClick={() => setSelectedProduct(product)}
//                     className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500"
//                   >
//                     View All Products
//                     <span className="text-lg transition-transform group-hover:translate-x-1">
//                       →
//                     </span>
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         {/* No Search Results */}
//         {filteredProducts.length === 0 && (
//           <div className="py-16 text-center">
//             <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
//               <Search size={28} />
//             </div>

//             <h3 className="mt-5 text-xl font-bold text-gray-900">
//               No products found
//             </h3>

//             <p className="mt-2 text-sm text-gray-500">
//               Try searching with another product name or category.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 setSearchQuery("");
//                 setActiveCategory("All");
//               }}
//               className="mt-5 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
//             >
//               View All Products
//             </button>
//           </div>
//         )}

//         {/* Quality Strip */}
//         <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
//           {[
//             "Natural Processing",
//             "Hygienically Packed",
//             "Quality Focused",
//             "Export Ready",
//           ].map((item) => (
//             <div
//               key={item}
//               className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-gray-700"
//             >
//               <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
//                 ✓
//               </span>
//               {item}
//             </div>
//           ))}
//         </div>

//         {/* Bottom CTA */}
//         <div className="relative mt-16 overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 text-center sm:px-10">
//           <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
//           <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

//           <div className="relative">
//             <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
//               Need Something Specific?
//             </span>

//             <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
//               Looking for a specific product?
//             </h3>

//             <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
//               Tell us your product requirement, quantity and specifications. Our
//               team will help you with the right solution.
//             </p>

//             <button
//               type="button"
//               onClick={() => {
//                 const whatsappMessage = `Hello ARVANTA EXIM Team,

// I am interested in your products and would like to request a quote.

// Please share the available products, pricing, specifications, packaging details and export terms.

// Thank you.`;

//                 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   whatsappMessage,
//                 )}`;

//                 window.open(whatsappUrl, "_blank");
//               }}
//               className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
//             >
//               Request a Quote
//               <span className="text-lg">→</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* =====================================================
//           PRODUCT MODAL
//           ===================================================== */}

//       {selectedProduct && (
//         <div
//           className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedProduct(null)}
//         >
//           <div
//             className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Modal Header */}
//             <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
//               <div>
//                 <span className="text-sm font-semibold text-orange-500">
//                   {selectedProduct.category}
//                 </span>

//                 <h3 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
//                   {selectedProduct.name}
//                 </h3>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedProduct(null)}
//                 className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Modal Content - Horizontal Slider */}
//             <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-5 sm:p-7">
//               <div
//                 className="flex gap-5 overflow-x-auto pb-5"
//                 style={{
//                   scrollbarWidth: "auto",
//                   WebkitOverflowScrolling: "touch",
//                 }}
//               >
//                 {selectedProduct.items.map((item) => (
//                   <div
//                     key={item.name}
//                     className="group w-[85%] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 sm:w-[48%] lg:w-[31.8%]"
//                   >
//                     {/* Item Image */}
//                     <div className="flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-7">
//                       <ProductImage
//                         src={item.image}
//                         alt={item.name}
//                         className="transition-transform duration-500 group-hover:scale-110"
//                       />
//                     </div>

//                     {/* Item Info */}
//                     <div className="p-5">
//                       <h4 className="text-lg font-bold text-gray-900">
//                         {item.name}
//                       </h4>

//                       <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
//                         <span className="text-xs font-medium text-gray-500">
//                           HS Code
//                         </span>

//                         <span className="text-sm font-bold text-gray-800">
//                           {item.hs}
//                         </span>
//                       </div>

//                       {/* Enquire Now */}
//                       <button
//                         type="button"
//                         onClick={() => setSelectedItem(item)}
//                         className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
//                       >
//                         Enquire Now
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* =====================================================
//           PREMIUM ENQUIRY MODAL
//           ===================================================== */}

//       {selectedItem && (
//         <div
//           className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedItem(null)}
//         >
//           <div
//             className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Enquiry Header */}
//             <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
//               <div>
//                 <span className="text-sm font-semibold text-orange-500">
//                   Product Enquiry
//                 </span>

//                 <h3 className="mt-1 text-2xl font-extrabold text-gray-900">
//                   Request a Quote
//                 </h3>

//                 <p className="mt-1 text-sm text-gray-500">
//                   Tell us your requirement and our team will get back to you.
//                 </p>
//               </div>

//               <button
//                 type="button"
//                 onClick={() => setSelectedItem(null)}
//                 className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//             </div>

//             {/* Selected Product Preview */}
//             <div className="border-b border-gray-100 bg-orange-50/50 px-5 py-4 sm:px-7">
//               <div className="flex items-center gap-4">
//                 <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
//                   <img
//                     src={selectedItem.image}
//                     alt={selectedItem.name}
//                     className="h-full w-full object-contain mix-blend-multiply"
//                     onError={(event) => {
//                       event.currentTarget.src = FALLBACK_IMAGE;
//                     }}
//                   />
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
//                     Selected Product
//                   </p>

//                   <h4 className="mt-1 text-lg font-bold text-gray-900">
//                     {selectedItem.name}
//                   </h4>

//                   <p className="text-xs text-gray-500">
//                     HS Code: {selectedItem.hs}
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Enquiry Form */}
//             <form
//               className="max-h-[calc(92vh-190px)] overflow-y-auto p-5 sm:p-7"
//               onSubmit={(event) => {
//                 event.preventDefault();

//                 const formData = new FormData(event.currentTarget);

//                 const name = formData.get("name");
//                 const company = formData.get("company");
//                 const email = formData.get("email");
//                 const phone = formData.get("phone");
//                 const country = formData.get("country");
//                 const quantity = formData.get("quantity");
//                 const unit = formData.get("unit");
//                 const message = formData.get("message");

//                 const whatsappMessage = `Hello ARVANTA EXIM Team,

// I would like to enquire about the following product:

// Product: ${selectedItem.name}
// HS Code: ${selectedItem.hs}

// Customer Details:
// Name: ${name}
// Company: ${company}
// Business Email: ${email}
// WhatsApp / Phone: ${phone}
// Country: ${country}

// Requirement:
// Quantity: ${quantity} ${unit}

// Additional Requirements:
// ${message || "No additional requirements provided."}

// Please share the price, availability, specifications, packaging details and export terms.

// Regards,
// ${name}`;

//                 const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
//                   whatsappMessage,
//                 )}`;

//                 window.open(whatsappUrl, "_blank");
//               }}
//             >
//               <div className="grid gap-5 sm:grid-cols-2">
//                 {/* Full Name */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Full Name
//                   </label>

//                   <input
//                     type="text"
//                     name="name"
//                     required
//                     placeholder="Enter your full name"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Company */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Company Name
//                   </label>

//                   <input
//                     type="text"
//                     name="company"
//                     required
//                     placeholder="Enter company name"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Email */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Business Email
//                   </label>

//                   <input
//                     type="email"
//                     name="email"
//                     required
//                     placeholder="company@example.com"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Phone */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     WhatsApp / Phone
//                   </label>

//                   <input
//                     type="tel"
//                     name="phone"
//                     required
//                     placeholder="+91 XXXXX XXXXX"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Country */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Country
//                   </label>

//                   <input
//                     type="text"
//                     name="country"
//                     required
//                     placeholder="Enter your country"
//                     className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                   />
//                 </div>

//                 {/* Quantity */}
//                 <div>
//                   <label className="mb-2 block text-sm font-semibold text-gray-700">
//                     Required Quantity
//                   </label>

//                   <div className="flex gap-2">
//                     <input
//                       type="number"
//                       name="quantity"
//                       min="1"
//                       required
//                       placeholder="e.g. 500"
//                       className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     />

//                     <select
//                       name="unit"
//                       className="w-28 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                     >
//                       <option value="KG">KG</option>
//                       <option value="MT">MT</option>
//                       <option value="Container">Container</option>
//                     </select>
//                   </div>
//                 </div>
//               </div>

//               {/* Message */}
//               <div className="mt-5">
//                 <label className="mb-2 block text-sm font-semibold text-gray-700">
//                   Additional Requirements
//                 </label>

//                 <textarea
//                   name="message"
//                   rows="4"
//                   placeholder="Tell us about packaging, specifications, destination port or any other requirement..."
//                   className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
//                 />
//               </div>

//               {/* Information */}
//               <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
//                 <p className="text-xs leading-5 text-gray-600">
//                   By submitting this enquiry, WhatsApp will open with your
//                   product and requirement details already prepared.
//                 </p>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-300"
//               >
//                 Send Enquiry
//                 <span className="text-lg">→</span>
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Product;


import { useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

const WHATSAPP_NUMBER = "917828265329";

const products = [
  {
    id: 1,
    name: "Dry Ginger",
    category: "Dehydrated",
    featured: true,
    description:
      "Premium quality dehydrated ginger products processed for food and industrial applications.",
    items: [
      {
        name: "Dry Ginger",
        hs: "09101120",
        image:
          "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp",
      },
      {
        name: "Ginger Powder",
        hs: "09101210",
        image:
          "https://www.santamauraspice.com/cdn/shop/files/image_7e0ef0a7-e256-45f1-847f-307d8107c67d.png?v=1773125334&width=1946",
      },
      {
        name: "Ginger Flex",
        hs: "09101120",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_shreds.jpg",
      },
    ],
  },

  {
    id: 2,
    name: "Dry Onion",
    category: "Dehydrated",
    description:
      "Dehydrated onion products with consistent quality, flavor and texture.",
    items: [
      {
        name: " Red Dry Onion Flakes",
        hs: "07122000",
        image:
          "https://t3.ftcdn.net/jpg/05/76/93/26/240_F_576932666_T3RZiBJ02vikLcnfsMygCT4ySgNMe4k1.jpg",
      },
      {
        name: " White Dry Onion Flakes",
        hs: "07122000",
        image:
          "https://t3.ftcdn.net/jpg/21/93/98/94/240_F_2193989407_nE8F9VqomleDtWEUI1xkr28YX35oGfYT.jpg",
      },
      {
        name: "Dry Onion Powder",
        hs: "07122000",
        image:
          "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
      },
      {
        name: "Dry Onion Powder",
        hs: "07122000",
        image:
          "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
      },
      {
        name: "Dry Onion Powder",
        hs: "07122000",
        image:
          "https://t4.ftcdn.net/jpg/12/96/18/57/240_F_1296185700_ewVhgSRurKOsQxkU5ThrAmnWG4gBOnUM.jpg",
      },
    ],
  },

  {
    id: 3,
    name: "Dry Potato",
    category: "Dehydrated",
    description:
      "Selected dehydrated potato products suitable for food processing and commercial use.",
    items: [
      {
        name: "Dry Potato Powder",
        hs: "07129060",
        image:
          "https://t4.ftcdn.net/jpg/21/78/54/27/240_F_2178542718_VbE8tRX60rdHdZwev02W2iN9RXj9cfrT.jpg",
      },
      {
        name: "Potato Flakes",
        hs: "07129060",
        image:
          "https://t4.ftcdn.net/jpg/09/60/12/51/240_F_960125196_cIxJD9waId8YfBU2nivW1Yv1ONa9F3Zm.jpg",
      },
      {
        name: "Potato Starch",
        hs: "11081300",
        image:
          "https://t4.ftcdn.net/jpg/16/46/72/87/240_F_1646728767_d0Im3ztEgAJZVv5jQfYJjUCMovM4Q5ut.jpg",
      },
    ],
  },

  {
    id: 4,
    name: "Dry Garlic",
    category: "Dehydrated",
    featured: true,
    description:
      "Premium dehydrated garlic processed to retain its natural aroma and flavor.",
    items: [
      {
        name: "Dry Garlic",
        hs: "07129030",
        image:
          "https://t3.ftcdn.net/jpg/12/70/85/04/240_F_1270850408_4PYSLLxQL5SmXxJem5Fw4ju8aQDx3U8J.jpg",
      },
      {
        name: "Dry Garlic Powder",
        hs: "07129030",
        image:
          "https://t4.ftcdn.net/jpg/09/27/48/71/240_F_927487170_NG7iS6V9RXZoFDNTXJL7RC8YdjgYhq9j.jpg",
      },
      {
        name: "Dry Garlic Flakes",
        hs: "07129030",
        image:
          "https://www.selbermacher24.at/app/uploads/2024/08/Knoblauchflocken.jpg",
      },
    ],
  },

  {
    id: 5,
    name: "Dry Tomato",
    category: "Dehydrated",
    description:
      "Dehydrated tomato products offering rich color, flavor and convenient storage.",
    items: [
      {
        name: "Dry Tomato Flakes",
        hs: "07129090",
        image:
          "https://t3.ftcdn.net/jpg/00/67/08/56/240_F_67085638_s1HQ3RfBb8FhPF9GmHRYMnp8AWYaKcc2.jpg",
      },
      {
        name: "Dry Tomato Powder",
        hs: "07129090",
        image:
          "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
      },
    ],
  },

  {
    id: 6,
    name: "Dry Banana",
    category: "Dehydrated",
    description:
      "Quality banana-based products prepared for food manufacturing and export applications.",
    items: [
      {
        name: "Green Banana powder",
        hs: "08039000",
        image:
          "https://t3.ftcdn.net/jpg/07/92/45/38/240_F_792453883_zYf6PNRz5SYbUhIykT9Jlp3LNyKIADm8.jpg",
      },
      {
        name: "Dry Banana",
        hs: "08039000",
        image:
          "https://t3.ftcdn.net/jpg/21/61/43/70/240_F_2161437009_0VrShaAwxHieis2JrpDIl7CiP1M2tNhn.jpg",
      },
      {
        name: "Banana Flakes",
        hs: "08039000",
        image:
          "https://t4.ftcdn.net/jpg/14/34/70/57/240_F_1434705707_vRoJFJirloi2q4yVAa4NRLjUSyS5jYiA.jpg",
      },
    ],
  },

  {
    id: 7,
    name: "Beetroot",
    category: "Dehydrated",
    description:
      "Finely processed beetroot powder for food, beverage and ingredient applications.",
    items: [
      {
        name: "Beetroot Powder",
        hs: "07129090",
        image:
          "https://t3.ftcdn.net/jpg/20/97/16/06/240_F_2097160641_YSbOs2V7mQBBMRVcDGy73risDH0d48Gm.jpg",
      },
    ],
  },

  {
    id: 8,
    name: "Red Chilli",
    category: "Spices",
    featured: true,
    description:
      "Premium quality dried red chilli products with strong color, aroma and flavor.",
    items: [
      {
        name: "Whole Dry Red Chilli",
        hs: "09042110",
        image:
          "https://www.santamauraspice.com/cdn/shop/files/arbol-chile-whole-stemless-featured-image.png?v=1774432921&width=1100",
      },
      {
        name: "Red Chilli Flakes",
        hs: "09042219",
        image:
          "https://t3.ftcdn.net/jpg/20/76/90/98/240_F_2076909828_PeKmkDRXzgxi5TOb1nu5XgWGA3l2Fd1p.jpg",
      },
      {
        name: "Red Chilli Powder",
        hs: "09042211",
        image:
          "https://t4.ftcdn.net/jpg/21/84/72/59/240_F_2184725959_lfSSkgCicoOJbheD882RBHuJk8aJG30R.jpg",
      },
    ],
  },

  {
    id: 9,
    name: "Chickpeas",
    category: "Agricultural",
    featured: true,

    bannerImage:
      "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chickpeas.jpg",

    description:
      "Carefully selected chickpea varieties processed and supplied for domestic and export markets.",

    items: [
      {
        name: "Kabuli Chana",
        hs: "07132010",
        image:
          "https://t3.ftcdn.net/jpg/07/14/27/38/240_F_714273861_uxH1oVRn8SoZtU4tABMuOejXI6LeDj9y.jpg",
      },
      {
        name: "Desi Chana",
        hs: "07132020",
        image:
          "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
      },
    ],
  },

  {
    id: 10,
    name: "Coir Pith",
    category: "Natural",
    description:
      "Natural coconut-based growing media suitable for horticulture and agricultural applications.",
    items: [
      {
        name: "Coir Pith",
        hs: "53050040",
        image:
          "https://t3.ftcdn.net/jpg/16/04/48/00/240_F_1604480047_Zf7306LwxBzQq04Qt8hHfCxlLEuzpFJ7.jpg",
      },
      {
        name: "Coco Peat",
        hs: "53050040",
        image:
          "https://thumbnail.image.rakuten.co.jp/%400_mall/a-mederu/cabinet/imgrc0101955041.jpg",
      },
    ],
  },

  {
    id: 11,
    name: "A2 ghee",
    category: "Dehydrated",
    description:
      "Premium quality A2 Desi Ghee, traditionally prepared with rich aroma, authentic taste and natural goodness. Available in 1 KG, 5 KG and 15 KG packaging.",
    items: [
      {
        name: "deshi ghee",
        hs: "07129090",
        image:
          "https://t4.ftcdn.net/jpg/11/60/41/87/240_F_1160418796_QLW7swCLHsaGs0OhGlbdmSCrBYrL3AuC.jpg",
        packaging: ["1 KG", "5 KG", "15 KG"],
      },
    ],
  },
];

/* =========================================================
  PRODUCT IMAGE
  Existing image + drag/swipe 360-style interaction
  ========================================================= */

const ProductImage = ({ src, alt, className = "" }) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const dragging = useRef(false);
  const lastX = useRef(0);

  const handlePointerDown = (event) => {
    dragging.current = true;
    setIsDragging(true);
    lastX.current = event.clientX;

    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragging.current) return;

    const movement = event.clientX - lastX.current;

    lastX.current = event.clientX;

    setRotation((previous) => previous + movement * 1.5);
  };

  const handlePointerUp = (event) => {
    dragging.current = false;
    setIsDragging(false);

    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Ignore pointer release errors
    }
  };

  const handlePointerCancel = () => {
    dragging.current = false;
    setIsDragging(false);
  };

  return (
    <div
      className="h-full w-full select-none touch-pan-y"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      style={{
        perspective: "1000px",
        cursor: isDragging ? "grabbing" : "grab",
      }}
    >
      <div
        className="h-full w-full"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transformStyle: "preserve-3d",
          transition: isDragging ? "none" : "transform 0.15s ease-out",
        }}
      >
        <img
          src={imageSrc}
          alt={alt}
          loading="lazy"
          draggable={false}
          onError={() => {
            if (imageSrc !== FALLBACK_IMAGE) {
              setImageSrc(FALLBACK_IMAGE);
            }
          }}
          className={`h-full w-full object-contain mix-blend-multiply ${className}`}
        />
      </div>
    </div>
  );
};

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Dehydrated", "Spices", "Agricultural", "Natural"];

  const filteredProducts = useMemo(() => {
    const categoryFiltered =
      activeCategory === "All"
        ? products
        : products.filter((product) => product.category === activeCategory);

    const search = searchQuery.trim().toLowerCase();

    if (!search) return categoryFiltered;

    return categoryFiltered.filter((product) => {
      const productText = [
        product.name,
        product.category,
        product.description,
        ...product.items.map((item) => `${item.name} ${item.hs}`),
      ]
        .join(" ")
        .toLowerCase();

      return productText.includes(search);
    });
  }, [activeCategory, searchQuery]);

  const totalVariants = products.reduce(
    (total, product) => total + product.items.length,
    0,
  );

  return (
    <section
      id="products"
      className="relative scroll-mt-[90px] overflow-hidden bg-white px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-orange-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-40 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-sm font-semibold text-orange-600">
            Our Products
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Premium Products,
            <span className="text-orange-500"> Global Standards</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-600 sm:text-lg">
            Explore our carefully processed range of dehydrated foods, spices,
            agricultural products and natural products.
          </p>
        </div>

        {/* Stats */}
        <div className="mb-12 grid grid-cols-2 overflow-hidden rounded-3xl border border-orange-100 bg-orange-50/50 sm:grid-cols-4">
          <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
            <div className="text-3xl font-extrabold text-orange-500">
              {products.length}+
            </div>
            <p className="mt-1 text-sm font-medium text-gray-600">
              Product Categories
            </p>
          </div>

          <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
            <div className="text-3xl font-extrabold text-orange-500">
              {totalVariants}+
            </div>
            <p className="mt-1 text-sm font-medium text-gray-600">
              Product Variants
            </p>
          </div>

          <div className="border-b border-orange-100 p-5 text-center sm:border-b-0 sm:border-r">
            <div className="text-3xl font-extrabold text-orange-500">100%</div>
            <p className="mt-1 text-sm font-medium text-gray-600">
              Quality Focused
            </p>
          </div>

          <div className="p-5 text-center">
            <div className="text-3xl font-extrabold text-orange-500">
              Global
            </div>
            <p className="mt-1 text-sm font-medium text-gray-600">
              Export Ready
            </p>
          </div>
        </div>

        {/* Search Products */}
        <div className="mb-7 flex justify-center">
          <div className="relative w-full max-w-2xl">
            <Search
              size={20}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search products..."
              className="w-full rounded-full border border-gray-200 bg-white py-3.5 pl-12 pr-12 text-sm text-gray-900 shadow-sm outline-none transition-all placeholder:text-gray-400 focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-sm text-gray-500 transition hover:bg-orange-500 hover:text-white"
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const active = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  active
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-200"
                    : "border border-gray-200 bg-white text-gray-600 hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600"
                }`}
              >
                {category === "Dehydrated"
                  ? "Dehydrated Foods"
                  : category === "Agricultural"
                    ? "Agricultural Products"
                    : category === "Natural"
                      ? "Natural Products"
                      : category}
              </button>
            );
          })}
        </div>

        {/* Product Grid */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => {
            const previewItem = product.items[0];

            return (
              <div
                key={product.id}
                className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-200 hover:shadow-2xl hover:shadow-orange-100/70"
              >
                {/* Featured */}
                {product.featured && (
                  <div className="absolute left-4 top-4 z-10">
                    <span className="rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow-md">
                      Featured
                    </span>
                  </div>
                )}

                {/* Image */}
                <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-8">
                  <ProductImage
                    src={previewItem.image}
                    alt={previewItem.name}
                    className="transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white/70 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-orange-600">
                      {product.category}
                    </span>

                    <span className="text-xs font-medium text-gray-400">
                      {product.items.length} variants
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {product.name}
                  </h3>

                  <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-600">
                    {product.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-orange-500"
                  >
                    View All Products
                    <span className="text-lg transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* No Search Results */}
        {filteredProducts.length === 0 && (
          <div className="py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-50 text-orange-500">
              <Search size={28} />
            </div>

            <h3 className="mt-5 text-xl font-bold text-gray-900">
              No products found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with another product name or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-5 rounded-xl bg-orange-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
            >
              View All Products
            </button>
          </div>
        )}

        {/* Quality Strip */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-3">
          {[
            "Natural Processing",
            "Hygienically Packed",
            "Quality Focused",
            "Export Ready",
          ].map((item) => (
            <div
              key={item}
              className="flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-4 py-2.5 text-sm font-semibold text-gray-700"
            >
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-orange-500 text-xs text-white">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl bg-gray-900 px-6 py-10 text-center sm:px-10">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-orange-500/20 blur-3xl" />
          <div className="absolute -bottom-24 -left-20 h-60 w-60 rounded-full bg-orange-500/10 blur-3xl" />

          <div className="relative">
            <span className="text-sm font-bold uppercase tracking-widest text-orange-400">
              Need Something Specific?
            </span>

            <h3 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              Looking for a specific product?
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-300 sm:text-base">
              Tell us your product requirement, quantity and specifications. Our
              team will help you with the right solution.
            </p>

            <button
              type="button"
              onClick={() => {
                const whatsappMessage = `Hello ARVANTA EXIM Team,

I am interested in your products and would like to request a quote.

Please share the available products, pricing, specifications, packaging details and export terms.

Thank you.`;

                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`;

                window.open(whatsappUrl, "_blank");
              }}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              Request a Quote
              <span className="text-lg">→</span>
            </button>
          </div>
        </div>
      </div>

      {/* =====================================================
          PRODUCT MODAL
          ===================================================== */}

      {selectedProduct && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-5xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
              <div>
                <span className="text-sm font-semibold text-orange-500">
                  {selectedProduct.category}
                </span>

                <h3 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  {selectedProduct.name}
                </h3>
              </div>

              <button
                type="button"
                onClick={() => setSelectedProduct(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Modal Content - Horizontal Slider */}
            <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-5 sm:p-7">
              <div
                className="flex gap-5 overflow-x-auto pb-5"
                style={{
                  scrollbarWidth: "auto",
                  WebkitOverflowScrolling: "touch",
                }}
              >
                {selectedProduct.items.map((item) => (
                  <div
                    key={item.name}
                    className="group w-[85%] shrink-0 overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50 sm:w-[48%] lg:w-[31.8%]"
                  >
                    {/* Item Image */}
                    <div className="flex h-52 items-center justify-center overflow-hidden bg-gradient-to-br from-orange-50 via-white to-gray-50 p-7">
                      <ProductImage
                        src={item.image}
                        alt={item.name}
                        className="transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>

                    {/* Item Info */}
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-gray-900">
                        {item.name}
                      </h4>

                      <div className="mt-3 flex items-center justify-between rounded-lg bg-gray-50 px-3 py-2">
                        <span className="text-xs font-medium text-gray-500">
                          HS Code
                        </span>

                        <span className="text-sm font-bold text-gray-800">
                          {item.hs}
                        </span>
                      </div>

                      {/* Available Packaging - Only for products having packaging */}
                      {item.packaging && (
                        <div className="mt-4">
                          <p className="mb-2 text-xs font-semibold text-gray-500">
                            Available Packaging
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {item.packaging.map((pack) => (
                              <span
                                key={pack}
                                className="rounded-lg border border-orange-200 bg-orange-50 px-3 py-2 text-xs font-bold text-orange-600"
                              >
                                {pack}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Enquire Now */}
                      <button
                        type="button"
                        onClick={() => setSelectedItem(item)}
                        className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                      >
                        Enquire Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =====================================================
          PREMIUM ENQUIRY MODAL
          ===================================================== */}

      {selectedItem && (
        <div
          className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setSelectedItem(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Enquiry Header */}
            <div className="flex items-center justify-between border-b border-gray-100 bg-white px-5 py-5 sm:px-7">
              <div>
                <span className="text-sm font-semibold text-orange-500">
                  Product Enquiry
                </span>

                <h3 className="mt-1 text-2xl font-extrabold text-gray-900">
                  Request a Quote
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Tell us your requirement and our team will get back to you.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-600 transition hover:bg-orange-500 hover:text-white"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Selected Product Preview */}
            <div className="border-b border-gray-100 bg-orange-50/50 px-5 py-4 sm:px-7">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white p-2 shadow-sm">
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.name}
                    className="h-full w-full object-contain mix-blend-multiply"
                    onError={(event) => {
                      event.currentTarget.src = FALLBACK_IMAGE;
                    }}
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-orange-500">
                    Selected Product
                  </p>

                  <h4 className="mt-1 text-lg font-bold text-gray-900">
                    {selectedItem.name}
                  </h4>

                  <p className="text-xs text-gray-500">
                    HS Code: {selectedItem.hs}
                  </p>
                </div>
              </div>
            </div>

            {/* Enquiry Form */}
            <form
              className="max-h-[calc(92vh-190px)] overflow-y-auto p-5 sm:p-7"
              onSubmit={(event) => {
                event.preventDefault();

                const formData = new FormData(event.currentTarget);

                const name = formData.get("name");
                const company = formData.get("company");
                const email = formData.get("email");
                const phone = formData.get("phone");
                const country = formData.get("country");
                const quantity = formData.get("quantity");
                const unit = formData.get("unit");
                const message = formData.get("message");

                const whatsappMessage = `Hello ARVANTA EXIM Team,

I would like to enquire about the following product:

Product: ${selectedItem.name}
HS Code: ${selectedItem.hs}

Customer Details:
Name: ${name}
Company: ${company}
Business Email: ${email}
WhatsApp / Phone: ${phone}
Country: ${country}

Requirement:
Quantity: ${quantity} ${unit}

Additional Requirements:
${message || "No additional requirements provided."}

Please share the price, availability, specifications, packaging details and export terms.

Regards,
${name}`;

                const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                  whatsappMessage,
                )}`;

                window.open(whatsappUrl, "_blank");
              }}
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Full Name */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Full Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Company */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Company Name
                  </label>

                  <input
                    type="text"
                    name="company"
                    required
                    placeholder="Enter company name"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Business Email
                  </label>

                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="company@example.com"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    WhatsApp / Phone
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Country
                  </label>

                  <input
                    type="text"
                    name="country"
                    required
                    placeholder="Enter your country"
                    className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                  />
                </div>

                {/* Quantity */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-gray-700">
                    Required Quantity
                  </label>

                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="quantity"
                      min="1"
                      required
                      placeholder="e.g. 500"
                      className="min-w-0 flex-1 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    />

                    <select
                      name="unit"
                      className="w-28 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-medium text-gray-700 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                    >
                      <option value="KG">KG</option>
                      <option value="MT">MT</option>
                      <option value="Container">Container</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="mt-5">
                <label className="mb-2 block text-sm font-semibold text-gray-700">
                  Additional Requirements
                </label>

                <textarea
                  name="message"
                  rows="4"
                  placeholder="Tell us about packaging, specifications, destination port or any other requirement..."
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-orange-400 focus:ring-2 focus:ring-orange-100"
                />
              </div>

              {/* Information */}
              <div className="mt-5 rounded-xl border border-orange-100 bg-orange-50 px-4 py-3">
                <p className="text-xs leading-5 text-gray-600">
                  By submitting this enquiry, WhatsApp will open with your
                  product and requirement details already prepared.
                </p>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-200 transition-all duration-300 hover:bg-orange-600 hover:shadow-orange-300"
              >
                Send Enquiry
                <span className="text-lg">→</span>
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;