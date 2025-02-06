/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ["primary-blue"]: "#0B253A",
        ["lighter-blue"]: "#0e2f4a",
        ["border-blue"]: "#113a5c",
        ["secondary-blue"]: "#39657E",
        ["orange"]: "#B74F2B",
        ["dark-orange"]: "#964023",
        ["light-blue"]: "#539DB3",
        ["gray"]: "#9CA3AF",
        ["light-gray"]: "#D1D5DB",
        ["dark-gray"]: "#0B253A",
      }
    },
  },
  plugins: [],
}