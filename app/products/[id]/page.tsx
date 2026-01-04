"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../i18n/LanguageContext";
import { productTranslations } from "../../i18n/translations";

const productsBase: Record<string, {
  id: number;
  imageUrl: string;
  category: string;
  nutrition: { label: string; value: string }[];
}> = {
  "1": {
    id: 1,
    imageUrl: "/images/62712c9a-ea34-4df0-92a2-cb81183a33d8.jpeg",
    category: "Vegetables",
    nutrition: [{ label: "Calories", value: "45" }, { label: "Total Sugar", value: "10g" }, { label: "Sodium", value: "5mg" }],
  },
  "2": {
    id: 2,
    imageUrl: "/images/6790873e-18fe-460c-9e83-ecd26d7219a3.jpeg",
    category: "Vegetables",
    nutrition: [{ label: "Calories", value: "50" }, { label: "Total Sugar", value: "12g" }, { label: "Sodium", value: "0mg" }],
  },
  "3": {
    id: 3,
    imageUrl: "/images/77d57693-c61d-49ca-9496-f73fe0c15d7e.jpeg",
    category: "Vegetables",
    nutrition: [{ label: "Calories", value: "120" }, { label: "Protein", value: "7g" }, { label: "Fiber", value: "6g" }],
  },
  "4": {
    id: 4,
    imageUrl: "/images/a11f83e5-ac35-4af9-ace9-94da1dcf5f52.jpeg",
    category: "Spices",
    nutrition: [{ label: "Calories", value: "35" }, { label: "Protein", value: "3g" }, { label: "Calcium", value: "10%" }],
  },
  "5": {
    id: 5,
    imageUrl: "/images/d519ca9c-ee60-4cd8-a2c8-f689be87abca.jpeg",
    category: "Vegetables",
    nutrition: [{ label: "Calories", value: "30" }, { label: "Sodium", value: "20mg" }, { label: "Lycopene", value: "High" }],
  },
  "6": {
    id: 6,
    imageUrl: "/images/e485427f-ae1d-4484-9d0e-719518d28306.jpeg",
    category: "Spices",
    nutrition: [{ label: "Calories", value: "48" }, { label: "Total Sugar", value: "11g" }, { label: "Sodium", value: "3mg" }],
  },
  "7": {
    id: 7,
    imageUrl: "/images/fb0124f4-c73a-4706-a675-1e2b044a0f39.jpeg",
    category: "Vegetables",
    nutrition: [{ label: "Calories", value: "110" }, { label: "Protein", value: "6g" }, { label: "Sodium", value: "70mg" }],
  },
  "8": {
    id: 8,
    imageUrl: "/images/hero.jpeg",
    category: "Vegetables",
    nutrition: [{ label: "Calories", value: "60" }, { label: "Total Sugar", value: "14g" }, { label: "Vitamin C", value: "8%" }],
  },
};

const relatedProductIds = ["3", "5", "2"];

