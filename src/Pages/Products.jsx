

// import { useState } from "react";

// const FALLBACK_IMAGE =
//   "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp";

// const products = [
//   {
//     title: "Dry Ginger",
//     description:
//       "Premium dehydrated ginger products processed for consistent flavour, aroma and long shelf life.",
//     image:
//       "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp",
//     items: [
//       {
//         name: "Dry Ginger",
//         hsCode: "09101120",
//         image:
//           "https://cdn.dotpe.in/longtail/store-items/9237346/hZiXcfM2.webp",
//       },
//       {
//         name: "Ginger Powder",
//         hsCode: "09101210",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/image_7e0ef0a7-e256-45f1-847f-307d8107c67d.png?v=1773125334&width=1946",
//       },
//       {
//         name: "Ginger Slices",
//         hsCode: "09101120",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_slices.jpg",
//       },
//       {
//         name: "Ginger Flex",
//         hsCode: "09101120",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_shreds.jpg",
//       },
//     ],
//   },

//   {
//     title: "Dry Onion",
//     description:
//       "Carefully dehydrated onion products suitable for food processing, seasoning and export applications.",
//     image:
//       "https://spiceworld.ca/cdn/shop/products/image_77ff3fcb-d5f6-458f-85bc-8518bd943759_grande.jpg?v=1643986087",
//     items: [
//       {
//         name: "Dry Onion Flakes",
//         hsCode: "07122000",
//         image:
//           "https://spiceworld.ca/cdn/shop/products/image_77ff3fcb-d5f6-458f-85bc-8518bd943759_grande.jpg?v=1643986087",
//       },
//       {
//         name: "Dry Onion Chopped",
//         hsCode: "07122000",
//         image:
//           "https://rainydayfoods.com/media/catalog/product/cache/c68e9bbb2d73eded5f4972f8e568886c/c/h/choppedonionbc_1.jpg",
//       },
//       {
//         name: "Dry Onion Powder",
//         hsCode: "07122000",
//         image:
//           "https://cdnimg.webstaurantstore.com/images/products/large/840237/2865685.jpg",
//       },
//     ],
//   },

//   {
//     title: "Dry Potato",
//     description:
//       "Dehydrated potato ingredients designed for convenient storage, food manufacturing and culinary applications.",
//     image:
//       "https://d1l8km4g5s76x5.cloudfront.net/Production/exb_doc/2041/46951/2041_46951_46082_3882.png/fit-in/500x500",
//     items: [
//       {
//         name: "Dry Potato Cubes",
//         hsCode: "07129060",
//         image:
//           "https://d1l8km4g5s76x5.cloudfront.net/Production/exb_doc/2041/46951/2041_46951_46082_3882.png/fit-in/500x500",
//       },
//       {
//         name: "Potato Flakes",
//         hsCode: "07129060",
//         image:
//           "https://media.potatopro.com/potato-flake-2400.jpg?width=809",
//       },
//       {
//         name: "Potato Starch",
//         hsCode: "11081300",
//         image:
//           "https://rhbulk.com/cdn/shop/files/RHBulk_Potato_Starch_Angle_01292024_042.jpg?v=1720643000&width=1946",
//       },
//     ],
//   },

//   {
//     title: "Dry Garlic",
//     description:
//       "Premium dehydrated garlic with natural aroma and flavour for seasoning, food processing and export.",
//     image:
//       "https://zielonaesencja.pl/hpeciai/a9ce27edf936c85fbb74ce7244c384b6/pol_pl_Czosnek-suszony-platki-200-g-GREEN-ESSENCE-9178_5.jpg",
//     items: [
//       {
//         name: "Dry Garlic",
//         hsCode: "07129030",
//         image:
//           "https://zielonaesencja.pl/hpeciai/a9ce27edf936c85fbb74ce7244c384b6/pol_pl_Czosnek-suszony-platki-200-g-GREEN-ESSENCE-9178_5.jpg",
//       },
//       {
//         name: "Dry Garlic Powder",
//         hsCode: "07129030",
//         image:
//           "https://images.tcdn.com.br/img/img_prod/1298835/alho_desidratado_em_po_677_1_e402bf124c1ddce2b396bcbf326c9e48.jpg",
//       },
//       {
//         name: "Dry Garlic Flakes",
//         hsCode: "07129030",
//         image:
//           "https://zielonaesencja.pl/hpeciai/a9ce27edf936c85fbb74ce7244c384b6/pol_pl_Czosnek-suszony-platki-200-g-GREEN-ESSENCE-9178_5.jpg",
//       },
//     ],
//   },

