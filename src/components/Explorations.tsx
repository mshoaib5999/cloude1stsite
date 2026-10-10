import React, { useState } from 'react';

export const Explorations: React.FC = () => {
  const [activeLightbox, setActiveLightbox] = useState<any>(null);

  const explorationItems = [
    {
      id: 1,
      title: "Gutenberg ACF UI Kit",
      category: "Component Design",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
      rotation: "-rotate-3",
      col: "left"
    },
    {
      id: 2,
      title: "PageSpeed 100/100 Audit",
      category: "Performance Lab",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
      rotation: "rotate-2",
      col: "right"
    },
    {
      id: 3,
      title: "PhaseLink Engineering",
      category: "Engineering & Power Systems",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=800&auto=format&fit=crop",
      rotation: "rotate-3",
      col: "left",
      url: "https://phaselinkeng.com/",
      description: "WordPress engineering corporate website for PhaseLink Engineering, Inc. featuring custom service architecture, speed optimization, and responsive consulting workflows."
    },
    {
      id: 4,
      title: "Real Estate Filter Engine",
      category: "ACF Pro & Search",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop",
      rotation: "-rotate-2",
      col: "right"
    },
    {
      id: 5,
      title: "Dark Cyber Theme Palette",
      category: "Theme Customization",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop",
      rotation: "-rotate-1",
      col: "left"
    },
    {
      id: 6,
      title: "AI Integration in WP Admin",
      category: "Automation & API",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=600&auto=format&fit=crop",
      rotation: "rotate-4",
      col: "right"
    }
  ];

  return (
    <section id="explorations" className="bg-bg py-20 border-t border-stroke/40 relative overflow-hidden">
      
      {/* Centered Layer 1 Header */}
      <div className="max-w-4xl mx-auto text-center px-6 mb-16 relative z-10">
        <div className="inline-flex items-center gap-3 mb-3">
          <span className="w-8 h-px bg-amber-500" />
          <span className="text-xs text-amber-400 font-mono uppercase tracking-[0.3em]">
            Explorations
          </span>
          <span className="w-8 h-px bg-amber-500" />
        </div>
        <h2 className="text-4xl md:text-6xl font-display text-text-primary tracking-tight mb-4">
          Visual <span className="italic font-display text-amber-400">playground</span>
        </h2>
        <p className="text-muted text-sm md:text-base max-w-lg mx-auto mb-6">
          Experimental UI components, performance prototypes, and custom WordPress widget concepts.
        </p>

        <a
          href="https://linkedin.com/in/muhammad-shoaib-asghar-444b7120a"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-xs font-mono text-amber-400 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 px-5 py-2.5 rounded-full transition-all"
        >
          <span>Connect on LinkedIn</span>
          <span>↗</span>
        </a>
      </div>

      {/* Parallax Cards Grid Layer */}
      <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative z-20">
        
        {/* Left Column */}
        <div className="flex flex-col gap-8 md:gap-12 md:-translate-y-6">
          {explorationItems.filter(i => i.col === 'left').map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className={`group relative bg-surface border border-stroke hover:border-amber-500/50 rounded-3xl overflow-hidden aspect-square max-w-[420px] mx-auto w-full cursor-pointer transition-all duration-500 ${item.rotation} hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/15`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  {item.category}
                </span>
                <h3 className="text-xl font-display text-text-primary">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 md:gap-12 md:translate-y-12">
          {explorationItems.filter(i => i.col === 'right').map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveLightbox(item)}
              className={`group relative bg-surface border border-stroke hover:border-amber-500/50 rounded-3xl overflow-hidden aspect-square max-w-[420px] mx-auto w-full cursor-pointer transition-all duration-500 ${item.rotation} hover:rotate-0 hover:scale-105 hover:shadow-2xl hover:shadow-amber-500/15`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end">
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400">
                  {item.category}
                </span>
                <h3 className="text-xl font-display text-text-primary">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Modal */}
      {activeLightbox && (
        <div
          onClick={() => setActiveLightbox(null)}
          className="fixed inset-0 z-[10000] bg-bg/95 backdrop-blur-xl flex items-center justify-center p-6 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-2xl w-full bg-surface border border-amber-500/40 rounded-3xl overflow-hidden p-6 relative shadow-2xl animate-role-fade-in"
          >
            <button
              onClick={() => setActiveLightbox(null)}
              className="absolute top-4 right-4 text-muted hover:text-text-primary text-xl font-bold bg-bg w-8 h-8 rounded-full border border-stroke flex items-center justify-center"
            >
              ✕
            </button>
            <img
              src={activeLightbox.image}
              alt={activeLightbox.title}
              className="w-full h-80 object-cover rounded-2xl mb-4"
            />
            <span className="text-xs font-mono uppercase text-amber-400 tracking-wider">
              {activeLightbox.category}
            </span>
            <h3 className="text-3xl font-display text-text-primary my-2">
              {activeLightbox.title}
            </h3>
            <p className="text-xs text-muted leading-relaxed">
              {activeLightbox.description || "Exploration preview for custom theme widgets, design tokens, and optimized asset pipelines built specifically for WordPress client projects."}
            </p>
            {activeLightbox.url && (
              <a
                href={activeLightbox.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-4 px-6 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-bg text-xs font-semibold font-mono transition-colors"
              >
                <span>Visit Live Site</span>
                <span>↗</span>
              </a>
            )}
          </div>
        </div>
      )}

    </section>
  );
};
