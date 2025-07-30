import { createContext, useEffect, useMemo, useState } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export interface ThemeContextProps {
  theme: 'theme1' | 'theme2' | 'theme3';
  setTheme: (theme: 'theme1' | 'theme2' | 'theme3') => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: 'theme1',
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<'theme1' | 'theme2' | 'theme3'>('theme1');
  const debouncedSetTheme = useDebounce((newTheme: 'theme1' | 'theme2' | 'theme3') => {
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  }, 300);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as 'theme1' | 'theme2' | 'theme3' | null;
    if (savedTheme && ['theme1', 'theme2', 'theme3'].includes(savedTheme)) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  const handleSetTheme = (newTheme: 'theme1' | 'theme2' | 'theme3') => {
    setTheme(newTheme);
    debouncedSetTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};