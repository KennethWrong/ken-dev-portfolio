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
  			background: 'var(--background)',
  			foreground: 'var(--foreground)',
			greenLight: '#4B6464',
			greenDark: '#1C3C3C'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			'marquee': {
			  '0%': { transform: 'translateX(0%)' },
			  '100%': { transform: 'translateX(-100%)' },
			},
			'marquee2': {
				'0%': { transform: 'translateX(100%)' },
				'100%': { transform: 'translateX(0%)' },
			},
			'slideUp': {
				'0%': { transform: 'translateY(15%)', opacity: '0' },
				'100%': { transform: 'translateY(0)', opacity: '1' },
			},
			'scaleUp': {
				'0%': { transform: 'scale(1)' },
				'100%': { transform: 'scale(1.1)' },
			  },
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'marquee': 'marquee 25s linear infinite',
			'marquee2': 'marquee2 25s linear infinite',
			'slideUp': 'slideUp 0.5s ease-out',
			'scaleUp': 'scaleUp 0.3s ease-in-out',
  		},
		height: {
		'40vh': '40vh',
		'50vh': '50vh',
		'70vh': '70vh',
		'100vh': '100vh',
		'300': '300',
		'200': '200',
		'250': '250',
		'225': '225',
		},
		fontSize: {
		'2xs': '0.625rem',
		'3xs': '0.5rem',
		'10xl': '20.87rem',
		},
		fontFamily: {
			Montserrat: "Montserrat",
			Playfiar: "Playfair"
		}
		
  	}
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
} satisfies Config;
