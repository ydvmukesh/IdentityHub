import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Centers the container by adding margin auto
        padding: '1rem', // Adds padding to the container
        screens: {
          sm: '600px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: 'var(--primary)', // Default primary color (blue-600)
      
        },
        secondary: {
          DEFAULT: 'var(--secondary)', // Default secondary color (yellow-400)
      
        },
       
        slate: {
          300: '#CAD1E9', // Override text-slate-300 color
          900: '#0e0c15', // Override text-slate-300 color
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
