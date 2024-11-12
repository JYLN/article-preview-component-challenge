import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			columbiablue: '#C9D5E1',
			darkgrayishblue: '#48556A',
			desaturatedblue: '#6E8098',
			grayishblue: '#9DAEC2',
			lightgrayishblue: '#ECF2F8',
			white: '#FFFFFF'
		},
		extend: {
			boxShadow: {
				card: '0 2.5rem 2.5rem -0.625rem var(--tw-shadow-color, rgba(0, 0, 0, 0.15))',
				tooltip: '0 0.625rem 0.625rem 0 var(--tw-shadow-color, rgba(0, 0, 0, 0.15))'
			},
			fontFamily: {
				manrope: ['Manrope Variable', 'sans-serif']
			},
			transitionProperty: {
				colors:
					'color, background-color, border-color, text-decoration-color, fill, stroke, outline-color'
			}
		}
	},

	plugins: []
} satisfies Config;
