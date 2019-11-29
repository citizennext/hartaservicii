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
  fontSizes: [8, 14, 16, 18, 22, 26, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  breakpoints: ['40em', '56em', '64em'],
  buttons: {
    primary: {
      color: 'text',
      bg: 'secondary',
      borderRadius: '50%',
      '&:hover': {
        bg: 'text',
      },
    },
    secondary: {
      color: 'background',
      borderRadius: 30,
      bg: 'secondary',
      width: '326px',
      height: '50px',
      position: 'relative',
    },
  },
  text: {
    caps: {
      textTransform: 'uppercase',
    },
    button: {
      fontWeight: 'body',
      fontSize: 18,
      margin: 'auto',
      font: 'heading',
      color: 'text',
    },
  },
}
