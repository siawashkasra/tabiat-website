"use client";

import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLanguage } from "../i18n/LanguageContext";

export default function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col bg-[#f6f8f6] dark:bg-[#102216] text-[#1A1A1A] dark:text-gray-100">
      <Header />

      <main className="flex-grow w-full max-w-[1440px] mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Page Heading */}
            <div className="flex flex-col gap-4">
              <span className="inline-block w-fit px-3 py-1 rounded-full bg-[#13ec5b]/10 text-[#13ec5b] text-xs font-bold uppercase tracking-wider">
                {t("contact.tagline")}
              </span>
              <h1 className="text-4xl lg:text-6xl font-black text-[#1A1A1A] dark:text-white leading-[1.1] tracking-tight">
                {t("contact.title")} <br />{t("contact.titleLine2")}
              </h1>
              <p className="text-lg text-[#1A1A1A]/60 dark:text-gray-300 max-w-lg leading-relaxed">
                {t("contact.description")}
              </p>
            </div>

            {/* Form */}
            <form className="mt-4 flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#1A1A1A]/70 dark:text-gray-300" htmlFor="name">
                    {t("contact.form.name")}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none text-[#1A1A1A]/40 group-focus-within:text-[#13ec5b] transition-colors">
                      <span className="material-symbols-outlined text-[20px]">person</span>
                    </div>
                    <input
                      className="w-full h-14 ps-12 pe-4 bg-white dark:bg-[#1a2e22] border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] outline-none transition-all placeholder:text-[#1A1A1A]/40 text-[#1A1A1A] dark:text-white font-medium shadow-sm"
                      id="name"
                      placeholder={t("contact.form.namePlaceholder")}
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-[#1A1A1A]/70 dark:text-gray-300" htmlFor="email">
                    {t("contact.form.email")}
                  </label>
                  <div className="relative group">
                    <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none text-[#1A1A1A]/40 group-focus-within:text-[#13ec5b] transition-colors">
                      <span className="material-symbols-outlined text-[20px]">mail</span>
                    </div>
                    <input
                      className="w-full h-14 ps-12 pe-4 bg-white dark:bg-[#1a2e22] border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] outline-none transition-all placeholder:text-[#1A1A1A]/40 text-[#1A1A1A] dark:text-white font-medium shadow-sm"
                      id="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* Subject Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#1A1A1A]/70 dark:text-gray-300" htmlFor="subject">
                  {t("contact.form.subject")}
                </label>
                <div className="relative group">
                  <div className="absolute inset-y-0 start-0 ps-4 flex items-center pointer-events-none text-[#1A1A1A]/40 group-focus-within:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">tag</span>
                  </div>
                  <input
                    className="w-full h-14 ps-12 pe-4 bg-white dark:bg-[#1a2e22] border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] outline-none transition-all placeholder:text-[#1A1A1A]/40 text-[#1A1A1A] dark:text-white font-medium shadow-sm"
                    id="subject"
                    placeholder={t("contact.form.subjectPlaceholder")}
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-[#1A1A1A]/70 dark:text-gray-300" htmlFor="message">
                  {t("contact.form.message")}
                </label>
                <div className="relative group">
                  <div className="absolute top-4 start-0 ps-4 flex items-start pointer-events-none text-[#1A1A1A]/40 group-focus-within:text-[#13ec5b] transition-colors">
                    <span className="material-symbols-outlined text-[20px]">chat_bubble_outline</span>
                  </div>
                  <textarea
                    className="w-full min-h-[180px] ps-12 pe-4 py-4 bg-white dark:bg-[#1a2e22] border border-gray-200 dark:border-gray-700 rounded-xl focus:border-[#13ec5b] focus:ring-1 focus:ring-[#13ec5b] outline-none transition-all placeholder:text-[#1A1A1A]/40 text-[#1A1A1A] dark:text-white font-medium resize-none shadow-sm"
                    id="message"
                    placeholder={t("contact.form.messagePlaceholder")}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  className="group relative overflow-hidden w-full md:w-auto min-w-[200px] h-14 bg-[#13ec5b] rounded-xl flex items-center justify-center gap-2 text-[#1A1A1A] font-bold text-base transition-all hover:bg-[#0fd650] hover:shadow-lg hover:shadow-[#13ec5b]/30 active:scale-[0.98]"
                  type="submit"
                >
                  <span>{t("contact.form.submit")}</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Contact Info & Map */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-16">
            {/* Info Card */}
            <div className="bg-white dark:bg-[#1a2e22] p-8 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm">
              <h3 className="text-xl font-bold mb-6 text-[#1A1A1A] dark:text-white">{t("contact.details.title")}</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="size-10 rounded-full bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">location_on</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] dark:text-white mb-1">{t("contact.details.headquarters")}</p>
                    <p className="text-[#1A1A1A]/60 dark:text-gray-400 leading-relaxed">
                      123 Cannery Row<br />Portland, OR 97209
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">mail</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] dark:text-white mb-1">{t("contact.details.email")}</p>
                    <a className="text-[#1A1A1A]/60 dark:text-gray-400 hover:text-[#13ec5b] transition-colors" href="mailto:hello@cannedluxury.com">
                      hello@cannedluxury.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-10 rounded-full bg-[#13ec5b]/10 flex items-center justify-center text-[#13ec5b] shrink-0">
                    <span className="material-symbols-outlined text-[20px]">call</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[#1A1A1A] dark:text-white mb-1">{t("contact.details.phone")}</p>
                    <a className="text-[#1A1A1A]/60 dark:text-gray-400 hover:text-[#13ec5b] transition-colors" href="tel:+15550192834">
                      +1 (555) 019-2834
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-8 border-t border-gray-100 dark:border-gray-800">
                <p className="text-sm font-bold text-[#1A1A1A] dark:text-white mb-4">{t("contact.details.followUs")}</p>
                <div className="flex gap-4">
                  <a
                    className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#1A1A1A]/60 dark:text-gray-400 hover:bg-[#13ec5b] hover:border-[#13ec5b] hover:text-[#1A1A1A] transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  </a>
                  <a
                    className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#1A1A1A]/60 dark:text-gray-400 hover:bg-[#13ec5b] hover:border-[#13ec5b] hover:text-[#1A1A1A] transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </a>
                  <a
                    className="size-10 rounded-full border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#1A1A1A]/60 dark:text-gray-400 hover:bg-[#13ec5b] hover:border-[#13ec5b] hover:text-[#1A1A1A] transition-all"
                    href="#"
                  >
                    <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="relative w-full h-64 lg:h-80 rounded-2xl overflow-hidden shadow-sm group">
              <div className="absolute inset-0 bg-black/5 dark:bg-black/20 z-10 hover:bg-transparent transition-all duration-500"></div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
                <div className="size-10 bg-[#13ec5b] rounded-full flex items-center justify-center text-[#1A1A1A] shadow-lg animate-bounce">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div className="mt-2 px-3 py-1 bg-white/90 dark:bg-black/80 backdrop-blur rounded-md shadow-sm">
                  <span className="text-xs font-bold text-[#1A1A1A] dark:text-gray-200">{t("contact.map.label")}</span>
                </div>
              </div>
              <img
                alt="Map view of Portland"
                className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6oPcwpDl8s4i4nuYVa_c1rv-H6PR7nR-WL8ZbjmerSkuTm59bjFeObjGkRqRr3UMS1DZBxtjEBAwK8k1PJ8gyCOSbeyITXpQZxpnvw_Ytd5AJfVOtBsTmuHNHDRjffVxfcCqbBZ7S_eog4dv_6zwlkjK2pcs2qzOY4qGd-x8i9gW00g7v1t2Tv0Cu582cCAF8SPHn2borJ5k6xH3351BNsRxUTmC9DQxtVZHaZTAqexfNlfNd8WagF8zffA0HQpZBQWf7hZMCvw"
              />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
