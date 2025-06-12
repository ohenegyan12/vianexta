'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';

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
    name: "Elena",
    username: "@brewwithElena",
    avatar: "/hero_gif.gif",
    content: "@ViaNexta is hands down the best coffee I&apos;ve ever had. From flavour to freshness—every cup feels like a treat."
  },
  {
    id: 2,
    name: "John",
    username: "@johncjgo", 
    avatar: "/hero_gif.gif",
    content: "By far, @ViaNexta has given me more joy than any other coffee brand. I ordered on a whim and was blown away—not just by the rich flavor, but by the story behind it. Ethically sourced, fast delivery, and beautiful packaging. It&apos;s everything I didn&apos;t know I was missing. How is this not more well known?"
  },
  {
    id: 3,
    name: "Liam",
    username: "@liamslipe",
    avatar: "/hero_gif.gif", 
    content: "Just brewed my first cup of @ViaNexta. WOW. The aroma hit first, then the flavor sealed it. I'm obsessed. 😍☕"
  },
  {
    id: 4,
    name: "Tianzhou",
    username: "@tianzhouchai",
    avatar: "/hero_gif.gif",
    content: "I love how @ViaNexta connects you to the farms. It's not just coffee—it's a story in every sip. ❤️🌾"
  },
  {
    id: 5,
    name: "Nina", 
    username: "@Nina12",
    avatar: "/hero_gif.gif",
    content: "Tried @ViaNexta on a friend&apos;s recommendation. Now it&apos;s a ritual. The quality is unreal. ☕😍"
  },
  {
    id: 6,
    name: "Chris",
    username: "@chrisshow",
    avatar: "/hero_gif.gif",
    content: "Never knew coffee could taste this clean. @ViaNexta is my new go-to. Roasted to perfection. ❤️🔥"
  },
  {
    id: 7,
    name: "NeverLand",
    username: "@neverlandoff", 
    avatar: "/hero_gif.gif",
    content: "Looking for specialty coffee? I recommend @ViaNexta. Smooth ordering, fast replies to my questions, and honestly—it&apos;s the first coffee brand that looks and feels premium from bean to bag. Haven&apos;t finished my first bag yet, but so far it&apos;s blowing my expectations out of the water."
  },
  {
    id: 8,
    name: "Valentin Prugnaud",
    username: "@valentinprgnd",
    avatar: "/hero_gif.gif",
    content: "Switched to @ViaNexta this weekend—smooth, bold, and ethically sourced. Loving it so far. ☕️🔥",
    verified: true
  },
  {
    id: 9,
    name: "Darren Pinder",
    username: "@dmpinder", 
    avatar: "/hero_gif.gif",
    content: "I&apos;m utterly blown away by @ViaNexta! They do everything right. I&apos;m now in love with experiencing beans from Mexico, delivered fast, packed beautifully, and sourced ethically. The flavor is unmatched, the story is inspiring, and the whole experience feels premium from start to sip. 😍"
  },
  {
    id: 10,
    name: "Markus Leimer",
    username: "@markusleih2",
    avatar: "/hero_gif.gif",
    content: "What are you brewing these days? For me, it's all about @ViaNexta — love the clean flavor, traceable sourcing, and smooth experience. Curious what others are sipping ☕"
  },
  {
    id: 11,
    name: "kostya",
    username: "@teskostya", 
    avatar: "/hero_gif.gif",
    content: "I absolutely love services like @ViaNexta Simple, tastes amazing, @ViaNexta is perfect for anyone just getting into specialty coffee I don&apos;t remember finding anything this good when I first started exploring better brews a few years ago."
  }
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

      // Animate cards with stagger
      gsap.fromTo(cardsRef.current, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
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