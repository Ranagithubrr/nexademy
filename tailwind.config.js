import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#4858B4',
      },
      backgroundColor: {
        btnbg: '#4252B0',
      },
    },
  },
  plugins: [],
});
