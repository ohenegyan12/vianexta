'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/utils/gsap';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string; // We'll use placeholder images for now
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Certified Roasters",
    description: "Crafted by industry-leading experts to guarantee unmatched flavor, consistency, and quality in every roast.",
    image: "/hero_gif.gif" // Using existing image as placeholder
  },
  {
    id: 2,
    title: "Ethically Sourced Beans",
    description: "Directly sourced from sustainable farms that prioritize fair trade practices and environmental responsibility.",
    image: "/hero_gif.gif"
  },
  {
    id: 3,
    title: "Verified Warehouses",
    description: "State-of-the-art storage facilities that maintain optimal conditions for freshness and quality preservation.",
    image: "/hero_gif.gif"
  },
  {
    id: 4,
    title: "Premium Packaging & Customization",
    description: "Tailored packaging solutions that reflect your brand identity while preserving coffee quality and freshness.",
    image: "/hero_gif.gif"
  }
];

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-progression timer
  useEffect(() => {
    const startProgress = () => {
      setProgress(0);
      let currentProgress = 0;
      
      intervalRef.current = setInterval(() => {
        currentProgress += 1; // 1% every 100ms = 10 seconds total
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          setActiveIndex((prev) => (prev + 1) % features.length);
          currentProgress = 0;
          setProgress(0);
        }
      }, 100);
    };

    startProgress();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  // Handle manual item click
  const handleItemClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setProgress(0);
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  // Animate image change
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.to(imageRef.current, {
            opacity: 1,
            duration: 0.3,
            ease: "power2.inOut"
          });
        }
      });
    }
  }, [activeIndex]);

  // Scroll animation
  useEffect(() => {
    if (sectionRef.current) {
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
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-[#06382F] py-16 lg:py-24 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Why Brands Choose <span className="text-orange-400">ViaNexta</span>
          </h2>
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-2">
              Freshness, quality, and trust define your brand.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed whitespace-nowrap">
              ViaNexta ensures every bag of coffee reflects your high standards with:
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Image Area */}
          <div className="relative">
            <div ref={imageRef} className="relative w-full h-96 lg:h-[500px] bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={features[activeIndex].image}
                alt={features[activeIndex].title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Features List */}
          <div className="flex flex-col h-96 lg:h-[500px]">
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className="transition-all duration-300 cursor-pointer"
                  onClick={() => handleItemClick(index)}
                >
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  
                  {/* Description - only show for active item */}
                  {index === activeIndex && (
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {feature.description}
                    </p>
                  )}
                  
                  {/* Separator Line with Loading Animation */}
                  <div className="relative w-full h-px bg-white">
                    {index === activeIndex && (
                      <div 
                        ref={el => { progressRefs.current[index] = el; }}
                        className="absolute top-0 left-0 h-full bg-orange-400 transition-all duration-100 ease-linear"
                        style={{ 
                          width: `${progress}%`
                        }}
                      ></div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Small Description - aligned to bottom */}
            <div className="mt-auto">
              <p className="text-sm text-gray-400 italic">
                *Unlike generic white-label solutions, <span className="text-orange-400 font-semibold">ViaNexta</span> gives you full 
                control while handling the roasting, packing, and fulfillment with unmatched precision.*
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 