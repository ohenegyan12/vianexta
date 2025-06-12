'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap, animations } from '@/utils/gsap';

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate heading with typewriter effect
    if (headingRef.current) {
      tl.fromTo(headingRef.current, 
        { opacity: 0, y: 50 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
    }

    // Animate descriptions
    if (descriptionRef.current) {
      const descriptions = descriptionRef.current.querySelectorAll('.description-text');
      tl.fromTo(descriptions, 
        animations.fadeInUp,
        { 
          ...animations.fadeInUp, 
          opacity: 1, 
          y: 0, 
          stagger: 0.2 
        }, 
        "-=0.4"
      );
    }

    // Animate button
    if (buttonRef.current) {
      tl.fromTo(buttonRef.current,
        animations.scaleIn,
        {
          ...animations.scaleIn,
          opacity: 1,
          scale: 1
        },
        "-=0.3"
      );
    }

    // Animate image with slight delay
    if (imageRef.current) {
      tl.fromTo(imageRef.current,
        { opacity: 0, x: 50, scale: 0.9 },
        { opacity: 1, x: 0, scale: 1, duration: 1, ease: "power3.out" },
        "-=0.6"
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="relative bg-gradient-to-b from-white to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Main Heading */}
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06382F] leading-tight"
            >
              IDEA TODAY,<br />
              BRAND TOMORROW.
            </h1>
            {/* Descriptions */}
            <div ref={descriptionRef} className="space-y-6">
              <p className="description-text text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                ViaNexta gives you instant access to roasters, warehouses, and ethical sourcing, so you can scale without friction.
              </p>
              <p className="description-text text-lg md:text-xl text-gray-700 font-normal leading-relaxed">
                Launch a premium coffee brand with ease. ViaNexta connects you with certified roasters, verified warehouses, and ethically sourced beans—so you can focus on growth while we handle the rest.
              </p>
            </div>
            {/* CTA Button */}
            <Link
              ref={buttonRef}
              href="/get-started"
              className="inline-block bg-[#06382F] text-white px-8 py-4 text-lg font-semibold rounded-md hover:bg-[#054a3a] transition-colors duration-300 transform hover:scale-105"
            >
              Get Started Now
            </Link>
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