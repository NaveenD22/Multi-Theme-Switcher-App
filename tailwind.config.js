/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme 1: Minimalist
        'theme1-background': '#f9fafb',
        'theme1-foreground': '#1f2937',
        'theme1-header': '#ffffff',
        'theme1-header-foreground': '#1f2937',
        'theme1-primary': '#3b82f6',
        'theme1-primary-foreground': '#ffffff',
        'theme1-card': '#ffffff',
        // Theme 2: Dark Mode
        'theme2-background': '#1f2937',
        'theme2-foreground': '#f9fafb',
        'theme2-header': '#111827',
        'theme2-header-foreground': '#f9fafb',
        'theme2-primary': '#1d4ed8',
        'theme2-primary-foreground': '#ffffff',
        'theme2-card': '#374151',
        // Theme 3: Colorful
        'theme3-background': '#fef3c7',
        'theme3-foreground': '#7c2d12',
        'theme3-header': '#7c2d12',
        'theme3-header-foreground': '#fef3c7',
        'theme3-primary': '#ea580c',
        'theme3-primary-foreground': '#ffffff',
        'theme3-card': '#ffedd5',
        // Dynamic theme variables
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        header: 'var(--header)',
        'header-foreground': 'var(--header-foreground)',
        primary: 'var(--primary)',
        'primary-foreground': 'var(--primary-foreground)',
        card: 'var(--card)',
      },
      fontFamily: {
        'theme1': ['"Open Sans"', 'sans-serif'],
        'theme2': ['"Lora"', 'serif'],
        'theme3': ['"Pacifico"', 'cursive'],
        base: 'var(--font-family)',
      },
      fontSize: {
        base: ['1rem', { lineHeight: '1.6' }],
        'theme2-base': ['1.1rem', { lineHeight: '1.6' }],
        'theme3-base': ['1.2rem', { lineHeight: '1.6' }],
      },
      spacing: {
        'theme1-unit': '1rem',
        'theme2-unit': '1.5rem',
        'theme3-unit': '2rem',
      },
      borderRadius: {
        'theme-unit': '0.25rem',
      },
    },
  },
  plugins: [],
};