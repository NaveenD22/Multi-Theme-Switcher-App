'use client';

import { useContext, useEffect, useRef } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import { gsap } from 'gsap';

export default function Contact() {
  const { theme } = useContext(ThemeContext);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = contentRef.current; 
    if (element) {
      gsap.fromTo(
        element,
        { opacity: 0, y: 20, willChange: 'opacity, transform' },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power2.out',
          onComplete: () => {
            if (element) element.style.willChange = 'auto';
          },
        }
      );
      return () => {
        gsap.killTweensOf(element); 
      };
    }
  }, [theme]);

  return (
    <main className="container mx-auto px-4 py-6 sm:px-6 md:px-8 data-[theme=theme2]:flex data-[theme=theme2]:flex-col gap-6">
      <div ref={contentRef}>
        <h1 className="text-3xl font-bold md:text-4xl">Contact Us</h1>
        <p className="mb-6 max-w-2xl">
          Reach out to us for any inquiries or support. We&apos;re here to help!
        </p>
        <button className="btn-primary">Get in Touch</button>
      </div>
    </main>
  );
}