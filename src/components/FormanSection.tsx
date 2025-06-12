'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';

export default function FormanSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

    // Scroll animation
  useEffect(() => {
    if (sectionRef.current && textRef.current && imageRef.current) {
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate text from left
      gsap.fromTo(textRef.current, 
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate image from right
      gsap.fromTo(imageRef.current, 
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 lg:py-24 text-white"
      style={{ backgroundColor: '#06382F' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div ref={textRef} className="space-y-8">
            {/* Header */}
            <div>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-2">
                Meet
              </h2>
              <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6" style={{ color: '#FFD700' }}>
                Forman!
              </h2>
              <p className="text-xl md:text-2xl text-white font-medium">
                Your Personal Coffee Assistant
              </p>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-200 leading-relaxed">
                Say hello to Forman, our AI-powered agent designed to make your coffee 
                journey effortless. <span style={{ color: '#FFD700' }}>Whether you&apos;re a first-time buyer or a loyal customer, Forman 
                helps you:</span>
              </p>

              {/* Feature List */}
              <div className="space-y-4">
                {[
                  "Choose the right beans based on your taste and roast preferences",
                  "Place and track orders seamlessly", 
                  "Book purchases on your behalf—hands-free, hassle-free"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="flex-shrink-0 w-6 h-6 rounded-sm flex items-center justify-center mt-0.5"
                      style={{ backgroundColor: '#FFD700' }}
                    >
                      <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-gray-200 leading-relaxed">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <p className="text-sm text-gray-300 italic">
                *Available 24/7, Forman delivers the same warmth and precision we put into every bag of coffee.*
              </p>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button 
                className="px-8 py-4 rounded-lg font-bold text-black text-lg hover:opacity-90 transition-opacity duration-200"
                style={{ backgroundColor: '#FFD700' }}
              >
                Try Forman For Free
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div ref={imageRef} className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-lg">
              <img
                src="/forman.svg"
                alt="Forman AI Assistant"
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 