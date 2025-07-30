'use client';

import { useEffect, useRef } from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import Header from '@/components/Header';
import { gsap } from 'gsap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainRef.current) {
      const animate = gsap.fromTo(
        mainRef.current,
        { opacity: 0, y: 20, willChange: 'opacity, transform' },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.3, 
          ease: 'power2.out',
          onComplete: () => { mainRef.current!.style.willChange = 'auto'; }
        }
      );
      // Return a cleanup function that returns void
      return () => {
        animate.kill();
      };
    }
    return undefined; // Return undefined if no ref
  }, [children]);

  return (
    <html lang="en" data-theme="theme1">
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <div ref={mainRef} className="flex-grow">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}