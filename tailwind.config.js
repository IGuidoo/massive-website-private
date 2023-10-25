const typographyPlugin = require('@tailwindcss/typography')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,md}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.5rem' }],
      '3xl': ['2rem', { lineHeight: '2.5rem' }],
      '4xl': ['2.5rem', { lineHeight: '3rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      gridTemplateColumns: {
        "34": "repeat(34, minmax(0, 1fr))"
      },
      screens: {
        "3xl" : "1536px"
      },
      maxWidth: {
        '8xl': '88rem',
      },
      width: {
        "88" : "22rem",
      },
      padding: {
        "3.5" : "0.875rem",
        "13.5" : "3.375rem",
        "11": "44px",
        "15" : "60px",
        "30" : "120px",	
        "36" : "144px",	
      },
      margin: {

        "15" : "60px",
        "23" : "92px",
        "36" : "144px",	
      },
      borderRadius: {
        "4xl" : "32px"
      },
      borderWidth: {
        "1.5" : "1.5px",
        "3" : "3px"
      },
      gap:{
        "1.4" : "6px"
      },
      colors: {
        "background": {
          100: "#F9FAFB"
        },
        "primary": {
          50: "#faf5ff",
          100: "#f3e8ff",
          200: "#e9d5ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          800: "#6b21a8",
          900: "#581c87",
          950: "#3b0764"
        },
        "secondary": {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712"
        },      
      },
      backgroundImage: {
        
      },
      transitionProperty: {
        'opacity-transform': 'opacity, transform',
      },
      transitionDuration: {
        '100': '0.1s',
        '400': '0.4s'
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [
    typographyPlugin,
    function ({ addUtilities }) {
      const newUtilities = {
        '.text-gradient-primary': {
          background: 'var(--Cool, linear-gradient(90deg, #6366F1 0%, #9756FF 100%, #8B5CF6 100%))',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.gradient-primary-100': {
          background: 'linear-gradient(90deg, rgba(99, 102, 241, 0.15) 0%, rgba(151, 86, 255, 0.15) 100%, rgba(139, 92, 246, 0.15) 100%)',
        },
        // werkt niet?
        'gradient-primary' : {
          background: 'linear-gradient(90deg, #6366F1 0%, #9756FF 100%, #8B5CF6 100%))'
        },
      }
      addUtilities(newUtilities, ['responsive', 'hover', 'group-hover'])
    }
  ],
}
