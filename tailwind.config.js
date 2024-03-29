/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/feature/**/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('/images/hero-bg.png')",
      },
      fontFamily: {
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      boxShadow: {
        button: "0px 0px 68px 7px rgba(5, 150, 105, 0.4)",
      },
    },
  },
  plugins: [],
};
