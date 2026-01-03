"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import { useEffect, useState } from "react";

export default function HeroSection() {
  const { t, locale } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  const isRTL = locale === "fa" || locale === "ps";

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#f6f8f6] via-[#fff8f0] to-[#f6f8f6] dark:from-[#102216] dark:via-[#1a1510] dark:to-[#102216]">
      {/* Animated Background Spill Effect - Position changes based on RTL */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Main spill blob */}
        <div 
          className={`absolute top-[-20%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] transition-all duration-[2000ms] ease-out ${
            isRTL ? 'left-[-10%]' : 'right-[-10%]'
          } ${
            isLoaded ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-50 -translate-y-20'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#e63946] via-[#c1121f] to-[#780000] rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph shadow-2xl shadow-red-500/30" />
          <div className="absolute inset-[10%] bg-gradient-to-br from-[#ff6b6b] via-[#e63946] to-[#c1121f] rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-reverse opacity-80" />
          <div className="absolute inset-[25%] bg-gradient-to-br from-[#ff8585] to-[#e63946] rounded-[50%_50%_50%_50%/50%_50%_50%_50%] animate-pulse-slow opacity-60" />
        </div>

        {/* Dripping effect */}
        <div className={`absolute top-[30%] transition-all duration-[2500ms] delay-500 ${
          isRTL ? 'left-[15%]' : 'right-[15%]'
        } ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="w-16 h-32 bg-gradient-to-b from-[#c1121f] to-[#780000] rounded-b-full animate-drip-1 shadow-lg shadow-red-500/40" />
        </div>
        <div className={`absolute top-[35%] transition-all duration-[2800ms] delay-700 ${
          isRTL ? 'left-[25%]' : 'right-[25%]'
        } ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="w-10 h-24 bg-gradient-to-b from-[#e63946] to-[#c1121f] rounded-b-full animate-drip-2 shadow-lg shadow-red-500/30" />
        </div>
        <div className={`absolute top-[40%] transition-all duration-[3000ms] delay-900 ${
          isRTL ? 'left-[8%]' : 'right-[8%]'
        } ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
        }`}>
          <div className="w-8 h-20 bg-gradient-to-b from-[#ff6b6b] to-[#e63946] rounded-b-full animate-drip-3 shadow-lg shadow-red-500/20" />
        </div>

        {/* Splatter dots */}
        <div className={`absolute top-[60%] w-6 h-6 bg-[#c1121f] rounded-full transition-all duration-1000 delay-[1200ms] ${
          isRTL ? 'left-[20%]' : 'right-[20%]'
        } ${
          isLoaded ? 'opacity-70 scale-100' : 'opacity-0 scale-0'
        }`} />
        <div className={`absolute top-[65%] w-4 h-4 bg-[#e63946] rounded-full transition-all duration-1000 delay-[1400ms] ${
          isRTL ? 'left-[30%]' : 'right-[30%]'
        } ${
          isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
        }`} />
        <div className={`absolute top-[55%] w-3 h-3 bg-[#ff6b6b] rounded-full transition-all duration-1000 delay-[1600ms] ${
          isRTL ? 'left-[12%]' : 'right-[12%]'
        } ${
          isLoaded ? 'opacity-50 scale-100' : 'opacity-0 scale-0'
        }`} />

        {/* Floating tomato elements */}
        <div className={`absolute top-[20%] transition-all duration-[1500ms] delay-[800ms] ${
          isRTL ? 'left-[35%]' : 'right-[35%]'
        } ${
          isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-20 rotate-45'
        }`}>
          <div className="w-20 h-20 bg-gradient-to-br from-[#ff6b6b] to-[#c1121f] rounded-full shadow-xl animate-float-slow">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-4 h-3 bg-[#2d6a4f] rounded-t-full" />
          </div>
        </div>
        <div className={`absolute top-[45%] transition-all duration-[1800ms] delay-[1000ms] ${
          isRTL ? 'left-[40%]' : 'right-[40%]'
        } ${
          isLoaded ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 -translate-y-20 -rotate-30'
        }`}>
          <div className="w-14 h-14 bg-gradient-to-br from-[#e63946] to-[#780000] rounded-full shadow-lg animate-float-reverse">
            <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-3 h-2 bg-[#2d6a4f] rounded-t-full" />
          </div>
        </div>

        {/* Additional decorative elements */}
        <div className={`absolute top-[70%] transition-all duration-[2000ms] delay-[1200ms] ${
          isRTL ? 'left-[18%]' : 'right-[18%]'
        } ${
          isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
        }`}>
          <div className="w-10 h-10 bg-gradient-to-br from-[#ff8585] to-[#e63946] rounded-full shadow-lg animate-float" />
        </div>
        <div className={`absolute top-[25%] transition-all duration-[2200ms] delay-[1400ms] ${
          isRTL ? 'left-[5%]' : 'right-[5%]'
        } ${
          isLoaded ? 'opacity-60 scale-100' : 'opacity-0 scale-0'
        }`}>
          <div className="w-6 h-6 bg-[#c1121f] rounded-full animate-pulse-slow" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[90vh] px-6 lg:px-10">
        <div className="flex flex-col max-w-[1280px] w-full">
          <div className={`flex flex-col items-center lg:items-start ${isRTL ? 'lg:items-end' : 'lg:items-start'}`}>
            {/* Text Content */}
            <div className={`flex flex-col gap-8 lg:max-w-[55%] transition-all duration-1000 ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            } ${isRTL ? 'text-right' : 'text-left'}`}>
              <div className={`flex flex-col gap-6 ${isRTL ? 'items-end' : 'items-start'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 dark:bg-white/10 backdrop-blur-sm border border-[#e63946]/20 w-fit shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-[#e63946] animate-pulse"></span>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-white">
                    {t("hero.tagline")}
                  </span>
                </div>
                <h1 className="text-[#1A1A1A] dark:text-white text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tighter">
                  {t("hero.title")}
                  <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-[#e63946] to-[#c1121f] bg-clip-text text-transparent">
                      {t("hero.titleHighlight")}
                    </span>
                    <span className="absolute bottom-2 left-0 w-full h-4 bg-[#e63946]/20 -skew-x-3 -z-0" />
                  </span>
                </h1>
                <h2 className="text-[#1A1A1A]/70 dark:text-gray-300 text-lg md:text-xl font-medium leading-relaxed max-w-[500px]">
                  {t("hero.description")}
                </h2>
              </div>
              <div className={`flex flex-wrap gap-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <Link 
                  href="/products" 
                  className="group relative flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-gradient-to-r from-[#e63946] to-[#c1121f] text-white text-base font-bold leading-normal tracking-wide overflow-hidden shadow-xl shadow-red-500/30 hover:shadow-red-500/50 transition-all duration-300 hover:scale-105"
                >
                  <span className="relative z-10">{t("hero.shopNow")}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c1121f] to-[#780000] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
                <Link 
                  href="/about" 
                  className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full h-14 px-8 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-2 border-[#1A1A1A]/10 dark:border-white/20 text-[#1A1A1A] dark:text-white text-base font-bold leading-normal tracking-wide hover:bg-white dark:hover:bg-white/20 hover:border-[#e63946]/30 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  {t("hero.ourStory")}
                </Link>
              </div>

              {/* Feature badges */}
              <div className={`flex flex-wrap gap-4 mt-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                <div className={`flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm transition-all duration-1000 delay-[1500ms] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-xl">🍅</span>
                  <span className="text-sm font-semibold text-[#1A1A1A] dark:text-white">100% Organic</span>
                </div>
                <div className={`flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm transition-all duration-1000 delay-[1700ms] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-xl">⭐</span>
                  <span className="text-sm font-semibold text-[#1A1A1A] dark:text-white">Premium Quality</span>
                </div>
                <div className={`flex items-center gap-2 bg-white/60 dark:bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm transition-all duration-1000 delay-[1900ms] ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="text-xl">🌿</span>
                  <span className="text-sm font-semibold text-[#1A1A1A] dark:text-white">Farm Fresh</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-[2000ms] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col items-center gap-2 text-[#1A1A1A]/40 dark:text-white/40">
            <span className="text-xs font-medium uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-current rounded-full animate-scroll-indicator" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
