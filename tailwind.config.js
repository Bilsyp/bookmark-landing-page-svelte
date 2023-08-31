/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        Very_Dark_Blue: "hsl(229, 31%, 21%)",
        Soft_Blue: "hsl(231, 69%, 60%)",
        Soft_Red: "hsl(0, 94%, 66%)",
        Grayish_Blue: "hsl(229, 8%, 60%)",
      },
      screens: {
        tablet: "578px",
        desktop: "1024px",
        wide: "1350px",
      },
    },
  },
  plugins: [],
};
