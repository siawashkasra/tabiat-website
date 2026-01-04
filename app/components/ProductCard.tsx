interface ProductCardProps {
  category: string;
  title: string;
  description: string;
  imageUrl: string;
  features: string[];
  buttonText: string;
  reverse?: boolean;
}

export default function ProductCard({
  category,
  title,
  description,
  imageUrl,
  features,
  buttonText,
  reverse = false,
}: ProductCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-24`}>
      {/* Image */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="aspect-square bg-white dark:bg-white/5 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-white/5 p-12 flex items-center justify-center transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#e63946]/10">
          <div
            className="w-full h-full bg-contain bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url("${imageUrl}")` }}
          ></div>
        </div>
        {/* Animated background accent */}
        <div className={`absolute -z-10 ${reverse ? '-top-6 -right-6' : '-bottom-6 -left-6'} w-full h-full bg-gradient-to-br from-[#e63946]/15 via-[#c1121f]/10 to-[#13ec5b]/10 rounded-3xl animate-morph`}></div>
        
        {/* Floating tomato accent */}
        <div className={`absolute ${reverse ? 'top-4 left-4' : 'bottom-4 right-4'} w-8 h-8 bg-gradient-to-br from-[#ff6b6b]/30 to-[#c1121f]/20 rounded-full animate-float-slow opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
          <div className="absolute top-0.5 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-[#2d6a4f]/40 rounded-t-full" />
        </div>
      </div>

      {/* Content */}
      <div className={`w-full lg:w-1/2 flex flex-col gap-6 ${reverse ? 'lg:items-end lg:text-right' : ''}`}>
        <div className={`flex flex-col gap-2 ${reverse ? 'lg:items-end' : ''}`}>
          <span className="text-[#13ec5b] font-bold uppercase tracking-widest text-sm">{category}</span>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A1A] dark:text-white">{title}</h3>
        </div>
        <p className="text-lg text-[#1A1A1A]/70 dark:text-gray-300 leading-relaxed">{description}</p>
        <div className={`flex flex-col gap-4 mt-2 ${reverse ? 'lg:items-end' : ''}`}>
          <div className="flex items-center gap-4 text-sm font-medium text-[#1A1A1A]/60 dark:text-gray-400 border-t border-gray-200 dark:border-white/10 pt-4">
            {features.map((feature, index) => (
              <div key={index} className={`flex items-center gap-2 ${reverse ? 'flex-row-reverse' : ''}`}>
                {!reverse && <span className="material-symbols-outlined text-[#13ec5b]">check_circle</span>}
                <span>{feature}</span>
                {reverse && <span className="material-symbols-outlined text-[#13ec5b]">check_circle</span>}
              </div>
            ))}
          </div>
          <button className="w-fit mt-4 px-8 py-3 bg-gradient-to-r from-[#13ec5b] to-[#0fd650] text-[#1A1A1A] font-bold rounded-full hover:from-[#0fd650] hover:to-[#0bc445] hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 hover:scale-105">
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
