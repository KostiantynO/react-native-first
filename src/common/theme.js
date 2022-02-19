const colors = Object.freeze({
  primary: '#212121',
  accent: '#2196f3',
  aliceBlue: '#f0f8ff',
  black: '#000000',
  white: '#000000',
  lightestGrey: '#eee',
  lightGrey: 'lightgrey',
  green: 'green',
  red: 'red',
  lightPink: '#ffb6c1',
  transparent: 'transparent',
  royalBlue: '#4169e1',
});

export const theme = Object.freeze({
  dark: {
    main: { fg: colors.aliceBlue, bg: colors.primary },
  },
  // light: {main: {fg:, } },

  colors,
});
