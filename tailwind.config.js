/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "500px",
      md: "640px",
      base: "800px",
      lg: "1142px",
      xl: "1280px",
      "2xl": "1580px",
    },
    extend: {
      gridTemplateColumns: {
        logos: "repeat(auto-fit, minmax(50px, 1fr))",
        "why-sekops": "repeat(auto-fit, minmax(500px, 1fr))",
        "why-sekops-sm": "repeat(auto-fit, minmax(300px, 1fr))",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },

      backgroundColor: {
        blue: {
          primary: withOpacity("--blue-primary-bg"),
        },
        orange: {
          primary: withOpacity("--orange-primary-bg"),
          secondary: withOpacity("--orange-secondary-bg"),
        },
      },
      textColor: {
        black: {
          primary: withOpacity("--text-black"),
        },
        gray: {
          primary: withOpacity("--text-gray"),
        },
        blue: {
          primary: withOpacity("--blue-primary-bg"),
        },
      },
      borderColor: {
        black: {
          primary: withOpacity("--border-black"),
        },
      },
    },
  },
  plugins: [],
};
