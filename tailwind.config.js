/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
    fontFamily: {
      lato: ["Lato", "sans-serif"],
      sans: ["Proxima Nova"],
      jakarta: ["Plus Jakarta Sans", "sans-serif"],
    },
    backgroundImage: {
      "hero-card":
        "url('/public/images/herocard.png')",
    },
  },
  plugins: [],
}


