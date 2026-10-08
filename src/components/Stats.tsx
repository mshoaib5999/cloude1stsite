import React from 'react';

export const Stats: React.FC = () => {
  const statsList = [
    {
      value: "3.5+",
      italicLabel: "Years",
      label: "Professional Experience",
      subtext: "Delivering top-tier WordPress & eCommerce websites for global businesses."
    },
    {
      value: "400+",
      italicLabel: "Websites",
      label: "Projects Delivered",
      subtext: "From custom themes to full WooCommerce stores and web portals."
    },
    {
      value: "100/100",
      italicLabel: "PageSpeed",
      label: "Core Web Vitals Rating",
      subtext: "Obsessed with lightning fast load times, caching, and clean code."
    }
  ];

  return (
    <section className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {statsList.map((stat, i) => (
            <div
              key={i}
              className="bg-surface/30 hover:bg-surface/80 border border-stroke hover:border-amber-500/40 rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="text-5xl lg:text-7xl font-display text-text-primary mb-2 tracking-tight group-hover:text-amber-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-xl font-display italic text-amber-400 mb-4">
                  {stat.italicLabel} {stat.label}
                </div>
              </div>
              <p className="text-xs text-muted leading-relaxed font-mono pt-4 border-t border-stroke/50">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
