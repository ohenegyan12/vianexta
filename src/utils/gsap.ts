import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation presets for consistent animations across the site
export const animations = {
  // Fade in from bottom
  fadeInUp: {
    y: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  },
  
  // Fade in from left
  fadeInLeft: {
    x: -50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  },
  
  // Fade in from right
  fadeInRight: {
    x: 50,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out"
  },
  
  // Scale in
  scaleIn: {
    scale: 0.8,
    opacity: 0,
    duration: 0.6,
    ease: "back.out(1.7)"
  },
  
  // Stagger children
  stagger: {
    amount: 0.3,
    from: "start"
  }
};

// Common animation functions
export const animateIn = (element: string | Element, animation: any, delay = 0) => {
  return gsap.fromTo(element, animation, {
    ...animation,
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    delay
  });
};

export const animateOnScroll = (element: string | Element, animation: any, triggerElement?: string | Element) => {
  return gsap.fromTo(element, animation, {
    ...animation,
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    scrollTrigger: {
      trigger: triggerElement || element,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
};

export { gsap };
export default gsap; 