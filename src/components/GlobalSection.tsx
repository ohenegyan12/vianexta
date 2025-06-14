'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';

export default function GlobalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial states
    gsap.set([headingRef.current, descriptionRef.current], { 
      opacity: 0, 
      y: 50 
    });
    gsap.set(mapRef.current, { 
      opacity: 0, 
      scale: 0.9 
    });

    // Create scroll-triggered animation
    if (sectionRef.current) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      });

      // Animate heading first
      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      // Animate description
      tl.to(descriptionRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.4");

      // Animate map
      tl.to(mapRef.current, {
        opacity: 1,
        scale: 1,
        duration: 1,
        ease: "power3.out"
      }, "-=0.6");
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12 lg:space-y-16">
          
          {/* Content Section */}
          <div className="space-y-6">
            {/* Main Heading */}
            <h2 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06382F] leading-tight text-left"
            >
              ViaNexta coffee<br />
              knows no borders.
            </h2>

            {/* Description */}
            <p 
              ref={descriptionRef}
              className="text-lg md:text-xl text-gray-700 font-normal leading-relaxed max-w-4xl text-left"
            >
             We partner with passionate roasters and buyers—delivering exceptional, traceable coffee grown in the heart of Mexico to coffee lovers everywhere.
            </p>
          </div>

          {/* Map Section */}
          <div ref={mapRef} className="relative">
            <div className="relative w-full h-auto">
              <Image
                src="/hero_gif.gif"
                alt="ViaNexta Global Coffee Network World Map"
                width={1200}
                height={700}
                className="w-full h-auto"
                unoptimized
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 