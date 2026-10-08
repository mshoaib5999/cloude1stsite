import React, { useState } from 'react';

export interface ProjectItem {
  id: string;
  title: string;
  italicTitle: string;
  category: string;
  location: string;
  url: string;
  description: string;
  tags: string[];
  colSpan: string;
  aspectRatio: string;
  bgGradient: string;
  metrics: string;
  image: string;
}

interface SelectedWorksProps {
  onSelectProject?: (project: ProjectItem) => void;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'rossai',
    title: 'RossAi',
    italicTitle: 'Deep-Tech & AI',
    category: 'AI Technology & Sensors',
    location: 'New Zealand',
    url: 'https://rossai.co.nz',
    description: 'Built a modern, brand-focused WordPress website for an AI & sensor technology company, showcasing flagship products and company story with optimized page speed.',
    tags: ['WordPress', 'Custom Theme', 'AI Tech', 'Speed Optimized'],
    colSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    bgGradient: 'from-amber-950/40 to-slate-950',
    metrics: 'PageSpeed 98/100',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'lumora',
    title: 'Lumora Nutrition',
    italicTitle: 'eCommerce Store',
    category: 'Health & Wellness',
    location: 'Global / USA',
    url: 'https://trylumoradaily.com',
    description: 'WooCommerce store for a wellness supplement brand featuring custom product pages, subscription flows, integrated payment gateways, and conversion-focused design.',
    tags: ['WooCommerce', 'Stripe', 'Custom Checkout', 'Conversion Rate'],
    colSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[4/3]',
    bgGradient: 'from-emerald-950/40 to-slate-950',
    metrics: '+140% Conversion',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'aion-dubai',
    title: 'AION Dubai',
    italicTitle: 'Real Estate Investment',
    category: 'Property Listings & Leads',
    location: 'UAE / Netherlands',
    url: 'https://aiondubai.com',
    description: 'Bilingual (Dutch & English) real estate investment platform with dynamic property project listings, downloadable brochures, and integrated lead consultation booking.',
    tags: ['WordPress', 'Bilingual Multilingual', 'ACF Pro', 'Lead Capture'],
    colSpan: 'md:col-span-5',
    aspectRatio: 'aspect-[4/3]',
    bgGradient: 'from-blue-950/40 to-slate-950',
    metrics: 'Bilingual Portal',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'flip-my-life',
    title: 'Flip My Life',
    italicTitle: 'Financial Advisory',
    category: 'Wealth & Asset Management',
    location: 'Canada',
    url: 'https://flipmylife.com',
    description: 'Professional wealth advisory website with interactive service calculators, case study showcases, client portals, and trust-building testimonial layouts.',
    tags: ['WordPress', 'Financial Portal', 'Custom Calculators', 'SEO'],
    colSpan: 'md:col-span-7',
    aspectRatio: 'aspect-[16/10]',
    bgGradient: 'from-purple-950/40 to-slate-950',
    metrics: 'Client Portal',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'tampaccs',
    title: 'Creative Contracting',
    italicTitle: 'Engineering & Construction',
    category: 'Home Services & Engineering',
    location: 'USA',
    url: 'https://tampaccs.com',
    description: 'Multi-service contracting portal covering Engineering, Architecture, Build, and Elite Home Solutions with location-based service area navigation.',
    tags: ['WordPress', 'Multi-Service', 'Elementor Pro', 'Local SEO'],
    colSpan: 'md:col-span-6',
    aspectRatio: 'aspect-[16/10]',
    bgGradient: 'from-orange-950/40 to-slate-950',
    metrics: '4 Divisions',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1000&auto=format&fit=crop'
  },
  {
    id: 'vice-pharma',
    title: 'Vice Pharmaceuticals',
    italicTitle: 'Research eCommerce',
    category: 'eCommerce & Analytics',
    location: 'USA',
    url: 'https://vice-pharma.com',
    description: 'High-security WooCommerce store featuring lab Certificate of Analysis (COA) document downloads, affiliate section, and automated shipping workflows.',
    tags: ['WooCommerce', 'COA System', 'Affiliate Integration', 'Security'],
    colSpan: 'md:col-span-6',
    aspectRatio: 'aspect-[16/10]',
    bgGradient: 'from-cyan-950/40 to-slate-950',
    metrics: 'Secure COA System',
    image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=1000&auto=format&fit=crop'
  }
];

export const SelectedWorks: React.FC<SelectedWorksProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-px bg-amber-500" />
              <span className="text-xs text-amber-400 font-mono uppercase tracking-[0.3em]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-display text-text-primary tracking-tight">
              Featured <span className="italic font-display text-amber-400">projects</span>
            </h2>
            <p className="text-muted text-sm md:text-base max-w-lg mt-3">
              A selection of 400+ WordPress websites & WooCommerce stores engineered from concept to high-performing launch.
            </p>
          </div>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-xs font-medium text-text-primary bg-surface hover:bg-bg border border-stroke hover:border-amber-500/50 rounded-full px-6 py-3 transition-all duration-300 group"
          >
            <span>View all 400+ works</span>
            <span className="text-amber-400 group-hover:translate-x-1 transition-transform">↗</span>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {projectsData.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject?.(project)}
              className={`${project.colSpan} group relative bg-surface border border-stroke hover:border-amber-500/40 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 ${project.aspectRatio}`}
            >
              {/* Card Image Background with Subtle Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.bgGradient} opacity-90 z-0`} />
              
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:scale-105 transition-transform duration-700 ease-out z-0 filter brightness-90"
              />

              {/* Halftone Dot Overlay */}
              <div className="absolute inset-0 halftone-overlay opacity-30 mix-blend-overlay pointer-events-none z-10" />

              {/* Top Details Badge */}
              <div className="relative z-20 p-6 flex justify-between items-start">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full w-fit">
                    {project.location}
                  </span>
                  <span className="text-xs text-muted font-mono mt-1">
                    {project.category}
                  </span>
                </div>
                <span className="text-xs text-text-primary/90 font-mono bg-bg/80 border border-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                  {project.metrics}
                </span>
              </div>

              {/* Bottom Card Title & Hover Reveal */}
              <div className="relative z-20 p-6 mt-auto flex flex-col justify-end h-full pt-12">
                <h3 className="text-2xl md:text-3xl font-display text-text-primary mb-2">
                  {project.title} — <span className="italic font-display text-amber-400">{project.italicTitle}</span>
                </h3>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] text-muted bg-bg/60 backdrop-blur-sm border border-stroke px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Full Backdrop Hover Overlay with Pill Label */}
                <div className="absolute inset-0 bg-bg/80 backdrop-blur-md p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between z-30">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-amber-400 font-mono uppercase tracking-widest">
                      {project.category}
                    </span>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-xs text-text-primary bg-surface hover:bg-amber-500 hover:text-bg px-3.5 py-1.5 rounded-full border border-stroke transition-colors flex items-center gap-1"
                    >
                      Live Site ↗
                    </a>
                  </div>

                  <div className="my-auto">
                    <h4 className="text-2xl font-display text-text-primary mb-2">
                      {project.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Animated Pill Hover Label */}
                  <div className="inline-flex items-center gap-2 self-start rounded-full p-[1px] accent-gradient shadow-lg">
                    <div className="bg-bg hover:bg-surface rounded-full px-5 py-2 flex items-center gap-2 transition-colors">
                      <span className="text-xs font-semibold text-text-primary">
                        View — <span className="font-display italic text-amber-400">{project.title}</span>
                      </span>
                      <span className="text-amber-400">→</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
