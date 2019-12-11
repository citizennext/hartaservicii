import { background } from 'styled-system'

export default {
  colors: {
    text: '#000',
    background: '#fff',
    primary: '#978585',
    secondary: '#6FBBB7',
    accent: '#CEE6C1',
    muted: '#C3C3C3',
    light: '#EDF7EF',
    dark: '#877272',
  },
  fonts: {
    body: 'KoHo, sans-serif',
    heading: 'Montserrat, sans-serif',
  },
  fontWeights: {
    body: 400,
    heading: 700,
    headingSemi: 500,
    bold: 700,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  letterSpacing: {
    button: '0.1em',
  },
  fontSizes: [8, 14, 16, 18, 22, 26, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 20, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '56em', '64em'],
  buttons: {
    primary: {
      color: 'text',
      bg: 'background',
      display: 'flex',
      minWidth: '170px',
      height: 28,
      borderRadius: 14,
      padding: 1,
      '&:hover': {
        bg: 'accent',
      },
    },
    alternative: {
      color: 'text',
      bg: 'light',
      display: 'flex',
      minWidth: '170px',
      height: 28,
      borderRadius: 14,
      padding: 1,
      '&:hover': {
        bg: 'accent',
      },
    },
    more: {
      color: 'secondary',
      bg: 'light',
      display: 'flex',
      height: 38,
      width: 38,
      borderRadius: 19,
      padding: 1,
      '&:hover': {
        bg: 'accent',
      },
    },
    secondary: {
      color: 'background',
      borderRadius: 25,
      bg: 'secondary',
      width: '326px',
      height: '50px',
      padding: 2,
      display: 'flex',
      '&:hover': {
        bg: 'accent',
      },
    },
    filter: {
      color: 'secondary',
      borderRadius: 25,
      bg: 'light',
      width: '270px',
      height: '50px',
      padding: '0px',
      display: 'flex',
      '&:hover': {
        bg: 'accent',
      },
    },
  },
  text: {
    body: {
      fontFamily: 'body',
      fontSize: 3,
      py: 3,
    },
    caps: {
      textTransform: 'uppercase',
    },
    // heading: {
    //   fontFamily: 'heading',
    //   fontWeight: 'heading',
    //   lineHeight: 'heading',
    // },
    button: {
      fontWeight: 'headingSemi',
      fontSize: 18,
      margin: 'auto',
      fontFamily: 'heading',
      color: 'text',
    },
    label: {
      fontWeight: 'body',
      fontSize: 16,
      margin: 'auto',
      fontFamily: 'heading',
      color: 'text',
    },
    details: {
      fontWeight: 'bold',
      alignItems: 'center',
      letterSpacing: 'button',
      textTransform: 'uppercase',
      fontSize: 14,
      fontFamily: 'heading',
      color: 'text',
      padding: '2px',
    },
  },
  styles: {
    h2: { fontWeight: 'headingSemi', fontSize: 22, fontFamily: 'heading', color: 'text' },
  },
  layout: {
    header: {
      // color: 'white',
      backgroundColor: 'background',
    },
    footer: {
      color: 'light',
      backgroundColor: 'primary',
    },
  },
  cards: {
    primary: {
      px: 4,
      mx: -4,
      backgroundColor: 'light',
      height: 'auto',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  images: {
    hero: {
      width: ['375px', '870px'],
      height: ['390px', '500px'],
    },
  },
  forms: {
    input: {
      search: {
        backgroundColor: 'background',
        border: '6px solid',
        borderColor: 'primary',
        boxShadow: '0px 0px 60px rgba(151, 133, 133, 0.6)',
        borderRadius: '60px',
      },
    },
  },
}