export default function ProductDetailPage() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "fa" || locale === "ps";
  const translations = productTranslations[locale];
  const params = useParams();
  const productId = params.id as string;
  const productBase = productsBase[productId];
  const productTrans = translations[productId];
  const [openAccordion, setOpenAccordion] = useState<string | null>("ingredients");
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!productBase || !productTrans) {
    return (
      <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216]">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">{t("product.notFound")}</h1>
            <Link href="/products" className="text-[#13ec5b] font-bold hover:underline">
              {t("product.backToProducts")}
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  // Build related products with translations
  const relatedProducts = relatedProductIds
    .filter(id => id !== productId)
    .map(id => {
      const base = productsBase[id];
      const trans = translations[id];
      return {
        id,
        imageUrl: base.imageUrl,
        name: trans.name,
        subtitle: trans.subtitle,
      };
    });

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#1A1A1A] dark:text-gray-100 overflow-hidden">
      <Header />

      {/* Decorative tomato spill elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-[5%] w-[500px] h-[500px] transition-all duration-[2000ms] ${isRTL ? 'left-[-15%]' : 'right-[-15%]'} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/10 via-[#c1121f]/6 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph" />
          <div className="absolute inset-[20%] bg-gradient-to-br from-[#ff6b6b]/8 via-[#e63946]/4 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-reverse" />
        </div>
        <div className={`absolute top-[20%] transition-all duration-[1500ms] delay-300 ${isRTL ? 'right-[5%]' : 'left-[5%]'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="w-12 h-12 bg-gradient-to-br from-[#ff6b6b]/25 to-[#c1121f]/15 rounded-full animate-float-slow shadow-lg shadow-red-500/10">
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-2.5 h-1.5 bg-[#2d6a4f]/30 rounded-t-full" />
          </div>
        </div>
        <div className={`absolute top-[30%] transition-all duration-[2000ms] delay-500 ${isRTL ? 'left-[8%]' : 'right-[8%]'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="w-5 h-12 bg-gradient-to-b from-[#e63946]/12 to-[#c1121f]/6 rounded-b-full animate-drip-1" />
        </div>
        <div className={`absolute top-[45%] w-4 h-4 bg-[#e63946]/12 rounded-full transition-all duration-1000 delay-[700ms] ${isRTL ? 'right-[10%]' : 'left-[10%]'} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
        <div className={`absolute bottom-[30%] w-3 h-3 bg-[#ff6b6b]/10 rounded-full animate-pulse-slow ${isRTL ? 'left-[15%]' : 'right-[15%]'}`} />
        <div className={`absolute bottom-[10%] w-[350px] h-[350px] ${isRTL ? 'right-[-10%]' : 'left-[-10%]'}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b6b]/8 via-[#e63946]/4 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-reverse" />
        </div>
      </div>
      
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 lg:py-12 flex-grow relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Visuals */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:sticky lg:top-32 h-fit">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
              <Link href="/products" className="text-[#1A1A1A]/60 hover:text-[#13ec5b] font-medium transition-colors">
                {t("product.shop")}
              </Link>
              <span className="text-[#1A1A1A]/30">/</span>
              <span className="text-[#1A1A1A] font-semibold">{productTrans.name}</span>
            </div>

            {/* Main Image */}
            <div className="relative w-full aspect-square bg-[#ecefe0] dark:bg-[#1a2e22] rounded-2xl overflow-hidden group shadow-sm ring-1 ring-black/5">
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <img
                  alt={productTrans.name}
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 hover:scale-105"
                  src={productBase.imageUrl}
                />
              </div>
              {/* Share button */}
              <div className="absolute top-6 right-6">
                <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#13ec5b] hover:text-white transition-colors group">
                  <span className="material-symbols-outlined text-[#1A1A1A] group-hover:text-white text-xl">share</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="lg:col-span-5 flex flex-col h-full pt-2">
            {/* Category */}
            <span className="text-[#13ec5b] font-bold uppercase tracking-widest text-sm mb-4">
              {productBase.category}
            </span>

            {/* Headline */}
            <h1 className="text-[#1A1A1A] dark:text-white text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-6">
              {productTrans.name}
            </h1>

            {/* Description */}
            <div className="mb-8 pb-8 border-b border-[#f0f4f2] dark:border-white/10">
              <p className="text-[#1A1A1A]/80 dark:text-gray-300 text-lg leading-relaxed font-medium">
                {productTrans.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-10">
              <h3 className="text-lg font-bold text-[#1A1A1A] dark:text-white mb-4">{t("product.features")}</h3>
              <ul className="space-y-3">
                {productTrans.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-base font-medium text-[#1A1A1A] dark:text-white">
                    <span className="material-symbols-outlined text-[#13ec5b] text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Accordions */}
            <div className="space-y-4">
              {/* Ingredients */}
              <div className="bg-white dark:bg-[#1a2e22] rounded-lg border border-[#f0f4f2] dark:border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "ingredients" ? null : "ingredients")}
                  className="flex cursor-pointer items-center justify-between p-5 font-bold text-[#1A1A1A] dark:text-white hover:bg-[#fafbfc] dark:hover:bg-[#233b2c] transition-colors w-full text-start"
                >
                  <span>{t("product.ingredients")}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openAccordion === "ingredients" ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openAccordion === "ingredients" && (
                  <div className="px-5 pb-5 text-[#1A1A1A]/70 dark:text-gray-300 text-base leading-relaxed">
                    {productTrans.ingredients}<br /><br />
                    <strong>{t("product.allergens")}</strong> {productTrans.allergens}
                  </div>
                )}
              </div>

              {/* Nutrition */}
              <div className="bg-white dark:bg-[#1a2e22] rounded-lg border border-[#f0f4f2] dark:border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "nutrition" ? null : "nutrition")}
                  className="flex cursor-pointer items-center justify-between p-5 font-bold text-[#1A1A1A] dark:text-white hover:bg-[#fafbfc] dark:hover:bg-[#233b2c] transition-colors w-full text-start"
                >
                  <span>{t("product.nutrition")}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openAccordion === "nutrition" ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openAccordion === "nutrition" && (
                  <div className="px-5 pb-5 text-[#1A1A1A]/70 dark:text-gray-300 text-base leading-relaxed">
                    {productBase.nutrition.map((item, index) => (
                      <div key={index} className={`flex justify-between py-2 ${index < productBase.nutrition.length - 1 ? "border-b border-gray-100 dark:border-white/10" : ""}`}>
                        <span>{item.label}</span>
                        <span className="font-bold text-[#1A1A1A] dark:text-white">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Pairing */}
              <div className="bg-white dark:bg-[#1a2e22] rounded-lg border border-[#f0f4f2] dark:border-white/10 overflow-hidden">
                <button
                  onClick={() => setOpenAccordion(openAccordion === "pairing" ? null : "pairing")}
                  className="flex cursor-pointer items-center justify-between p-5 font-bold text-[#1A1A1A] dark:text-white hover:bg-[#fafbfc] dark:hover:bg-[#233b2c] transition-colors w-full text-start"
                >
                  <span>{t("product.pairing")}</span>
                  <span className={`material-symbols-outlined transition-transform duration-300 ${openAccordion === "pairing" ? "rotate-180" : ""}`}>
                    expand_more
                  </span>
                </button>
                {openAccordion === "pairing" && (
                  <div className="px-5 pb-5 text-[#1A1A1A]/70 dark:text-gray-300 text-base leading-relaxed">
                    {productTrans.pairing}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24 lg:mt-32 mb-12">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white">{t("product.relatedProducts")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`} className="group block">
                <div className="bg-[#f0f4f2] dark:bg-[#1a2e22] rounded-xl aspect-[4/3] flex items-center justify-center mb-4 relative overflow-hidden">
                  <img
                    alt={relatedProduct.name}
                    className="w-2/3 h-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                    src={relatedProduct.imageUrl}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#e63946]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-[#1A1A1A]/60 dark:text-gray-400 text-sm">{relatedProduct.subtitle}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
