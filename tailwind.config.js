/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      margin: {
        "mb-22": "84px",
      },
      height: {
        "h-500": "500px",
      },
    },
  },
  plugins: [],
};
