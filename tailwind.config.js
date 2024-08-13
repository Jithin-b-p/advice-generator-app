/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        custNeutral: {
          100: "hsl(var(--clr-neutral-100))",
          200: "hsl(var(--clr-neutral-200))",
          300: "hsl(var(--clr-neutral-300))",
        },

        primary: {
          lightCyan: "hsl(var(--clr-primary-light-cyan))",
          neonGreen: "hsl(var(--clr-primary-neon))",
        },
      },
    },
  },
  plugins: [],
};
