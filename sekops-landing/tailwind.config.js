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
    extend: {
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
