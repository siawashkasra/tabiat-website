"use client";

import { useLanguage } from "../i18n/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

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
      <div className="flex justify-center">
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
            <div className="absolute start-[20px] md:start-1/2 top-0 h-full w-[2px] bg-[#1A1A1A]/10 dark:bg-white/10 -translate-x-1/2 rtl:translate-x-1/2 timeline-line overflow-hidden rounded-full"></div>

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
