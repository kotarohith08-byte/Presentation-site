/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cinema-bg': '#050509',
        'cinema-card': 'rgba(10, 16, 32, 0.75)',
        'cinema-cyan': '#00f0ff',
        'cinema-purple': '#7000ff',
      },
      fontFamily: {
        orbitron: ['Orbitron', 'sans-serif'],
        'mono-code': ['"JetBrains Mono"', 'Consolas', 'monospace'],
        poppins: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
