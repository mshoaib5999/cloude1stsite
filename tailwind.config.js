/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkClass: "dark",
  theme: {
    extend: {
      colors: {
        bg: "hsl(var(--bg))",
        surface: "hsl(var(--surface))",
        "surface-hover": "hsl(var(--surface-hover))",
        "text-primary": "hsl(var(--text))",
        muted: "hsl(var(--muted))",
        stroke: "hsl(var(--stroke))",
        accent: "hsl(var(--accent))",
        amber: {
          400: "#FBBF24",
          500: "#F59E0B",
          600: "#D97706",
        }
      },
      fontFamily: {
        body: ["Inter", "sans-serif"],
        display: ["Instrument Serif", "serif"],
      },
      animation: {
        'scroll-down': 'scroll-down 1.5s ease-in-out infinite',
        'role-fade-in': 'role-fade-in 0.4s ease-out forwards',
        'gradient-shift': 'gradient-shift 6s ease infinite',
      }
    },
  },
  plugins: [],
}
