'use client';

import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { gsap } from 'gsap';

export default function About() {
  const { theme } = useContext(ThemeContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 20, willChange: 'opacity, transform' },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            if (contentRef.current) contentRef.current.style.willChange = 'auto';
          },
        }
      );
      return () => {
        gsap.killTweensOf(contentRef.current); 
      };
    }
  }, [theme]);

  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 md:px-8 data-[theme=theme2]:flex data-[theme=theme2]:flex-col gap-6">
      <div ref={contentRef}>
        <h1 className="text-3xl font-bold md:text-4xl">About Us</h1>
        <p className="mb-6 max-w-2xl">
          We are a passionate team dedicated to bringing you the best products with a customizable experience.
        </p>
        <button className="btn-primary">Learn More</button>
      </div>
    </main>
  );
}