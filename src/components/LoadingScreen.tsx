import React, { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const words = ["Design", "Create", "Optimize", "Scale"];

  useEffect(() => {
    const startTime = performance.now();
    const duration = 2700; // 2700ms requirement

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smooth ease-out progress calculation
      const currentCount = Math.floor(progress * 100);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(100);
        setTimeout(() => {
          setIsFading(true);
          setTimeout(onComplete, 400); // 400ms delay after completion
        }, 100);
      }
    };

    const animFrame = requestAnimationFrame(updateCounter);

    return () => cancelAnimationFrame(animFrame);
  }, [onComplete]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % words.length);
    }, 900); // Cycle every 900ms

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-bg flex flex-col justify-between p-6 md:p-12 transition-opacity duration-500 ease-out ${
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Top Bar */}
      <div className="flex justify-between items-center">
        <div className="text-xs text-muted uppercase tracking-[0.3em] flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
          PORTFOLIO // SHOAIB ASGHAR
        </div>
        <div className="text-xs text-muted uppercase tracking-[0.2em]">
          COLLECTION '26
        </div>
      </div>

      {/* Center Rotating Words */}
      <div className="my-auto text-center relative overflow-hidden h-24 sm:h-32 flex items-center justify-center">
        {words.map((word, idx) => (
          <div
            key={word}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-500 transform ${
              idx === wordIndex
                ? 'opacity-100 translate-y-0 scale-100'
                : idx < wordIndex
                ? 'opacity-0 -translate-y-8 scale-95'
                : 'opacity-0 translate-y-8 scale-95'
            }`}
          >
            <span className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/90 tracking-tight">
              {word}
            </span>
          </div>
        ))}
      </div>

      {/* Bottom Counter & Progress Bar */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <div className="text-xs text-muted tracking-widest uppercase">
            SENIOR WORDPRESS DEVELOPER
          </div>
          <div className="text-6xl md:text-8xl lg:text-9xl font-display text-text-primary tabular-nums leading-none">
            {String(count).padStart(3, "0")}
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-full h-[3px] bg-stroke/50 rounded-full overflow-hidden relative">
          <div
            className="h-full accent-gradient transition-all duration-75 ease-out origin-left rounded-full"
            style={{
              width: `${count}%`,
              boxShadow: '0 0 12px rgba(245, 158, 11, 0.5)'
            }}
          />
        </div>
      </div>
    </div>
  );
};
