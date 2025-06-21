'use client';

import { useState, useRef, useEffect } from 'react';

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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simple auto-rotation
  useEffect(() => {
    // Clear any existing interval
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Start new interval
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => {
        // Move to next step, or back to 0 if at the end
        return current === steps.length - 1 ? 0 : current + 1;
      });
    }, 15000);

    // Cleanup on unmount
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []); // Only run on mount

  // Handle step click
  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    // Reset the timer when manually clicking
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

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
            Your Supply Chain Simplified
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Experience specialty coffee in just three seamless steps—source, craft, deliver.
          </p>
        </div>

        {/* Step Cards Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-start justify-center">
          
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
            
            // Responsive card width
            const cardWidth = isActive ? '100%' : '100%'; // Mobile default
            const cardHeight = isActive ? '480px' : '160px';

            return (
              <div  
                key={step.id}
                className={`transition-all duration-500 ease-in-out cursor-pointer flex-shrink-0 w-full ${isActive ? 'lg:w-[1082px] lg:h-[480px]' : 'lg:w-[167px] lg:h-[480px]'} ${isActive ? 'h-[480px]' : 'h-[160px]'}`}
                onClick={() => handleStepClick(index)}
              >
                <div 
                  className={`h-full flex ${isActive ? 'flex-col lg:flex-row' : ''}`}
                  style={{ 
                    backgroundColor: colors.bg,
                    borderRadius: '12px'
                  }}
                >
                  {isActive ? (
                                         // Active Card Layout
                     <div key={`active-${index}`} className="flex flex-col lg:flex-row w-full">
                      {/* Left Content Area */}
                      <div className="flex-1 p-4 lg:p-8 flex flex-col">
                        {/* Step Number */}
                        <span 
                          className="font-medium mb-2 lg:mb-4 block"
                          style={{ 
                            color: colors.text,
                            fontSize: '13px',
                            fontFamily: 'Inter'
                          }}
                        >
                          {step.number}
                        </span>
                        
                                                 {/* Title - Split into two lines */}
                         <div 
                           className="mb-4 lg:mb-8 opacity-0 animate-fade-in"
                           style={{
                             animationDelay: '0.2s',
                             animationFillMode: 'forwards'
                           }}
                         >
                          {step.title === "Select Your Coffee Bean" && (
                            <>
                              <h3 
                                className="font-medium leading-tight text-2xl lg:text-[54.14px]"
                                style={{ 
                                  color: colors.text,
                                  fontFamily: 'Inter'
                                }}
                              >
                                Select Your
                              </h3>
                              <h3 
                                className="font-medium leading-tight text-2xl lg:text-[54.14px]"
                                style={{ 
                                  color: colors.text,
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
                                className="font-medium leading-tight text-2xl lg:text-[54.14px]"
                                style={{ 
                                  color: colors.text,
                                  fontFamily: 'Inter'
                                }}
                              >
                                Select Your Grind
                              </h3>
                              <h3 
                                className="font-medium leading-tight text-2xl lg:text-[54.14px]"
                                style={{ 
                                  color: colors.text,
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
                                className="font-medium leading-tight text-2xl lg:text-[54.14px]"
                                style={{ 
                                  color: colors.text,
                                  fontFamily: 'Inter'
                                }}
                              >
                                Customize Your
                              </h3>
                              <h3 
                                className="font-medium leading-tight text-2xl lg:text-[54.14px]"
                                style={{ 
                                  color: colors.text,
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
                           className="space-y-2 lg:space-y-4 flex-grow opacity-0 animate-fade-in"
                           style={{
                             animationDelay: '0.3s',
                             animationFillMode: 'forwards'
                           }}
                         >
                           {step.points.map((point, pointIndex) => (
                             <div key={pointIndex} className="flex items-start gap-2 lg:gap-3">
                               <div 
                                 className="flex-shrink-0 w-4 h-4 lg:w-5 lg:h-5 flex items-center justify-center mt-0.5"
                                 style={{ 
                                   backgroundColor: colors.checkmark,
                                   borderRadius: '2px'
                                 }}
                               >
                                 <svg 
                                   className="w-2.5 h-2.5 lg:w-3 lg:h-3" 
                                   fill="currentColor" 
                                   viewBox="0 0 20 20"
                                   style={{ color: index === 2 ? '#06382F' : 'white' }}
                                 >
                                   <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                 </svg>
                               </div>
                               <p 
                                 className="leading-relaxed text-sm lg:text-base"
                                 style={{ color: colors.text }}
                               >
                                 {point}
                               </p>
                             </div>
                           ))}
                         </div>
                      </div>
                      
                      {/* Right GIF Container */}
                      <div className="flex items-center justify-center mt-6 lg:mt-0 p-4 lg:pr-8 mb-6 lg:mb-0">
                        <div
                          ref={imageRef}
                          className="relative overflow-hidden flex items-center justify-center w-full h-[180px] lg:w-[465px] lg:h-[347px]"
                          style={{ borderRadius: '20px', border: '4px solid #FFFFFF' }}
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
                     <div className="w-full h-full flex items-end p-4 lg:p-6">
                       <span 
                         className="font-medium text-base lg:text-[32px]"
                         style={{ 
                           color: colors.text,
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