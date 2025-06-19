'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

export default function NewsletterBanner() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsHidden(scrollPosition > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`bg-[#06382F] text-white px-4 py-5 sm:py-3 relative transition-transform duration-300 ${
      isHidden ? '-translate-y-full' : 'translate-y-0'
    }`}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between text-center gap-3 sm:gap-0">
        <span className="w-full text-base sm:text-sm font-medium text-center sm:text-left block">
          <span className="font-bold">Where ViaNexta brews brilliance:</span> Helping coffee lovers around the world start their day like a million bucks.
        </span>
        <div className="flex items-center gap-2 mt-3 sm:mt-0">
          <button className="bg-white text-[#06382F] px-4 py-1.5 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
            Learn more
          </button>
          <button
            onClick={() => setIsVisible(false)}
            className="p-1 hover:bg-white/10 rounded transition-colors"
            aria-label="Close banner"
          >
            <X size={16} />
          </button>
        </div>
      </div>
    </div>
  );
} 