// tailwind.config.js

module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/screens/**/*.{js,jsx,ts,tsx}",
    "./app/shared/**/*.{js,jsx,ts,tsx}",
    "./app/layouts/**/*.{js,jsx,ts,tsx}",
    "./app/components/**/*.{js,jsx,ts,tsx}",
    "./app/utils/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dprimary: "#019874",
        dgray: "#d9e6f2",
        dyellow: "#EFB110",
        dsky: "#017D98",
        dwhite: "#ffffff",
        dblack: "#000000",
      },
    },
  },
  plugins: [],
};
