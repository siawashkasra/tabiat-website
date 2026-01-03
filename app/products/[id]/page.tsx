"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useLanguage } from "../../i18n/LanguageContext";
import { productTranslations } from "../../i18n/translations";

const productsBase: Record<string, {
  id: number;
  price: string;
  originalPrice?: string;
  imageUrl: string;
  thumbnails: string[];
  category: string;
  badgeStyle?: string;
  rating: number;
  reviews: number;
  nutrition: { label: string; value: string }[];
}> = {
  "1": {
    id: 1,
    price: "$8.00",
    imageUrl: "/images/62712c9a-ea34-4df0-92a2-cb81183a33d8.jpeg",
    thumbnails: [],
    category: "Vegetables",
    rating: 4.7,
    reviews: 89,
    nutrition: [{ label: "Calories", value: "45" }, { label: "Total Sugar", value: "10g" }, { label: "Sodium", value: "5mg" }],
  },
  "2": {
    id: 2,
    price: "$9.50",
    imageUrl: "/images/6790873e-18fe-460c-9e83-ecd26d7219a3.jpeg",
    thumbnails: [],
    category: "Vegetables",
    rating: 4.9,
    reviews: 156,
    nutrition: [{ label: "Calories", value: "50" }, { label: "Total Sugar", value: "12g" }, { label: "Sodium", value: "0mg" }],
  },
  "3": {
    id: 3,
    price: "$4.50",
    imageUrl: "/images/77d57693-c61d-49ca-9496-f73fe0c15d7e.jpeg",
    thumbnails: [],
    category: "Vegetables",
    rating: 4.6,
    reviews: 203,
    nutrition: [{ label: "Calories", value: "120" }, { label: "Protein", value: "7g" }, { label: "Fiber", value: "6g" }],
  },
  "4": {
    id: 4,
    price: "$7.00",
    imageUrl: "/images/a11f83e5-ac35-4af9-ace9-94da1dcf5f52.jpeg",
    thumbnails: [],
    category: "Spices",
    rating: 4.8,
    reviews: 67,
    nutrition: [{ label: "Calories", value: "35" }, { label: "Protein", value: "3g" }, { label: "Calcium", value: "10%" }],
  },
  "5": {
    id: 5,
    price: "$5.50",
    imageUrl: "/images/d519ca9c-ee60-4cd8-a2c8-f689be87abca.jpeg",
    thumbnails: [],
    category: "Vegetables",
    badgeStyle: "dark",
    rating: 4.9,
    reviews: 312,
    nutrition: [{ label: "Calories", value: "30" }, { label: "Sodium", value: "20mg" }, { label: "Lycopene", value: "High" }],
  },
  "6": {
    id: 6,
    price: "$8.50",
    imageUrl: "/images/e485427f-ae1d-4484-9d0e-719518d28306.jpeg",
    thumbnails: [],
    category: "Spices",
    rating: 4.8,
    reviews: 94,
    nutrition: [{ label: "Calories", value: "48" }, { label: "Total Sugar", value: "11g" }, { label: "Sodium", value: "3mg" }],
  },
  "7": {
    id: 7,
    price: "$4.00",
    imageUrl: "/images/fb0124f4-c73a-4706-a675-1e2b044a0f39.jpeg",
    thumbnails: [],
    category: "Vegetables",
    rating: 4.5,
    reviews: 178,
    nutrition: [{ label: "Calories", value: "110" }, { label: "Protein", value: "6g" }, { label: "Sodium", value: "70mg" }],
  },
  "8": {
    id: 8,
    price: "$10.00",
    imageUrl: "/images/hero.jpeg",
    thumbnails: [],
    category: "Vegetables",
    rating: 4.9,
    reviews: 142,
    nutrition: [{ label: "Calories", value: "60" }, { label: "Total Sugar", value: "14g" }, { label: "Vitamin C", value: "8%" }],
  },
};

const relatedProductIds = ["3", "5", "2"];

