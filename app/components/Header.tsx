"use client";

import Link from "next/link";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-[#f6f8f6]/90 dark:bg-[#102216]/90 border-b border-[#e5e7eb]/50 dark:border-white/10 transition-all duration-300">
      <div className="flex h-full grow flex-col">
        <div className="flex justify-center">
          <div className="flex w-full max-w-[1280px] flex-col">
            <div className="flex items-center justify-between px-6 lg:px-10 py-4">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 text-[#1A1A1A] dark:text-white cursor-pointer group">
                <div className="flex items-center justify-center rounded-full bg-gradient-to-br from-[#13ec5b]/20 to-[#0fd650]/10 w-10 h-10 group-hover:from-[#13ec5b]/40 group-hover:to-[#0fd650]/30 transition-all duration-300">
                  <span className="material-symbols-outlined text-[#13ec5b] group-hover:scale-110 transition-transform" style={{ fontSize: 24 }}>
                    eco
                  </span>
                </div>
                <h2 className="text-lg font-bold leading-tight tracking-tight uppercase">{t("site.name")}</h2>
              </Link>

              {/* Navigation */}
              <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#13ec5b] dark:text-gray-200 dark:hover:text-[#13ec5b] transition-colors">
                  {t("nav.home")}
                </Link>
                <Link href="/products" className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#13ec5b] dark:text-gray-200 dark:hover:text-[#13ec5b] transition-colors">
                  {t("nav.products")}
                </Link>
                <Link href="/about" className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#13ec5b] dark:text-gray-200 dark:hover:text-[#13ec5b] transition-colors">
                  {t("nav.about")}
                </Link>
                <Link href="/contact" className="text-sm font-semibold text-[#1A1A1A]/80 hover:text-[#13ec5b] dark:text-gray-200 dark:hover:text-[#13ec5b] transition-colors">
                  {t("nav.contact")}
                </Link>
              </nav>

              {/* Actions */}
              <div className="flex items-center gap-2">
                <LanguageSwitcher />
                <Link href="/products" className="hidden md:flex cursor-pointer items-center justify-center overflow-hidden rounded-md h-10 px-6 bg-gradient-to-r from-[#13ec5b] to-[#0fd650] text-[#1A1A1A] text-sm font-bold leading-normal tracking-wide hover:from-[#0fd650] hover:to-[#0bc445] hover:shadow-[0_0_15px_rgba(19,236,91,0.4)] transition-all">
                  <span className="truncate">{t("nav.viewProducts")}</span>
                </Link>
                <button className="md:hidden p-2 text-[#1A1A1A] dark:text-white hover:text-[#13ec5b] transition-colors">
                  <span className="material-symbols-outlined">menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
