import React, { useEffect, useState } from 'react';

interface NavbarProps {
  onOpenContactModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);

      const sections = ['home', 'work', 'services', 'journal', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Journal', href: '#journal', id: 'journal' },
    { label: 'Experience', href: '#experience', id: 'experience' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div
        className={`pointer-events-auto inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface/90 px-2 py-2 transition-all duration-300 ${
          isScrolled ? 'shadow-lg shadow-black/40 border-amber-500/20 bg-surface/95 scale-[0.98]' : ''
        }`}
      >
        {/* Logo */}
        <a
          href="#home"
          className="group relative flex items-center justify-center w-9 h-9 rounded-full bg-bg p-[1.5px] transition-transform duration-300 hover:scale-110"
          title="Shoaib Asghar Portfolio"
        >
          {/* Animated gradient ring */}
          <div className="absolute inset-0 rounded-full accent-gradient opacity-90 group-hover:rotate-180 transition-transform duration-700" />
          <div className="relative w-full h-full rounded-full bg-bg flex items-center justify-center">
            <span className="font-display italic text-[13px] font-bold text-text-primary group-hover:text-amber-400 transition-colors">
              SA
            </span>
          </div>
        </a>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2 hidden sm:block" />

        {/* Nav Links */}
        <div className="flex items-center gap-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 ${
                  isActive
                    ? 'text-text-primary bg-stroke/60 font-medium shadow-inner'
                    : 'text-muted hover:text-text-primary hover:bg-stroke/40'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Divider */}
        <div className="w-px h-5 bg-stroke mx-2" />

        {/* "Say hi" button with hover border glow */}
        <button
          onClick={onOpenContactModal}
          className="group relative inline-flex items-center justify-center text-xs sm:text-sm font-medium text-text-primary rounded-full px-3.5 sm:px-4 py-1.5 sm:py-2 overflow-hidden transition-all duration-300"
        >
          {/* Outer gradient hover ring */}
          <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {/* Inner pill content */}
          <span className="relative z-10 flex items-center gap-1.5 bg-surface group-hover:bg-bg rounded-full px-3 py-1 transition-colors duration-200 border border-white/5">
            <span>Say hi</span>
            <span className="text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200">
              ↗
            </span>
          </span>
        </button>
      </div>
    </nav>
  );
};
