module.exports = {
  purge: {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
  theme: {
    colors: {
      transparent: 'transparent',
      black: '#3a3a3a',
      white: '#ffffff',
      grey: '#E5E5E5',
      celeste: '#6FBBB7',
      leaf: '#CEE6C1',
      leaf2: '#CDE5C0',
      brown: '#877272',
      lightbrown: '#C4C3C3',
      snow: '#EDF7EF',
      burg: '#978585',
      error: '#cc0000',
      link: '#1C847E',
    },
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
    },
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    listStyleType: {
      none: 'none',
      disc: 'disc',
      decimal: 'decimal',
    },
    extend: {
      margin: {
        '36': '9rem',
        '1/4': '25%',
      },
      borderWidth: {
        '6': '6px',
      },
      spacing: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
      },
      maxWidth: {
        screen: '100vw',
        gridt: '717px',
        griddw: '1206px',
        gridd: '1036px',
        full: '100%',
      },
      inset: {
        '1/4': '25%',
      },
      fontSize: {
        '1xl': '1.375rem',
        '3xl': '1.625rem',
        '3xxl': '1.875rem',
      },
      fontFamily: {
        display: ['Montserrat', 'sans-serif'],
        body: ['KoHo', 'sans-serif'],
      },
    },
  },
  variants: {},
  plugins: [],
};
