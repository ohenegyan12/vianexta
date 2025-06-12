'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/utils/gsap';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  // Scroll animation
  useEffect(() => {
    if (footerRef.current && ctaRef.current && linksRef.current) {
      // Removed parallax scroll effect
      gsap.fromTo(footerRef.current, 
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate CTA cards
      gsap.fromTo(ctaRef.current.children, 
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-gradient-to-b from-white to-white">
      
      {/* CTA Section */}
      <div className="py-16 lg:py-24 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={ctaRef} className="flex flex-col lg:flex-row gap-3 max-w-6xl mx-auto">
            
            {/* Left Image Card - Get Started Today */}
            <div 
              className="relative overflow-hidden flex-shrink-0 w-full lg:w-auto"
              style={{
                width: '733px',
                height: '391px',
                borderRadius: '12px',
                backgroundImage: 'url(/ctaimage.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {/* Overlay with exact specs */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 
                    className="text-white font-semibold"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '45px',
                      fontWeight: 600,
                      lineHeight: '1.2'
                    }}
                  >
                    Get Started Today
                  </h3>
                </div>
              </div>
            </div>

            {/* Right Content Card - Your Brand Your Coffee */}
            <div 
              className="bg-black flex flex-col justify-between px-6 lg:px-8 py-6 flex-shrink-0 w-full lg:w-auto"
              style={{
                width: '353px',
                height: '391px',
                borderRadius: '12px'
              }}
            >
              <div className="space-y-4">
                {/* Main Heading */}
                <div>
                  <h3 
                    className="text-white font-semibold"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '48px',
                      fontWeight: 600,
                      lineHeight: '42px',
                      letterSpacing: '-1.05px'
                    }}
                  >
                    Your Brand.
                  </h3>
                  <h3 
                    className="text-white font-semibold"
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '48px',
                      fontWeight: 600,
                      lineHeight: '42px',
                      letterSpacing: '-1.05px'
                    }}
                  >
                    Your Coffee.
                  </h3>
                </div>
                
                {/* Subtitle */}
                <p 
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '15px',
                    fontWeight: 400,
                    color: '#696969',
                    lineHeight: '17.5px',
                    letterSpacing: '-0.55px'
                  }}
                >
                  Backed by Certified Roasters & Warehouses.
                </p>
                
                {/* Description */}
                <p 
                  style={{
                    fontFamily: 'Inter',
                    fontSize: '11.5px',
                    fontWeight: 400,
                    color: '#FFFFFF',
                    lineHeight: '16.3px',
                    letterSpacing: '-0.23px'
                  }}
                >
                  Launch your premium coffee brand today, without worrying about sourcing, roasting, or fulfillment.
                </p>
              </div>
              
              {/* Button at bottom */}
              <button 
                className="bg-white text-black hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2"
                style={{
                  fontFamily: 'Inter',
                  fontSize: '11.5px',
                  fontWeight: 400,
                  width: '307px',
                  height: '30px',
                  borderRadius: '9px'
                }}
              >
                Get Started Now
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Footer Links Section */}
      <div ref={linksRef} className="border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* Logo Section */}
            <div className="lg:col-span-1">
              <img
                src="/logo.png"
                alt="ViaNexta"
                className="h-12 w-auto mb-4"
              />
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">Why Choose Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">How It Works</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">Testimonials</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">FAQ&apos;s</a></li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200 flex items-center gap-2">
                    FORMAN
                    <span className="bg-[#06382F] text-white text-xs px-2 py-1 rounded">AI</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">Work With Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">Contact Us</a></li>
              </ul>
            </div>

            {/* Actions */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Actions</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">Login</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">Create An Account</a></li>
              </ul>
            </div>

          </div>

          {/* Bottom Footer */}
          <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600">
              <span>2025 © ViaNexta | All Rights Reserved.</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-[#06382F] transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-[#06382F] transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-[#06382F] transition-colors duration-200">Get Help</a>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.175 1.219-5.175s-.312-.623-.312-1.543c0-1.446.837-2.525 1.881-2.525.887 0 1.315.665 1.315 1.462 0 .891-.567 2.225-.859 3.459-.245 1.035.519 1.879 1.541 1.879 1.849 0 3.095-2.386 3.095-5.23 0-2.157-1.452-3.765-4.058-3.765-2.973 0-4.844 2.205-4.844 4.659 0 .85.249 1.453.631 1.917.168.196.192.267.131.484-.044.154-.141.566-.18.723-.058.23-.234.312-.539.169-1.332-.546-1.93-2.002-1.93-3.64 0-2.708 2.267-5.955 6.751-5.955 3.621 0 6.009 2.595 6.009 5.358 0 3.667-2.033 6.404-5.07 6.404-.972 0-1.888-.522-2.201-1.176l-.548 2.086c-.196.746-.615 1.486-.955 2.033.763.233 1.567.359 2.398.359 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-[#06382F] transition-colors duration-200">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

          </div>

        </div>
      </div>

    </footer>
  );
} 