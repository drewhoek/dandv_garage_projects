module.exports = {
  content: [
    // paths to your files
  ],
  theme: {
    extend: {
      // Define custom colors based on the color scheme in the image
      colors: {
        'dark-brown': '#3D2C29',
        'light-brown': '#D3BBA8',
        'cream': '#F5F5F5',
        'custom-black': '#333333',
      },
      // Define a custom font if it's different from Tailwind's default
      fontFamily: {
        'display': ['YourCustomFont', 'sans-serif'],
      },
      // Use custom spacing to match the layout
      spacing: {
        '22': '5.5rem', // for example, adjust as needed
      },
      // Custom box shadows to match any shadows in the image
      boxShadow: {
        'custom': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      // Custom border-radius for any elements (e.g., buttons, cards)
      borderRadius: {
        'custom': '0.5rem',
      },
      // Other customizations like typography sizes, line heights, etc.
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.custom-black'),
            h1: {
              fontSize: '1.5rem', // Adjust based on your design
              fontWeight: '700',
            },
            h2: {
              fontSize: '1.25rem', // Adjust based on your design
              fontWeight: '600',
            },
            // Other heading styles
          },
        },
      }),
      // Custom breakpoints for responsive design if needed
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [
    // Include plugins if you're using any, like forms or typography
    // ...
  ],
};
