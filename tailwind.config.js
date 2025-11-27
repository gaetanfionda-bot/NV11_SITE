/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        nvred: "#cc1010",
        nvblack: "#000000",
      },
    },
  },
  plugins: [],
};
