import React from 'react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      number: '01',
      title: 'Custom WordPress Theme Dev',
      italicWord: 'Tailored PHP & JS',
      description: 'Building custom WordPress themes from scratch using PHP, HTML5, SASS, and ES6+ JavaScript. Completely bloat-free, pixel-perfect, and tailored precisely to your brand.',
      tools: ['PHP 8.x', 'Custom Gutenberg', 'Figma to WP', 'SASS/CSS3']
    },
    {
      number: '02',
      title: 'WooCommerce & Payments',
      italicWord: 'High Conversion',
      description: 'Architecting WooCommerce stores with custom product layout options, streamlined cart flows, automated checkout, Stripe/PayPal integration, and subscription systems.',
      tools: ['WooCommerce', 'Stripe API', 'PayPal', 'Custom Checkouts']
    },
    {
      number: '03',
      title: 'PageSpeed & Web Vitals',
      italicWord: '90-100 Scores',
      description: 'Eliminating render-blocking resources, database query bloat, asset minification, image WebP compression, and server caching to achieve green Core Web Vitals.',
      tools: ['Core Web Vitals', 'Lighthouse 100', 'Cache Setup', 'DB Cleanup']
    },
    {
      number: '04',
      title: 'ACF Pro & Custom Fields',
      italicWord: 'Scalable CMS',
      description: 'Designing intuitive WordPress admin backends using Advanced Custom Fields (ACF Pro) and Custom Post Types, empowering clients to manage content effortlessly.',
      tools: ['ACF Pro', 'CPT UI', 'REST API', 'Dynamic Schema']
    }
  ];

  return (
    <section id="services" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-xs text-amber-400 font-mono uppercase tracking-[0.3em]">
              Capabilities
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-text-primary tracking-tight">
            Core <span className="italic font-display text-amber-400">expertise</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mt-3">
            Specialized solutions developed over 3.5+ years of delivering high-performing web ecosystems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {servicesList.map((service) => (
            <div
              key={service.number}
              className="group relative bg-surface/50 border border-stroke hover:border-amber-500/50 rounded-3xl p-8 transition-all duration-300 hover:bg-surface flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-center mb-6">
                  <span className="text-3xl font-display italic text-amber-400/60 group-hover:text-amber-400 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-stroke flex items-center justify-center group-hover:border-amber-500/50 group-hover:bg-amber-500/10 transition-colors">
                    <span className="text-amber-400 group-hover:rotate-45 transition-transform">↗</span>
                  </div>
                </div>

                <h3 className="text-2xl font-display text-text-primary mb-3">
                  {service.title} — <span className="italic text-amber-400">{service.italicWord}</span>
                </h3>

                <p className="text-sm text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t border-stroke/50">
                {service.tools.map((tool) => (
                  <span
                    key={tool}
                    className="text-[11px] font-mono text-text-primary/80 bg-bg border border-stroke px-3 py-1 rounded-full"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
