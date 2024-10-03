const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#0563BB",
      secondary: "#eef7ff",
    },

    screens: {
      sm: "640px",
      md: "768px",
      lg: "1000px",
      xl: "1280px",
      "2xl": "1636px",
    },

    theme: {
      extend: {
        colors: {
          "indigo-950": "#0a58ca",
        },
      },
    },

    extend: {},
  },
  plugins: [],
});