//   {
//     title: "Dry Tomato",
//     description:
//       "Naturally dehydrated tomato products retaining rich colour, flavour and concentrated tomato goodness.",
//     image:
//       "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
//     items: [
//       {
//         name: "Dry Tomato Flakes",
//         hsCode: "07129090",
//         image:
//           "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
//       },
//       {
//         name: "Dry Tomato Powder",
//         hsCode: "07129090",
//         image:
//           "https://www.znaturalfoods.com/cdn-cgi/image/width%3D828/https%3A/r2.znaturalfoods.com/product-images/5212335898761/1762541225564-bjrxj3w9.webp",
//       },
//     ],
//   },

//   {
//     title: "Dry Banana",
//     description:
//       "Selected banana products processed into convenient dehydrated formats for food and snack applications.",
//     image:
//       "https://www.diana-company.sk/user/categories/orig/banan-chips.jpg",
//     items: [
//       {
//         name: "Green Banana",
//         hsCode: "08039000",
//         image:
//           "https://www.pexels.com/photo/traditional-indonesian-kolak-dish-with-bananas-36050910/",
//       },
//       {
//         name: "Dry Banana",
//         hsCode: "08039000",
//         image:
//           "https://www.diana-company.sk/user/categories/orig/banan-chips.jpg",
//       },
//       {
//         name: "Banana Flakes",
//         hsCode: "08039000",
//         image:
//           "https://r2.znaturalfoods.com/product-images/5212333047945/1762442556458-trpevbsn.webp",
//       },
//     ],
//   },

//   {
//     title: "Beetroot",
//     description:
//       "Finely processed beetroot powder with natural colour, flavour and versatility for food applications.",
//     image:
//       "https://va.nice-cdn.com/upload/image/product/large/default/raab-vitalfood-gmbh-ceklapor-bio-250-g-1371105-hu.jpg",
//     items: [
//       {
//         name: "Beetroot Powder",
//         hsCode: "07129090",
//         image:
//           "https://va.nice-cdn.com/upload/image/product/large/default/raab-vitalfood-gmbh-ceklapor-bio-250-g-1371105-hu.jpg",
//       },
//     ],
//   },

//   {
//     title: "Red Chilli",
//     description:
//       "Premium dried red chilli products available in whole, flake and powder forms for domestic and export markets.",
//     image:
//       "https://www.santamauraspice.com/cdn/shop/files/arbol-chile-whole-stemless-featured-image.png?v=1774432921&width=1100",
//     items: [
//       {
//         name: "Whole Dry Red Chilli",
//         hsCode: "09042110",
//         image:
//           "https://www.santamauraspice.com/cdn/shop/files/arbol-chile-whole-stemless-featured-image.png?v=1774432921&width=1100",
//       },
//       {
//         name: "Red Chilli Flakes",
//         hsCode: "09042219",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Chilli_Flakes..JPG",
//       },
//       {
//         name: "Red Chilli Powder",
//         hsCode: "09042211",
//         image:
//           "https://tiimg.tistatic.com/fp/1/007/970/pure-and-natural-a-grade-dried-spicy-red-chilli-powder-738.jpg",
//       },
//     ],
//   },

//   {
//     title: "Chickpeas",
//     description:
//       "High-quality chickpea varieties processed and selected for food processing, retail and export requirements.",
//     image:
//       "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
//     items: [
//       {
//         name: "Kabuli Chana",
//         hsCode: "07132010",
//         image:
//           "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
//       },
//       {
//         name: "Desi Chana",
//         hsCode: "07132020",
//         image:
//           "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
//       },
//       {
//         name: "Chickpea Split",
//         hsCode: "07132090",
//         image:
//           "https://commons.wikimedia.org/wiki/Special:Redirect/file/Split_Chickpeas.jpg",
//       },
//     ],
//   },

