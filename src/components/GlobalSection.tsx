'use client';

import Image from 'next/image';
import { useRef } from 'react';

export default function GlobalSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);

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
             We partner with passionate roasters and buyers—delivering exceptional, traceable coffee to coffee lovers everywhere.
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