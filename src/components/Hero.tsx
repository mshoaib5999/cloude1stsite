import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface HeroProps {
  onOpenContactModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContactModal }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Senior WordPress Developer",
    "WooCommerce Architect",
    "Performance Engineer",
    "Fullstack Specialist"
  ];

  const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({
        enableWorker: true,
        lowLatencyMode: true,
      });
      hls.loadSource(hlsUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsUrl;
      video.addEventListener('loadedmetadata', () => {
        video.play().catch(() => {});
      });
    }

    return () => {
      if (hls) {
        hls.destroy();
      }
    };
  }, [hlsUrl]);

  // Cycling roles every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-bg pt-20 pb-16">
      {/* Background HLS Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-35 filter brightness-90 saturate-120"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        {/* Bottom Fade Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg via-bg/80 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        {/* Profile Avatar Card with Amber Code Glow */}
        <div className="mb-6 relative group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse" />
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-amber-500/50 shadow-2xl bg-surface">
            <img
              src="./shoaib_profile.jpg"
              alt="Muhammad Shoaib Asghar"
              className="w-full h-full object-cover object-center transform group-hover:scale-105 transition duration-500"
              onError={(e) => {
                // Fallback avatar if needed
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
          </div>
          {/* Availability Badge */}
          <div className="absolute -bottom-2 -right-2 bg-surface/90 border border-amber-500/40 backdrop-blur-md rounded-full px-2.5 py-0.5 flex items-center gap-1.5 shadow-lg">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-[10px] uppercase font-semibold text-text-primary tracking-wider">Available</span>
          </div>
        </div>

        {/* Eyebrow */}
        <div className="blur-in text-xs text-amber-400 font-mono tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 inline-block">
          COLLECTION '26 • SENIOR WORDPRESS DEVELOPER
        </div>

        {/* Main Name */}
        <h1 className="name-reveal text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-display italic leading-[0.95] tracking-tight text-text-primary mb-6 drop-shadow-lg">
          Muhammad Shoaib Asghar
        </h1>

        {/* Role Line */}
        <div className="text-lg sm:text-xl md:text-2xl text-text-primary/90 font-light mb-6 flex items-center justify-center gap-2 flex-wrap min-h-[36px]">
          <span>A</span>
          <span
            key={roleIndex}
            className="font-display italic text-amber-400 text-2xl sm:text-3xl md:text-4xl animate-role-fade-in inline-block border-b border-amber-500/30 pb-0.5"
          >
            {roles[roleIndex]}
          </span>
          <span>based in Pakistan.</span>
        </div>

        {/* Description */}
        <p className="text-sm md:text-base text-muted max-w-xl mb-10 leading-relaxed font-light">
          Delivering 400+ custom WordPress projects, WooCommerce stores, and speed-optimized websites. 
          Specializing in bespoke PHP theme development, ACF Pro data structures, and Core Web Vitals excellence.
        </p>

        {/* CTA Buttons */}
        <div className="inline-flex items-center gap-4 flex-wrap justify-center mb-16">
          {/* "See Works" Solid Button */}
          <a
            href="#work"
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-8 py-3.5 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 transform hover:scale-105 shadow-lg shadow-white/5"
          >
            {/* Gradient border ring on hover */}
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
            <span className="flex items-center gap-2">
              <span>See Works</span>
              <span className="transition-transform group-hover:translate-x-1">↓</span>
            </span>
          </a>

          {/* "Reach out..." Outlined Button */}
          <button
            onClick={onOpenContactModal}
            className="group relative inline-flex items-center justify-center rounded-full text-sm font-medium px-8 py-3.5 border-2 border-stroke bg-bg text-text-primary hover:border-transparent transition-all duration-300 transform hover:scale-105"
          >
            {/* Gradient border ring on hover */}
            <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            <span className="flex items-center gap-2">
              <span>Reach out...</span>
              <span className="text-amber-400 transition-transform group-hover:rotate-45">↗</span>
            </span>
          </button>
        </div>

        {/* Quick Highlights Badge */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl pt-6 border-t border-stroke/50 text-left">
          <div className="p-3 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-muted">Experience</div>
            <div className="text-lg font-bold text-amber-400 font-display italic">3.5+ Years</div>
          </div>
          <div className="p-3 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-muted">Websites Delivered</div>
            <div className="text-lg font-bold text-amber-400 font-display italic">400+ Projects</div>
          </div>
          <div className="p-3 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-muted">Performance</div>
            <div className="text-lg font-bold text-amber-400 font-display italic">95+ PageSpeed</div>
          </div>
          <div className="p-3 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-sm">
            <div className="text-xs text-muted">Core Focus</div>
            <div className="text-lg font-bold text-amber-400 font-display italic">WordPress & WooCommerce</div>
          </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <span className="text-[10px] text-muted uppercase tracking-[0.25em] font-medium">
          SCROLL
        </span>
        <div className="w-px h-10 bg-stroke relative overflow-hidden">
          <div className="w-full h-1/2 bg-amber-400 animate-scroll-down" />
        </div>
      </div>
    </section>
  );
};
