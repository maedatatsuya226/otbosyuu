/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          '"Zen Maru Gothic"',
          '"Hiragino Maru Gothic ProN"',
          '"Yu Gothic"',
          'Meiryo',
          'sans-serif',
        ],
      },
      colors: {
        paper: '#fff8ec',
        ink: '#2f3b3f',
        ocean: '#62b6c7',
        mint: '#bde7d7',
        lemon: '#fee68a',
        coral: '#f5a48b',
        leaf: '#72b779',
      },
      boxShadow: {
        sketch: '6px 7px 0 rgba(60, 74, 79, 0.16)',
      },
    },
  },
  plugins: [],
};
