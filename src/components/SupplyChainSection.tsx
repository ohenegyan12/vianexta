'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/utils/gsap';

interface StepItem {
  id: number;
  number: string;
  title: string;
  points: string[];
  image: string;
}

const steps: StepItem[] = [
  {
    id: 1,
    number: "01",
    title: "Select Your Coffee Bean",
    points: [
      "Browse and select premium, ethically sourced coffee beans, (roasted, green, or wholesale)",
      "Easily filter by country, ratings, and more to find your perfect beans."
    ],
    image: "/new-1.gif"
  },
  {
    id: 2,
    number: "02", 
    title: "Select Your Grind & Roast Type",
    points: [
      "Choose your preferred roast — light, medium, dark, or custom.",
      "Select your grind size — whole bean, coarse, medium, fine, or espresso-ready."
    ],
    image: "/new-2.gif"
  },
  {
    id: 3,
    number: "03",
    title: "Customize Your Brand",
    points: [
      "Upload your logo & brand assets",
      "Preview real-time renders before finalizing"
    ],
    image: "/new-3.gif"
  }
];

export default function SupplyChainSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  // Handle step click
  const handleStepClick = (index: number) => {
    setActiveIndex(index);
  };

  // Animate image change with delay for content
  useEffect(() => {
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.2,
        ease: "power2.inOut",
        onComplete: () => {
          // Delay the image appear to sync with card expansion
          gsap.to(imageRef.current, {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            delay: 0.3,
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
      className="relative bg-white py-16 lg:py-24"
    >
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.4s ease-out;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06382F] leading-tight mb-6">
            Your Coffee Supply Chain, Simplified
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Experience specialty Mexican coffee in just three seamless steps—source, craft, deliver.
          </p>
        </div>

        {/* Step Cards Container */}
        <div className="flex gap-6 items-start justify-center">
          
          {/* Step Cards */}
          {steps.map((step, index) => {
            const isActive = index === activeIndex;
            
            // Define colors for each step
            const getStepColors = (stepIndex: number) => {
              if (stepIndex === 0) { // Step 01
                return {
                  bg: '#E6E6E6',
                  text: '#000000',
                  checkmark: '#06382F'
                };
              } else if (stepIndex === 1) { // Step 02
                return {
                  bg: '#333333',
                  text: '#E5E5E5',
                  checkmark: '#06382F'
                };
              } else { // Step 03
                return {
                  bg: '#000000',
                  text: '#E5E5E5',
                  checkmark: '#FFFFFF'
                };
              }
            };

            const colors = getStepColors(index);
            
            // Exact Figma dimensions
            const cardWidth = isActive ? '1082px' : '167px';
            const cardHeight = '480px';

            return (
              <div 
                key={step.id}
                className="transition-all duration-500 ease-in-out cursor-pointer flex-shrink-0"
                style={{ 
                  width: cardWidth,
                  height: cardHeight
                }}
                onClick={() => handleStepClick(index)}
              >
                <div 
                  className="h-full flex"
                  style={{ 
                    backgroundColor: colors.bg,
                    borderRadius: '12px'
                  }}
                >
                  {isActive ? (
                                         // Active Card Layout
                     <div key={`active-${index}`} className="flex w-full">
                      {/* Left Content Area */}
                      <div className="flex-1 p-8 flex flex-col">
                        {/* Step Number */}
                        <span 
                          className="font-medium mb-4 block"
                          style={{ 
                            color: colors.text,
                            fontSize: '15.13px',
                            fontFamily: 'Inter'
                          }}
                        >
                          {step.number}
                        </span>
                        
                                                 {/* Title - Split into two lines */}
                         <div 
                           className="mb-8 opacity-0 animate-fade-in"
                           style={{
                             animationDelay: '0.2s',
                             animationFillMode: 'forwards'
                           }}
                         >
                          {step.title === "Select Your Coffee Bean" && (
                            <>
                              <h3 
                                className="font-medium leading-tight"
                                style={{ 
                                  color: colors.text,
                                  fontSize: '54.14px',
                                  fontFamily: 'Inter'
                                }}
                              >
                                Select Your
                              </h3>
                              <h3 
                                className="font-medium leading-tight"
                                style={{ 
                                  color: colors.text,
                                  fontSize: '54.14px',
                                  fontFamily: 'Inter'
                                }}
                              >
                                Coffee Bean
                              </h3>
                            </>
                          )}
                          {step.title === "Select Your Grind & Roast Type" && (
                            <>
                              <h3 
                                className="font-medium leading-tight"
                                style={{ 
                                  color: colors.text,
                                  fontSize: '54.14px',
                                  fontFamily: 'Inter'
                                }}
                              >
                                Select Your Grind
                              </h3>
                              <h3 
                                className="font-medium leading-tight"
                                style={{ 
                                  color: colors.text,
                                  fontSize: '54.14px',
                                  fontFamily: 'Inter'
                                }}
                              >
                                & Roast Type
                              </h3>
                            </>
                          )}
                          {step.title === "Customize Your Brand" && (
                            <>
                              <h3 
                                className="font-medium leading-tight"
                                style={{ 
                                  color: colors.text,
                                  fontSize: '54.14px',
                                  fontFamily: 'Inter'
                                }}
                              >
                                Customize Your
                              </h3>
                              <h3 
                                className="font-medium leading-tight"
                                style={{ 
                                  color: colors.text,
                                  fontSize: '54.14px',
                                  fontFamily: 'Inter'
                                }}
                              >
                                Brand
                              </h3>
                            </>
                          )}
                        </div>
                        
                                                 {/* Content with Checkboxes */}
                         <div 
                           className="space-y-4 flex-grow opacity-0 animate-fade-in"
                           style={{
                             animationDelay: '0.3s',
                             animationFillMode: 'forwards'
                           }}
                         >
                           {step.points.map((point, pointIndex) => (
                             <div key={pointIndex} className="flex items-start gap-3">
                               <div 
                                 className="flex-shrink-0 w-5 h-5 flex items-center justify-center mt-0.5"
                                 style={{ 
                                   backgroundColor: colors.checkmark,
                                   borderRadius: '2px',
                                   width: '20px',
                                   height: '20px'
                                 }}
                               >
                                 <svg 
                                   className="w-3 h-3" 
                                   fill="currentColor" 
                                   viewBox="0 0 20 20"
                                   style={{ color: index === 2 ? '#06382F' : 'white' }}
                                 >
                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                 </svg>
                               </div>
                               <p 
                                 className="leading-relaxed"
                                 style={{ color: colors.text }}
                               >
                                 {point}
                               </p>
                             </div>
                           ))}
                         </div>
                      </div>
                      
                      {/* Right GIF Container */}
                      <div className="flex items-center justify-center pr-8">
                                                 <div 
                           ref={imageRef}
                           className="relative overflow-hidden flex items-center justify-center"
                           style={{
                             width: '465px',
                             height: '347px',
                             borderRadius: '40px',
                             border: '4px solid #FFFFFF'
                           }}
                         >
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                                         // Inactive Card Layout - Just number at bottom left
                     <div className="w-full h-full flex items-end p-6">
                       <span 
                         className="font-medium"
                         style={{ 
                           color: colors.text,
                           fontSize: '32px',
                           fontFamily: 'Inter'
                         }}
                       >
                         {step.number}
                       </span>
                     </div>
                  )}
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
} 