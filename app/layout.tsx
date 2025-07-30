'use client';

import { useContext, useEffect, useRef } from 'react';
import { ThemeContext, ThemeProvider } from '@/context/ThemeContext';
import '@/styles/globals.css';
import Header from '@/components/Header';
import { gsap } from 'gsap';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const mainRef = useRef<HTMLDivElement>(null);
  const { theme } = useContext(ThemeContext);

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
      return () => {
        animate.kill();
      };
    }
    return undefined;
  }, [theme]);
const handleLinkLoad = (event: React.SyntheticEvent<HTMLLinkElement>) => {
    const linkElement = event.currentTarget as HTMLLinkElement;
    linkElement.media = 'all';
  };
  return (
    <html lang="en" data-theme={theme}>
      <head>
        <link rel="stylesheet" href="/styles/globals.css" media="print" onLoad={handleLinkLoad} /> 
      </head>
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <div ref={mainRef} className="flex-grow mt-[12rem] sm:mt-[4rem]">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}