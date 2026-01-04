"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";
import { productTranslations } from "../i18n/translations";

const products = [
  {
    id: "1",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuC1My1MIE_o3km3IM2cv9UVuFNcBm0o2P3J-MTOzUUkT_fUPJA6n0Tse6G4w_KGMnBHpkrYcKIaAFCOgj3xJwAhojnAkBW0ef2Xs8Q6OXnk2I8oRsAw4e6afulXfFx5npBZV547PoDreTIjK4ifTd8QJ0Rt0N0CPZ481j9_2BDMdZOt6wDBCnYsryw8xqD9-PZ9TddOGaVqP_5taWNc30E1K8pIiy2ivRhCgr6XaJcGbKTqi8641B-G-vdA-wH8LTUyncVwW0y6zg",
    category: "Vegetables",
  },
  {
    id: "2",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB0hM8iBd7LuvOvGSMJ4G6GXi017Tb6ZRKDcH4qP7RuTt1068POBnHcDmXJ2xB48OktFP4Yr8ZqVmNFpRgRovKKAg_JkVf6FIE7vUSjahuT6L46O2zdOhBUmc1QZXiGLuvq4q0_ffpCBtcvr6oQvqqZPZPdqjen6ehmtD35q6VCRAgKfk4GJIdKAPe28Wm-NlDSTvo-qcp8AP3oLeqRyy3JY1HsPWD3Zi0m3jlCrHGIgx7WcQN-_99tjocY3skHDkodJ4e-fiEO7A",
    category: "Vegetables",
  },
  {
    id: "3",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBgZbwibmb5JOAubYn-pNYFYCTd11bQyiStOH3HmXHLhyPcHCZxpVrCIIui4UMMuGudXse6oceR6w3OX8t4E-Th722OUIW5TMZz4xItBPyIUpZ0DYtqqCeFcOJffF9dtrHssNoc91EqSA3toiPPykmWqJfrsQrzbAy46BstGRU01-kIanRL--a6c1eTwPC53H0mDAYEp8HJabF8dkPxcvKVAA4CQLLAVDGFKBL0czCbQZr591ZxkxIPPP3tNV9mesm1dhTt5pK7Q",
    category: "Vegetables",
  },
  {
    id: "4",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCQKudlrtGHwiYLw0H9CRLDigOshepe4JY-gfOvZcRjFFNxDHtMlj5fTh0Fiizqz7sSJGZwnZptNkJzNoI3a3AToJOpJ02DZ4C7ULtmQ0yyBzFxC8NYk7_IJ83ppiFTneGEsB8GjLY4woHrcdfXzuT-eUdnQTdCVrlkqhALmJT187fXzUBeYvyjGRPVZERJ1TnMIf7lOVoFe1ftBc5ONVLgI0WQkPFI7864mB9In-z-xjJ5dV6hgvAARwnHENUYW-jM3hBK3PXDPg",
    category: "Spices",
  },
  {
    id: "5",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQShtiYzZ493IxVKAsxM6HkXhDBc0zKlvnuMeVoZ3PPlwvCQPQRRHqM8z1Ur2OisVDEjht9piSFl8pvdCXnAsD7JsXjLStbd8lwXQZxf8FRPX7Jul8l_y9l_4hGWBDk6A9mwWCmpwpvp__pkkOLE62SS0qaVrhbXciywhYXeMcSel_XF54tZ_hlqVlDOkzFnGj8-NpxXttNRSh_hi6AE4axfTZqMV1-2Z-fypKEPnYsvm4YqERILEGEap7gyM1wbk69HVxLdGIFw",
    category: "Vegetables",
  },
  {
    id: "6",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCVElJA6ryIWs9xORWTsT29staG8DXqzpCWJfuOayiYm134gze0YbrfU7qcNs93Hkx6eAX-6jROPK295lDl-LowFXkfVspBqzSSCDoourV0pq21unEv-X9RJcKcEGj6kpP5eWAdMv03u96yFZySm2vxjmqxoi-cmDYEEogqQRpvncws3pmENdNLAXfayPxhRe9w75nLwxkR37AUThnFOQoKrN4bUyl0sZinbbAIKaf_9Z95Lw4sdKG3jI0z4OMpmqZI6z5kGiobUw",
    category: "Spices",
  },
  {
    id: "7",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDkqUzT2bKZl-KpXwCVwcgkMVs3xgdjgWOan_gC0XQCDGif0xLiqGrVl7exsM4ryYyVhX2c3aQNAMAx8rIW_ZFcjAEs0uDHs7tQQohXsjw7o8ppNJkWJk3I7_oJn4qL-PJXycv_773DkD-b33Y0hc5bW9Tqhs8yHyacTJHmXp-tRcOaMCCr3-6SodP-2HnoNwrkvW-5tGM3lRnYOg4PpQbR4gwmV2-XpuekbExrBJN8voc30l-Td72nnvzntOVhKfii4othMMDMTw",
    category: "Vegetables",
  },
  {
    id: "8",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuBMjW7TlHCgWdBUFStjixx_q0hMznO7ZY_icym-guK7BFHWE6jZvxarDYRqMyY6JtM2SlRHVr3nRGYNeOFPWImupayQR-tsiGNyA947ipYydtZViBi4wl1Ev018Bs8-nbTNwYSSwxAyxqe66PAKMMws0BlKqgXjfkYoig7RVPZbrrXQ0aDVKGDR0Su8QIH4Al235ETLfi1oTyA_4YALPQm7B1bVkSXTcmfDou3rum4FuxtIRiInoi8yBO5JSJr1ZbcPGqYnp7yIjQ",
    category: "Vegetables",
  },
];

