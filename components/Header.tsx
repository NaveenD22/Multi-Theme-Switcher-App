'use client';

import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  const pathname = usePathname();

  const handleThemeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value as 'theme1' | 'theme2' | 'theme3';
    if (['theme1', 'theme2', 'theme3'].includes(value)) {
      setTheme(value);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-header text-header-foreground px-4 py-3 shadow-md z-50">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link href="/" className="text-2xl font-bold" aria-label="Store Home">
          Store
        </Link>
        <nav className="flex flex-col sm:flex-row gap-4" aria-label="Main navigation">
          <Link
            href="/"
            className={`text-base ${pathname === '/' ? 'font-bold' : ''}`}
            aria-current={pathname === '/' ? 'page' : undefined}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`text-base ${pathname === '/about' ? 'font-bold' : ''}`}
            aria-current={pathname === '/about' ? 'page' : undefined}
          >
            About
          </Link>
          <Link
            href="/contact"
            className={`text-base ${pathname === '/contact' ? 'font-bold' : ''}`}
            aria-current={pathname === '/contact' ? 'page' : undefined}
          >
            Contact
          </Link>
        </nav>
        <select
          value={theme}
          onChange={handleThemeChange}
          className="p-2 rounded bg-primary text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Select Theme"
        >
          <option value="theme1">Theme 1</option>
          <option value="theme2">Theme 2</option>
          <option value="theme3">Theme 3</option>
        </select>
      </div>
    </header>
  );
}