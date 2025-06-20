'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
                href="#why-choose"
                className="nav-item text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Why Choose Us
              </Link>
              <Link
                href="#testimonials"
                className="nav-item text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Testimonials
              </Link>
              <a
                href="https://www.vianexta.com/work_with_us"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item text-gray-700 hover:text-gray-900 px-3 py-2 text-sm font-medium transition-colors"
              >
                Careers
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="https://www.vianexta.com/login_page"
              target="_blank"
              rel="noopener noreferrer"
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50 animate-fade-in">
            <div className="flex flex-col items-center py-4 space-y-2">
              <Link
                href="#why-choose"
                className="nav-item w-full text-center text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Why Choose Us
              </Link>
              <Link
                href="#testimonials"
                className="nav-item w-full text-center text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <a
                href="https://www.vianexta.com/work_with_us"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item w-full text-center text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Careers
              </a>
              <Link
                href="https://www.vianexta.com/login_page"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-item w-full text-center text-gray-700 hover:text-gray-900 px-4 py-3 text-base font-medium border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link
                href="/contact"
                className="nav-item w-full text-center bg-[#06382F] text-white px-4 py-3 text-base font-medium rounded-md hover:bg-[#054a3a] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 