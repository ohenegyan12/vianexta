'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

interface FeatureItem {
  id: number;
  title: string;
  description: string;
  image: string;
  gif: string;
}

const features: FeatureItem[] = [
  {
    id: 1,
    title: "Certified Roasters",
    description: "Crafted by industry-leading experts to guarantee unmatched flavor, consistency, and quality in every roast.",
    image: "/why1.jpg",
    gif: "/gif1.jpg"
  },
  {
    id: 2,
    title: "Ethically Sourced Beans",
    description: "Directly sourced from sustainable farms that prioritize fair trade practices and environmental responsibility.",
    image: "/why2.jpg",
    gif: "/gif2.jpg"
  },
  {
    id: 3,
    title: "Verified Warehouses",
    description: "State-of-the-art storage facilities that maintain optimal conditions for freshness and quality preservation.",
    image: "/why3.jpg",
    gif: "/gif3.jpg"
  },
  {
    id: 4,
    title: "Premium Packaging & Customization",
    description: "Tailored packaging solutions that reflect your brand identity while preserving coffee quality and freshness.",
    image: "/why4.jpg",
    gif: "/gif4.jpg"
  }
];

export default function WhyChooseSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [imageSrc, setImageSrc] = useState(features[0].image);
  const [nextImage, setNextImage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const progressRefs = useRef<(HTMLDivElement | null)[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Preload next image
  useEffect(() => {
    const img = new window.Image();
    img.src = features[nextImage].image;
  }, [nextImage]);

  // Auto-progression timer - reduced from 10s to 3s
  useEffect(() => {
    const startProgress = () => {
      setProgress(0);
      let currentProgress = 0;
      
      intervalRef.current = setInterval(() => {
        currentProgress += 2; // 2% every 60ms = 3 seconds total
        setProgress(currentProgress);
        
        if (currentProgress >= 100) {
          const nextIndex = (activeIndex + 1) % features.length;
          setActiveIndex(nextIndex);
          setNextImage((nextIndex + 1) % features.length);
          currentProgress = 0;
          setProgress(0);
        }
      }, 60);
    };

    startProgress();

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [activeIndex]);

  // Handle image to gif transition
  useEffect(() => {
    setImageSrc(features[activeIndex].image);
    const timer = setTimeout(() => {
      setImageSrc(features[activeIndex].gif);
    }, 1000); // 1-second delay before showing GIF

    return () => clearTimeout(timer);
  }, [activeIndex]);

  // Handle manual item click
  const handleItemClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
      setNextImage((index + 1) % features.length);
      setProgress(0);
      
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
  };

  // Animate image change
  useEffect(() => {
    if (imageRef.current) {
      // Placeholder for image animation
    }
  }, [activeIndex]);

  // Scroll animation
  useEffect(() => {
    if (sectionRef.current) {
      // Placeholder for scroll animation
    }
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="why-choose"
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
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              ViaNexta ensures every bag of coffee reflects your high standards with:
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Image Area */}
          <div className="relative">
            <div ref={imageRef} className="relative w-full h-96 lg:h-[500px] bg-gray-800 rounded-lg overflow-hidden">
              <Image
                src={imageSrc}
                alt={features[activeIndex].title}
                fill
                priority={activeIndex === 0}
                className="object-cover transition-opacity duration-300"
                sizes="(max-width: 768px) 100vw, 50vw"
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
            <div className="mt-8 lg:mt-auto">
              <p className="text-sm text-gray-400 italic">
                *Unlike generic white-label solutions, <span className="text-orange-400 font-semibold">ViaNexta</span> gives you full 
                control and higher margins—while we handle the roasting, packing, and fulfillment with zero hassle.*
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
} 