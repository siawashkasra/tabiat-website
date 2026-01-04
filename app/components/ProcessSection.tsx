"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function ProcessSection() {
  const { t, locale } = useLanguage();
  const isRTL = locale === "fa" || locale === "ps";

  const steps = [
    {
      icon: "agriculture",
      title: t("process.step1.title"),
      description: t("process.step1.description"),
      position: "left",
      active: true,
    },
    {
      icon: "precision_manufacturing",
      title: t("process.step2.title"),
      description: t("process.step2.description"),
      position: "right",
      active: false,
    },
    {
      icon: "local_shipping",
      title: t("process.step3.title"),
      description: t("process.step3.description"),
      position: "left",
      active: false,
    },
  ];

  return (
    <section className="w-full py-24 bg-[#f6f8f6] dark:bg-[#102216] overflow-hidden relative border-t border-gray-100 dark:border-white/5">
      {/* Decorative tomato spill elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large morphing blob */}
        <div className={`absolute top-[10%] w-[400px] h-[400px] ${isRTL ? 'left-[-10%]' : 'right-[-10%]'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#e63946]/8 via-[#c1121f]/5 to-transparent rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-morph" />
        </div>
        
        {/* Floating tomato accent */}
        <div className={`absolute top-[30%] ${isRTL ? 'right-[5%]' : 'left-[5%]'}`}>
          <div className="w-16 h-16 bg-gradient-to-br from-[#ff6b6b]/20 to-[#c1121f]/10 rounded-full animate-float-slow shadow-lg shadow-red-500/10">
            <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-2 bg-[#2d6a4f]/30 rounded-t-full" />
          </div>
        </div>
        
        {/* Small decorative dots */}
        <div className={`absolute bottom-[20%] w-4 h-4 bg-[#e63946]/15 rounded-full animate-pulse-slow ${isRTL ? 'left-[12%]' : 'right-[12%]'}`} />
        <div className={`absolute top-[50%] w-3 h-3 bg-[#ff6b6b]/20 rounded-full animate-float ${isRTL ? 'left-[8%]' : 'right-[8%]'}`} />
        
        {/* Drip accent */}
        <div className={`absolute top-[60%] ${isRTL ? 'right-[3%]' : 'left-[3%]'}`}>
          <div className="w-6 h-12 bg-gradient-to-b from-[#e63946]/15 to-[#c1121f]/5 rounded-b-full animate-drip-1" />
        </div>
      </div>
      <div className="flex justify-center relative z-10">
        <div className="flex flex-col max-w-[1024px] w-full px-6 lg:px-10">
          {/* Header */}
          <div className="flex flex-col items-center text-center gap-4 mb-20">
            <span className="text-[#13ec5b] font-bold uppercase tracking-[0.2em] text-sm">{t("process.title")}</span>
            <h2 className="text-[#1A1A1A] dark:text-white text-3xl md:text-5xl font-bold tracking-tight">
              {t("process.title")}
            </h2>
            <p className="text-[#1A1A1A]/60 dark:text-gray-400 max-w-lg mt-2 text-lg">
              {t("process.description")}
            </p>
          </div>

          {/* Timeline */}
          <div className="relative flex flex-col items-center">
            <div className="absolute start-[20px] md:start-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-[#13ec5b]/30 via-[#0fd650]/20 to-[#13ec5b]/30 -translate-x-1/2 rtl:translate-x-1/2 overflow-hidden rounded-full"></div>

            {steps.map((step, index) => (
              <div
                key={index}
                className={`w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-16 ${index < steps.length - 1 ? 'mb-20' : ''} relative group`}
              >
                {/* Left content */}
                {step.position === "left" ? (
                  <div className="w-full md:w-[45%] flex justify-end md:text-end order-2 md:order-1 ps-12 md:ps-0">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#13ec5b] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 dark:text-gray-300 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-[45%] order-2 md:order-1 hidden md:block"></div>
                )}

                {/* Icon */}
                <div
                  className={`absolute start-[20px] md:start-1/2 top-0 md:top-1/2 -translate-x-1/2 rtl:translate-x-1/2 md:-translate-y-1/2 z-10 w-10 h-10 rounded-full bg-[#f6f8f6] dark:bg-[#102216] border-2 ${
                    step.active ? 'border-[#13ec5b]' : 'border-[#1A1A1A]/20 dark:border-white/20 group-hover:border-[#13ec5b]'
                  } flex items-center justify-center shadow-[0_0_0_8px_rgba(246,248,246,1)] dark:shadow-[0_0_0_8px_rgba(16,34,22,1)] group-hover:scale-110 transition-all duration-300`}
                >
                  <span
                    className={`material-symbols-outlined text-xl ${
                      step.active ? 'text-[#13ec5b]' : 'text-[#1A1A1A]/40 dark:text-white/40 group-hover:text-[#13ec5b]'
                    } transition-colors`}
                  >
                    {step.icon}
                  </span>
                </div>

                {/* Right content */}
                {step.position === "right" ? (
                  <div className="w-full md:w-[45%] flex justify-start text-start order-3 md:order-3 ps-12 md:ps-0">
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl font-bold text-[#1A1A1A] dark:text-white group-hover:text-[#13ec5b] transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-[#1A1A1A]/70 dark:text-gray-300 text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full md:w-[45%] order-3 md:order-3 ps-12 md:ps-0 opacity-0 md:opacity-100"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
