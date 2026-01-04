"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

export default function Footer() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "fa" || locale === "ps";

  return (
    <footer className="w-full py-16 bg-white dark:bg-[#0c1a11] relative overflow-hidden">
      {/* Decorative tomato spill elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top decorative blob */}
        <div className={`absolute top-[-10%] w-[300px] h-[300px] ${isRTL ? 'right-[-8%]' : 'left-[-8%]'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/5 via-[#c1121f]/3 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph" />
        </div>
        
        {/* Bottom accent */}
        <div className={`absolute bottom-[10%] w-[200px] h-[200px] ${isRTL ? 'left-[-5%]' : 'right-[-5%]'}`}>
          <div className="absolute inset-0 bg-gradient-to-tr from-[#ff6b6b]/5 via-[#e63946]/3 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-reverse" />
        </div>
        
        {/* Small floating dots */}
        <div className={`absolute top-[30%] w-3 h-3 bg-[#e63946]/10 rounded-full animate-float-slow ${isRTL ? 'left-[20%]' : 'right-[20%]'}`} />
        <div className={`absolute bottom-[40%] w-2 h-2 bg-[#c1121f]/10 rounded-full animate-pulse-slow ${isRTL ? 'right-[15%]' : 'left-[15%]'}`} />
      </div>

      <div className="flex justify-center relative z-10">
        <div className="flex flex-col max-w-[1280px] w-full px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 mb-16">
            {/* Newsletter */}
            <div className="flex flex-col gap-6 lg:w-1/2">
              <h5 className="text-2xl font-bold text-[#1A1A1A] dark:text-white">{t("footer.newsletter.title")}</h5>
              <p className="text-[#1A1A1A]/60 dark:text-gray-400 max-w-sm">
                {t("footer.newsletter.description")}
              </p>
              <div className="relative w-full max-w-md">
                <input
                  className="w-full bg-transparent border-0 border-b-2 border-[#1A1A1A]/20 dark:border-white/20 py-3 text-lg focus:ring-0 focus:border-[#13ec5b] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-gray-600 dark:text-white transition-colors outline-none"
                  placeholder={t("footer.newsletter.placeholder")}
                  type="email"
                />
                <button className="absolute end-0 top-1/2 -translate-y-1/2 text-[#1A1A1A] dark:text-white hover:text-[#13ec5b] transition-colors font-bold uppercase text-xs tracking-wider">
                  {t("footer.newsletter.subscribe")}
                </button>
              </div>
            </div>

            {/* Links */}
            <div className="flex flex-wrap gap-12 lg:gap-20 lg:w-1/2 lg:justify-end">
              {/* Shop */}
              <div className="flex flex-col gap-4">
                <h6 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/40 dark:text-gray-500">
                  {t("footer.shop")}
                </h6>
                <Link href="/products" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.allProducts")}
                </Link>
                <Link href="#" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.vegetables")}
                </Link>
                <Link href="#" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.legumes")}
                </Link>
                <Link href="#" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.fish")}
                </Link>
              </div>

              {/* Company */}
              <div className="flex flex-col gap-4">
                <h6 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/40 dark:text-gray-500">
                  {t("footer.company")}
                </h6>
                <Link href="/about" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.ourStory")}
                </Link>
                <Link href="#" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.sustainability")}
                </Link>
                <Link href="#" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.careers")}
                </Link>
                <Link href="/contact" className="text-[#1A1A1A] dark:text-gray-300 hover:text-[#13ec5b] transition-colors">
                  {t("footer.contact")}
                </Link>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-4">
                <h6 className="text-sm font-bold uppercase tracking-wider text-[#1A1A1A]/40 dark:text-gray-500">
                  {t("footer.social")}
                </h6>
                <div className="flex gap-4">
                  <Link href="#" className="text-[#1A1A1A] dark:text-white hover:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined">public</span>
                  </Link>
                  <Link href="#" className="text-[#1A1A1A] dark:text-white hover:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </Link>
                  <Link href="#" className="text-[#1A1A1A] dark:text-white hover:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined">alternate_email</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-[#1A1A1A]/5 dark:border-white/5">
            <div className="flex items-center gap-2 text-[#1A1A1A] dark:text-white">
              <span className="material-symbols-outlined text-[#13ec5b]" style={{ fontSize: 20 }}>
                eco
              </span>
              <span className="font-bold uppercase tracking-wide text-sm">{t("site.name")}</span>
            </div>
            <p className="text-xs text-[#1A1A1A]/40 dark:text-gray-600">
              {t("footer.copyright")}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
