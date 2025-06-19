'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 
              ref={headingRef}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#06382F] leading-tight text-center md:text-left"
            >
              IDEA TODAY, BRAND TOMORROW.
            </h1>
            {/* Descriptions */}
            <div ref={descriptionRef} className="space-y-6 text-center md:text-left">
              <p className="description-text text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                ViaNexta gives you instant access to roasters, warehouses, and ethical sourcing, so you can grow without friction.
              </p>
              <p className="description-text text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                Start earning more from your own premium coffee brand—without the hassle.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <a
                ref={buttonRef}
                href="https://www.vianexta.com/getStarted"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#06382F] text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-[#054a3a] transition-colors duration-300 transform hover:scale-105"
              >
                Get Started Now
              </a>
            </div>
          </div>
          {/* Right Image */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full h-auto">
              <Image
                src="/heroimage.svg"
                alt="ViaNexta Hero Illustration"
                width={600}
                height={500}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 