//   {
//     title: "Coir Pith",
//     description:
//       "Natural coir-based growing media suitable for horticulture, agriculture, nurseries and international markets.",
//     image:
//       "https://dojiw2m9tvv09.cloudfront.net/64148/product/fibradecoco15894.jpg",
//     items: [
//       {
//         name: "Coir Pith",
//         hsCode: "53050040",
//         image:
//           "https://dojiw2m9tvv09.cloudfront.net/64148/product/fibradecoco15894.jpg",
//       },
//       {
//         name: "Coco Peat",
//         hsCode: "53050040",
//         image:
//           "https://thumbnail.image.rakuten.co.jp/%400_mall/a-mederu/cabinet/imgrc0101955041.jpg",
//       },
//     ],
//   },
// ];

// const ProductImage = ({ src, alt, className = "" }) => {
//   const [imageSrc, setImageSrc] = useState(src);

//   return (
//     <img
//       src={imageSrc}
//       alt={alt}
//       loading="lazy"
//       onError={() => {
//         if (imageSrc !== FALLBACK_IMAGE) {
//           setImageSrc(FALLBACK_IMAGE);
//         }
//       }}
//       className={`object-contain mix-blend-multiply ${className}`}
//     />
//   );
// };

// const Product = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   return (
//     <section
//       id="products"
//       className="bg-white px-4 py-20 sm:px-6 lg:px-8"
//     >
//       <div className="mx-auto max-w-7xl">
//         {/* Header */}
//         <div className="mx-auto mb-14 max-w-3xl text-center">
//           <span className="mb-3 inline-block text-sm font-bold uppercase tracking-[0.25em] text-orange-500">
//             Our Products
//           </span>

//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
//             Premium{" "}
//             <span className="text-orange-500">
//               Dehydrated Products
//             </span>
//           </h2>

//           <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
//             High-quality natural and dehydrated products carefully processed
//             for domestic and international markets.
//           </p>
//         </div>

//         {/* Main Product Cards */}
//         <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//           {products.map((product) => (
//             <div
//               key={product.title}
//               className="group overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
//             >
//               {/* Image ONLY - no circle / no image background */}
//               <div className="flex h-52 w-full items-center justify-center">
//                 <ProductImage
//                   src={product.image}
//                   alt={product.title}
//                   className="h-full w-full transition-transform duration-500 group-hover:scale-105"
//                 />
//               </div>

//               <div className="pt-4">
//                 <h3 className="text-xl font-bold text-gray-900">
//                   {product.title}
//                 </h3>

//                 <p className="mt-2 min-h-[48px] line-clamp-2 text-sm leading-6 text-gray-500">
//                   {product.description}
//                 </p>

//                 <button
//                   type="button"
//                   onClick={() => setSelectedProduct(product)}
//                   className="mt-5 inline-flex items-center gap-2 font-semibold text-orange-500 transition-colors hover:text-orange-600"
//                 >
//                   View All
//                   <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">
//                     →
//                   </span>
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal */}
//       {selectedProduct && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
//           onClick={() => setSelectedProduct(null)}
//         >
//           <div
//             className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white p-6 shadow-2xl sm:p-8"
//             onClick={(event) => event.stopPropagation()}
//           >
//             {/* Close */}
//             <button
//               type="button"
//               onClick={() => setSelectedProduct(null)}
//               className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-2xl leading-none text-gray-600 transition hover:bg-orange-500 hover:text-white"
//             >
//               ×
//             </button>

//             {/* Modal Header */}
//             <div className="mb-8 pr-12">
//               <span className="text-sm font-bold uppercase tracking-[0.2em] text-orange-500">
//                 Product Range
//               </span>

//               <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//                 {selectedProduct.title}
//               </h2>
//             </div>

