import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			currentColor: 'currentColor',
			columbiablue: '#C9D5E1',
			darkgrayishblue: '#48556A',
			desaturatedblue: '#6E8098',
			grayishblue: '#9DAEC2',
			lightgrayishblue: '#ECF2F8',
			white: '#FFFFFF'
		},
		extend: {
			fontFamily: {
				manrope: ['Manrope Variable', 'sans-serif']
			}
		}
	},

	plugins: []
} satisfies Config;
