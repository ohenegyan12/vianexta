'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { gsap, animations } from '@/utils/gsap';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (navRef.current) {
      // Animate navigation items on mount
      const children = navRef.current.querySelectorAll('.nav-item');
      gsap.fromTo(children, animations.fadeInUp, {
        ...animations.fadeInUp,
        opacity: 1,
        y: 0,
        delay: 0.2,
        stagger: 0.1
      });
    }
  }, []);

  return (
    <nav ref={navRef} className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="nav-item flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="ViaNexta Logo"
                width={150}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Centered Navigation Menu */}
          <div className="flex-1 flex justify-center">
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/why-choose-us"
                className="nav-item text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Why Choose Us
              </Link>
              <Link
                href="/testimonials"
                className="nav-item text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </Link>
              <Link
                href="/careers"
                className="nav-item text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Careers
              </Link>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Link
              href="/signin"
              className="nav-item text-gray-700 hover:text-gray-900 px-4 py-2 text-sm font-medium border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
            >
              Sign In
            </Link>
            <Link
              href="/contact"
              className="nav-item bg-[#06382F] text-white px-4 py-2 text-sm font-medium rounded-md hover:bg-[#054a3a] transition-colors"
            >
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 