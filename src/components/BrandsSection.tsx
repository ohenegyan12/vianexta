"use client";
import React, { useRef, useEffect, useState } from "react";

const logos = Array.from({ length: 10 }, (_, i) => `/brands/${i + 1}.png`);

export default function BrandsSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const [marqueeWidth, setMarqueeWidth] = useState(0);

  useEffect(() => {
    if (marqueeRef.current) {
      setMarqueeWidth(marqueeRef.current.scrollWidth / 2);
    }
  }, []);

  return (
    <section className="relative py-12 bg-white overflow-hidden">
      <h2 className="text-center text-black font-bold text-lg mb-8 tracking-wide">
        TRUSTED BY BUSINESSES BIG AND SMALL, EVERYWHERE
      </h2>
      <div className="relative w-full">
        {/* Blurs */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10" style={{background: "linear-gradient(to right, white 60%, transparent)"}} />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10" style={{background: "linear-gradient(to left, white 60%, transparent)"}} />
        {/* Marquee */}
        <div className="overflow-x-hidden">
          <div
            ref={marqueeRef}
            className="flex gap-16 whitespace-nowrap"
            style={{
              animation: marqueeWidth
                ? `marquee ${marqueeWidth / 80}s linear infinite` // 80px/sec speed
                : undefined,
            }}
          >
            {[...logos, ...logos].map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Brand logo ${idx % 10 + 1}`}
                className="h-16 w-auto object-contain inline-block select-none"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
} 