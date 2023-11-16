/** @type {import('tailwindcss').Config} */
module.exports = {
	important: "#sdb-container",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {},
	plugins: [],
	corePlugins: {
		borderOpacity: false,
	},
};
