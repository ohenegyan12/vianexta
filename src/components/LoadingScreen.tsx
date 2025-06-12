'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from '@/utils/gsap';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  children?: React.ReactNode;
}

export default function LoadingScreen({ onLoadingComplete, children }: LoadingScreenProps) {
  const loadingRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const percentageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressContainerRef = useRef<HTMLDivElement>(null);
  const heroRevealRef = useRef<HTMLDivElement>(null);
  const [percentage, setPercentage] = useState(0);
  const [showReveal, setShowReveal] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set initial states
    gsap.set(titleRef.current, { opacity: 0, y: 30 });
    gsap.set(progressRef.current, { width: "0%" });
    gsap.set(percentageRef.current, { opacity: 1, x: 0 }); // Start at left edge

    // Animate title in
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    });

    // Animate progress bar, counter, and position
    tl.to(progressRef.current, {
      width: "100%",
      duration: 2.5,
      ease: "power2.out",
      onUpdate: function() {
        const progress = this.progress();
        const progressPercentage = Math.round(progress * 100);
        setPercentage(progressPercentage);
        
        // Move percentage counter along with progress
        if (progressContainerRef.current && percentageRef.current) {
          const containerWidth = progressContainerRef.current.offsetWidth;
          const moveDistance = containerWidth * progress;
          gsap.set(percentageRef.current, { x: moveDistance });
        }
      }
    }, "-=0.3");

    // Start reveal effect
    tl.call(() => {
      setShowReveal(true);
      // Add white stroke to text
      if (titleRef.current) {
        gsap.set(titleRef.current, {
          webkitTextStroke: "1px white",
          color: "transparent"
        });
      }
    })
    
    // Zoom-in reveal effect with mask
    .to(titleRef.current, {
      scale: 8,
      duration: 1.2,
      ease: "power2.in"
    })
    .to(loadingRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: "power2.inOut",
      onComplete: onLoadingComplete
    }, "-=0.3");

  }, [onLoadingComplete]);

  return (
    <>
      {/* Hero content behind - only visible during reveal */}
      {showReveal && (
        <div 
          ref={heroRevealRef}
          className="fixed inset-0 z-40"
        >
          {children}
        </div>
      )}

      {/* Loading Screen */}
      <div 
        ref={loadingRef}
        className="fixed inset-0 bg-[#06382F] z-50 flex flex-col items-center justify-center"
      >
        {/* Copyright Text */}
        <div className="absolute top-8 right-8 text-white font-serif text-sm opacity-70">
          © 2025 ViaNexta
        </div>

        {/* ViaNexta Title */}
        <h1 
          ref={titleRef}
          className="text-6xl md:text-7xl lg:text-8xl font-normal font-serif select-none relative"
          style={{
            color: showReveal ? 'transparent' : 'white',
            WebkitTextStroke: showReveal ? '1px white' : 'none',
          }}
        >
          ViaNexta
        </h1>

        {/* Progress Section - positioned at bottom */}
        {!showReveal && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2">
            {/* Progress Bar Container */}
            <div 
              ref={progressContainerRef}
              className="w-64 md:w-80 h-1.5 bg-white/20 rounded-full overflow-hidden relative"
            >
              <div 
                ref={progressRef}
                className="h-full bg-gradient-to-r from-orange-400 via-yellow-400 to-white rounded-full"
                style={{ width: '0%' }}
              ></div>
            </div>
            
            {/* Percentage Counter - moves with progress */}
            <div 
              ref={percentageRef}
              className="absolute -top-8 text-lg md:text-xl font-normal text-white font-serif"
              style={{ transform: 'translateX(-50%)' }}
            >
              {percentage.toString().padStart(3, '0')}%
            </div>
          </div>
        )}
      </div>
    </>
  );
} 