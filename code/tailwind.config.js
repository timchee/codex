/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '640px',
      // => @media (max-width: 640px) { ... }
      

      'md': '768px',
      // => @media (max-width: 768px) { ... }

      'lg': '1024px',
      // => @media (max-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (max-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (max-width: 1536px) { ... }
  },
  plugins: [],
}}
