"use client";

import { useLanguage } from "../i18n/LanguageContext";
import { productTranslations } from "../i18n/translations";
import ProductCard from "./ProductCard";

const productImages = [
  "/images/77d57693-c61d-49ca-9496-f73fe0c15d7e.jpeg",
  "/images/a11f83e5-ac35-4af9-ace9-94da1dcf5f52.jpeg",
  "/images/d519ca9c-ee60-4cd8-a2c8-f689be87abca.jpeg",
  "/images/e485427f-ae1d-4484-9d0e-719518d28306.jpeg",
];

const buttonKeys = [
  "products.shopChickpeas",
  "products.shopTomatoes",
  "products.shopTuna",
  "products.shopCorn",
];

export default function ProductsSection() {
  const { t, locale, isReady } = useLanguage();
  const isRTL = locale === "fa" || locale === "ps";
  
  // Get translations for current locale
  const translations = productTranslations[locale];

  const products = [
    { id: "home-1", imageUrl: productImages[0], reverse: false, buttonKey: buttonKeys[0] },
    { id: "home-2", imageUrl: productImages[1], reverse: true, buttonKey: buttonKeys[1] },
    { id: "home-3", imageUrl: productImages[2], reverse: false, buttonKey: buttonKeys[2] },
    { id: "home-4", imageUrl: productImages[3], reverse: true, buttonKey: buttonKeys[3] },
  ];

  // Don't render until locale is ready to avoid showing English first
  if (!isReady) {
    return (
      <section className="w-full py-24 bg-[#f6f8f6] dark:bg-[#102216]">
        <div className="flex justify-center">
          <div className="animate-pulse text-[#1A1A1A]/40 dark:text-gray-500">Loading...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-24 bg-[#f6f8f6] dark:bg-[#102216] overflow-hidden relative">
      {/* Decorative tomato spill elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top-left blob */}
        <div className={`absolute top-[5%] w-[300px] h-[300px] ${isRTL ? 'right-[-5%]' : 'left-[-5%]'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/10 via-[#c1121f]/10 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph" />
        </div>
        
        {/* Middle-right blob */}
        <div className={`absolute top-[40%] w-[200px] h-[200px] ${isRTL ? 'left-[-3%]' : 'right-[-3%]'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#ff6b6b]/10 via-[#e63946]/10 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-reverse" />
        </div>
        
        {/* Bottom decorative dots */}
        <div className={`absolute bottom-[10%] w-8 h-8 bg-[#e63946]/20 rounded-full animate-float-slow ${isRTL ? 'right-[10%]' : 'left-[10%]'}`} />
        <div className={`absolute bottom-[15%] w-5 h-5 bg-[#c1121f]/15 rounded-full animate-float ${isRTL ? 'right-[15%]' : 'left-[15%]'}`} />
        <div className={`absolute top-[60%] w-6 h-6 bg-[#ff6b6b]/15 rounded-full animate-pulse-slow ${isRTL ? 'left-[8%]' : 'right-[8%]'}`} />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="flex flex-col max-w-[1280px] w-full px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-[#1A1A1A] dark:text-white text-3xl md:text-5xl font-bold tracking-tight">
                {t("products.ourCollection")}
              </h2>
              <p className="text-[#1A1A1A]/60 dark:text-gray-400 max-w-lg mt-4 text-lg">
                {t("products.collectionDescription")}
              </p>
            </div>
            <a href="/products" className="group flex items-center gap-2 text-[#13ec5b] font-bold hover:gap-3 transition-all">
              {t("products.viewCatalog")}{" "}
              <span className="material-symbols-outlined text-sm font-bold rtl:rotate-180">arrow_forward</span>
            </a>
          </div>

          {/* Products */}
          <div className="flex flex-col gap-32">
            {products.map((product, index) => {
              const productData = translations?.[product.id];
              if (!productData) return null;
              return (
                <ProductCard
                  key={index}
                  category={productData.subtitle}
                  title={productData.name}
                  description={productData.description}
                  imageUrl={product.imageUrl}
                  features={productData.features}
                  buttonText={t(product.buttonKey)}
                  reverse={product.reverse}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
