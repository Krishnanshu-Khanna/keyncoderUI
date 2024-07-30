/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	darkMode: "class",
	theme: {
		extend: {
			boxShadow: {
				custom: "0 0 10px 2.5px rgba(255, 115, 0, 0.5)",
			},
			fontFamily: {
				sans: ["ui-sans-serif", "system-ui"],
				serif: ["ui-serif", "Georgia"],
				mono: ["ui-monospace", "SFMono-Regular"],
				display: ["Oswald"],
				body: ['"Open Sans"'],
				roboto: ['"Roboto"'],
			},
			screens: {
				"small": "830px",
				"medium":"1000px"
			},
		},
	},
	plugins: [],
};