export default function ProductsPage() {
  const { t, locale, dir } = useLanguage();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Get category translation keys
  const categoryKeys: Record<string, string> = {
    "All": "products.all",
    "Vegetables": "products.vegetables",
    "Fish": "products.fish",
    "Spices": "products.spices",
    "Sets": "products.sets",
  };

  const categories = ["All", "Vegetables", "Fish", "Spices", "Sets"];

  // Get translated product data
  const getProductTranslation = (productId: string) => {
    return productTranslations[locale]?.[productId] || productTranslations.en[productId];
  };

  const filteredProducts = products.filter((product) => {
    const productData = getProductTranslation(product.id);
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = productData?.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      productData?.subtitle?.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#1A1A1A] dark:text-gray-100" dir={dir}>
      <Header />
      
      <main className="flex-grow flex flex-col items-center w-full px-6 md:px-12 lg:px-40 py-10">
        <div className="flex flex-col max-w-[1200px] w-full flex-1">
          {/* Hero Section */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
            <div className="flex flex-col gap-4 max-w-2xl">
              <h1 className="text-[#1A1A1A] dark:text-white text-5xl md:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                {t("products.title")}
                <span className="block w-24 h-2 mt-2 bg-[#13ec5b]"></span>
              </h1>
              <p className="text-[#1A1A1A]/60 dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-lg mt-2">
                {t("products.description")}
              </p>
            </div>
          </section>

          {/* Search and Filters */}
          <section className="mb-10 w-full space-y-6">
            {/* Search Bar */}
            <div className="w-full">
              <label className="flex flex-col h-14 w-full">
                <div className="flex w-full flex-1 items-stretch rounded-lg h-full shadow-sm">
                  <div className={`text-[#1A1A1A]/60 dark:text-gray-500 flex border-none bg-white dark:bg-[#1a2e22] items-center justify-center px-4 ${dir === 'rtl' ? 'rounded-r-lg' : 'rounded-l-lg'}`}>
                    <span className="material-symbols-outlined text-[24px]">search</span>
                  </div>
                  <input
                    className={`flex w-full min-w-0 flex-1 resize-none overflow-hidden ${dir === 'rtl' ? 'rounded-l-lg' : 'rounded-r-lg'} text-[#1A1A1A] dark:text-white focus:outline-0 focus:ring-2 focus:ring-[#13ec5b]/50 border-none bg-white dark:bg-[#1a2e22] h-full placeholder:text-[#1A1A1A]/40 dark:placeholder:text-gray-600 px-4 text-base font-medium leading-normal transition-all`}
                    placeholder={t("products.searchPlaceholder")}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </label>
            </div>

            {/* Category Filters and Sort */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex gap-3 overflow-x-auto hide-scroll pb-2 sm:pb-0">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 transition-colors ${
                      activeCategory === category
                        ? "border border-[#13ec5b] bg-[#13ec5b]/10"
                        : "border border-transparent bg-white dark:bg-[#1a2e22] hover:bg-[#e8ecea] dark:hover:bg-[#233b2c]"
                    }`}
                  >
                    <p className={`text-sm leading-normal ${
                      activeCategory === category
                        ? "font-bold text-[#1A1A1A] dark:text-white"
                        : "font-medium text-[#1A1A1A] dark:text-gray-300"
                    }`}>
                      {t(categoryKeys[category])}
                    </p>
                  </button>
                ))}
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-[#1A1A1A]/60 dark:text-gray-500">{t("products.sortBy")}</span>
                <button className="flex items-center gap-1 font-semibold text-[#1A1A1A] dark:text-white hover:text-[#13ec5b]">
                  {t("products.featured")} <span className="material-symbols-outlined text-[18px]">expand_more</span>
                </button>
              </div>
            </div>
          </section>

          {/* Products Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12 pb-20">
            {filteredProducts.map((product) => {
              const productData = getProductTranslation(product.id);
              return (
                <div key={product.id} className="group flex flex-col gap-4 cursor-pointer">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-[#eef2f0] dark:bg-[#1a2e22]">
                    <div
                      className="w-full h-full bg-center bg-no-repeat bg-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url("${product.imageUrl}")` }}
                    ></div>
                    {productData?.badge && (
                      <div className={`absolute top-3 ${dir === 'rtl' ? 'right-3' : 'left-3'}`}>
                        <span className="text-xs font-bold px-2 py-1 rounded-md bg-[#13ec5b] text-[#102216]">
                          {productData.badge}
                        </span>
                      </div>
                    )}
                    <div className={`absolute top-3 ${dir === 'rtl' ? 'left-3' : 'right-3'} opacity-0 group-hover:opacity-100 transition-opacity`}>
                      <div className="bg-white/90 dark:bg-black/70 backdrop-blur-sm p-2 rounded-full shadow-sm text-[#1A1A1A] dark:text-white">
                        <span className="material-symbols-outlined text-[20px] block">favorite</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] dark:text-white text-lg font-bold leading-tight group-hover:text-[#13ec5b] transition-colors mb-1">
                      {productData?.name}
                    </p>
                    <p className="text-[#1A1A1A]/60 dark:text-gray-400 text-sm font-normal leading-normal mb-3">
                      {productData?.subtitle}
                    </p>
                    <Link
                      href={`/products/${product.id}`}
                      className={`inline-flex items-center text-sm font-bold text-[#1A1A1A] dark:text-white border-b-2 border-[#13ec5b]/20 hover:border-[#13ec5b] pb-0.5 transition-all ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
                    >
                      {t("products.viewDetails")}{" "}
                      <span className={`material-symbols-outlined text-[16px] ${dir === 'rtl' ? 'mr-1 rotate-180' : 'ml-1'} transition-transform group-hover:translate-x-1`}>
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