//             {/* Sub Products */}
//             <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
//               {selectedProduct.items.map((item) => (
//                 <div
//                   key={`${selectedProduct.title}-${item.name}`}
//                   className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 >
//                   {/* Product Image */}
//                   <div className="flex h-48 w-full items-center justify-center">
//                     <ProductImage
//                       src={item.image}
//                       alt={item.name}
//                       className="h-full w-full transition-transform duration-500 group-hover:scale-105"
//                     />
//                   </div>

//                   {/* Product Details */}
//                   <div className="mt-4">
//                     <h3 className="text-lg font-bold text-gray-900">
//                       {item.name}
//                     </h3>

//                     <div className="mt-3">
//                       <span className="text-xs font-medium uppercase tracking-wider text-gray-400">
//                         HS Code
//                       </span>

//                       <p className="mt-1 font-semibold text-gray-700">
//                         {item.hsCode}
//                       </p>
//                     </div>

//                     <a
//                       href={`mailto:info@example.com?subject=${encodeURIComponent(
//                         `Enquiry for ${item.name}`
//                       )}`}
//                       className="mt-5 flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition-all hover:bg-orange-600 hover:shadow-lg"
//                     >
//                       Enquire Now
//                     </a>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Bottom Close */}
//             <div className="mt-8 flex justify-end">
//               <button
//                 type="button"
//                 onClick={() => setSelectedProduct(null)}
//                 className="rounded-xl border border-gray-200 px-6 py-3 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Product;

import { useMemo, useState } from "react";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80";

const ENQUIRY_EMAIL = "info@example.com";

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
        name: "Ginger Slices",
        hs: "09101120",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Dried_ginger_slices.jpg",
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
        name: "Dry Onion Flakes",
        hs: "07122000",
        image:
          "https://spiceworld.ca/cdn/shop/products/image_77ff3fcb-d5f6-458f-85bc-8518bd943759_grande.jpg?v=1643986087",
      },
      {
        name: "Dry Onion Chopped",
        hs: "07122000",
        image:
          "https://rainydayfoods.com/media/catalog/product/cache/c68e9bbb2d73eded5f4972f8e568886c/c/h/choppedonionbc_1.jpg",
      },
      {
        name: "Dry Onion Powder",
        hs: "07122000",
        image:
          "https://cdnimg.webstaurantstore.com/images/products/large/840237/2865685.jpg",
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
        name: "Dry Potato Cubes",
        hs: "07129060",
        image:
          "https://d1l8km4g5s76x5.cloudfront.net/Production/exb_doc/2041/46951/2041_46951_46082_3882.png/fit-in/500x500",
      },
      {
        name: "Potato Flakes",
        hs: "07129060",
        image:
          "https://media.potatopro.com/potato-flake-2400.jpg?width=809",
      },
      {
        name: "Potato Starch",
        hs: "11081300",
        image:
          "https://images.tcdn.com.br/img/img_prod/1368438/fecula_de_batata_2785_1_f273080add13391d34dbf164f721a0f2.png",
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
          "https://zielonaesencja.pl/hpeciai/a9ce27edf936c85fbb74ce7244c384b6/pol_pl_Czosnek-suszony-platki-200-g-GREEN-ESSENCE-9178_5.jpg",
      },
      {
        name: "Dry Garlic Powder",
        hs: "07129030",
        image:
          "https://images.tcdn.com.br/img/img_prod/1298835/alho_desidratado_em_po_677_1_e402bf124c1ddce2b396bcbf326c9e48.jpg",
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
          "https://kitchenfusions.com/cdn/shop/files/AH_Tomato_Product_Bowl.jpg?v=1696359656",
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
        name: "Green Banana",
        hs: "08039000",
        image:
          "https://www.lanacion.com.ar/resizer/v2/el-consumo-de-platano-esta-ligado-a-multiples-IU56QSUX4ZABJEDJC26FF2LXHM.jpg?auth=6c5539ba964fb1a78ff0716085fe74f621f0851bc6d7c00a1d9b7fbb874aacb4&height=1200&quality=70&smart=true&width=1200",
      },
      {
        name: "Dry Banana",
        hs: "08039000",
        image:
          "https://www.diana-company.sk/user/categories/orig/banan-chips.jpg",
      },
      {
        name: "Banana Flakes",
        hs: "08039000",
        image:
          "https://r2.znaturalfoods.com/product-images/5212333047945/1762442556458-trpevbsn.webp",
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
          "https://va.nice-cdn.com/upload/image/product/large/default/raab-vitalfood-gmbh-ceklapor-bio-250-g-1371105-hu.jpg",
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
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/2014_Dried_chilli_flakes.jpg",
      },
      {
        name: "Red Chilli Powder",
        hs: "09042211",
        image:
          "https://2.wlimg.com/product_images/bc-full/2025/5/938578/red-chilli-powder-1748104607-8088913jfif",
      },
    ],
  },

  {
    id: 9,
    name: "Chickpeas",
    category: "Agricultural",
    featured: true,
    description:
      "Carefully selected chickpea varieties processed and supplied for domestic and export markets.",
    items: [
      {
        name: "Kabuli Chana",
        hs: "07132010",
        image:
          "https://commons.wikimedia.org/wiki/Special:Redirect/file/Kabuli%20Chana.jpg",
      },
      {
        name: "Desi Chana",
        hs: "07132020",
        image:
          "https://www.quickpantry.in/cdn/shop/products/desi-channa-unpolished-and-bold-loose-packing-quick-pantry.jpg?v=1710538064",
      },
      {
        name: "Chickpea Split",
        hs: "07132090",
        image:
          "https://adiosgluten.cl/2217-large_default/ambrosia-garbanzos-partidos.jpg",
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
          "https://dojiw2m9tvv09.cloudfront.net/64148/product/fibradecoco15894.jpg",
      },
      {
        name: "Coco Peat",
        hs: "53050040",
        image:
          "https://thumbnail.image.rakuten.co.jp/%400_mall/a-mederu/cabinet/imgrc0101955041.jpg",
      },
    ],
  },
];

