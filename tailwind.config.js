/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "custom-hover": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "custom-default": "rgba(100, 100, 111, 0.23) 0px 7px 29px 0px",
      },
      screens:{
        'xs':{'max':'375px'},
      }
    },
  },
  plugins: [],
};
