"use client";
import React, { useEffect, useState } from "react";
import ClareChatDrawer from "./ClareChatDrawer";

const GREEN = "#07382F";

export default function ClareChatButton() {
  const [onGreen, setOnGreen] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function checkOverlap() {
      const button = document.getElementById("clare-chat-btn");
      if (!button) return;
      const buttonRect = button.getBoundingClientRect();
      const greenSections = document.querySelectorAll<HTMLElement>(".green-section");
      let overlap = false;
      greenSections.forEach((section) => {
        const sectionRect = section.getBoundingClientRect();
        // Check if button bottom overlaps section (with some margin)
        if (
          buttonRect.bottom > sectionRect.top &&
          buttonRect.top < sectionRect.bottom &&
          buttonRect.right > sectionRect.left &&
          buttonRect.left < sectionRect.right
        ) {
          overlap = true;
        }
      });
      setOnGreen(overlap);
    }
    window.addEventListener("scroll", checkOverlap);
    window.addEventListener("resize", checkOverlap);
    setTimeout(checkOverlap, 100); // Initial check after mount
    return () => {
      window.removeEventListener("scroll", checkOverlap);
      window.removeEventListener("resize", checkOverlap);
    };
  }, []);

  return (
    <>
      <button
        id="clare-chat-btn"
        className="fixed z-50 bottom-8 right-8 flex items-center gap-3 px-8 py-4 rounded-full shadow-lg transition-colors duration-300 cursor-pointer"
        style={{
          background: onGreen ? "#fff" : GREEN,
          color: onGreen ? GREEN : "#fff",
          fontWeight: 500,
          fontSize: "1.25rem",
          boxShadow: "0 4px 24px 0 rgba(7,56,47,0.15)",
          border: onGreen ? `1.5px solid ${GREEN}` : "none",
        }}
        aria-label="Talk to Clare"
        onClick={() => setOpen(true)}
      >
        <img
          src="/clare-icon.svg"
          alt="Clare Icon"
          className="h-7 w-7"
          style={{
            display: "inline-block",
            filter: onGreen ? `invert(19%) sepia(97%) saturate(749%) hue-rotate(120deg) brightness(95%) contrast(101%)` : "none",
            // This filter makes the icon green when on white
          }}
          draggable={false}
        />
        <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
          Talk to Clare
        </span>
      </button>
      <ClareChatDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
} 