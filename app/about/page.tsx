"use client";

import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";
import { useEffect, useState } from "react";

export default function AboutPage() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "fa" || locale === "ps";
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { value: "50+", label: t("about.stats.years") },
    { value: "12", label: t("about.stats.regions") },
    { value: "100%", label: t("about.stats.natural") },
    { value: "0", label: t("about.stats.additives") },
  ];

  const features = [
    {
      icon: "verified",
      title: t("about.pillars.quality.title"),
      description: t("about.pillars.quality.description"),
    },
    {
      icon: "agriculture",
      title: t("about.pillars.sourcing.title"),
      description: t("about.pillars.sourcing.description"),
    },
    {
      icon: "recycling",
      title: t("about.pillars.sustainability.title"),
      description: t("about.pillars.sustainability.description"),
    },
  ];

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#111813] dark:text-white overflow-hidden">
      <Header />

      <div className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-32 flex flex-col items-center relative">
          {/* Decorative tomato spill elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Large morphing blob */}
            <div className={`absolute top-[10%] w-[500px] h-[500px] transition-all duration-[2000ms] ${isRTL ? 'left-[-15%]' : 'right-[-15%]'} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/15 via-[#c1121f]/10 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph" />
              <div className="absolute inset-[20%] bg-gradient-to-br from-[#ff6b6b]/10 via-[#e63946]/5 to-transparent rounded-[40%_60%_70%_30%/40%_50%_60%_50%] animate-morph-reverse" />
            </div>
            
            {/* Floating tomato */}
            <div className={`absolute top-[25%] transition-all duration-[1500ms] delay-500 ${isRTL ? 'right-[5%]' : 'left-[5%]'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b6b]/30 to-[#c1121f]/20 rounded-full animate-float-slow shadow-lg shadow-red-500/10">
                <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-2 bg-[#2d6a4f]/40 rounded-t-full" />
              </div>
            </div>
            
            {/* Dripping effects */}
            <div className={`absolute top-[40%] transition-all duration-[2000ms] delay-700 ${isRTL ? 'left-[8%]' : 'right-[8%]'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="w-8 h-16 bg-gradient-to-b from-[#e63946]/20 to-[#c1121f]/10 rounded-b-full animate-drip-1" />
            </div>
            <div className={`absolute top-[50%] transition-all duration-[2200ms] delay-900 ${isRTL ? 'left-[15%]' : 'right-[15%]'} ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
              <div className="w-5 h-10 bg-gradient-to-b from-[#ff6b6b]/15 to-[#e63946]/10 rounded-b-full animate-drip-2" />
            </div>
            
            {/* Splatter dots */}
            <div className={`absolute top-[60%] w-5 h-5 bg-[#e63946]/20 rounded-full transition-all duration-1000 delay-[1000ms] ${isRTL ? 'right-[12%]' : 'left-[12%]'} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
            <div className={`absolute top-[70%] w-3 h-3 bg-[#c1121f]/15 rounded-full transition-all duration-1000 delay-[1200ms] ${isRTL ? 'left-[10%]' : 'right-[10%]'} ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
            <div className={`absolute bottom-[20%] w-4 h-4 bg-[#ff6b6b]/15 rounded-full animate-pulse-slow ${isRTL ? 'right-[20%]' : 'left-[20%]'}`} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full relative z-10">
            {/* Text Content */}
            <div className="flex flex-col gap-6 order-2 md:order-1">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#13ec5b]/10 text-[#13ec5b] text-xs font-bold uppercase tracking-wider">
                {t("about.tagline")}
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-[-0.033em] text-[#111813] dark:text-white">
                {t("about.title")}
              </h1>
              <div className="h-1 w-20 bg-[#13ec5b] rounded-full"></div>
              <h2 className="text-lg md:text-xl font-normal leading-relaxed text-[#4a5750] dark:text-gray-300 max-w-[500px]">
                {t("about.description")}
              </h2>
              <div className="pt-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-[#13ec5b] text-[#111813] text-base font-bold tracking-wide hover:scale-105 transition-transform"
                >
                  {t("about.cta.button")}
                </Link>
              </div>
            </div>

            {/* Hero Image */}
            <div className="order-1 md:order-2 w-full h-[400px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative group">
              <div
                className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                style={{
                  backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0tSoLTJ1BmVVaSskiuH794oODyjwefNgXVrjtMNXCR89_goyyDDH4ZXrA_jZHKfbyn-M75txuZPaVdrLvrWunF8FUSR4-0lkcMo8MygTexnHvJyyhoWU7wfOeCpP9tGrjhaVyfasFP7rxcoI7p4sJUCYT3lbKQqTq0pqwi6RDgbMEQu7ZvCKMRhK0MycqZ7lRgvhhoH-W3J6Wo41ZoVyohWvJBgFAAdafzm9izrTfNnKr9gvjWnumxC2cTXFKwL-VTTmTcOgZ5Q")',
                }}
              ></div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="w-full border-y border-[#dbe6df] dark:border-white/5 bg-white dark:bg-white/5">
          <div className="max-w-[1280px] mx-auto px-4 md:px-10 py-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 justify-items-center md:justify-items-start text-center md:text-start">
              {stats.map((stat, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <span className="text-4xl md:text-5xl font-black text-[#111813] dark:text-white">{stat.value}</span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#61896f] dark:text-[#13ec5b]/80">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-full max-w-[1080px] px-4 md:px-10 py-24 md:py-32 relative">
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-[20%] w-[250px] h-[250px] ${isRTL ? 'right-[-10%]' : 'left-[-10%]'}`}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/8 via-[#c1121f]/5 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph" />
            </div>
            <div className={`absolute bottom-[10%] w-6 h-6 bg-[#e63946]/15 rounded-full animate-float ${isRTL ? 'left-[15%]' : 'right-[15%]'}`} />
          </div>
          
          <div className="flex flex-col gap-16 relative z-10">
            <div className="flex flex-col items-center text-center gap-6 max-w-[720px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111813] dark:text-white">
                {t("about.pillars.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-white/5 border border-[#dbe6df] dark:border-white/10 hover:border-[#13ec5b]/50 dark:hover:border-[#13ec5b]/50 transition-all duration-300 group hover:shadow-xl hover:shadow-green-500/10"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#13ec5b]/20 to-[#0fd650]/10 flex items-center justify-center text-[#13ec5b] group-hover:from-[#13ec5b] group-hover:to-[#0fd650] group-hover:text-white transition-all duration-300">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold dark:text-white group-hover:text-[#13ec5b] transition-colors">{feature.title}</h3>
                    <p className="text-[#61896f] dark:text-gray-400 leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Immersive Image Block */}
        <section className="w-full px-4 md:px-10 pb-24">
          <div className="max-w-[1280px] mx-auto w-full h-[500px] rounded-3xl overflow-hidden relative shadow-lg">
            <div
              className="w-full h-full bg-center bg-cover bg-no-repeat"
              style={{
                backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD9S5Q6IzXF9QcO1m8_T5n0rcyKgoYUPQS_UHcnOnNKGkIO4u3Nk1X5x8S_yFquCJLFQ855hI64uTw78NrLWUdTsF5MnA61yDe8_jsvm7PqLMwYSaTAx74z3tMUADKfiZFhjF_9SsHUnqhPHilbo44J4YMKiub_Dh3UoAC4fXzD6r9SFwiktw2HDDUGo67qR-Lz-Y6uZJbG7zJcGkwcRM4dob0zkzKHjcaQHEhpxTU9CBYIauJvwWVuZVj5NosVRIeo-e7EJNV79g")',
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#102216]/80 to-transparent flex flex-col justify-end p-8 md:p-16">
              <h2 className="text-white text-3xl md:text-5xl font-bold max-w-2xl leading-tight">
                {t("about.cta.title")}
              </h2>
              <p className="text-white/80 text-lg mt-4 max-w-xl">{t("about.cta.description")}</p>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
