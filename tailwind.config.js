/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        main_text: "#000",
        sub_text: "#374151",
      },
    },
    fontFamily: {
      boxed: ["BoxedRound", "sans-serif"],
      calibri: ["Calibri", "sans-serif"],
      quan: ["Quan", "sans-sarif"],
      transformers: ["Transformer", "sans-sarif"],
      orbitron: ["Orbitron", "sans-sarif"],
      body: ["Calibri", "BoxedRound", "Inter", "Quan", "sans-serif"],
    },
  },
  plugins: [],
};
