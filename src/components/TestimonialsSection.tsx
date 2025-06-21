'use client';

import { useRef } from 'react';

interface Testimonial {
  id: number;
  name: string;
  username: string;
  avatar: string;
  content: string;
  verified?: boolean;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "danieraezorsharp",
    username: "@danieraezorsharp",
    avatar: "/danieraezorsharp.png",
    content: "Ooouuu!!! This is TOP TIER!!!",
  },
  {
    id: 2,
    name: "mrwld101",
    username: "@mrwld101",
    avatar: "/mrwld101.png",
    content: "That&apos;s the way you do it! Big things",
  },
  {
    id: 3,
    name: "designgym.co",
    username: "@designgym.co",
    avatar: "/designgym.co.png",
    content: "Was introduced to your coffee thanks to @amplify @bphlfest",
  },
  {
    id: 4,
    name: "rachboogie215",
    username: "@rachboogie215",
    avatar: "/rachboogie215.png",
    content: "Love this! Yes",
  },
  {
    id: 5,
    name: "angelicmolos",
    username: "@angelicmolos",
    avatar: "/angelicmolos.png",
    content: "OMG!!!!",
  },
  {
    id: 6,
    name: "bean2beancoffeeco",
    username: "@bean2beancoffeeco",
    avatar: "/bean2beancoffeeco.png",
    content: "It's so goooooddd",
  },
  {
    id: 7,
    name: "thechocolatebarista",
    username: "@thechocolatebarista",
    avatar: "/thechocolatebarista.png",
    content: "More of this!!",
  },
  {
    id: 8,
    name: "delhibakery",
    username: "@delhibakery",
    avatar: "/delhibakery.png",
    content: "So dope",
  },
  {
    id: 9,
    name: "browngirlsbrew",
    username: "@browngirlsbrew",
    avatar: "/browngirlsbrew.png",
    content: "#winning",
  },
  {
    id: 10,
    name: "beijaflornaturals",
    username: "@beijaflornaturals",
    avatar: "/beijaflornaturals.png",
    content: "I love this. Can't wait to grab a coffee.",
  },
  {
    id: 11,
    name: "mznoname82",
    username: "@mznoname82",
    avatar: "/mznoname82-01.png",
    content: "Really amazing and inspiring!",
  },
  {
    id: 12,
    name: "dachickenshack",
    username: "@dachickenshack",
    avatar: "/avatar1.png", 
    content: "Amazing!!! Keep breaking barriers!",
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  return (
    <section 
      ref={sectionRef}
      id="testimonials"
      className="relative bg-white py-16 lg:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#06382F] leading-tight mb-6">
            What Our Customers Are Saying
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto">
            Hear how coffee lovers around the world experience the taste, quality, and care behind 
            every <span className="font-semibold text-[#06382F]">ViaNexta</span> cup.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => { cardsRef.current[index] = el; }}
              className="break-inside-avoid rounded-2xl p-6 text-white inline-block w-full"
              style={{ backgroundColor: '#000000' }}
            >
              {/* Content */}
              <div className="text-gray-100 leading-relaxed mb-4">
                {testimonial.content.split('@ViaNexta').map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-orange-400 font-semibold">@ViaNexta</span>
                    )}
                  </span>
                ))}
              </div>

              {/* Footer with profile */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1">
                    <h3 className="font-semibold text-white truncate">
                      {testimonial.name}
                    </h3>
                    {testimonial.verified && (
                      <svg className="w-4 h-4 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm truncate">
                    {testimonial.username}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <img 
                    src="/instagramlogo.svg" 
                    alt="Instagram"
                    className="w-5 h-5"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 