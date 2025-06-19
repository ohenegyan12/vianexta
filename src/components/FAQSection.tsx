'use client';

import { useState, useRef } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "Curious how we ensure quality?",
    answer: "We work directly with certified farms and roasters who follow strict quality standards. Every batch is tested for flavor profile, freshness, and consistency. Our verified warehouses maintain optimal storage conditions, and we track every step from farm to your cup to guarantee premium quality."
  },
  {
    id: 2,
    question: "Wondering where your coffee ships from?",
    answer: "Your coffee ships from our verified warehouse network strategically located across key regions. We automatically select the closest facility to ensure fastest delivery times while maintaining the freshness and quality of your beans."
  },
  {
    id: 3,
    question: "Want to know where your beans come from?",
    answer: "All our beans are ethically sourced from premium coffee farms in Mexico and other select regions. We provide full traceability - you can see exactly which farm your coffee comes from, the harvest date, and the processing methods used. We prioritize direct trade relationships with farmers."
  },
  {
    id: 4,
    question: "Need your coffee fast and on time?",
    answer: "Yes! We offer expedited shipping options with tracking. Most orders are processed within 24 hours and shipped from our nearest warehouse. You&apos;ll receive real-time updates throughout the delivery process, and Forman can help you track your order status anytime."
  },
  {
    id: 5,
    question: "Where does my order get packed and shipped?",
    answer: "Orders are packed at our state-of-the-art warehouses that maintain optimal temperature and humidity for coffee storage. Each facility follows strict packaging protocols to preserve freshness. Your order ships from the warehouse closest to your location for fastest delivery."
  }
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const faqRef = useRef<HTMLDivElement>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section 
      ref={sectionRef}
      className="relative bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Title */}
          <div ref={titleRef}>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Frequently asked questions
            </h2>
          </div>

          {/* Right FAQ Items */}
          <div ref={faqRef} className="space-y-4">
            {faqData.map((item, index) => (
              <div 
                key={item.id}
                className="border-b border-gray-200 last:border-b-0"
              >
                <button
                  className="w-full py-6 flex items-center justify-between text-left focus:outline-none group"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="text-lg md:text-xl font-medium text-gray-900 group-hover:text-[#06382F] transition-colors duration-200">
                    {item.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    <svg 
                      className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                        activeIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                {/* Answer - Expandable */}
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <div className="text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
} 