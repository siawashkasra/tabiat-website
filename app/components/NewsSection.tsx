"use client";

import { useLanguage } from "../i18n/LanguageContext";

const articles = [
  {
    date: "Oct 12, 2023",
    title: "Harvest Season 2024: The Best Yield Yet",
    description: "This year's tomato harvest has exceeded expectations in both flavor profile and volume. Learn how our partner farmers ensure quality from root to fruit.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuB9d_wLJSgWh2tYWr5dv9tjcVyhTF2J4ZSlgbl_GuLlfVCurZU_9rVI9-267oiXH2xeHIeOaNE5mCcMrZZaIYrBFVIi3VX_tg5fnpefmXvuAqdEvVmF8JouB52g1ivIx9yYvayJBk6-LDBaMwM-nbKxSQpbfsTi4UpAYDPRy5MeVpah85bLS9hnHYfK1-YD02YAt2pmNCDf6nLtbnwAhYc_njlsom0EK4yP09neUdK0gBTdL1GKtVw_hwre2p6-IJynPb_6crPbmA",
  },
  {
    date: "Sep 28, 2023",
    title: "Our Sustainability Pledge: Plastic Free by 2025",
    description: "We are committing to removing all single-use plastics from our secondary packaging. Discover the roadmap to a greener pantry.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuCx0oQJ9-UchpzkAUeESGqJ5aYs0e34Ew8CjemtW8m95oU2dhQzv847k_n-_HKWWhTAsFzepXS8x6J3pbx0DW5Han5EPi_2FauyIexd09VM_9S-wBpG3BAH-IIIQhUuzrN9-E8zutQdc09MF4zKPtBUZ5ZE4bsGybueAMEvXoHZRGf8hF8q97gkJGJNKVQZlGNNVJh2qyrfZ0bLe6EdsOpw9h12yjOraO4vTRmVUprXR5A3J5gfSlC7qJ8HNvYtF9oJsTBxucM8Aw",
  },
  {
    date: "Sep 15, 2023",
    title: "New Recipe: Rustic Tuscan Bean Soup",
    description: "Warm up this autumn with a classic Italian dish made simple using our organic Cannellini beans and fire-roasted tomatoes.",
    imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuD6ZWB28rX5jKeULwv6m2TP7hAty-ApunrekNs1OjWPE7iB2VWcnuMGGAH6ciRXTJQ0F4_jEjI3AqI3WsOSD-rdpa3cu80qYcu1aev0FE4lJN9ErEQNWi6JTzPnxhg_6sBJpqfKqlQ6-7Zed5ejQaAOGqDvAQDJBAYl0_rXDK4DZZXQCzrauFU7S7kmX8kNxSioo7kJgBFrKONvtn1U3-evAon3jAGVlnnqfRiAZ5j5QbMCzu_efFJ8bggwNSc7c1NY9CG4HTRpIQ",
  },
];

export default function NewsSection() {
  const { t } = useLanguage();

  return (
    <section className="w-full py-20 lg:py-32 bg-white dark:bg-[#152e1e] border-t border-gray-100 dark:border-white/5">
      <div className="flex justify-center">
        <div className="flex flex-col max-w-[1280px] w-full px-6 lg:px-10">
          {/* Header */}
          <div className="mb-12 border-b border-gray-200 dark:border-white/10 pb-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-[#13ec5b]">{t("news.title")}</h3>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {articles.map((article, index) => (
              <article key={index} className="flex flex-col gap-4 group cursor-pointer">
                <div className="overflow-hidden rounded-lg aspect-[4/3] w-full">
                  <div
                    className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    style={{ backgroundImage: `url("${article.imageUrl}")` }}
                  ></div>
                </div>
                <div className="flex flex-col gap-2">
                  <span className="text-xs font-bold text-[#1A1A1A]/50 dark:text-gray-400 uppercase tracking-widest">
                    {article.date}
                  </span>
                  <h4 className="text-xl font-bold leading-tight text-[#1A1A1A] dark:text-white group-hover:text-[#13ec5b] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-[#1A1A1A]/70 dark:text-gray-400 font-serif leading-relaxed line-clamp-3">
                    {article.description}
                  </p>
                  <div className="flex items-center gap-1 mt-2 text-sm font-bold text-[#13ec5b]">
                    {t("news.readMore")}{" "}
                    <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180">
                      arrow_forward
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
