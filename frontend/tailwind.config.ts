import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: "var(--background)",
				foreground: "var(--foreground)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			typography: (theme: (key: string) => string) => ({
				DEFAULT: {
					css: {
						color: theme("colors.foreground"),
						a: {
							color: theme("colors.blue.600"),
							"&:hover": {
								color: theme("colors.blue.500"),
							},
						},
						h1: {
							fontWeight: "700",
							color: theme("colors.foreground"),
						},
						h2: {
							fontWeight: "600",
							color: theme("colors.foreground"),
						},
						h3: {
							fontWeight: "500",
							color: theme("colors.foreground"),
						},
						ul: {
							listStyleType: "disc",
							paddingLeft: "1.5rem",
						},
						ol: {
							listStyleType: "decimal",
							paddingLeft: "1.5rem",
						},
						blockquote: {
							fontStyle: "italic",
							color: theme("colors.gray.500"),
							borderLeftColor: theme("colors.gray.300"),
							borderLeftWidth: "4px",
							paddingLeft: "1rem",
						},
						code: {
							backgroundColor: theme("colors.gray.100"),
							padding: "0.25rem 0.5rem",
							borderRadius: theme("borderRadius.sm"),
							color: theme("colors.red.500"),
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;
