"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative w-full pt-10 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-[1280px] w-full px-6 lg:px-10">
          <div className="flex flex-col-reverse gap-12 lg:flex-row items-center justify-between">
            {/* Text Content */}
            <div className="flex flex-col gap-8 lg:max-w-[50%] z-10">
              <div className="flex flex-col gap-4 text-start">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13ec5b]/10 border border-[#13ec5b]/20 w-fit">
                  <span className="w-2 h-2 rounded-full bg-[#13ec5b] animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-white">
                    {t("hero.tagline")}
                  </span>
                </div>
                <h1 className="text-[#1A1A1A] dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter">
                  {t("hero.title")}
                  <br />
                  <span className="text-stroke lg:text-transparent lg:bg-clip-text lg:bg-gradient-to-r lg:from-[#1A1A1A] lg:to-[#1A1A1A] dark:lg:from-white dark:lg:to-white">
                    {t("hero.titleHighlight")}
                  </span>
                </h1>
                <h2 className="text-[#1A1A1A]/70 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-[540px]">
                  {t("hero.description")}
                </h2>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link href="/products" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-md h-12 px-6 bg-[#13ec5b] text-[#111813] text-base font-bold leading-normal tracking-wide hover:scale-105 transition-transform duration-200 shadow-lg shadow-[#13ec5b]/20">
                  {t("hero.shopNow")}
                </Link>
                <Link href="/about" className="flex min-w-[140px] cursor-pointer items-center justify-center rounded-md h-12 px-6 bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[#1A1A1A] dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-gray-50 dark:hover:bg-white/10 transition-colors">
                  {t("hero.ourStory")}
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative w-full lg:w-[45%] flex justify-center items-center">
              <div className="absolute inset-0 bg-[#13ec5b]/20 blur-[100px] rounded-full transform scale-75"></div>
              <div className="relative w-full aspect-square max-w-[500px] animate-float">
                <div
                  className="w-full h-full bg-contain bg-center bg-no-repeat drop-shadow-2xl"
                  style={{
                    backgroundImage: 'url("/images/hero.jpeg")',
                    transform: 'rotate(-5deg)',
                  }}
                ></div>
                <div
                  className="absolute -top-10 -right-10 w-24 h-24 bg-contain bg-center bg-no-repeat opacity-80 animate-float-reverse rounded-full"
                  style={{
                    backgroundImage: 'url("/images/62712c9a-ea34-4df0-92a2-cb81183a33d8.jpeg")',
                  }}
                ></div>
                <div
                  className="absolute -bottom-5 -left-5 w-20 h-20 bg-contain bg-center bg-no-repeat opacity-60 blur-sm animate-float-slow rounded-full"
                  style={{
                    backgroundImage: 'url("/images/6790873e-18fe-460c-9e83-ecd26d7219a3.jpeg")',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block text-[#1A1A1A]/40 dark:text-white/40">
          <span className="material-symbols-outlined text-4xl">keyboard_arrow_down</span>
        </div>
      </div>
    </section>
  );
}
