
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Nature theme colors
				nature: {
					forest: '#2D5016',      // Deep forest green
					leaf: '#4A7C59',        // Rich leaf green
					sage: '#87A96B',        // Sage green
					earth: '#8B4513',       // Earth brown
					bark: '#654321',        // Tree bark
					sky: '#87CEEB',         // Sky blue
					water: '#4682B4',       // Water blue
					sunset: '#FF6B35',      // Sunset orange
					dawn: '#FFD700',        // Dawn yellow
					mist: '#F0F8FF',        // Misty white
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				// Nature animations
				'leaf-float': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(5deg)' }
				},
				'tree-grow': {
					'0%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
					'100%': { transform: 'scaleY(1)', transformOrigin: 'bottom' }
				},
				'vine-grow': {
					'0%': { width: '0%' },
					'100%': { width: '100%' }
				},
				'water-flow': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'sun-rise': {
					'0%': { transform: 'translateY(100px)', opacity: '0' },
					'100%': { transform: 'translateY(0px)', opacity: '1' }
				},
				'birds-fly': {
					'0%': { transform: 'translateX(-100px) translateY(0px)' },
					'50%': { transform: 'translateX(50vw) translateY(-20px)' },
					'100%': { transform: 'translateX(100vw) translateY(0px)' }
				},
				'gentle-sway': {
					'0%, 100%': { transform: 'rotate(-2deg)' },
					'50%': { transform: 'rotate(2deg)' }
				},
				'fade-in-up': {
					'0%': { opacity: '0', transform: 'translateY(30px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.8)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				}
			},
			animation: {
				'leaf-float': 'leaf-float 6s ease-in-out infinite',
				'tree-grow': 'tree-grow 2s ease-out',
				'vine-grow': 'vine-grow 3s ease-out',
				'water-flow': 'water-flow 8s linear infinite',
				'sun-rise': 'sun-rise 1s ease-out',
				'birds-fly': 'birds-fly 12s linear infinite',
				'gentle-sway': 'gentle-sway 4s ease-in-out infinite',
				'fade-in-up': 'fade-in-up 0.8s ease-out',
				'scale-in': 'scale-in 0.6s ease-out'
			},
			backgroundImage: {
				'forest-gradient': 'linear-gradient(135deg, #2D5016 0%, #4A7C59 50%, #87A96B 100%)',
				'sky-gradient': 'linear-gradient(180deg, #87CEEB 0%, #FFD700 100%)',
				'sunset-gradient': 'linear-gradient(180deg, #FF6B35 0%, #FFD700 50%, #87CEEB 100%)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
