import React from 'react';

export const Journal: React.FC = () => {
  const journalEntries = [
    {
      id: 1,
      title: "Optimizing Core Web Vitals for WooCommerce at Scale",
      italicWord: "Performance",
      date: "Aug 18, 2026",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=400&auto=format&fit=crop",
      category: "WooCommerce"
    },
    {
      id: 2,
      title: "Headless WordPress vs Bespoke PHP Themes in 2026",
      italicWord: "Architecture",
      date: "Jul 29, 2026",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop",
      category: "Development"
    },
    {
      id: 3,
      title: "Mastering ACF Pro & Dynamic Gutenberg Block Schemas",
      italicWord: "CMS Flexibility",
      date: "Jun 14, 2026",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=400&auto=format&fit=crop",
      category: "Gutenberg"
    },
    {
      id: 4,
      title: "Hardening WordPress Security for Enterprise Clients",
      italicWord: "Security",
      date: "May 02, 2026",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=400&auto=format&fit=crop",
      category: "Security"
    }
  ];

  return (
    <section id="journal" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-amber-500" />
              <span className="text-xs text-amber-400 font-mono uppercase tracking-[0.3em]">
                Journal & Insights
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-text-primary tracking-tight">
              Recent <span className="italic font-display text-amber-400">thoughts</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-lg mt-3">
              Articles and technical guides derived from 3.5+ years of hands-on WordPress development.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-text-primary bg-surface hover:bg-bg border border-stroke hover:border-amber-500/50 rounded-full px-6 py-3 transition-all duration-300 group"
          >
            <span>View all articles</span>
            <span className="text-amber-400 group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>

        {/* Journal Horizontal Pill Cards */}
        <div className="flex flex-col gap-4">
          {journalEntries.map((entry) => (
            <div
              key={entry.id}
              className="group relative flex flex-col sm:flex-row items-center justify-between gap-4 p-4 sm:p-5 bg-surface/30 hover:bg-surface border border-stroke hover:border-amber-500/40 rounded-[32px] sm:rounded-full transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-amber-500/5"
            >
              {/* Left Image Thumbnail + Title */}
              <div className="flex items-center gap-5 w-full sm:w-auto">
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden flex-shrink-0 border border-stroke group-hover:border-amber-500/50 transition-colors">
                  <img
                    src={entry.image}
                    alt={entry.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">
                    {entry.category}
                  </span>
                  <h3 className="text-base sm:text-lg font-display text-text-primary group-hover:text-amber-400 transition-colors">
                    {entry.title} — <span className="italic font-display text-text-primary/70">{entry.italicWord}</span>
                  </h3>
                </div>
              </div>

              {/* Right Meta Info & Arrow */}
              <div className="flex items-center gap-6 text-xs text-muted font-mono w-full sm:w-auto justify-between sm:justify-end pl-2 sm:pl-0 border-t sm:border-t-0 border-stroke/50 pt-3 sm:pt-0">
                <span>{entry.date}</span>
                <span className="w-1 h-1 rounded-full bg-stroke" />
                <span>{entry.readTime}</span>
                <div className="w-8 h-8 rounded-full bg-bg border border-stroke flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors ml-2">
                  <span className="text-amber-400 group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
