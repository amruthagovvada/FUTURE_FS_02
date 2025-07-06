
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      minibayPurple: "#7e22ce",
      minibayPink: "#ec4899",
    },
    },
  },
  plugins: [],
};
