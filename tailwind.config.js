/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "gray": "#161b1e",
      "blue": "#0d98f0", 
      "blue-20": "#0d98f016",
      "blue-40": "#0d98f040",
      "white": "#f5f5f5",
      "white-20": "#f5f5f5cc",
      "transparent": "transparent",
    },
    screens: {
      'xs': '450px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

