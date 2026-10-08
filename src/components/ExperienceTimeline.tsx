import React from 'react';

export const ExperienceTimeline: React.FC = () => {
  const experiences = [
    {
      role: "Senior WordPress Developer",
      company: "Upastra Digital Agency",
      location: "Okara, Pakistan",
      period: "Jan 2024 – Present",
      description: "Delivered 250+ custom WordPress websites across Real Estate, Healthcare, Construction, Plumbing, and AI businesses. Built bespoke PHP themes from scratch, optimized WooCommerce checkouts, integrated ACF Pro fields, and achieved top Core Web Vitals PageSpeed ratings.",
      skills: ["PHP", "WordPress CMS", "WooCommerce", "ACF Pro", "PageSpeed 100", "AI Tools"]
    },
    {
      role: "WordPress Developer",
      company: "M Tech Solutions",
      location: "Lahore, Pakistan",
      period: "Apr 2023 – Dec 2023",
      description: "Developed and maintained WordPress websites for clients across retail and service industries. Built custom WooCommerce stores, configured payment gateways, and performed on-page SEO optimization.",
      skills: ["WordPress", "WooCommerce", "Elementor Pro", "SEO", "cPanel"]
    },
    {
      role: "Associate WordPress Developer",
      company: "DeDezigners Software House",
      location: "Lahore, Pakistan",
      period: "Nov 2022 – Apr 2023",
      description: "Customized WordPress themes and plugins for international clients. Converted Figma designs to responsive web pages using Elementor, HTML5, CSS3, and Bootstrap.",
      skills: ["Elementor", "HTML5/CSS3", "JavaScript", "Bootstrap", "Theme Tweaks"]
    }
  ];

  return (
    <section id="experience" className="bg-bg py-16 md:py-24 border-t border-stroke/40">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-amber-500" />
            <span className="text-xs text-amber-400 font-mono uppercase tracking-[0.3em]">
              Career Track
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display text-text-primary tracking-tight">
            Professional <span className="italic font-display text-amber-400">experience</span>
          </h2>
          <p className="text-muted text-sm md:text-base max-w-lg mt-3">
            A history of growth, high-volume project execution, and technical mastery over 3.5+ years.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="flex flex-col gap-8 relative before:absolute before:left-0 md:before:left-1/2 before:top-4 before:bottom-4 before:w-px before:bg-stroke">
          {experiences.map((exp, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={exp.role + exp.company}
                className={`relative flex flex-col md:flex-row items-start gap-8 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-bg border-2 border-amber-400 z-10 shadow-lg shadow-amber-500/50" />

                {/* Card Container */}
                <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="bg-surface/40 hover:bg-surface border border-stroke hover:border-amber-500/40 rounded-3xl p-6 sm:p-8 transition-all duration-300">
                    <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                      <span className="text-xs font-mono text-amber-400 bg-amber-500/10 border border-amber-500/20 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                      <span className="text-xs font-mono text-muted">
                        {exp.location}
                      </span>
                    </div>

                    <h3 className="text-2xl font-display text-text-primary mb-1">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-semibold text-text-primary/80 mb-4 font-mono">
                      {exp.company}
                    </div>

                    <p className="text-xs sm:text-sm text-muted leading-relaxed mb-6">
                      {exp.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-4 border-t border-stroke/50">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="text-[11px] font-mono text-text-primary/90 bg-bg border border-stroke px-2.5 py-0.5 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Education Highlight Box */}
        <div className="mt-16 bg-surface/30 border border-stroke rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div className="text-xs font-mono text-amber-400 uppercase tracking-widest mb-1">
              Education
            </div>
            <h4 className="text-2xl font-display text-text-primary">
              Bachelor of Science in Computer Science
            </h4>
            <div className="text-xs text-muted font-mono mt-1">
              University of Central Punjab, Lahore (2018 – 2022)
            </div>
          </div>
          <span className="text-xs font-mono text-text-primary bg-bg border border-stroke px-4 py-2 rounded-full">
            BS CS Graduate
          </span>
        </div>

      </div>
    </section>
  );
};
