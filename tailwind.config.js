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
        "brand-blue-accent": "#0EA5E9",
        "brand-green-sage": "#A3B18A",
      },
      fontFamily: {
        sans: [
          'Sofia Pro',
          'Plus Jakarta Sans',
          'Inter',
          'system-ui',
          '-apple-system',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
          sofia: ["'Sofia Pro'", 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
