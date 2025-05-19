/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue-dark": "#2C3E50",
        "brand-beige-light": "#FAF3E0",
        "brand-orange-accent": "#E67E22",
        "brand-green-sage": "#A3B18A",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
