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
  const { t, locale } = useLanguage();
  const translations = productTranslations[locale];

  const products = [
    { id: "home-1", imageUrl: productImages[0], reverse: false, buttonKey: buttonKeys[0] },
    { id: "home-2", imageUrl: productImages[1], reverse: true, buttonKey: buttonKeys[1] },
    { id: "home-3", imageUrl: productImages[2], reverse: false, buttonKey: buttonKeys[2] },
    { id: "home-4", imageUrl: productImages[3], reverse: true, buttonKey: buttonKeys[3] },
  ];

  return (
    <section className="w-full py-24 bg-[#f6f8f6] dark:bg-[#102216] overflow-hidden">
      <div className="flex justify-center">
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
              const productData = translations[product.id];
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
