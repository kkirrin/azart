/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './*.html',
  ],
  theme: {
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1280px',
      'xl': '1440px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'bg-black': '#1F1F1F;',
      'white': '#fff',
      'red': '#FF4539',
      'gray': '#CCC',
      'bg-form': '#373737;'
    },

    container: {
      padding: '20px',
      center: true
    },
    extend: {
      fontFamily: {
        'Inter_Regular': ['Inter-Regular', 'regular'],
      }
    }
  },
  plugins: [],
}

