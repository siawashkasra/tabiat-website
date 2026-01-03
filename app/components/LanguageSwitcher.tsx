"use client";

import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import { locales, Locale } from "../i18n/translations";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLocale = locales.find((l) => l.code === locale);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#13ec5b]/10 transition-colors text-sm font-medium text-[#1A1A1A] dark:text-white"
        aria-label="Select language"
      >
        <span className="material-symbols-outlined text-[18px]">language</span>
        <span className="hidden sm:inline">{currentLocale?.nativeName}</span>
        <span className="material-symbols-outlined text-[16px]">
          {isOpen ? "expand_less" : "expand_more"}
        </span>
      </button>

      {isOpen && (
        <div className="absolute top-full mt-2 end-0 bg-white dark:bg-[#1a2e22] rounded-xl shadow-lg border border-gray-100 dark:border-gray-800 py-2 min-w-[160px] z-50">
          {locales.map((loc) => (
            <button
              key={loc.code}
              onClick={() => {
                setLocale(loc.code as Locale);
                setIsOpen(false);
              }}
              className={`w-full px-4 py-2.5 text-start flex items-center justify-between hover:bg-[#13ec5b]/10 transition-colors ${
                locale === loc.code
                  ? "text-[#13ec5b] font-bold"
                  : "text-[#1A1A1A] dark:text-gray-300"
              }`}
            >
              <span className="flex items-center gap-3">
                <span className="text-base">{loc.nativeName}</span>
                <span className="text-xs text-[#1A1A1A]/50 dark:text-gray-500">
                  {loc.name}
                </span>
              </span>
              {locale === loc.code && (
                <span className="material-symbols-outlined text-[18px]">check</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
