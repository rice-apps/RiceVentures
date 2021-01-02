module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
			sans: ["Avenir", "sans-serif"],
			serif: ["Avenir", "serif"],
		},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
