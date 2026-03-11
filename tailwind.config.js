/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        sans: ['"Outfit"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#0F1729',
        muted: '#80838e',
        'muted-2': '#3d4250',
        teal: { DEFAULT: '#06b6d4', light: '#0ea5e9', dark: '#0891b2' },
      },
    },
  },
  plugins: [],
}
