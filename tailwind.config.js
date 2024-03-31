/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

	theme: {
		extend: {
			colors: {
				"black-primary": "#161513",
				"black-secondary": "#1C1C22",
				"white-primary": "#F0F2F5",
				"white-secondary": "#FFFFFF",
				"gradient-1": "#B16CEA",
				"gradient-2": "#FF5E69",
				"gradient-3": "#FF8A56",
				"gradient-4": "#FFA84B",
			},
		},
	},
	plugins: [],
}
