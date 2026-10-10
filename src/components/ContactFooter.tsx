import React, { useEffect, useRef, useState } from 'react';
import Hls from 'hls.js';

interface ContactFooterProps {
  onOpenModal?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ onOpenModal }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [copied, setCopied] = useState(false);

  const hlsUrl = "https://stream.mux.com/Aa02T7oM1wH5Mk5EEVDYhbZ1ChcdhRsS2m1NYyx4Ua1g.m3u8";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let hls: Hls | null = null;

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true });
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
      if (hls) hls.destroy();
    };
  }, [hlsUrl]);

  const copyEmail = () => {
    navigator.clipboard.writeText('shoaibasghar5999@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const marqueeText = "BUILDING HIGH PERFORMANCE WEBSITES • 400+ DELIVERED PROJECTS • CUSTOM WORDPRESS & WOOCOMMERCE • ";

  return (
    <footer id="contact" className="relative bg-bg pt-16 md:pt-24 pb-8 md:pb-12 overflow-hidden border-t border-stroke/40">
      
      {/* Vertically Flipped HLS Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full object-cover -translate-x-1/2 -translate-y-1/2 opacity-25 scale-y-[-1] filter brightness-75 contrast-125"
        />
        {/* Heavy Overlay */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[3px]" />
      </div>

      <div className="relative z-10">
        
        {/* Infinite Running Marquee Banner */}
        <div className="w-full overflow-hidden whitespace-nowrap mb-16 py-4 bg-amber-500/10 border-y border-amber-500/20 backdrop-blur-md">
          <div className="inline-flex animate-[gradient-shift_20s_linear_infinite] space-x-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <span key={i} className="text-xl sm:text-2xl font-display italic text-amber-400 font-semibold tracking-wider">
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Main CTA Section */}
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>LET'S BUILD SOMETHING EXTRAORDINARY</span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display text-text-primary mb-6 tracking-tight max-w-3xl leading-[1.05]">
            Have a project in mind? <br />
            <span className="italic font-display text-amber-400">Let's connect.</span>
          </h2>

          <p className="text-muted text-sm sm:text-base max-w-xl mb-10 leading-relaxed">
            Whether you need a custom WordPress theme, high-converting WooCommerce store, page speed optimization, or fullstack development — I'm available for full-time and contract opportunities.
          </p>

          {/* Email Button with Gradient Hover Ring */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
            <a
              href="mailto:shoaibasghar5999@gmail.com"
              className="group relative inline-flex items-center justify-center rounded-full text-base sm:text-lg font-medium px-8 py-4 bg-text-primary text-bg hover:bg-bg hover:text-text-primary transition-all duration-300 transform hover:scale-105 shadow-xl shadow-amber-500/10"
            >
              {/* Gradient border ring */}
              <span className="absolute inset-0 rounded-full accent-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-[1px]" />
              <span className="flex items-center gap-3 font-mono">
                <span>shoaibasghar5999@gmail.com</span>
                <span className="text-amber-400 group-hover:translate-x-1 transition-transform">↗</span>
              </span>
            </a>

            {/* Copy Email Quick Action */}
            <button
              onClick={copyEmail}
              className="inline-flex items-center gap-2 text-xs font-mono text-text-primary/80 bg-surface/80 hover:bg-surface border border-stroke hover:border-amber-500/40 rounded-full px-5 py-4 transition-all"
            >
              <span>{copied ? '✓ Email Copied!' : '📋 Copy Address'}</span>
            </button>
          </div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl mb-16 text-left">
            <div className="p-5 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-md">
              <div className="text-xs font-mono text-muted mb-1">Direct Phone & WhatsApp</div>
              <a href="tel:+923106077900" className="text-sm font-semibold text-text-primary hover:text-amber-400 font-mono transition-colors">
                +92-310-6077900
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-md">
              <div className="text-xs font-mono text-muted mb-1">Live Website</div>
              <a href="https://shoaibasghar.website" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-text-primary hover:text-amber-400 font-mono transition-colors">
                shoaibasghar.website ↗
              </a>
            </div>

            <div className="p-5 rounded-2xl bg-surface/40 border border-white/5 backdrop-blur-md">
              <div className="text-xs font-mono text-muted mb-1">Location</div>
              <div className="text-sm font-semibold text-text-primary font-mono">
                Okara / Lahore, Pakistan
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="w-full max-w-[1700px] mx-auto px-6 sm:px-10 lg:px-16 xl:px-24 pt-8 border-t border-stroke/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          
          {/* Social Links */}
          <div className="flex items-center gap-4 text-xs font-mono text-muted">
            <a
              href="https://www.linkedin.com/in/muhammad-shoaib-asghar-444b7120a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              LinkedIn ↗
            </a>
            <span>•</span>
            <a
              href="https://shoaibasghar.website"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Website ↗
            </a>
            <span>•</span>
            <a
              href="mailto:shoaibasghar5999@gmail.com"
              className="hover:text-amber-400 transition-colors"
            >
              Email ↗
            </a>
          </div>

          {/* Availability Status */}
          <div className="flex items-center gap-2 text-xs font-mono text-muted">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-text-primary font-medium">Available for projects & roles</span>
          </div>

          {/* Copyright */}
          <div className="text-xs font-mono text-muted">
            © 2026 Muhammad Shoaib Asghar
          </div>

        </div>

      </div>
    </footer>
  );
};
