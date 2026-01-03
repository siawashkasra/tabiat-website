"use client";

import Link from "next/link";
import Header from "../components/Header";
import { useLanguage } from "../i18n/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

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
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#111813] dark:text-white">
      <Header />

      <div className="flex flex-col items-center w-full">
        {/* Hero Section */}
        <section className="w-full max-w-[1280px] px-4 md:px-10 py-16 md:py-32 flex flex-col items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
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
        <section className="w-full max-w-[1080px] px-4 md:px-10 py-24 md:py-32">
          <div className="flex flex-col gap-16">
            <div className="flex flex-col items-center text-center gap-6 max-w-[720px] mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#111813] dark:text-white">
                {t("about.pillars.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-6 p-8 rounded-2xl bg-white dark:bg-white/5 border border-[#dbe6df] dark:border-white/10 hover:border-[#13ec5b]/50 dark:hover:border-[#13ec5b]/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#13ec5b]/20 flex items-center justify-center text-[#13ec5b] group-hover:bg-[#13ec5b] group-hover:text-[#111813] transition-colors">
                    <span className="material-symbols-outlined text-3xl">{feature.icon}</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h3 className="text-xl font-bold dark:text-white">{feature.title}</h3>
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

        {/* Footer CTA */}
        <footer className="w-full bg-[#111813] text-white pt-20 pb-10 px-4 md:px-10 rounded-t-[3rem]">
          <div className="max-w-[1280px] mx-auto flex flex-col gap-16">
            {/* CTA Section */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 border-b border-white/10 pb-16">
              <div className="flex flex-col gap-4 max-w-xl">
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter">{t("about.cta.title")}</h2>
                <p className="text-gray-400 text-lg">{t("about.cta.description")}</p>
              </div>
              <Link
                href="/products"
                className="h-16 px-10 rounded-full bg-[#13ec5b] text-[#111813] text-lg font-bold hover:scale-105 transition-transform flex items-center gap-2"
              >
                {t("about.cta.button")}
                <span className="material-symbols-outlined rtl:rotate-180">arrow_forward</span>
              </Link>
            </div>

            {/* Footer Links */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 text-[#13ec5b] mb-2">
                  <span className="material-symbols-outlined">eco</span>
                  <span className="font-bold uppercase">{t("site.name")}</span>
                </div>
                <p className="text-sm text-gray-500">{t("hero.description")}</p>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg mb-1">{t("footer.shop")}</h4>
                <Link href="/products" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.vegetables")}</Link>
                <Link href="/products" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.legumes")}</Link>
                <Link href="/products" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.fish")}</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg mb-1">{t("footer.company")}</h4>
                <Link href="/about" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.ourStory")}</Link>
                <Link href="#" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.sustainability")}</Link>
                <Link href="#" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.careers")}</Link>
                <Link href="/contact" className="text-gray-400 hover:text-[#13ec5b] transition-colors">{t("footer.contact")}</Link>
              </div>
              <div className="flex flex-col gap-3">
                <h4 className="font-bold text-lg mb-1">{t("footer.social")}</h4>
                <div className="flex gap-4">
                  <Link href="#" className="text-white hover:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined">public</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined">photo_camera</span>
                  </Link>
                  <Link href="#" className="text-white hover:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined">alternate_email</span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-center text-xs text-gray-600 pt-10">{t("footer.copyright")}</div>
          </div>
        </footer>
      </div>
    </div>
  );
}
