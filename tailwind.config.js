/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{html,js,ts,jsx,tsx}", // Adjust paths based on your project structure
];
export const theme = {
  extend: {
    colors: {
      brand: "#1DA1F2",
      secondary: "#14171A",
    },
    spacing: {
      128: "32rem",
    },
    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },
  },
};
export const plugins = [
  require("@tailwindcss/forms"),
  require("@tailwindcss/typography"),
];