const ProductImage = ({ src, alt, className = "" }) => {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <img
      src={imageSrc}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (imageSrc !== FALLBACK_IMAGE) {
          setImageSrc(FALLBACK_IMAGE);
        }
      }}
      className={`h-full w-full object-contain mix-blend-multiply ${className}`}
    />
  );
};

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    "Dehydrated",
    "Spices",
    "Agricultural",
    "Natural",
  ];

  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return products;

    return products.filter(
      (product) => product.category === activeCategory
    );
  }, [activeCategory]);

  const totalVariants = products.reduce(
    (total, product) => total + product.items.length,
    0
  );

  return (
    // <section
    //   id="products"
    //   className="relative overflow-hidden bg-white px-4 py-20 sm:px-6 lg:px-8"
    // >
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
            Explore our carefully processed range of dehydrated foods,
            spices, agricultural products and natural products.
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
            <div className="text-3xl font-extrabold text-orange-500">
              100%
            </div>
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
              Tell us your product requirement, quantity and specifications.
              Our team will help you with the right solution.
            </p>

            <a
              href={`mailto:${ENQUIRY_EMAIL}?subject=Request%20for%20Product%20Quote`}
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-500 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-900/30 transition-all hover:bg-orange-400 hover:shadow-orange-500/30"
            >
              Request a Quote
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Product Modal */}
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

            {/* Modal Content */}
            <div className="max-h-[calc(90vh-100px)] overflow-y-auto p-5 sm:p-7">
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {selectedProduct.items.map((item) => (
                  <div
                    key={item.name}
                    className="group overflow-hidden rounded-2xl border border-gray-100 bg-white transition-all duration-300 hover:border-orange-200 hover:shadow-xl hover:shadow-orange-100/50"
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

                      <a
                        href={`mailto:${ENQUIRY_EMAIL}?subject=Enquiry%20for%20${encodeURIComponent(
                          item.name
                        )}`}
                        className="mt-4 flex w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-orange-600"
                      >
                        Enquire Now
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;