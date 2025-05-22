module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        'xs': '500px'
      },
      colors: {
        brand: {
          blue1: '#070e40',
          blue2: '#4A90E2',
        },
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        slow: 'spin 55s linear infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};
