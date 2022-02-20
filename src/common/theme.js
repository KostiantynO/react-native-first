const colors = Object.freeze({
  primary: '#212121',
  accent: '#2196f3',
  aliceBlue: '#f0f8ff',
  black: '#000000',
  white: '#000000',
  lightestGrey: '#eee',
  lighterGrey: '#aaa',
  lightGrey: 'lightgrey',
  darkerGray: '#61dafb',
  green: '#00ff00',
  red: '#ff0000',
  lightPink: '#ffb6c1',
  transparent: 'transparent',
  royalBlue: '#4169e1',
});

const fonts = Object.freeze({
  roboto: { regular: 'Roboto-Regular', bold: 'Roboto-Bold' },
  zapfino: 'Zapfino',
});

export const theme = Object.freeze({
  dark: {
    main: { fg: colors.aliceBlue, bg: colors.primary },
  },
  // light: {main: {fg:, } },

  fonts,
  colors,
});