export default function ProductDetailPage() {
  const { t, locale } = useLanguage();
  const translations = productTranslations[locale];
  const params = useParams();
  const productId = params.id as string;
  const productBase = productsBase[productId];
  const productTrans = translations[productId];
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>("ingredients");

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

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>);
    }
    if (hasHalf) {
      stars.push(<span key="half" className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>star_half</span>);
    }
    return stars;
  };

  // Build related products with translations
  const relatedProducts = relatedProductIds
    .filter(id => id !== productId)
    .map(id => {
      const base = productsBase[id];
      const trans = translations[id];
      return {
        id,
        price: base.price,
        imageUrl: base.imageUrl,
        name: trans.name,
        subtitle: trans.subtitle,
      };
    });

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#1A1A1A] dark:text-gray-100">
      <Header />
      
      <main className="max-w-[1440px] mx-auto px-6 lg:px-10 py-8 lg:py-12 flex-grow">
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
              {/* Overlay Controls */}
              <div className="absolute top-6 right-6 flex flex-col gap-3">
                <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#13ec5b] transition-colors">
                  <span className="material-symbols-outlined text-[#1A1A1A] text-xl">favorite</span>
                </div>
                <div className="size-10 bg-white rounded-full flex items-center justify-center shadow-md cursor-pointer hover:bg-[#13ec5b] transition-colors">
                  <span className="material-symbols-outlined text-[#1A1A1A] text-xl">share</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Product Details */}
          <div className="lg:col-span-5 flex flex-col h-full pt-2">
            {/* Tags */}
            {productTrans.badge && (
              <div className="flex items-center gap-2 mb-4">
                <span className={`text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider ${
                  productBase.badgeStyle === "dark" 
                    ? "bg-[#102216] text-white" 
                    : "bg-[#13ec5b]/20 text-[#1A1A1A]"
                }`}>
                  {productTrans.badge}
                </span>
              </div>
            )}

            {/* Headline */}
            <h1 className="text-[#1A1A1A] dark:text-white text-4xl lg:text-5xl font-extrabold leading-[1.1] mb-4">
              {productTrans.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6 cursor-pointer group">
              <div className="flex items-center gap-0.5 text-[#1A1A1A]">
                {renderStars(productBase.rating)}
              </div>
              <p className="text-sm font-medium underline decoration-[#1A1A1A]/30 underline-offset-4 group-hover:decoration-[#13ec5b] transition-all">
                {productBase.rating} ({productBase.reviews} {t("product.reviews")})
              </p>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-8 border-b border-[#f0f4f2] dark:border-white/10 pb-8">
              <span className="text-3xl font-bold text-[#1A1A1A] dark:text-white">{productBase.price}</span>
              <span className="text-sm text-[#1A1A1A]/60 ms-2">{t("product.perUnit")}</span>
            </div>

            {/* Description */}
            <div className="mb-10 space-y-4">
              <p className="text-[#1A1A1A]/80 dark:text-gray-300 text-lg leading-relaxed font-medium">
                {productTrans.description}
              </p>
              <ul className="space-y-2">
                {productTrans.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium text-[#1A1A1A] dark:text-white">
                    <span className="material-symbols-outlined text-[#13ec5b] text-lg">check_circle</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Purchase Module */}
            <div className="bg-white dark:bg-[#1a2e22] p-6 rounded-xl border border-[#f0f4f2] dark:border-white/10 shadow-sm mb-10">
              <div className="flex flex-col sm:flex-row gap-4">
                {/* Quantity */}
                <div className="flex items-center justify-between border border-[#dbe6df] dark:border-white/20 rounded-lg h-14 w-full sm:w-32 px-4 bg-[#fcfdfc] dark:bg-[#102216]">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] dark:text-gray-400 dark:hover:text-white transition-colors p-1"
                  >
                    <span className="material-symbols-outlined text-sm font-bold">remove</span>
                  </button>
                  <span className="font-bold text-lg text-[#1A1A1A] dark:text-white">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] dark:text-gray-400 dark:hover:text-white transition-colors p-1"
                  >
                    <span className="material-symbols-outlined text-sm font-bold">add</span>
                  </button>
                </div>
                {/* CTA */}
                <button className="flex-1 bg-[#13ec5b] hover:bg-[#0fd651] text-[#1A1A1A] h-14 rounded-lg font-bold text-base tracking-wide flex items-center justify-center gap-2 transition-all shadow-[0_4px_14px_rgba(19,236,91,0.3)] hover:shadow-[0_6px_20px_rgba(19,236,91,0.4)] active:scale-[0.98]">
                  <span>{t("product.addToCart")}</span>
                  <span className="material-symbols-outlined text-xl">shopping_cart</span>
                </button>
              </div>
              <div className="mt-4 text-center">
                <p className="text-xs text-[#1A1A1A]/60 dark:text-gray-400 flex items-center justify-center gap-1">
                  <span className="material-symbols-outlined text-sm">local_shipping</span>
                  {t("product.freeShipping")}
                </p>
              </div>
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
                  <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white size-8 rounded-full flex items-center justify-center shadow-sm hover:text-[#13ec5b]">
                      <span className="material-symbols-outlined text-lg">shopping_cart</span>
                    </div>
                  </div>
                  <img
                    alt={relatedProduct.name}
                    className="w-2/3 h-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-lg"
                    src={relatedProduct.imageUrl}
                  />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                    {relatedProduct.name}
                  </h4>
                  <p className="text-[#1A1A1A]/60 dark:text-gray-400 text-sm mb-2">{relatedProduct.subtitle}</p>
                  <span className="font-bold text-[#1A1A1A] dark:text-white">{relatedProduct.price}</span>
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
