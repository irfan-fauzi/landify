/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-mobile': "url('/img/bg_mobile.png')"
      },
    },
    fontFamily: {
      'Inter': ['Inter', 'sans-serif']
    }
  },
  plugins: [],
};
