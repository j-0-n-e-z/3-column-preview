/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
	content: ['./dist/**/*.{html,js}'],
	theme: {
		extend: {
			colors: {
				brightOrange: 'hsl(31, 77%, 52%)',
				darkCyan: 'hsl(184, 100%, 22%)',
				veryDarkCyan: 'hsl(179, 100%, 13%)',
				transparentWhite: 'hsla(0, 0%, 100%, 0.75)',
				veryLightGray: 'hsl(0, 0%, 95%)'
			},
			fontFamily: {
				LexendDeca: ['Lexend Deca', ...defaultTheme.fontFamily.sans],
				BigShouldersDisplay: [
					'Big Shoulders Display',
					...defaultTheme.fontFamily.sans
				]
			}
		}
	},
	plugins: []
}
