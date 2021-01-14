module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'teal-storm': '#D2E8E6',
        'navy': '#153463',
      }

    },
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
